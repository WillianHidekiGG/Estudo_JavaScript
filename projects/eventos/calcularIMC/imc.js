async function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var imc = altura
  document.getElementById("altura").style.borderColor = "#ffffff";
  document.getElementById("altura").style.backgroundColor = "#ffffff";
  document.getElementById("peso").style.borderColor = "#ffffff";
  document.getElementById("peso").style.backgroundColor = "#ffffff";


Swal.fire({
  didOpen: () =>{
    if(peso == ""){
    document.getElementById("peso").style.borderColor = "red";
    document.getElementById("peso").style.backgroundColor = "#ffa5e5";
    document.getElementById("peso").focus;
    Swal.fire({
      icon:"warning",
      title:"Falta infomação",
      text:"Coloque seu peso",
    });
  }else if(altura == ""){
    document.getElementById("altura").style.borderColor = "red";
    document.getElementById("altura").style.backgroundColor = "#ffa5e5";
    document.getElementById("altura").focus;
    Swal.fire({
      icon:"warning",
      title:"Falta infomação",
      text:"Coloque seu altura",
    });
  };

  
   if(imc == 18){
    Swal.fire({
      icon:"warning",
      title:"ABAIXO DO PESO",
      text:"Seu IMC é " + imc + ", consulte um profissional da saude para mais orientação",
    });
  }

  },

    });
    
    

  // var peso = parseFloat(document.getElementById("peso").value);
  // var altura = parseFloat(document.getElementById("altura").value);
  // var resultado = peso/(altura*altura);
  // alert("seu IMC é: "+resultado);
  // return true;
  
}
