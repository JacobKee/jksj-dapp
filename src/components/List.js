import { useState, useEffect } from "react";
import { getMyToken } from "../controller/api";

function List() {
  const [token, setToken] = useState([]);

  useEffect(() => {
    getMyToken()
      .then((result) => {
        setToken(result);
      })
      .catch((error) => console.log(error));

  }, []);

  return (
    <div>
        {token.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.balance}</p>
          </div>
        ))}
    </div>
  );
}

export default List;
