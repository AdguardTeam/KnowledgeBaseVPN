---
title: 'What type of encryption is used in AdGuard VPN?'
sidebar_position: 7
---

## Introduction

Encryption is the reason the word "private" exists in the term "Virtual Private Network". A VPN creates a tunnel between your device and a VPN server, passing through which your data gets encrypted and then enters the open Internet in a secure form. The process of encryption, i.e. turning data into gibberish that no one who intercepts it can read, is essential to any VPN service.  

[AdGuard VPN protocol](adguard-vpn-protocol.mdx) uses the most secure and fast encryption algorithm for today – AES 256. What is it and why it is so good we will describe in this article.

## AES historical tour 

AES (Advanced Encryption Standard) encryption was developed in the late 20th century at the U.S. government request: the existing Data Encryption Standard (DES) had become obsolete and a new, more secure encryption algorithm was required.

In a public competition announced by the government won the Rijndael cipher - rather similar to DES but much more sophisticated - which in 2002 was renamed AES and published by the U.S. National Institute of Standards and Technology.

Today, AES is an industry standard for encryption. Because of its open nature, it is used by the NSA and government agencies, as well as private, commercial, and noncommercial organizations. 

## How does AES-256 work

AES is a block cipher with a symmetric key. As a symmetric key cipher, it requires only one secret key to encrypt and decrypt the data. As a block cipher, AES divides the unencrypted information into blocks, expands the original cryptographic key into several and applies them to each block. 

There are different key sizes - 128, 192 and 256 bits - and the blocks are also measured in bits. During the encryption process, the encryptor replaces each piece of information with another, depending on the security key. So, for example, AES-256 creates 256 blocks of ciphertext from 256 blocks of plaintext in 14 rounds.

The rounds consist of several steps: splitting the data into blocks, swapping bytes, shifting rows and rearranging columns. The result is a completely random set of characters, which will only make sense with an encryption key.

AES-256 is the strongest level of encryption: to break this cipher, a bad actor will have to try 2256 discrete combinations, each consisting of 78 digits.
