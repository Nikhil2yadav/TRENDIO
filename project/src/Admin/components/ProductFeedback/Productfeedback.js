import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const Productfeedback = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getallthefeedback.php`
        );
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          setUsersData(response.data);
        } else {
          console.error("Invalid data format from API:", response.data);
          toast.error(response.data.error || "Error fetching feedback data");
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
        toast.error("Error fetching feedback");
      }
    };
    fetchFeedback();
  }, [usersData]);

  const toggleFeedbackStatus = async (feedbackId, currentStatus) => {
    try {
      const newStatus = currentStatus === "1" ? "0" : "1";
  
      const formData = new FormData();
      formData.append("feedbackid", feedbackId);
      formData.append("status", newStatus);
  
      const response = await axios.post(
        "http://localhost:8000/api/UpdateFeedbackStatus.php",
        formData
      );
  
      if (response.data.success) {
        // Update state directly
        setUsersData((prevData) =>
          prevData.map((feedback) =>
            feedback.feedbackid === feedbackId
              ? { ...feedback, activestatus: newStatus } // Use `newStatus` directly
              : feedback
          )
        );
  
        toast.success(newStatus === "1" ? "Feedback activated" : "Feedback deactivated");
      } else {
        toast.error("Failed to update feedback status");
      }
    } catch (error) {
      console.error("Error updating feedback status:", error);
      toast.error("Error updating feedback status");
    }
  };

  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.ProductName,
      sortable: true,
    },
    {
      name: "Product Image",
      cell: (row) => (
        <img
          src={`http://localhost:8000/api/Images/${row.Image1}`}
          alt={row.ProductName}
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
      ),
      sortable: false,
    },
    {
      name: "Buyer Name",
      selector: (row) => row.BuyerName,
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: "Feedback",
      selector: (row) => row.comment,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.activestatus || "Available",
      sortable: true,
      cell: (row) => (
        <button
          className={`btn ${row.activestatus === "1" ? "btn-success" : "btn-danger"}`}
          onClick={() => toggleFeedbackStatus(row.feedbackid, row.activestatus)}
        >
          {row.activestatus === "1" ? "Active" : "Inactive"}
        </button>
      ),
    },
    
  ];

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Feedback</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/seller/SellerHome">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Feedback</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h5 className="card-header">Feedback</h5>
        <div className="card-body">
          <DataTable columns={columns} data={usersData} pagination highlightOnHover />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Productfeedback;
