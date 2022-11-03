/*** Cookie Clicker ***/

//defaults
let cookieCount =0;

//DOM decleration
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

//everytime a user clicks, cookies increased
cookieClicker.addEventListener("click", function(){
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
})

//refresh Cookies
let refreshCookieCount = function () {
  cookieCounter.innerHTML = cookieCount;
}

/*** click power ***/

//declare default variables
let cookieCount = 0;

  //declare DOM variables
  let cookieCounter = document.getElementById('cookie-counter');

  cookieCounter.innerHTML = cookieCount;

//declare default variables
let cookieCount = 0;
let clickPower = 1;

//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

//cookies are increased by click power
cookieClicker.addEventListener("click", function() {
cookieCount = cookieCount + clickPower;
cookieCounter.innerHTML = cookieCount;
})

//default variables
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

//declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

//Buy click Power
buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
    console.log("Item successfully bought");
  } else {
    console.log("You don't have enough cookies!");
  }
})

if(cookieCount >= clickPowerPriceAmount) {
  //subtract cookies from price
  cookieCount -= clickPowerPriceAmount;
  //update cookie counter
  cookieCounter.innerHTML = cookieCount;
}

let refreshCookieCount = function(){
  cookieCounter.innerHTML = cookieCount;
}

//user clicks button and cookies are increased by click power
cookieClicker.addEventListener("click" function(){
  cookieCount = cookieCount + clickPower;
  refreshCookieCount ()
})

if (cookieCount >= clickPowerPriceAmount) {
  //subtract cookies from price
  cookieCount -= clickPowerPriceAmount;
  refreshCookieCount()
  //upgrade power level
  clickPowerLevelNumber += 1;

  //refresh shop Item
  refreshPowerClick();

}

//Upgrade power level
clickPowerLevelNumber += 1;

//Update click price
clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33)

//refresh shop item
refreshPowerClick();

let refreshPowerClick = function(){
  clickPowerLevel.innerHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
}

//Update click price
clickPowerPrice = Math.floor(clickPowerPrice * 1.33);

//update click power
clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05)

//refresh shop Item
refreshPowerClick();

let refreshPowerClick = function() {
  clickPowerLevel.innerHTML = clickPowerLevelNumber
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
}



/*** grandmas ***/
let grandmaAuto = false;
//set default values
let grandmaPower = 30;
let grandmaPriceAmount = 600;
let grandmaLevelNumber = 0;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

//buy a grannie
buyGrandma.addEventListener("click", function() {
  window.setInterval(function(){
    //executin code loop goes here
  }, numberOfMilliSeconds)

let autoGrandmaStart = function(){
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}

let refreshGrandma = function() {
  grandmaMultiple.innerHTML = grandmaPower - 10;
}


let refreshGrandma = function () {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower;
}
  //make sure we have enough cookies and subtract our cookies from the price
if (cookieCount >= grandmaPriceAmount) {
  //subtract cookies from grandmaPrice
  cookieCount += -grandmaPriceAmount;
  refreshCookieCount()

  //upgrade power level
  grandmaLevelNumber += 1;

  //update price
grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);

  //update grandma power
grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33)

  //turn autoGrandma on!
autoGrandma = true
autoGrandmaStart();
  //refresh shop item
refreshGrandma();
}
})

/*** facilities ***/
//set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.get.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function(){
  //set autoloop to false
  facilityAuto = false;

  //make sure we have enough cookies

    //upgrade power level
facilityLevelNumber += 1;
    //update price
facilityPriceAmount = Math.floor(facilityPriceAmount *1.33);
    //update facility power
facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33)
    //turn autoFacility on!
facilityAuto = true
autoFacilityStart();
    //refresh shop item
refreshFacility();
  }
})

//game loop
let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function(){
      cookieCount += facilityPower;
      refreshCookieCount();
    }, 1000);
}
//refresh Shop
let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;

}

buyClickPower.addEventListener("click," function(){

})

/*** Grandson ***/

let chefauto = false;
//set default values
let chefPower = 200;
let chefPriceAmount = 1000;
let chefLevelNumber = 0;

//declare DOM variables
let buyChef = document.getElementById('buy-chef');
let chefPrice = document.getElementById('chef-price');
let chefLevel = document.getElementById('chef-level');
let chefMultiple = document.getElementById('chef-multiple');

//buy a chef
buyChef.addEventListener("click", function() {
  window.setInterval(function(){
    //executin code loop goes here
  }, numberOfMilliSeconds)

let autoChefStart = function(){
  let chefInt = window.setInterval(function(){
    cookieCount += chefPower;
    refreshCookieCount();
  }, 1000);
}

let refreshChef = function() {
  chefMultiple.innerHTML = chefPower - 20;
}


let refreshChef = function () {
  chefLevel.innerHTML = chefLevelNumber
  chefPrice.innerHTML = chefPriceAmount;
  chefMultiple.innerHTML = chefPower;
}
  //make sure we have enough cookies and subtract our cookies from the price
if (cookieCount >= chefPriceAmount) {
  //subtract cookies from grandmaPrice
  cookieCount += -chefPriceAmount;
  refreshCookieCount()

  //upgrade power level
  chefLevelNumber += 1;

  //update price
chefPriceAmount = Math.floor(chefPriceAmount * 1.66);

  //update chef power
chefPower += 10 + Math.floor(chefLevelNumber * 1.66)

  //turn autoGrandma on!
autoChef = true
autoChefStart();
  //refresh shop item
refreshChef();
}
})
