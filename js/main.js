var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(listaCognomi);

// 1. chiedi all’utente il cognome

var Cognome = prompt("Inserisci il tuo cognome");

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

listaCognomi.push(Cognome);

// 3. stampa la lista ordinata alfabeticamente

var listaOrdinata = listaCognomi.sort();
console.log(listaOrdinata);

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

console.log(listaOrdinata.indexOf("Baccini") + 1);
