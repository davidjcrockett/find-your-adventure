const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');

const Schema = require("./models/Schema");

const PORT = process.env.PORT || 3002;

dotenv.config();

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended : true }));

app.set("view engine", "ejs");

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