const { port } = require('./config/config')
const express = require('express');
const cors = require('cors');
const { tasks } = require('./routes/tasks');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/tasks', tasks);

app.get('*', (req, res) => {
  res.status(200).send(`Started Server on port ${port}`);
});

app.listen(port);