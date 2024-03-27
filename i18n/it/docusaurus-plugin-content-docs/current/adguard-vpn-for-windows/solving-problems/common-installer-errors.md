---
title: Errore d'installazione comuni
sidebar_position: 2
---

Questo articolo delinea alcuni degli errori più comuni che potresti riscontrare installando AdGuard VPN per Windows, e i possibili metodi per risolverli.

### Errore 5: Accesso Negato {#error-5}

Questo messaggio d'errore appare se le autorizzazioni necessarie non sono state garantite. Potrebbero esistere diversi motivi per cui il programma d'installazione di AdGuard VPN non ha le autorizzazioni richieste per terminare correttamente il processo d'installazione. Puoi provare i seguenti passaggi:

- Disabilita temporaneamente i tuoi antivirus. Alcuni di essi potrebbero interferire con l'installazione, a seconda della rigidità delle loro impostazioni.

- Scegli una cartella d'installazione differente. È possibile che la cartella d'installazione corrente preveda delle limitazioni d'accesso. Assicurati, inoltre, di non selezionare un'unità esterna, un'unità virtuale, etc.

- Riavvia il tuo computer. Talvolta i problemi di autorizzazione sono temporanei e risolvibili riavviando il PC.

### Errore 112: Il disco è pieno, Errore 1632: Cartella temporanea piena o inaccessibile {#error-112}

Esistono due errori differenti con soluzioni molto simili. Come suggerito dai loro nomi, il programma d'installazione di AdGuard VPN non ha trovato abbastanza spazio per completare l'installazione. Esistono diverse cose che puoi tentare per risolvere questo problema:

- Disinstalla alcuni programmi o elimina i file non necessari, dall'unità in cui stavi tentando d'installare AdGuard VPN.

- Scarica, installa ed esegui [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), un software gratuito di Malwarebytes. Tra le altre cose, pulirà il tuo sistema da ogni tipo di file aggiuntivo di "avanzi", rimanente dall'errata disinstallazione dei programmi e simili. Aiuterà a svuotare dello spazio su disco.

- Riavvia il tuo computer. Talvolta, i file temporanei, possono occupare una notevole quantità di spazio su disco e, riavviare il tuo PC, è il metodo più affidabile per liberarsene.

### Errore 1601: Il programma d'installazione di Windows non è accessibile {#error-1601}

Si potrebbe dire che questo sia un caso secondario particolare dell'Errore 1603. Le possibili soluzioni sono simili:

- Avvia e registra nuovamente il servizio di Microsoft Installer. Richiede un po' di lavoro.

    1. Premi *Win + R* e digita **services.msc**.
    1. Trovalo nell'elenco e fai doppio click su *Windows Installer*.
    1. Clicca il pulsante *Start* in *Stato del servizio* e clicca su *OK*. Se lo stato del servizio è **in esecuzione**, dovresti prima cliccare su *Arresta*, quindi su *Avvia*.
    1. Press *Win + R*, type **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type **msiexec /regserver** and hit *Enter*

- Riavvia il PC e ricomincia l'installazione. Talvolta, ciò è sufficiente per risolvere il problema.

### Errore 1602: Annullata dall'utente {#error-1602}

Se ottieni questo codice d'errore, è possibile che tu abbia interrotto il processo d'installaziona manualmente, in un modo o nell'altro. Ciò che puoi fare è:

- Non chiudere la finestra d'installazione. Al completamento dell'installazione, si chiuderà da sola.

- Se appare una finestra durante l'installazione, clicca su "Sì" per condere le autorizzazioni necessarie al programma d'installazione. Cliccare su "No", annullerà l'installazione.

- Non avviare altri processi durante il processo d'installazione.

### Errore 1603: Errore critico durante l'installazione {#error-1603}

Questo errore sembra molto più preoccupante di quanto sia realmente. Infatti, questo è un errore piuttosto generico che può avere molte cause differenti, alcune delle quali sono facilmente risolvibili. Prova le seguenti soluzioni:

- Premi il tasto *Win*, cerca *Prompt dei Comandi* ed eseguilo. Qui, digita `sfc /scannow` e premi *Invio*.

- Scegli una cartella d'installazione differente. È possibile che la cartella d'installazione corrente preveda delle limitazioni d'accesso. Assicurati, inoltre, di non selezionare un'unità esterna, un'unità virtuale, etc.

- Disinstalla AdGuard VPN utilizzando il nostro [strumento di disinstallazione](/adguard-vpn-for-windows/installation#advanced) speciale, quindi ripeti l'installazione.

- Avvia e registra nuovamente il servizio di Microsoft Installer. Richiede un po' di lavoro.

    1. Premi *Win + R* e inserisci **services.msc**.
    1. Trovalo nell'elenco e fai doppio click su *Windows Installer*.
    1. Clicca il pulsante *Start* in *Stato del servizio* e clicca su *OK*. Se lo stato del servizio è **in esecuzione**, devi prima cliccare su *Arresta*, quindi su *Avvia*.
    1. Press *Win + R*, type **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type **msiexec /regserver** and hit *Enter*

- Acquisici le autorizzazioni complete sull'unità per l'installazione. È possibile che l'errore 1603 si verifichi perché non disponi delle piene autorizzazioni sulla posizione del file. Inoltre, questa, non è facile come le altre soluzioni:

    1. Apri *Esplora File*, clicca con il destro sull'unità contenente la posizione d'installazione e seleziona *Proprietà*.
    1. Vai alla scheda *Sicurezza*, quindi clicca su *Modifica*.
    1. Fai click su *SYSTEM* e assicurati che la casella *Consenti* di ogni voce in *Autorizzazioni per SYSTEM* sia spuntata (se possibile). Fai lo stesso controllo per *Amministratori*.
    1. Clicca su *OK* per tornare alla finestra delle *Proprietà*. Quindi clicca su *Avanzate*.
    1. Clicca su *Modifica le autorizzazioni*.
    1. Nella scheda delle *Autorizzazioni*, fai doppio click su *Amministratori*.
    1. Seleziona *Questa cartella, sottocartelle e file* per il campo *Applica a* e spunta tutte le *Autorizzazioni di base* disponibili. Dopodiché, clicca su *OK*.
    1. Esegui la stessa operazione sopra (dalla voce 7) per *SYSTEM*.
    1. Clicca su *OK* fino alla fine. Riprova a installare AdGuard.

### Errore 1618: Un'altra installazione è già in corso {#error-1618}

Questo errore appare provando a eseguire più istanze del programma d'installazione di AdGuard VPN, simultaneamente. Cosa fare se riscontri questo errore:

- Riavvia il tuo PC e riavvia il programma d'installazione. Riavviando il computer, tutti i processi in corso saranno interrotti, incluse tutte le copie del programma d'installazione.

- Don't click the installer multiple times, even if it doesn't seem to start right away. Talvolta, potrebbe volerci qualche secondo per visualizzare l'UI del programma d'installazione.

### Errore 1638: Un'altra versione del prodotto è già installata {#error-1638}

È molto probabile che tu abbia già installato AdGuard VPN in precedenza.

- Verifica se AdGuard VPN è già installato sul tuo computer. Per farlo, premi il tasto *Win* e inizia a digitare *adguard vpn*.

- Potrebbero essere presenti dei file avanzati da un'installazione precedente di AdGuard VPN. Disinstalla AdGuard utilizzando il nostro [strumento di disinstallazione](/adguard-vpn-for-windows/installation#advanced) speciale, quindi ripeti l'installazione.

### Altri errori {#other}

Se hai riscontrato un errore che non è elencato sopra, è possibile che possiamo risolverlo da soli. Ma per poterlo fare, necessitiamo dei tuoi file di registro. Sei pregato di eseguire i seguenti passaggi:

- Trova e archivia i **Registri d'installazione di AdGuard VPN** come descritto in [questo articolo](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Trova e salva sul disco i registri del **Visualizzatore Eventi**. [Questo articolo](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) spiega come farlo.

Sei pregato di inviare tutti i file dai due passaggi precedenti, al team di supporto a **support@adguard.com** e di descrivere il problema nel corpo del messaggio. Il nostro team di supporto ti risponderà il prima possibile.
