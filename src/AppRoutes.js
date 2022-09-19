import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./Pages/NotFound";
import { UserContextProvider } from "./Context/User/UserContext";
import Profile from "./Pages/Profile";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
};

export default AppRoutes;
