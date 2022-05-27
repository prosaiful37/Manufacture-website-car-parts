import { useEffect, useState } from "react";

const useOrders = () =>{
  const [part, setPart] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/parts`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);

  return  [part, setPart];
}


export default useOrders;