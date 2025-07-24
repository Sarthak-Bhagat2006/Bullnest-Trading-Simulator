import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders", {
      withCredentials: true
    })
      .then((res) => setOrders(res.data))
      .catch((err) =>
        console.error("Failed to fetch orders:", err.response?.data || err.message)
      );
  }, []);

  return (
    <div className="containe">
      <div className="row gx-2">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div className="col-md-4 mb-4 rounded" key={index} style={{
              border: order.mode === "BUY" ? "2px solid green" : "2px solid red",
              borderRadius: "8px", // optional, for rounded corners
            }}>
              <h5
                className="card-header"
                style={{
                  backgroundColor: order.mode === "BUY" ? "green" : "red",
                  color: "white"
                }}
              >
                {order.mode}
              </h5>
              <div className="card-body">
                <h5 className="card-title">{order.name}</h5>
                <p className="card-text">Qty: {order.qty}</p>
                <p className="card-text">Price: ₹{order.price}</p>
                <p className="card-text">Total: ₹{(order.qty * order.price).toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-orders text-center mt-5">
            <p>You haven't placed any orders today</p>
            <Link to="/" className="btn btn-primary">Get started</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;