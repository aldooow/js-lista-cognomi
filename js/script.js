var listaClasse = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var nuovaLista = document.getElementById('js_nuova-lista');
var cognomeForm = document.getElementById('js_cognome-form');
var numeroLista = document.getElementById('js_numero-lista');
var buttonForm = document.getElementById('js_button-form');
var hiddenUno = document.getElementById('js_hidden-1');
var hiddenDue = document.getElementById('js_hidden-2');
buttonForm.addEventListener('click',
function() {
  hiddenUno.className = 'wrapper hidden';
  hiddenDue.className = 'wrapper';

  listaClasse.push(cognomeForm.value);
  // listaClasse.sort()
  listaClasse.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
    });

  for (var i = 0; i < listaClasse.length; i++) {
    var listaFinale = nuovaLista.innerHTML;
    nuovaLista.innerHTML = listaFinale + '<li>' + listaClasse[i] + '</li>';
  }
  numeroLista.innerHTML = (listaClasse.indexOf(cognomeForm.value) + 1) + ' su ' + listaClasse.length;

})
