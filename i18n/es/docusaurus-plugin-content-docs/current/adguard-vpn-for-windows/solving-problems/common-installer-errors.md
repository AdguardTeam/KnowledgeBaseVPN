---
title: Errores comunes del instalador
sidebar_position: 2
---

This article outlines some of the most common errors you may encounter while installing AdGuard VPN for Windows and possible ways to resolve them.

### Error 5: Acceso denegado {#error-5}

This error message appears if required permissions are not granted. Puede haber varias razones diferentes por las que el instalador de AdGuard VPN no tiene los permisos necesarios para finalizar correctamente el proceso de instalación. Puedes intentar los siguientes pasos:

- Desactiva temporalmente tu antivirus. Some of them may interfere with the installation, depending on the restrictiveness of their settings.

- Elige otra carpeta de instalación. Es posible que la carpeta de instalación actual tenga algunas restricciones de acceso. También asegúrate de no seleccionar una unidad externa, una unidad virtual, etc.

- Reinicia tu computadora. A veces, los problemas de permisos son temporales y se pueden resolver reiniciando la PC.

### Error 112: El disco está lleno, Error 1632: Carpeta temporal llena o inaccesible {#error-112}

Estos son dos errores diferentes con soluciones muy similares. Como sugieren sus nombres, el instalador de AdGuard VPN no encontró suficiente espacio en el disco para completar la instalación. Hay varias cosas que puedes intentar para solucionar el problema:

- Desinstala algunos programas o elimina archivos innecesarios de la unidad en la que intentabas instalar AdGuard VPN.

- Descarga, instala y ejecuta [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), un software gratuito de Malwarebytes. Entre otras cosas, él limpiará tu sistema de todo tipo de archivos "sobrantes" que quedan después de programas desinstalados incorrectamente. Ayudará a limpiar algo de espacio en disco.

- Reinicia tu computadora. A veces, los archivos temporales pueden ocupar una cantidad considerable de espacio en disco, y reiniciar tu PC es la forma más confiable de deshacerse de ellos.

### Error 1601: no se puede acceder al instalador de Windows {#error-1601}

Se puede decir que este es un subtipo particular del Error 1603. Las posibles soluciones son similares:

- Inicia y vuelve a registrar el servicio Microsoft Installer. Requiere algo de trabajo.

    1. Presiona *Win + R* e introduzca **services.msc**.
    1. Búscalo en la lista y haz doble clic en *Windows Installer*.
    1. Pulsa el botón *Iniciar* debajo de *Estado del servicio* y pulsa *Aceptar*. Si el estado del servicio es **ejecutando**, debes hacer clic primero en *Detener* y luego pulsar *Iniciar*.
    1. Press *Win + R*, type and enter **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type and enter **msiexec /regserver** and hit *Enter*

- Reinicia la PC y comienza la instalación nuevamente. A veces eso es suficiente para solucionar el problema.

### Error 1602: Cancelado por el usuario {#error-1602}

Si recibiste este código de error, es probable que hayas interrumpido el proceso de instalación manualmente de una forma u otra. Lo que puedes hacer es:

- No cierres la ventana del instalador. Cuando se complete la instalación, será cerrarado automáticamente.

- Si aparece una ventana de diálogo durante la instalación, presiona "Sí" para otorgar al instalador los permisos necesarios. Al hacer clic en "No", la instalación será cancelada.

- No inicies otros procesos mientras la instalación está en curso.

### Error 1603: error fatal durante la instalación {#error-1603}

This error sounds more worrying than it actually is. En realidad, este es un error bastante genérico que puede tener muchas causas diferentes, y algunas de ellas se solucionan fácilmente. Prueba las siguientes soluciones:

- Presiona la tecla *Win*, busca *Comando prompt* y ejecútalo. Allí, escribe `sfc /scannow` y presiona *Enter*.

- Elige otra carpeta de instalación. Es posible que la carpeta de instalación actual tenga algunas restricciones de acceso. También asegúrate de no seleccionar una unidad externa, una unidad virtual, etc.

- Uninstall AdGuard VPN using our special [uninstall tool](/adguard-vpn-for-windows/installation#advanced) and then repeat the installation.

- Inicia y vuelve a registrar el servicio Microsoft Installer. Requiere algo de trabajo.

    1. Press *Win + R* and enter **services.msc**.
    1. Búscalo en la lista y haz doble clic en *Windows Installer*.
    1. Pulsa el botón *Iniciar* debajo de *Estado del servicio* y pulsa *Aceptar*. Si el estado del servicio es **ejecutando**, debes hacer clic primero en *Detener* y luego pulsar *Iniciar*.
    1. Press *Win + R*, type and enter **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type and enter **msiexec /regserver** and hit *Enter*

- Adquiere permisos completos en la unidad para la instalación. Es posible que se produzca el error 1603 porque no tienes permisos completos en la ubicación del archivo. Esto tampoco es tan fácil como algunas de las otras soluciones:

    1. Abre *Explorador de archivos*, haz clic con el botón derecho en la unidad que contiene la ubicación de instalación y selecciona *Propiedades*.
    1. Ir a la pestaña *Seguridad* y haz clic en *Editar*.
    1. 3) Haz clic en *SISTEMA* y asegúrate de que la casilla *Permitir* de cada elemento en *Permisos para SISTEMA* esté marcada (si es posible). Haz la misma verificación para *Administradores*.
    1. Haz clic en *Aceptar* para volver al cuadro de diálogo *Propiedades*. Luego haz clic en *Avanzado*.
    1. Haz clic en *Cambiar permisos*.
    1. En la pestaña *Permisos*, haz doble clic en *Administradores*.
    1. Selecciona *Esta carpeta, subcarpetas y archivos* para el campo *Se aplica a* y marca todos los *Permisos básicos* disponibles. Luego, presiona *OK*.
    1. Haz la misma operación del punto 7 para *SISTEMA*.
    1. Haz clic en *OK* hasta el final. Intenta instalar AdGuard de nuevo.

### Error 1618: ya hay otra instalación en curso {#error-1618}

This error appears when trying to run multiple instances of the AdGuard VPN installer simultaneously. Qué hacer si recibes este error:

- Reinicia tu PC y vuelve a iniciar el instalador. Al reiniciar el ordenador, se detendrán todos los procesos en curso, incluidas todas las copias del instalador.

- Don't click multiple times on the installer, even if it doesn't start right away. A veces, la interfaz de usuario del instalador puede tardar unos segundos en mostrarse.

### Error 1638: Ya está instalada otra versión de este producto {#error-1638}

Es muy probable que ya hayas instalado AdGuard VPN.

- Verifica si AdGuard VPN ya está instalado en su ordenador. You can do that by pressing the *Win* key and start typing *adguard vpn*.

- Tal vez haya algunos archivos sobrantes de una instalación anterior de AdGuard VPN. Uninstall AdGuard using our special [uninstall tool](/adguard-vpn-for-windows/installation#advanced) and then repeat the installation.

### Otros errores {#other}

Si has encontrado un error que no se encuentra en la lista anterior, es posible que podamos resolverlo nosotros mismos. Pero para hacerlo, necesitamos tus archivos de registro. Realiza los siguientes pasos:

- Encuentra y archiva los **Registros de instalación de AdGuard VPN** como se describe en [este artículo](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Find and save to disk the **Event Viewer** logs. [Este artículo](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) explica cómo hacerlo.

Envía por correo electrónico todos estos archivos de los dos pasos anteriores a **support@adguard.com** y describe el problema en el cuerpo del mensaje. Nuestro equipo de soporte te responderá lo antes posible.
