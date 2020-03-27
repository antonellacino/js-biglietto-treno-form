//creo la variabile del nome del passeggero e la salvo in una variabile
var nomeU = document.getElementById('name');
//creo la variabile dell'età del passeggero e la salvo in una variabile
var etaU = document.getElementById('eta');
//creo la variabile dei km da percorrere e li salvo in una variabile
var kmP = document.getElementById('km');
//creo la variabile per la selezione del bottone
var generaButton = document.getElementById('genera');
//creo la variabile per il bottone annulla
var annullaButton = document.getElementById('annulla');
//creo la variabile costo del biglietto
var costoBiglietto = document.getElementById('costoBiglietto');
var msg = "";
//GENERAZIONE del biglietto------------------------------------------------
generaButton.addEventListener('click',
  function(){
    document.getElementById('output').style.opacity = ("100%");
    nome = nomeU.value;
    km = kmP.value;
    eta = etaU.value;
    costoBiglietto = km * 0.21;
    console.log(nome, km, eta);
    //eseguo i controlli sull'eta del passeggero e verifico se c'è uno sconto
    if (eta < 18) {
      costoBiglietto=costoBiglietto-(costoBiglietto*0.2); //costo biglietto=costoBiglietto*0.8
      msg=costoBiglietto.toFixed(2);
      var sconto = "Biglietto scontato";
    } else if (eta > 65) {
      costoBiglietto=costoBiglietto-(costoBiglietto*0.4);//costo biglietto=costoBiglietto*0.6
      msg=costoBiglietto.toFixed(2);
      var sconto = "Biglietto Over65";
    }else {
      msg=costoBiglietto.toFixed(2);
      var sconto = "Biglietto Standard";
    }
    console.log(costoBiglietto);
    //rimando a video i risultati
    document.getElementById('nome').innerHTML= nome;
    document.getElementById('sconto').innerHTML= sconto;
    document.getElementById('costoBiglietto').innerHTML= msg;
  }
)

//ANNULLAMENTO del biglietto------------------------------------------------
annullaButton.addEventListener('click',
  function(){
    document.getElementById('output').style.display = ('none');
    nomeU.value = "";
    kmP.value = "";
    etaU.value = "";
    costoBiglietto.value = "";
  });
