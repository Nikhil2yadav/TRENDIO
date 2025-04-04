import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SellerHome = () => {
  const [totalproduct, setTotalproduct] = useState("");
  const [totalpendingorder, setTotalpendingorder] = useState("");
  const [totalshippingorder, setTotalshippingorder] = useState("");
  const [totaloutfordelivery, setTotaloutfordelivery] = useState("");
  const [totaldelivered, setTotaldelivered] = useState("");
  const [totalamount, setTotalAmount] = useState("");
  const SellerId = localStorage.getItem("userId");
  useEffect(() => {
    const totalproduct = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/college%20project/mini%20project/api/productcountasseller.php",
          { SellerId: SellerId },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );
        setTotalproduct(response.data.totalproduct);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Error fetching products");
      }
    };
    totalproduct();
  }, []);
  useEffect(() => {
    const totalpendingorder = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/college%20project/mini%20project/api/CountPendingorder.php",
          { SellerId: SellerId },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );
        setTotalpendingorder(response.data.totalorder);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Pending Order:", error);
        toast.error("Error fetching pending Orders");
      }
    };
    totalpendingorder();
  }, []);
  useEffect(() => {
    const totaldelivered = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/college%20project/mini%20project/api/CountDeliveredorder.php",
          { SellerId: SellerId },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );
        setTotaldelivered(response.data.totalorder);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Pending Order:", error);
        toast.error("Error fetching pending Orders");
      }
    };
    totaldelivered();
  }, []);
  useEffect(() => {
    const totalshippingorder = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/college%20project/mini%20project/api/Countshippingorder.php",
          { SellerId: SellerId },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );
        setTotalshippingorder(response.data.totalorder);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Pending Order:", error);
        toast.error("Error fetching pending Orders");
      }
    };
    totalshippingorder();
  }, []);
  useEffect(() => {
    const totaloutfordelivery = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/college%20project/mini%20project/api/Countoutfordeliveryorder.php",
          { SellerId: SellerId },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );
        setTotaloutfordelivery(response.data.totalorder);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Out for delivery Order:", error);
        toast.error("Error fetching Out for delivery  Orders");
      }
    };
    totaloutfordelivery();
  }, []);
  useEffect(() => {
    const totalamount = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/college%20project/mini%20project/api/GetTOtalAmountOfSeller.php",
          { SellerId: SellerId },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );
        setTotalAmount(response.data.totalsellerAmount);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Total Amount:", error);
        toast.error("Error fetching Total amount ");
      }
    };
    totalamount();
  }, []);
  const formattedAmount = parseFloat(totalamount).toFixed(2);
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="#" className="">
                    <FontAwesomeIcon
                      icon={faTachometerAlt}
                      className="nav-icon"
                    />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-4 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{totalproduct}</h3>
                  <p>Total Products</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <Link to="/seller/manageproduct" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>

            {/* ./col */}
            <div className="col-lg-4 col-6">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>{totalpendingorder}</h3>
                  <p>Pending Orders</p>
                </div>
                <div className="icon">
                  <i className="fas fa-clock " />
                  {/* <i className="ion fa-clock" /> */}
                </div>
                <Link to="/seller/PendingOrder" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>

            {/* ./col */}
            <div className="col-lg-4 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>{totalshippingorder}</h3>
                  <p>Shipping Order</p>
                </div>
                <div className="icon">
                  {/* <i className="ion ion-person-add" /> */}
                  <i className="fas fa-shipping-fast" />
                </div>
                <Link to="/seller/ShipingOrder" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>

            {/* ./col */}
            <div className="col-lg-4 col-6">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>{totaloutfordelivery}</h3>
                  <p>Out for Delivery</p>
                </div>
                <div className="icon">
                  <i className="ion ion-android-car" />
                </div>
                <Link
                  to="/seller/Out-for-Delivery"
                  className="small-box-footer"
                >
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="small-box bg-secondary">
                {" "}
                {/* Changed color to blue */}
                <div className="inner">
                  <h3>{totaldelivered}</h3>
                  <p>Delivered Order</p> {/* Changed text */}
                </div>
                <div className="icon">
                  <i className="fas fa-box-open" />{" "}
                  {/* Changed to delivered icon */}
                </div>
                <Link to="/seller/DeliveredOrder" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div
                className="small-box"
                style={{ backgroundColor: "#00b894", color: "white" }}
              >
                <div className="inner">
                  <h3>{formattedAmount}</h3>
                  <p>Total Amount</p>
                </div>
                <div className="icon">
                  <FaRupeeSign size={50} />
                </div>
                <Link to="/seller/Amount" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerHome;
