import { Route, Routes } from "react-router-dom";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signUp/SignUp";
import jwt_decode from 'jwt-decode'

function App() {
   //let user = jwt_decode(sessionStorage.getItem('token') || "")
  // //console.log(user)
  // if(user === ""){
  //   user = null
  // }
  return (
    <div className="App">
      <Routes>
        {/* Home page */}
        <Route path="/" element={
          // user? 
          // <Home/>: 
          <LogIn/>}/>
        {/* Category page */}
        <Route path="/category" element={
          // user? <Category/> : 
        <LogIn/>}/>
        {/* SignUp Page */}
        <Route path="/signup" element={<SignUp/>}/>
        {/* Login page */}
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
