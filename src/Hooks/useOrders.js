import { useEffect, useState } from "react";

const useOrders = () => {
  const [part, setPart] = useState([]);
  useEffect(() => {
    fetch(`https://thawing-oasis-18375.herokuapp.com/parts`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);

  return [part, setPart];
};

export default useOrders;
