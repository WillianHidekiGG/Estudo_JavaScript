async function alert(){
     
    const { value: sair } = await Swal.fire({
      showClass: {
        popup: "animate__animated animate__zoomInDown",
      },
      icon: "question",
      iconColor: "black",
      background:
        "#fff url(https://www.trustedreviews.com/wp-content/uploads/sites/54/2018/04/Google-Logo.jpg) center",
      title: "Você deseja ir para o google?",
      showCancelButton: true,
      focusConfirm: false,
      reverseButtons: true,
      focusCancel: true,
      confirmButtonColor: "#00CED1",
      cancelButtonColor: "#FF6347",
      cancelButtonText: `Cancelar`,
      confirmButtonText: `Ir para o GOOGLE`,
      color: "black",
      customClass: {
        container: "alerta",
      },
      hideClass: {
        popup: "animate__animated animate__zoomOutUp",
      },
    }).then((result) => {
      if (result.value) {
        window.location.href = "https://www.google.com/webhp?authuser=3";
      }
    });
}