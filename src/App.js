import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Table from "./components/table/Table";
import Home from "./components/home/Home";

function App() {
  const { isLogined } = JSON.parse(localStorage.auth).user;
  return (
    <div className="App">
      <Routes>
        {isLogined ? (
          <Route exact path="/" element={<Home />} />
        ) : (
          <Route exact path="/" element={<Login />} />
        )}
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
