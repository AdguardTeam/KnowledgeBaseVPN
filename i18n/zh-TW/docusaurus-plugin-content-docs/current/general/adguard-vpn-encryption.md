---
title: 'AdGuard VPN 使用甚麼類型的加密？'
sidebar_position: 7
---

## 引言

加密是令「虛擬私人網路」變得「私人」的原因。 A VPN creates a tunnel between your device and a VPN server, that encrypts and transmits your data securely to the open Internet. 加密過程，即將數據變成任何人都無法讀取的亂碼，對於任何 VPN服務都必不可少。

The AdGuard VPN protocol uses the most secure and fast encryption algorithm to date — AES-256. 了解它是甚麼以及它為何如此出色。

## AES的歷史

AES (進階加密標準) 加密在20世紀末期於美國被開發。 由於當時的數據加密標準 (DES) 已過時，因此需要一種新的、更安全的密碼演算法。

在政府的公開競賽中勝出的 Rijndael加密法——與 DES 非常相似，但更複雜。 2002年更名為AES，並由美國 國家標準技術研究所發布。

如今，AES 已經成為加密的業界標準。 由於其開放性，它被美國國家安全局和政府機構以及私營、商業和非牟利組織採用。

## AES-256 的工作原理

AES is a block cipher with a symmetric key. As a symmetric-key cipher, it requires only one secret key to encrypt and decrypt the data. As a block cipher, AES divides the unencrypted information, which is called plaintext, into blocks, splits the original cryptographic key into several ones and applies them to each block. In the end, a ciphertext, i.e. an encrypted text, is obtained.

There are different key sizes — 128, 192 and 256 bits — and the blocks are also measured in bits. During the encryption process, the encryptor replaces each piece of information with another, depending on the security key. So, for example, AES-256 creates 256 blocks of ciphertext from 256 blocks of plaintext in 14 rounds.

The rounds consist of several steps: splitting the data into blocks, swapping bytes, shifting rows and rearranging columns. The result is a completely random set of characters that will only make sense when using the right encryption key.

AES-256 is the strongest level of encryption: to break this cipher, 2256 discrete combinations, each consisting of 78 digits, would have to be tried.
