import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://thawing-oasis-18375.herokuapp.com/users", {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  const { data: users, isLoading, refetch } = useQuery("users", () =>
  fetch("https://thawing-oasis-18375.herokuapp.com/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="m-5">
      {/* <h2>All-Users : {users.length}</h2> */}
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
            {users?.map((user) => (
              <UserRow user={user}  refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
