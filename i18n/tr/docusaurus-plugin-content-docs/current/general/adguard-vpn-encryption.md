---
title: 'AdGuard VPN''de ne tür şifreleme kullanılır'
sidebar_position: 7
---

## Introduction

"Sanal Özel Ağ" teriminde "özel" kelimesinin bulunmasının nedeni şifrelemedir. Bir VPN, cihazınızla bir VPN sunucusu arasında verilerinizin şifrelendiği ve ardından açık internete güvenli bir biçimde girdiği bir tünel oluşturur. Şifreleme süreci, yani verileri, araya giren hiç kimsenin okuyamayacağı anlamsız kelimelere dönüştürmek, herhangi bir VPN hizmeti için çok önemlidir.

AdGuard VPN protokolü, bugüne kadarki en güvenli ve hızlı şifreleme algoritmasını kullanır – AES-256. Ne olduğunu ve neden bu kadar iyi olduğunu öğrenin.

## AES tarihi turu

AES (Advanced Encryption Standard) encryption was developed in the late 20th century at the U.S. government request: the existing Data Encryption Standard (DES) became obsolete and a new, more secure encryption algorithm was required.

In a public competition announced by the government won the Rijndael cipher — rather similar to DES but much more sophisticated. 2002 yılında AES olarak yeniden adlandırıldı ve ABD tarafından yayınlandı. National Institute of Standards and Technology.

Bugün, AES şifreleme için endüstri standardıdır. Açık doğası nedeniyle, NSA ve devlet kurumlarının yanı sıra özel, ticari ve kar amacı gütmeyen kuruluşlar tarafından kullanılır.

## AES-256 nasıl çalışır

AES is a block cipher with a symmetric key. As a symmetric-key cipher, it requires only one secret key to encrypt and decrypt the data. As a block cipher, AES divides the unencrypted information, which is called plaintext, into blocks, splits the original cryptographic key into several ones and applies them to each block. In the end, a ciphertext, i.e. an encrypted text, is obtained.

There are different key sizes — 128, 192 and 256 bits — and the blocks are also measured in bits. Şifreleme işlemi sırasında, şifreleyici, güvenlik anahtarına bağlı olarak her bilgiyi bir başkasıyla değiştirir. So, for example, AES-256 creates 256 blocks of ciphertext from 256 blocks of plaintext in 14 rounds.

The rounds consist of several steps: splitting the data into blocks, swapping bytes, shifting rows and rearranging columns. Sonuç, yalnızca bir şifreleme anahtarıyla anlamlı olacak tamamen rastgele bir karakter kümesidir.

AES-256 is the strongest level of encryption: to break this cipher, a bad actor will have to try 2256 discrete combinations, each consisting of 78 digits.
