import React from "react";
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
  const { name, img, description, minimum_order, available_quantity, price } =
    part;
    const navigate = useNavigate()



    // navigate to purchase page
    const navigateTopurchase = () => {
      navigate('/purchase')
    }

  return (
    <div class="card card-compact w-80 mx-auto bg-dark-100 shadow-xl my-3 text-neutral-content ">
      <figure class="px-10 pt-10">
        <img className="rounded"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p className="font-bold ">Minimum-Order-Quentity: <span className="text-primary">{minimum_order}</span> </p>
        <p className="font-bold ">Avaiable-Quentity: <span className="text-primary">{available_quantity}</span> </p>
        <p className="font-bold ">Price: <span className="text-primary">${price}</span> </p>
        <div class="card-actions justify-end">
            <button onClick={navigateTopurchase} class="btn btn-block btn-primary">Please Order</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
