import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import Contents from "./components/Contents";
import Modules from "./components/Modules";
import Users from "./components/Users";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setUser(jwtDecode(localStorage.getItem("token")));
    }
  }, []);

  return (
    <Router>
      <Layout user={user}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/users" element={<Users />} />
          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Homepage />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
