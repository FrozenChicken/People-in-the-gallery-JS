# People-in-the-gallery-JS
Simple program to count people, based in js
code raw:


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>People Counter</title>
</head>
<body>
    <h1> People in the gallery:</h1>
    <h2 id="count-el"> 0</h2>
    <button id="entry-el" onclick="peopleInShop() ; previousVisitors()">Entry</button>
    <button id="left-el"onclick="left()">Left</button>
    <p> Previous Entries: </p>
    <h3 id="previous-el">0</h3>
    <br>
    <p><u>Ther avarage quantity of people in the shop can not be higher than five persons!</u></p>
<script src= "main.js"></script>
</body>
</html>

JavaScript:
let count = 0;
let entryEl = document.getElementById("entry-el");
let leftEl = document.getElementById("left-el");
let countEl = document.getElementById("count-el");
let previousEl = document.getElementById("previous-el");
let a = 0;

function peopleInShop() {
  //count += 1
  count++;
  countEl.textContent = count;
  if (count <= 5) {
    window.alert("Welcome");
  }
  if (count >= 6 && count !== 0) {
    window.alert("You can not Entry to the shop now! Wait till someone left the shop!");
  }
  if (count === 6) {
    //count -= 1;
    count--;
    countEl.textContent = 5;
  } else {
    //pass
  }

}

function left() {
  count--;
  if (count === -1) {
    count++;
  }
  countEl.textContent = count;

}

function previousVisitors() {
  a++;
  previousEl.textContent = a;
}

CSS:

body {
    background-image: url("background.jpg");
    background-size: cover;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    text-align: center;
}

h1 {
    margin-top: 10px;
    margin-bottom: 10px;
}

h2 {
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 20px;
}

button {
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: bold;
    width: 200px;
    margin-bottom: 5px;
    border-radius: 5px;
}

#left-el {
    background: darkred;
}

#entry-el {
    background: darkgreen;
}



