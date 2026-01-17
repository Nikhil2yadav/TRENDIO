  import React, { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import { CreditCard, Landmark } from "lucide-react";
  import DataTable from 'react-data-table-component';
  import axios from "axios";

  const Payment = () => {
    const [selectedPayment, setSelectedPayment] = useState("");
    const [isBlocking, setIsBlocking] = useState(false);
    const [totalAmount,setTotalAmount]=useState(0);
    const [orderProducts, setOrderProducts] = useState([]);
    const [formData, setFormData] = useState({
      cardNumber: "",
      cardholderName: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      accountName: "",
      accountNumber: "",
      bankName: "",
      routingNumber: "",
    });
    const [validation, setValidation] = useState({});
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const fetchOrders = async () => {
        const orderId = localStorage.getItem("orderId");
        // console.log(orderId)

        try {
          const response = await axios.get(`http://localhost:8000/api/ShowOrdertotalamount.php?orderId=${orderId}`);
          console.log("Order Data:", response.data);
          setTotalAmount(response.data[0].totalamount)
          setOrders(response.data); // Store the fetched orders
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };

      fetchOrders();
    }, []); // Runs once on component mount

    
    useEffect(() => {
      const fetchOrderProducts = async () => {
        try {
          const orderId = localStorage.getItem("orderId");

          if (!orderId) {
            alert("Order ID is missing.");
            return;
          }

          const response = await axios.get(
            `http://localhost:8000/api/ShowOrderDetaile.php?orderId=${orderId}`
          );

          console.log("API Response:", response.data.orderDetails); // Check the response

          if (response.data.orderDetails && Array.isArray(response.data.orderDetails) && response.data.orderDetails.length > 0) {
            setOrderProducts(response.data.orderDetails);
            console.log(orderProducts)
          } else {
            alert("No products found for this order.");
          }
        } catch (error) {
          console.error("Error fetching order products:", error);
          alert("Failed to fetch order products.");
        }
      };

      fetchOrderProducts();
    }, []); // Empty dependency array means it runs only once when the component mounts

    const handlePaymentMethodSelect = (method) => {
      setSelectedPayment(method);
      setIsBlocking(true);
      setFormData({
        cardNumber: "",
        cardholderName: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        accountName: "",
        accountNumber: "",
        bankName: "",
        routingNumber: "",
      });
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setIsBlocking(true);
    };
    
    // const validationForm = () => {
    //   const newError = {};
    
    //   // Card Payment Validation
    //   if (selectedPayment === "card") {
    //     if (!formData.cardNumber.trim()) {
    //       newError.cardNumber = "Card Number is required";
    //     } else if (!/^\d{16}$/.test(formData.cardNumber)) {
    //       newError.cardNumber = "Card Number must be exactly 16 digits";
    //     }
    
    //     if (!formData.cardholderName.trim()) {
    //       newError.cardholderName = "Cardholder Name is required";
    //     } else if (!/^[a-zA-Z\s]+$/.test(formData.cardholderName)) {
    //       newError.cardholderName = "Cardholder Name must contain only letters";
    //     }
    
    //     if (!formData.expiryMonth.trim()) {
    //       newError.expiryMonth = "Expiry Month is required";
    //     } else if (!/^(0[1-9]|1[0-2])$/.test(formData.expiryMonth)) {
    //       newError.expiryMonth = "Invalid Month";
    //     }
    
    //     if (!formData.expiryYear.trim()) {
    //       newError.expiryYear = "Expiry Year is required";
    //     } else if (!/^\d{4}$/.test(formData.expiryYear) || parseInt(formData.expiryYear) < new Date().getFullYear()) {
    //       newError.expiryYear = "Invalid Year";
    //     }
    
    //     if (!formData.cvv.trim()) {
    //       newError.cvv = "CVV is required";
    //     } else if (!/^\d{3}$/.test(formData.cvv)) {
    //       newError.cvv = "CVV must be 3 digits";
    //     }
    //   }
    
    //   // Bank Payment Validation
    //   if (selectedPayment === "bank") {
    //     if (!formData.accountName.trim()) {
    //       newError.accountName = "Account Name is required";
    //     }
    
    //     if (!formData.accountNumber.trim()) {
    //       newError.accountNumber = "Account Number is required";
    //     } else if (!/^\d+$/.test(formData.accountNumber)) {
    //       newError.accountNumber = "Account Number must be numeric";
    //     }
    
    //     if (!formData.bankName.trim()) {
    //       newError.bankName = "Bank Name is required";
    //     }
    
    //     if (!formData.routingNumber.trim()) {
    //       newError.routingNumber = "Routing Number is required";
    //     } else if (!/^\d+$/.test(formData.routingNumber)) {
    //       newError.routingNumber = "Routing Number must be numeric";
    //     }
    //   }
    
    //   console.log("Validation Errors:", newError);
    //   setValidation(newError);
    
    //   return Object.keys(newError).length === 0;
    // };
    const validationForm = () => {
      const errors = {};
    
      if (selectedPayment === "card") {
        if (!formData.cardNumber.trim()) {
          errors.cardNumber = "Card Number is required";
        } else if (!/^\d{16}$/.test(formData.cardNumber)) {
          errors.cardNumber = "Card Number must be exactly 16 digits";
        }
    
        if (!formData.cardholderName.trim()) {
          errors.cardholderName = "Cardholder Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(formData.cardholderName)) {
          errors.cardholderName = "Cardholder Name must contain only letters";
        }
    
        if (!formData.expiryMonth.trim()) {
          errors.expiryMonth = "Expiry Month is required";
        } else if (!/^(0[1-9]|1[0-2])$/.test(formData.expiryMonth)) {
          errors.expiryMonth = "Invalid Month";
        }
    
        if (!formData.expiryYear.trim()) {
          errors.expiryYear = "Expiry Year is required";
        } else if (!/^\d{4}$/.test(formData.expiryYear) || parseInt(formData.expiryYear) < new Date().getFullYear()) {
          errors.expiryYear = "Invalid Year";
        }
    
        if (!formData.cvv.trim()) {
          errors.cvv = "CVV is required";
        } else if (!/^\d{3}$/.test(formData.cvv)) {
          errors.cvv = "CVV must be 3 digits";
        }
      }
    
      if (selectedPayment === "bank") {
        if (!formData.accountName.trim()) {
          errors.accountName = "Account Name is required";
        }
    
        if (!formData.accountNumber.trim()) {
          errors.accountNumber = "Account Number is required";
        } else if (!/^\d+$/.test(formData.accountNumber)) {
          errors.accountNumber = "Account Number must be numeric";
        }
    
        if (!formData.bankName.trim()) {
          errors.bankName = "Bank Name is required";
        }
    
        if (!formData.routingNumber.trim()) {
          errors.routingNumber = "Routing Number is required";
        } else if (!/^\d+$/.test(formData.routingNumber)) {
          errors.routingNumber = "Routing Number must be numeric";
        }
      }
    
      setValidation(errors);
      
      return Object.keys(errors).length === 0; // Returns true if there are no errors
    };
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const isValid = validationForm(); // Call the validation function first

      setTimeout(() => {
        if (isValid) {
          console.log("Form Submitted Successfully"); // Your actual API call function
        } else {
          console.log("Validation Errors:", validation);
        }
      }, 0);

      try {
          const orderId = localStorage.getItem("orderId");
          const BuyerId = localStorage.getItem("buyerId");

          // Creating FormData object
          const formData = new FormData();
          formData.append("orderId", orderId);
          formData.append("BuyerId", BuyerId);
          formData.append("paymentMethod", selectedPayment);
          formData.append("amount", totalAmount);

          console.log("Sending data:", Object.fromEntries(formData.entries()));

          // Sending the FormData
          const response = await axios.post(
              "http://localhost:8000/api/InsertPayment.php",
              formData,
              { headers: { "Content-Type": "multipart/form-data" } }
          );

          console.log("API Response:", response.data);

          if (response.data.success === true) {
              alert("Payment successful! Redirecting...");
              navigate("/order-success"); // Uncomment if you want to navigate
          } else {
              alert("Payment failed: " + (response.data.error || "Unknown error"));
          }
      } catch (error) {
          console.error("Payment error:", error);
          alert("An error occurred while processing payment.");
      }
  };

    const handleBackToCart = async () => {
      if (!window.confirm("Are you sure you want to go back?")) return;

      try {
        const orderId = localStorage.getItem("orderId");
        if (!orderId) {
          alert("Order ID is missing.");
          return;
        }

        const response = await axios.get(
          `http://localhost:8000/api/DeleteOrderApi.php?orderId=${orderId}`
        );
        
        if (response.data.Order === "true") {
          setIsBlocking(false);
          navigate(-1);
        } else {
          alert("Order deletion failed.");
        }
      } catch (error) {
        alert("Failed to delete order.");
      }
    };

    const columns = [
      {
        name: "Image",
        selector: (row) => row.ProductImage,
        sortable: true,
        cell: (row) => (
          <img
            src={`http://localhost:8000/api/Images/${row.Image1}`}
            alt={row.productname}
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
        ),
      },
      { name: "Product Name", selector: (row) => row.ProductName, sortable: true },
      { name: "Total Amount", selector: (row) => row.subtotal, sortable: true },
      { name: "Quantity", selector: (row) => row.quantity, sortable: true },
      {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
        cell: (row) => (
          <span
            style={{
              color: row.status === "1" ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {row.status === "1" ? "Success" : "Pending"}
          </span>
        ),
      }

    ];

    return (
      <div className="container mt-4">
        <div className="card mb-4">
          <h5 className="card-header">Products</h5>
          <div className="card-body">
            <DataTable columns={columns} data={orderProducts} pagination highlightOnHover />
          </div>
        </div>

        <h2 className="text-center mb-4">Select Payment Method</h2>
        <div className="d-flex justify-content-center gap-3">
          <div
            className={`payment-option p-3 border rounded text-center ${
              selectedPayment === "creditCard" ? "border-primary bg-light" : ""
            }`}
            style={{ width: "48%", cursor: "pointer" }}
            onClick={() => handlePaymentMethodSelect("creditCard")}
          >
            <CreditCard size={30} className="mb-2" />
            <div>Credit/Debit Card</div>
          </div>
          <div
            className={`payment-option p-3 border rounded text-center ${
              selectedPayment === "bankTransfer" ? "border-primary bg-light" : ""
            }`}
            style={{ width: "48%", cursor: "pointer" }}
            onClick={() => handlePaymentMethodSelect("bankTransfer")}
          >
            <Landmark size={30} className="mb-2" />
            <div>Bank Transfer</div>
          </div>
        </div>
          <form className="mt-4" onSubmit={handleSubmit}>
          {selectedPayment === "creditCard" && (
            <div>
              <h4>Credit/Debit Card Details</h4>
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  className="form-control"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  maxLength="16"
                  placeholder="Card Number"
                />
              </div>
              {validation.cardNumber && <span>{validation.cardNumber}</span>}
              {/* <span className="text-danger">{validation.cardNumber}</span> */}
              <div className="mb-3">
                <label className="form-label">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  className="form-control"
                  value={formData.cardholderName}
                  onChange={handleChange}
                  placeholder="Card Holder Name"
                />
              </div>
              <span className="text-danger">{validation.cardholderName}</span>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Expiry Month</label>
                  <input
                    type="text"
                    name="expiryMonth"
                    className="form-control"
                    value={formData.expiryMonth}
                    onChange={handleChange}
                    maxLength="2"
                    placeholder="MM"
                  />
                </div>
              <span className="text-danger">{validation.expiryMonth}</span>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Expiry Year</label>
                  <input
                    type="text"
                    name="expiryYear"
                    className="form-control"
                    value={formData.expiryYear}
                    onChange={handleChange}
                    maxLength="4"
                    placeholder="YYYY"
                  />
                </div>
              <span className="text-danger">{validation.expiryYear}</span>
              </div>
              <div className="mb-3">
                <label className="form-label">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  className="form-control"
                  value={formData.cvv}
                  onChange={handleChange}
                  maxLength="4"
                  placeholder="CVV"
                />
              </div>
              {validation.cardNumber && <small className="text-danger">{validation.cardNumber}</small>}
{validation.cardholderName && <small className="text-danger">{validation.cardholderName}</small>}
{validation.expiryMonth && <small className="text-danger">{validation.expiryMonth}</small>}
{validation.expiryYear && <small className="text-danger">{validation.expiryYear}</small>}
{validation.cvv && <small className="text-danger">{validation.cvv}</small>}

            </div>
          )}

          {selectedPayment === "bankTransfer" && (
            <div>
              <h4>Bank Transfer Details</h4>
              <div className="mb-3">
                <label className="form-label">Account Holder Name</label>
                <input
                  type="text"
                  name="accountName"
                  className="form-control"
                  value={formData.accountName}
                  onChange={handleChange}
                  placeholder="Account Holder Name"
                />
              </div>
              <span className="text-danger">{validation.accountName}</span>
              <div className="mb-3">
                <label className="form-label">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  className="form-control"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  placeholder="Account Number"
                />
              </div>
              <span className="text-danger">{validation.accountNumber}</span>
              <div className="mb-3">
                <label className="form-label">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  className="form-control"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder="Bank Name"
                />
              </div>
              <span className="text-danger">{validation.bankName}</span>
              <div className="mb-3">
                <label className="form-label">Routing Number</label>
                <input
                  type="text"
                  name="routingNumber"
                  className="form-control"
                  value={formData.routingNumber}
                  onChange={handleChange}
                  placeholder="Routing Number"
                />
              </div>
              <span className="text-danger">{validation.routingNumber}</span>
            </div>
          )}

          {selectedPayment && (
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Submit Payment
            </button>
          )}
      </form>
        <div className="card-footer bg-light">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-muted">Order Total:</span>
              <span className="ms-2 fw-bold">{totalAmount}</span>
            </div>
            <div>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={handleBackToCart}
              >
                Back to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Payment;
