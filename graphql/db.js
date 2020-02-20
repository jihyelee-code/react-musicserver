import axios from "axios";
import fetch from "node-fetch";
const URL = "https://deezerdevs-deezer.p.rapidapi.com/search?";
const BASE = "https://api.deezer.com/";
//q=despacito
export const getAll = async request => {
  const {
    data: { data }
  } = await axios.get(`${URL}`, {
    params: {
      q: `${request}`
    },
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "03afeef36cmsh1bdcf2e9a60f303p19457cjsn1f84e9465bd0"
    }
  });
  return data;
};

// export const getAlbum = async request => {
//   let datas = [];
//   const data = await getAll(request);
//   if (data) {
//       console.log(data)
//     // [...data].forEach(async each => {
//     //   const { data } = await axios.get(
//     //     `"${BASE}album/${each.album.id}/tracks"`
//     //   );
//     //   datas.push(data);
//     // });
//   }
//   return datas;
// };

