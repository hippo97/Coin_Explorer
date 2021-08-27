import React, {
  useState,
  useEffect,
} from "react";
import { getPrices } from "../api";
import Exchange from "../Components/Exchange";
import Loader from "../Components/Loader";
import Price from "../Components/Price";

const Prices = () => {
  const [
    loading,
    setLoading,
  ] = useState(true);
  const [prices, setPrices] =
    useState([]);

  useEffect(async () => {
    try {
      const { data } =
        await getPrices();
      setPrices(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  });

  return loading ? (
    <Loader />
  ) : (
    prices.map((price) => (
      <Price
        key={price.id}
        {...price}
      />
    ))
  );
};

export default Prices;
