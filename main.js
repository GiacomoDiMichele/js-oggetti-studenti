//creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
//creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
//tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.

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

    for (var i = 0; i < studenti.length; i++) {
        var studente_corrente =  studenti[i];
    }

    for (var chiave in studente_corrente) {
        
    }
