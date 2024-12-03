const emojis = [
  "😱",
  "😱",

  "😔",
  "😔",

  "😠",
  "😠",

  "😁",
  "😁",

  "😴",
  "😴",

  "🤔",
  "🤔",

  "😎",
  "😎",

  "🥶",
  "🥶",
];

let openCards = [];

let radomEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = radomEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add('boxOpen')
        openCards.push(this)
    }

    if(openCards.length === 2){
        setTimeout(checkMatch, 500)
    }
}
let tempo = 60;

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add('boxMatch')
        openCards[1].classList.add('boxMatch')
    }
    else{
        openCards[0].classList.remove('boxOpen')
        openCards[1].classList.remove('boxOpen')
    }
    openCards = []

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("You win!")
        tempo = 'acabou'
    }
}



function atualizarTimer(){
    document.getElementById('timer').innerHTML = tempo

    if(tempo > 0){
        tempo--
    }
    else if(tempo === 0 && document.querySelectorAll(".boxMatch").length !== emojis.length){
        alert('you lose')
    }
}

setInterval(atualizarTimer, 1000)