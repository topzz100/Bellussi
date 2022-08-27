import { Route, Routes } from "react-router-dom";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home/>}/>
        {/* Category page */}
        <Route path="/category" element={<Category/>}/>
        {/* SignUp Page */}
        <Route path="/signup" element={<SignUp/>}/>
        {/* Login page */}
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
