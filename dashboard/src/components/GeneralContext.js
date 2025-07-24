import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => { },
    openSellWindow: (uid) => { },
    closeBuyWindow: () => { },
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

    const [selectedStockUID, setSelectedStockUID] = useState("");
    const [selectedStockPrice, setSelectedStockPrice] = useState(0);

    const handleOpenBuyWindow = (uid, price) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
        setSelectedStockPrice(price);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    };
    const handleOpenSellWindow = (uid, price) => {
        setIsSellWindowOpen(true);
        setSelectedStockUID(uid);
        setSelectedStockPrice(price);
    };
    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedStockUID("");
    };


    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                openSellWindow: handleOpenSellWindow,
                closeBuyWindow: handleCloseBuyWindow,
                closeSellWindow: handleCloseSellWindow,
            }}
        >
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} price={selectedStockPrice} />}
            {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} price={selectedStockPrice} />}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;