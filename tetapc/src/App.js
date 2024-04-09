import Navb from "./components/Navbar/Navb";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register/register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import Add from "./pages/Add.js/Add";
import Error from "./pages/Error";
import { useEffect, useState } from "react";
function App() {
  const user=useSelector(state=>state.user.user)
  const [place,setPlace]=useState()
 
  return (
    <div className="App">
     <Navb />
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addproduct"  element={<Add />}/>
          <Route path="/error" element={<Error />}/>
     </Routes>
     <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
{/* Same as */}
<ToastContainer />
    </div>
  );

}

export default App;
