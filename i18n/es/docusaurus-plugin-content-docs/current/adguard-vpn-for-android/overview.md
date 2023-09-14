---
title: Resumen de características
sidebar_position: 1
---

## Que es AdGuard VPN para Andriod?

Un VPN es una herramienta ideal que brinda seguridad y anonimato cada vez que navegas por Internet. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted tunnel between the user's computer or mobile device and a remote VPN server. De esta manera, se preserva la confidencialidad de los datos, así como el anonimato del usuario, porque un observador de un tercer partido ve la dirección IP del servidor VPN y no la dirrecion IP verdadero del usuario.

**Una VPN se usa comúnmente para:**

- Mantener la seguridad de los datos personales incluso al usar Wi-Fi público
- Evitar el seguimiento de la actividad en línea al enmascarar la dirección IP
- Ocultar la geolocalización real para permanecer anónimo

AdGuard VPN para Android puede hacerlo todo por usted, e incluso ofrecer algo único. To find out why AdGuard VPN is the better option — read [this article](/general/why-adguard-vpn).

## Cómo empezar usar AdGuard VPN para Android

Primeramente, descargue AdGuard VPN desde [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) e inicie sesión en su cuenta de AdGuard. En caso de que no lo tenga, debe [crearlo](https://auth.adguard.com/login.html). Puede iniciar sesión directamente con las credenciales de su cuenta de AdGuard. O hágalo a través de Google o Facebook, si su cuenta de AdGuard se registró utilizando la misma dirección de correo electrónico.

## Pantalla principal

Hay dos barras en la pantalla principal, que reflejan el estado de la aplicación (Conectado/Desconectado) y el modo de Exclusiones seleccionado ([General/Selectivo](#lists-of-exclusions)). En la misma pantalla, también hay un botón *Conectar/Desconectar* y una lista de servidores disponibles.

Cada servidor tiene su ubicación y su velocidad de ping, que describe el tiempo de respuesta del servidor. Cuanto más baja sea esta tasa, más rápida será tu conexión. Las opciones más rápidas siempre se muestran en la parte superior de la lista, que consta de más de 50 ubicaciones en docenas de países. Puede conectarse al servidor más rápido tocando el botón *Conectar/Desconectar* o eligiendo una ubicación.

## Exclusiones

Hemos hecho todo lo posible para facilitarte la administración de las listas de exclusión de sitios y aplicaciones. AdGuard VPN solo funcionará donde usted elija.

### Listas de exclusiones

Las listas de exclusiones te permiten seleccionar sitios para los cuales la VPN debe estar habilitada y para los cuales, deshabilitada. Para llegar a la sección *Exclusiones*, toque el segundo icono de la izquierda en la parte inferior de la pantalla.

Hay dos modos: en el modo *General* se excluyen los sitios de la lista de exclusiones, y en el modo *Selectivo*, serán los únicos donde funcione AdGuard VPN.

Puedes agregar dominios (p. ej., `google.com`) o subdominios (p. ej., `*.google.com`) de sitios web a las *Exclusiones* de tres maneras: ingrésalos manualmente en la aplicación o directamente desde el navegador haciendo clic en el *Comparta el botón* y selecciona AdGuard VPN en la lista abierta a continuación, o en las listas integradas de servicios divididas por categorías.

![Exclusiones](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)
> Hay algunos detalles para la adición manual de dominios. Por ejemplo, si excluyes manualmente el dominio `yahoo.com`, todos los subdominios `*.yahoo.com` también se añadirán a la lista de exclusiones. Sin embargo, no se excluirán los nombres de dominio con otros dominios de nivel superior, como `yahoo.jp` o `yahoo.fr`. O puedes añadir `youtube.com` a las exclusiones, pero el dominio del mismo servicio `youtu.be` no se incluirá en la lista. En este caso, es más seguro usar listas de servicios integradas, porque ponemos todos los subdominios relacionados con cada plataforma.

Como puedes habilitar subdominios en las listas de servicios, agregamos cuadros que reflejan el estado de cada servicio. Puedes verlos en la pantalla principal de *Exclusiones* a la izquierda de cada nombre de servicio:**totalmente habilitado** está marcado con una verificación blanca sobre fondo verde, **totalmente deshabilitado** — con un cuadro gris y **parcialmente habilitado**, lo que significa que se cambiaron uno o más parámetros, con un cuadrado verde sobre fondo blanco. Buenas noticias: siempre puedes volver a la vista predeterminada de las listas de servicios en caso de que hayas eliminado o deshabilitado algún dominio desde allí.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Otra función útil es *Exclusiones de importación/exportación*. Sólo son necesarios cuatro pasos para hacerlo:

1. Abre AdGuard VPN en el dispositivo/navegador desde donde deseas exportar tus listas de exclusiones. Busca la sección adecuada y haz clic en el botón *Exportar*. Se descargará el archivo `adguard_vpn_exclusions.zip`.
2. Hay dos archivos `.txt` dentro del fichero, uno para cada una de las listas, *General* y *Selectiva*. Agrega más exclusiones a ellos, elimina las existentes, cambia el nombre de los archivos (más sobre esto adelante), o simplemente deja el fichero con los archivos como está.
3. Al transferir entre diferentes dispositivos, no olvides enviar el fichero `.zip` al dispositivo para importarlo. Por ejemplo, si importas listas de exclusión desde tu dispositivo Windows a tu Android, asegúrate de enviar el fichero `.zip` a tu Android de antemano.
4. Abre AdGuard VPN en el dispositivo donde deseas importar el fichero con las listas listas de exclusiones. Busca la sección adecuada, haz clic en el botón *Importar* y selecciona el archivo.

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

### Configuración de aplicaciones

Como mencionamos anteriormente, no solo los sitios web se pueden agregar fácilmente a las exclusiones. Elije para qué aplicaciones necesitas AdGuard VPN o no. Haz clic en el icono junto al icono *Listas de exclusiones* en la parte inferior de la pantalla para abrir la configuración de aplicaciones. Por defecto, AdGuard VPN funciona con todas las aplicaciones, pero puedes activar el control deslizante junto a cualquier aplicación de la lista y desactivar AdGuard VPN para ella.

Si el modo de compatibilidad ** con AdGuard está habilitado, solo puedes administrar aplicaciones a través de AdGuard Ad Blocker. Por lo tanto, al tocar el botón, se abre la aplicación AdGuard.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Configuración

Puedess acceder a *Configuración* presionando el ícono de ajustes en la parte inferior derecha de la pantalla. La primera sección es *Configuración de la aplicación*: configura AdGuard VPN para Android según tus necesidades seleccionando diferentes opciones.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Inicio automático de AdGuard VPN

El control deslizante cambiado a la derecha habilita un inicio automático de AdGuard VPN después del inicio del dispositivo.

### Servidores DNS

El propósito del [sistema de nombres de dominio](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) (DNS) es traducir los nombres de los sitios web a algo que los navegadores puedan entender, es decir, las direcciones IP. Este trabajo lo realizan los servidores DNS. AdGuard VPN para Android ofrece una selección de varios servidores DNS, cada uno con cualidades especiales. Por ejemplo, [AdGuard DNS](https://adguard-dns.io/kb/) elimina los anuncios y protege tu dispositivo del rastreo, mientras que AdGuard DNS Family Protection combina las funciones de AdGuard DNS con SafeSearch y el bloqueo de contenido para adultos. También hay una opción para agregar un servidor DNS personalizado.

### Protección automática

Esta función habilita AdGuard VPN automáticamente cuando tu dispositivo se conecta a una red celular o Wi-Fi.

### Kill Switch

Puedes configurar la función Kill Switch en tu dispositivo Android siguiendo sencillas instrucciones en la pantalla. ¿Por qué deberías hacerlo? Si por algún motivo tu conexión VPN se interrumpe repentinamente mientras estás utilizando una red móvil o Wi-Fi público, Kill Switch terminará automáticamente la conexión a Internet, evitando que hacker se apoderen de tu información.

Tenga en cuenta que si Kill Switch está activado, *Configuración de la app* y *Exclusiones* no funcionarán.

### Tema

Puedes elegir el tema por defecto, oscuro o claro de la aplicación.

![Theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Configuración avanzada

En la página *Configuración avanzada*, puedes encontrar cinco secciones. Puedes *. Ayúdanos mejorar* activando el interruptor del bloque superior. Esta acción permitirá que AdGuard VPN recopile informes de fallas, datos técnicos y de interacción. Esta información llegará de forma anónima.

La sección*Modo de funcionamiento* te permite elegir una de tres opciones: VPN, Proxy y Modo de compatibilidad. En el *modo VPN*, todo el tráfico se enruta a través de AdGuard VPN automáticamente. Cuando el modo *Proxy* (SOCKS5) está activado, AdGuard VPN ejecuta un servidor proxy local que otras aplicaciones pueden utilizar para enrutar su tráfico. Elija esta opción solo si sabes lo que está haciendo. El *Modo de Compatibilidad* habilitado permite que AdGuard VPN y AdGuard Ad Blocker funcionen juntos.

> Tenga en cuenta que algunas funciones de AdGuard VPN están deshabilitadas en *Modo de compatibilidad*: selección de servidor DNS, Kill Switch y Auto-protección. Además, para gestionar la tunelización de aplicaciones, debe abrir la aplicación AdGuard Ad Blocker.

Las dos secciones siguientes son *Nivel de registro* y *Información de diagnóstico*. En cuanto a la primera opción, no se recomienda activar el nivel de registro Ampliado o Extremo a menos que lo solicite nuestro equipo de soporte. Se nos puede enviar información de diagnóstico y información técnica almacenada localmente sobre el dispositivo y las conexiones (dirección IP, ID, ping, etc.), en caso de cualquier problema técnico.

La última sección de *Configuración avanzada* es *Configuración de bajo nivel*. Le recomendamos que no ingrese a esta sección a menos que esté altamente calificado o nuestro equipo de soporte se lo haya pedido. Aquí es posible habilitar el registro de la interfaz TUN o el protocolo IPv6 en la interfaz VPN, elegir un puerto de servidor proxy o la versión del protocolo de Internet que se debe usar.

### Asistencia técnica

En la sección *Soporte* puede dejar comentarios, informar un error o exportar registros e información del sistema para enviarlos al servicio de asistencia.
