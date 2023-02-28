---
title: Errore d'installazione comuni
sidebar_position: 2
---

Questo articolo contiene alcuni degli errori più comuni che puoi riscontrare durante l'installazione di AdGuard VPN per Windows e i possibili modi per risolverli.

### Errore 5: Accesso Negato {#error-5}

Questo errore si verifica se c'è qualcosa che non va con le autorizzazioni. Potrebbero esistere diversi motivi per cui il programma d'installazione di AdGuard VPN non ha le autorizzazioni richieste per terminare correttamente il processo d'installazione. Puoi provare i seguenti passaggi:

- Disabilita temporaneamente i tuoi antivirus. Alcuni di essi potrebbero interferire con l'installazione, a seconda della gravità delle loro impostazioni.

- Scegli una cartella d'installazione differente. È possibile che la cartella d'installazione corrente preveda delle limitazioni d'accesso. Assicurati, inoltre, di non selezionare un'unità esterna, un'unità virtuale, etc.

- Riavvia il tuo computer. Talvolta i problemi di autorizzazione sono temporanei e risolvibili riavviando il PC.

### Errore 112: Il disco è pieno, Errore 1632: Cartella temporanea piena o inaccessibile {#error-112}

Esistono due errori differenti con soluzioni molto simili. Come suggerito dai loro nomi, il programma d'installazione di AdGuard VPN non ha trovato abbastanza spazio per completare l'installazione. Esistono diverse cose che puoi tentare per risolvere questo problema:

- Disinstalla alcuni programmi o elimina i file non necessari, dall'unità in cui stavi tentando d'installare AdGuard VPN.

- Scarica, installa ed esegui [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), un software gratuito di Malwarebytes. Tra le altre cose, pulirà il tuo sistema da ogni tipo di file aggiuntivo di "avanzi", rimanente dall'errata disinstallazione dei programmi e simili. Aiuterà a svuotare dello spazio su disco.

- Riavvia il tuo computer. Talvolta, i file temporanei, possono occupare una notevole quantità di spazio su disco e, riavviare il tuo PC, è il metodo più affidabile per liberarsene.

### Errore 1601: Il programma d'installazione di Windows non è accessibile {#error-1601}

Si potrebbe dire che questo sia un caso secondario particolare dell'Errore 1603. Le possibili soluzioni sono simili:

- Avvia e registra nuovamente il servizio Microsoft Installer. Richiede un po' di lavoro.

    1) Premi *Win + R* e inserisci **services.msc**. 2) Trova nell'elenco e fai doppio click su *Windows Installer*. 3) Clicca il pulsante *Avvia* in *Stato del servizio* e clicca *OK*. Se lo stato del servizio è **in esecuzione**, dovresti prima cliccare su *Arresta*, quindi su *Avvia*. 4) Premi *Win + R*, digita e inserisci ***msiexec /unregister*** e premi *Invio*. 5) Premi ancora *Win + R*, digita e inserisci ***msiexec /regserver*** e premi *Invio*

- Riavvia il PC e ricomincia l'installazione. Talvolta, ciò è sufficiente per risolvere il problema.

### Errore 1602: Annullata dall'utente {#error-1602}

Se ottieni questo codice d'errore, è possibile che tu abbia interrotto il processo d'installaziona manualmente, in un modo o nell'altro. Ciò che puoi fare è:

- Non chiudere la finestra d'installazione. Al completamento dell'installazione, si chiuderà da sola.

- Se appare una finestra durante l'installazione, clicca su "Sì" per condere le autorizzazioni necessarie al programma d'installazione. Cliccare su "No", annullerà l'installazione.

- Non avviare altri processi durante il processo d'installazione.

### Errore 1603: Errore critico durante l'installazione {#error-1603}

L'errore sembra più spaventoso di quanto non sia in realtà. Infatti, questo è un errore piuttosto generico che può avere molte cause differenti, alcune delle quali sono facilmente risolvibili. Prova le seguenti soluzioni:

- Premi il tasto *Win*, cerca *Prompt dei Comandi* ed eseguilo. Qui, digita `sfc /scannow` e premi *Invio*.

- Scegli una cartella d'installazione differente. È possibile che la cartella d'installazione corrente preveda delle limitazioni d'accesso. Assicurati, inoltre, di non selezionare un'unità esterna, un'unità virtuale, etc.

- Disinstalla AdGuard VPN utilizzando il nostro [strumento di disinstallazione](../../installation#advanced) speciale, poi ripeti l'installazione.

- Avvia e registra nuovamente il servizio Microsoft Installer. Richiede un po' di lavoro.

    1) Premi *Win + R* e inserisci ***services.msc***. 2) Trova nell'elenco e fai doppio click su *Windows Installer*. 3) Clicca il pulsante *Avvia* in *Stato del servizio* e clicca *OK*. Se lo stato del servizio è **in esecuzione**, dovresti prima cliccare su *Arresta*, quindi su *Avvia*. 4) Premi *Win + R*, digita e inserisci ***msiexec /unregister*** e premi *Invio*. 5) Premi ancora *Win + R*, digita e inserisci ***msiexec /regserver*** e premi *Invio*

- Acquisisci le autorizzazioni complete sull'unità per l'installazione. È possibile che l'errore 1603 si verifichi perché non disponi delle piene autorizzazioni sulla posizione del file. Inoltre, questa, non è facile come le altre soluzioni:

    1) Apri *Esplora File*, fai click con il destro sull'unità contenente la posizione d'installazione e seleziona *Proprietà*. 2) Vai alla scheda *Sicurezza* e clicca su *Modifica*. 3) Fai click su *SISTEMA* e assicurati che la casella *Consenti* di ogni elemento in *Autorizzazioni di SISTEMA* sia spuntata (se selezionabile). Fai lo stesso controllo per *Amministratori*. 4) Clicca su *OK* per tornare alla finestra delle *Proprietà*. Quindi, clicca su *Avanzate*. 5) Clicca su *Modifica Autorizzazioni*. 6) Sulla scheda *Autorizzazioni*, fai doppio click su *Amministratori*. 7) Seleziona *Questa cartella, sottocartelle e file* per il campo *Applica a* e spunta tutte le *Autorizzazioni di base*. Dopodiché, clicca su *OK*. 8) Esegui la stessa operazione sopra (dalla voce 7) per *SISTEMA*. 9) Clicca su *OK* fino in fondo. Riprova a installare AdGuard.

### Errore 1618: Un'altra installazione è già in corso {#error-1618}

Questo errore si verifica quando ci sono diverse istanze del programma d'installazione di AdGuard VPN, avviate al contempo. Cosa fare se riscontri questo errore:

- Riavvia il tuo PC e riavvia il programma d'installazione. Riavviando il computer, tutti i processi in corso saranno interrotti, incluse tutte le copie del programma d'installazione.

- Non cliccare più volte sul programma d'installazione, anche se non si avvia subito. Talvolta, potrebbe volerci qualche secondo per visualizzare l'UI del programma d'installazione.

### Errore 1638: Un'altra versione del prodotto è già installata {#error-1638}

È molto probabile che tu abbia già installato AdGuard VPN in precedenza.

- Verifica se AdGuard VPN è già installato sul tuo computer. Puoi farlo premendo il tasto *Win* e digitando ***AdGuard VPN***.

- Potrebbero essere presenti dei file avanzati da un'installazione precedente di AdGuard VPN. Disinstalla AdGuard utilizzando il nostro [strumento di disinstallazione](../../installation#advanced) speciale, poi ripeti l'installazione.

### Altri errori {#other}

Se hai riscontrato un errore che non è elencato sopra, è possibile che possiamo risolverlo da soli. Ma per poterlo fare, necessitiamo dei tuoi file di registro. Sei pregato di eseguire i seguenti passaggi:

- Trova e archivia i **Registri d'installazione di AdGuard VPN** come descritto in [questo articolo](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Trova e salva su disco i registri del **Visualizzatore Eventi**. [Questo articolo](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) spiega come farlo.

Sei pregato di inviare tutti i file dai due passaggi precedenti, al team di supporto a **support@adguard.com** e di descrivere il problema nel corpo del messaggio. Il nostro team di supporto ti risponderà il prima possibile.
