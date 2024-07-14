const express = require('express');

const app = express();
const db = require('./db');

const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const router = require('./routes');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(router);
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
