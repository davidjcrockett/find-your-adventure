const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const db = require('./config/db');

require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`)
  });