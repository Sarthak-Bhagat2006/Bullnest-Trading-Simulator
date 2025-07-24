import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";
import { Button } from "@mui/material";

const SellActionWindow = ({ uid, price: unitPrice }) => {
    const [stockQuantity, setStockQuantity] = useState(1);

    const totalPrice = Number(stockQuantity) * Number(unitPrice);
    const totalPriceFormatted = totalPrice ? totalPrice.toFixed(2) : "0.00";
    const generalContext = useContext(GeneralContext);

    const handleSellClick = async () => {

        try {
            await axios.post("http://localhost:3002/sell", {
                name: uid,
                qty: stockQuantity,
                price: totalPrice,
                mode: "SELL",
            }, {
                withCredentials: true,
            });

            generalContext.closeSellWindow();
            alert("Order sell successfully!");
        } catch (err) {
            console.error("Sell failed:", err.response?.data || err.message);
            alert("Sell failed: " + (err.response?.data?.message || "Server error"));
        }
    };

    const handleCancelClick = () => {
        generalContext.closeSellWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={totalPriceFormatted}
                            readOnly
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>You’ll receive &#36;{totalPriceFormatted}</span>
                <div>
                    <Button className="btn sellBtn" onClick={handleSellClick} sx={{
                        backgroundColor: "#e93838",
                        color: "#fff",
                        fontWeight: 600,
                        px: 3,
                        borderRadius: "6px",
                        "&:hover": {
                            backgroundColor: "#e21a1a"
                        }
                    }}>
                        Sell
                    </Button>
                    <Button className="btn cancleBtn" onClick={handleCancelClick} >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;