import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    const navigaetToHomePage =  () => {
        navigate('/');
    }
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content text-center">
        <div class="">
          <h1 class="text-9xl font-bold">404</h1>
          <div class="divider divide-blue-200"></div> 
          <h3 class="py-6 text-4xl font-bold">
            Opps! This Page Could Not Be Found!
          </h3>
          <p color="text-neutral mb-5">Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
          <button onClick={navigaetToHomePage} class="btn btn-outline btn-wide btn-error mt-7">Book to home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
