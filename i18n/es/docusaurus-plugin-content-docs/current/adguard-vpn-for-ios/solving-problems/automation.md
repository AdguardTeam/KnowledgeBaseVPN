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
1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
2. Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
3. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

![Instrucciones. Parte 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the application, in our case it's Twitter, and select it. Then tap *Done* in the upper right corner of the screen. After it tap *Next* in the upper right corner of the screen. And in the opened window tap *Add Action*.

![Instrucciones. Parte 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

5. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

![Instrucciones. Parte 4](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
7. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, the tap *Done*.

Ahora tienes un nuevo escenario: AdGuard VPN se activará automáticamente al iniciar la aplicación de Twitter. Ahora debes crear otro comando que haga que AdGuard VPN se apague automáticamente cuando cierres la aplicación.

## Configuración del apagado automático de AdGuard VPN

![Instrucción. Parte 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)
1. In the same *Shortcuts* app start creating a new automation: click *+* in the upper right corner of the screen and then on the *Create Personal Automation* button. In the opened window choose *App*.
2. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

![Instrucción. Parte 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

![Instrucción. Parte 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

4. In the new window tap *Set VPN connection*.
5. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
6. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

¡Listo! AdGuard VPN ahora se habilitará en su dispositivo cada vez que abra la aplicación de Twitter y se deshabilitará cuando la cierre. Puede repetir los mismos pasos para cualquier otra aplicación. 