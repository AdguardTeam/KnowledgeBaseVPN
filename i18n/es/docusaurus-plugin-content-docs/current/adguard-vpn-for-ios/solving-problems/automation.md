---
title: Cómo configurar la automatización de AdGuard VPN para las aplicaciones de iPhone y iPad
sidebar_position: 1
sidebar_label: Cómo configurar la automatización de AdGuard VPN
---

AdGuard VPN tiene una sección *Exclusiones* y dos modos de funcionamiento - *General* y *Selectivo*. En *Modo general* AdGuard VPN funciona en todas partes excepto en los sitios añadidos a las exclusiones. Por el contrario, en *Modo selectivo*, la VPN no funciona en ningún sitio excepto en los que figuran en la lista de exclusiones. Tenga en cuenta que para cada modo hay que crear una lista distinta.

Como puede notar, solo sitios web se pueden agregar a la sección *Exclusiones*. Para ajustar AdGuard VPN para las aplicaciones es necesario utilizar otra función. Nuestras aplicaciones de desktop tienen el módulo *Split tunneling* y la aplicación para Android tiene *Apps settings*. Estos ajustes le permiten decidir en qué aplicaciones debe ejecutarse AdGuard VPN.

Pero, como suele ocurrir, debido a una serie de matices técnicos, es imposible implementar una función tan útil para iOS, al menos por ahora. Por lo tanto, le ofrecemos una forma alternativa de automatizar AdGuard VPN para aplicaciones en iPhones y iPads.

## Configuración de la activación automática de AdGuard VPN

Si necesita una VPN para una o más aplicaciones, configure AdGuard VPN para que se active y desactive automáticamente cuando las abra y las cierre. Vaya a la pestaña Exclusiones, seleccione el modo General y siga las instrucciones. Aquí describimos cómo crear automatización para Twitter, pero puede elegir cualquier otra aplicación.

![Instrucciones. Parte 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)
* Descargue la aplicación [the *Shortcuts*](https://apps.apple.com/us/app/shortcuts/id915249334) de la App Store y vaya a la sección *Automatización* tocando el ícono del reloj en la parte inferior de la pantalla.
* Toque el botón *Create Personal Automation*, luego busque *App* en la lista que se abre y tóquelo.
* En la siguiente ventana, asegúrese de que la opción *está abierta* y, a continuación, pulse *Elija* para elegir la aplicación.

![Instrucciones. Parte 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
* Comienza ingresando el nombre de la aplicación, en nuestro caso es Twitter, y selecciónalo. Luego toque *Listo* en la esquina superior derecha de la pantalla. Luego haz clic en *Listo* en la esquina superior derecha de la pantalla. Y en la ventana abierta, toque *Agregar acción*.

![Instrucciones. Parte 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

* Comience a ingresar "AdGuard VPN" y seleccione la aplicación AdGuard VPN. En la nueva ventana, haz clic en *Establecer conexión VPN*.

![Instrucciones. Parte 4](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
* Asegúrese de que las variables digan *Active* Conexión VPN ** y toque *Siguiente*.
* En la siguiente ventana, mueva el control deslizante junto a la opción *Preguntar antes de ejecutar* a la posición inactiva. Confirme su elección y pulse *Hecho*.

Ahora tienes un nuevo escenario: AdGuard VPN se activará automáticamente al iniciar la aplicación de Twitter. Ahora debes crear otro comando que haga que AdGuard VPN se apague automáticamente cuando cierres la aplicación.

## Configuración del apagado automático de AdGuard VPN

![Instrucción. Parte 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)
* En la misma aplicación *Atajos* comience a crear una nueva automatización: haz clic en *+* en la esquina superior derecha de la pantalla y luego en el botón *Crear automatización personal*. En la ventana abierta, seleccione *App*.
* Asegúrate de que la opción *Está cerrado* esté seleccionada y desmarque la casilla debajo de la opción adyacente. Luego haz clic *Elije*.

![Instrucción. Parte 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
* Comienza ingresando en *Twitter* y selecciona la aplicación. Luego haz clic en *Listo* en la esquina superior derecha de la pantalla. Seleccione *Agregar acción* y seleccione AdGuard VPN.

![Instrucción. Parte 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

* En la nueva ventana, haz clic en *Establecer conexión VPN*.
* A continuación, haz clic en la palabra *On* para que cambie a la palabra *Off*, y luego toque *Siguiente* en la esquina superior derecha de la pantalla.
* Deshabilite la opción *Preguntar antes de ejecutar* y confirme su selección. Luego toque *Listo* en la esquina superior derecha de la pantalla para completar el proceso

¡Listo! AdGuard VPN ahora se habilitará en su dispositivo cada vez que abra la aplicación de Twitter y se deshabilitará cuando la cierre. Puede repetir los mismos pasos para cualquier otra aplicación. 