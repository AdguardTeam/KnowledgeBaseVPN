---
title: Errores comunes del instalador
sidebar_position: 2
---

Este artículo contiene algunos de los errores más comunes que puedes encontrar durante la instalación de AdGuard VPN para Windows y las posibles formas de solucionarlos.

### Error 5: Acceso denegado {#error-5}

Este error ocurre cuando hay algún problema con los permisos. Puede haber varias razones diferentes por las que el instalador de AdGuard VPN no tiene los permisos necesarios para finalizar correctamente el proceso de instalación. Puedes intentar los siguientes pasos:

- Desactiva temporalmente tu antivirus. Algunos de ellos pueden interferir con la instalación, dependiendo de su configuración.

- Elige otra carpeta de instalación. Es posible que la carpeta de instalación actual tenga algunas restricciones de acceso. También asegúrate de no seleccionar una unidad externa, una unidad virtual, etc.

- Reinicia tu computadora. A veces, los problemas de permisos son temporales y se pueden resolver reiniciando la PC.

### Error 112: El disco está lleno, Error 1632: Carpeta temporal llena o inaccesible {#error-112}

Estos son dos errores diferentes con soluciones muy similares. Como sugieren sus nombres, el instalador de AdGuard VPN no encontró suficiente espacio en el disco para completar la instalación. Hay varias cosas que puedes intentar para solucionar el problema:

- Desinstala algunos programas o elimina archivos innecesarios de la unidad en la que intentabas instalar AdGuard VPN.

- Descarga, instala y ejecuta [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), un software gratuito de Malwarebytes. Entre otras cosas, él limpiará tu sistema de todo tipo de archivos "sobrantes" que quedan después de programas desinstalados incorrectamente. Ayudará a limpiar algo de espacio en disco.

- Reinicia tu computadora. A veces, los archivos temporales pueden ocupar una cantidad considerable de espacio en disco, y reiniciar tu PC es la forma más confiable de deshacerse de ellos.

### Error 1601: no se puede acceder al instalador de Windows {#error-1601}

Se puede decir que este es un subtipo particular del Error 1603. Las posibles soluciones son similares:

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter **services.msc**.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    1. Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Reinicia la PC y comienza la instalación nuevamente. A veces eso es suficiente para solucionar el problema.

### Error 1602: Cancelado por el usuario {#error-1602}

Si recibiste este código de error, es probable que hayas interrumpido el proceso de instalación manualmente de una forma u otra. Lo que puedes hacer es:

- No cierres la ventana del instalador. Cuando se complete la instalación, será cerrarado automáticamente.

- Si aparece una ventana de diálogo durante la instalación, presiona "Sí" para otorgar al instalador los permisos necesarios. Al hacer clic en "No", la instalación será cancelada.

- No inicies otros procesos mientras la instalación está en curso.

### Error 1603: error fatal durante la instalación {#error-1603}

El error suena más aterrador de lo que realmente es. En realidad, este es un error bastante genérico que puede tener muchas causas diferentes, y algunas de ellas se solucionan fácilmente. Prueba las siguientes soluciones:

- Presiona la tecla *Win*, busca *Comando prompt* y ejecútalo. Allí, escribe `sfc /scannow` y presiona *Enter*.

- Elige otra carpeta de instalación. Es posible que la carpeta de instalación actual tenga algunas restricciones de acceso. También asegúrate de no seleccionar una unidad externa, una unidad virtual, etc.

- Desinstala AdGuard VPN usando nuestra herramienta especial de desinstalación [](../../installation#advanced) y luego repite la instalación.

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter ***services.msc***.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    1. Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

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

Este error ocurre cuando hay varias instancias del instalador de AdGuard VPN iniciadas al mismo tiempo. Qué hacer si recibes este error:

- Reinicia tu PC y vuelve a iniciar el instalador. Al reiniciar el ordenador, se detendrán todos los procesos en curso, incluidas todas las copias del instalador.

- No hagas varios clics en el instalador incluso si no se inicia de inmediato. A veces, la interfaz de usuario del instalador puede tardar unos segundos en mostrarse.

### Error 1638: Ya está instalada otra versión de este producto {#error-1638}

Es muy probable que ya hayas instalado AdGuard VPN.

- Verifica si AdGuard VPN ya está instalado en su ordenador. Puedes hacerlo presionando la tecla *Win* y escribiendo ***AdGuard VPN***.

- Tal vez haya algunos archivos sobrantes de una instalación anterior de AdGuard VPN. Desinstala AdGuard usando nuestra herramienta especial de desinstalación [](../../installation#advanced) y luego repite la instalación.

### Otros errores {#other}

Si has encontrado un error que no se encuentra en la lista anterior, es posible que podamos resolverlo nosotros mismos. Pero para hacerlo, necesitamos tus archivos de registro. Realiza los siguientes pasos:

- Encuentra y archiva los **Registros de instalación de AdGuard VPN** como se describe en [este artículo](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Busca y guarda en el disco los registros del **Event Viewer**. [Este artículo](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) explica cómo hacerlo.

Envía por correo electrónico todos estos archivos de los dos pasos anteriores a **support@adguard.com** y describe el problema en el cuerpo del mensaje. Nuestro equipo de soporte te responderá lo antes posible.
