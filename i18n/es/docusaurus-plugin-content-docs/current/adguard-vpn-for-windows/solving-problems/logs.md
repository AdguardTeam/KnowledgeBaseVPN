---
title: Cómo recopilar y enviar registros
sidebar position: 1
---

If you encounter any problems while using AdGuard VPN for Windows, you can inform us about it. We would appreciate it if you also send application logs, as they help us resolve issues much quicker.

## Collecting logs

### Standard logs

By default, AdGuard VPN for Windows uses the standard logging level, which is the basic collection of data about running processes of the app. Before sending the logs, please open AdGuard VPN for Windows and, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.

### Extended logs

En la mayoría de los casos, el nivel de registro por defecto es suficiente para rastrear posibles errores. Pero hay casos en los que se requiere información técnica más detallada sobre el dispositivo y las conexiones, y entonces nuestro equipo de soporte te pedirá que active el nivel de registro ampliado. Para enviar este tipo de registros, siga estos pasos:

1. Open AdGuard VPN for Windows and select **Settings** in the menu above → **App settings** → **Advanced settings** → **Logging level**.

1. En la sección **Nivel de registro**, seleccione **Registrar todo**.

    ![Logging level *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. Repita las acciones que llevaron al error y anote la hora en que se produjo.

1. Vuelva a cambiar el nivel de registro a **Registro por defecto**.

### Trace logs

Sometimes our support team might ask you to send them trace logs. To do this, you need to follow these steps:

1. Right-click the AdGuard VPN icon in the tray menu and choose **Exit AdGuard VPN**.

    ![Exit *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/exit.png)

    If you see the warning message, agree to stop the service.

    ![Attention *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/attention.png)

1. Open the console (type `cmd` in the start panel).

1. Run the application with the command `C:\"Program Files (x86)"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 64-bit Windows, and `C:\"Program Files"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 32-bit.

1. Reproduce the issue. We strongly recommend that you note the exact time when you reproduce the problem: this will help our support team to find relevant log entries and resolve the problem faster.

1. Export the recorded logs: **Support** → **Export logs and system info**.

Don’t worry if your log file is large. We need to know as many details as possible in order to fix your problem.

## Sending logs

To send logs to our support team, please follow the next steps:

1. Click **Support** in the menu above → **Report a bug**.

    ![Report a bug *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/support_report.jpeg)

1. In the form that opens, enter your email address and describe the error you found, including the time it occurred. If you can’t reproduce the problem, be as specific as possible about when it last occurred.

    ![Report *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/report_bug.png)

1. Hay una marca de verificación junto a **Enviar información detallada sobre el sistema**, lo que significa que cuando se envía un informe, también se envían los registros.

> Si por alguna razón le resulta más cómodo enviarnos los registros de otra manera, puede exportarlos usted mismo. Para ello, vaya a **Soporte** → **Exportar registros e información del sistema**.

![Export *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**Note**: if you encounter any problems while trying to export logs, there is an alternative way. Please follow these steps:

1. Open the Explorer app

1. Paste `%programdata%/adguardvpn` in the search box

1. Find the folder called **Logs**

1. Archive the folder

1. Send it to our support team
