// src/hooks/useCurrencyInfo.js
import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((data) => setData(data.rates))
      .catch((error) => console.error("Failed to fetch currency data:", error));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
