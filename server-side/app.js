const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const db = require('./config/db');

require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// Route to view all favorited video games
app.get("/api/get", (req,res)=>{
  db.query("SELECT * FROM favorites", (err,result) => {
      if(err) {
        console.log(err)
      } res.send(result)
  });
});
  
// Route to view one video game
app.get("/api/getFromId/:id", (req,res)=>{
  const id = req.params.id;
  
  db.query("SELECT * FROM favorites WHERE id = ?", id, (err,result) => {
    if(err) {
      console.log(err)
    } res.send(result)
  });
});

// Route for adding a favorite video game
app.post('/api/create', (req,res) => {
  const title = req.body.title;
  const text = req.body.text;

  db.query("INSERT INTO favorites (title, post_text) VALUES (?,?,?)",[title,text], (err,result)=>{
    if(err) {
      console.log(err)
    } console.log(result)
  });   
})

// Route to deleting a game from favorites

app.delete('/api/delete/:id',(req,res) => {
  const id = req.params.id;
  
  db.query("DELETE FROM favorites WHERE id= ?", id, (err,result)=>{
    if(err) {
      console.log(err)
    } 
  }) 
})

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`)
});