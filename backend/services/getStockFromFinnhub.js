// services/getStockFromFinnhub.js

const axios = require("axios");

const API_KEY = process.env.FINNHUB_KEY_BACKEND;
const BASE_URL = "https://finnhub.io/api/v1";

const getStockFromFinnhub = async (symbol) => {
  try {
    const url = `${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`;
    const res = await axios.get(url);

    return {
      currentPrice: res.data.c,
      previousClose: res.data.pc,
    };
  } catch (err) {
    console.error(`Error fetching data for ${symbol}:`, err.message);
    return { error: "Stock data fetch failed" };
  }
};

module.exports = getStockFromFinnhub;