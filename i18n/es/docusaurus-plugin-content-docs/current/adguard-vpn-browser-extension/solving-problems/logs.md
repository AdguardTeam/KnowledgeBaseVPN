---
title: Cómo recopilar y enviar registros
sidebar_position: 1
---

Hay varias formas de recopilar registros de la extensión del navegador AdGuard VPN, pero cualquiera que elijas, se recopilarán los mismos datos. En la extensión, los registros no se dividen en estándar y de debug. Y se proporcionan diferentes opciones para recopilar registros para aquellos casos en que un problema que encuentres te impida usar una u otra instrucción.

## Recopilación y envío de registros a través de la sección *Informar de un error*

1. Abre la extensión de navegador AdGuard VPN, si es posible, repite las acciones que provocaron el error. Anota la hora exacta en que se produjo este error.
1. Abre *Configuración* haciendo clic en el ícono del menú (☰) → *Soporte* → *Reportar un error*.
1. En el formulario abierto, deja una dirección de correo electrónico insertada automáticamente o ingresa otra y describe el error encontrado, incluida la hora en que ocurrió este error. Si no puede reproducir el problema, especifica con la mayor precisión posible cuándo ocurrió por última vez.
1. Asegúrate de que haya una marca de verificación junto a *Incluir el informe de diagnóstico en el mensaje* y presiona la tecla *Enviar*. De esta manera, enviarás registros junto con el informe de error.

## Recopilación y envío de registros a través del botón *Exportar registros*

1. Abre la extensión de navegador AdGuard VPN, si es posible, repite las acciones que provocaron el error. Ten en cuenta la hora exacta en que se produjo este error.
1. Haz clic con el botón derecho en el ícono de la extensión del navegador AdGuard VPN.
1. En el menú abierto, haz clic en *Exportar registros*.
1. Como resultado, el archivo de registros se guardará en tu dispositivo en formato `txt`.

Ahora que has recopilado los registros, debes enviarlos a nuestro equipo de desarrollo. Para ello:

1. Reportar un error en GitHub. En este artículo puedes encontrar instrucciones detalladas sobre cómo crear una propuesta en GitHub.
1. Envía un archivo con los registros y el tiempo de reproducción a `devteam@adguard.com` y adjunta un enlace a tu incidencia de GitHub. También puedes agregar un archivo con los registros y el tiempo de reproducción a Google Drive y compartirlo con `devteam@adguard.com` adjuntando el enlace de Google Drive a tu incidencia en GitHub.

## Recopilación y envío de registros a través de las herramientas del desarrollador del navegador

### Chrome

1. Abre la extensión de navegador AdGuard VPN, si es posible, repite las acciones que provocaron el error. Ten en cuenta la hora exacta en que se produjo este error.
1. Ir a `chrome://extensiones`
1. Activar el *modo desarrollador*

    ![El modo desarrollador *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Haz clic en `background.html`

    ![Fondo * border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Abre la pestaña *Consola*

    ![La pestaña Consola *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Abre el menú contextual y haz clic en *Guardar como…*

    ![Guardar como *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Ahora que has recopilado los registros, debes enviarlos a nuestro equipo de desarrollo. Para ello:

1. Reportar un error en GitHub. En este artículo puedes encontrar instrucciones detalladas sobre cómo crear una propuesta en GitHub.
1. Envía un archivo con registros y tiempo de reproducción a `devteam@adguard.com` y adjunta un enlace a tu problema de GitHub. También puedes agregar un archivo con registros y tiempo de reproducción a Google Drive y compartirlo con `devteam@adguard.com` adjuntando el enlace de Google Drive a tu propuesta en GitHub.

### Firefox

1. Abre la extensión de navegador AdGuard VPN, si es posible, repite las acciones que provocaron el error. Ten en cuenta la hora exacta en que se produjo este error.
1. Ir a `sobre:complementos`
1. Haz clic en *Debug Add-ons*

    ![Debug Add-ons * border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Haz clic en *Inspeccionar*

    ![Inspeccionar *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Ir a la pestaña *Consola*

    ![Consola *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Click *Save all Messages to File*

    ![Guardar * border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Ahora que has recopilado los registros, debes enviarlos a nuestro equipo de desarrollo. Para ello:

1. Reportar un error en GitHub. En este artículo puedes encontrar instrucciones detalladas sobre cómo crear una propuesta en GitHub.
1. Envía un archivo con registros y tiempo de reproducción a `devteam@adguard.com` y adjunta un enlace a tu problema de GitHub. También puedes agregar un archivo con registros y tiempo de reproducción a Google Drive y compartirlo con `devteam@adguard.com` adjuntando el enlace de Google Drive a tu propuesta en GitHub.
