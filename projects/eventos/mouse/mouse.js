function sobre(){
    document.getElementById("sobre").style.backgroundColor="red";
    document.getElementById("log_sobre").innerHTML += " cor do olho: vermelha<br>";
}
function cima() {
  document.getElementById("baixo_cima").style.backgroundColor = "pink";
  document.getElementById("log_baixo").innerHTML += "cor do olho: rosa<br>";
}

function baixo() {
  document.getElementById("baixo_cima").style.backgroundColor = "blue";
  document.getElementById("log_baixo").innerHTML +="cor do olho: azul<br>";
}

function movendo() {
  document.getElementById("movendo").style.backgroundColor = "green";
  document.getElementById("log_movendo").innerHTML += "cor do olho: verde<br>";
}


function saindo() {
  document.getElementById("cores").style.backgroundColor = "gray";
  document.getElementById("log_sobre").innerHTML += "cinza";
}
