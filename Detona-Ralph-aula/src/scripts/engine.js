const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        time_left: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    values: {
        timer_id: null,
        hit_position: 0,
        result: 0,
        current_time: 60,
       
    },
    actions: {
        game_velocity: setInterval(randomSquare, 1000),
        count_down_timer_id: setInterval(count_down, 1000)
    }
}

function count_down(){

    state.values.current_time--
    state.view.time_left.textContent = state.values.current_time

    if(state.values.current_time <= 0){
        clearInterval(state.actions.count_down_timer_id)
        clearInterval(state.actions.timer_id)
        alert("Game Over! O seu resultado foi: " + state.values.result)
    } 
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy")
    });


    let random_number = Math.floor(Math.random()*9)

    let random_square = state.view.squares[random_number];
    
    random_square.classList.add("enemy")
    state.values.hit_position = random_square.id

}

function play_audio(){
    let audio = new Audio("./src/audios/8bit-damage1.wav")
    audio.volume = 0.2;
    audio.play()
}

function add_listener_hit_box(){
    state.view.squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if (square.id === state.values.hit_position){
                play_audio()
                state.values.result++
                state.view.score
                state.view.score.textContent = state.values.result
                state.values.hit_position = null
            }
        })
    })
}

function init(){
    add_listener_hit_box()

}

init()