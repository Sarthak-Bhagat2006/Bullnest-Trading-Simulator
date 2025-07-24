import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Funds = () => {
  const [funds, setFunds] = useState(0);
  const openingBalance = 10000;

  useEffect(() => {
    axios
      .get("http://localhost:3002/funds", { withCredentials: true })
      .then((res) => setFunds(res.data.funds))
      .catch((err) => console.error("Error fetching funds:", err));
  }, []);

  return (
    <>
      <h4 className="mb-3 mx-5">Equity Funds Summary</h4>

      <div className="card shadow mx-5" style={{ maxWidth: "22rem" }}>
        <div className="card-header bg-primary text-white">Funds Overview</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span>Available Margin</span>
            <span className="text-success fw-bold">&#36; {funds.toFixed(2)}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Opening Balance</span>
            <span className="text-muted">&#36; {openingBalance.toFixed(2)}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Used Margin</span>
            <span className="text-muted">&#36; {(openingBalance - funds).toFixed(2)}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Funds;