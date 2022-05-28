import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Signup from "./Pages/Login/SignUp/Signup";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Purchase from "./Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import Review from "./Pages/Dashboard/Review";
import MyProfile from "./Pages/Dashboard/MyProfile";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from "./Pages/Dashboard/Payment";
import Users from "./Pages/Dashboard/Users";

function App() {
  return (
    <div>
      <Header className="max-w-full mx-auto px-12"></Header>
      <Routes className="max-w-7xl mx-auto px-12">
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>

        <Route
          path="/purchase/:partsId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="payment/:paymentId" element={<Payment></Payment>}></Route>

        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <ToastContainer />
      <Footer className="max-w-full mx-auto px-12"></Footer>
    </div>
  );
}

export default App;
