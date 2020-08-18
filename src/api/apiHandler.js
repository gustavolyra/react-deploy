import axios from 'axios';

async function getApi() {
  const res = await axios.get('http://localhost:3001/ecosolys');
  const json = res.data;
  return json;
}
async function updateApi(id) {
  const res = await axios.put(`http://localhost:3001/ecosolys/${id}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });
  console.log(res);
  const json = res.data;
  console.log(json);
  return json;
}

export { getApi, updateApi };
