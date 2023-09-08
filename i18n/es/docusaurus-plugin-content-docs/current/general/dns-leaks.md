---
title: 'What is a DNS leak'
sidebar_position: 9
---

Una vez que instales una VPN, debes estar seguro de que no habrá filtraciones que conduzcan a la perca de tu anonimato. AdGuard VPN protege de manera confiable tu tráfico y tus datos de miradas indiscretas. No obstante, en algunos casos puedes sospechar la presencia de fugas de DNS en nuestro servicio VPN. Explicaremos de dónde vienen estas preocupaciones y por qué son infundadas.

## ¿Qué es una fuga de DNS?

Cuando usas una VPN, una conexión a un servidor DNS puede viajar fuera del túnel VPN encriptado y tu tráfico puede volverse visible para el ISP.

En otras palabras, cada vez que abres un sitio web, tu navegador envía una solicitud al servidor DNS del ISP y, a cambio, recibe la dirección IP del sitio web solicitado. Así, tu ISP ve toda tu actividad en línea y puede rastrearte.

## Cómo detectar fugas de DNS

Hay todo tipo de servicios de verificación de anonimato para detectar fugas de DNS, como `whoer.net`. Debe entenderse que estos sitios web en sí mismos no son perfectos y sus algoritmos no son claros, a diferencia de sus intenciones de intimidar a los usuarios con filtraciones imaginarias y potencialmente vender algún servicio.

Algunos sitios web de análisis de seguridad consideran que la coincidencia de la dirección IP del usuario y la dirección IP del servidor DNS es un resultado "bueno", lo que indica que no hay fuga de datos. En realidad, tal coincidencia puede indicar el uso de una VPN. Cuando la VPN está deshabilitada y las solicitudes van al servidor DNS de su ISP, la dirección IP del servidor DNS y la tuya no coinciden.

## Por qué no hay fugas de DNS en AdGuard VPN

Si habilitas AdGuard VPN en tu dispositivo y ejecutas una verificación en cualquiera de los sitios web del escáner, verás que las consultas de DNS van a los [servidores AdGuard DNS](https://adguard-dns.io). Sin embargo, esto no puede considerarse una fuga.

El uso de un servidor AdGuard DNS sin filtrado está configurado de forma predeterminada en AdGuard VPN. Esto asegura que tus consultas no vayan a los servidores DNS de tu ISP, lo que significa que permaneces privado y anónimo en línea.

Además, AdGuard DNS es un servicio de DNS muy popular, utilizado por más de 50 millones de personas. ¿Qué significa esto para ti? Imagina la siguiente situación: el servicio VPN habitual utiliza el servidor DNS que se encuentra en la misma dirección IP que el servidor VPN. El número de sus usuarios apenas supera los 1000.

Y en el caso de AdGuard DNS te "fusionarás" con 50 millones de usuarios por lo que nadie podrá rastrearte por el mero hecho de usar ese servidor DNS.

## Cómo configurar un servidor DNS personalizado en AdGuard VPN

Hay muchos servidores DNS públicos populares de [proveedores de DNS conocidos](https://adguard-dns.io/kb/general/dns-providers). Algunos de ellos solo pueden realizar sus funciones directas, dando las direcciones IP de los dominios solicitados, y algunos pueden hacer más.

Por ejemplo, AdGuard DNS elimina los anuncios y protege tu dispositivo para que no sea rastreado, y AdGuard DNS Family Protection combina las funciones de AdGuard DNS con la búsqueda segura y el control parental.

Puedes seleccionar cualquier servidor DNS y configurarlo en AdGuard VPN:

- en AdGuard VPN para Windows: *Configuración* → *Configuración de la aplicación* → *Servidores DNS*
- en AdGuard VPN para Mac: *Configuración* → *Configuración de la aplicación* → *Servidores DNS*
- en AdGuard VPN para Android: *Configuración* (ícono de engranaje) → *Configuración de la aplicación* → *Servidor DNS*
- en AdGuard VPN para iOS: *Configuración* (ícono de engranaje) → *Configuración de la aplicación* → *Servidor DNS*
- en la extensión de navegador AdGuard VPN: ícono del menú → *Configuración* → *Servidor DNS*
