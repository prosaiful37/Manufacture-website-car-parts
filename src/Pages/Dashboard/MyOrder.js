import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://thawing-oasis-18375.herokuapp.com/orders?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  //   hanlde delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((proceed) => {
      if (proceed.isConfirmed) {
        const url = `https://thawing-oasis-18375.herokuapp.com/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data");
            const remaning = orders.filter((order) => order._id !== id);
            setOrders(remaning);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="m-5">
      <h2 className="mb-5">Total My-Order: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Parts-Name</th>
              <th>Order</th>
              <th>Per-Price</th>
              <th>Parts-Image</th>
              <th>Payments</th>
              <th>Remove-Orders</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.partName}</td>
                <td>{order.minOrder}</td>
                <td>${order.price}</td>
                <td>
                  <img className="w-20 h-20" src={order.img} alt="" />
                </td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment`}>
                      <button className="btn btn-sm">Pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <span className="btn btn-sm btn-seccess">Paid</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    class="btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
