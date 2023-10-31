# PASSWORD GENERATOR

## CONTENUTO

1. [Cosa può fare?](#js-starter)
2. [HTML start](#js-starter)
3. [JS start](#js-starter)

## Cosa può fare?

Genera una password casuale.

## HTML start 

Un semplice `< div>` con `#ID`
```html
<div id="..."></div>
```


## JS Start 
- Collegare una variabile al `#ID`.
- Inserire `Prompt` e visualizzarli nell `HTML`.
```js
const elementpassword=document.getElementById("...");

------------------------------------------------

elementPassword.innerHTML+=prompt("Inserisci il tuo nome")+prompt("Inserisci il tuo cognome")+prompt("Inserisci il tuo colore preferito")+Math.round(Math.random() * 1000)
```

