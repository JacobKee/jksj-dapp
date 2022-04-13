import { useState, useEffect } from "react";
import { getMyToken } from "../controller/api";



function List() {
  const [token, setToken] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState(
    window.innerWidth,
    window.innerHeight
  );

  useEffect(() => {
    window.addEventListener("resize", function handleResize ()  {
      setWindowDimensions(windowDimensions);
    });

    getMyToken()
      .then((result) => {
        setToken(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={container}>
      <h1 style={mystyle}>List!</h1>
      {token.map((item, index) => (
        <div style={row} key={index}>
          <p style={block}>{Number(item.balance)}</p>
          <h3 style={block}>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default List;

const container = {
  maxWidth: "500px",
  margin: "auto",
};

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const row = {
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
  marginBottom: "15px",
};

const block = {
  margin: "10px",
  fontSize: "20px",
  height: "25px",
  display: "inline-block",
  color: "gray",
};
