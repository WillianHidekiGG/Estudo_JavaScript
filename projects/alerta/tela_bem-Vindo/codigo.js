var nome;
async function alert() {
  const { value: nome } = await Swal.fire({
    showClass: {
      popup: "animate__animated animate__wobble",
    },
    background: "#5F9EA0",
    icon: "question",
    iconColor: "yellow",
    input: "text",
    title: "Qual seu nome?",
    inputPlaceholder: "escreva seu nome aqui",
    showCancelButton: true,
    color: "black",
    hideClass: {
      popup: "animate__animated animate__zoomOut",
    },
    customClass: {
      container: "alerta",
    },
  });

  if (nome) {
    Swal.fire({
      showClass: {
        popup: "animate__animated animate__heartBeat",
      },
      title: "Bem-Vindo " + nome + " !",
      icon: "success",
      color: "Black",
      hideClass: {
        popup: "animate__animated animate__zoomOut",
      },
      customClass: {
        container: "alerta",
      },
      background:
        "#fff url(https://static8.depositphotos.com/1040728/935/i/450/depositphotos_9352351-stock-photo-party-balloons-flying.jpg)",
    });

  }
}

/*async function alertaSoma() {
  const { value: formValues } = await Swal.fire({
    showClass: {
      popup: "animate__animated animate__lightSpeedInLeft",
    },
    icon: "question",
    iconColor: "yellow",
    title: "Soma de Valores",
    html:
      '<input id="valor1" class="swal2-input">' +
      "+" +
      '<input id="valor2" class="swal2-input">',
    focusConfirm: false,
    background:
      "#fff  url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9r_tycLUQjMLiasGmjNPnYiZWXyksezy_h8yvLyheCLgHQheHBlxAPeSeE1Er01_5c&usqp=CAU) center ",
    color: "Black",
    hideClass: {
      popup: "animate__animated animate__lightSpeedOutRight",
    },
    preConfirm: () => {
      Swal.fire({
        showClass: {
          popup: "animate__animated animate__lightSpeedInLeft",
        },
        icon: "success",
        title: "O resultado é:",
        text:
          document.getElementById("valor1").value +
          document.getElementById("valor2").value,
        background:
          "#fff  url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9r_tycLUQjMLiasGmjNPnYiZWXyksezy_h8yvLyheCLgHQheHBlxAPeSeE1Er01_5c&usqp=CAU) center ",
        color: "Black",
        hideClass: {
          popup: "animate__animated animate__lightSpeedOutRight",
        },
      });
    },
  });
}*/

async function alertaSub() {
  const { value: formValues } = await Swal.fire({
    showClass: {
      popup: "animate__animated animate__lightSpeedInLeft",
    },
    icon: "question",
    iconColor: "yellow",
    title: "Subtração de Valores",
    html:
      '<input id="valor1" class="swal2-input">' +
      "-" +
      '<input id="valor2" class="swal2-input">',
    focusConfirm: false,
    background:
      "#fff  url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9r_tycLUQjMLiasGmjNPnYiZWXyksezy_h8yvLyheCLgHQheHBlxAPeSeE1Er01_5c&usqp=CAU) center ",
    color: "Black",
    customClass: {
      container: "alerta",
    },
    hideClass: {
      popup: "animate__animated animate__lightSpeedOutRight",
    },
    preConfirm: () => {
      Swal.fire({
        showClass: {
          popup: "animate__animated animate__lightSpeedInLeft",
        },
        icon: "success",
        title: "O resultado é:",
        text:
          document.getElementById("valor1").value -
          document.getElementById("valor2").value,
        background:
          "#fff  url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9r_tycLUQjMLiasGmjNPnYiZWXyksezy_h8yvLyheCLgHQheHBlxAPeSeE1Er01_5c&usqp=CAU) center ",
        color: "Black",
        customClass: {
          container: "alerta",
        },
        hideClass: {
          popup: "animate__animated animate__lightSpeedOutRight",
        },
      });
    },
  });

  if (formValues) {
    Swal.fire(JSON.stringify(formValues), {
      showClass: {
        popup: "animate__animated animate__lightSpeedInLeft",
      },
      icon: "success",
      background:
        "#fff url(https://s4.static.brasilescola.uol.com.br/be/2023/02/sinal-de-mais-menos-vezes-e-divisao-as-quatro-operacoes-matematicas-basicas-em-blocos-de-madeira-coloridos.jpg) center no-repeat",
      title:
        document.getElementById("valor1").value +
        document.getElementById("valor2").value,
      customClass: {
        container: "alerta",
      },
      hideClass: {
        popup: "animate__animated animate__lightSpeedOutRight",
      },
    });
  }
}

async function alertaMult() {
  const { value: formValues } = await Swal.fire({
    showClass: {
      popup: "animate__animated animate__lightSpeedInLeft",
    },
    icon: "question",
    iconColor: "yellow",
    title: "Multiplicação de Valores",
    html:
      '<input id="valor1" class="swal2-input">' +
      "*" +
      '<input id="valor2" class="swal2-input">',
    focusConfirm: false,
    background:
      "#fff  url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9r_tycLUQjMLiasGmjNPnYiZWXyksezy_h8yvLyheCLgHQheHBlxAPeSeE1Er01_5c&usqp=CAU) center ",
    color: "Black",
    customClass: {
      container: "alerta",
    },
    hideClass: {
      popup: "animate__animated animate__lightSpeedOutRight",
    },
    preConfirm: () => {
      Swal.fire({
        showClass: {
          popup: "animate__animated animate__lightSpeedInLeft",
        },
        icon: "success",
        title: "O resultado é:",
        text:
          document.getElementById("valor1").value *
          document.getElementById("valor2").value,
        background:
          "#fff  url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9r_tycLUQjMLiasGmjNPnYiZWXyksezy_h8yvLyheCLgHQheHBlxAPeSeE1Er01_5c&usqp=CAU) center ",
        color: "Black",
        customClass: {
          container: "alerta",
        },
        hideClass: {
          popup: "animate__animated animate__lightSpeedOutRight",
        },
      });
    },
  });
}

async function alertaDiv() {
  const { value: formValues } = await Swal.fire({
    showClass: {
      popup: "animate__animated animate__lightSpeedInLeft",
    },
    icon: "question",
    iconColor: "yellow",
    title: "Divisão de Valores",
    html:
      '<input id="valor1" class="swal2-input">' +
      "/" +
      '<input id="valor2" class="swal2-input">',
    focusConfirm: false,
    background:
      "#fff  url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9r_tycLUQjMLiasGmjNPnYiZWXyksezy_h8yvLyheCLgHQheHBlxAPeSeE1Er01_5c&usqp=CAU) center ",
    color: "Black",
    customClass: {
      container: "alerta",
    },
    hideClass: {
      popup: "animate__animated animate__lightSpeedOutRight",
    },
    preConfirm: () => {
      Swal.fire({
        showClass: {
          popup: "animate__animated animate__lightSpeedInLeft",
        },
        icon: "success",
        title: "O resultado é:",
        text:
          document.getElementById("valor1").value /
          document.getElementById("valor2").value,
        background:
          "#fff  url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9r_tycLUQjMLiasGmjNPnYiZWXyksezy_h8yvLyheCLgHQheHBlxAPeSeE1Er01_5c&usqp=CAU) center ",
        color: "Black",
        customClass: {
          container: "alerta",
        },
        hideClass: {
          popup: "animate__animated animate__lightSpeedOutRight",
        },
      });
    },
  });
}
