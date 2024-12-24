---
title: What is a DNS leak
sidebar_position: 9
---

Once you install a VPN, you want to be sure that there won’t be any leaks that will lead to your de-anonymization. O AdGuard VPN protege de forma confiável seu tráfego e seus dados de olhares curiosos. No entanto, em alguns casos, você pode suspeitar da presença de vazamentos de DNS em nosso serviço VPN. We’ll explain where these concerns come from and why they are unfounded.

## O que são vazamentos de DNS?

Quando você usa uma VPN, uma conexão com um servidor DNS pode viajar para fora do túnel VPN criptografado e seu tráfego pode se tornar visível para o seu ISP.

In other words, every time you open a website, your browser sends a request to the ISP’s DNS server and in return receives the IP address of the requested website. Dessa forma, seu ISP vê toda a sua atividade online e pode te rastrear.

## Como detectar vazamentos de DNS

Existem todos os tipos de serviços de verificação de anonimato para detectar vazamentos de DNS, como `whoer.net`. The algorithms of these websites are not clear, but their intentions are — to scare users with imaginary leaks, potentially enabling them to sell their services.

Some security scanning websites consider the coincidence of the user’s IP address and the DNS server’s IP address to be a “good” result, indicating that there are no leaks. Na realidade, tal correspondência pode indicar o uso de uma VPN. When VPN is disabled and the requests go to your ISP’s DNS server, the IP address of the DNS server and your own one do not coincide.

## Por que não há vazamentos de DNS no AdGuard VPN

Se você habilitar o AdGuard VPN no seu dispositivo e executar uma verificação em qualquer site de escaneamento, você verá que as consultas de DNS vão para os servidores [AdGuard DNS](https://adguard-dns.io). No entanto, isso não pode ser considerado um vazamento.

O uso de um servidor do AdGuard DNS sem filtragem é definido por padrão no AdGuard VPN. Isso garante que suas consultas não irão para os servidores DNS do seu ISP, o que significa que você permanece privado e anônimo online.

What’s more, AdGuard DNS is a very popular DNS service, used by over 50 million people. E como isso impacta na sua experiência? Imagine a seguinte situação: o serviço VPN usual usa o servidor DNS que está localizado no mesmo endereço IP do servidor VPN. O seu número de usuários dificilmente ultrapassa 1.000.

And in the case of AdGuard DNS you will “merge” with 50 million users so nobody will be able to track you by the mere fact of using that DNS server.

## Como configurar um servidor DNS personalizado no AdGuard VPN

Existem muitos servidores DNS públicos populares de [provedores de DNS conhecidos](https://adguard-dns.io/kb/general/dns-providers). Some of them can only perform their direct duties — giving the IP addresses of the requested domains, and some can do more.

Por exemplo, o AdGuard DNS remove anúncios e protege seu dispositivo contra rastreamento, e o AdGuard DNS Family Protection combina os recursos do AdGuard DNS com pesquisa segura e controle parental.

Você pode selecionar qualquer servidor DNS e configurá-lo no AdGuard VPN:

- no AdGuard VPN para Windows: *Configurações* → *Configurações do aplicativo* → *servidores DNS*
- no AdGuard VPN para Mac: *Configurações* → *Configurações do aplicativo* → *servidores DNS*
- no AdGuard VPN para Android: *Configurações* (ícone de engrenagem) → *Configurações do aplicativo* → *Servidor DNS*
- no AdGuard VPN para iOS: *Configurações* (ícone de engrenagem) → *Configurações do aplicativo* → *Servidor DNS*
- na extensão de navegador AdGuard VPN: ícone de menu (três linhas horizontais) → *Configurações* → *Servidor DNS*
