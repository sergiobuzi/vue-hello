// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

//creo una variabile che mi salvi il createapp
const { createApp } = Vue ;


createApp({
    data(){
        return {
            messaggio: 'Hello Vue!',
            papero: 'https://www.repstatic.it/content/localirep/img/rep-roma/2023/02/21/190842393-88044fc6-d1c6-4fa2-bcda-e71de7d0887a.jpg'
        }
    }
}).mount('#app');


