---
title: 'What is a DNS leak'
sidebar_position: 9
---

Depois de instalar uma VPN, é importante ter certeza de que não haverá vazamentos que ameacem o seu anonimato. O AdGuard VPN protege de forma confiável seu tráfego e seus dados de olhares curiosos. No entanto, em alguns casos, você pode suspeitar da presença de vazamentos de DNS em nosso serviço VPN. Explicaremos de onde vêm essas preocupações e por que são infundadas.

## O que são vazamentos de DNS?

Quando você usa uma VPN, uma conexão com um servidor DNS pode viajar para fora do túnel VPN criptografado e seu tráfego pode se tornar visível para o seu ISP.

Em outras palavras, toda vez que você abre um site, seu navegador envia uma solicitação ao servidor DNS do ISP e, em troca, recebe o endereço IP do site solicitado. Dessa forma, seu ISP vê toda a sua atividade online e pode te rastrear.

## Como detectar vazamentos de DNS

Existem todos os tipos de serviços de verificação de anonimato para detectar vazamentos de DNS, como `whoer.net`. Deve-se entender que esses sites em si não são perfeitos e seus algoritmos não são claros. Mas suas intenções de intimidar os usuários com vazamentos imaginários e potencialmente vender algum serviço são, sim, bem claras.

Alguns sites de verificação de segurança consideram a coincidência do endereço IP do usuário e do endereço IP do servidor DNS um resultado "bom", indicando que não há vazamentos. Na realidade, tal correspondência pode indicar o uso de uma VPN. Quando a VPN está desativada e as solicitações vão para o servidor DNS do seu ISP, o endereço IP do servidor DNS e o seu não coincidem.

## Por que não há vazamentos de DNS no AdGuard VPN

Se você habilitar o AdGuard VPN no seu dispositivo e executar uma verificação em qualquer site de escaneamento, você verá que as consultas de DNS vão para os servidores [AdGuard DNS](https://adguard-dns.io). No entanto, isso não pode ser considerado um vazamento.

O uso de um servidor do AdGuard DNS sem filtragem é definido por padrão no AdGuard VPN. Isso garante que suas consultas não irão para os servidores DNS do seu ISP, o que significa que você permanece privado e anônimo online.

Além do mais, o AdGuard DNS é um serviço de DNS muito popular, usado por mais de 50 milhões de pessoas. E como isso impacta na sua experiência? Imagine a seguinte situação: o serviço VPN usual usa o servidor DNS que está localizado no mesmo endereço IP do servidor VPN. O seu número de usuários dificilmente ultrapassa 1.000.

E, no caso do AdGuard DNS, você vai "se misturar" com 50 milhões de usuários para que ninguém consiga rastreá-lo pelo simples fato de usar esse servidor DNS.

## Como configurar um servidor DNS personalizado no AdGuard VPN

Existem muitos servidores DNS públicos populares de [provedores de DNS conhecidos](https://adguard-dns.io/kb/general/dns-providers). Alguns deles podem apenas desempenhar suas funções diretas: fornecer os endereços IP dos domínios solicitados, e alguns podem fazer mais.

Por exemplo, o AdGuard DNS remove anúncios e protege seu dispositivo contra rastreamento, e o AdGuard DNS Family Protection combina os recursos do AdGuard DNS com pesquisa segura e controle parental.

Você pode selecionar qualquer servidor DNS e configurá-lo no AdGuard VPN:

- no AdGuard VPN para Windows: *Configurações* → *Configurações do aplicativo* → *servidores DNS*
- no AdGuard VPN para Mac: *Configurações* → *Configurações do aplicativo* → *servidores DNS*
- no AdGuard VPN para Android: *Configurações* (ícone de engrenagem) → *Configurações do aplicativo* → *Servidor DNS*
- no AdGuard VPN para iOS: *Configurações* (ícone de engrenagem) → *Configurações do aplicativo* → *Servidor DNS*
- na extensão de navegador AdGuard VPN: ícone de menu (três linhas horizontais) → *Configurações* → *Servidor DNS*
