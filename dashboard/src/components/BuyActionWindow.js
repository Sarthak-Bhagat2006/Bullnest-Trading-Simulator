import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import { useHoldings } from "./holdingContext";

import "./BuyActionWindow.css";
import { Button } from "@mui/material";

const BuyActionWindow = ({ uid, price: unitPrice }) => {
    const { fetchHoldings } = useHoldings();
    const [stockQuantity, setStockQuantity] = useState(1);

    const totalPrice = Number(stockQuantity) * Number(unitPrice);
    const totalPriceFormatted = totalPrice ? totalPrice.toFixed(2) : "0.00";
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = async () => {

        try {
            await axios.post("http://localhost:3002/buy", {
                name: uid,
                qty: stockQuantity,
                currentPrice: totalPrice,
                mode: "BUY",
            }, {
                withCredentials: true,
            });

            generalContext.closeBuyWindow();
            await fetchHoldings();
            alert("Buy order placed!");

        } catch (err) {
            console.error("Buy failed:", err.response?.data || err.message);
            alert("Buy failed: " + (err.response?.data?.message || "Server error"));
        }
    };

    const handleCancelClick = () => {
        generalContext.closeBuyWindow();
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
                <span>Margin required &#36;{totalPriceFormatted}</span>
                <div>
                    <Button className="btn btn-blue" onClick={handleBuyClick} sx={{
                        backgroundColor: "rgb(28, 142, 28)",
                        color: "#fff",
                        fontWeight: 600,
                        px: 3,
                        borderRadius: "6px",
                        "&:hover": {
                            backgroundColor: "green"
                        }
                    }}>
                        Buy
                    </Button>
                    <Button className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;