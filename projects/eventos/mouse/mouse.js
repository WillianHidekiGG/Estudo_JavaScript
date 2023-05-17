function sobre(){
    document.getElementById("sobre").style.backgroundColor="red";
    document.getElementById("log_sobre").innerHTML += "sobre a div cor: vermelha<br>";
}

function baixo() {
  document.getElementById("baixo_cima").style.backgroundColor = "blue";
  document.getElementById("log_baixo").innerHTML += "clicando na div cor: azul<br>";
}

function movendo() {
  document.getElementById("cores").style.backgroundColor = "green";
  document.getElementById("log").innerHTML += "movendo sobre a div cor: verde<br>";
}

function saindo() {
  document.getElementById("cores").style.backgroundColor = "orange";
  document.getElementById("log").innerHTML += "saindo da div cor: laranja<br>";
}

function cima() {
  document.getElementById("baixo_cima").style.backgroundColor = "pink";
  document.getElementById("log_baixo").innerHTML += "soltando o mouse na div cor: rosa<br>";
}
