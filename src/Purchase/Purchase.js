import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import Orders from "./Orders";

const PartsDetails = () => {
  const [user] = useAuthState(auth);
  const { partsId } = useParams();
  const [tools, setTools] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/parts/${partsId}`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [partsId]);

  const handleOrder = event => {
    event.preventDefault();
    const img = tools.img;
    const partName = tools.name;
    const minOrder = tools.minimum_order;
    const aviableOrder = tools.available_quantity;
    const price = tools.price
    // const displayName = user.displayName;
    // const email = user.email;
    const address = user.address;
    const orderId = tools._id;

    const order = { 
      img,
      partName,
      minOrder,
      aviableOrder,
      price,
      orderId,
      name: user.displayName, 
      email: user.email, 
      address 
    }

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify(order),
    })
    .then(res => res.json())
    .then((data) =>{
      if(data.success ){
        console.log('Order Added sucessful');
      }
      else{
        console.log('Your order not add');
      }
    } )
   
  }

  return (
    <div class="card-body w-1/3 rounded-3xl shadow-transparent my-5 border mx-auto">
    <div onSubmit={handleOrder}>
      <figure class="px-10 pt-10">
        <img
          className="rounded"
          width="250"
          height="250"
          src={tools.img}
          alt=""
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-neutral">{tools.name}</h2>
        <p className="font-bold text-neutral">
          Minimum-Order-Quentity:{" "}
          <span className="text-primary ">{tools.minimum_order}</span>{" "}
        </p>
        <p className="font-bold text-neutral">
          Avaiable-Quentity:{" "}
          <span className="text-primary">{tools.available_quantity}</span>{" "}
        </p>
        <p className="font-bold text-neutral">
          Price: <span className="text-primary">${tools.price}</span>{" "}
        </p>
        
      </div>

      <div class="divider"></div>
      <form  action="">
        <div className="form-control">
          <label class="label">
            <span class="label-text">Purchase Quentity</span>
          </label>
          <input
            type="number"
            placeholder="Quentity"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            disabled
            value={user.displayName}
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            disabled
            value={user.email}
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder="address"
            value={user.address}
            class="input input-bordered"
          />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Order Now</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default PartsDetails;
