---
title: Cómo funciona VPN
sidebar_position: 1
---

Para entender cómo funciona AdGuard VPN, primero debe comprender los principios generales del servicio VPN.

## Funciones de VPN

Una VPN es una red privada virtual que ayuda a ocultar su ubicación y a proteger sus datos en la web. Una VPN conecta un ordenador o un dispositivo móvil a un servidor VPN y utiliza la dirección IP de este servidor para que a un observador externo le parezca que está en otro lugar. Esto le permite acceder de forma segura a diversos recursos de Internet y proteger sus datos personales.

De este modo, una VPN cumple dos importantes funciones:

1. **Mantener el anonimato**

Mediante una conexión a Internet, el usuario deja su huella digital, que puede ser analizada y utilizada por terceros. Por ejemplo, una de las tiendas en línea que ha visitado puede guardar su historial de búsqueda y luego ofrecerle sus productos a través de publicidad dirigida. O los servicios secretos, tras conocer su ubicación a través de la dirección IP de su dispositivo y haber determinado su identidad, pueden vigilar en secreto su actividad en la red. Además, los navegadores web y los propios proveedores de servicios de Internet pueden utilizar su historial de navegación para sus propios fines, así como venderlo a los anunciantes y proporcionarlo a las instituciones gubernamentales. La VPN le permite ocultar su dirección IP y sustituirla por la dirección IP del servidor VPN al que está conectado. De este modo, podrá mantener su privacidad y buscar información en la web de forma anónima.

2. **Protección de datos**

Si se conecta a una red pública o poco confiable, los datos en su dispositivo pueden volverse vulnerables a los ciberdelincuentes. Detalles de tarjetas bancarias, nombres de usuario y contraseñas, datos de pasaporte: todos estos datos pueden ser interceptados por estafadores online. El túnel VPN encripta la información que envías y recibes de la web, para que no pueda caer en manos equivocadas.

## Estructura de VPN

Cuando se conecta a una red, a su computadora o dispositivo móvil se le asigna un número de identificación único, más conocido como dirección IP. Suele estar formado por números del 0 al 255, separados por puntos o dos puntos. Conociendo esta secuencia, se puede determinar la geolocalización del dispositivo. La dirección IP generalmente es establecida por su ISP, y será visible hasta el recurso deseado. Por esta razón, el servidor web del sitio que está visitando puede registrar su dirección IP y grabar lo que ha solicitado. Este registro se puede utilizar principalmente para la recopilación de datos y el análisis del tráfico.

Una VPN crea un túnel entre su dispositivo y el servidor VPN. Tus datos pasan por este túnel, se encriptan y luego entran en la Internet abierta de forma segura. Por lo tanto, al servidor web le parecerá que su dispositivo ya no tiene su dirección IP real, sino la dirección IP del punto final del túnel, es decir, el servidor VPN. Así, el sitio al que llegue después de pasar por el túnel VPN considerará la geolocalización del servidor VPN que haya seleccionado como su ubicación real. Y los datos encriptados no caerán en manos de anunciantes, hackers y servicios de seguridad.

![Estructura de VPN](https://cdn.adguard.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Tipos de protocolos VPN

Los protocolos de seguridad de las VPN son herramientas que cifran los datos en un túnel VPN y permiten mantener la privacidad del usuario en una Internet abierta. Por el momento, la gran mayoría de los servicios VPN modernos utilizan uno de los siguientes tres protocolos VPN:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Una de sus principales ventajas es que está disponible en la mayoría de dispositivos y sistemas operativos y proporciona un alto nivel de seguridad. Sin embargo, el uso de la doble encapsulación [](https://en.wikipedia.org/wiki/Encapsulation_(networking)) en este protocolo puede dar lugar a una menor velocidad de conexión.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Este protocolo moderno es de código abierto, por lo que los fabricantes de terceros pueden mejorar y actualizar la tecnología.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Sus principales ventajas son la facilidad de uso, la alta eficiencia y la baja vulnerabilidad a los ataques.

Además de estos protocolos VPN, existen otros (por ejemplo, TLS, SSTP, IKEv2), pero no son populares o no cumplen con los estándares modernos de cifrado de datos.

![Cómo funciona un protocolo VPN](https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/4.svg)

AdGuard VPN también tiene su propio protocolo [**](adguard-vpn-protocol.mdx). Una de sus ventajas es que el tráfico transmitido mediante el protocolo AdGuard VPN es difícil de distinguir del tráfico normal. El túnel VPN parece tráfico HTTPS normal, por lo que es extremadamente difícil detectarlo y bloquearlo. Además, se basa en los mecanismos del moderno protocolo HTTP/2, que garantiza una alta velocidad de conexión.

![Cómo funciona la VPN oculta](https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5.svg)

## Inconvenientes de VPN

A pesar de las ventajas obvias, la VPN no es perfecta y tiene algunas desventajas:

**Menor velocidad**

Como su tráfico no va directamente al servidor web, sino que pasa primero por el servidor VPN, la velocidad de la conexión VPN disminuye. Hay otros factores que también afectan a la velocidad al utilizar una VPN: la carga del servidor VPN, su ancho de banda, la compatibilidad del protocolo VPN con su sistema operativo. Todos estos factores, así como la velocidad de la propia red, pueden reducir la calidad de su conexión VPN.

**Bloqueo del acceso**

Algunos servicios en línea se esfuerzan mucho por detectar el tráfico de VPN y bloquear el acceso a los usuarios de VPN. Sin embargo, no muchas VPN pueden enmascarar su tráfico como regular. Por lo tanto, muchos intentos de ir a un determinado sitio web sin desactivar la VPN terminan en nada.

**Ruptura de conexiones VPN**

Una señal débil, una sobrecarga de la red, la incompatibilidad de la VPN con un cortafuegos, un antivirus y otros programas, un protocolo de VPN obsoleto... todo esto puede provocar un fallo repentino en la conexión VPN, especialmente por parte de proveedores de VPN poco fiables.

## AdGuard VPN

Nuestro servicio VPN tiene varias ventajas importantes [](why-adguard-vpn.md):

* [*Protocolo proprietario VPN*](adguard-vpn-protocol.mdx), que funciona de forma estable incluso con una conexión a Internet lenta y se disfraza de tráfico normal, lo que dificulta su seguimiento y bloqueo

* [*Política "No-logs"*](https://adguard-vpn.com/en/privacy.html), lo que significa que AdGuard VPN no recoge sus datos personales y no los transfiere a terceros

* *Más de 50 servidores VPN en decenas de países*

* *Facilidad de uso y amplias opciones de personalización*

Actualmente, AdGuard VPN está disponible como:

* [Extensión de navegador](../adguard-vpn-browser-extension/overview.md) para Chrome, Firefox y Edge

* Aplicación móvil para [Android](../adguard-vpn-for-android/overview.md) y [iOS](../adguard-vpn-for-ios/overview.md)

* Aplicación móvil para [Android](../adguard-vpn-for-windows/overview.md) y [iOS](../adguard-vpn-for-mac/overview.md)

Puede obtener más información sobre las características de AdGuard VPN (incluida la versión ilimitada) [aquí](https://adguard-vpn.com/en/welcome.html).
