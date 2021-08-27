import React, {
  useState,
  useEffect,
} from "react";
import { getCoins } from "../api";
import Coin from "../Components/Coin";
import Loader from "../Components/Loader";

const Coins = () => {
  const [
    loading,
    setLoading,
  ] = useState(true);

  const [coins, setCoins] =
    useState(null);

  useEffect(async () => {
    try {
      const { data } =
        await getCoins();
      setCoins(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  });

  return loading ? (
    <Loader />
  ) : (
    coins
      .filter(
        (coin) =>
          coin.rank !== 0
      )
      .sort(
        (first, second) =>
          first.rank -
          second.rank
      )
      .map((coin) => (
        <Coin
          key={coin.id}
          {...coin}
        />
      ))
  );
};

export default Coins;
