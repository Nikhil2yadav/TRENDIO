// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Orderproduct = () => {
//   const [orders, setOrders] = useState([]);
//   const buyerId = localStorage.getItem("buyerId"); // Get buyer ID from localStorage

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8000/api/GetBuyerOrders.php?BuyerId=${buyerId}`
//         );
//         setOrders(response.data);
//         console.log(response.data)
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, [buyerId]);

//   return (
//     <div className="container mt-4">
//       <h2>My Orders</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Product Name</th>
//             <th>Total Amount</th>
//             <th>Order Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.order_id}>
//               <td>{order.orderId}</td>
//               <td>{order.ProductName}</td>
//               <td>₹{order.subtotal}</td>
//               <td>{order.orderDate}</td>
//               <td>
//                 <span
//                   className={`badge ${
//                   order.delivery_status === "Pending"
//       ? "bg-warning"
//       : order.delivery_status === "Shipped"
//       ? "bg-primary"
//       : order.delivery_status === "Out for Delivery"
//       ? "bg-info"
//       : "bg-success"
//   }`}
//                 >
//                   {order.delivery_status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Orderproduct;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Orderproduct = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const buyerId = localStorage.getItem("buyerId"); // Get buyer ID from localStorage

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/GetBuyerOrders.php?BuyerId=${buyerId}`
        );
        setOrders(response.data);
        setFilteredOrders(response.data); // Initialize filtered orders
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [buyerId]);

  // Filtering Function
  useEffect(() => {
    let filtered = orders;

    // Filter by Date
    if (selectedDate) {
      filtered = filtered.filter(
        (order) => order.orderDate === selectedDate
      );
    }

    // Filter by Delivery Status
    if (selectedStatus) {
      filtered = filtered.filter(
        (order) => order.delivery_status === selectedStatus
      );
    }

    setFilteredOrders(filtered);
  }, [selectedDate, selectedStatus, orders]);

  return (
    <div className="container mt-4">
      <h2>My Orders</h2>

      {/* Filter Section */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">Filter by Date:</label>
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Filter by Status:</label>
          <select
            className="form-control"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Total Amount</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <tr key={order.order_id}>
                <td>{order.orderId}</td>
                <td>
                <img 
                src={`http://localhost:8000/api/Images/${order.Image1}`} 
                alt={order.ProductName} 
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                </td>
                <td>{order.ProductName}</td>
                <td>₹{order.subtotal}</td>
                <td>{order.orderDate}</td>
                <td>
                  <span
                    className={`badge ${
                      order.delivery_status === "Pending"
                        ? "bg-warning"
                        : order.delivery_status === "Shipped"
                        ? "bg-primary"
                        : order.delivery_status === "Out for Delivery"
                        ? "bg-info"
                        : "bg-success"
                    }`}
                  >
                    {order.delivery_status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orderproduct;
