import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import Detail from "../Screens/Detail";
import ExchangeList from "./ExchangeList";
import MarketList from "./MarketList";

export default () => {
    return (
        <Router>
            <Header />
            <Route path="/" exact component={Prices} />
            <Route path="/exchanges" component={Exchanges} />
            <Route path="/coins" exact component={Coins} />
            <Route path="/coins/:id" component={Detail} />
            <Route path="/coins/:id/exchange" component={ExchangeList} />
            <Route path="/coins/:id/markets" component={MarketList} />
        </Router>
    );
};
