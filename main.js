//creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
//creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
//tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.

//creare un array di oggetti
var studenti = [
        {
            'nome': 'giacomo',
            'cognome': 'di michele',
            'eta': 22
        },

        {
            'nome': 'matteo',
            'cognome': 'orsini',
            'eta': 20
        },

        {
            'nome': 'luca',
            'cognome': 'di meo',
            'eta': 22
        },

        {
            'nome': 'francesca',
            'cognome': 'salvi',
            'eta': 21
        },

        {
            'nome': 'marco',
            'cognome': 'corti',
            'eta': 23
        },

        {
            'nome': 'annachiara',
            'cognome': 'rovere',
            'eta': 21
        },
    ];

    //creare un ciclo sempre per l'array studenti stampando tutte le proprietà e il relativo valore dell'oggetto
    for (var i = 0; i < studenti.length; i++) {
        var studente_corrente =  studenti[i];

        for (var chiave in studente_corrente) {
            console.log(chiave + ' = ' + studente_corrente[chiave]);
        }
    }


    //creare un ciclo sempre per l'array studenti, includendo solamente le proprietà nome e cognome dell'oggetto selezionato, escludendo eta
    for (var i = 0; i < studenti.length; i++) {
        var studente_corrente =  studenti[i];

        for (var chiave in studente_corrente) {
            if (chiave != 'eta') {
                console.log(chiave + ' = ' + studente_corrente[chiave]);
            }
        }
    }

    //creare 3 prompt e metterli in una variabile, da inserire nell'oggetto
    var nome_inserito = prompt('inserisci il tuo nome');
    var cognome_inserito = prompt('inserisci il tuo cognome');
    var eta_inserita = parseInt(prompt('inserisci la tua età'));

    var nuovo_studente = {
        nome: nome_inserito,
        cognome: cognome_inserito,
        età: eta_inserita
    }

    //pushare l'oggetto nuovo creato all'interno dell'array studenti
    studenti.push(nuovo_studente);

    console.log(studenti)
