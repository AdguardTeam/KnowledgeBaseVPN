---
title: Atajos
sidebar_position: 1
sidebar_label: Atajos
---

La función Atajos, integrada en iOS, facilita la gestión de tus conexiones sin necesidad de abrir AdGuard VPN. Puedes colocar un acceso directo _Conectar_, _Desconectar_ o _Activar/Desactivar VPN_ en la pantalla de inicio, en el Centro de control o en un widget, o configurar una frase de Siri para conectarte con tu voz.

Los accesos directos también pueden incluir automatizaciones más complejas. Por ejemplo, es posible que tu aplicación bancaria no funcione con una VPN activada, pero siempre la quieres tener activada para Instagram, o quieres que tu VPN se desactive automáticamente cuando estés conectado a la red Wi-Fi de casa. La función Atajos te permite automatizar estos escenarios.

## Antes de que empieces

Asegurar que:

- Tienes instalada la aplicación Atajos en tu iPhone o iPad;
- AdGuard VPN está instalado;
- Has iniciado sesión en AdGuard VPN y tienes un perfil VPN instalado.

## Conectar o desconectar con un solo toque

AdGuard VPN proporciona tres accesos directos predefinidos: _Conectar_, _Desconectar_, _Activar/Desactivar VPN_. _Conectar_ activa la VPN y se conecta a la última ubicación utilizada. _Desconectar_ desactiva la VPN. _Alternar VPN_ permite alternar entre las dos opciones: se conecta cuando la VPN está desactivada y se desconecta cuando está activada. Encontrarás estos accesos directos en _Accesos directos a aplicaciones_ dentro de la aplicación Atajos. Añade cualquiera de ellos a los tres lugares que se enumeran a continuación.

### Pantalla de inicio

Para configurar un acceso directo en la pantalla de inicio, siga las instrucciones rápidas de la aplicación AdGuard VPN. (_Ajustes_ → _Accesos directos_ → _Añadir accesos directos a la pantalla de inicio_).

![Instrucciones dentro de la aplicación \*mobile_border](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/in_app_instructions.png)

Las instrucciones varían según la versión de iOS. Aquí están las instrucciones para iOS 26:

1. Ve a la aplicación Atajos y pulsa el botón más (+).
2. Selecciona _AdGuard VPN_.
3. Elige el acceso directo que necesites: _Conectarse a la VPN_, _Desconectarse de la VPN_, _Activar/desactivar la conexión VPN_ o _Estado de la VPN_.

![Agregar acceso directo](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_shortcut.png)

Aquí te explicamos cómo agregar el acceso directo a tu pantalla de inicio.

1. Mantén pulsado el acceso directo y pulsa _Compartir_ → _Añadir a la pantalla de inicio_.
2. Personaliza el nombre y el icono del acceso directo si lo necesitas y, a continuación, pulsa _Añadir_. El acceso directo aparecerá en la pantalla de inicio como un icono de 1x1 píxel.

![Añadir a la pantalla de inicio](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_home_screen.png)

### Centro de control

Puedes añadir un acceso directo a AdGuard VPN en el Centro de control para acceder rápidamente desde cualquier lugar del dispositivo.

1. Abrir el Centro de control. En un iPhone con Face ID, desliza el dedo hacia abajo desde la esquina superior derecha. En un iPhone con botón de inicio, desliza el dedo hacia arriba desde la parte inferior.
2. Mantén pulsado un área vacía y pulsa _Añadir un control_.
3. Busca _Accesos directos_ en la lista y pulsa _Ejecutar acceso directo_, luego pulsa _Elegir_ y selecciona tu acceso directo a AdGuard VPN. El acceso directo aparecerá ahora en el Centro de control.

Nota: Los pasos exactos pueden variar según la versión de iOS.

![Agregar acceso directo al Centro de control](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_control_center.png)

### Widget

1. Mantén pulsada un área vacía de la pantalla de inicio hasta que las aplicaciones se muevan, luego pulsa _Editar_ en la esquina superior izquierda → _Añadir widget_.
2. Busca _Accesos directos_ en la lista y elige un tamaño de widget. Te recomendamos que elijas uno que pueda mostrar al menos dos accesos directos.
3. Pulsa _Añadir widget_.
4. En el modo de edición, toque el widget para abrir el menú de configuración, establezca _Carpeta_ en _Personalizada_ y asigne _Conectar a VPN_ a una ranura y _Desconectar de VPN_ a la otra.

![Agregar acceso directo como widget](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/widget.png)

## Un solo toque para abrir cualquier aplicación con la VPN activada

Si necesitas tener la VPN activada solo para una aplicación específica, puedes crear un acceso directo personalizado que active AdGuard VPN y abra la aplicación que desees, todo con un solo toque. Aquí te explicamos cómo configurarlo.

1. Abre la aplicación Atajos, pulsa el botón más (+) y busca AdGuard VPN. Añade la acción _Estado de la VPN_.
2. Añade una acción _If_. La función Atajos completa la condición por ti: toma el estado de la VPN del paso anterior y lo compara con _Conectado_. Dentro de ella, añade _Abrir aplicación_ y configúrala con la aplicación que quieras, por ejemplo, YouTube.
3. En _Otros_, añade tres acciones en orden: _AdGuard VPN_ → _Conectar a VPN_, _Esperar_ (ajustado a 2 segundos) y _Abrir app_ (la misma app que antes).
4. Pulsa el nombre en la parte superior para establecer un icono y un nombre personalizados, y luego prueba el acceso directo con el botón de reproducción.
5. Agrega el acceso directo a la pantalla de inicio tocando el nombre y seleccionando _Agregar a la pantalla de inicio_.

![Agregar acceso directo personalizado](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_custom_shortcut.png)

## Conectar o desconectar con Siri

En la aplicación AdGuard VPN, ve a _Ajustes_ → _Accesos directos_ → _Configurar frases de Siri_. A continuación, tendrá dos opciones: _Grabar una frase para conectar_ o _Grabar una frase para desconectar_.

![Conectar con Siri](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.17/siri_connect.png)

Selecciona _Grabar una frase para conectar_ o _Grabar una frase para desconectar_ y luego di la frase que quieras, por ejemplo, “Oye Siri, conéctate a AdGuard VPN”. Una vez grabada, dile la misma frase a Siri cuando quieras para reproducirla.

## Automatización de AdGuard VPN para aplicaciones específicas

Algunas aplicaciones, como las aplicaciones bancarias, no funcionan con una VPN activada. Configura dos automatizaciones para que la VPN se desactive mientras usas la aplicación y se vuelva a activar una vez que hayas terminado. Cuando se configura correctamente, la automatización puede ser más conveniente que abrir un acceso directo manualmente: no es necesario pulsar un icono en la pantalla de inicio para abrir el acceso directo, basta con abrir la aplicación. Además, puedes incluir varias aplicaciones en una misma automatización. Puedes usar automatizaciones para activar o desactivar AdGuard VPN cuando abras una aplicación, cuando cierres una aplicación y cuando te conectes o desconectes de tu red Wi-Fi doméstica.

[Cómo configurar automatizaciones en tu iPhone o iPad](/adguard-vpn-for-ios/features/automation/)
