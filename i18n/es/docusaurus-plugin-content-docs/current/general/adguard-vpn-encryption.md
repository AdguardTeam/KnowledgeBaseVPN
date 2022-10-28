---
title: '¿Qué tipo de cifrado se utiliza en AdGuard VPN?'
sidebar_position: 7
---

## Introducción

El cifrado es la razón por la que la palabra "privada" existe en el término "Red Privada Virtual". Una VPN crea un túnel entre tu dispositivo y un servidor VPN, a través del cual sus datos se encriptan y luego entran en la Internet abierta de forma segura. El proceso de encriptación, es decir, convertir los datos en galimatías de manera de quien los intercepte no los pueda leer, es esencial para cualquier servicio VPN.

El protocolo VPN de AdGuard utiliza el algoritmo de cifrado más seguro y rápido hasta la fecha: AES-256. Aprende qué es y por qué es tan bueno.

## Recorrido histórico de AES

El cifrado AES (Advanced Encryption Standard) se desarrolló a finales del siglo XX en los Estados Unidos. petición del gobierno: el actual "Data Encryption Standard" (DES) se quedó obsoleto y se necesitaba un nuevo algoritmo de cifrado más seguro.

En un concurso público convocado por el gobierno ganó el cifrado Rijndael, bastante similar al DES pero mucho más sofisticado. En 2002 pasó a llamarse AES y fue publicada por el Instituto Nacional de Estándares y Tecnología de Estados Unidos.

Hoy en día, AES es el estándar de la industria para el cifrado. Debido a su naturaleza abierta, es utilizado por la NSA y agencias gubernamentales, así como por organizaciones privadas, comerciales y sin fines de lucro.

## Cómo funciona AES-256

AES es un cifrado por bloques con una clave simétrica. Al ser un cifrado de clave simétrica, solamente se requiere de una clave secreta para cifrar y descifrar los datos. Como es un cifrado por bloques, AES divide la información no cifrada, que se llama texto plano, en bloques, divide la clave criptográfica original en varias y las aplica a cada bloque. Al final, se obtiene un texto cifrado, es decir, un texto encriptado.

Hay diferentes tamaños de clave — 128, 192 y 256 bits —  y los bloques también se miden en bits. Durante el proceso de encriptación, el encriptador sustituye cada pieza de información por otra, dependiendo de la clave de seguridad. Así, por ejemplo, AES-256 crea 256 bloques de texto cifrado a partir de 256 bloques de texto plano en 14 rondas.

Las rondas constan de varios pasos: dividir los datos en bloques, intercambiar bytes, desplazar filas y reordenar columnas. El resultado es un conjunto de caracteres completamente aleatorio, que solo tendrá sentido con una clave de encriptación.

AES-256 es el nivel de cifrado más potente: para romper este cifrado, un actor malintencionado tendrá que probar 2256 combinaciones discretas, cada una de ellas compuesta por 78 dígitos.
