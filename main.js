
// ! Primo Esercizio//


// let utente = 40;
// let century = 100 - utente; 


// console.log(`Hai ${utente} anni e te ne mancano ${century} per arrivare a 100`);



// ! Secondo Esercizio//

// let gatti = 44;
// let file = 6;

// console.log(`Ci sono ${Math.floor(gatti / file)} file di gatti, e ne mancano ${file - ( gatti % file ) } per una nuova fila ,con un avanzo di ${gatti % file}`);


// ! Terzo Esericizio 

// console.log(`la temperatura piu calda e'${Math.max(10, -2, 31, 15, 22, -6 , 7)} e la temperatura piu fredda e' ${Math.min(10, -2, 31, 15, 22, -6 , 7)}`);


// ! quarto esercizio

// (false, 23, NaN, ‘Ciao’, null)

// console.log(false === 23 || NaN != 'ciao' || null != 0);

//  console.log(false == 23 && NaN != 'ciao' || null != 0);



// ----------------------------------------------------------------------------------------------



// ! Esercizio numero 1 

// let day_of_the_week = prompt("Inserisci un numero")
// let lunedi = 1;
// let martedi = 2;
// let mercoledi = 3;
// let giovedi = 4;
// let venerdi = 5;
// let sabato = 6;
// let domenica = 7;

// if(day_of_the_week == 1){
//     console.log("oggi e' lunedi");
// }else if(day_of_the_week == 2 ){
//     console.log("oggi e' martedi");
// }else if(day_of_the_week == 3 ){
//     console.log("oggi e' mercoledi");
// }else if(day_of_the_week == 4 ){
//     console.log("oggi e' giovedi");
// }else if(day_of_the_week == 5 ){
//     console.log("oggi e' venerdi");
// }else if(day_of_the_week == 6 ){
//     console.log("oggi e' sabato");
// }else if(day_of_the_week == 7 ){
//     console.log("oggi e' domenica");
// }else{
//     alert("errore, giorno della settimana non valido");
// }




// ! esercizio numero 2

// let request = prompt(`inserisci un numero`)

// for(let i = 0; i <= 10; i++  ){

// 	console.log(request * i);
// }




// ! terzo esercizio 


// ! MODO SICURAMENTE PIU CORRETTO
// let counter = 0;
// for(let i=1; i<=100; i++){
//     console.log(i);
//     counter++
//     if(counter==10){
//         counter=0;
//         console.log('\n');
//     }
// }

// ! altro metodo

// for(let i=1; i<=100; i+=10){
//     console.log(`${i}, ${i+1}, ${i+2}, ${i+3}, ${i+4}, ${i+5},${i+6},${i+7}, ${i+8},${i+9},`);
// }


// ! altro metodo ancora e probabilmente quello corretto al 100%

// let p = "";

// conta da 1 a 100
// for(let i = 1; i <=100; i++){ 
// SCATTA LA TYPE COHERTION 
// trasforma i in stringa e le " " separano i numeri
// p = p + " " + i;

// ogni multiplo di 10 va a capo perche dopo il 10 aggiunge \n 
// if(i % 10 == 0){
// p = p + "\n";
// }

//}

//console.log(p);
//



// ! quarto esercizio

// let fizz = 3;
// let buzz = 5;
// let fizzbuzz = 15;

// for (let i = 1; i <= 100; i++) {
//   if (i % fizzbuzz == 0) {
//     console.log("FizzBuzz");
//   } else if (i % fizz == 0) {
//     console.log("Fizz");
//   } else if (i % buzz == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }



// ---------------------------------------------------------------------------------------

// ! ESERCIZIO WEEKEND #2

// let num = prompt("dammi un numero")


// while(num != 1){
    
//         if(num % 2 === 0){
//                 num = num / 2;
//         console.log(num);
//     }else{
//             num = (num * 3) + 1;
//             console.log(num);
//         }
//     }
    
    
    
    
    // ! ESERCIZIO WEEKEND #1
    

// let punteggio_giocatore_1 = 0;
// let punteggio_giocatore_2 = 0;
// let n = prompt("inserisci quante volte vuoi tirare un dado")




// for(let i = 1; i <= n; i++){
    
//     let random_1 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
//     punteggio_giocatore_1 = punteggio_giocatore_1 + random_1
//     console.log(`Al tiro di dado numero ${i} e' uscito ${random_1} e quindi il punteggio del giocatore 1 adesso vale: ${punteggio_giocatore_1}`);
    
//     let random_2 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
//     punteggio_giocatore_2 = punteggio_giocatore_2 + random_2
//     console.log(`Al tiro di dado numero ${i} e' uscito ${random_2} e quindi il punteggio del giocatore 2 adesso vale: ${punteggio_giocatore_2}`);
// } 
//     console.log(`Questo e' il punteggio del giocatore uno : ${punteggio_giocatore_1}`);
//     console.log(`Questo e' il punteggio del giocatore due : ${punteggio_giocatore_2}`);


// if(punteggio_giocatore_1 > punteggio_giocatore_2){
//     console.log('VITTORIA GIOCATORE 1');
//    }else if(punteggio_giocatore_1 < punteggio_giocatore_2){
//     console.log('VITTORIA GIOCATORE 2');
//    }else {
//     console.log("PAREGGIO");
//    }

   



// ! Esercizi Funzioni

// ! Esercizio 1

// function presentazione(nome, eta, linguaggio){
//     return `ciao mi chiamo ${nome} ho ${eta} anni e il mio linguaggio preferito e' ${linguaggio}`
// }

// let matteo = presentazione('Matteo', '36', 'javascript');
// let davide = presentazione('davide', '26', 'javascript');
// let claudio = presentazione('claudio', '16', 'javascript');


// console.log(matteo);
// console.log(davide);
// console.log(claudio);


// ! Esercizio 2

// secondo esercizio (da rivedere con il prompt)
// function confronto(val1, val2){
//     if(val1 === val2){
//         return 'true'
//     }else if(val1 < val2){
//         return `false`
//     }else if(val1 > val2){
//         return `true`
//     }else if (val2 != Number){
//         return "false"
//     }
// }
   

// let conf = confronto(prompt('valore1'), prompt('valore2'));

// console.log(conf);



// ! Esercizi Array


// ! Esercizio 1

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10]

// numbers.splice(8,1,9)
// console.log(numbers);


// ! Esercizio 2

// let names = []

// names.unshift('Arahy Espinoza', 'Davide Benedetti', 'Giada Monni')

// console.log(names);





// ! Esercizio Funzioni + Array

// formula di decrescenza = number.sort(  (a , b)=> b - a );
// formula di crescenza = number.sort(  (a , b)=> a - b );

// Esempio:

// let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// numbers.sort(  (a , b)=> b - a );

// console.log(numbers);

// ! Risoluzione Esercizio 1

// function ordina(n){
//     return n.sort(  (a , b)=> a - b )
// }

// let array = ordina([3, 7, -2, 5, 8, 1, 2, 5, 6, -4])

// console.log(array);


// !Risoluzione Esercizio 2


// function massimo(n){
//     n = Math.max(...n)
//     return `il numero massimo di questo array e' ${n}`
// }

// function minimo(n){
//     n = Math.min(...n)
//     return `il numero minimo di questo array e' ${n}`
// }

// let max = massimo([1, -10, 4])
// let min = minimo([1, -10, 4])
// console.log(max);
// console.log(min);


// ! Esercizi completamente rifatti per allenamento ---------------------------------------

// function esercizio(nome, eta, preferenza){
//     return `ciao mi chiamo ${nome} ho ${eta} anni e il mio linguaggio di programmazione preferito e' ${preferenza}`
// }

// let presentazione = esercizio('Matteo' , '36', 'Javascript')
// console.log(presentazione);

// function confronto(valore1, valore2){
//     if(valore1 < valore2){
//         return false
//     }else if(valore1 === valore2){
//         return true
//     }else if(valore1, valore2 =! Number){
//         return false
//     }
// }

// let val1 = prompt(`inserisci un valore`)
// let val2 = prompt(`inserisci un altro valore`)

// let conf = confronto(val1, val2);
// console.log(conf);


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10]

// numbers.splice(8,1,9)

// console.log(numbers);


// let nomi = []

// nomi.unshift(`Matteo`, `Davide`, `Lalitta`)

// console.log(nomi);

// function ordina(numeri){
//     return numeri.sort(  (a , b)=> b - a )
// }

// let array = ordina([3, 7, -2, 5, 8, 1, 2, 5, 6, -4])
// console.log(array);

// function ordina(numeri){
//     return numeri.sort(  (a , b)=> a - b )
// }

// let array = ordina([3, 7, -2, 5, 8, 1, 2, 5, 6, -4])
// console.log(array);


// function massimo(numero){
//     return Math.max(...numero)
// }

// let max = massimo([1, -10, 4])
// console.log(`il valore massimo di questo array e' ${max}`);

// function minimo(numero){
//     return Math.min(...numero)
// }

// let min = minimo([1, -10, 4])
// console.log(`il valore massimo di questo array e' ${min}`);

// ! ----------------------------------------------------------------

// Esercizi fatti durante la lezione

// esercizio 1
// function capovolgi(str){
//      return str.split(' ').reverse();
// }

// let frase = capovolgi("ciao a tutti")

// console.log(frase);



// function moltiplica(arr1, arr2){

//     let arr3 = arr1.map((arr1)=> arr1*arr2)
//     return arr3
// }

// let risultato = moltiplica([2,4,6],[2])

// console.log(risultato);


// !-----------------------------------------------------------------------

// ! Esercizio 1 (da rivedere il limite)(sistemato sotto rifacendo l'esercizio)

// function conta(s){
//     s = s.split('')
//     return s.length
// }

// let input = conta('9')
// console.log(input);


// ! Esercizio 2 

// function palindromo(str){
//     str = str.replace(/\W/g,"")
//     let reversedstr = str.split('').reverse().join('')
//     return str === reversedstr
// }

// let stringa = palindromo("i topi non avevano nipoti")

// console.log(stringa);


// ! Esercizio 3

// function random(n){

//     let randomnumbers = [];
//     for(let i = 0; i < n; i++){
//        randomnumbers.push(Math.floor(Math.random() * 100))
//     }

//     return randomnumbers;
// }


// let input = random(5)
// console.log(input);

// ! Esercizio 4

// function operateArrays(a, b, operation) {
//     let result = [];
//     for(let i = 0; i < 10; i++){
//         switch (operation) {
//             case "addizione":
//             result.push(a[i] + b[i])
//             break;
//             case "sottrazione":
//             result.push(a[i] - b[i])
//             break;
//             case "moltiplicazione":
//             result.push(a[i] * b[i])
//             break;
//             case "divizione":
//             result.push(a[i] / b[i])
//             break;

//             default:
//             console.log('operazione non valida');
//         }
//     }
//     return result
// }

// let a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 10];
// let b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 10];
// let operation = "moltiplicazione";
// let result = operateArrays(a, b, operation);
// console.log(result);


// ! Esercizio 5 (capito ma da rivedere assolutamente.)

// function valoriMinoriMedia(array) {
//     let media = array.reduce((acc, curr) => acc +curr, 0) / array.length;
//     let valoriMinori = array.filter((valore) => valore < media);
//     let valoriMaggiori = array.filter((valore) => valore >= media);
//     console.log(`Media: ${media}`);
//     console.log(`valori minori della media: ${valoriMinori}`);
//     console.log(`valori maggiori o uguali della media: ${valoriMaggiori}`);
//     return valoriMinori
// }

// let a = [3, 5, 10, 2, 8]
// let valoriMinori = valoriMinoriMedia(a);
// console.log(`valori minori della media: ${valoriMinori}`);






// ! Ripetizione esercizi Sopra -------------------------------------------------------------

// ! Esercizio 1
// Scrivere una funzione che prenda in input un numero intero (massimo 9999) conti da quante cifre è formato.

// function conta(stringa){
//     if(stringa.length > 4){
//         return stringa = (`Valore non valido`);
//     }else{
//         stringa = stringa.split('')
//         return stringa.length
//     }
// }

// let str = conta('9999')


// console.log(str);


// ! Esercizio 1 svolto da matteo

// function contaCifre(numero){
//     let str = numero.toString();
//     return str
// }

// console.log(contaCifre(9999));


// ! Esercizio 2
// Scrivere una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

// function palindromo(stringa){
//     stringa = stringa.replace(/\W/g,"")
//     let stringasplitted = stringa.split('').reverse().join('');
    
//     return stringa === stringasplitted
// }

// let str = palindromo(`i topi non avevano nipoti`)
// console.log(str);




// ! Esercizio 4

// function operazioni(array1, array2, operation) {
//     let result = []
//     for(i = 0; i < 10; i++){
//         switch (operation) {
//             case 'addizione':
//                 result.push(array1[i] + array2[i])
//                 break;
//                 case 'sottrazione':
//                 result.push(array1[i] - array2[i])
//                 break;
//                 case 'moltiplicazione':
//                 result.push(array1[i] * array2[i])
//                 break;
//                 case 'divisione':
//                 result.push(array1[i] / array2[i])
//                 break;
//             default:
//                 break;
//         }
//     }

//     return result
// }


//     let valori = operazioni([3, 7, 2, 5, 8, 1, 2, 5, 6, 4],[9, 3, 1, 4, 7, 6, 5, 10, 1, 5],'sottrazione')

//     console.log(valori);



// ! Sempre esericizio 4 ma con l'utilizzo del if/else

// function operazioni(array1, array2, operation){
//     let result = []
//     for(let i = 0; i < 10;i++){
//     if(operation === "addizione"){
//         result.push(array1[i] + array2[i])
//     }else if(operation === "sottrazione"){
//         result.push(array1[i] - array2[i])
//     }else if(operation === "moltiplicazione"){
//         result.push(array1[i] * array2[i])
//     }else if(operation === "divisione"){
//         result.push(array1[i] / array2[i])
//     }
// }
//     return result
// }



// let a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4] 
// let b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5]
// let operatore = ('moltiplicazione')


// let risultato = operazioni(a,b,operatore)
// console.log(risultato);


// ! Esercizio 3 


// function casuale(n){
//     let result = []
//     for (i=0; i < n ; i++) {
        
//         result.push(Math.round(Math.random () * 100))
//     }

//     return result
// }

// let num = casuale(10)
// console.log(num);




// ! Esercizio 5

// function calcolamedia(numbers){
//     let media = 0
//     let valorimin = []
//     media = numbers.reduce((a, b) => a + b, 0) / numbers.length;
//     for(let i = 0; i < numbers.length; i++) {
//         if(numbers[i] < media) {
//           valorimin.push(numbers[i]);
//         }
// }
// console.log(valorimin);
// return media
// }


// let num = calcolamedia([3, 5, 10, 2, 8])
// console.log(num);





// ! -----------Test kata-----------

// Escludi un numero negativo da un array e somma i positivi

// function positiveSum(arr) {
//     let negatives = [];
//     let sum = 0;
  
//     for(let i = 0; i < arr.length; i++) {
//       if(arr[i] < 0) {
//         negatives.push(arr[i]);
//       }else{
//         sum = sum + arr[i];
//       }
//     }
  
//     return sum;
//   }


//  Rendi un numero negativo

// function makeNegative(num) {
//     return num = (num * -1)
//   }

//   let numero = makeNegative(9)
//   console.log(numero);


//  Reverse Stringa
// function solution(str){
//     return str.split("").reverse().join("")
//   }

// --------------------------------------------------------------------------------------------------------------------

// Esercizio conta pecore 

// function countSheeps(arrayOfSheep) {
//     let num = 0;
    
//     for(let i = 0; i < arrayOfSheep.length; i++)
//       if(arrayOfSheep[i] == true)
//         num++;
        
//     return num;
//   }
    
//     var array1 = countSheeps([true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true ]);

//     console.log(array1);

// --------------------------------------------------------------------------------------------------------------------

// Calcola il secolo partendo dall'anno

// function century(year) {
    
//     return Math.floor((year-1)/100) + 1
//   }

//   let anno = century(1995)
//   console.log(anno);

// --------------------------------------------------------------------------------------------------------------------

// Trasforma un booleano in una stringa

// function booleanToString(b){
//     return b.toString();
//   }

// --------------------------------------------------------------------------------------------------------------------

// Prendi il valore piu alto  da una stringa di numeri

// function high(stringa){
    
//     let splitted = stringa.split(' ').map(Number);
//     let max = splitted.reduce((a, b) => Math.max(a, b), -Infinity);
//     return max
// } 

 

//   let stringa = high("1 2 3 4 500")
//   console.log(stringa);




// ! Esercizi del 01/03/2023

// Scrivere una funzione che prenda in ingresso una stringa e la restituisca tutta in maiuscolo

// function convertiInMaiuscolo(stringa){
//     return stringa.toUpperCase()
// }

// let str = convertiInMaiuscolo('ciao mi chiamo paolo')
// console.log(str);

// --------------------------------------------------------------------------------------------------------------------

// Scrivere una funzione che prenda in ingresso un qualunque numero intero N e stampi in console tutti i numeri da 1 ad N


// function conta(n){
//     for (var i = 1; i <= n; i++)        
//     console.log(i);
//     }

// let num = conta(1000)

// --------------------------------------------------------------------------------------------------------------------

// Scrivere una funzione che prenda in ingresso due array e mi restituisca un nuovo array che sia la concatenazione dei primi due. 
// Es. arr1 = [1,2,3]  arr2 = [4,5,6]     output = [1,2,3,4,5,6]


// function concatenazione(array1, array2){
//     let array3 = array1.concat(array2)
//     return array3
// }


// let result = concatenazione([1,2,3],[4,5,6])
// console.log(result);

// --------------------------------------------------------------------------------------------------------------------

// Scrivere una funzione che prenda in ingresso un array di nomi e mi restituisca l'array con i nomi in ordine alfabetico capovolto.
// Es. arr = ['Matteo', 'Anakin', 'Luke', 'ObiWan']     output = ['ObiWan', 'Matteo', 'Luke', 'Anakin']


// function riordina(array){
//     let array_riordinato = array.sort().reverse()
//     return array_riordinato
// }

// let arr = riordina(['Matteo', 'Anakin', 'Luke', 'ObiWan']);
// console.log(arr);

// --------------------------------------------------------------------------------------------------------------------

// Esercizi intermedi:
// Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array con i numeri triplicati

// function triplica(array){
//     let arr3 = []
//     for(i=0; i < array.length; i++){
//     arr3.push(array[i] * 3)
    
// }
//     return arr3
// }

// let arr = triplica([6,9,27])
// console.log(arr);

// --------------------------------------------------------------------------------------------------------------------

// - Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array che contenga soltanto i numeri multipli di 10
// Es. arr = [1, 10, 56, 130, 45]    output = [10, 130]


// function seleziona(array){
    
//     let arraymultiplo = []
//     for(i=0; i < array.length; i++){
//     if(array[i] % 10 === 0 ){
//         arraymultiplo.push(array[i])
//     }
// }
//  return arraymultiplo   
// }

// let arr = seleziona([1, 10, 56, 130, 45, 800, 1000, 3, 74])

// console.log(arr);

// --------------------------------------------------------------------------------------------------------------------

// Scrivere una funzione che prenda in ingresso una stringa e me la restituisca capovolta

// function capovolgi(stringa){
//     let stringa_capovolta = stringa.split("").reverse().join("");
//     return stringa_capovolta
// }

// let str = capovolgi('ciao')
// console.log(str);

// --------------------------------------------------------------------------------------------------------------------

// Scrivere una funzione che prenda in ingresso un qualsiasi numero di parametri e mi stampi in console tutti i parametri passati. (Indizio: spread operator)

// function stampa(...valori){
//     return valori
// }

// let val = stampa(1,2,'ciao',7,['claudio',1,9], 1, 99, 'paolo')

// console.log(val);

// --------------------------------------------------------------------------------------------------------------------

// Scrivere una funzione che prenda in ingresso o un numero o una stringa. Se il dato passato e' un numero deve trasformarlo in stringa, se il dato passato e' una stringa deve restituirla capovolta
// Es. input = 5   output = '5'              Es2. input = 'Ciao'   output = 'oaiC'


// function transform(valore) {
//     if (typeof valore === 'number') {
//       return valore.toString();
//     } else if (typeof valore === 'string') {
//       return valore.split('').reverse().join('');
//     } else {
//       return valore;
//     }
//   }


//   let val = transform(5)
//   console.log(val);

// --------------------------------------------------------------------------------------------------------------------

// Scrivere un oggetto che rappresenti un garage. Questo garage dovra' avere una proprieta' che rappresenti una lista di auto ed alcuni metodi. Un metodo deve permettermi si stampare in console la lista di auto presenti in garage. Un metodo deve permettermi di aggiungere una nuova auto. Un metodo deve permettermi di rimuovere una delle auto nella lista.



// let garage = {
    
//     'lista_auto' : ['smart', '500', 'aygo'],
//     'proprietario_garage' : 'Hack69',
    
//     mostra_auto : function(){
//         this.lista_auto.forEach( (auto)=> console.log(auto) )
//     },

//     aggiungi_auto : function(marca){
//         this.lista_auto.push(marca);
//     },
    
//     rimuovi_auto : function(marca){
//         let index = this.lista_auto.indexOf(marca)
//         this.lista_auto.splice(index, 1)
//     },

// }



// garage.aggiungi_auto('classe a');

// garage.rimuovi_auto('500');

// garage.proprietario_garage = 'Matteo'

// garage.nome_garage = 'Garage_Hack69'

// console.log(garage.proprietario_garage);

// garage.mostra_auto();

// console.log(garage);



// --------------------------------------------------------------------------------------------------------------------


// Replicare l'oggetto smartphone visto a lezione con una variante. Modificare il metodo di aggiunta contatti in modo tale che non aggiunga un solo contatto ma N contatti contemporaneamente con un solo metodo.
// Es. smartphone.aggiungi_contatti('Matteo', 'Yoda', 'Windu')



// let smartphone = {
    
//     'contatti' : ['Davide', 'Matteo', 'Franco'],
    
//     mostra_contatti : function(){
//         this.contatti.forEach( (contatto)=> console.log(contatto) )
//     },

//     aggiungi_contatti : function(...contatto){
        
//         this.contatti.push(...contatto);
        
//     },
    
//     rimuovi_contatti : function(contatto){
//         let index = this.contatti.indexOf(contatto)
//         this.contatti.splice(index, 1)
//     },

// }



// smartphone.aggiungi_contatti('Paolo', 'Claudio','Mario', 'Giancarlo');

// smartphone.rimuovi_contatti('Matteo');

// smartphone.mostra_contatti();







// ! Replica Esercizi presi a caso dai selfwork o Kata

// Scrivere una funzione che prenda in input un numero intero N e mi restituisca un array con all'interno N numeri casuali

// function random(n){
//     let array = []
    
//     for(i=0; i < n; i++){
//         array.push(Math.floor(Math.random() * 10))
//     }

//     return array

// }

// let num = random(10)
// console.log(num);

// --------------------------------------------------------------------------------------------------------------------

//  Scrivere una funzione che dati:
//  2 array di 10 elementi interi casuali compresi tra 1 e 10,
//  il tipo di operazione aritmetica da effettuare (stringa), una delle seguenti:
//            addizione
//            sottrazione
//            moltiplicazione
//            divisione
//  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

//  Esempio:
//  Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b=[9, 3, 1, 4, 7, 6, 5, 10, 1, 5] operazione = "addizione"
//  Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

// function operazioni(array1, array2, operazione){
//     let array3 = []
//     for(i=0; i < 10; i++){
//     switch (operazione) {
//         case "addizione":
//             array3.push(array1[i] + array2[i])
//             break;
//         case "sottrazione":
//             array3.push(array1[i] - array2[i])
//             break;
//         case "divisione":
//             array3.push(array1[i] / array2[i])
//             break;
//         case "moltiplicazione":
//             array3.push(array1[i] / array2[i])
//             break;
//     }
// }
//     return array3
// }


// let valori = operazioni([3, 7, 2, 5, 8, 1, 2, 5, 6, 4],[9, 3, 1, 4, 7, 6, 5, 10, 1, 5],'sottrazione')

// console.log(valori);

// --------------------------------------------------------------------------------------------------------------------

// - Scrivere un oggetto che rappresenti un garage. Questo garage dovra' avere una proprieta' che rappresenti una lista di auto ed alcuni metodi. Un metodo deve permettermi si stampare in console la lista di auto presenti in garage. Un metodo deve permettermi di aggiungere una nuova auto. Un metodo deve permettermi di rimuovere una delle auto nella lista.



// let garage = {
//     'lista_auto' : ['Fiat 500', 'Fiat 600', 'Abarth 695'],
//     'mostra_auto' : function(){
//         this.lista_auto.forEach(auto => console.log(auto))
//     },
//     'aggiungi_auto' : function(valore){
//         this.lista_auto.push(valore)
//     },
//     'rimuovi_auto' : function(valore){
//         index = valore.indexOf(valore)
//         this.lista_auto.splice(index, 1)
//     },
// }


// garage.aggiungi_auto('Abarth 695 Competizione')

// garage.rimuovi_auto('500')

// garage.mostra_auto();


// --------------------------------------------------------------------------------------------------------------------

// convert numbers to reversed array of digits
// function reverseNuomber(number) {
//     return number.toString().split('').reverse().map(Number)
// }

// let number = reverseNuomber(35231);

// console.log(number);

// --------------------------------------------------------------------------------------------------------------------
// Multiple 3 or 5?

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).


// function solution(number){
//     let arr = [];
//     let multiple = [];
    
//      push all num between 0 and the number to arr
//     for (let i = 0; i < number; i++) {
//       arr.push(i);
//     }
    
//      if number in arr is a multiple or 3 or 5 push it to multiple
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 3 === 0 || i % 5 === 0) {
//         multiple.push(i);
//       }
//     }
    
//      sum the total of the multiple array
//     let sumTotal = multiple.reduce((sum, num) => sum + num, 0);
    
//     return sumTotal;
//   }



// ! Esercizi del 02/03/2023


// Scrivere una funzione che prenda in ingresso un qualsiasi numero di dati e mi restituisca la stringa Mi hai passato N dati dove N rappresenta il numero di elementi che sono stati passati


// function conta(...n){
//     for(let i=0; i < n.length;i++){
        
//         return `mi hai passato ${n.length} dati`
//     }
// }

// let numeroDati= conta('Millenium Falcon', 66, false,'ciao',8)

// console.log(numeroDati);

// --------------------------------------------------------------------------------------------------------------------
// Scrivere una funzione che prenda in ingresso una stringa e me la restituisca tutta in maiuscolo
// Es. input = 'may the force be with you'       output = 'MAY THE FORCE BE WITH YOU'


// function maiuscolo(stringa){
//     return stringa.toUpperCase()
// }


// let str = maiuscolo('may the force be with you')
// console.log(str);
// --------------------------------------------------------------------------------------------------------------------

// Scrivere una funzione che prenda in ingresso due array e mi restituisca un nuovo array che sia l'unione dei due inviati ma capovolto
// Es. arr1 = [1,2,3]   arr2 = [4,5,6]    output = [6,5,4,3,2,1]


// function somma(arr1, arr2){
//     arr3 = arr1.concat(arr2).reverse()
//     return arr3
// }

// console.log(somma([1,2,3],[4,5,6]));

// --------------------------------------------------------------------------------------------------------------------

//  Scrivere una funzione che prenda in ingresso un array contenente qualsiasi dato e mi restituisca un nuovo array contenente soltanto numeri
// Es. array = [1, 'due', true, 4]     output = [1, 4]


// function filtra(array){
//     let array_filtrato = []
    
//     for(let i = 0; i < array.length ; i++){
//         if(typeof array[i] == 'number'){
//           array_filtrato.push(array[i])
//         }
//     }
    
//     return array_filtrato
// }

// let arr = [1, 'due', true, 4]

// let result = filtra(arr)

// console.log(result);

// --------------------------------------------------------------------------------------------------------------------

//  Scrivere una funzione che prenda in ingresso un numero e mi stampi in console il conto alla rovescia dal numero scelto fino a 1
// Es. input = 5    output = 5             4             3           2             1                         (indizio: ricordate l'operatore di decremento)


// function contoallarovescia(n){
//     let contatore = ''
//     for (let i = n; i > 0; i--){
//         contatore = contatore + ' ' + ' ' + ' ' +  ' ' +   ' ' + i
//     }

//     return contatore
// }


// console.log(contoallarovescia(10));

// --------------------------------------------------------------------------------------------------------------------

// - Scrivere una funzione che prenda in ingresso un qualsiasi quantitativo di numeri e mi restituisca un array con tutti i numeri dispari maggiori di 10
// Es. moreThanTen(1, 5, 6, 8, 10, 11, 13, 16, 22)     output = [11, 13]

// function dispariEMaggiori(...n){
//     let array_finale=[]
//     for(let i=0; i < n.length; i++){
//         if(n[i] % 2 != 0 && n[i] > 10){
//             array_finale.push(n[i])
//         }
//     }

    
//     return array_finale
// }

// console.log(dispariEMaggiori(1, 5, 6, 8, 10, 11, 13, 16, 22));


// Altro metodo

// function es6(...numeri){
//     return numeri.filter((numero)=>(numero % 2 != 0 && numero >10));
// }
// console.log(es6(1, 5, 6, 8, 10, 11, 13, 16, 22));

// --------------------------------------------------------------------------------------------------------------------

// Scrivere una funzione che prenda in ingresso un nome, un cognome ed una professione e mi restituisca un oggetto che abbia queste proprieta'
// Es. createPerson('Qui-Gon' , 'Jin', 'Maestro Jedi')    output = {name : 'Qui-Gon' , surname: 'Jin', job: 'Maestro Jedi'}


// function creaoggetto(name,surname,job){
//     let obj = {'name': name, 'surname': surname, "job" : job}
//     return obj

// }

// console.log(creaoggetto('Qui-gon','jin','Maestro Jedi'));

// --------------------------------------------------------------------------------------------------------------------
//  Scrivere una funzione che prenda in ingresso un array e mi restituisca un nuovo array che contenga solo le stringhe messe in ordine alfabetico


// function test (array){
//     let array_ordinato = []
//     for(let i=0; i < array.length; i++){
//         array_ordinato.push(array[i])
//     }
//     return array_ordinato.sort()
// }



// console.log(test([`o`, `z`, `c`, `m`, `a`, `f`]));

// --------------------------------------------------------------------------------------------------------------------

// Esercizi che il cervello se ne va in sciopero:
// Scrivere un oggetto che mi permetta di simulare una sala giochi. Questo oggetto dovra' avere una proprieta' che rappresenti una lista di giocatori ed ogni giocatore sara' a sua volta un oggetto con una proprieta' name ed una proprieta' score: []. Scrivere dei metodi che vi permettano di simulare una sfida ai dadi e se ne decreti il vincitore

// let sala_giochi = {

//     giocatori : [
//         {name:'Davide', surname:'Benedetti', score:[]},
//         {name:'Cristian',surname:'Fasano', score:[]},
//         {name:'Ossama', surname:'Ossama', score:[]},
//     ],

//     setPlayer : function(name, surname){
//         this.giocatori.push({name:name, surname:surname, score:[]})
//     },

//     setScores : function(nTiri){
//         this.giocatori.forEach((giocatore)=>{
//             for(let i = 0; i < nTiri; i++){
//                 giocatore.score.push(Math.floor(Math.random() * (6 - 1 + 1) + 1))
//             }
//         })
//     },

//     setFinalScore : function(){
//         this.giocatori.forEach((giocatore)=>{
//            giocatore.finalScore = giocatore.score.reduce((acc, n) => acc + n)
//         });
//     },

//     setWinner : function(){
//         let winner = this.giocatori[0]
       
//         this.giocatori.forEach((giocatore)=>{
//             if(giocatore.finalScore > winner.finalScore){
                
//                 winner = giocatore
                
//             }
//         })
        
//         console.log(`il vincitore della partita e' ${winner.name} ${winner.surname} con un punteggio di ${winner.finalScore}`);
//     },

// }


// sala_giochi.setPlayer('Antonio', 'Acampora')

// sala_giochi.setScores(6)

// sala_giochi.setFinalScore()

// sala_giochi.setWinner()

// console.log(sala_giochi.giocatori);


// ! esercizio kata
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!



// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
    
//     return format;
//   }

// --------------------------------------------------------------------------------------------------------------------

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



// function getCount(str)
//     let counter = 0
//     string_splitted = str.split('')
//     for (let i = 0; i < str.length; i++){
//         if(string_splitted[i] == "a"){
//             counter++
//         }else if(string_splitted[i] == "e"){
//             counter++
//         }else if(string_splitted[i] == "i"){
//             counter++
//         }else if(string_splitted[i] == "o"){
//             counter++
//         }else if(string_splitted[i] == "u"){
//             counter++
//         }
        
//     }
    
//     return counter
    
// }

// --------------------------------------------------------------------------------------------------------------------

// let test = 'abrecidobru'
// console.log(getCount(test));


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');;
// }

// --------------------------------------------------------------------------------------------------------------------


// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


// function descendingOrder(n){
//     let splitted = +n.toString().split('').sort((a,b) => b-a, 0).join('')

//     return splitted
// }

//   console.log(descendingOrder(2938476928347));


// --------------------------------------------------------------------------------------------------------------------

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]



// function filter_list(l) {

//     let filtered = []
    
//     for (let i = 0; i < l.length; i++){
//       if(typeof l[i] === 'number'){
//         filtered.push(l[i])
//       }
//     }
    
//     return filtered
//   }

// console.log(filter_list([1,2,'a','b']));

// --------------------------------------------------------------------------------------------------------------------

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:



// function arrayDiff(a, b) {
// let difference = a.filter(x => !b.includes(x));
// return difference
// }

// console.log(arrayDiff([1,2,2,2,3],[2]));

// --------------------------------------------------------------------------------------------------------------------

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// function sumTwoSmallestNumbers(numbers) {  
//     let sorted = numbers.sort((a,b)=>a-b).splice(0,2).reduce((acc, n) => acc + n)
//     return sorted
//   }
  
//   console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))

// --------------------------------------------------------------------------------------------------------------------

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!



// function squareDigits(...num){
//     let square = []
//     num = num.toString().split('')
    
//     for (let i=0; i < num.length; i++){
//     square.push(num[i]*num[i])
  
//     }      
    
//       return +square.join('')
//   }




// ! Esercizi del 06/03/2023


// - Scrivere una funzione che prenda in ingresso una stringa e mi restituisca solo la prima parola

// function primaParola(str){
//     return str = str.split(' ').splice(0,1).toString()
// }

// console.log(primaParola('ciao come stai tutto bene e tu come stai io tutto bene ciaone'));

// ------------------------------------------------------------------------------------------------------------

// Scrivere una funzione che prenda in ingresso un numero N e mi restituisca un array contenente N numeri casuali (compresi tra 1 e 10) ordinati in ordine crescente

// function arrayCasuali(n){
//     let nuovoArray = []
//     for(let i = 0; i < n; i++){
//         nuovoArray.push(Math.floor(Math.random() * n))
//     }
//     return nuovoArray.sort()
// }

// console.log(arrayCasuali(10));

// ------------------------------------------------------------------------------------------------------------

//  Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array solo con i numeri maggiori di 10

// function sortNumber (n){
//     nuovoArray = []
//     for(let i = 0; i < n.length; i++){
//         if(n[i] > 10){
//             nuovoArray.push(n[i])
//         }
//     }
//     return nuovoArray
// }

// console.log(sortNumber([10, 199, 1, 2349, 2, 4, 11]));

// ------------------------------------------------------------------------------------------------------------

// Scrivere una funzione che prenda in ingresso un array di stringhe e mi restituisca un nuovo array con le stesse stringhe ma in Uppercase

// function maiuscolo(arr){
//     arr = arr.map((x) => x.toUpperCase())
//     return arr
// }
  


// console.log(maiuscolo(['ciao','ciaone','ciao matteo','ho sbagliato il quiz di javascript mannaggia a me']));




// Realizzare un oggetto che rappresenti una persona. Questo oggetto dovra' avere almeno 3 proprieta' che rappresentino un nome, un cognome e un'eta'. Realizzare un metodo che permetta alla persona di presentarsi.
// Es. Ciao! Il mio nome e' Matteo Sisto ed ho 36 anni

// let persona = {
//     nome : 'Matteo',
//     cognome : 'Sisto',
//     eta : 36,

//     setPresentati : function presentati(){
//         console.log(`ciao mi chiamo ${persona.nome} ${persona.cognome} e ho ${persona.eta} anni`)
//     },
// }

// persona.setPresentati()



// Scrivere una funzione che prenda in ingresso un array di dati e per ogni dato mi stampi in console il suo tipo

// function tipo(arr){
//     let type = []
//     for(let i = 0; i < arr.length; i++){
//         type.push(typeof (arr[i]))
//     }

//     return type
    
// }

// console.log(tipo([1,'ciao',7,'paolo',true,false,'claudio']));



// Realizzare un oggetto che rappresenti un astuccio di pennarelli. Questo oggetto dovra' avere una proprieta' che rappresenti una lista di colori sotto forma di stringa. Aggiungere un metodo che ci permetta di rimuovere un colore ed un metodo che ci permetta di aggiungere un colore ma eviti le duplicazioni
// Es.1 colors : ['rosso', 'verde', 'blu']              astuccio.addColor('giallo')              colors : ['rosso', 'verde', 'blu', 'giallo]
// Es.2 colors : ['rosso', 'verde', 'blu']              astuccio.addColor('rosso')             Spiacente colore gia' presente nell'astuccio

// let astuccio = {
    
//     colori : ['rosso', 'verde', 'blu'],
    
//     addColor: function(...colore){
//         for(let i = 0; i < colore.length; i++){
//         if(this.colori.includes(colore[i])){
//             console.log(`colore gia presente nell'astuccio`);
//         }else{
//             this.colori.push(colore[i])
//         }
//     }
//     },

//     remColor: function(colore){
//         let index = this.colori.indexOf(colore)
//         this.colori.splice(index, 1)
//     }

    
// }

// astuccio.addColor('giallo')
// astuccio.remColor('rosso')
// astuccio.addColor('verde', 'nero')
// console.log(astuccio);




// ----------------------------------------------------------------
// Scrivere una funzione che prenda in ingresso un array di oggetti, ciascun oggetto dovra' rappresentare un contatto telefonico con le proprieta' nome e numero. La funzione ci dovra' restituire un nuovo array con soltanto i nomi dei contatti
// Es.   input = [
//                          {name : 'Sidious' , number : 33333333} , 
//                          {name : 'Maul' , number : 33344444}
//                          }

//           output = ['Sidious', 'Maul']


    // let rubrica = {
    //     contatti : [
    //         {name : 'Sidious' , number : 33333333},
    //         {name : 'Maul' , number : 33344444},
    //     ],

    //     setName : function(){
    //         this.contatti.forEach((contatto) => console.log(contatto.name))
    //     }
    // }


    // rubrica.setName()







// for(let i = 0; i < 100; i++){
//     if (i % 2 == 0) {
//         console.log(`ciao sono ${i} e sono un numero pari`);
//     }else{
//         console.log(`ciao sono ${i} e sono un numero dispari`);
//     }
// }

// Scrivere una funzione che prenda in ingresso due array e mi restituisca un nuovo array che sia l'unione dei due inviati ma capovolto
// Es. arr1 = [1,2,3]   arr2 = [4,5,6]    output = [6,5,4,3,2,1]

// function TwoArray(arr1, arr2){
//     let concatArray = arr1.concat(arr2).reverse()
//     return concatArray
// }

// let arr1 = [1,2,3]   
// let arr2 = [4,5,6]

// console.log(TwoArray(arr1,arr2));


// - Scrivere una funzione che prenda in ingresso un qualsiasi numero di dati e mi restituisca la stringa Mi hai passato N dati dove N rappresenta il numero di elementi che sono stati passati
// Es. 1   numeroDati(  'Millenium Falcon', 66, false);       output = Mi hai passato 3 dati

// function conta(...n){
//     for(let i = 0; i < n.length; i++){
//         return n.length
//     }
// }

// console.log(conta('Millenium Falcon', 66, false,5,7,8,9));


// - Scrivere una funzione che dato un array di numeri, calcoli la media dei valori e restituisca in output un nuovo array con tutti i valori minori della media.

//   Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori della media= [3, 5, 2]


function average(arr){
    let somma = arr.reduce((acc,n) => acc + n , 0)
    let inf = []
    for(let i = 0; i < arr.length; i++){
        let media = somma / arr.length
        if (arr[i] < media) {
            inf.push(arr[i])
        }
    }

    return inf
}

console.log(average([3, 5, 10, 2, 8]));