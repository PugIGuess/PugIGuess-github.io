// let kiryuCoins = document.querySelector('.kiryuCoinCount')
// let parsedKiryuCoins = parseFloat(kiryuCoins.innerHTML)

let i_affirmss = 1

function I_Affirm() {
    let kiryuCoins = document.querySelector('.kiryuCoinCount')
    let parsedKiryuCoins = parseFloat(kiryuCoins.innerHTML)
    

    parsedKiryuCoins = parsedKiryuCoins + i_affirmss
    kiryuCoins.innerHTML = Math.round(parsedKiryuCoins)

    if (parsedKiryuCoins >= 20) {
        drinkStaminanButtonAppear()
        
    }
}

heatActionButton = false
function drinkStaminanButtonAppear() {
    const drinkStaminanButton = document.querySelector('.drinkStaminanButton')
    drinkStaminanButton.style.display = "block"
}



function drinkStaminan() {

    let kiryuCoins = document.querySelector('.kiryuCoinCount')
    let parsedKiryuCoins = parseFloat(kiryuCoins.innerHTML)

    
    let staminanDrankNumber = document.querySelector('.staminanDrankNumber')

    if (parsedKiryuCoins >= 20) {
        const staminanStatus = document.querySelector('.staminanStatus')
        staminanStatus.style.display = "block"
        parsedKiryuCoins = parsedKiryuCoins - 20
        i_affirmss = i_affirmss + 1
        kiryuCoins.innerHTML = Math.round(parsedKiryuCoins)

        let drankCount = parseInt(staminanDrankNumber.innerHTML)
        drankCount = drankCount + 1
        staminanDrankNumber.innerHTML = parseFloat(drankCount)


        
        if (drankCount >= 3) {
            activateSecondStage()
        }
    }
}

function activateSecondStage() {
    const firstStage = document.querySelector('.initialKiryuStage')
    const secondStage = document.querySelector('.secondStage')
    const secondStageRight = document.querySelector('.secondStageRight')
    firstStage.style.display = 'none'
    secondStage.style.display = 'block'
    secondStageRight.style.display = 'block'
}

function perform_Heat_Action() {
    majimaHealth = document.querySelector('.majimaHealthCount')
    majima_health_redacted = parseFloat(majimaHealth.innerHTML)
    majima_health_redacted = majima_health_redacted - 20
    majimaHealth.innerHTML = Math.round(majima_health_redacted)

    if (majima_health_redacted <= 0) {
        activateThirdStage()
    }
}

function activateThirdStage() {
    const secondStage = document.querySelector('.secondStage')
    const secondStageRight = document.querySelector('.secondStageRight')
    const thirdStage = document.querySelector('.thirdStage')

    secondStage.style.display = 'none'
    secondStageRight.style.display = 'none'
    thirdStage.style.display = 'block'
}