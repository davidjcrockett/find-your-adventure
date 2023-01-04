const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
const Schema = require("./models/Schema");

const PORT = process.env.PORT || 3002;

dotenv.config();

var corsOptions = { origin: "http://localhost:3001"};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser : true , useUnifiedTopology: true,}, () => {
    console.log("Connected to DB!");

    app.listen(PORT, () => console.log(`Listening on channel ${PORT}`));
});

// // READ route to see bookmarked games
// app.get('/', (req, res) => {
//     Schema.find({}, (err, tasks) => {
//         res.render('index.ejs', { todoTasks: tasks });
//     });
// });

// // CREATE route to add bookmark to a game
// app.post('/', async (req, res) => {
//     const todoTask = new Schema({
//         content: req.body.content
//     });
//     try {
//         await todoTask.save();
//         res.redirect("/");    
//     } catch (err) {
//         res.redirect("/");
//     }
// });

// //DELETE route to delete a bookmark to a game
// app.route("/remove/:id").get((req, res) => {
//     const id = req.params.id;
//     Schema.findByIdAndRemove(id, err => {
//         if (err) return res.send(500, err);
//         res.redirect("/");
//         });
//     });