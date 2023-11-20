---
title: 'Cómo funciona el protocolo AdGuard VPN'
sidebar_position: 4
---

Nuestro protocolo es utilizado por [todas las aplicaciones móviles y de escritorio de AdGuard VPN](https://adguard-vpn.com/welcome.html). Descargue cualquiera de nuestros productos y utilícelo sabiendo que sus datos están protegidos de la forma más segura.

## Por qué desarrollamos el protocolo AdGuard VPN

Durante años, nos concentramos en desarrollar todos tipo de aplicaciones de bloqueo de anuncios y extensiones de navegador. Y en 2019 conseguimos desarrollar nuestro propio servicio de VPN, aparentemente de la nada. Cuando en realidad, hubo algunas razones que nos impulsaron a hacerlo.

- Las aplicaciones móviles de AdGuard tenían problemas de compatibilidad con las aplicaciones VPN. Normalmente, dos aplicaciones móviles basadas en VPN no pueden funcionar juntas: en casos excepcionales en iOS y nunca en Android. Como las aplicaciones de bloqueo de anuncios de AdGuard utilizan la VPN local para filtrar el tráfico de la red, su uso junto con cualquier aplicación de VPN estaría fuera de lugar. Por eso vimos el desarrollo de una VPN interna como la única solución viable que podía garantizar la compatibilidad: después de aplicar algo de magia, las dos aplicaciones son capaces de trabajar juntas como un solo servicio VPN.
- En segundo lugar, una VPN parecía más que relevante para nuestra filosofía y prioridades. Nuestro objetivo principal es proteger la privacidad de los usuarios, y esto es exactamente para lo que sirven las VPN.
- Por último, a lo largo de los años de desarrollo del software AdGuard, nos hemos convertido en expertos en el filtrado del tráfico de red. Esto nos ha permitido aportar algo nuevo en lugar de convertirnos en otra VPN de poca monta.

Desde el principio, decidimos que AdGuard VPN tendría una diferencia clave con respecto a sus competidores: desarrollaríamos e implantaríamos un protocolo VPN propio que no obligaría a los usuarios a elegir entre seguridad y velocidad.

## Desventajas de los protocolos VPN más conocidos

Desarrollamos el protocolo AdGuard VPN viendo las desventajas de los protocolos VPN más populares (OpenVPN, WireGuard, IPSec, etc.):

- Se pueden detectar y bloquear fácilmente a nivel de red.
- Si intentas "esconderlos", su rendimiento bajará.

Para "ocultar" el uso de la VPN, el flujo de datos suele estar "envuelto" en una conexión TCP y, a veces, se cifra adicionalmente para que el tráfico parezca una conexión normal a un sitio web. Desgraciadamente, este enfoque tiene una desventaja: debido al uso de TCP, se necesita una confirmación adicional de la entrega.

Al usar cualquier protocolo VPN popular, siempre nos enfrentamos a un dilema: rápido pero fácil de detectar frente a lento.

## Lo bueno del protocolo AdGuard VPN

- Es *casi imposible distinguirlo del tráfico HTTPS normal*, es decir, la conexión al servidor AdGuard VPN se ve exactamente igual que la conexión a un sitio web normal.
- Para el cifrado usamos **HTTPS (TLS)**, que hace frente a esta tarea perfectamente. Es el método de encriptación más popular del mundo, y las bibliotecas que lo implementan son auditadas constantemente por seguridad.

Algunos protocolos VPN existentes también se encargan de la tarea de encriptación, y ellos (y por tanto, el hecho de utilizar una VPN) son difíciles de detectar. Pero esto generalmente viene con el precio de tener una velocidad reducida. Este no es nuestro caso, gracias a varias soluciones.

- Utilizamos el protocolo de transporte **HTTP/2**, lo que hace prácticamente imposible detectar el protocolo de AdGuard VPN mientras se mantiene la alta velocidad.
- A diferencia de otros, el protocolo de AdGuard VPN *opera con datos y no con paquetes*. Esto significa que AdGuard VPN establece un "túnel" separado para cada conexión, y cada flujo HTTP/2 corresponde a una conexión. AdGuard VPN transfiere los datos a través de este túnel. Esto nos permite acelerar la operación, ahorrando en paquetes de confirmación, ya que podemos almacenar los datos de varios paquetes en uno solo antes de enviarlo al servidor VPN (o del servidor al cliente). Y cuantos menos paquetes, menos confirmaciones se necesitan.
