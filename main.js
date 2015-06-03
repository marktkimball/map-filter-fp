console.log("Your code goes in this document.");

var allObj = items.map(function(element){
  return element;
})

//Answer 1 Code
//Grab all prices from items
var totalPrices = items.map(function(element){
  return element.price;
});

//Use reduce function to total all prices
var sumPrices = totalPrices.reduce(function(acc, curr){
  return acc + curr;
});

//Average prices
var avgPrice = sumPrices / totalPrices.length;

document.getElementById(id = "answer1").innerHTML = "$".concat(avgPrice.toFixed(2));


//Answer 2 Code
//Map all elements and display only elements with a USD currency code and price between 14 and 18
var betweenPrice = items.map(function(element){
  if(element.currency_code === "USD" && element.price >= 14 && element.price <= 18){
    return element.title;
  };
});

//Pull out only the values in the array that have a value
function isNotZero(value){
  return value;
}

betweenPrice = betweenPrice.filter(isNotZero);

document.getElementById(id = "answer2").innerHTML = JSON.stringify(betweenPrice, null, 4);


//Answer 3 Code
//Map all elements and display only item titles with currency of GBP
var gbpCodeName = items.map(function(element){
  if(element.currency_code === "GBP"){
    return element.title;
  }
});

//Map all elements and display only item prices with currency of GBP
var gbpCodePrice = items.map(function(element){
  if(element.currency_code === "GBP"){
    return element.price;
  }
});

//Pull only names and prices that exist (remove unpopulated items)
gbpCodeName = gbpCodeName.filter(isNotZero);
gbpCodePrice = gbpCodePrice.filter(isNotZero);

document.getElementById(id = "answer3").innerHTML = gbpCodeName.concat(" £".concat(gbpCodePrice));


//Answer 4 Code
var woodItems =[];

//Iterrate over all elements and look for the index of wood within materials list
//If wood is not in the materials list it will return an index of -1
//Pushes title of items with wood to the empty array woodItems
allObj.forEach(function(el, idx, array){
  if(el.materials.indexOf("wood") > -1){
    woodItems.push(el.title);
  }
  return woodItems;
});

document.getElementById(id = "answer4").innerHTML = JSON.stringify(woodItems, null, 4);


//Answer 5 Code
var eightMaterials = [];

//Filters list of items made from 8 or more materials and creates an array of
//objects with the title, number of materials, and list of materials.
allObj.forEach(function(el, idx, array){
  if(el.materials.length >= 8){
    var items ={};
    items.name = el.title;
    items.num = el.materials.length;
    items.materials = el.materials;
    eightMaterials.push(items);
  };
  return eightMaterials;
});

document.getElementById(id = "answer5").innerHTML = JSON.stringify(eightMaterials, null, 4);


//Answer 6 Code
//Counts the number of items with who_made of "i_did"
var sellerMadeCounter = 0;
allObj.forEach(function(el, idx, array){
  if(el.who_made === "i_did"){
    sellerMadeCounter++;
  }
  return sellerMadeCounter;
});

document.getElementById(id = "answer6").innerHTML = sellerMadeCounter;
