---
title: Instalación y remoción
sidebar_position: 2
---

## Requisitos del sistema

**Versión** del sistema operativo: macOS 10.15 (64 bits) o superior

**RAM**: por lo menos 2 GB

**Free disk space**: 120 MB

## Como instalar AdGuard VPN para Mac

1. Para instalar AdGuard VPN para Mac, solo tienes que seguir [este enlace](https://agrd.io/mac_vpn) o abrir un navegador, escribir *adguard-vpn.com* en la barra de direcciones y en la página abierta hacer clic en *Descargar*. ![Descarga AdGuard VPN desde el sitio web oficial](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. Espera hasta que finalice la descarga del archivo *AdGuardVPN.dmg* y ábrelo en la carpeta "Descargas".
3. Espera hasta que se abra la ventana del programa de instalación. Haz doble clic en el icono que aparece en él. ![Program installation window *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. Cuando inicie AdGuard VPN por primera vez, el sistema operativo mostrará una advertencia en la pantalla que indica que esta aplicación se ha descargado del Internet. Haz clic en *Abrir*.
5. Luego haz clic en *Continuar* e *Instalar*.

![Haga clic en Continuar](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![Haz clic en Instalar](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. Espera a que el instalador descargue los archivos necesarios.

¡AdGuard VPN para Mac está instalado!

## Como desinstalar AdGuard VPN para Mac

### Desinstalación estándar

Para desinstalar AdGuard VPN para Mac, siga dos pasos sencillos:

1. Abra "Finder" y vaya a la sección "Programas".

2. Selecciona *AdGuard VPN* en la lista, haz clic con el botón derecho y luego haz clic en *Mover a la Papelera*.

![Desinstalación estándar](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

### Desinstalación avanzada

Sometimes, as a result of incorrect removal or in other rare cases, the standard uninstallation may not be enough. In that case, our support may ask you to perform an advanced uninstall to completely remove AdGuard VPN from your Mac. Para hacer esto, haga lo siguiente:

1. Siga los pasos descritos en la sección ["Desinstalación estándar"](#how-to-uninstall-adguard-vpn-for-mac).
2. Abra "Finder" o "Spotlight" e introduce `Keychain` en la búsqueda. ![Desinstalación avanzada. Enter Keychain](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. Haga clic en el icono del programa encontrado e ingrese `com.adguard.mac.vpn` en la búsqueda. Si hay un registro de este tipo en los resultados de la búsqueda, elimínelo.
4. Vuelva a "Finder" o "Spotlight" e introduzca `Terminal`. ![Desinstalación avanzada. Enter Terminal](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. Abra el programa e ingrese el comando — `defaults delete com.adguard.mac.vpn`.
6. Pulse *Barra espaciadora* e ingrese otro comando: `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN se eliminó por completo de su Mac.

Puedes aprender más sobre AdGuard VPN para Mac en [este artículo](/adguard-vpn-for-mac/overview).
