import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PartsDetails = () => {
  const { partsId } = useParams();
  const [user] = useAuthState(auth);
  const [part, setPart] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/parts/${partsId}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [partsId]);

  //handle order 
  const handleOrder = event => {
    event.preventDefault();
    const img = part.img;
    const partName = part.name;
    const minOrder = part.minimum_order;
    const aviableOrder = part.available_quantity;
    const price = part.price
    const displayName = user.displayName;
    const email = user.email;
    const address = user.address;

    const order = {
      img, partName, minOrder, aviableOrder, price, displayName, email, address
    }

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      'content-type' : 'application/json',
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then((data) =>{
      if(data.success ){
        toast('Order Added sucessful');
      }
      else{
        toast.error('Your order not add')
      }
    } )
   
  }
  return (
    <div>
      <div class="card-body w-1/3 rounded-3xl shadow-transparent my-5 border mx-auto">
        <div onSubmit={handleOrder}>
          <figure class="px-10 pt-10">
            <img
              className="rounded"
              width="250"
              height="250"
              src={part.img}
              alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-neutral">{part.name}</h2>
            <p className="font-bold text-neutral">
              Minimum-Order-Quentity:{" "}
              <span className="text-primary ">{part.minimum_order}</span>{" "}
            </p>
            <p className="font-bold text-neutral">
              Avaiable-Quentity:{" "}
              <span className="text-primary">{part.available_quantity}</span>{" "}
            </p>
            <p className="font-bold text-neutral">
              Price: <span className="text-primary">${part.price}</span>{" "}
            </p>
          </div>

          <div class="divider"></div>
          <form action="">
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default PartsDetails;
