import React, { useEffect, useState } from "react";

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://thawing-oasis-18375.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div class="overflow-x-auto m-5">
      <h2>All Orders</h2>
      <table class="table table-zebra w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Parts-Name</th>
            <th>Price</th>
            <th>Order-Quentity</th>
            <th>User-Name</th>
            <th>User Email</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{order.partName}</td>
              <td>{order.price}</td>
              <td>{order.minOrder}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>
                <img className="w-20 h-20" src={order.img} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrder;
