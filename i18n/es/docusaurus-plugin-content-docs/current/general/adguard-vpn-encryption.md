---
title: '¿Qué tipo de cifrado se utiliza en AdGuard VPN?'
sidebar_position: 7
---

## Introducción

El cifrado es la razón por la que la palabra "privada" existe en el término "Red Privada Virtual". A VPN creates a tunnel between your device and a VPN server, passing through which your data is encrypted and then securely transmitted to the open Internet. El proceso de encriptación, es decir, convertir los datos en galimatías de manera de quien los intercepte no los pueda leer, es esencial para cualquier servicio VPN.

The AdGuard VPN protocol uses the most secure and fast encryption algorithm to date — AES-256. Aprende qué es y por qué es tan bueno.

## Recorrido histórico de AES

El cifrado AES (Advanced Encryption Standard) se desarrolló a finales del siglo XX en los Estados Unidos. petición del gobierno: el actual "Data Encryption Standard" (DES) se quedó obsoleto y se necesitaba un nuevo algoritmo de cifrado más seguro.

En un concurso público convocado por el gobierno ganó el cifrado Rijndael, bastante similar al DES pero mucho más sofisticado. En 2002 pasó a llamarse AES y fue publicada por el Instituto Nacional de Estándares y Tecnología de Estados Unidos.

Hoy en día, AES es el estándar de la industria para el cifrado. Debido a su naturaleza abierta, es utilizado por la NSA y agencias gubernamentales, así como por organizaciones privadas, comerciales y sin fines de lucro.

## Cómo funciona AES-256

AES es un cifrado por bloques con una clave simétrica. Al ser un cifrado de clave simétrica, solamente se requiere de una clave secreta para cifrar y descifrar los datos. Como es un cifrado por bloques, AES divide la información no cifrada, que se llama texto plano, en bloques, divide la clave criptográfica original en varias y las aplica a cada bloque. Al final, se obtiene un texto cifrado, es decir, un texto encriptado.

Hay diferentes tamaños de clave — 128, 192 y 256 bits —  y los bloques también se miden en bits. Durante el proceso de encriptación, el encriptador sustituye cada pieza de información por otra, dependiendo de la clave de seguridad. Así, por ejemplo, AES-256 crea 256 bloques de texto cifrado a partir de 256 bloques de texto plano en 14 rondas.

Las rondas constan de varios pasos: dividir los datos en bloques, intercambiar bytes, desplazar filas y reordenar columnas. The result is a completely random set of characters that will only make sense when using the right encryption key.

AES-256 is the strongest level of encryption: to break this cipher, 2256 discrete combinations, each consisting of 78 digits, would have to be tried.
