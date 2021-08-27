import React, {
  useState,
  useEffect,
} from "react";
import { getCoinMarkets } from "../api";
import { useParams } from "react-router-dom";

import Loader from "../Components/Loader";
import Market from "../Components/Market";

const Markets = () => {
  const [loading, setLoading] = useState(true);
  const [markets, setMarkets] = useState([]);
  const { id } = useParams();
  useEffect(async () => {
    try {
      const { data: markets } =
        await getCoinMarkets(id);
      setMarkets(markets);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  });

  return loading ? (
    <Loader />
  ) : (
    markets
      .filter((market) => market.market_url)
      .map((market, index) => (
        <Market
          key={market.id || index}
          url={market.market_url}
          name={market.exchange_name}
        />
      ))
  );
};

export default Markets;
