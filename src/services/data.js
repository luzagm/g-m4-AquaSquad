const URL = "https://api-adalab.dev.liquid.delivery/api/login";

const data = () => {
  // console.log(data);
  return fetch(URL)
    .then(response => response.json())
    .then(data => data);
};

export default data;
