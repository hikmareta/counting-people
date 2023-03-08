//document.getElementById("count-el").innerText = 5

// let count = 5

// count = count + 1


// console.log(count)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console

  // let myAge = 23
  // let humanDogRatio = 7

  // let myDogAge = myAge*humanDogRatio

  // console.log(myDogAge)

// Create a variable, bonusPoints. Initialize it as 50. Increase to 100
// Decrease it down to 25, and then finally increase it to 70
// console.log the value after each step

  // let bonusPoints = 50
  // console.log(bonusPoints)

  // bonusPoints = bonusPoints + 50
  // console.log(bonusPoints)

  // bonusPoints = bonusPoints - 75
  // console.log(bonusPoints)

  // bonusPoints = bonusPoints + 45
  // console.log(bonusPoints)

// Initialize the count as 0
// Listen for clicks on the increment button
// incremenet the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment () {
//   console.log("The button was clicked")
// }

  // function countdown () {
  //   console.log(5)
  //   console.log(4)
  //   console.log(3)
  //   console.log(2)
  //   console.log(1)
  // }

  // countdown()
// function is used for repetitive variables
// second countdown

  // countdown()

// create function that logs out the number of 42 to the console
// call/invoke the function

  // function weight () {
  //   console.log(42)
  // }

  // weight()



// create a function that logs out the sum of all lap times

  // let lap1 = 34
  // let lap2 = 33
  // let lap3 = 36

  // function lapTime () {
  //   //lapTime = lap1 + lap2 + lap3          // << bisa menggunakan ini, nanti console.log nya jadi begini console.log(lapTime)
  //   console.log(lap1 + lap2 + lap3)         // << bisa juga langsung menjumlahkan di console.lognya
  // }

  // lapTime()


// Exercise for calling the function several times
  // let lapsCompleted = 0

  // function incrementLap () {
  //   lapsCompleted = lapsCompleted +1
  // }

  // incrementLap ()
  // incrementLap ()
  // incrementLap ()
  // incrementLap ()
  // incrementLap ()


  // console.log (lapsCompleted)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variables when the button is clicked
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log (saveEl)

function increment () {
  count += 1
  countEl.innerText = count
  console.log(count)
}

function decrement () {
  count -= 1
  countEl.innerText = count
  console.log(count)
}

// 1. Create a function, save(), which logs out the count when it's called

function save () {
  let countStr =  count + " - "
  saveEl.textContent += countStr
  count = 0
  countEl.textContent = 0
  console.log(count)
}

  // let username = "per"

// Create a variable, message, that stores the string: "You have three new notifications"

  // let message = "You have three new notifications"

  // console.log(message + ", " + username + ".")

// Create a variable, messageToUser, that contains the essage we have log

  // let messageToUser = message + ", " + username + ". "

  // console.log(messageToUser)

// Create two variables, name and greeting. The name variable should store your name
// and the greeting should store e.g "Hi, my name is Dhika"

// Create a third variable, myGreeting, that concatenates the two strings
// Log myGreeting to the console

  // let name = "Dhika"
  // let greeting = "Hi, my name is "

  // let myGreeting = greeting + name

  // console.log(myGreeting)