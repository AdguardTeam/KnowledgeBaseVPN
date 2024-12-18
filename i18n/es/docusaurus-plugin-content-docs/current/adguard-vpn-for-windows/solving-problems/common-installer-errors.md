---
title: Errores comunes del instalador
sidebar_position: 2
---

This article outlines some of the most common errors you may encounter while installing AdGuard VPN for Windows and possible ways to resolve them.

### Error 5: Acceso denegado {#error-5}

This error message appears if required permissions are not granted. Puede haber varias razones diferentes por las que el instalador de AdGuard VPN no tiene los permisos necesarios para finalizar correctamente el proceso de instalación. Puedes intentar los siguientes pasos:

- Desactiva temporalmente tu antivirus. Some of them may interfere with the installation, depending on the restrictiveness of their settings.

- Elige otra carpeta de instalación. Es posible que la carpeta de instalación actual tenga algunas restricciones de acceso. Also make sure you don’t select an external drive, a virtual drive, etc.

- Reinicia tu computadora. A veces, los problemas de permisos son temporales y se pueden resolver reiniciando la PC.

### Error 112: El disco está lleno, Error 1632: Carpeta temporal llena o inaccesible {#error-112}

Estos son dos errores diferentes con soluciones muy similares. As their names suggest, AdGuard VPN installer didn’t find enough disk space to complete the installation. Hay varias cosas que puedes intentar para solucionar el problema:

- Desinstala algunos programas o elimina archivos innecesarios de la unidad en la que intentabas instalar AdGuard VPN.

- Descarga, instala y ejecuta [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), un software gratuito de Malwarebytes. It will, among other things, clean your system from all kinds of extra “leftover” files that remain after incorrectly uninstalled programs and such. Ayudará a limpiar algo de espacio en disco.

- Reinicia tu computadora. A veces, los archivos temporales pueden ocupar una cantidad considerable de espacio en disco, y reiniciar tu PC es la forma más confiable de deshacerse de ellos.

### Error 1601: no se puede acceder al instalador de Windows {#error-1601}

Se puede decir que este es un subtipo particular del Error 1603. Las posibles soluciones son similares:

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter **services.msc**.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type **msiexec /regserver** and hit *Enter*

- Reinicia la PC y comienza la instalación nuevamente. Sometimes that’s enough to fix the problem.

### Error 1602: Cancelado por el usuario {#error-1602}

Si recibiste este código de error, es probable que hayas interrumpido el proceso de instalación manualmente de una forma u otra. Lo que puedes hacer es:

- No cierres la ventana del instalador. Cuando se complete la instalación, será cerrarado automáticamente.

- If a dialogue window pops up during the installation, hit *Yes* to grant the installer the required permissions. Clicking *No* will cancel the installation.

- No inicies otros procesos mientras la instalación está en curso.

### Error 1603: error fatal durante la instalación {#error-1603}

This error sounds more worrying than it actually is. En realidad, este es un error bastante genérico que puede tener muchas causas diferentes, y algunas de ellas se solucionan fácilmente. Prueba las siguientes soluciones:

- Presiona la tecla *Win*, busca *Comando prompt* y ejecútalo. Allí, escribe `sfc /scannow` y presiona *Enter*.

- Elige otra carpeta de instalación. Es posible que la carpeta de instalación actual tenga algunas restricciones de acceso. Also make sure you don’t select an external drive, a virtual drive, etc.

- Uninstall AdGuard VPN using our special [uninstall tool](/adguard-vpn-for-windows/installation#advanced) and then repeat the installation.

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter **services.msc**.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type **msiexec /regserver** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It’s also not as easy as some of the other solutions:

    1. Open *File Explorer*, right-click the drive containing the installation location, and select *Properties*.
    1. Go to *Security* tab and click *Edit*.
    1. Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    1. Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    1. Click *Change Permissions*.
    1. In *Permissions* tab, double-click *Administrators*.
    1. Select *This folder, subfolders and files* for the *Applies to* field and tick all the available *Basic permissions*. After that hit *OK*.
    1. Do the same operation above (from item 7) for *SYSTEM*.
    1. Click *OK* all the way out. Try installing AdGuard again.

### Error 1618: ya hay otra instalación en curso {#error-1618}

This error appears when trying to run multiple instances of the AdGuard VPN installer simultaneously. Qué hacer si recibes este error:

- Reinicia tu PC y vuelve a iniciar el instalador. Al reiniciar el ordenador, se detendrán todos los procesos en curso, incluidas todas las copias del instalador.

- Don’t click the installer multiple times, even if it doesn’t seem to start right away. A veces, la interfaz de usuario del instalador puede tardar unos segundos en mostrarse.

### Error 1638: Ya está instalada otra versión de este producto {#error-1638}

It’s very likely that you’ve already installed AdGuard VPN before.

- Verifica si AdGuard VPN ya está instalado en su ordenador. To do that, press the *Win* key and start typing *adguard vpn*.

- Tal vez haya algunos archivos sobrantes de una instalación anterior de AdGuard VPN. Uninstall AdGuard using our special [uninstall tool](/adguard-vpn-for-windows/installation#advanced) and then repeat the installation.

### Otros errores {#other}

If you have encountered an error that’s not listed above, it is possible that we can solve it by ourselves. Pero para hacerlo, necesitamos tus archivos de registro. Realiza los siguientes pasos:

- Encuentra y archiva los **Registros de instalación de AdGuard VPN** como se describe en [este artículo](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Find and save to disk the **Event Viewer** logs. [Este artículo](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) explica cómo hacerlo.

Envía por correo electrónico todos estos archivos de los dos pasos anteriores a **support@adguard.com** y describe el problema en el cuerpo del mensaje. Nuestro equipo de soporte te responderá lo antes posible.
