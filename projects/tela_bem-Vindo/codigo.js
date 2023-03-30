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
  input: 'text',
  inputLabel: 'Qual seu nome?',
  inputPlaceholder: 'escreva seu nome aqui',
  showCancelButton: true
})

if (nome) {
  Swal.fire({
    title:'BEM-VINDO ' + nome,
    icon:'success',
  })
}
}
  