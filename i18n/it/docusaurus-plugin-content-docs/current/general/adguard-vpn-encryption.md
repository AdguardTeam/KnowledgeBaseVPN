---
title: 'Che tipo di crittografia viene utilizzata in AdGuard VPN'
sidebar_position: 7
---

## Introduzione

La crittografia è la ragione per cui esiste la parola "privata" nel termine "Rete privata virtuale". A VPN creates a tunnel between your device and a VPN server, that encrypts and transmits your data securely to the open Internet. Il processo di crittografia, che consiste nel trasformare i dati in parole incomprensibili che non possono essere lette da chi li intercetta, è essenziale per qualsiasi servizio VPN.

The AdGuard VPN protocol uses the most secure and fast encryption algorithm to date — AES-256. Scopri cos'è e perché è così buono.

## Tour storico dell'AES

La crittografia AES (Advanced Encryption Standard) è stata sviluppata alla fine del XX secolo negli Stati Uniti. richiesta del governo: il Data Encryption Standard (DES) esistente è diventato obsoleto ed è stato richiesto un nuovo algoritmo di crittografia più sicuro.

In un concorso pubblico indetto dal governo ha vinto il cifrario Rijndael - piuttosto simile al DES ma molto più sofisticato. Nel 2002 è stato rinominato AES ed è stato pubblicato dalla U.S.A. Istituto nazionale di standard e tecnologia.

Oggi, AES è lo standard del settore per la crittografia. A causa della sua natura aperta, è utilizzato dalla NSA e dalle agenzie governative, nonché da organizzazioni private, commerciali e senza scopo di lucro.

## Come funziona AES-256

AES è un cifrario a blocchi con una chiave simmetrica. Essendo un cifrario a chiave simmetrica, richiede una sola chiave segreta per criptare e decriptare i dati. Essendo un cifrario a blocchi, AES divide le informazioni non cifrate, chiamate plaintext, in blocchi, divide la chiave crittografica originale in più chiavi e le applica a ciascun blocco. Alla fine, si ottiene un testo cifrato, cioè un testo crittografato.

Esistono chiavi di diverse dimensioni - 128, 192 e 256 bit - e anche i blocchi sono misurati in bit. Durante il processo di crittografia, il codificatore sostituisce ogni informazione con un'altra, a seconda della chiave di sicurezza. Quindi, ad esempio, AES-256 crea 256 blocchi di testo cifrato da 256 blocchi di testo plaintext in 14 round.

I round consistono in diverse fasi: suddivisione dei dati in blocchi, scambio di byte, spostamento di righe e riordino di colonne. The result is a completely random set of characters that will only make sense when using the right encryption key.

AES-256 is the strongest level of encryption: to break this cipher, 2256 discrete combinations, each consisting of 78 digits, would have to be tried.
