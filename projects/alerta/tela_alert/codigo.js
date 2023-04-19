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
      '<span><a href="https://github.com/WolfWillian/WolfWillian">Confira meu GitHub</a></span>',
    customClass: {
      popup: "alerta",
      footer: "git",
    },
  });
}
