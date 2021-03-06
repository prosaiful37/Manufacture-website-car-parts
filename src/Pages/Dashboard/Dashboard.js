import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user]  = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-primary font-bold text-4xl m-5">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side ">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-secondary text-base-content ">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Order</Link>
          </li>
          <li>
             <Link to="/dashboard/review">Review</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/users">All Users</Link>
          </li>
          <li>
            <Link to="/dashboard/allOrder">All Order</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
