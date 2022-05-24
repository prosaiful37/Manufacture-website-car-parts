import React from "react";
import review from "../../../Assets/review.jpg";
import { StarIcon } from "@heroicons/react/solid";

const Reviews = () => {
  return (
    <div class="my-10">
      <div class="card card-side bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-2 py-7">
        <div className="border p-5 m-5 rounded">
          <div class="avatar flex justify-center">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div className="flex justify-center p-0">
            <StarIcon className=" h-5  text-primary p-0 my-5" />
            <StarIcon className=" h-5  text-primary p-0 my-5" />
            <StarIcon className=" h-5  text-primary my-5" />
            <StarIcon className=" h-5  text-primary my-5" />
            <StarIcon className=" h-5  text-primary my-5" />
          </div>
          <div class="card-body">
            <h6 class="card-title">Great reservoir walk at a Great Price!</h6>
            <p>OEM direct replacement, fits perfectly only steering pump. Brought my car up to spec again..</p>
            
            <h6 className="text-accent m-0 font-bold">Jhon Kabir</h6>
            <p className="font-bold">business manager</p>
          </div>
          <div>
          </div>
        </div>
        <div className="border p-5 m-5 rounded">
          <div class="avatar flex justify-center">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div className="flex justify-center p-0">
            <StarIcon className=" h-5  text-primary p-0 my-5" />
            <StarIcon className=" h-5  text-primary p-0 my-5" />
            <StarIcon className=" h-5  text-primary my-5" />
            <StarIcon className=" h-5  text-primary my-5" />
            <StarIcon className=" h-5  text-primary my-5" />
          </div>
          <div class="card-body">
            <h6 class="card-title">Great reservoir walk at a Great Price!</h6>
            <p>OEM direct replacement, fits perfectly only steering pump. Brought my car up to spec again..</p>
            
            <h6 className="text-accent m-0 font-bold">Jhon Kabir</h6>
            <p className="font-bold">business manager</p>
          </div>
          <div>
          </div>
        </div>
        <div className="border p-5 m-5 rounded">
          <div class="avatar flex justify-center">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div className="flex justify-center p-0">
            <StarIcon className=" h-5  text-primary p-0 my-5" />
            <StarIcon className=" h-5  text-primary p-0 my-5" />
            <StarIcon className=" h-5  text-primary my-5" />
            <StarIcon className=" h-5  text-primary my-5" />
            <StarIcon className=" h-5  text-primary my-5" />
          </div>
          <div class="card-body">
            <h6 class="card-title">Great reservoir walk at a Great Price!</h6>
            <p>OEM direct replacement, fits perfectly only steering pump. Brought my car up to spec again..</p>
            
            <h6 className="text-accent m-0 font-bold">Jhon Kabir</h6>
            <p className="font-bold">business manager</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
