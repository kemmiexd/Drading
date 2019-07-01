import axios from 'axios';

export default async function callApi(url, method, data) {
  return await axios({
    url: `http://5bb8ef65b6ed2c0014d47508.mockapi.io/Ok/${url}`,
    method,
    data,
    type: 'JSON'
  }).catch(err => {
    console.log(err);
  })
}