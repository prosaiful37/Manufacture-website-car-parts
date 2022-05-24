import React from "react";
import CountUp from "react-countup";
import { FlagIcon, TruckIcon, EmojiHappyIcon, BadgeCheckIcon } from '@heroicons/react/solid';
import banner2 from "../../../Assets/banner/banner2.png";

const BusinessSummary = () => {
  
  return (
    <div
      class="hero min-h-screen"
      style={{
        background: `url(${banner2})`,
      }}
    >
      <div class="hero-overlay bg-opacity-90"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="hero-content text-center text-neutral-content">
          <div class="">
            <h1 class="mb-5 text-5xl font-bold text-primary">Millions Business Trust Us</h1>
            <h4 class="mb-5 text-3xl underline underline-offset-1 uppercase ">Try to understand users expection</h4>
            <div className="grid grid-cols-1 lg:grid-cols-4 ">
             <CountUp start={0} end={72} delay={0}>
                {({ countUpRef }) => (
                <div className="p-5 m-10">
                    
                    <FlagIcon className=" h-20 w-auto mx-auto text-blue-500 mb-5"/> 
                    <span className="text-7xl"  ref={countUpRef} />
                    <h2 className="text-3xl font-bold">  <br />
                    Countries
                    </h2> 
                </div>
                )}
            </CountUp>
             <CountUp start={0} end={535} delay={0}>
                {({ countUpRef }) => (
                <div className="p-5 m-10">
                    
                    <TruckIcon className=" h-20 w-auto mx-auto text-blue-500 mb-5"/> 
                    <span className="text-7xl"  ref={countUpRef} />
                    <h2 className="text-3xl font-bold">  <br />
                    Total Parts
                    </h2> 
                </div>
                )}
            </CountUp>
             <CountUp start={0} end={350} delay={0}>
                {({ countUpRef }) => (
                <div className="p-5 m-10">
                    
                    <EmojiHappyIcon className=" h-20 w-auto mx-auto text-blue-500 mb-5"/> 
                    <span className="text-7xl"  ref={countUpRef} />
                    <h2 className="text-3xl font-bold">  <br />
                    Happy Clients
                    </h2> 
                </div>
                )}
            </CountUp>
             <CountUp start={0} end={432} delay={0}>
                {({ countUpRef }) => (
                <div className="p-5 m-10">
                    
                    <BadgeCheckIcon className=" h-20 w-auto mx-auto text-blue-500 mb-5"/> 
                    <span className="text-7xl"  ref={countUpRef} />
                    <h2 className="text-3xl font-bold">  <br />
                   Feedbacks
                    </h2> 
                </div>
                )}
            </CountUp>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
