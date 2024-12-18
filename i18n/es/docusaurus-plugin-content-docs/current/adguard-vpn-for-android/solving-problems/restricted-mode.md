---
title: Problemas con el perfil del modo restringido
sidebar_position: 4
---

Los propietarios de teléfonos y tabletas que ejecutan el sistema operativo Android 7+ podrían enfrentarse al problema causado por el uso de **un perfil con Modo Restringido**. Si tiene este perfil, **AdGuard VPN**, al igual que otras aplicaciones que utilizan VPN, obtiene restricciones en el manejo selectivo del tráfico VPN. Además, una de las razones de este problema puede ser el uso de **Dual App/Dual Messenger profile** en su dispositivo. A continuación se describen las recomendaciones que puede aplicar cuando se presenta este problema.

## Soluciones

Tienes dos maneras de resolver el problema:

### Opción 1: Conceder permisos a AdGuard VPN mediante ADB

1. Active el modo de desarrollador **** y habilite la depuración USB ****:

    - Abra la aplicación **Configuración** en su teléfono;
    - Vaya a la sección **Sistema** (último elemento en el menú de configuración). En esta sección, encuentre el subelemento **Acerca del teléfono**;
    - Haz clic en **Número de build** 7 veces. Después de eso, recibirás una notificación que dice **Ahora eres un desarrollador** (Si es necesario, introduce un código de desbloqueo para el dispositivo);
    - Abre **Configuración del sistema** → **Opciones de desarrollador** → Desliza hacia abajo y activa **Depuración USB** → Confirma que la depuración está habilitada en la ventana **Permitir depuración USB** después de leer la advertencia cuidadosamente.

    :::note

    Si encuentras alguna dificultad o tienes preguntas adicionales, puedes encontrar instrucciones completas [aquí](https://developer.android.com/studio/debug/dev-options).

    :::

1. [Instalar y configurar](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB;

    :::note

    En la plataforma Windows, los propietarios de dispositivos **Samsung** pueden necesitar instalar [esta utilidad](https://developer.samsung.com/mobile/android-usb-driver.html).

    :::

1. Conecte su dispositivo usando un cable **USB** a la computadora o portátil en la que instaló **ADB**;

1. Abre **la línea de comando** en tu PC:

    - **Cmd.exe** si está utilizando **Windows**;
    - **Terminal** si está utilizando **macOS**;

1. Introduzca el comando `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` y pulse **Enter**.

### Opción 2: Eliminar *Cuenta de usuario restringida*

Puede [encontrar aquí](https://support.google.com/a/answer/6223444?hl=en) cómo administrar cuentas de usuario desde un dispositivo Android.

:::note

En algunos casos, se crean cuentas de usuario restringidas de forma implícita y no se pueden eliminar. Por ejemplo, cuando se utilizan las funciones Dual Messenger o Dual App en los dispositivos **Samsung** o **LG**. Lee a continuación cómo solucionar el problema en estos casos.

:::

### Dispositivos LG y Samsung

Los propietarios de los teléfonos **LG** o **Samsung** también pueden encontrar un problema similar. Puede ser causada por el uso de **función dual App / Dual Messenger** (que crea automáticamente un perfil restringido). Para resolver este problema, deshabilite esta función.

#### Samsung

- Abra **Сonfiguración**;
- Pulse **Avanzado**;
- Desplácese hacia abajo y luego presione **Dual Messenger**;
- Desactiva la función **Dual Messenger** para todas las aplicaciones;
- Bloquee el dispositivo durante 5 minutos;
- Desbloquee la pantalla y vuelva a intentar crear el perfil VPN.

#### LG

- Abra **Сonfiguración**;
- Elija la pestaña **General** ;
- Desplácese hacia abajo y pulse **Dual App**;
- Elimina todas las aplicaciones de la lista;
- Reinicie su dispositivo.
