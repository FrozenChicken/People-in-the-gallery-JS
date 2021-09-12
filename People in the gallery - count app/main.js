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