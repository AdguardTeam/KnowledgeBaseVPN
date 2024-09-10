---
title: Cómo configurar la automatización de AdGuard VPN para las aplicaciones de iPhone y iPad
sidebar_position: 2
sidebar_label: Cómo configurar la automatización de AdGuard VPN
---

No hay exclusiones de aplicaciones en AdGuard VPN para iOS. Sin embargo, existe una manera de automatizar AdGuard VPN para aplicaciones en iPhone y iPad.

## Configuring automatic connection to VPN

Si necesita una VPN para una o más aplicaciones, configure AdGuard VPN para que se active y desactive automáticamente cuando las abra y las cierre. Vaya a la pestaña Exclusiones, seleccione el modo General y siga las instrucciones. Aquí describimos cómo crear automatización para Twitter, pero puede elegir cualquier otra aplicación.

![Instrucciones. Parte 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Descarga la aplicación [the *Shortcuts*](https://apps.apple.com/us/app/shortcuts/id915249334) de la App Store y ve a la sección *Automatización* tocando el ícono del reloj en la parte inferior de la pantalla.
2. Toca el botón *Create Personal Automation*, luego busca *App* en la lista que se abre y tócalo.
3. En la siguiente ventana, asegúrate de que la opción *está abierta* y, a continuación, pulsa*Elegir* para elegir la aplicación.

![Instrucciones. Parte 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the app (in our case it’s Twitter) and select it. Toca *Listo* y luego toca *Siguiente* en la esquina superior derecha de la pantalla. En la ventana abierta, toca *Agregar acción*.

![Instrucciones. Parte 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. Comienza a ingresar "AdGuard VPN" y selecciona la aplicación AdGuard VPN. En la nueva ventana, haz clic en *Establecer conexión VPN*.

![Instrucciones. Parte 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Asegúrate de que las variables digan *Active* Conexión VPN ** y toca *Siguiente*.
7. En la siguiente ventana, mueve el control deslizante junto a la opción *Preguntar antes de ejecutar* a la posición inactiva. Confirma tu elección y luego toca *Listo*.

Ahora tienes un nuevo escenario: AdGuard VPN se activará automáticamente al iniciar la aplicación de Twitter. Ahora debes crear otro comando que haga que AdGuard VPN se apague automáticamente cuando cierres la aplicación.

## Configuring automatic disconnection from VPN

![Instrucción. Parte 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. En la misma app *Shortcuts*, comienza a crear una nueva automatización: toca *Automatización* → *Crear automatización personal* → *App*.
2. Asegúrate de que la opción *Está cerrado* esté seleccionada y desmarca la casilla debajo de la opción adyacente. Luego haz clic *Eligir*.

![Instrucción. Parte 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Comienza ingresando en *Twitter* y selecciona la aplicación. Luego toca *Listo* en la esquina superior derecha de la pantalla. Selecciona *Agregar acción* y selecciona AdGuard VPN.

![Instrucción. Parte 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. En la nueva ventana, haz clic en *Establecer conexión VPN*.
5. A continuación, haz clic en la palabra *On* para que cambie a la palabra *Off*, y luego toca *Siguiente* en la esquina superior derecha de la pantalla.
6. Deshabilita la opción *Preguntar antes de ejecutar* y confirma tu selección. Luego toca *Listo* en la esquina superior derecha de la pantalla para completar el proceso.

¡Listo! AdGuard VPN ahora se habilitará en su dispositivo cada vez que abra la aplicación de Twitter y se deshabilitará cuando la cierre. Puede repetir los mismos pasos para cualquier otra aplicación.
