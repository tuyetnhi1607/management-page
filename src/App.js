import logo from "./logo.svg";
import "./App.css";
import {useEffect} from "react"
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Table from "./components/table/Table";
import Home from "./components/home/Home";
const init = {
    isLogined: false,
    user: {
      data: {
        userName: "",
        token: "",
      },
    },
  };
function App() {
  if (!localStorage.getItem("auth")) {
    const init = {
      isLogined: false,
      user: {
        data: {
          userName: "",
          token: "",
        },
      },
    };
    localStorage.auth = JSON.stringify(init);
  }
  const { isLogined } = JSON.parse(localStorage.auth).user;
  return (
    <div className="App">
      {isLogined ? (
        <Home />
      ) : (
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
