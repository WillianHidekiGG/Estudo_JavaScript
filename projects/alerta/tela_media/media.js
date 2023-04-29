async function calcularMedia() {
  var notaA = parseInt(document.getElementById("nota1").value);
  var notaB = parseInt(document.getElementById("nota2").value);
  var media = (notaA+notaB)/2;
 Swal.fire({
  didOpen: ()=> {
    if (media >= 7) {
      Swal.fire({
        icon: "success",
        title: "Aprovado",
        text:"Aluno esta com a media " + media,
      });
    }
    if (media <= 7) {
      Swal.fire({
        icon: "error",
        title: "Reprovado",
        text: "Aluno esta com a media " + media,
      });
    }
  },
});
}
