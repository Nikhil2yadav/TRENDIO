import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Form, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Checkout = () => {
  const [usersData, setUsersData] = useState([]);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState({
    Address: "",
    City: "",
    State: "",
    Pincode: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const {addressid}=useParams();

  const navigate = useNavigate();
  const BuyerId = localStorage.getItem("buyerId");

  // Handle Address Change
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // const handleUpdateAddress = async (addressid) => {
  //   if (addressid) {
  //     const response = await axios.post(
  //       `http://localhost:8080/college%20project/mini%20project/api/Updateaddress.php`,
  //       { addressid },
  //       { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  //     );
  //     console.log(response.data);
  //     if (response.data.Updated === "true") {
  //       setSavedAddresses(response.data);
  //     } else {
  //       toast.error(response.data.error);
  //     }
  //   }
  // };
  const handleUpdateAddress = async (e) => {
    e.preventDefault();
    if (addressid) {
      try {
        const response = await axios.post(
          `http://localhost:8080/college%20project/mini%20project/api/Updateaddress.php`,
          { 
            addressid,
            Address: address.Address,
            City: address.City,
            State: address.State,
            Pincode: address.Pincode
          },
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
  
        if (response.data.Address === "true") {
          toast.success("Address updated successfully!");
          navigate('/Checkout')
          fetchSavedAddresses(); // Refresh address list
        } else {
          toast.error(response.data.error || "Failed to update address.");
        }
      } catch (error) {
        console.error("Error updating address:", error);
        toast.error("Error updating address");
      }
    }
  };
  
  // Handle Address Submission
  const handleSubmitAddress = async (e) => {
    e.preventDefault();

    if (!BuyerId) {
      toast.error("BuyerId not found");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/Address.php",
        {
          BuyerId: BuyerId,
          Address: address.Address,
          State: address.State,
          City: address.City,
          Pincode: address.Pincode,
        },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      toast.success(response.data.message || "Address saved successfully");

      // Fetch updated addresses after saving
      fetchSavedAddresses();
      // Hide the form after saving
      setShowAddressForm(false);
      // Reset form
      setAddress({
        Address: "",
        City: "",
        State: "",
        Pincode: "",
      });
    } catch (error) {
      console.error("Error saving address:", error);
      toast.error("Error saving address");
    }
  };

  // Fetch Products
  const fetchProduct = async () => {
    if (!BuyerId) {
      toast.error("BuyerId not found");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/GetProductBuyerWise.php",
        { BuyerId },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      console.log(response.data);
      if (Array.isArray(response.data)) {
        setUsersData(response.data);
        // console.log(response.data)
      } else {
        console.error("Expected an array but got:", response.data);
        toast.error(response.data.error || "Invalid data format from API");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products");
    }
  };

  // Fetch Saved Addresses
  const fetchSavedAddresses = async () => {
    if (!BuyerId) {
      toast.error("BuyerId not found");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/SaveAddress.php",
        { BuyerId },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      if (Array.isArray(response.data)) {
        setSavedAddresses(response.data);
        if (response.data.length > 0) {
          setSelectedAddressId(response.data[0].id); // Select first address by default
          setShowAddressForm(false); // Hide form if addresses exist
        } else {
          setShowAddressForm(true); // Show form if no addresses exist
        }
      } else {
        console.error("Expected an array of addresses but got:", response.data);
        toast.error(
          response.data.error || "Invalid address data format from API"
        );
        setShowAddressForm(true); // Show form on error
      }
    } catch (error) {
      console.error("Error fetching saved addresses:", error);
      toast.error("Error fetching saved addresses");
      setShowAddressForm(true); // Show form on error
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchSavedAddresses();
  }, []);

  // Delete Product
  const deleteProduct = async (addtocartid) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      try {
        await axios.get(
          `http://localhost:8080/college%20project/mini%20project/api/Deleteaddtocart.php?addtocartid=${addtocartid}`,
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        const updatedCart = usersData.filter(
          (item) => item.addtocartid !== addtocartid
        );
        setUsersData(updatedCart);
        toast.success("Product removed from cart successfully", {
          autoClose: 3000,
        });

        // Redirect if cart is empty
        if (updatedCart.length === 0) {
          setTimeout(() => {
            navigate("/addtocart");
          }, 1000);
        }
      } catch (error) {
        console.error("Error removing item:", error);
        toast.error("Error removing item");
      }
    }
  };

  // DataTable Columns
  const columns = [
    {
      name: "Image",
      selector: (row) => row.ProductImage,
      sortable: true,
      cell: (row) => (
        <img
          src={`http://localhost:8080/college%20project/mini%20project/api/Images/${row.ProductImage}`}
          alt={row.ProductName}
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
      ),
    },
    {
      name: "Product Name",
      selector: (row) => row.ProductName,
      sortable: true,
    },
    { name: "Price", selector: (row) => row.price, sortable: true },
    { name: "Quantity", selector: (row) => row.quantity, sortable: true },
    {
      name: "Status",
      selector: (row) => row.status || "Available",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-danger"
          onClick={() => deleteProduct(row.addtocartid)}
        >
          <FaTrash />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  // Handle radio button selection
  const handleAddressSelection = (addressid) => {
    setSelectedAddressId(addressid);
  };
  console.log(selectedAddressId);
  // Toggle address form visibility
  const toggleAddressForm = () => {
    setShowAddressForm(!showAddressForm);
  };

  const proceedToPayment = async () => {
    if (!selectedAddressId) {
      toast.error("Please select an address before proceeding.");
      return;
    }

    if (usersData.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }
    localStorage.setItem("addressid", selectedAddressId);
    try {
      const formData = new FormData();
      formData.append("addressid", selectedAddressId);
      const totalAmount = usersData.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      formData.append("totalamount", totalAmount);
      usersData.forEach((item, index) => {
        formData.append(`addtocartid[]`, item.addtocartid);
        formData.append(`quantity[]`, item.quantity);
        formData.append(`subtotal[]`, item.price * item.quantity);
      });

      // Debugging: Log FormData contents
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/OrderApi.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Response from API:", response.data);
      console.log(response.data.orderId);
      localStorage.setItem("orderId", response.data.orderId);

      if (response.data.Order === "true") {
        toast.success("Order placed successfully!");
        navigate("/payment", { state: { addressid: selectedAddressId } });
      } else {
        toast.error(response.data.error || "Order placement failed.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing order. Try again.");
    }
  };
  const handleEditAddress = async (addressid) => {
    toggleAddressForm();
    navigate(`/Checkout/${addressid}`);
  };
  // const handleEditAddress = async (addressid) => {
  //   toggleAddressForm();
  //   setIsEditing(true);
  //   const response = await axios.get(
  //     `http://localhost:8080/college%20project/mini%20project/api/Getsinagleaddress.php?addressid=${addressid}`,
  //     {
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     }
  //   );
  //   console.log(response.data);
  //   if (response.data) {
  //     // toggleAddressForm();
  //     setAddress(response.data[0]);
  //   } else {
  //     toast.error(response.data.error);
  //   }
  // };
  useEffect(() => {
    if (addressid) {
      // If addressId exists, fetch the address details
      const fetchAddress = async () => {
        try {
          toggleAddressForm();
            // setIsEditing(true);
          const response = await axios.get(
            `http://localhost:8080/college%20project/mini%20project/api/Getsinagleaddress.php?addressid=${addressid}`,
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          );

          if (response.data.length > 0) {
            setAddress(response.data[0]); // Set the fetched address
            setIsEditing(true);
          } else {
            toast.error("Address not found");
          }
        } catch (error) {
          console.error("Error fetching address:", error);
          toast.error("Failed to fetch address");
        }
      };

      fetchAddress();
    }
  }, [addressid]); // Runs whenever addressId changes

  const handleDeleteAddress = async (addressid) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/college%20project/mini%20project/api/DeleteAddres.php?addressid=${addressid}`,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (response.data.Address === "true") {
        toast.success("Address deleted successfully");
        fetchSavedAddresses(); // This will update the address list without refreshing the page
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="content-wrapper">
        {/* Product Table */}
        <div className="card mb-4">
          <h5 className="card-header">Products</h5>
          <div className="card-body">
            <DataTable
              columns={columns}
              data={usersData}
              pagination
              highlightOnHover
            />
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="container mt-4 mb-5">
        <div className="card shadow-lg">
          <h5 className="card-header bg-primary text-white text-center">
            Shipping Address
          </h5>
          <div className="card-body">
            {/* Saved Addresses */}

            {savedAddresses.length > 0 && (
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Select a saved address:</h6>
                {savedAddresses.map((addr) => (
                  <div key={addr.addressid} className="mb-3 border p-3 rounded">
                    <div className="form-check d-flex justify-content-between align-items-center">
                      <div>
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          name="addressRadio"
                          id={`address-${addr.addressid}`}
                          checked={selectedAddressId === addr.addressid}
                          onChange={() =>
                            handleAddressSelection(addr.addressid)
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`address-${addr.addressid}`}
                        >
                          <strong>{addr.Address}</strong>
                          <div className="mt-1">
                            {addr.City}, {addr.State} - {addr.Pincode}
                          </div>
                        </label>
                      </div>
                      <div className="">
                        <button
                          className=" btn  text-primary "
                          onClick={() => handleEditAddress(addr.addressid)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="btn text-danger"
                          onClick={() => handleDeleteAddress(addr.addressid)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Button to add new address */}
            <div className="d-flex justify-content-between mb-4">
              <div className="text-center mt-3">
                <button
                  className="btn btn-outline-primary w-auto"
                  onClick={toggleAddressForm}
                >
                  <FaPlus className="me-2" />
                  {showAddressForm ? "Cancel" : "Add New Address"}
                </button>
              </div>

              <div className="text-center mt-3">
                <button
                  className="btn btn-success w-100"
                  onClick={proceedToPayment}
                  disabled={usersData.length === 0}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>

            {/* New Address Form */}
            {showAddressForm && (
              <Card className="border shadow-sm p-3 mb-3">
                <Card.Body>
                  <h6 className="fw-bold mb-3">Add New Address</h6>
                  <Form onSubmit={addressid ? handleUpdateAddress : handleSubmitAddress}>
                    <div className="row">
                      {/* Address Line */}
                      <div className="mb-3">
                        <Form.Label className="fw-bold">Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          name="Address"
                          value={address.Address}
                          onChange={handleAddressChange}
                          required
                          placeholder="Enter your full address"
                        />
                      </div>

                      {/* City, State, Pincode */}
                      <div className="">
                        <Form.Label className="fw-bold">City</Form.Label>
                        <Form.Control
                          type="text"
                          name="City"
                          value={address.City}
                          onChange={handleAddressChange}
                          required
                          placeholder="Enter city"
                        />
                      </div>
                      <div className="">
                        <Form.Label className="fw-bold">State</Form.Label>
                        <Form.Control
                          type="text"
                          name="State"
                          value={address.State}
                          onChange={handleAddressChange}
                          required
                          placeholder="Enter state"
                        />
                      </div>
                      <div className="">
                        <Form.Label className="fw-bold">Pincode</Form.Label>
                        <Form.Control
                          type="text"
                          name="Pincode"
                          value={address.Pincode}
                          onChange={handleAddressChange}
                          required
                          placeholder="Enter pincode"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-3">
                      <button className="btn btn-primary w-100" type="submit">
                      {addressid ? "Update Address" : "Add Address"}
                      </button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
