---
title: Instalación y remoción
sidebar_position: 2
---

## Requisitos del sistema

**Versión** del sistema operativo: macOS 10.12 (64 bits) o superior

**RAM**: por lo menos 2 GB

**Espacio libre en disco**: 120 Mb


## Como instalar AdGuard VPN para Mac?

1. Para instalar AdGuard VPN para Mac, simplemente siga [este enlace](https://agrd.io/mac_vpn) o abra un navegador, escriba *adguard-vpn.com* en la barra de direccion y en la página abierta haga clic en "Probar gratis".

![Descarga AdGuard VPN desde el sitio web oficial](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-en.png)

2. Espere hasta que finalice la descarga del archivo *AdGuardVPN.dmg* y ábralo en la carpeta "Descargas".

3. Espere hasta que se abra la ventana del programa de instalación. Haga doble clic en el icono.

![Ventana de instalación del programa](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)

4. Cuando inicie AdGuard VPN por primera vez, el sistema operativo mostrará una advertencia en la pantalla que indica que esta aplicación se ha descargado del Internet. Haga clic en *Abrir*.

5. Luego haga clic en *Continuar* y *Instalar*.

![Haga clic en Continuar](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-2-en.png)

![haga clic en Instalar](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)

6. Espera a que el instalador descargue los archivos necesarios.

¡AdGuard VPN para Mac está instalado!


## Como desinstalar AdGuard VPN para Mac?

### Desinstalación estándar

Para desinstalar AdGuard VPN para Mac, siga dos pasos sencillos:

1. Abra "Finder" y vaya a la sección "Programas".

2. Seleccione *AdGuard VPN* de la lista, haga clic derecho sobre él y luego haga clic en *Mover a la Papelera*.

![Desinstalación estándar](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)


### Desinstalación avanzada

A veces, como resultado de una eliminación incorrecta, o en otros casos excepcionales, la desinstalación estándar puede no ser suficiente. Luego, el servicio de soporte puede pedirle que realice una desinstalación avanzada para eliminar completamente AdGuard VPN de su Mac. Para hacer esto, haga lo siguiente:

1. Siga los pasos descritos en la sección ["Desinstalación estándar"](#how-to-uninstall-adguard-vpn-for-mac).

2. Abra "Finder" o "Spotlight" e ingrese `Llavero` en la búsqueda.

![Desinstalación avanzada. Introducir llavero](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)

3. Haga clic en el icono del programa encontrado e ingrese `com.adguard.mac.vpn` en la búsqueda. Si existe tal registro en los resultados de búsqueda, elimínelo.

4. Vuelva a "Finder" o "Spotlight" e ingrese `Terminal`.

![Desinstalación avanzada. Ingrese terminal](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)

5. Abra el programa e ingrese el comando — `defaults delete com.adguard.mac.vpn`.

6. Presione *Barra espaciadora* e ingrese otro comando: `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN se eliminó por completo de su Mac.

Puede obtener más información sobre AdGuard VPN para Mac en [este artículo](/adguard-vpn-for-mac/overview.md).