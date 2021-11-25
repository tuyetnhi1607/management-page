import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Header />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
