---
title: Installation and removal
sidebar_position: 2
---

## Requisitos do Sistema

AdGuard VPN can only be installed on devices with **Microsoft Windows 11, 10, 8.1, 8, and Vista SP2 (web-based only)**.

## Instalação do AdGuard VPN para Windows

Para instalar o AdGuard VPN para Windows, visite [nosso site](https://adguard-vpn.com/welcome.html) e clique no botão *Download*. Depois disso, o `adguardVPNInstaller.exe` será baixado. Execute o instalador e siga suas instruções. O processo levará menos de um minuto.

Em seguida, você precisará marcar a caixa para aceitar os termos do EULA e a Política de Privacidade. E na última etapa da instalação, você será solicitado a autorizar através de sua conta AdGuard ou através de redes sociais (Google, Apple, Facebook).

## Desinstalação do AdGuard VPN para Windows

If you decide to remove AdGuard VPN from your computer, use one of three options listed below:

- Click *Start* and find AdGuard VPN in the opened list. Right-click it and select *Uninstall*.
- Click *Start* → *Settings* → *Apps* → *Apps and features*. Find AdGuard VPN in the list, click it and choose *Uninstall*.
- Open the *Control Panel*, then click *Programs* → *Programs and Features* → *Uninstall or change a program*. Find AdGuard VPN in the list, right-click it and select *Uninstall*.

### Desinstalação avançada {#advanced}

In case regular uninstall doesn’t work for any reason, you can try to use an advanced method. Antes de mais nada, é necessário [baixar a ferramenta de desinstalação](https://cdn.adtidy.org/distr/windows/Uninstall_Utility.zip) criada por nossos programadores. Extraia o arquivo para qualquer pasta em seu PC, execute o arquivo **Adguard.UninstallUtility.exe** e permita que o aplicativo faça alterações em seu dispositivo. Em seguida, siga as instruções abaixo:

1. Select *AdGuard VPN* and *Standard* uninstall type, then click *Uninstall*:

    ![Standard uninstall *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard.jpg)

1. Click *OK* once the warning window pops up:

    ![Standard uninstall warning *border](https://cdn.adtidy.org/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

    ![Uninstall finished *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard_complete.jpg)

    :::note

    Follow the next steps only if performing the first two steps wasn’t enough for some reason. We strongly recommend contacting our support team before using steps 3–4 of the advanced uninstall instructions.

    :::

1. Select *AdGuard VPN* and *Extended* uninstall type, then click *Uninstall*. Click *Yes, continue* in the window prompt:

    ![Extended uninstall *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended.jpg)

1. Click *OK* once the warning window pops up:

    ![Extended uninstall warning *border](https://cdn.adtidy.org/content/kb/vpn/windows/vpn_standard_warning.jpg)

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
