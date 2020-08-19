import axios from 'axios';

const URL_REM = 'https://badjokes-server.herokuapp.com/';
const URL_LOCAL = 'http://localhost:3001/ecosolys/';
const API_URL = URL_REM;

async function getApi() {
  const res = await axios.get(API_URL);
  const json = res.data;
  return json;
}
async function updateApi(id) {
  const res = await axios.put(`${API_URL}${id}`);
  console.log(res);
  const json = res.data;
  console.log(json);
  return json;
}

export { getApi, updateApi };
