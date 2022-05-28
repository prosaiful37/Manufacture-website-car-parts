import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { toast, ToastContainer } from 'react-toastify';
import auth from "../firebase.init";

const Orders = ({ tool }) => {
  const [user] = useAuthState(auth);
  const { _id, name, minimum_order, available_quantity, price, img } = tool;

  //handle order
  // const handleOrder = event => {
  //   event.preventDefault();
  //   const img = tool.img;
  //   const partName = tool.name;
  //   const minOrder = tool.minimum_order;
  //   const aviableOrder = tool.available_quantity;
  //   const price = tool.price
  //   // const displayName = user.displayName;
  //   // const email = user.email;
  //   const address = user.address;
  //   const orderId = tool._id;

  //   const order = {
  //     img,
  //     partName,
  //     minOrder,
  //     aviableOrder,
  //     price,
  //     orderId,
  //     name: user.displayName,
  //     email: user.email,
  //     address
  //   }

  //   fetch('https://thawing-oasis-18375.herokuapp.com/orders', {
  //     method: 'POST',
  //     headers: {
  //       'content-type' : 'application/json',
  //     },
  //     body: JSON.stringify(order)
  //   })
  //   .then(res => res.json())
  //   .then((data) =>{
  //     if(data.success ){
  //       console.log('Order Added sucessful');
  //     }
  //     else{
  //       console.log('Your order not add');
  //     }
  //   } )

  // }
  return <div></div>;
};

export default Orders;
