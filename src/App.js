import "./css/App.css";
import CatCards from './CatCards';
import Home from "./Home";
import NavBar from './NavBar.js';
import DogCards from "./DogCards.js";
import LoginPage from "./LoginPage.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const logIn = () => {
    setIsLogin(true);
    console.log('set to true');
  }

  return (
    <>
      <Router>
        <div className="container">
          <NavBar showLogin={isLogin}/>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/funcat" element={<CatCards />} />
            <Route path="/fundog" element={<DogCards />} />
            <Route path="/login" exact element={<LoginPage onLogin={logIn}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
