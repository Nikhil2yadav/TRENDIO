import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

const SellerReport = () => {
  const [sellerData, setSellerData] = useState([]);

  useEffect(() => {
    fetchSellerData();
  }, []);

  const fetchSellerData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerAddProductReportapi.php");
      setSellerData(response.data);
    } catch (error) {
      console.error("Error fetching seller report:", error);
    }
  };
console.log(sellerData)
  return (
    <div className="container">
      <h2 className="mt-4">Seller-Wise Product Report</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sellerData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sellerName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalProducts" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SellerReport;
