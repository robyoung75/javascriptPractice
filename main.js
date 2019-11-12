

//Finding charcters and or replaceing characters practice


//indexOf method finds only the first instance of the segment you are looking for. in this case store.
var text = "Let's go to the store. I want to go to the store. Please take me to the store. Store please";
var firstChar = text.indexOf("store");
if (firstChar !== -1) {
  text = text.slice(0, firstChar) + "shop" + text.slice(firstChar + 5);
}

console.log(text);/*logs Let's go to the shop. I want to go to the store. Please take me to the store. St
ore please*/

//this loop will find and replace all instances of store with shop, both lower and upper case but doesn't replace with uppercase.
var text = "Let's go to the store. I want to go to the store. Please take me to the store. Store please";
for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 5) === "store" || text.slice(i, i + 5) === "Store") {
    text = text.slice(0, i) + "shop" + text.slice(i + 5);
  }
}

console.log(text);/*logs Let's go to the shop. I want to go to the shop. Please take me to the shop. shop
please*/


//loop will replace store with shop both lower and upper case. loop slice if statement.
var text = "Let's go to the store. I want to go to the store. Please take me to the store. Store please";
for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 5) === "store") {
    text = text.slice(0, i) + "shop" + text.slice(i + 5);
  }
  else if (text.slice(i, i + 5) === "Store") {
    text = text.slice(0, i) + "Shop" + text.slice(i + 5);
  }
}
  
console.log(text); /*Let's go to the shop. I want to go to the shop. Please take me to the shop. Shop
please*/


//loop will find all ! and count them using charAt method.
var para = "Lets go to the store!!!!! Will you go to the store!!!!!";
var count = 0;
var numberOf = [];
for (var i = 0; i < para.length; i++) {
  if (para.charAt(i) === "!") {    
    count++
    numberOf.push(count);
    //console.log("exclamation point found!");
  }
}

console.log(numberOf); //logs [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] number of exclamation points

