import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://thawing-oasis-18375.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="m-5">
      <h2>All-Users : {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table  w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>User Roll</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  <button class="btn btn-active btn-ghost">Make Admin</button>
                </td>
                <td>
                  <button class="btn btn-active btn-ghost">Remove User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
