const { port, user, password, pgport } = require('./config/config')
const express = require('express');
const cors = require('cors');
const { tasks } = require('./routes/tasks');
const app = express();

app.use(cors());
app.use(express.json());
console.log(port, user, password, pgport);
app.use('/tasks', tasks);

app.get('*', (req, res) => {
  res.status(200).send(`Started Server`);
});

app.listen(process.env.PORT, (err) => {
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port");
})