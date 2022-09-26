const axios = require("axios");
async function db(param) {
  const api = axios.create({
    baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
    params: { q: param },
    headers: {
      "X-RapidAPI-Key": "666498a1b2msh62bc688bf28eafep1a1ea5jsnc3cce76a50e5",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  });

  const req = await api.get("search");
  const res = await req.data;
  const data = res.data;

  return data;
}

module.exports = { db };
