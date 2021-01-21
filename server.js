const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  try {
    // response é a resposta do axios MAS eu tiro o data de dentro do response
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(data);

    return res.json(data);
  } catch (err) {
    console.error(err);
  }
});

app.listen('3333');
