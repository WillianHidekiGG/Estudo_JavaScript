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
function alert() {
Swal.fire({
  title: 'Qual seu nome?',
  input: 'text',
  icon: 'warning',
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Confirmar!'
}).then((result) => {
  if (result.isConfirmed) {

    Swal.fire(
      'BEM-VINDO!',
      '',
      'success'
    )
  }
})
}
  