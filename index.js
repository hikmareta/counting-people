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