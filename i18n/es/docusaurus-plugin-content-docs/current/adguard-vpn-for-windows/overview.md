---
title: Resumen de características
sidebar position: 1
---

## Qué es AdGuard VPN para Windows

Una VPN, acrónimo de "red privada virtual", es un servicio que hace que su conexión a Internet sea segura y le ayuda a permanecer en el anonimato en línea. ¿Cómo funciona? Cada vez que visita un sitio web sin usar una VPN, su ISP lo ve. Sabe quién eres y qué buscas, y puede recopilar y vender estos datos. A su vez, el sitio web al que has llegado también puede hacer un seguimiento de tu actividad. Cuando activas una aplicación VPN, ésta redirige tu tráfico a través de un túnel encriptado a un servidor VPN remoto, lo que garantiza tu privacidad: el ISP no sabe a dónde has enviado una solicitud, y el sitio no sabe de dónde vienes.

**Qué hace AdGuard VPN para Windows**

* Protege de la interceptación del tráfico de red (spoofing). AdGuard VPN crea un túnel cifrado entre su dispositivo y un servidor remoto. Todo el tráfico de Internet pasa por este túnel, por lo que tus datos están protegidos en todo momento. Y gracias a [protocolo único de AdGuard](/general/adguard-vpn-protocol.mdx), se le garantiza una conexión rápida y segura.

* Enmascara su dirección IP. Su verdadera dirección IP es la clave de sus datos personales para los ciberdelincuentes. Su nombre, dirección de correo electrónico, número de teléfono, información de tarjeta de crédito pueden caer en manos de estafadores si no oculta su IP. Con AdGuard VPN, como hemos dicho antes, todo su tráfico pasa por un túnel cifrado y llega al servidor VPN. Por lo tanto, desde el exterior parece que su dispositivo tiene la dirección IP de dicho servidor VPN.

* Oculta su ubicación real. Al seleccionar cualquiera de los servidores VPN de AdGuard, se le "teletransporta" instantáneamente a su ubicación. ¿Qué le da esto? Por ejemplo, la capacidad de reservar un hotel a las tarifas de los lugareños u ocultarse de la publicidad geodirigida.

AdGuard VPN para Windows tiene muchas ventajas, por lo que hemos dedicado [un artículo separado](/general/why-adguard-vpn.md) a ellas. Aquí, sin embargo, queremos centrarnos más en la aplicación en sí y en cómo funciona.

## Cómo empezar a usar AdGuard VPN para Windows

Para comenzar a usar AdGuard VPN para Windows, descargue la aplicación desde [nuestro sitio web](https://adguard-vpn.com/en/welcome.html). La instalación no lleva más de un minuto, y verás una ventana de diálogo en la que tendrás que marcar al menos una casilla para aplicar los términos del Acuerdo de Usuario y la Política de Privacidad. Y depende de usted decidir si desea que AdGuard recopile datos anónimos sobre el uso de su aplicación. Por último, el programa le pedirá que inicie sesión, ya sea a través de [cuenta de AdGuard](https://auth.adguard.com/login.html) o a través de las redes sociales (Apple, Google, Facebook). Eso es todo, ahora puede usar AdGuard VPN para Windows.


## Pantalla de inicio

![Página de inicio de AdGuard VPN para Windows](https://cdn.adguard.com/content/kb/VPN/windows/main_en.png)

El elemento más notable en la pantalla de inicio de **** es el botón de conexión/desconexión de AdGuard VPN. Debajo, puede ver el modo [](#exclusions) en el que se está ejecutando la aplicación, y debajo - el servidor seleccionado. En la parte derecha de la pantalla encontrará todas las ubicaciones disponibles, y la más rápida, es decir, con el ping más corto, aparecerá en la parte superior de la lista.

En la parte superior de la pantalla hay un panel de navegación con cuatro pestañas: **inicio**, **Exclusiones**, **Asistencia Técnica**, **Configuración**. Con la primera pestaña hecha, sigamos adelante.


## Exclusiones

AdGuard VPN para Windows puede funcionar en dos modos: **General** o **Selectivo**. ¿Qué significa esto? Si desea que la aplicación funcione en todos los sitios excepto en unos pocos, active el **Modo general** y enumere los recursos que desea excluir del túnel. El **Modo selectivo** tiene el efecto contrario: activa AdGuard VPN sólo en los sitios web especificados en la lista de exclusión. Tenga en cuenta que las listas de exclusión de estos dos modos son independientes entre sí.

![Exclusiones](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

Hay dos opciones para crear listas de exclusiones: **Manualmente** y **Desde la lista**. Haga clic en la línea **Añadir un sitio web** y elija el formato que prefiera para añadir sitios a las exclusiones.

![Añadir exclusiones](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Añadir exclusiones desde la lista](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Al añadir dominios manualmente, debe tener en cuenta algunos matices. Por ejemplo, si excluye manualmente el dominio `google.com`, todos los subdominios `*.google.com` también se añadirán a la lista de exclusiones. Sin embargo, los nombres de dominio con otros dominios de nivel superior como `google.es` o `google.it` no serán excluidos. O puede añadir `youtube.com` a las exclusiones, pero el dominio del mismo servicio `youtu.be` no se incluirá en la lista.

Recomendamos utilizar la opción **Desde la lista** para evitar molestias innecesarias. Ya hemos agrupado ocho categorías diferentes de servicios populares para usted: Redes sociales, Aplicaciones de Mensajería, Servicios de streaming de Vídeo y Música, Juegos, Compras, Motores de búsqueda y Herramientas de comunicación laboral. Hemos colocado allí los servicios más populares, incluyendo todos los nombres de dominio y subdominios relacionados con cada plataforma. De este modo, estarás seguro de que no has olvidado ningún servicio o dominio que te gustaría mantener en funcionamiento mientras la VPN está activada, o viceversa.

### Listas de exclusiones de importación/exportación

En la pestaña **Exclusiones** en la parte derecha de la pantalla hay una sección **Acciones**. Puede ser útil si necesita exportar o importar listas de exclusiones ya hechas.

Para exportar la lista de exclusiones de AdGuard para Windows a su ordenador, haga clic en **Exportar exclusiones**, seleccione la carpeta donde se almacenará la lista y haga clic en **Guardar**. Se descargará un archivo `exclusions.zip` con dos archivos `.txt`, uno para cada una de las listas - **General** y **Selectivo**. Puede editarlas añadiendo nuevas exclusiones o eliminando las antiguas.

Para transferir las listas de exclusiones a otro dispositivo, envíe el archivo `.zip` a su destino. Abra AdGuard VPN en el dispositivo en el que desea importar el archivo con las listas de exclusiones ya preparadas, haga clic en *Exclusiones*, luego *Importar exclusiones* y seleccione el archivo previamente enviado.

## Configuración

![Configuración](https://cdn.adguard.com/content/kb/VPN/windows/settings_en.png)

La cuarta pestaña de la barra de pestañas de la aplicación contiene secciones que le ayudarán a personalizar la aplicación. Veamos más de cerca dos de ellos: **General** y **Tunelización dividida**.


### General

La sección **General** contiene muchas funciones útiles. Aquí puedes configurar el idioma de la aplicación y también activar **Kill Switch**, que bloqueará el acceso a Internet si tu conexión VPN falla. Esto es necesario para evitar que los intrusos lleguen a sus datos si se encuentra sin protección VPN mientras está conectado a una red Wi-Fi o móvil pública.

También puede activar las siguientes funciones con un solo clic: **Actualizar automáticamente**, **Lanzar AdGuard VPN al inicio de Windows**, **Conectar automáticamente al iniciar la aplicación**, y permitir que AdGuard recopile datos anónimos de uso de la aplicación para que podamos mejorarla. Aquí también puede cambiar el predeterminado **Tema Claro** a **Tema Oscuro**.

En la parte inferior de la página hay dos secciones: **Servidores DNS** y **Configuración avanzada**.

![Configuración de DNS y Configuración avanzada](https://cdn.adguard.com/content/kb/VPN/windows/settings_dns_and_advanced_en.png)

#### Servidores DNS

La pestaña **DNS servers** le permite añadir su propio servidor DNS personalizado. ¿Por qué debería hacerlo? Por ejemplo, no confiar en el servidor DNS por defecto, que a menudo está controlado por su ISP.

Puedes configurar un servidor DNS de cualquier proveedor. Recomendamos añadir [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), un servidor que puede proteger contra la publicidad, el rastreo y el phishing, además de las funciones estándar.

#### Configuración avanzada

Es totalmente posible utilizar AdGuard VPN para Windows sin tocar nunca los ajustes avanzados, pero pueden ser útiles si está dispuesto a dedicar tiempo a aprender lo que hacen.

**Modo de funcionamiento**

A pesar de que hay dos modos de funcionamiento - VPN y SOCKS5 - le aconsejamos que utilice sólo el elegido por defecto (VPN). Cuando el modo **VPN** está activado, todo el tráfico de su dispositivo será dirigido a través de AdGuard VPN, mientras que en el modo **SOCKS5** AdGuard VPN utiliza un servidor proxy local que puede ser utilizado por otras aplicaciones para redirigir su tráfico.

**Nivel de registro**

Hay disponibles dos niveles de registro para elegir: **Registro por defecto** y **Registro de todo**. La primera opción está habilitada por defecto. La opción **Registrar todo** solo debe ser activada si nuestro equipo de soporte le ha pedido que lo haga. El uso de la aplicación en este modo durante un periodo de tiempo prolongado provoca un mayor consumo de batería.

Todos los registros se almacenan localmente en su dispositivo y puede enviarlos al equipo de soporte si es necesario.

**Usar QUIC**

Se trata de una función experimental que permite a AdGuard utilizar el avanzado protocolo de cifrado QUIC. Tiene muchas ventajas, pero la más notable es que puede mejorar la calidad de la conexión en condiciones no ideales, por ejemplo, cuando se utiliza Internet móvil o cuando se conecta a redes Wi-Fi públicas.


### Tunelización dividida

![Tunelización dividida](https://cdn.adguard.com/content/kb/VPN/windows/split_tunneling_en.png)

AdGuard VPN encripta el tráfico no sólo de sus navegadores, sino también de otras aplicaciones instaladas en su ordenador. Si desea excluir ciertas aplicaciones del trabajo de AdGuard, colóquelas en la lista **Tunelización dividida**.

## Otras pestañas

### Acerca de

La pestaña **Acerca del programa** proporciona información sobre la versión actual de AdGuard VPN para Windows, un botón de actualización y algunos enlaces útiles: Sitio web de AdGuard, Foro, EULA y Política de Privacidad.

### Acerca de la licencia

Aquí encontrará información sobre el estado de su licencia, así como un enlace a su cuenta personal de AdGuard, donde puede gestionar sus suscripciones actuales y adquirir otras nuevas.

## Asistencia técnica

En esta pestaña, hemos recopilado una gran cantidad de enlaces útiles: página de preguntas frecuentes, formulario de comentarios sobre la aplicación, páginas de redes sociales y **Base de conocimientos**.