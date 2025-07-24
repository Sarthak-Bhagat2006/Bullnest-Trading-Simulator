import axios from 'axios'

export const fetchHoldings = async () => {
    try {
        const res = await axios.get("http://localhost:3002/allholdings", {
            withCredentials: true
        });
        return res.data;
    } catch (err) {
        console.error("Failed to fetch holdings:", err.response?.data || err.message);
        return [];
    }
};