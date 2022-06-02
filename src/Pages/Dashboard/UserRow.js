import React from 'react';
import { toast } from "react-toastify";

const UserRow = ({user, refetch}) => {
    const {email, role} = user;

    const makeAdmin = () => {
        fetch(`https://thawing-oasis-18375.herokuapp.com/users/admin/${email}`, {
          method: "PUT",
          headers: {
            'content-type' : "application/json"
          },
      
        })
        .then(res => res.json())
        .then(data => {
          refetch();
          toast.success(`Admin made successfully`);
        })
    } 

    return (
      <tr>
      <th>{1}</th>
      <td>{email}</td>
      <td>
      { role !== "admin" && <button onClick={makeAdmin} class="btn btn-active btn-ghost">Make Admin</button>}
      </td>
      <td>
        <button class="btn btn-active btn-ghost">Remove User</button>
      </td>
      </tr>
      
    );
};

export default UserRow;


