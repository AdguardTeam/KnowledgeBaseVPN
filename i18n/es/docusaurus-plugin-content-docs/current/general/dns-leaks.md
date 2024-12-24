---
title: What is a DNS leak
sidebar_position: 9
---

Once you install a VPN, you want to be sure that there won’t be any leaks that will lead to your de-anonymization. AdGuard VPN protege de manera confiable tu tráfico y tus datos de miradas indiscretas. No obstante, en algunos casos puedes sospechar la presencia de fugas de DNS en nuestro servicio VPN. We’ll explain where these concerns come from and why they are unfounded.

## ¿Qué es una fuga de DNS?

Cuando usas una VPN, una conexión a un servidor DNS puede viajar fuera del túnel VPN encriptado y tu tráfico puede volverse visible para el ISP.

In other words, every time you open a website, your browser sends a request to the ISP’s DNS server and in return receives the IP address of the requested website. Así, tu ISP ve toda tu actividad en línea y puede rastrearte.

## Cómo detectar fugas de DNS

Hay todo tipo de servicios de verificación de anonimato para detectar fugas de DNS, como `whoer.net`. The algorithms of these websites are not clear, but their intentions are — to scare users with imaginary leaks, potentially enabling them to sell their services.

Some security scanning websites consider the coincidence of the user’s IP address and the DNS server’s IP address to be a “good” result, indicating that there are no leaks. En realidad, tal coincidencia puede indicar el uso de una VPN. When VPN is disabled and the requests go to your ISP’s DNS server, the IP address of the DNS server and your own one do not coincide.

## Por qué no hay fugas de DNS en AdGuard VPN

Si habilitas AdGuard VPN en tu dispositivo y ejecutas una verificación en cualquiera de los sitios web del escáner, verás que las consultas de DNS van a los [servidores AdGuard DNS](https://adguard-dns.io). Sin embargo, esto no puede considerarse una fuga.

El uso de un servidor AdGuard DNS sin filtrado está configurado de forma predeterminada en AdGuard VPN. Esto asegura que tus consultas no vayan a los servidores DNS de tu ISP, lo que significa que permaneces privado y anónimo en línea.

What’s more, AdGuard DNS is a very popular DNS service, used by over 50 million people. ¿Qué significa esto para ti? Imagina la siguiente situación: el servicio VPN habitual utiliza el servidor DNS que se encuentra en la misma dirección IP que el servidor VPN. El número de sus usuarios apenas supera los 1000.

And in the case of AdGuard DNS you will “merge” with 50 million users so nobody will be able to track you by the mere fact of using that DNS server.

## Cómo configurar un servidor DNS personalizado en AdGuard VPN

Hay muchos servidores DNS públicos populares de [proveedores de DNS conocidos](https://adguard-dns.io/kb/general/dns-providers). Some of them can only perform their direct duties — giving the IP addresses of the requested domains, and some can do more.

Por ejemplo, AdGuard DNS elimina los anuncios y protege tu dispositivo para que no sea rastreado, y AdGuard DNS Family Protection combina las funciones de AdGuard DNS con la búsqueda segura y el control parental.

Puedes seleccionar cualquier servidor DNS y configurarlo en AdGuard VPN:

- en AdGuard VPN para Windows: *Configuración* → *Configuración de la aplicación* → *Servidores DNS*
- en AdGuard VPN para Mac: *Configuración* → *Configuración de la aplicación* → *Servidores DNS*
- en AdGuard VPN para Android: *Configuración* (ícono de engranaje) → *Configuración de la aplicación* → *Servidor DNS*
- en AdGuard VPN para iOS: *Configuración* (ícono de engranaje) → *Configuración de la aplicación* → *Servidor DNS*
- en la extensión de navegador AdGuard VPN: ícono del menú → *Configuración* → *Servidor DNS*
