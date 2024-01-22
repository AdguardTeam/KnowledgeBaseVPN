---
title: Resumen de características
sidebar_position: 1
---

## Que es AdGuard VPN para Andriod?

Un VPN es una herramienta ideal que brinda seguridad y anonimato cada vez que navegas por Internet. [¿Cómo funciona?](/general/how-vpn-works) Sin entrar en detalles técnicos, podemos decir que la VPN crea una conexión cifrada segura (llamada túnel) entre el dispositivo de un usuario y un servidor VPN remoto. De esta manera, se preserva la confidencialidad de los datos, así como el anonimato del usuario, porque un observador de un tercer partido ve la dirección IP del servidor VPN y no la dirrecion IP verdadero del usuario.

**Una VPN se usa comúnmente para:**

- Mantener la seguridad de los datos personales incluso al usar Wi-Fi público
- Evitar el seguimiento de la actividad en línea al enmascarar la dirección IP
- Ocultar la geolocalización real para permanecer anónimo

AdGuard VPN para Android puede hacerlo todo por usted, e incluso ofrecer algo único. Para saber por qué AdGuard VPN es la mejor opción - lea [este artículo](/general/why-adguard-vpn).

## Cómo empezar usar AdGuard VPN para Android

Primeramente, descargue AdGuard VPN desde [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) e inicie sesión en su cuenta de AdGuard. En caso de que no lo tenga, debe [crearlo](https://auth.adguard.com/login.html). Puede iniciar sesión directamente con las credenciales de su cuenta de AdGuard. O hágalo a través de Google o Facebook, si su cuenta de AdGuard se registró utilizando la misma dirección de correo electrónico.

## Pantalla principal

La pantalla principal refleja el estado de la VPN (Conectado/Desconectado). También está el botón *Conectar/Desconectar* y una lista de servidores disponibles.

Cada servidor tiene su ubicación y su velocidad de ping, que describe el tiempo de respuesta del servidor. Cuanto menor sea esta velocidad de ping, más rápida será la conexión. Los servidores más rápidos siempre aparecen en la parte superior de la lista, la cual cuenta con más de 50 ubicaciones en decenas de países. Puede conectarse al servidor más rápido tocando el botón *Conectar* o eligiendo una ubicación.

## Exclusiones

Hemos hecho todo lo posible para facilitarte la administración de las listas de exclusión de sitios y aplicaciones. AdGuard VPN solo funcionará donde usted elija.

### Listas de exclusiones

Las listas de exclusión le permiten administrar la conexión VPN para sitios web y aplicaciones específicas. Para acceder a *Exclusiones*, toque el segundo ícono de la izquierda en la parte inferior de la pantalla. Para llegar a la sección *Exclusiones*, toque el segundo icono de la izquierda en la parte inferior de la pantalla.

De forma predeterminada, AdGuard VPN funciona para todos los sitios web y aplicaciones, excepto aquellos agregados a exclusiones, pero puedes cambiar fácilmente al otro modo.

#### Para sitios web

Puedes agregar dominios (p. ej., `google.com`) o subdominios (p. ej., `*.google.com`) de sitios web a las *Exclusiones* de tres maneras: ingrésalos manualmente en la aplicación o directamente desde el navegador haciendo clic en el *Comparta el botón* y selecciona AdGuard VPN en la lista abierta a continuación, o en las listas integradas de servicios divididas por categorías.

![Exclusiones](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::nota

Hay algunos detalles para la adición manual de dominios. Por ejemplo, si excluyes manualmente el dominio `yahoo.com`, todos los subdominios `*.yahoo.com` también se añadirán a la lista de exclusiones. Sin embargo, no se excluirán los nombres de dominio con otros dominios de nivel superior, como `yahoo.jp` o `yahoo.fr`. O puedes añadir `youtube.com` a las exclusiones, pero el dominio del mismo servicio `youtu.be` no se incluirá en la lista. En este caso, es más seguro usar listas de servicios integradas, porque ponemos todos los subdominios relacionados con cada plataforma.

:::

Ya que puedes habilitar subdominios en las listas de servicios, agregamos cuadros que reflejan el estado de cada servicio; puede verlos en la pantalla principal de *Exclusiones* a la izquierda de cada nombre de servicio:

- **Totalmente habilitado** se indica con una marca de verificación blanca sobre un fondo verde
- **Parcialmente habilitado** (subdominios habilitados sin el dominio principal) está marcado con un cuadrado verde sobre fondo blanco
- **Totalmente deshabilitado** está marcado con una casilla de verificación en blanco

 Buenas noticias: siempre puedes volver a la vista predeterminada de las listas de servicios en caso de que hayas eliminado o deshabilitado algún dominio desde allí.

![Exclusiones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Otra función útil es *Exclusiones de importación/exportación*. Sólo son necesarios cuatro pasos para hacerlo:

1. Abre AdGuard VPN en el dispositivo/navegador desde donde deseas exportar tus listas de exclusiones. Busca la sección adecuada y haz clic en el botón *Exportar*. Se descargará el archivo `adguard_vpn_exclusions.zip`.
2. Hay dos archivos `.txt` dentro del fichero, uno para cada una de las listas. Agrega más exclusiones a ellos, elimina las existentes, cambia el nombre de los archivos (más sobre esto adelante), o simplemente deja el fichero con los archivos como está.
3. Al transferir entre diferentes dispositivos, no olvides enviar el fichero `.zip` al dispositivo para importarlo. Por ejemplo, si importas listas de exclusión desde tu dispositivo Windows a tu Android, asegúrate de enviar el fichero `.zip` a tu Android de antemano.
4. Abre AdGuard VPN en el dispositivo donde deseas importar el fichero con las listas listas de exclusiones. Busca la sección adecuada, haz clic en el botón *Importar* y selecciona el archivo.

![Importar/Exportar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### Para aplicaciones

Como mencionamos anteriormente, no solo los sitios web se pueden agregar fácilmente a las exclusiones. Elija para qué aplicaciones necesitas AdGuard VPN y para cuáles no.

En *Modo integrado*, solo puedes administrar aplicaciones a través de AdGuard Ad Blocker.

![Exclusiones de aplicaciones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Configuración

Puedess acceder a *Configuración* presionando el ícono de ajustes en la parte inferior derecha de la pantalla. La primera sección es *Configuración de la aplicación*: configura AdGuard VPN para Android según tus necesidades seleccionando diferentes opciones.

![Configuración de aplicación *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Inicio automático de AdGuard VPN

El control deslizante cambiado a la derecha habilita un inicio automático de AdGuard VPN después del inicio del dispositivo.

### Servidores DNS

Los servidores DNS traducen los nombres de los sitios web a algo que los navegadores puedan entender, es decir, direcciones IP. AdGuard VPN para Android ofrece una amplia selección de servidores DNS, cada uno con cualidades especiales. Por ejemplo, [AdGuard DNS](https://adguard-dns.io/kb/) elimina anuncios y protege su dispositivo contra el seguimiento, mientras que AdGuard DNS Family Protection combina las funciones de AdGuard DNS con búsqueda segura y bloqueo de contenido para adultos. También hay una opción para agregar un servidor DNS personalizado.

### Protección automática

Esta función habilita AdGuard VPN automáticamente cuando tu dispositivo se conecta a una red celular o Wi-Fi.

### Kill Switch

Puedes configurar la función Kill Switch en tu dispositivo Android siguiendo sencillas instrucciones en la pantalla. ¿Por qué deberías hacerlo? Si por algún motivo tu conexión VPN se interrumpe repentinamente mientras estás utilizando una red móvil o Wi-Fi público, Kill Switch terminará automáticamente la conexión a Internet, evitando que hacker se apoderen de tu información.

Tenga en cuenta que si Kill Switch está activado, *Configuración de la app* y *Exclusiones* no funcionarán.

### Tema

You can choose the system default, system dynamic, dark or light theme of the app.

![System dynamic theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![Light theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![Dark theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### Configuración avanzada

En *Configuración avanzada*, puedes encontrar cuatro secciones.

*El modo de funcionamiento* le permite especificar cómo se enruta su tráfico. Hay tres modos: VPN, SOCKS5 y modo integrado. En el modo *VPN*, todo el tráfico se enruta a través de AdGuard VPN. En el modo *SOCKS5*, AdGuard VPN ejecuta un servidor proxy local que otras aplicaciones pueden utilizar para enrutar el tráfico. *El modo integrado* permite que AdGuard VPN y AdGuard Ad Blocker funcionen juntos.

:::nota

Algunas funciones de AdGuard VPN están deshabilitadas en *Modo integrado*: servidores DNS, Kill Switch, protección automática y exclusiones de aplicaciones. Puede administrar la protección DNS y enrutar aplicaciones a través de su proxy VPN AdGuard en la aplicación AdGuard Ad Blocker.

:::

Las dos secciones siguientes son *Nivel de registro* y *Información de diagnóstico*. En cuanto a la primera opción, no se recomienda activar el nivel de registro Ampliado o Extremo a menos que lo solicite nuestro equipo de soporte. Se nos puede enviar información de diagnóstico y información técnica almacenada localmente sobre el dispositivo y las conexiones (dirección IP, ID, ping, etc.), en caso de cualquier problema técnico.

La última sección de *Configuración avanzada* es *Configuración de bajo nivel*. Le recomendamos que no ingrese a esta sección a menos que esté altamente calificado o nuestro equipo de soporte se lo haya pedido. Aquí es posible habilitar el registro de la interfaz TUN o el protocolo IPv6 en la interfaz VPN, elegir un puerto de servidor proxy o la versión del protocolo de Internet que se debe usar.

:::Compatibilidad

La opción *Habilitar IPv6* solo está disponible para redes que admiten IPv6.

:::

### Asistencia técnica

En la sección *Soporte* puede dejar comentarios, informar un error o exportar registros e información del sistema para enviarlos al servicio de asistencia.
