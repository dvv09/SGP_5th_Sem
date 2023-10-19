import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Grounds from "./components/Grounds";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import Notification from "./components/Notification";
// import LandPage from "./components/LandingPage/LandPage";
import Gmore from "./components/groundDetails/Gmore";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />

        <Route exact path="/grounds" element={<Grounds />} />

        <Route exact path="/profile" element={<Profile />} />

        <Route exact path="/login" element={<Login />} />

        <Route exact path="/register" element={<Register />} />

        <Route exact path="/notification" element={<Notification />} />

        <Route exact path="/moreinfo" element={<Gmore />} />
      </Routes>

    </>
  );
}

export default App;
