const emoji = [
    "🐶",
    "🐶",
    "🐺",
    "🐺",
    "🐱",
    "🐱",
    "🐯",
    "🐯",
    "🦊",
    "🦊",
    "🐰",
    "🐰",
    "🦝",
    "🦝",
    "🐵",
    "🐵"
];

let open_cards = [];

let shuffle_emoji = emoji.sort(() =>(Math.random() > 0.5) ? 2 : -1 )

for(let i = 0; i < emoji.length; i++){
    let box = document.createElement("div");
    box.className = "item"
    box.innerHTML = shuffle_emoji[i]
    box.onclick = handle_click
    document.querySelector(".game").appendChild(box)
}

function handle_click(){
    if(open_cards.length < 2){
        this.classList.add("box_open")
        open_cards.push(this)
    }
    if(open_cards.length === 2){
        setTimeout(checkMatch, 500)
    }

}

function checkMatch(){
    if(open_cards[0].innerHTML === open_cards[1].innerHTML){
        open_cards[0].classList.add("box_match")
        open_cards[1].classList.add("box_match")
        
    }else{
        open_cards[0].classList.remove("box_open");
        open_cards[1].classList.remove("box_open");
    }
    open_cards = [];

    if (document.querySelectorAll(".box_match").length === emoji.length){
        alert("Você vence!")
    }
}