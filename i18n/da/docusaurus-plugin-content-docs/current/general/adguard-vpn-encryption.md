---
title: 'Hvilken type kryptering anvendes i AdGuard VPN'
sidebar_position: 7
---

## Introduktion

Kryptering er grunden til, at ordet "private" findes i udtrykket "Virtual Private Network". Et VPN opretter en tunnel mellem brugerenheden og en VPN-server, der faciliterer kryptering og sikker transmission af data til det åbne internet. Krypteringsprocessen, dvs. konvertering af data til volapyk, som ingen, der opsnapper det, kan læse, er afgørende for enhver VPN-tjeneste.

AdGuard VPN-protokollen bruger den mest sikre og hurtigste krypteringsalgoritme til dato – AES-256. Læs, hvad det vil sige, og hvorfor det er så godt.

## AES historisk tur

AES-kryptering (Advanced Encryption Standard) er udviklet i slutningen af det 20. århundrede i USA. regeringsanmodning: Den eksisterende Data Encryption Standard (DES) blev forældet, og en ny, mere sikker krypteringsalgoritme var nødvendig.

I en offentlig konkurrence lanceret af regeringen vandt Rijndael-chifferet — meget lig DES, men langt mere sofistikeret. I 2002 blev det omdøbt til AES og udgivet af USA. National Institute of Standards and Technology.

I dag er AES industristandarden for kryptering. Grundet dens åbne natur, bruges den af NSA og offentlige myndigheder samt private, kommercielle og non-profit organisationer.

## Sådan fungerer AES-256

AES er en blokchiffer med en symmetrisk nøgle. Som en symmetrisk nøglechiffer, kræver den kun én hemmelig nøgle til kryptering og dekryptering af dataene. Som blokchiffer opdeler AES den ukrypterede information, som kaldes almindelig tekst, i blokke, opdeler den originale kryptografiske nøgle i flere dele, og anvender disse på hver blok. Til sidst opnås en chiffertekst, dvs. en krypteret tekst.

Der er forskellige nøglestørrelser - 128, 192 og 256 bit — og blokkene måles også i bits. Under krypteringsprocessen erstatter krypteringen hver enkelt informationsdel med en anden, afhængigt af sikkerhedsnøglen. Så f.eks. opretter AES-256 256 blokke med chiffertekst ud fra 256 blokke med almindelig tekst ad 14 omgange.

Omgangene består af flere trin: Opdeling af dataene i blokke, ombytning af bytes, omskiftning af rækker og omarrangering af kolonner. Resultatet er et helt tilfældigt sæt tegn, som kun vil give mening ved brug af den rette krypteringsnøgle.

AES-256 er det stærkeste krypteringsniveau: For at bryde denne chiffer ville 2256 diskrete kombinationer, hver bestående af 78 cifre, skulle afprøves.
