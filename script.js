let Cards=document.querySelectorAll(".card")
let isFlipedCard=false
let firstCard;
let secondCard;
let lookBoard;
let counter=0



function flipCard(event){
    if(lookBoard==true){
        return
    }
    if(event.target.parentElement==firstCard){
        return
    }
    let element=event.target.parentElement
    element.classList.add("flip")

    if(isFlipedCard==false){
        isFlipedCard=true
        firstCard=element
        return
    }

    secondCard=element

    if(firstCard.dataset.card==secondCard.dataset.card){
        disabledCards()
        counter++
    }
    else{
        enabledCards()
    }

    if(counter==6){
        setTimeout(() => {
            resetGame()
        }, 1000)
    }
    
}

function resetVars(){
    isFlipedCard=false
    firstCard=null
    secondCard=null
    lookBoard=null
}

function disabledCards(){
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    resetVars()
}

function enabledCards(){
    lookBoard=true
    
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        resetVars()
    }, 1000)
}

Cards.forEach(card => {
    card.addEventListener("click", flipCard )
})

Cards.forEach(card => {
    let randomPoint=Math.floor(Math.random()*12)
    card.style.order=randomPoint
})


function resetGame(){
    Cards.forEach(card => card.classList.remove("flip"))
    resetVars()
    Cards.forEach(card=>card.addEventListener("click", flipCard ))
}