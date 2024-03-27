---
title: 'Quel type de chiffrement est utilisé dans AdGuard VPN'
sidebar_position: 7
---

## Introduction

Le chiffrement est la raison pour laquelle le mot "privé" existe dans le terme "réseau privé virtuel". A VPN creates a tunnel between your device and a VPN server, that encrypts and transmits your data securely to the open Internet. Le processus de chiffrement, c'est-à-dire transformer les données en charabia que personne qui les intercepte ne peut lire, est essentiel à tout service VPN.

The AdGuard VPN protocol uses the most secure and fast encryption algorithm to date — AES-256. Apprenez ce que c'est et pourquoi c'est bien.

## L'historique de l'AES

Le chiffrement AES (Advanced Encryption Standard) a été développé à la fin du XXe siècle aux États-Unis. demande du gouvernement : la norme de chiffrement des données (DES) existante est devenue obsolète et un nouvel algorithme de chiffrement plus sécurisé était nécessaire.

Lors d'un concours public annoncé par le gouvernement, le chiffrement Rijndael - assez similaire au DES mais beaucoup plus sophistiqué - a été nommé vainqueur. En 2002, il a été renommé AES et publié par les États-Unis. Institut national des normes et de la technologie.

Aujourd'hui, AES est la norme de l'industrie pour le cryptage. En raison de sa nature ouverte, il est utilisé par la NSA et les agences gouvernementales, ainsi que par des organisations privées, commerciales et à but non lucratif.

## Comment AES-256 fonctionne-t-il

AES est un chiffrement par bloc avec une clé symétrique. En tant que chiffrement à clé symétrique, il ne nécessite qu'une seule clé secrète pour chiffrer et déchiffrer les données. En tant que chiffrement par blocs, AES divise les informations non chiffrées, appelées texte en clair, en blocs, divise la clé cryptographique d'origine en plusieurs et les applique à chaque bloc. En fin de compte, un texte crypté, c’est-à-dire un texte chiffré, est obtenu.

Il existe différentes tailles de clé - 128, 192 et 256 bits - et les blocs sont également mesurés en bits. Au cours du processus de chiffrement, le chiffreur remplace chaque élément d'information par un autre, en fonction de la clé de sécurité. Ainsi, par exemple, AES-256 crée 256 blocs de texte chiffré à partir de 256 blocs de texte en clair en 14 tours.

Les tours se composent de plusieurs étapes : diviser les données en blocs, échanger des octets, déplacer des lignes et réorganiser les colonnes. The result is a completely random set of characters that will only make sense when using the right encryption key.

AES-256 is the strongest level of encryption: to break this cipher, 2256 discrete combinations, each consisting of 78 digits, would have to be tried.
