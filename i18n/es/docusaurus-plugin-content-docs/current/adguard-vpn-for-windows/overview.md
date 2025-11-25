---
title: Resumen de características
sidebar_position: 1
---

## Qué hace AdGuard VPN para Windows

- Protege de la interceptación del tráfico de red (spoofing). AdGuard VPN crea un túnel cifrado entre su dispositivo y un servidor remoto. Todo el tráfico de Internet pasa por este túnel, por lo que tus datos están protegidos en todo momento. Y gracias al [protocolo exclusivo de AdGuard](/general/adguard-vpn-protocol), tienes garantizada una conexión rápida y segura.

- Enmascara su dirección IP. Su verdadera dirección IP es la clave de sus datos personales para los ciberdelincuentes. Tu nombre, dirección de correo electrónico, número de teléfono, información de tarjeta de crédito pueden caer en manos de estafadores si no oculta su IP. Con AdGuard VPN todo tu tráfico pasa por un túnel cifrado y llega al servidor VPN. El servidor web registra la dirección IP del punto final del túnel, es decir, el servidor VPN, y no la dirección IP real del dispositivo.

- Oculta su ubicación real. ¿Qué le da esto? Por ejemplo, la capacidad de reservar un hotel a las tarifas de los lugareños u ocultarse de la publicidad geodirigida.

AdGuard VPN para Windows tiene muchas ventajas, por lo que les hemos dedicado [un artículo aparte](/general/why-adguard-vpn). Aquí, sin embargo, queremos centrarnos más en la aplicación en sí y en cómo funciona.

## Cómo empezar a usar AdGuard VPN para Windows

Para comenzar a usar AdGuard VPN para Windows, descarga la aplicación desde [nuestro sitio web](https://adguard-vpn.com/welcome.html). La instalación no lleva más de un minuto, y verás una ventana de diálogo en la que tendrás que marcar al menos una casilla para aplicar los términos del Acuerdo de Usuario y la Política de Privacidad. Y depende de ti decidir si deseas que AdGuard recopile datos anónimos sobre el uso de tu aplicación. Por último, el programa le pedirá que inicie sesión, ya sea a través de la [Cuenta de AdGuard](https://auth.adguard.com/login.html) o a través de las redes sociales (Apple, Google, Facebook). Eso es todo, ahora puede usar AdGuard VPN para Windows.

## Pantalla de inicio

![Pantalla de inicio](https://cdn.adguardvpn.com/content/kb/vpn/windows/saved_locations.png)

El elemento más notable de la **pantalla de inicio** es el botón AdGuard VPN *Conectar/Desconectar*, debajo del cual puede ver el servidor seleccionado. En el lado derecho de la pantalla, encontrará todas las ubicaciones disponibles. La ubicación más rápida, es decir, la que tiene el ping más bajo, se muestra en la parte superior de la lista. También hay un botón de actualización en el que puedes hacer clic si alguna ubicación está fuera de línea.

También puedes guardar tus ubicaciones favoritas para acceder a ellas rápidamente. Sólo tienes que pasar el ratón por encima de una ubicación, hacer clic en el icono de marcador que aparece y se guardará. Las ubicaciones marcadas aparecerán en la pestaña *Guardado*.

En la parte superior de la pantalla hay un panel de navegación con cinco pestañas: **Inicio**, **Exclusiones**, **Estadísticas**, **Soporte** y **Configuración**.

## Exclusiones

De forma predeterminada, AdGuard VPN para Windows funciona en todas partes. Puedes añadir a la lista de exclusiones los sitios web y las aplicaciones que desees excluir del túnel VPN. También puedes hacer que AdGuard VPN funcione sólo en los sitios web y aplicaciones especificados en la lista de exclusiones. Ten en cuenta que estas dos listas son independientes entre sí.

![Exclusiones *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_screen.png)

Puedes agregar sitios web a exclusiones **manualmente** ingresando sus nombres de dominio. La aplicación también te ofrece la opción de elegir sitios web populares **de la lista**.

![Agregar exclusiones de la lista *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

Al agregar dominios manualmente, debes tener en cuenta ciertos detalles. Por ejemplo, si excluye manualmente el dominio `google.com`, todos los subdominios `*.google.com` también se añadirán a la lista de exclusiones. Sin embargo, los nombres de dominio con otros dominios de nivel superior como `google.es` o `google.it` no serán excluidos. O puede añadir `youtube.com` a las exclusiones, pero el dominio del mismo servicio `youtu.be` no se incluirá en la lista.

:::

Recomendamos utilizar la opción **De la lista**. Los sitios web se agrupan en ocho categorías: Redes sociales, Mensajeros, Servicios de transmisión de video y música, Juegos, Compras, Motores de búsqueda y Herramientas de comunicación laboral. Hemos colocado allí los servicios más populares, incluyendo todos los nombres de dominio y subdominios relacionados con cada plataforma.

:::info Navegadores añadidos a Exclusiones

A partir de la versión 2.4, todos los navegadores se agregan automáticamente a la lista de exclusiones cuando la VPN está activa solo para aplicaciones y sitios web seleccionados. Este cambio brinda mayor comodidad a los usuarios que a menudo estaban confundidos y no sabían si considerar sus navegadores como aplicaciones o no. Se aplica en las siguientes condiciones:

- El usuario ha instalado AdGuard VPN por primera vez
- El usuario no modificó la configuración de Exclusiones antes de la versión v2.4

:::

### Importar/exportar listas de exclusión

Para exportar la lista de exclusiones de AdGuard VPN para Windows a su ordenador, haga clic en **Exportar exclusiones**, seleccione la carpeta donde se almacenará la lista y haga clic en **Guardar**. Se descargará el archivo `exclusions.zip` con dos archivos `.txt`, uno para cada una de las listas. Puedes editarlas añadiendo nuevas exclusiones o eliminando las antiguas.

En el dispositivo de destino, abre AdGuard VPN, haz clic en *Exclusiones*y selecciona *Sitios web* o *Aplicaciones*. Haz clic en *Importar exclusiones* y selecciona el archivo recibido.

## Estadísticas

![Pantalla de estadísticas *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

La pantalla Estadísticas muestra información detallada sobre tu uso de datos, categorizada tanto por ubicación como por aplicación. Destaca las ubicaciones y aplicaciones que utilizas con más frecuencia. Puede acceder a las estadísticas para diferentes periodos de tiempo: diario, mensual o para todo el tiempo que ha estado utilizando AdGuard VPN para Windows.

Y lo que es más importante, toda esta información se almacena exclusivamente en tu dispositivo, lo que garantiza que sólo tú puedas verla. El acceso a la función de estadísticas sólo está disponible para los suscriptores de AdGuard VPN.

## Configuración

![Configuración *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

La quinta pestaña contiene secciones que te ayudarán a personalizar la aplicación.

### Configuración de la app

![Configuración de la aplicación *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

En la sección **Configuración de la aplicación**, puedes configurar el idioma de la aplicación y también habilitar **Kill Switch**, que bloqueará el acceso a Internet si se cae tu conexión VPN. Esto es necesario para evitar que los intrusos lleguen a tus datos si te encuentras sin protección VPN mientras estés conectado a una red Wi-Fi o móvil pública.

También puedes activar las siguientes funciones con un solo clic: **Actualización automática**, **Iniciar AdGuard VPN al iniciar Windows**, **Conexión automática al iniciar la aplicación** y permite que AdGuard recopile datos anónimos de uso de la aplicación para que el equipo de AdGuard obtenga más información sobre posibles problemas de usabilidad. Aquí también puedes cambiar el tema a **Claro**, **Sistema** o **Oscuro**.

En la parte inferior de la página hay dos secciones: **Servidores DNS** y **Configuración avanzada**.

#### Servidores DNS

La pestaña **Servidores DNS** te permite añadir tu propio servidor DNS, manualmente o desde la lista. Puedes configurar un servidor DNS de cualquier proveedor. Recomendamos añadir [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), un servidor que puede proteger contra la publicidad, el rastreo y el phishing, además de las funciones estándar.

#### Configuración avanzada

Es totalmente posible utilizar AdGuard VPN para Windows sin tocar nunca los ajustes avanzados, pero pueden ser útiles si estás dispuesto a dedicar tiempo a aprender lo que pueden hacer.

##### Modo de funcionamiento

A pesar de que hay dos modos de funcionamiento - VPN y SOCKS5 - te aconsejamos que utilices solo el elegido por defecto (VPN). Cuando el **Modo VPN** está activado, todo el tráfico de tu dispositivo será dirigido a través de AdGuard VPN, mientras que en el modo **SOCKS5** AdGuard VPN utiliza un servidor proxy local que puede ser utilizado por otras aplicaciones para redirigir tu tráfico.

##### Nivel de registro

Se puede elegir entre dos niveles de registro: **Registro por defecto** y **Registrar todo**. La primera opción está habilitada por defecto. La opción **Registrar todo** solo debe ser activada si nuestro equipo de soporte te lo ha pedido. El uso de la aplicación en este modo durante un periodo de tiempo prolongado provoca un mayor consumo de batería.

Todos los registros se almacenan localmente en tu dispositivo y puedes enviarlos al equipo de soporte si es necesario.

##### Criptografía postcuántica

![Criptografía post-quantum *border](https://cdn.adtidy.org/blog/new/qe7fgimage_3.png)

Esta función cifra tu tráfico de una manera que ni siquiera las computadoras cuánticas pueden interceptarlo.

##### Usar QUIC

![Seleccionar protocolo VPN *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.7/auto_en.png)

De forma predeterminada, el Protocolo AdGuard VPN utiliza la selección dinámica de protocolo VPN (opción *Selección automática*). Eso significa que AdGuard VPN determina automáticamente qué protocolo — HTTP2/TLS o HTTP3/QUIC — te ofrecerá el mejor rendimiento y cambia a él al instante. Esto mejora la velocidad y estabilidad del VPN, lo cual es especialmente útil en regiones donde el uso del VPN está restringido o es inestable.

Si lo deseas, puedes cambiar AdGuard VPN para que use solo el protocolo HTTP2/TLS o HTTP3/QUIC en lugar de la *Selección automática*. Cada protocolo tiene sus puntos fuertes, pero la mejor opción puede variar según tu ubicación, las condiciones de la red e incluso el servidor al que te conectes.

##### Utilizar WinTun

WinTun es un controlador de enrutamiento de tráfico comúnmente utilizado para implementaciones VPN en Windows que mejora la calidad de las conexiones VPN mediante la creación de un adaptador de red virtual. Por defecto, AdGuard VPN utiliza el controlador PMA normal (y el controlador TDI para Windows 7).

#### Exclusiones de subred

Esta función te permite añadir subredes para excluir el tráfico de dispositivos específicos conectados a tu red. Por ejemplo, tu robot aspirador.

## Otras pestañas

### Acerca de

La pestaña **Acerca de** proporciona información sobre la versión actual de AdGuard VPN para Windows, un botón de actualización y enlaces al sitio web de AdGuard VPN, al CLUF y a la Política de privacidad.

### Cuenta

Aquí puedes encontrar información sobre el estado de tu licencia, así como un enlace a su cuenta personal de AdGuard, donde puede gestionar sus suscripciones actuales y adquirir otras nuevas.

## Asistencia técnica

Esta pestaña tiene como objetivo responder a las preguntas de los usuarios: allí puedes encontrar un enlace a la página de preguntas frecuentes, informar un error o dejar comentarios, y exportar registros si el equipo de soporte te lo solicita.
