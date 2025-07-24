import React, { useState, useEffect } from "react";
import axios, { all } from 'axios';
import { VericalGraph } from "./VerticalGraph";
import { useHoldings } from "./holdingContext";

const Holdings = () => {
  // const [allHoldings, setAllHoldings] = useState([]);

  const { holdings, fetchHoldings } = useHoldings();

  useEffect(() => {
    fetchHoldings(); // load on first render
  }, [fetchHoldings]);


  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = holdings.map(stock =>
    stock.name.length > 10 ? stock.name.slice(0, 10) + '…' : stock.name
  );

  const formatK = (value) => {
    const num = Number(value);
    return isNaN(num) ? "—" : (num / 1000).toFixed(2) + "k";
  };

  const totalInvestment = holdings.reduce((sum, stock) => {
    return sum + stock.avgPrice * stock.qty;
  }, 0)

  const currentValue = holdings.reduce(
    (sum, stock) => sum + stock.currentPrice * stock.qty,
    0
  );

  const profitLoss = currentValue - totalInvestment;

  const profitPercent =
    totalInvestment > 0 ? ((profitLoss / totalInvestment) * 100).toFixed(2) : 0;


  const data = {
    labels,
    datasets: [
      {
        label: 'Stock price',
        data: holdings.map((stock) => stock.avgPrice),
        backgroundColor: 'rrgba(30, 30, 60, 0.8)',
      },
    ]
  }

  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };


  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock, index) => {
              const name = stock.name || "—";
              const qty = Number(stock.qty) || 0;
              const avg = Number(stock.avgPrice) || 0;
              const price = Number(stock.currentPrice) || 0;
              const currValue = price * qty;
              const investment = avg * qty;
              const profitLoss = currValue - investment;

              const profitClass = profitLoss >= 0 ? "profit" : "loss";
              const dayClass = (stock.dayChange?.includes("-") || stock.dayChange === "0") ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profitClass}>{profitLoss.toFixed(2)}</td>
                  <td className={profitClass}>{stock.netChange || "—"}</td>
                  <td className={dayClass}>{stock.dayChange || "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>



      <div className="row">
        <div className="col">
          <h5>
            {formatK(totalInvestment)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {formatK(currentValue)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{profitLoss.toFixed(2)} ({profitPercent}%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VericalGraph data={data} />
    </>
  );
};

export default Holdings;