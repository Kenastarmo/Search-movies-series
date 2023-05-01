import axios from "axios";

export const serviceapi = async (url) => {
  const API = `http://www.omdbapi.com/`;
  const APIkey = `3c0bf875`;
  return axios
    .get(`${API}?apikey=${APIkey}&${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
