const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [
    { id: 1, title: "Learn JavaScript", done: false },
    { id: 2, title: "Build a REST API", done: false } 
];

//GET all tasks
app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});

//POST - add a new task
app.post("/tasks", (req, res) => {
    const newTask = req.body;
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    res.status(201).json(newTask);
});

//PUT - update a task
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index !== -1){
        tasks[index] = {...tasks[index], ...req.body};
        res.status(200).json(tasks[index]);
    } else  {
        res.status(404).json({ message: "Task not found" });
    }
});

//DELETE a task
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(f => f.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});