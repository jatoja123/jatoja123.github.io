function startGame() {
    return fetch('/Game/start',{
      method: 'post'
    }).then(data => console.log(data.status));
}

let gameState = ""
function getGame() {
    return fetch('/Game/state',{
      method: 'get'
    }).then(data => data.json()).then(res => {
        gameState = res.res
    });
}

window.setInterval(function(){
    getGame()
    document.getElementById("game").value = gameState;
}, 200);

function sendInput() {
    inp = document.getElementById("game-input").value;
    document.getElementById("game-input").value = ""

    return fetch('/Game/input',{
      method: 'post',
      body: JSON.stringify({
        "data": inp
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(data => console.log(data.status));
}