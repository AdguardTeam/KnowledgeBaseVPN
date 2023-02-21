---
title: Resumen de características
sidebar_position: 1
---

## Qué es AdGuard VPN para Windows?

A VPN, acronym for "Virtual Private Network", is a service that makes your Internet connection safe and helps you stay anonymous online. ¿Cómo funciona? Cada vez que visita un sitio web sin usar una VPN, su ISP lo ve. Sabe quién eres y qué buscas, y puede recopilar y vender estos datos. A su vez, el sitio web al que has llegado también puede hacer un seguimiento de tu actividad. Cuando activas una aplicación VPN, ésta redirige tu tráfico a través de un túnel encriptado a un servidor VPN remoto, lo que garantiza tu privacidad: el ISP no sabe a dónde has enviado una solicitud, y el sitio no sabe de dónde vienes.

**Qué hace AdGuard VPN para Windows**

* Protege de la interceptación del tráfico de red (spoofing). AdGuard VPN crea un túnel cifrado entre su dispositivo y un servidor remoto. Todo el tráfico de Internet pasa por este túnel, por lo que tus datos están protegidos en todo momento. Y gracias al protocolo único de [AdGuard](/general/adguard-vpn-protocol.mdx), se garantiza una conexión rápida y segura.

* Enmascara su dirección IP. Su verdadera dirección IP es la clave de sus datos personales para los ciberdelincuentes. Su nombre, dirección de correo electrónico, número de teléfono, información de tarjeta de crédito pueden caer en manos de estafadores si no oculta su IP. Con AdGuard VPN, como hemos dicho antes, todo su tráfico pasa por un túnel cifrado y llega al servidor VPN. Por lo tanto, desde el exterior parece que su dispositivo tiene la dirección IP de dicho servidor VPN.

* Oculta su ubicación real. Al seleccionar cualquiera de los servidores VPN de AdGuard, se le "teletransporta" instantáneamente a su ubicación. ¿Qué le da esto? Por ejemplo, la capacidad de reservar un hotel a las tarifas de los lugareños u ocultarse de la publicidad geodirigida.

AdGuard VPN para Windows tiene muchas ventajas, por lo que hemos dedicado [un artículo separado](/general/why-adguard-vpn.md) a ellas. Aquí, sin embargo, queremos centrarnos más en la aplicación en sí y en cómo funciona.

## Cómo empezar a usar AdGuard VPN para Windows

Para comenzar a usar AdGuard VPN para Windows, descarga la aplicación desde [nuestro sitio web](https://adguard-vpn.com/welcome.html). The installation takes no more than a minute — and you'll see a dialog window where you'll need to check at least one box applying the terms of the User Agreement and the Privacy policy. Y depende de usted decidir si desea que AdGuard recopile datos anónimos sobre el uso de su aplicación. Por último, el programa le pedirá que inicie sesión, ya sea a través de [cuenta de AdGuard](https://auth.adguard.com/login.html) o a través de las redes sociales (Apple, Google, Facebook). Eso es todo, ahora puede usar AdGuard VPN para Windows.

## Pantalla de inicio

![Página de inicio de AdGuard VPN para Windows](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

El elemento más notable en la pantalla de inicio de **** es el botón de conexión/desconexión de AdGuard VPN. Encima del botón puedes ver el [modo](#exclusions) en el que se ejecuta la aplicación, y debajo puedes ver el servidor seleccionado. En el lado derecho de la pantalla, encontrará todas las ubicaciones disponibles. The fastest location, i.e. the one with the lowest ping, is shown at the top of the list.

En la parte superior de la pantalla hay un panel de navegación con cuatro pestañas: **inicio**, **Exclusiones**, **Asistencia Técnica**, **Configuración**.

## Exclusiones

AdGuard VPN para Windows puede funcionar en dos modos: **General** o **Selectivo**. ¿Qué significa esto? Si deseas que la aplicación funcione en todas partes excepto en algunos sitios web, activa el **Modo general** y enumere los sitios web que deseas excluir del túnel. El **Modo selectivo** tiene el efecto contrario: activa AdGuard VPN sólo en los sitios web especificados en la lista de exclusión. Tenga en cuenta que las listas de exclusión de estos dos modos son independientes entre sí.

![Exclusiones](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Puedes agregar sitios web a exclusiones **manualmente** ingresando tus nombres de dominio. La aplicación también te ofrece la opción de elegir sitios web populares **de la lista**.

![Añadir exclusiones](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Añadir exclusiones desde la lista](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Al añadir dominios manualmente, debe tener en cuenta algunos matices. Por ejemplo, si excluye manualmente el dominio `google.com`, todos los subdominios `*.google.com` también se añadirán a la lista de exclusiones. Sin embargo, los nombres de dominio con otros dominios de nivel superior como `google.es` o `google.it` no serán excluidos. O puede añadir `youtube.com` a las exclusiones, pero el dominio del mismo servicio `youtu.be` no se incluirá en la lista.

Recomendamos utilizar la opción **De la lista**. Los sitios web se agrupan en ocho categorías: Redes sociales, Mensajeros, Servicios de transmisión de video y música, Juegos, Compras, Motores de búsqueda y Herramientas de comunicación laboral. Hemos colocado allí los servicios más populares, incluyendo todos los nombres de dominio y subdominios relacionados con cada plataforma.

### Importar/exportar listas de exclusión

Para exportar la lista de exclusiones de AdGuard VPN para Windows a su ordenador, haga clic en **Exportar exclusiones**, seleccione la carpeta donde se almacenará la lista y haga clic en **Guardar**. Se descargará un archivo `exclusions.zip` con dos archivos `.txt`, uno para cada una de las listas - **General** y **Selectivo**. Puedes editarlas añadiendo nuevas exclusiones o eliminando las antiguas.

Para transferir las listas de exclusión a otro dispositivo, envíe el archivo `.zip` a su destino. Abra AdGuard VPN en el dispositivo donde deseas importar el archivo con las listas de exclusión, haz clic en *Exclusiones*, luego en *Importar exclusiones*y selecciona el archivo enviado anteriormente.

## Configuración

![Configuración](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

La cuarta pestaña de la barra de pestañas de la aplicación contiene secciones que te ayudarán a personalizar la aplicación. Veamos más de cerca dos de ellos: **Configuración de aplicaciones** y **Exclusiones de aplicaciones**.

### Configuración de la app

![Configuración de la app](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

En la sección **Configuración de la aplicación** , puedes configurar el idioma de la aplicación y también habilitar **Kill Switch**, que bloqueará el acceso a Internet si se cae tu conexión VPN. Esto es necesario para evitar que los intrusos lleguen a tus datos si te encuentras sin protección VPN mientras estés conectado a una red Wi-Fi o móvil pública.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Aquí también puedes cambiar el tema a **Claro**, **Sistema**o **Oscuro**.

En la parte inferior de la página hay dos secciones: **Servidores DNS** y **Configuración avanzada**.

#### Servidores DNS

La pestaña **DNS servers** te permite añadir tu propio servidor DNS. Puedes configurar un servidor DNS de cualquier proveedor. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Configuración avanzada

Es totalmente posible utilizar AdGuard VPN para Windows sin tocar nunca los ajustes avanzados, pero pueden ser útiles si estás dispuesto a dedicar tiempo a aprender lo que pueden hacer.

**Modo de funcionamiento**

A pesar de que hay dos modos de funcionamiento - VPN y SOCKS5 - te aconsejamos que utilices sólo el elegido por defecto (VPN). Cuando el modo **VPN** está activado, todo el tráfico de tu dispositivo será dirigido a través de AdGuard VPN, mientras que en el modo **SOCKS5** AdGuard VPN utiliza un servidor proxy local que puede ser utilizado por otras aplicaciones para redirigir tu tráfico.

**Nivel de registro**

Se puede elegir entre dos niveles de registro: **Registro por defecto** y **Registro de todo**. La primera opción está habilitada por defecto. La opción **Registrar todo** solo debe ser activada si nuestro equipo de soporte se te ha pedido. El uso de la aplicación en este modo durante un periodo de tiempo prolongado provoca un mayor consumo de batería.

Todos los registros se almacenan localmente en tu dispositivo y puedes enviarlos al equipo de soporte si es necesario.

**Usar QUIC**

Se trata de una función experimental que permite a AdGuard utilizar el avanzado protocolo de cifrado QUIC. Tiene muchas ventajas, pero la más notable es que puede mejorar la calidad de la conexión en condiciones no ideales, por ejemplo, cuando utilizas Internet móvil o cuando te conectas a redes Wi-Fi públicas.

### Exclusiones de aplicaciones

![Agregar una aplicación a las exclusiones](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

AdGuard VPN no solo encripta el tráfico de tus navegadores, sino también de otras aplicaciones instaladas en tu dispositivo. Si deseas excluir ciertas aplicaciones del túnel, ponlas en la lista **Exclusiones de la App**.

## Otras pestañas

### Acerca de

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy policy.

### Cuenta

Aquí puedes encontrar información sobre el estado de su licencia, así como un enlace a su cuenta personal de AdGuard, donde puede gestionar sus suscripciones actuales y adquirir otras nuevas.

## Asistencia técnica

Esta pestaña tiene como objetivo responder a las preguntas de los usuarios: allí puedes encontrar un enlace a la página de preguntas frecuentes, informar un error o dejar comentarios, y exportar registros si el equipo de soporte te lo solicita.
