const inquirer = require("inquirer")

class pet {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  health = 30

  feed() {
    console.log(`${this.name} is feeding... hunger - 10 etc`)
    this.health -= 10
  }
}

let myPet

const init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "What type of pet do you want?",
        choices: ["Pizza", "Burgers", "Pasta"],
      },
      {
        type: "input",
        name: "name",
        message: "Whats your pets name?",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
      myPet = new pet(answers.name, answers.type)
    })
    .then(() => gameLoop())
    .catch((error) => {
      console.log(error)
    })
}

const gameLoop = () => {
  //   console.log(myPet)

  if (myPet.health <= 0) {
    console.log("your pet is dead")
    return // if condition is met the function will end here
  }

  //   myPet.degradeValues()

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: ["feed", "drink", "play", "sleep"],
      },
    ])
    .then((answer) => {
      if (answer.action === "feed") {
        myPet.feed()
      }
    })
    .then(() => gameLoop())
}

init()
