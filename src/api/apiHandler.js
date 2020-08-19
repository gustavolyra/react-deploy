import axios from 'axios';

const API_URL = 'https://badjokes-server.herokuapp.com/ecosolys/';
//const API_URL = 'http://localhost:3001/ecosolys/';

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
