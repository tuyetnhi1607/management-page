import React from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import "./home.scss";
import Table from "../table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./dashboard/DashBoard";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-main">
        <Header />
        <Routes>
          <Route exact path="/" element={<DashBoard />} />
          <Route exact path="/products" element={<Table />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
