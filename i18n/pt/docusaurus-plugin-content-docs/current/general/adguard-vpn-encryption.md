---
title: 'Que tipo de criptografia é usada no AdGuard VPN'
sidebar_position: 7
---

## Introdução

A criptografia é a razão pela qual a palavra "privado" existe no termo "Rede Privada Virtual". Uma VPN cria um túnel entre seu dispositivo e um servidor VPN, passando por onde seus dados são criptografados e depois entram na Internet aberta de forma segura. O processo de criptografia, ou seja, transformar dados em rabiscos que ninguém que os intercepta possa ler, é essencial para qualquer serviço VPN.

O protocolo AdGuard VPN usa o algoritmo de criptografia mais seguro e rápido até hoje – AES-256. Saiba o que é e porque é tão bom.

## Tour histórico da AES

A criptografia AES (Advanced Encryption Standard) foi desenvolvida no final do século 20 nos EUA. solicitação do governo: o Padrão de Criptografia de Dados (DES) existente tornou-se obsoleto e foi necessário um novo algoritmo de criptografia mais seguro.

Em um concurso público anunciado pelo governo ganhou a cifra Rijndael — bastante semelhante ao DES, mas muito mais sofisticada. Em 2002 foi renomeado AES e publicado pelos EUA. Instituto Nacional de Padrões e Tecnologia.

Hoje, o AES é o padrão da indústria para criptografia. Devido à sua natureza aberta, é usado pela NSA e agências governamentais, bem como por organizações privadas, comerciais e sem fins lucrativos.

## Como funciona o AES-256

AES é uma cifra de bloco com uma chave simétrica. Como uma cifra de chave simétrica, requer apenas uma chave secreta para criptografar e descriptografar os dados. Como uma cifra de bloco, o AES divide as informações não criptografadas, que são chamadas de texto simples, em blocos, divide a chave criptográfica original em várias e as aplica a cada bloco. Ao final, obtém-se um texto cifrado, ou seja, um texto criptografado.

Existem diferentes tamanhos de chave — 128, 192 e 256 bits — e os blocos também são medidos em bits. Durante o processo de criptografia, o criptografador substitui cada informação por outra, dependendo da chave de segurança. Assim, por exemplo, o AES-256 cria 256 blocos de texto cifrado a partir de 256 blocos de texto simples em 14 rodadas.

As rodadas consistem em várias etapas: dividir os dados em blocos, trocar bytes, deslocar linhas e reorganizar colunas. O resultado é um conjunto de caracteres completamente aleatório, que só fará sentido com uma chave de criptografia.

AES-256 é o nível mais forte de criptografia: para quebrar essa cifra, um agente mal-intencionado terá que tentar 2.256 combinações discretas, cada uma composta por 78 dígitos.