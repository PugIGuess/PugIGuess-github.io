function openShop() {
    const shopMenu = document.getElementById("shopMenu");
    shopMenu.style.display = "block";
    // shopMenu.style.justifyContent = "space-between";
}

function closeShop() {
    const shopMenu = document.getElementById("shopMenu");
    shopMenu.style.display = "none";
}



// SHOP
let testBuyAbility = true
let doesNothing = false
function testbuy() {
    if (testBuyAbility && parsed_coins >= 100) {
        testBuyAbility = false

        parsed_coins = parsed_coins - 100
        current_coins.innerHTML = Math.round(parsed_coins)

        let button = document.querySelector('.shopTestItem')
        button.innerHTML = "does nothing: bought"

        doesNothing = true
        doesNothingTest()
        }
    }

function doesNothingTest() {
    if (doesNothing === true) {
    parsed_coins = parsed_coins + 500
    current_coins.innerHTML = Math.round(parsed_coins)
    }
}

// converts coins to parsed coins.
let current_coins = document.querySelector('.liamCoinCost');
let parsed_coins = parseFloat(current_coins.innerHTML)

let coinsPerClick = 1;

function incrementPointOnClick() {
    parsed_coins += coinsPerClick
    // makes the html in doc equal to parsed coins rounded
    current_coins.innerHTML = Math.round(parsed_coins)
}


let coinsPerSecondVal = 0
function coinsPerSecond() {
    parsed_coins = Math.round(parsed_coins + coinsPerSecondVal)
    current_coins.innerHTML = Math.round(parsed_coins)
}

setInterval(coinsPerSecond, 1000)

function buySquirrelLiam() {
    let squirrelLiamCount = document.querySelector('.squirrelLiamCount')
    let squirrelLiamCoinsPerClick = 0
    // gets squirrelLiamCost and parses it
    let squirrelLiamCost = document.querySelector('.squirrelLiamCost')
    let parsedSquirrelLiamCost = parseFloat(squirrelLiamCost.innerHTML)


    if (parsed_coins >= parsedSquirrelLiamCost) {
        parsed_coins = parsed_coins - parsedSquirrelLiamCost
        current_coins.innerHTML = Math.round(parsed_coins)

        // ups the level count
        let currentLevel = parseInt(squirrelLiamCount.innerHTML);
        currentLevel += 1;
        squirrelLiamCount.innerHTML = currentLevel;

        // more coins per click
        squirrelLiamCoinsPerClick += 1
        coinsPerClick += 1

        // coins per click popup increases
        let squirrelLiamCoinsPerClickDisplay = document.querySelector('.squirrelLiamCoinsPerClickDisplay')
        let parsedLiamCPSDisplay = parseFloat(squirrelLiamCoinsPerClickDisplay.innerHTML)
        squirrelLiamCoinsPerClickDisplay.innerHTML = Math.round(parsedLiamCPSDisplay + 1)

        // cost increases
        squirrelLiamCost.innerHTML = Math.round(parsedSquirrelLiamCost * 1.8)

    }
}

function buyPoshLiam() {
    let poshLiamCount = document.querySelector('.poshLiamCount')
    let poshLiamCoinsPerSecond = 0

    let poshLiamCost = document.querySelector('.poshLiamCost')
    let parsedPoshLiamCost = parseFloat(poshLiamCost.innerHTML)


    if (parsed_coins >= parsedPoshLiamCost) {
        parsed_coins = parsed_coins - parsedPoshLiamCost
        current_coins.innerHTML = Math.round(parsed_coins)

        //ups the level count
        let currentLevel = parseInt(poshLiamCount.innerHTML);
        currentLevel += 1;
        poshLiamCount.innerHTML = currentLevel;

        // more coins per second
        poshLiamCoinsPerSecond += 1
        coinsPerSecondVal += 1

        // coins per second popup increases
        let poshLiamCoinsPerSecDisplay = document.querySelector('.poshLiamCoinsPerSecondDisplay')
        let parsedPoshLiamCPSDisplay = parseFloat(poshLiamCoinsPerSecDisplay.innerHTML)
        poshLiamCoinsPerSecDisplay.innerHTML = Math.round(parsedPoshLiamCPSDisplay + 1)

        //cost increases
        poshLiamCost.innerHTML = Math.round(parsedPoshLiamCost * 1.8)
    }
}





