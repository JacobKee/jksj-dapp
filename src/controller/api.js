const url = "https://dappb.herokuapp.com";

export const getToken = async() => {
    return await fetch(`${url}/token`)
      .then((res) => res.json())
      .then((result) => {
        return result
      })
      .catch((error) => console.log(error));
}

export const getNetwork = async () => {
  return await fetch(`${url}/network`)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log(error));
};