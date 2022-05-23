import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Header className="max-w-full mx-auto px-12"></Header>
        <Routes  className="max-w-7xl mx-auto px-12">
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      <Footer  className="max-w-full mx-auto px-12"></Footer>
    </div>
  );
}

export default App;
