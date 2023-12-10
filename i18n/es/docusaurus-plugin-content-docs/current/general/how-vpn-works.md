---
title: Cómo funciona VPN
sidebar_position: 1
---

Para entender cómo funciona AdGuard VPN, primero debe comprender los principios generales del servicio VPN.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Funciones de VPN

A VPN is a virtual private network that helps hide your location and protect your data on the Web. Una VPN conecta un ordenador o un dispositivo móvil a un servidor VPN y utiliza la dirección IP de este servidor para que a un observador externo le parezca que está en otro lugar. Esto le permite acceder de forma segura a diversos recursos de Internet y proteger sus datos personales.

De este modo, una VPN cumple dos importantes funciones:

1. **Maintaining anonymity**

    Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN allows you to hide your IP address and replace it with the IP address of the VPN server to which you are connected. This way you will be able to maintain your privacy and anonymously search for information on the web.

1. **Data protection** If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. Detalles de tarjetas bancarias, nombres de usuario y contraseñas, datos de pasaporte: todos estos datos pueden ser interceptados por estafadores online. The VPN tunnel encrypts the information you send to and receive from the Web, making it useless in the wrong hands.

## Estructura de VPN

Cuando se conecta a una red, a su computadora o dispositivo móvil se le asigna un número de identificación único, más conocido como dirección IP. Suele estar formado por números del 0 al 255, separados por puntos o dos puntos. Conociendo esta secuencia, se puede determinar la geolocalización del dispositivo. The IP address is usually assigned by your ISP, and it will be visible all the way to the desired resource. Por esta razón, el servidor web del sitio que está visitando puede registrar su dirección IP y grabar lo que ha solicitado. Este registro se puede utilizar principalmente para la recopilación de datos y el análisis del tráfico.

Una VPN crea un túnel entre su dispositivo y el servidor VPN. Tus datos pasan por este túnel, se encriptan y luego entran en la Internet abierta de forma segura. Por lo tanto, al servidor web le parecerá que su dispositivo ya no tiene su dirección IP real, sino la dirección IP del punto final del túnel, es decir, el servidor VPN. Por lo tanto, el sitio al que llegue después de pasar por el túnel VPN considerará la geolocalización del servidor VPN que haya seleccionado como su ubicación real. Y los datos encriptados no caerán en manos de anunciantes, hackers y servicios de seguridad.

![VPN structure](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Tipos de protocolos VPN

VPN security protocols are tools that encrypt data in a VPN tunnel and allow you to maintain user privacy in the open Internet. Por el momento, la gran mayoría de los servicios VPN modernos utilizan uno de los siguientes tres protocolos VPN:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Una de sus principales ventajas es que está disponible en la mayoría de dispositivos y sistemas operativos y proporciona un alto nivel de seguridad. Sin embargo, el uso de la doble [encapsulación](https://en.wikipedia.org/wiki/Encapsulation_(networking)) en este protocolo puede dar lugar a una menor velocidad de conexión.

1. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Este protocolo moderno es de código abierto, por lo que los fabricantes de terceros pueden mejorar y actualizar la tecnología.

1. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Sus principales ventajas son la facilidad de uso, la alta eficiencia y la baja vulnerabilidad a los ataques.

Además de estos protocolos VPN, existen otros (por ejemplo, TLS, SSTP, IKEv2), pero no son populares o no cumplen con los estándares modernos de cifrado de datos.

AdGuard VPN also has its own [*protocol*](/general/adguard-vpn-protocol). One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

## Inconvenientes de VPN

Despite the obvious advantages, VPN is not perfect and has some disadvantages:

### Menor velocidad

Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, may impact the overall user experience of a VPN connection.

### Bloqueo de acceso

Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask themselves in such a way that they are only seen as regular traffic. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing.

### Ruptura de conexiones VPN

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially with unreliable VPN providers.

## AdGuard VPN

Our VPN service has several important [advantages](/general/why-adguard-vpn):

- [*Proprietary VPN protocol*](/general/adguard-vpn-protocol), which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

- [*No-logging policy*](https://adguard-vpn.com/privacy.html), which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties

- *Más de 50 servidores VPN en decenas de países*

- *Facilidad de uso y amplias opciones de personalización*

Currently, AdGuard VPN is available as:

- [Browser extension](/adguard-vpn-browser-extension/overview) for Chrome, Firefox, and Edge

- Mobile app for [Android](/adguard-vpn-for-android/overview) and [iOS](/adguard-vpn-for-ios/overview)

- Desktop application for [Windows](/adguard-vpn-for-windows/overview) and [Mac](/adguard-vpn-for-mac/overview)

[Learn more about AdGuard VPN features](https://adguard-vpn.com/welcome.html)
