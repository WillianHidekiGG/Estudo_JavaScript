async function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value)/100;
  var imc = (peso/(altura*altura));
  document.getElementById("altura").style.borderColor = "#ffffff";
  document.getElementById("altura").style.backgroundColor = "#ffffff";
  document.getElementById("peso").style.borderColor = "#ffffff";
  document.getElementById("peso").style.backgroundColor = "#ffffff";


Swal.fire({
  didOpen: () =>{
    if(peso == "" ){
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
  } else if(imc < "18"){
    Swal.fire({
      icon:"warning",
      title:"ABAIXO DO PESO",
      text:"Procure um profissional da saúde para mais informações",
    });
   }else if(imc < "25"){
     Swal.fire({
       icon:"success",
       title:"PESO IDEAL",
       text:"Mantenha o peso para melhor condição de saúde",
     });
   }else if(imc < "30"){
     Swal.fire({
       icon:"warning",
       title:"SOBRE PESO",
       text:"Fique atento!",
     });
   }else if(imc < "35"){
     Swal.fire({
       icon:"warning",
       title:"OBSIDADE GRAU I",
       text:"Procure um profissional da saúde para mais informações",
     });
   }else if(imc < "40"){
     Swal.fire({
       icon:"warning",
       title:"OBSIDADE GRAU II",
       text:"Procure um profissional da saúde para mais informações",
     });
   }else{
     Swal.fire({
       icon:"warning",
       title:"OBSIDADE GRAU III",
       text:"URGENTE! Procure um profissional da saúde para mais informações",
     });
   };

  
  
  },

    });

    
    
    

  // var peso = parseFloat(document.getElementById("peso").value);
  // var altura = parseFloat(document.getElementById("altura").value);
  // var resultado = peso/(altura*altura);
  // alert("seu IMC é: "+resultado);
  // return true;
  
}
