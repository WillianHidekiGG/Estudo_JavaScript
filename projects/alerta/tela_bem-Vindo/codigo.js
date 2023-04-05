Nightly.isDark = true;

settingsMenuHtml =
  '<input type="checkbox" onclick="Nightly.isDark = !Nightly.isDark; setCSSLink()">';






var nome;
async function alert() {
  const { value: nome } = await Swal.fire({
    icon: "question",
    iconColor: "yellow",
    input: "text",
    title: "Qual seu nome?",
    inputPlaceholder: "escreva seu nome aqui",
    showCancelButton: true,
  });

  if (nome) {
    Swal.fire({
      title: "Bem-Vindo " + nome + " !",
      icon: "success",
      background:
        "#fff url(https://static8.depositphotos.com/1040728/935/i/450/depositphotos_9352351-stock-photo-party-balloons-flying.jpg)",
    });
  }
}

async function alertaSub() {
  const { value: formValues } = await Swal.fire({
    icon: "question",
    iconColor: "yellow",
    title: "Subtração de Valores",
    html:
      '<input id="valor1" class="swal2-input">' +
      "-" +
      '<input id="valor2" class="swal2-input">',
    focusConfirm: false,
    background:
      "#fff  url(https://s4.static.brasilescola.uol.com.br/be/2023/02/sinal-de-mais-menos-vezes-e-divisao-as-quatro-operacoes-matematicas-basicas-em-blocos-de-madeira-coloridos.jpg)",
      color: "white",
    preConfirm: () => {
      return [
        document.getElementById("valor1").value -
          document.getElementById("valor2").value,
      ];
    },
  });

  if (formValues) {
    Swal.fire(JSON.stringify(formValues), {
      icon: "success",
      background:
        "#fff url(https://s4.static.brasilescola.uol.com.br/be/2023/02/sinal-de-mais-menos-vezes-e-divisao-as-quatro-operacoes-matematicas-basicas-em-blocos-de-madeira-coloridos.jpg)",
      title:
        document.getElementById("valor1").value +
        document.getElementById("valor2").value,
    });
  }
}

async function alertaMult() {
  const { value: formValues } = await Swal.fire({
    icon: "question",
    iconColor: "yellow",
    title: "Multiplicação de Valores",
    html:
      '<input id="valor1" class="swal2-input">' +
      "*" +
      '<input id="valor2" class="swal2-input">',
    focusConfirm: false,
    background:
      "#fff url(https://s4.static.brasilescola.uol.com.br/be/2023/02/sinal-de-mais-menos-vezes-e-divisao-as-quatro-operacoes-matematicas-basicas-em-blocos-de-madeira-coloridos.jpg)",
    color: "white",
    preConfirm: () => {
      return [
        document.getElementById("valor1").value *
          document.getElementById("valor2").value,
      ];
    },
  });

  if (formValues) {
    Swal.fire(JSON.stringify(formValues), {
      icon: "success",
      iconColor: "green",
      title:
        document.getElementById("valor1").value +
        document.getElementById("valor2").value,
      background:
        "#fff url(https://s4.static.brasilescola.uol.com.br/be/2023/02/sinal-de-mais-menos-vezes-e-divisao-as-quatro-operacoes-matematicas-basicas-em-blocos-de-madeira-coloridos.jpg)",
    });
  }
}

