function alert() {
  Swal.fire({
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    icon: "success",
    title: "FUNCIONOU!",
    footer:
      '<a href="https://github.com/WolfWillian/Estudo_JavaScript.git">Confira meu GitHub</a>',
  });
}
