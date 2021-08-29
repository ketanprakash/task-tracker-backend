const { client } = require('../config/db')

//Get Tasks
const getTasks = (req, res) => {
  const getQueryText = "SELECT * FROM tasks";
  client.query(getQueryText, [], (err, results) => {
    if (err){
      console.log(err);
      res.status(500).json({
        message: "Database Error!"
      });
    }
    else{
      res.status(200).json({
        message: "Successful",
        data: results.rows
      });
    }
  });
}

//Get Task
const getTask = (req, res) => {
  const getQueryText = "SELECT * FROM tasks WHERE id = $1";
  client.query(getQueryText, [req.params.taskId], (err, results) => {
    if (err){
      console.log(err);
      res.status(500).json({
        message: "Database Error!"
      });
    }
    else{
      res.status(200).json({
        message: "Successful",
        data: results.rows[0]
      });
    }
  });
}

//Add Tasks
const addTask = (req, res) => {
  const addQueryText = "INSERT INTO tasks(text, day, reminder) VALUES ($1, $2, $3)";
  const { text, day, reminder } = req.body;

  client.query(addQueryText, [text, day, reminder], (err, results) => {
    if (err){
      console.log(err);
      res.status(500).json({
        message: "Database Error!"
      });
    }
    else{
      res.status(200).json({
        message: "Successful"
      });
    }
  })
}

//Delete Tasks
const deleteTask = (req, res) => {
  const deleteQueryText = "DELETE FROM tasks WHERE id = $1";
  client.query(deleteQueryText, [req.params.taskId], (err, results) => {
    if (err){
      console.log(err);
      res.status(500).json({
        message: "Database Error!"
      });
    }
    else{
      res.status(200).json({
        message: "Successful"
      });
    }
  })
}

//Update Task
const updateTask = (req, res) => {
  const updateQueryText = "UPDATE tasks SET text = $1, day = $2, reminder = $3 WHERE id = $4"
  const { text, day, reminder } = req.body;
  client.query(updateQueryText, [text, day, reminder, req.params.taskId], (err, results) => {
    if (err){
      console.log(err);
      res.status(500).json({
        message: "Database Error!"
      });
    }
    else{
      res.status(200).json({
        message: "Successful"
      });
    }
  })
}

module.exports.getTasks = getTasks;
module.exports.getTask = getTask;
module.exports.addTask = addTask; 
module.exports.deleteTask = deleteTask; 
module.exports.updateTask = updateTask;