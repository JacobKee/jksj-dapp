const url = "https://dappb.herokuapp.com";

export const getNetwork = async () => {
  return await fetch(`${url}/network`)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log(error));
};

export const addNetwork = async (data) => {
  return await fetch(`${url}/network/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};

export const getToken = async () => {
  return await fetch(`${url}/token`)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log(error));
};

export const addToken = async (data) => {
  return await fetch(`${url}/token/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};