---
title: 'Che tipo di crittografia viene utilizzata in AdGuard VPN'
sidebar_position: 7
---

## Introduzione

La crittografia è la ragione per cui esiste la parola "privata" nel termine "Rete privata virtuale". Una VPN crea un tunnel tra il tuo dispositivo e un server VPN, attraverso il quale i tuoi dati vengono crittografati e quindi entrano in Internet aperto in una forma sicura. Il processo di crittografia, che consiste nel trasformare i dati in parole incomprensibili che non possono essere lette da chi li intercetta, è essenziale per qualsiasi servizio VPN.

Il protocollo AdGuard VPN utilizza l'algoritmo di crittografia più sicuro e veloce fino ad oggi: AES-256. Scopri cos'è e perché è così buono.

## Tour storico dell'AES

La crittografia AES (Advanced Encryption Standard) è stata sviluppata alla fine del XX secolo negli Stati Uniti. richiesta del governo: il Data Encryption Standard (DES) esistente è diventato obsoleto ed è stato richiesto un nuovo algoritmo di crittografia più sicuro.

In un concorso pubblico indetto dal governo ha vinto il cifrario Rijndael - piuttosto simile al DES ma molto più sofisticato. Nel 2002 è stato rinominato AES ed è stato pubblicato dalla U.S.A. Istituto nazionale di standard e tecnologia.

Oggi, AES è lo standard del settore per la crittografia. A causa della sua natura aperta, è utilizzato dalla NSA e dalle agenzie governative, nonché da organizzazioni private, commerciali e senza scopo di lucro.

## Come funziona AES-256

AES è un cifrario a blocchi con una chiave simmetrica. Essendo un cifrario a chiave simmetrica, richiede una sola chiave segreta per criptare e decriptare i dati. Essendo un cifrario a blocchi, AES divide le informazioni non cifrate, chiamate plaintext, in blocchi, divide la chiave crittografica originale in più chiavi e le applica a ciascun blocco. Alla fine, si ottiene un testo cifrato, cioè un testo crittografato.

Esistono chiavi di diverse dimensioni - 128, 192 e 256 bit - e anche i blocchi sono misurati in bit. Durante il processo di crittografia, il codificatore sostituisce ogni informazione con un'altra, a seconda della chiave di sicurezza. Quindi, ad esempio, AES-256 crea 256 blocchi di testo cifrato da 256 blocchi di testo plaintext in 14 round.

I round consistono in diverse fasi: suddivisione dei dati in blocchi, scambio di byte, spostamento di righe e riordino di colonne. Il risultato è un insieme di caratteri completamente casuale, che avrà senso solo con una chiave di crittografia.

AES-256 è il livello di crittografia più forte: per decifrarlo, un malintenzionato dovrà provare 2256 combinazioni discrete, ciascuna composta da 78 cifre.
