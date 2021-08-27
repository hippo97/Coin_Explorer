import React, {
  useState,
  useEffect,
} from "react";
import { getExchanges } from "../api";
import Exchange from "../Components/Exchange";
import Loader from "../Components/Loader";

const Exchanges = () => {
  const [
    loading,
    setLoading,
  ] = useState(true);
  const [
    exchanges,
    setExchanges,
  ] = useState([]);

  useEffect(async () => {
    try {
      const { data } =
        await getExchanges();
      setExchanges(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  });

  return loading ? (
    <Loader />
  ) : (
    exchanges.map(
      (exchange) => (
        <Exchange
          key={exchange.id}
          {...exchange}
        />
      )
    )
  );
};

export default Exchanges;
