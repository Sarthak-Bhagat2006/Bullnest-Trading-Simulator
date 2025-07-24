import axios from "axios";
const API_KEY = process.env.REACT_APP_FINNHUB_KEY;
console.log("API KEY:", API_KEY); // should now print your key
const BASE_URL = "https://finnhub.io/api/v1";

export const fetchStockQuote = async (symbol) => {
    const res = await axios.get(`${BASE_URL}/quote`, {
        params: { symbol, token: API_KEY }
    });
    console.log("KEY TEST =>", API_KEY);
    return res.data;
};

export const searchStock = async (query) => {
    const res = await axios.get(`${BASE_URL}/search`, {
        params: { q: query, token: API_KEY }
    });
    return res.data.result;
};