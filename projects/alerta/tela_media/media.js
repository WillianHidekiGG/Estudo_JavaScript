async function calcularMedia() {
  var notaA = parseInt(document.getElementById("nota1").value);
  var notaB = parseInt(document.getElementById("nota2").value);
  var media = (notaA + notaB) / 2;
  Swal.fire({
    didOpen: () => {
      if (media >= 7) {
        Swal.fire({
          showClass: {
            popup: "animate__animated animate__bounceIn",
          },
          icon: "success",
          title: "Aprovado",
          text: "Aluno esta com a media " + media,
          backdrop: `
          rgba(0,0,123,0.4)
          url("https://gifs.eco.br/wp-content/uploads/2022/08/gifs-de-confete-1.gif")
          center
          no-repeat
          `,
          hideClass: {
            popup: "animate__animated animate__bounceOutUp",
          },
        });
      }
      if (media <= 7) {
        Swal.fire({
          showClass: {
            popup: "animate__animated animate__wobble",
          },
          icon: "error",
          title: "Reprovado",
          text: "Aluno esta com a media " + media,
          backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.pinimg.com/originals/5f/1e/e9/5f1ee9b64e2ac480cb93c85c7b9e6f16.gif")
          left 
          no-repeat
          `,
          hideClass: {
            popup: "animate__animated animate__fadeOutDown",
          },
        });
      }
    },
  });
}
