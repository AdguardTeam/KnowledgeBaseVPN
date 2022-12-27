---
title: Resumen de características
sidebar_position: 1
---

AdGuard VPN para Mac es un servicio de VPN para desktop. AdGuard VPN es totalmente compatible con AdGuard Ad Blocker, se pueden utilizar juntos y funcionarán sin problemas. Veamos qué características ofrece.

Ten en cuenta que **no puedes utilizar AdGuard VPN para Mac a menos que hayas iniciado sesión en tu cuenta de AdGuard**. Puedes iniciar sesión con tu cuenta de AdGuard o con una cuenta externa, es decir, a través de Apple, Google o Facebook. Asegúrese de que tu cuenta externa esté vinculada a la misma dirección de correo electrónico que tu cuenta de AdGuard. Si hay una suscripción adecuada en tu cuenta de AdGuard, ella se activará automáticamente en la aplicación para desktop. ¿Aún no tiene una cuenta de AdGuard? Créalo [aquí](https://auth.adguard.com/registration.html).

> AdGuard VPN para Mac es actualmente compatible con las versiones de macOS a partir de macOS Sierra (10.12).

## Pantalla de inicio

![Pantalla de inicio](https://cdn.adguardvpn.com/content/kb/vpn/mac/main_en.png)

La primera pestaña es la pantalla *de inicio* . Here you can see AdGuard VPN current status and [exclusions mode](#exclusions), chosen location (if enabled) and its ping. Ping es el tiempo de respuesta de un servidor VPN. Por lo tanto, cuanto más bajo sea este número, más rápida será la conexión. Si la VPN está deshabilitada, la última ubicación a la que se conectó se muestra a continuación. Las ubicaciones más rápidas con los pings más bajos se muestran en la esquina superior derecha de la pantalla. A continuación puedes ver la lista completa de ubicaciones. A través de la función de búsqueda, se puede encontrar fácilmente la ubicación necesaria.

> Los usuarios de la versión gratuita sólo pueden conectarse a determinadas ubicaciones, mientras que otras están bloqueadas. Además, hay un límite de tráfico mensual de 3GB en la versión gratuita.

## Exclusiones

![Exclusiones](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_en.png)

A continuación aparece la pantalla *Exclusiones* . AdGuard VPN has several features that make it unique, and one of them is certainly switching between two exclusions modes. In the General mode, AdGuard VPN will run on all websites but the ones from the exclusions list. En el modo Selectivo, por el contrario, AdGuard VPN sólo funcionará en los sitios web de la lista de exclusiones. Tú mismo puedes decidir dónde quieres que la VPN funcione.

![Pantalla de exclusiones](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_en.png)

Además, no sólo puede añadir sitios web a las exclusiones, sino también elegir entre las listas de servicios populares. Las listas se dividen en ocho categorías: Redes sociales, Mensajeros, Servicios de streaming de video y música, Juegos, Compras, Motores de búsqueda y Herramientas de comunicación laboral. ¡Cualquiera de estos servicios se puede agregar a Exclusiones con un solo clic! Eso es especialmente conveniente si se utiliza el modo selectivo.

La lista de exclusión se puede configurar fácilmente. Si has añadido un dominio y algunos de sus subdominios, se agruparán dentro del dominio root. Al agregar un dominio root (`ejemplo.com`) también se agrega su máscara (`*.ejemplo.com`).

Si agregó un servicio, cambió o eliminó algo y ahora desea recuperar la configuración inicial, simplemente presione *Restablecer al predeterminado * junto al dominio: esta acción restaurará los dominios faltantes y marcará todas las casillas de verificación.

Además, las listas de exclusiones ya definidas se pueden transferir a otros dispositivos con AdGuard VPN instalado. Para exportar las exclusiones, siga los cuatro pasos que se indican a continuación:

1. Abra AdGuard VPN en el dispositivo desde donde desea exportar tus listas de exclusiones. Busque la sección correspondiente y haga clic en el botón *Exportar* . Se descargará el archivo `exclusions.zip` .
2. There are two `.txt` files inside the archive, each for General and Selective lists. Agregue más exclusiones a ellos, elimine las existentes, cambie el nombre de los archivos (más sobre esto adelante), o simplemente deje el archivo con los ficheros como está.
3. Al transferir entre diferentes dispositivos, no olvide enviar el archivo `.zip` al dispositivo para importarlo. Por ejemplo, si importas listas de exclusión de tu Mac a tu iPhone, asegúrate de enviar previamente el archivo `.zip` a tu teléfono.
4. Abra AdGuard VPN en el dispositivo/navegador donde desea importar el archivo con las listas listas de exclusiones. Busca la sección correspondiente, haz clic en el botón *Importar* y selecciona el archivo. ¡Listo!

> Los archivos de otros dispositivos se pueden importar de forma similar a tu AdGuard VPN para Mac.

## Soporte

![Pantalla de Centro de Asistencia](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_en.png)

La tercera pestaña es la pantalla *Centro de Asistencia*. Encuentre respuestas a cualquier pregunta en las [Preguntas Frecuentes](https://adguard-vpn.com/en/welcome.html#faq) o en la [Base de Conocimiento](/intro.md), informe un error si encuentra uno o [hable sobre AdGuard en cualquiera de las plataformas](https://adguard.com/en/discuss.html). Y no dudes en [dejar tu opinión sobre nuestro producto](https://surveys.adguard.com/en/vpn_mac/form.html), se lo agradeceremos.

## Configuración

![Configuración](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_en.png)

Finalmente, llegamos a la pestaña Configuración. En la sección *Acerca del programa* , puedes ver la versión actual de AdGuard VPN, buscar actualizaciones, visitar nuestro sitio web oficial y familiarizarte con el EULA y la política de privacidad de AdGuard. En la sección *Acerca de la licencia*, puedes actualizarla de gratuita a ilimitada, administrar tu suscripción o cerrar sesión. Y lo más importante, desde aquí puedes acceder a *Configuración general*.

### App settings

![App settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_en.png)

Las primeras cuatro características básicas hacen que la aplicación sea más conveniente y fácil de usar, es decir, *Kill Switch*, *Actualización automática*, *Iniciar AdGuard VPN al iniciar sesión*y *Conexión automática al iniciar la aplicación*. Además, puedes elegir entre temas claros, oscuros y del sistema; el último coincide con el tema de tu Mac.

Otra opción que no debes ignorar es que puedes permitir que AdGuard VPN recopile y envíe informes de fallas anónimos, datos técnicos y de interacción para ayudarnos a mejorar nuestra aplicación. Por último, pero no menos importante, gracias al botón de la derecha, puedes exportar registros a tu Mac. Esto puede ser útil si quieres adjuntar registros a tu mensaje para el soporte.

### Servidores DNS

![Servidores DNS](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_en.png)

Aquí puedes agregar un servidor DNS personalizado (o servidores) para no depender de un servidor DNS proporcionado por tu ISP de forma predeterminada. Recomendamos agregar AdGuard DNS, que no solo cifra tu tráfico de DNS, sino que también identifica las solicitudes a sitios maliciosos y las redirige a un "agujero negro".

### Configuración avanzada

![Configuración avanzada](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_en.png)

No se recomienda ajustar la configuración avanzada. No los cambies a menos que te lo solicite nuestro soporte técnico o a menos que estés seguro de lo que estás haciendo.

#### Nivel de registro
Solo hay dos niveles de registro, pero te recomendamos encarecidamente que utilices el primero, el predeterminado. La segunda opción (registro extendido) debe configurarse solo para registrar un comportamiento extraño del programa después de consultar con nuestro soporte técnico. Incluso si habilitastes el segundo nivel de registro, asegúrate de volver al predeterminado después de registrar los logs.

#### Ocultar icono de la barra de menú
Aunque esta opción se encuentra en *Configuración avanzada*, se puede habilitar sin dudarlo. Puedes ocultar el ícono de AdGuard VPN de la barra de menú, esto no impedirá que nuestra aplicación se ejecute en segundo plano.

#### Utilizar QUIC (experimental)

El protocolo de comunicación QUIC es la última y más avanzada versión de HTTP. Activa el interruptor para obtener una mejor calidad de conexión en condiciones no ideales, mientras utilizas los datos móviles en el metro o el ascensor, por ejemplo.
