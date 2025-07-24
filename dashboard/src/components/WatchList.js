import React, { useState, useContext, useEffect } from "react";
import { Tooltip, Grow } from '@mui/material';
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@mui/icons-material'
import GeneralContext from "./GeneralContext";
import { fetchStockQuote, searchStock } from "../services/finnhub.js"
import US_STOCKS from "../constants/indianStocks";
import Skeleton from '@mui/material/Skeleton';

import { DoughnutChart } from "./DoughnutChart.js";
const WatchList = () => {

  const [liveWatchlist, setLiveWatchlist] = useState([]);
  const [isWatchlist, setIsWatchlist] = useState(false);

  useEffect(() => {
    const fetchAllPrices = async () => {
      const results = [];

      for (const symbol of US_STOCKS) {
        try {
          const data = await fetchStockQuote(symbol);
          results.push({
            name: symbol,
            price: data.c,
            percent: `${data.dp.toFixed(2)}%`,
            isDown: data.d < 0
          });
          await new Promise(res => setTimeout(res, 500));
        } catch (err) {
          console.error(`Error fetching ${symbol}:`, err);
        }
      }
      setLiveWatchlist(results);
      setIsWatchlist(true);
    }
    fetchAllPrices();

    const interval = setInterval(fetchAllPrices, 40000); // Poll every 15s
    return () => clearInterval(interval);
  }, [])


  const data = {
    labels: liveWatchlist.map((subArray) => subArray["name"]),
    datasets: [
      {
        label: 'Price',
        data: liveWatchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',   // Soft Blue
          'rgba(255, 99, 132, 0.6)',   // Soft Red
          'rgba(255, 206, 86, 0.6)',   // Soft Yellow
          'rgba(75, 192, 192, 0.6)',   // Soft Teal
          'rgba(153, 102, 255, 0.6)',  // Soft Purple
          'rgba(255, 159, 64, 0.6)'    // Soft Orange
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1.5,
        borderRadius: 4,
        barThickness: 40,
      },
    ],
  };

  return (
    <>
      {!isWatchlist ? (
        <div className="watchlist-container">
          <div className="search-container">
            <Skeleton variant="text" height={40} width="80%" style={{ marginBottom: '12px' }} />
          </div>

          <ul className="list">
            {[...Array(12)].map((_, i) => (
              <li key={i} className="item">
                <div
                  className="itemInfo"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 0',
                  }}
                >
                  <Skeleton variant="text" width={100} height={25} />
                  <Skeleton variant="text" width={100} height={25} />
                  <Skeleton variant="text" width={100} height={25} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="watchlist-container">
          <div className="search-container">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search eg: PFE, TSLA"
              className="search"
            />
            <span className="counts">{liveWatchlist.length}/15</span>
          </div>

          <ul className="list">
            {liveWatchlist.map((stock, index) => (
              <WatchListItem stock={stock} key={index} />
            ))}
          </ul>

          <DoughnutChart data={data} />
        </div>
      )}
    </>
  );

};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListAction(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchListAction(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">
            {stock.percent}
          </span>
          {stock.isDown ?
            (<KeyboardArrowDown className="down" />)
            : (<KeyboardArrowUp className="up" />)
          }

          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListActions uid={stock.name} price={stock.price} />}
    </li>
  )
}


const WatchListActions = ({ uid, price }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid, price);
  };
  const handleSellClick = () => {
    generalContext.openSellWindow(uid, price);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};