---
title: 'Como funciona o protocolo AdGuard VPN'
sidebar_position: 4
---

Nosso protocolo é usado por [todos os aplicativos móveis e de desktop AdGuard VPN](https://adguard-vpn.com/welcome.html). Baixe qualquer um dos nossos produtos e use-o sabendo que seus dados estão protegidos da maneira mais segura.

## Por que desenvolvemos o protocolo AdGuard VPN

Por anos, nos concentramos no desenvolvimento de todos os tipos de aplicativos de bloqueio de anúncios e extensões de navegador. E em 2019 resolvemos desenvolver nosso próprio serviço VPN, aparentemente do nada. Quando, na realidade, havia alguns motivos que nos levaram a fazer isso.

- Os aplicativos móveis AdGuard tinham problemas de compatibilidade com aplicativos VPN. Normalmente, dois aplicativos móveis baseados em VPN não podem funcionar juntos: em casos raros no iOS e nunca no Android. Como os aplicativos AdGuard Ad Blocker usam VPN local para filtrar o tráfego de rede, usá-los junto com qualquer aplicativo VPN estaria fora de questão. É por isso que vimos o desenvolvimento de uma VPN interna como a única solução viável que poderia garantir compatibilidade: depois de aplicarmos um pouco de mágica, os dois aplicativos podem trabalhar juntos como um serviço VPN.
- Em segundo lugar, a VPN parecia mais do que relevante para nossa filosofia e prioridades. Nosso objetivo principal é proteger a privacidade dos usuários, e é exatamente para isso que servem as VPNs.
- Finalmente, ao longo dos anos de desenvolvimento de software AdGuard, nos tornamos especialistas em filtragem de tráfego de rede. Isso nos permitiu trazer algo novo em vez de nos tornarmos mais uma VPN insossa.

Desde o início, decidimos que o AdGuard VPN teria uma diferença fundamental em relação aos seus concorrentes — desenvolveremos e implantaremos um protocolo VPN interno que não forçaria os usuários a escolher entre segurança e velocidade.

## Desvantagens dos protocolos VPN populares

Desenvolvemos o protocolo AdGuard VPN vendo as desvantagens dos protocolos VPN populares (OpenVPN, WireGuard, IPSec, etc.):

- Eles podem ser facilmente detectados e bloqueados no nível da rede.
- Se você tentar "ocultá-los", o desempenho cairá.

Para "ocultar" o uso de VPN, o fluxo de dados geralmente é "encapsulado" em uma conexão TCP e, às vezes, é adicionalmente criptografado para fazer o tráfego parecer uma comunicação normal do site. Infelizmente, essa abordagem tem uma desvantagem — devido ao uso de TCP, há necessidade de confirmação adicional de entrega.

Usando qualquer protocolo VPN popular, estamos sempre diante de uma compensação: rápido, mas fácil de detectar vs. lento.

## O que há de bom no protocolo AdGuard VPN

- É *quase impossível de distinguir do tráfego HTTPS normal*, ou seja, a conexão com o servidor AdGuard VPN parece exatamente a mesma que a conexão com um site normal.
- Para criptografia, usamos **HTTPS (TLS)**, que lida com essa tarefa perfeitamente. É o método de criptografia mais popular do mundo, e as bibliotecas que o implementam são constantemente auditadas quanto à segurança.

Alguns protocolos VPN existentes também lidam com a tarefa de criptografia e são (e, portanto, o fato de usar uma VPN) difíceis de detectar. Mas isso geralmente tem o preço de velocidade reduzida. Isso não acontece no nosso caso, graças a várias soluções.

- Usamos o **protocolo de transporte HTTP/2**, o que torna virtualmente impossível detectar o protocolo AdGuard VPN, mantendo alta velocidade.
- Ao contrário de outros, o protocolo AdGuard VPN *opera com dados e não com pacotes*. Isso significa que o AdGuard VPN estabelece um "túnel" separado para cada conexão, cada fluxo HTTP/2 corresponde a uma conexão. O AdGuard VPN transfere dados por meio deste túnel. Isso nos permite acelerar a operação economizando em pacotes de confirmação, pois podemos armazenar os dados de vários pacotes em um antes de enviá-los para o servidor VPN (ou do servidor para o cliente). E quanto menos pacotes, menos confirmações são necessárias.
