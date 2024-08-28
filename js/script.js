/**
 * Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS 1:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
BONUS 2:
Generiamo gli input da JS, invece di scriverli nel codice
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
* Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
:+1::+1::carnagione-3::+1::carnagione-2::+1::carnagione-5:
12
 */


/**
Scaletta

-al click mi genero il mio array di numeri casuali diversi
-li vorrei mostrare per 11 secondi
-li faccio sparire
-faccio comparire 5 campi di input 
-controllo i 2 array, quello di partenza e quello costruito dal'utente nei 5 campi di input
-li ristampo entrambi e mostro quali e quanti sono uguali 
*/



//Prep
//Recupero Elmenti dal DOM
const playBtn = document.getElementById('play');
const confirmBtn = document.getElementById('confirm');
const gameField = document.getElementById('gameField');
const rowInput = document.getElementById('rowInput');
const form = document.getElementById('formAnsw');



// Variabili Note
let memoNumbs = [];
const second = 1000;


// Eventi Dinammici
playBtn.addEventListener('click', function() {

    //pulisco il campo di gioco precedente
    emptyGameField();
    rowInput.innerHTML = '';
    confirmBtn.classList.add('d-none');
    
    //creo il mio array da ricordare per questa giocata
    memoNumbs = randomNumbers(66, 5);
    console.log(memoNumbs);
    
    //Mostro in pagina i numeri da ricodare
    showMemoNubs(memoNumbs);
    
    //Svuoto il campo di gioco dopo x secondi e creo i campi di input per le risposte
    setTimeout(() => {
        emptyGameField();        
        createNumInput(5, "input", rowInput);
        //Compare il bottone di submit per le risposte
        confirmBtn.classList.remove('d-none');
    }, second*2);   
})

/*
confirmBtn.addEventListener('click', function (event) {
    event.preventDefault();  // prevengo il ricaricamento della pagina

    let userArray = [];

    //mi recupero i nodi degli input
    const inputsField = document.querySelectorAll('input');
    
    // estraggo il valore di ogni input e lo metto in un array per il controllo
    for(let i = 0; i < inputsField.length; i++) {
        userArray.push(parseInt(inputsField[i].value));
    }
    console.log('userArray', userArray);
    console.log('numeri iniziali', memoNumbs);
    //const sortedUserArray = userArray.sort();
    //const sortedMemoNumbs = memoNumbs.sort();
    //console.log('sorted userArray', userArray);
    //console.log('sorted beggining numbers', memoNumbs);

    // variabile di controllo per i 2 array
    let count = 0;
    // array che conterrà i numeri che ho ricordato giustamente
    let guessedNum = [];
    // giro l'array da indovinare e mi chiedo se gli elementi dell'array dell'utente sono contenuti o meno
    for(let j = 0; j < memoNumbs.length; j++) {
        let numb = userArray[j];
        if (memoNumbs.includes(numb)) {
            guessedNum.push(numb);
            count++;
        }
    }
    
    // Produzione Output
    // Solo se ricordi esattamente 5 numeri hai vinto
    let winCon = count == memoNumbs.length ? 'Complimenti hai vinto!' : 'Hai perso, sarai più fortunato';
    // Rimostro gli array, e quelli ricordati giustamente
    winCon += `<br>${memoNumbs}, sono i numeri mostrati<br>${userArray}, sono i numeri che hai indicato tu<br>${guessedNum}, sono i numeri che hai ricordato`;
    // Faccio sparire, svuotando, i campi di input
    rowInput.innerHTML = '';
    // faccio sparire nuovamente il bottone di conferma
    confirmBtn.classList.add('d-none');
    // Aggiorno in pagina il risultato
    gameField.innerHTML = winCon;    
})
    */

form.addEventListener('submit', function(event) {
    event.preventDefault();  // prevengo il ricaricamento della pagina

    let userArray = [];

    //mi recupero i nodi degli input
    const inputsField = document.querySelectorAll('input');
    
    // estraggo il valore di ogni input e lo metto in un array per il controllo
    for(let i = 0; i < inputsField.length; i++) {
        userArray.push(parseInt(inputsField[i].value));
    }
    console.log('userArray', userArray);
    console.log('numeri iniziali', memoNumbs);
    //const sortedUserArray = userArray.sort();
    //const sortedMemoNumbs = memoNumbs.sort();
    //console.log('sorted userArray', userArray);
    //console.log('sorted beggining numbers', memoNumbs);

    // variabile di controllo per i 2 array
    let count = 0;
    // array che conterrà i numeri che ho ricordato giustamente
    let guessedNum = [];
    // giro l'array da indovinare e mi chiedo se gli elementi dell'array dell'utente sono contenuti o meno
    for(let j = 0; j < memoNumbs.length; j++) {
        let numb = userArray[j];
        if (memoNumbs.includes(numb)) {
            guessedNum.push(numb);
            count++;
        }
    }
    
    // Produzione Output
    // Solo se ricordi esattamente 5 numeri hai vinto
    let winCon = count == memoNumbs.length ? 'Complimenti hai vinto!' : 'Hai perso, sarai più fortunato';
    // Rimostro gli array, e quelli ricordati giustamente
    winCon += `<br>${memoNumbs}, sono i numeri mostrati<br>${userArray}, sono i numeri che hai indicato tu<br>${guessedNum}, sono i numeri che hai ricordato`;
    // Faccio sparire, svuotando, i campi di input
    rowInput.innerHTML = '';
    // faccio sparire nuovamente il bottone di conferma
    confirmBtn.classList.add('d-none');
    // Aggiorno in pagina il risultato
    gameField.innerHTML = winCon;    
})