const express=require("express");
const cors=require("cors");

const app=express();
app.use(cors());
app.use(express.json());

let tasks=[]; //temporary in-memory storage 
// Default route for the homepage
app.get("/", (req, res) => {
    res.send("Welcome to the Task Manager API! Use /tasks to interact.");
});

//Get all the tasks
app.get("/tasks", (req, res)=>{
    res.json(tasks);
});

//Add a new task function
app.post("/tasks", (req, res)=>{
    const task={id: tasks.length+1, text: req.body.text};
    tasks.push(task);
    res.json(task);
});

//Delete an existing task function 
app.delete("/tasks/:id", (req, res)=>{
    tasks=tasks.filter(task=> task.id!==parseInt(req.params.id));
    res.json({message:"Task Deleted"});
})

//Start the Server
const PORT=5000;
app.listen(PORT, ()=>{
    console.log(`Backend Server running on port ${PORT}`);
});
