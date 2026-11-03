---
title: Automatización
sidebar_position: 2
sidebar_label: Automatización
---

_Automatización_ es una característica de la app Atajos que realiza una acción por ti de forma automática según las condiciones que elijas. Por ejemplo, puede desactivar la VPN de AdGuard en el momento en que abres una app y volver a activarla cuando cierras esa aplicación.

Esto es útil si quieres desactivar AdGuard VPN para algunas apps pero no para otras. AdGuard VPN para iOS no tiene exclusiones de apps, por lo que la automatización es la forma más cercana de obtener el mismo resultado sin tener que activar y desactivar la VPN tú mismo cada vez.

Así es como configurar una automatización que se desconecta de la VPN de AdGuard cuando abres una app y la vuelve a activar al cerrarla.

## Desactiva la VPN de AdGuard cuando abras una app

1. En la app Atajos, ve a _Automatización_ y pulsa _Nueva Automatización_ o el botón más (+) en la esquina superior derecha.
2. Elige _App_, selecciona una o varias apps y marca _Está abierto_.
3. Activa _Ejecutar inmediatamente_ y desactiva _Notificar cuando ejecute_.
4. Pulsa _Siguiente_, selecciona AdGuard VPN y elige _Desconectar_.

![Automatización de aplicaciones] (https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation1-combined.png)

Para volver a activar la VPN de AdGuard cuando cierres la misma app, repite los pasos anteriores, pero selecciona _Está cerrado_ en el paso 2 y configura la acción del paso 4 como _Conectar_.

## Desactiva la VPN de AdGuard cuando te conectes al Wi-Fi de casa

Si no necesitas usar VPN en casa, configúrala para que se apague cuando te conectes a la red Wi-Fi de casa y vuelva a encenderla cuando salgas.

1. En la app Atajos, ve a _Automatización_ y toca _Nueva Automatización_ o '+' en la esquina superior derecha.
2. Elige _Wi-Fi_, selecciona _Se une_ y elige tu red de inicio.
3. Activa _Ejecutar inmediatamente_ y _Ejecutar tras la interrupción de conexión_.
4. Pulsa _Siguiente_, selecciona AdGuard VPN y selecciona _Desconectar_.

![Automatización Wi-Fi \*mobile] (https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation-2-combined.png)

## Vuelve a activar AdGuard VPN al salir

Repite los pasos anteriores, pero elige _Está desconectado_ en lugar de _Está conectado_, activa _Ejecutar inmediatamente_ y establece la acción en _Conectar_.
