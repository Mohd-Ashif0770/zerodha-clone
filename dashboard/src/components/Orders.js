import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "https://zerodha-clone-q795.onrender.com/orders",
          {
            withCredentials: true,
          }
        );
        setOrders(res.data || []);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="orders">
        <p>Loading orders...</p>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>
      <div className="order-table">
        <table className="table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, idx) => (
              <tr key={o._id || idx}>
                <td className="align-left">{o.name}</td>
                <td>{o.qty}</td>
                <td>{o.price}</td>
                <td>{o.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
