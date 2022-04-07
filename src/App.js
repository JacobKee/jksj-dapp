
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Network from "./components/Network";
import Token from "./components/Token";
import List from "./components/List";

function App() {

  // useEffect(() => {
  //   var tokens = [];
  //   getToken().then((result) => {
  //       result.forEach((item) => tokens.push(item));
  //     })
  //     .catch((error) => console.log(error));

  //   setToken(tokens);
  // }, []);

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
        <Route path="list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
