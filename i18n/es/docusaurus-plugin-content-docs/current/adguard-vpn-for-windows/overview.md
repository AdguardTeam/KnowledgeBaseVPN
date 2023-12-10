---
title: Resumen de características
sidebar_position: 1
---

## Qué hace AdGuard VPN para Windows

- Protege de la interceptación del tráfico de red (spoofing). AdGuard VPN crea un túnel cifrado entre su dispositivo y un servidor remoto. Todo el tráfico de Internet pasa por este túnel, por lo que tus datos están protegidos en todo momento. And thanks to [AdGuard's unique protocol](/general/adguard-vpn-protocol), you're guaranteed a fast and secure connection.

- Enmascara su dirección IP. Su verdadera dirección IP es la clave de sus datos personales para los ciberdelincuentes. Su nombre, dirección de correo electrónico, número de teléfono, información de tarjeta de crédito pueden caer en manos de estafadores si no oculta su IP. With AdGuard VPN, all your traffic goes through an encrypted tunnel and comes to the VPN server. The web server registers the IP address of the endpoint of the tunnel, i.e. the VPN server, and not the device's real IP address.

- Oculta su ubicación real. Al seleccionar cualquiera de los servidores VPN de AdGuard, se le "teletransporta" instantáneamente a su ubicación. ¿Qué le da esto? Por ejemplo, la capacidad de reservar un hotel a las tarifas de los lugareños u ocultarse de la publicidad geodirigida.

AdGuard VPN for Windows has many advantages, so we've dedicated [a separate article](/general/why-adguard-vpn) to them. Aquí, sin embargo, queremos centrarnos más en la aplicación en sí y en cómo funciona.

## Cómo empezar a usar AdGuard VPN para Windows

Para comenzar a usar AdGuard VPN para Windows, descarga la aplicación desde [nuestro sitio web](https://adguard-vpn.com/welcome.html). La instalación no lleva más de un minuto, y verás una ventana de diálogo en la que tendrás que marcar al menos una casilla para aplicar los términos del Acuerdo de Usuario y la Política de Privacidad. Y depende de usted decidir si desea que AdGuard recopile datos anónimos sobre el uso de su aplicación. Por último, el programa le pedirá que inicie sesión, ya sea a través de la [Cuenta de AdGuard](https://auth.adguard.com/login.html) o a través de las redes sociales (Apple, Google, Facebook). Eso es todo, ahora puede usar AdGuard VPN para Windows.

## Pantalla de inicio

![AdGuard VPN for Windows Home Page](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

El elemento más notable en la **Pantalla de inicio** es el botón de conexión/desconexión de AdGuard VPN. Encima del botón puedes ver el [modo](#exclusions) en el que se ejecuta la aplicación, y debajo puedes ver el servidor seleccionado. En el lado derecho de la pantalla, encontrará todas las ubicaciones disponibles. La ubicación más rápida, es decir, la que tiene el ping más bajo, se muestra en la parte superior de la lista.

En la parte superior de la pantalla hay un panel de navegación con cuatro pestañas: **inicio**, **Exclusiones**, **Asistencia Técnica**, **Configuración**.

## Exclusiones

AdGuard VPN for Windows can operate in two modes. By default, the application works everywhere, and you can list the websites and apps you want to exclude from the tunnel. But you can switch to the opposite mode: AdGuard VPN will only run on the websites and in the apps specified in the list of exclusions. Please note that these two lists are independent from one another.

![Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Puedes agregar sitios web a exclusiones **manualmente** ingresando sus nombres de dominio. La aplicación también te ofrece la opción de elegir sitios web populares **de la lista**.

![Add Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Add Exclusions from list](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

:::note When adding domains manually, you should take into account some nuances. Por ejemplo, si excluye manualmente el dominio `google.com`, todos los subdominios `*.google.com` también se añadirán a la lista de exclusiones. Sin embargo, los nombres de dominio con otros dominios de nivel superior como `google.es` o `google.it` no serán excluidos. O puede añadir `youtube.com` a las exclusiones, pero el dominio del mismo servicio `youtu.be` no se incluirá en la lista.

:::

Recomendamos utilizar la opción **De la lista**. Los sitios web se agrupan en ocho categorías: Redes sociales, Mensajeros, Servicios de transmisión de video y música, Juegos, Compras, Motores de búsqueda y Herramientas de comunicación laboral. Hemos colocado allí los servicios más populares, incluyendo todos los nombres de dominio y subdominios relacionados con cada plataforma.

### Importar/exportar listas de exclusión

Para exportar la lista de exclusiones de AdGuard VPN para Windows a su ordenador, haga clic en **Exportar exclusiones**, seleccione la carpeta donde se almacenará la lista y haga clic en **Guardar**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. Puedes editarlas añadiendo nuevas exclusiones o eliminando las antiguas.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Configuración

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab contains sections that will help you customize the application.

### Configuración de la app

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

En la sección **Configuración de la aplicación**, puedes configurar el idioma de la aplicación y también habilitar **Kill Switch**, que bloqueará el acceso a Internet si se cae tu conexión VPN. Esto es necesario para evitar que los intrusos lleguen a tus datos si te encuentras sin protección VPN mientras estés conectado a una red Wi-Fi o móvil pública.

También puedes activar las siguientes funciones con un solo clic: **Actualización automática**, **Iniciar AdGuard VPN al iniciar Windows**, **Conexión automática al iniciar la aplicación** y permite que AdGuard recopile datos anónimos de uso de la aplicación para que el equipo de AdGuard obtenga más información sobre posibles problemas de usabilidad. Aquí también puedes cambiar el tema a **Claro**, **Sistema** o **Oscuro**.

En la parte inferior de la página hay dos secciones: **Servidores DNS** y **Configuración avanzada**.

#### Servidores DNS

La pestaña **DNS servers** te permite añadir tu propio servidor DNS. Puedes configurar un servidor DNS de cualquier proveedor. Recomendamos añadir [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), un servidor que puede proteger contra la publicidad, el rastreo y el phishing, además de las funciones estándar.

#### Configuración avanzada

Es totalmente posible utilizar AdGuard VPN para Windows sin tocar nunca los ajustes avanzados, pero pueden ser útiles si estás dispuesto a dedicar tiempo a aprender lo que pueden hacer.

##### Modo de funcionamiento

A pesar de que hay dos modos de funcionamiento - VPN y SOCKS5 - te aconsejamos que utilices solo el elegido por defecto (VPN). Cuando el **Modo VPN** está activado, todo el tráfico de tu dispositivo será dirigido a través de AdGuard VPN, mientras que en el modo **SOCKS5** AdGuard VPN utiliza un servidor proxy local que puede ser utilizado por otras aplicaciones para redirigir tu tráfico.

##### Nivel de registro

Se puede elegir entre dos niveles de registro: **Registro por defecto** y **Registrar todo**. La primera opción está habilitada por defecto. La opción **Registrar todo** solo debe ser activada si nuestro equipo de soporte te lo ha pedido. El uso de la aplicación en este modo durante un periodo de tiempo prolongado provoca un mayor consumo de batería.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### Usar QUIC

Se trata de una función experimental que permite a AdGuard utilizar el avanzado protocolo de cifrado QUIC. Tiene muchas ventajas, pero la más notable es que puede mejorar la calidad de la conexión en condiciones no ideales, por ejemplo, cuando utilizas Internet móvil o cuando te conectas a redes Wi-Fi públicas.

### Exclusiones de aplicaciones

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of browsers, but also of other apps installed on your device. Si deseas excluir ciertas aplicaciones del túnel, ponlas en la lista **Aplicaciones excluidas**.

## Otras pestañas

### Acerca de

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### Cuenta

Aquí puedes encontrar información sobre el estado de tu licencia, así como un enlace a su cuenta personal de AdGuard, donde puede gestionar sus suscripciones actuales y adquirir otras nuevas.

## Asistencia técnica

Esta pestaña tiene como objetivo responder a las preguntas de los usuarios: allí puedes encontrar un enlace a la página de preguntas frecuentes, informar un error o dejar comentarios, y exportar registros si el equipo de soporte te lo solicita.
