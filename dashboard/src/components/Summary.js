import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [username, setUsername] = useState("");
  const [holdings, setHoldings] = useState([]);
  const [funds, setFunds] = useState();
  const openingBalance = 10000;
  const margineUsed = (openingBalance - funds).toFixed(2)

  useEffect(() => {
    // Get username
    axios.get("http://localhost:3002/profile", { withCredentials: true })
      .then(res => setUsername(res.data.username))
      .catch(err => console.log("Not authenticated"));

    // Get funds
    axios.get("http://localhost:3002/funds", { withCredentials: true })
      .then((res) => setFunds(res.data.funds))
      .catch((err) => console.error("Error fetching funds:", err));

    // Get holdings
    axios.get("http://localhost:3002/allholdings", { withCredentials: true })
      .then(res => setHoldings(res.data))
      .catch(err => console.log("Error fetching holdings", err));
  }, []);

  // Compute summary
  const totalInvestment = holdings.reduce((sum, h) => {

    const qty = Number(h.qty) || 0;
    const avg = Number(h.avgPrice) || 0;
    return sum + avg * qty;
  }, 0);

  const currentValue = holdings.reduce((sum, h) => {
    const qty = Number(h.qty) || 0;
    const price = Number(h.currentPrice) || 0;
    return sum + price * qty;
  }, 0);
  const profitLoss = currentValue - totalInvestment;
  const profitPercent = totalInvestment !== 0
    ? ((profitLoss / totalInvestment) * 100).toFixed(2)
    : "0.00";

  const formatK = (value) => {
    const num = Number(value);
    return isNaN(num) ? "—" : (num / 1000).toFixed(2) + "k";
  };

  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{formatK(funds)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{formatK(margineUsed)}</span>
            </p>
            <p>
              Opening balance <span>10.00k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={profitLoss >= 0 ? "profit" : "loss"}>
              {formatK(profitLoss)} <small>{profitLoss >= 0 ? "+" : ""}{profitPercent}%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatK(currentValue)}</span>
            </p>
            <p>
              Investment <span>{formatK(totalInvestment)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;