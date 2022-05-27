import React from "react";
import blogImg1 from "../../Assets/blog.png";
import blogImg2 from "../../Assets/blog/blog1.jpg";
import blogImg3 from "../../Assets/blog/blog2.png";
import blogImg4 from "../../Assets/blog/blog3.png";

const Blog = () => {
  return (
    <div className="w-5/6 mx-auto my-15">
      <div className="my-10">
        <img src={blogImg1} alt="" />
      </div>
      <h2 className="text-4xl font-bold uppercase my-5 underline text-center">
        Blog
      </h2>
      <div className="my-5">
        <div class="card lg:card-side bg-base-100 shadow-xl ">
          <div class="card-body my-5">
            <h2 class="card-title text-2xl">
              1.01: How will you improve the performance of a React Application?
            </h2>
            <p className="text-lg">
              React performance is good as frontend web-application development.
              as per as good service provide react native app development. React
              keeping component state local and anywhere in device necessary.{" "}
              <br />
              React image loading performance is lazy. React component is good
              per developer work simple. Windowing or list virtualization in
              react. Avoid Anonymous function, and memo purecomponent with avoid
              object literals. Hopefully good performance in react.
            </p>
          </div>
          <figure className="p-5 rounded-md shadow-md">
            <img src={blogImg2} alt="Album" />
          </figure>
        </div>
      </div>
      <div className="my-5">
        <div class="card lg:card-side bg-base-100 shadow-xl ">
          <div class="card-body my-5">
            <h2 class="card-title text-2xl">
            2.02: What are the different ways to manage a state in a React application?
            </h2>
            <p className="text-lg">
              React state manage state in 4 type of local state, global state, server state, url state . In this state work is so good for the issue. 
              .{" "}
              <br />
              Local storage work is data manage in one or another component. Global state is data we manage across multiple components. Server state work for external server that must be integrated with ui state. Url state data exists on our urls including query parameter is work.
            </p>
          </div>
          <figure className="p-5 rounded-md shadow-md">
            <img src={blogImg3} alt="Album" />
          </figure>
        </div>
      </div>
      
      <div className="my-5">
        <div class="card lg:card-side bg-base-100 shadow-xl ">
          <div class="card-body my-5">
            <h2 class="card-title text-2xl">
              3.03: How does prototypical inheritance work?
            </h2>
            <p className="text-lg">
              React performance is good as frontend web-application development.
              as per as good service provide react native app development. React
              keeping component state local and anywhere in device necessary.{" "}
              <br />
              React image loading performance is lazy. React component is good
              per developer work simple. Windowing or list virtualization in
              react. Avoid Anonymous function, and memo purecomponent with avoid
              object literals. Hopefully good performance in react.
            </p>
          </div>
          <figure className="p-5 rounded-md shadow-md">
            <img  src={blogImg4} alt="Album" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Blog;
