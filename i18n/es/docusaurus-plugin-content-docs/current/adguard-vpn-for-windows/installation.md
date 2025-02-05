---
title: Installation and removal
sidebar_position: 2
---

## Requisitos del sistema

AdGuard VPN can only be installed on devices with **Microsoft Windows 11, 10, 8.1, 8, and Vista SP2 (web-based only)**.

## Instalación de AdGuard VPN para Windows

Para instalar AdGuard VPN para Windows, visita [nuestro sitio web](https://adguard-vpn.com/welcome.html) y haz clic en el botón *Descargar*. Después de eso, se descargará el `adguardVPNInstaller.exe`. Ejecute el instalador y siga sus instrucciones. El proceso tomará menos de un minuto.

Luego, deberás marcar la casilla para aceptar los términos del EULA y la Política de privacidad. Y en el último paso de la instalación, se le pedirá que autorice a través de su cuenta de AdGuard o a través de las redes sociales (Google, Apple, Facebook).

## Desinstalación de AdGuard VPN para Windows

If you decide to remove AdGuard VPN from your computer, use one of three options listed below:

- Click *Start* and find AdGuard VPN in the opened list. Right-click it and select *Uninstall*.
- Click *Start* → *Settings* → *Apps* → *Apps and features*. Find AdGuard VPN in the list, click it and choose *Uninstall*.
- Open the *Control Panel*, then click *Programs* → *Programs and Features* → *Uninstall or change a program*. Find AdGuard VPN in the list, right-click it and select *Uninstall*.

### Desinstalación avanzada {#advanced}

In case regular uninstall doesn’t work for any reason, you can try to use an advanced method. First of all, you need to [download the uninstaller tool](https://cdn.adguard-vpn.com/distr/windows/Uninstall_Utility.zip) created by our developers. Extrae el archivo a cualquier carpeta de tu PC, ejecuta el archivo **Adguard.UninstallUtility.exe** y permite que la aplicación realice cambios en tu dispositivo. Luego siga las instrucciones a continuación:

1. Select *AdGuard VPN* and *Standard* uninstall type, then click *Uninstall*:

    ![Standard uninstall *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard.jpg)

1. Click *OK* once the warning window pops up:

    ![Standard uninstall warning *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

    ![Uninstall finished *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard_complete.jpg)

    :::note

    Follow the next steps only if performing the first two steps wasn’t enough for some reason. We strongly recommend contacting our support team before using steps 3–4 of the advanced uninstall instructions.

    :::

1. Select *AdGuard VPN* and *Extended* uninstall type, then click *Uninstall*. Click *Yes, continue* in the window prompt:

    ![Extended uninstall *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended.jpg)

1. Click *OK* once the warning window pops up:

    ![Extended uninstall warning *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

    ![Uninstall finished *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended_complete.jpg)

AdGuard VPN is successfully uninstalled!

#### Running the uninstaller in console mode

Besides running the advanced uninstaller in its user-interactive mode, you can also use command-line arguments to uninstall AdGuard VPN for Windows. To do this, follow the instructions below:

1. Open Command Prompt by typing *cmd* from the Start menu.
2. Use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.
3. Use `/vpn` to uninstall AdGuard for Windows. It should look like this:

   `Adguard.UninstallUtility.exe /console /vpn`

4. You can also use `/advanced` to force the uninstaller to run in *Advanced mode* and `/settings` to force the uninstaller to remove user settings along with the application.

:::note

The use of the parameters `/console` and `/vpn` is necessary for a successful uninstall. The parameters `/advanced` and `/settings` are optional.

:::
