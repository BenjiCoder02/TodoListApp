const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

const todoList = ["Hello", "Add some text at the bottom", "Press +", "Press the checkbox to strike through"];

app.use(bodyParser.urlencoded({ extended: true }))

const today = new Date()

const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }

const date = today.toLocaleDateString("en-US", options)


app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))

app.get("/", function (req, res) {
    res.render("index", { date: date, todoListItem: todoList })
})

app.post("/", function (req, res) {
    const newTodo = req.body.todoItem;
    todoList.push(newTodo);
    console.log(newTodo)
    res.redirect("/")
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Running on 3000")
})