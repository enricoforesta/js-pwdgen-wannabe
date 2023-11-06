/use scrict/


// Collego la variabile

const elementPassword = document.getElementById("password");
const elementNome=prompt("Inserisci il tuo nome");
const elementCognome= prompt("Inserisci il tuo cognome");
const elementColore=prompt("Inserisci il tuo colore preferito");
const elementNumero=Math.floor(Math.random() * 1000) +1;

// Controllo se funzionante

console.log("nome:",elementNome);
console.log("cognome:",elementCognome);
console.log("colore:",elementColore);
console.log("Numero:",elementNumero);

// Inserisco gli input del prompt all interno della pagina html


elementPassword.innerHTML = "LA TUA PASSWORD: " +elementNome+elementCognome+elementColore+elementNumero ;

// Controllo se funzionante

console.log(elementPassword.innerHTML);
