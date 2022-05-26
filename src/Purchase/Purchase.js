import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const PartsDetails = () => {
  const { partsId } = useParams();
  const [user] = useAuthState(auth);
  const [part, setPart] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/parts/${partsId}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  return (
    <div>
      <div class="card card-compact w-96 mx-auto bg-dark-100 shadow-xl my-3 text-neutral-content ">
        <figure class="px-10 pt-10">
          <img className="rounded" src={part.img} alt="" />
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
        
      </div>
      <div class="card-body w-1/2 rounded-3xl shadow-transparent mt-5 border mx-auto">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" disabled value={user.displayName} class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" disabled value={user.email} class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Address</span>
          </label>
          <input type="text" placeholder="address" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default PartsDetails;
