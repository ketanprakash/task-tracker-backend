const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
// const cors = require('cors');
const { tasks } = require('./routes/tasks');
const app = express();

const port = process.env.PORT || 8000;
// app.use(cors());
app.use(express.json());

app.use('/tasks', tasks);

app.get('*', (req, res) => {
  res.status(200).send(`Started Server`);
});

app.listen(port, (err) => {
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port");
})