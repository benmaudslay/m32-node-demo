const { add } = require("./bensFunctions")

const pet = {
  name: "Bugs",
  type: "Bunny",
  food: "Carrots",
}

let { name } = pet

const movies = [{ name: "Gladiator", oscarWin: true }, "Spider Man", 100]

const [movie1, movie2] = movies

console.log(movie1)
