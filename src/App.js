import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Network from "./components/Network";
import Token from "./components/Token";
import {getToken} from "./controller/api";

function App() {
  const [token, setToken] = useState([]);

  useEffect(() => {
    var tokens = [];
    getToken().then((result) => {
        result.forEach((item) => tokens.push(item));
      })
      .catch((error) => console.log(error));

    setToken(tokens);
  }, []);

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/components/Network");
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="token" element={<Token />} />
        <Route path="network" element={<Network />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
