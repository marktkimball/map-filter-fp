console.log("Your code goes in this document.");

var allObj = items.map(function(element){
  return element;
})

//Answer 1 Code
var totalPrices = items.map(function(element){
  return element.price;
});

var sumPrices = totalPrices.reduce(function(acc, curr){
  return acc + curr;
});

var avgPrice = sumPrices / totalPrices.length;

document.getElementById(id = "answer1").innerHTML = "$".concat(avgPrice.toFixed(2));


//Answer 2 Code
var betweenPrice = items.map(function(element){
  if(element.currency_code === "USD" && element.price >= 14 && element.price <= 18){
    return element.title;
  };
});

function isNotZero(value){
  return value;
}

betweenPrice = betweenPrice.filter(isNotZero);

document.getElementById(id = "answer2").innerHTML = JSON.stringify(betweenPrice, null, 4);


//Answer 3 Code
var gbpCodeName = items.map(function(element){
  if(element.currency_code === "GBP"){
    return element.title;
  }
});

var gbpCodePrice = items.map(function(element){
  if(element.currency_code === "GBP"){
    return element.price;
  }
});

gbpCodeName = gbpCodeName.filter(isNotZero);
gbpCodePrice = gbpCodePrice.filter(isNotZero);

document.getElementById(id = "answer3").innerHTML = gbpCodeName.concat(" £".concat(gbpCodePrice));


//Answer 4 Code
var woodItems =[];

allObj.forEach(function(el, idx, array){
  if(el.materials.indexOf("wood") > -1){
    woodItems.push(el.title);
  }
  return woodItems;
});

document.getElementById(id = "answer4").innerHTML = JSON.stringify(woodItems, null, 4);


//Answer 5 Code
var eightMaterials = [];


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
var sellerMadeCounter = 0;
allObj.forEach(function(el, idx, array){
  if(el.who_made === "i_did"){
    sellerMadeCounter++;
  }
  return sellerMadeCounter;
});

document.getElementById(id = "answer6").innerHTML = sellerMadeCounter;
