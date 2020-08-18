import axios from 'axios';

async function getApi() {
  const res = await axios.get('https://badjokes-server.herokuapp.com/ecosolys');
  const json = res.data;
  return json;
}
async function updateApi(id) {
  const res = await axios.put(
    `https://badjokes-server.herokuapp.com/ecosolys${id}`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }
  );
  console.log(res);
  const json = res.data;
  console.log(json);
  return json;
}

export { getApi, updateApi };
