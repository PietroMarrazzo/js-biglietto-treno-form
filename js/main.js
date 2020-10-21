// reference elementi
var biglietto = document.getElementById("biglietto");
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

// calcolo biglietto e comparsa risultato
btnGenera.addEventListener('click', function() {
    
    var nome = document.getElementById('username').value;
    var percorrenza = document.getElementById('percorrenza').value;
    var eta = document.getElementById('fascia-eta').value;
    var prezzoBase = 0.21;
    var scontoU18 = 0.2;
    var scontoO65 = 0.3; 

    // calcolo
    var prezzo = prezzoBase * percorrenza;
    var offerta = 'Biglietto Standard';

    // calcolo sconto
    if (eta === 'minorenne') {
        
        prezzo -= prezzo * scontoU18; 
    } 
    else if (eta === 'Over 65') {
        prezzo -= prezzo * scontoO65; 
    }

});

