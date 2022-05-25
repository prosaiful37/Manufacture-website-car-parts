import React, { useEffect, useState } from "react";
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div className="bg-neutral">
      <div>
        <h2 className="text-center text-3xl py-10 text-white font-bold underline underline-offset-4">Our Parts.</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-10 my-10">
        {parts.map((part) => (
          <Part part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
