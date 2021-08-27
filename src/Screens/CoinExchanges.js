import React, {
  useState,
  useEffect,
} from "react";
import { getCoinExchanges } from "../api";
import { useParams } from "react-router-dom";

import Loader from "../Components/Loader";
import Exchange from "../Components/Exchange";

const CoinExchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  const { id } = useParams();
  useEffect(async () => {
    try {
      const { data: exchanges } =
        await getCoinExchanges(id);
      setExchanges(exchanges);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  });

  return loading ? (
    <Loader />
  ) : (
    exchanges
      .filter(
        (exchange) => exchange.fiats.length > 0
      )
      .map((exchange) => (
        <Exchange
          key={exchange.id}
          {...exchange}
        />
      ))
  );
};

export default CoinExchanges;
