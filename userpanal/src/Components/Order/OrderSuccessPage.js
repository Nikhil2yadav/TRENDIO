import React, { useState, useEffect } from "react";
import axios from "axios";
import { CheckCircle, Star, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
export default function OrderSuccessPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const [reviews, setReviews] = useState({});
  const [submittedReviews, setSubmittedReviews] = useState({});

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const orderId = localStorage.getItem("orderId");

      if (!orderId) {
        setError("No order ID found.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8000/api/GetFullOrdeDetailes.php?orderId=${orderId}`
        );

        let data = response.data;
        console.log("API Response:", data);

        if (Array.isArray(data) && data.length > 0) {
          setOrders(Array.isArray(data[0]) ? data[0] : data);
        } else {
          setOrders([]);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load order details.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);

  const toggleReviewForm = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const handleStarClick = (itemId, rating) => {
    setReviews({
      ...reviews,
      [itemId]: { ...reviews[itemId], rating },
    });
  };

  const handleCommentChange = (itemId, comment) => {
    setReviews({
      ...reviews,
      [itemId]: { ...reviews[itemId], comment },
    });
  };

  const submitReview = (itemId) => {
    if (!reviews[itemId]?.rating) {
      alert("Please select a rating before submitting.");
      return;
    }

    console.log(`Review submitted for item ${itemId}:`, reviews[itemId]);
    setSubmittedReviews({ ...submittedReviews, [itemId]: true });
    setExpandedItem(null);
  };

  if (loading) return <p className="text-center">Loading order details...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;
  if (!orders.length)
    return <p className="text-center">No order data available.</p>;

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <div className="d-inline-block p-3 bg-success bg-opacity-10 rounded-circle mb-3">
          <CheckCircle size={50} className="text-success" />
        </div>
        <h1 className="display-5 fw-bold">Thank You for Your Order!</h1>
        <p className="lead">
          Your order has been received and is being processed.
        </p>
      </div>

      <div className="col-lg-8 mx-auto">
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-light d-flex justify-content-between align-items-center">
            <h3 className="mb-0">Order Details</h3>
            <span className="badge bg-success">Confirmed</span>
          </div>
          <div className="card-body">
            {orders.length > 0 && (
              <>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <p>
                      <strong>Order Number:</strong> {orders[0].orderId}
                    </p>
                    <p>
                      <strong>Order Date:</strong> {orders[0].date}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>Payment Method:</strong> {orders[0].paymentMethod}
                    </p>
                    <p>
                      <strong>Shipping Address:</strong>
                      {orders[0].Address}, {orders[0].City}, {orders[0].State},{" "}
                      {orders[0].Pincode}
                    </p>
                  </div>
                </div>

                <hr className="my-4" />
                <h4 className="mb-3">Items in Your Order</h4>

                {orders.map((item) => (
                  <div key={item.productId} className="card mb-3 border">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            src={`http://localhost:8000/api/Images/${item.Image1}`}
                            alt={item.productname}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="col-md-6">
                          <h5>{item.productname}</h5>
                          <p className="text-muted">
                            Size: {item.Size} | Quantity: {item.quantity}
                          </p>
                        </div>
                        <div className="col-md-4 text-end">
                          <p className="fw-bold">
                            ₹{parseFloat(item.subtotal).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <hr className="my-4" />

                <div>
                  <h4>Order Summary</h4>
                  {orders.map((order, index) => (
                    <p key={index}>
                      <strong>
                        Subtotal {orders.length > 1 ? `(${index + 1})` : ""}:
                      </strong>{" "}
                      ₹{parseFloat(order.subtotal).toFixed(2)}
                    </p>
                  ))}
                  <p>
                    <strong>Order Total:</strong> ₹
                    {parseFloat(
                      orders.reduce(
                        (total, order) => total + parseFloat(order.subtotal),
                        0
                      )
                    ).toFixed(2)}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/" className="btn btn-outline-primary w-50">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
