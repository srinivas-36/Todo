const TodoModel = require("../models/ToDoModel.js");

module.exports.getToDo = async (req, res) => {
  const todo = await TodoModel.find();
  res.send(todo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  TodoModel.create({ text }).then((data) => {
    console.log("TODO Added Successfully");
    console.log(data);
    res.send(data);
  });

  const todo = await TodoModel.find();
  res.send(todo);
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  TodoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully...."))
    .catch((err) => console.log("Error ", err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  TodoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully...."))
    .catch((err) => console.log("Error ", err));
};
