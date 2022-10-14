console.log("Hello!")
//adding requirements
const fs = require("fs/promises");
const express = require("express");

const app = express();

app.get("activity", (req, res) => {
    //need to be able to pull data from MySQL and Sequelize ORM for Database
    const movies = []; 
    const books = [];
    const games = [];

    res.json({
        movie: _.sample(movies),
        book: _.sample(books),
        game: _.sample(games)
    });
    
    //res.send("this is working!")
});

app.listen(3000, () => console.log("API server is running... "));
