import axios from 'axios';

export default async function callApi(url, method, data) {
  return await axios({
    url: `https://popular-owl-80.localtunnel.me/${url}`,
    method,
    data,
  }).catch(err => {
    console.log(err);
  })
}