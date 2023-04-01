Nightly.isDark = true;

settingsMenuHtml =
  '<input type="checkbox" onclick="Nightly.isDark = !Nightly.isDark; setCSSLink()">';

/*var a = 10;
var b = 20;
var c = a * b;
alert("o valor é 1: " + 10);
 alert(c);
no alerta já soma os valores*/

var nome;
async function alert() {
  const { value: nome } = await Swal.fire({
    icon: "question",
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
