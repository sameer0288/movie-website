const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const app = express();

const movieData = [];

mongoose.connect(
  "mongodb+srv://admin:test123@cluster0.3nojp.mongodb.net/myMovieDB",
  { useNewUrlParser: true }
);

// This is our project.

const mySchema = {
  Title: {
    type: String,
    trim: true,
    required: true,
  },
  Year: {
    type: String,
    trim: true,
    required: true,
  },
  Released: {
    type: String,
    trim: true,
    required: true,
  },
  Runtime: {
    type: String,
    trim: true,
    required: true,
  },
  Genre: {
    type: String,
    trim: true,
    required: true,
  },
  Poster: {
    type: String,
    trim: true,
    required: true,
  },
  Plot: {
    type: String,
    trim: true,
    required: true,
  },
};

const Item = mongoose.model("Item", mySchema);

axios
  .get("http://www.omdbapi.com/?i=tt3896198&apikey=f82239e5")
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
    movieData.push(res.data.Title);
    movieData.push(res.data.Year);
    movieData.push(res.data.Released);
    movieData.push(res.data.Runtime);
    movieData.push(res.data.Genre);
    movieData.push(res.data.Poster);
    movieData.push(res.data.Plot);
    const item = new Item({
      Title: res.data.Title,
      Year: res.data.Year,
      Released: res.data.Released,
      Runtime: res.data.Runtime,
      Genre: res.data.Genre,
      Poster: res.data.Poster,
      Plot: res.data.Plot,
    });
    item.save();
  })
  .catch((error) => {
    console.error(error);
  });

//this is the listen port fuction where our sever listens to the request
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("the server has started");
});
