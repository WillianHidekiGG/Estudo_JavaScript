function calcularIMC() {
        document.getElementById("peso").style.borderColor = "white";
        document.getElementById("peso").style.backgroundColor = "white";
            document.getElementById("altura").style.borderColor = "white";
            document.getElementById("altura").style.backgroundColor = "white";
  if (document.getElementById("peso").value == "") {
    alert("Preencha peso");
    document.getElementById("peso").style.borderColor = "red";
    document.getElementById("peso").style.backgroundColor = "#ffa5e5";
    document.getElementById("peso").focus;
    return false;
  }
  if (document.getElementById("altura").value == "") {
    alert("Preencha altura");
    document.getElementById("altura").style.borderColor = "red";
    document.getElementById("altura").style.backgroundColor = "#ffa5e5";
    document.getElementById("altura").focus;
    return false;
  }
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var resultado = peso/(altura*altura);
  alert("seu IMC é: "+resultado);
  return true;
  
}
