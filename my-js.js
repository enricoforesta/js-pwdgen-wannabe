/use script/

// // faccio le variabili collegati al id nell html
// const elementNome=document.getElementById("nome");
// const elementCognome=document.getElementById("cognome");
// const elementColore=document.getElementById("colore");

// // Controllo se collegati e funzionanti
// console.log(elementNome)
// console.log(elementCognome)
// console.log(elementColore)

// // faccio le variabili del prompt
// elementNome.innerHTML=prompt("Inserisci il tuo nome")
// elementCognome.innerHTML=prompt("Inserisci il tuo cognome")
// elementColore.innerHTML=prompt("Inserisci il tuo colore preferito")

// // Controllo se collegati e funzionanti
// console.log(elementNome)
// console.log(elementCognome)
// console.log(elementColore)



// Collego la variabile al id dell html

const elementRiepilogo = document.getElementById("riepilogo");

elementRiepilogo.innerHTML = "LA TUA PASSWORD: ";

// Controllo se funzionante

console.log(elementRiepilogo);

// Inserisco gli input del prompt all interno della pagina html

// elementRiepilogo.innerHTML+=prompt("Inserisci il tuo nome") + prompt("Inserisci il tuo cognome") + prompt("Inserisci il tuo colore preferito")+"17"

elementRiepilogo.innerHTML += prompt("Inserisci il tuo nome") + prompt("Inserisci il tuo cognome") + prompt("Inserisci il tuo colore preferito") + Math.round(Math.random() * 1000)

// Controllo se funzionante

console.log(elementRiepilogo);
