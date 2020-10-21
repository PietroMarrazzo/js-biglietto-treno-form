// reference elementi
var biglietto = document.getElementById("biglietto");
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

// calcolo biglietto e comparsa risultato
btnGenera.addEventListener('click', function() {
    
    // reference biglietto
    var nome = document.getElementById('username').value;
    var percorrenza = document.getElementById('percorrenza').value;
    var eta = document.getElementById('fascia-eta').value;
    var prezzoBase = 0.21;
    var scontoU18 = 0.2;
    var scontoO65 = 0.3; 

    // calcolo prezzo biglietto
    var prezzo = prezzoBase * percorrenza;
    var offerta = 'Biglietto Standard';

    // calcolo eventuale sconto
    if (eta === 'U18') {
        prezzo -= prezzo * scontoU18; 
        offerta = 'Biglietto Under 18';
    } 
    else if (eta === 'O65') {
        prezzo -= prezzo * scontoO65; 
        offerta = 'Biglietto Over 65';
    }
    prezzo = prezzo.toFixed(2) + ' €';
    
    // generatore carrozza e codice treno
    var codTreno = Math.floor((Math.random() * 1000) + 9000);
    var nCarrozza = Math.floor((Math.random() * 10) + 1);

    // display biglietto e info 
    if (nome == '' || percorrenza <= 0) {
        biglietto.className = 'hidden';
        alert('Compila i moduli correttamente per validare il biglietto');
        
    } else
    biglietto.className = 'display container';
    document.getElementById('nome').innerHTML = nome;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = nCarrozza;
    document.getElementById('codice').innerHTML = codTreno;
    document.getElementById('costo').innerHTML = prezzo;

});

// bottone reset
btnAnnulla.addEventListener('click', function() {

    // display biglietto e info 
    biglietto.className = 'hidden';
    document.getElementById('nome').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice').innerHTML = '';
    document.getElementById('costo').innerHTML = '';

    document.getElementById('username').value = '';
    document.getElementById('percorrenza').value = '';
    document.getElementById('fascia-eta').value = '';


});

