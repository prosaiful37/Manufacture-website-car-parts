import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Signup from "./Pages/Login/SignUp/Signup";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";

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
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer className="max-w-full mx-auto px-12"></Footer>
    </div>
  );
}

export default App;
