var fecha = document.querySelectorAll(".janela");

// mostra a mensagem
function mostarInformacao(){   
   document.getElementById("informarIMC").style.display = "block";  
 }
 function mostarCalculo(){   
  document.getElementById("Calculo").style.display = "block";  
}
function mostarTabela(){   
  document.getElementById("TabelaIMC").style.display = "block";  
}
// esconde a mensagem
function esconderInformacao(){
  if (document.getElementById("informarIMC").style.display == "block"  || document.getElementById("Calculo").style.display == "block"){
    document.getElementById("informarIMC").style.display = "none";
    document.getElementById("Calculo").style.display = "none";
  }
}

function fecharTabela(){
if( document.getElementById("TabelaIMC").style.display != "none"){
  document.getElementById("TabelaIMC").style.display = "none";
}else if(document.getElementById("TabelaIMC").style.display != "block"){
  document.getElementById("TabelaIMC").style.display = "block";
}
}

async function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var imc = (peso/(altura*altura));
  document.getElementById("altura").style.borderColor = "#ffffff";
  document.getElementById("altura").style.backgroundColor = "#ffffff";
  document.getElementById("peso").style.borderColor = "#ffffff";
  document.getElementById("peso").style.backgroundColor = "#ffffff";


Swal.fire({
  didOpen: () =>{
    if(peso == "0" ){
    document.getElementById("peso").style.borderColor = "red";
    document.getElementById("peso").style.backgroundColor = "#ffa5e5";
    document.getElementById("peso").focus;
    Swal.fire({
      icon:"warning",
      title:"Falta infomação",
      text:"Coloque seu peso",
    });
  }else if(altura == "0"){
    document.getElementById("altura").style.borderColor = "red";
    document.getElementById("altura").style.backgroundColor = "#ffa5e5";
    document.getElementById("altura").focus;
    Swal.fire({
      icon:"warning",
      title:"Falta infomação",
      text:"Coloque seu altura",
    });
  } else if(imc < "18"){
    Swal.fire({
      icon:"warning",
      title:"ABAIXO DO PESO",
      text:"Seu IMC é: "+ imc.toFixed(2) +". Procure um profissional da saúde para mais informações",
    });
   }else if(imc < "25"){
     Swal.fire({
       icon:"success",
       title:"PESO IDEAL",
       text:"Seu IMC é: "+ imc.toFixed(2) +". Mantenha o peso para melhor condição de saúde",
     });
   }else if(imc < "30"){
     Swal.fire({
       icon:"warning",
       title:"SOBRE PESO",
       text:"Seu IMC é: "+ imc.toFixed(2) +". Fique atento!",
     });
   }else if(imc < "35"){
     Swal.fire({
       icon:"warning",
       title:"OBSIDADE GRAU I",
       text:"Seu IMC é: "+ imc.toFixed(2) +". Procure um profissional da saúde para mais informações",
     });
   }else if(imc < "40"){
     Swal.fire({
       icon:"warning",
       title:"OBSIDADE GRAU II",
       text:"Seu IMC é: "+ imc.toFixed(2) +". Procure um profissional da saúde para mais informações",
     });
   }else if (imc > "41"){
     Swal.fire({
       icon:"warning",
       title:"OBSIDADE GRAU III",
       text:"Seu IMC é: "+ imc.toFixed(2) +". URGENTE! Procure um profissional da saúde para mais informações",
     });
   }else{
    Swal.fire({
      icon:"error",
      title:"Erro",
      text:"Algum dado foi informado errado",
    });
   }
  },
    });
}
