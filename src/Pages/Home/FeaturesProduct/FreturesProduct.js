import React from "react";
import img1 from "../../../Assets/fe1.jpg";
import img2 from "../../../Assets/fe2.jpg";

const FreturesProduct = () => {
  return (
    <div class="card ">
      <figure>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 my-10">
            <img className=""
            src={img1}
            alt="Shoes"
            />
            <img
             src={img2}
            alt="Shoes"
            />
          </div>
        
      </figure>
    </div>
  );
};

export default FreturesProduct;
