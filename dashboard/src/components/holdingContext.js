// src/context/HoldingsContext.js
import { createContext, useContext, useState, useCallback } from "react";
import axios from "axios";

const HoldingsContext = createContext();

export const useHoldings = () => useContext(HoldingsContext);

export const HoldingsProvider = ({ children }) => {
    const [holdings, setHoldings] = useState([]);

    const fetchHoldings = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:3002/allholdings", {
                withCredentials: true,
            });
            setHoldings(res.data);
        } catch (err) {
            console.error("Failed to fetch holdings:", err);
        }
    }, []);

    return (
        <HoldingsContext.Provider value={{ holdings, fetchHoldings }}>
            {children}
        </HoldingsContext.Provider>
    );
};