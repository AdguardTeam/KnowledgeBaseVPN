---
title: Atajos
sidebar_position: 1
sidebar_label: Atajos
---

La función Atajos, integrada en iOS, facilita la gestión de tus conexiones sin necesidad de abrir AdGuard VPN. Puedes colocar un acceso directo _Conectar_, _Desconectar_ o _Activar/Desactivar VPN_ en la pantalla de inicio, en el Centro de control o en un widget, o configurar una frase de Siri para conectarte con tu voz.

Los accesos directos también pueden incluir automatizaciones más complejas. Por ejemplo, es posible que tu aplicación bancaria no funcione con una VPN activada, pero siempre la quieres tener activada para Instagram, o quieres que tu VPN se desactive automáticamente cuando estés conectado a la red Wi-Fi de casa. La función Atajos te permite automatizar estos escenarios.

## Antes de que empieces

Asegurar que:

- Tienes instalada la aplicación Atajos en tu iPhone o iPad;
- AdGuard VPN está instalado;
- Has iniciado sesión en AdGuard VPN y tienes un perfil VPN instalado.

## Conectar o desconectar con un solo toque

AdGuard VPN proporciona tres accesos directos predefinidos: _Conectar_, _Desconectar_, _Activar/Desactivar VPN_. _Conectar_ activa la VPN y se conecta a la última ubicación utilizada. _Desconectar_ desactiva la VPN. _Alternar VPN_ permite alternar entre las dos opciones: se conecta cuando la VPN está desactivada y se desconecta cuando está activada.

You’ll find these shortcuts in the Shortcuts app: on iOS 16, look under _App Shortcuts_. Add any of them to the three places listed below.

On iOS 27, find AdGuard VPN shortcuts in the Shortcuts app’s _Library_ under _Apps_ → _AdGuard VPN_. If Shortcuts opens to _All Shortcuts_, tap the back arrow in the top-left corner to return to _Library_.

![Shortcuts on iOS 27](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/shortcuts_library_27.png)

### Home Screen

To set up a shortcut on your Home Screen, follow the quick instructions in the AdGuard VPN app. (_Settings_ → _Shortcuts_ → _Add shortcuts to the Home Screen_).

![In-app instructions \*mobile_border](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/in_app_instructions.png)

Instructions vary across iOS versions. Here are the instructions for iOS 16:

1. Go to the Shortcuts app and tap the plus (+) button.
2. Tap _Add Action_ and select _AdGuard VPN_.
3. Choose the shortcut you need: _Connect to VPN_, _Disconnect from VPN_, _Toggle VPN connection_, or _VPN status_.

![Add shortcut](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_shortcut_ios_16.png)

Here’s how to add the shortcut to your Home Screen.

1. Long press the shortcut and tap _Share_ → _Add to Home Screen_.
2. Customize the shortcut name and icon if you need to, then tap _Add_. The shortcut will appear on your Home Screen as a 1x1 icon.

![Add to Home Screen](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_home_screen_ios_16.png)

### Control Center

You can add an AdGuard VPN shortcut to the Control Center for quick access from anywhere on the device.

1. Open Control Center. On an iPhone with Face ID, swipe down from the top right. On an iPhone with a Home button, swipe up from the bottom.
2. Long-press an empty area and tap _Add a Control_.
3. Find _Shortcuts_ in the list and tap _Run Shortcut_, then tap _Choose_ and select your AdGuard VPN shortcut. The shortcut will now appear in your Control Center.

Note: The exact steps may vary depending on your iOS version.

![Add shortcut to Control Center](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_control_center.png)

### Widget

1. Long-press an empty area on your Home Screen until the apps jiggle, then tap _Edit_ in the top-left corner → _Add Widget_.
2. Find _Shortcuts_ in the list and choose a widget size. We recommend that you pick one that can display at least two shortcuts.
3. Tap _Add Widget_.
4. While in edit mode, tap the widget to open the configuration menu, set _Folder_ to _Custom_, and assign _Connect to VPN_ to one slot and _Disconnect from VPN_ to the other.

![Add shortcut as widget](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/widget.png)

## One tap to open any app with VPN on

If you need the VPN on for a certain app and nothing else, you can create a custom shortcut that will turn on AdGuard VPN and open the app you want to open — all in one tap. Here’s how to set it up.

1. Open the Shortcuts app, tap the plus (+) button, and search for AdGuard VPN. Add the _VPN status_ action.
2. Add an _If_ action. Shortcuts fills the condition in for you: it takes the VPN status from the previous step and compares it with _Connected_. Inside it, add _Open App_ and set it to the app you want — for example, YouTube.
3. Under _Otherwise_, add three actions in order: _AdGuard VPN_ → _Connect to VPN_, _Wait_ (set to 2 seconds), and _Open App_ (same app as above).
4. Tap the name at the top to set a custom icon and name, then test the shortcut with the play button.
5. Add the shortcut to the Home Screen by tapping the name and selecting _Add to Home Screen_.

![Add custom shortcut](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_custom_shortcut.png)

## Connect or disconnect with Siri

In the AdGuard VPN app, go to _Settings_ → _Shortcuts_ → _Set up Siri phrases_. You will then have two options: _Record a phrase to connect_ or _Record a phrase to disconnect_.

![Connect with Siri](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.17/siri_connect.png)

Choose _Record a phrase to connect_ or _Record a phrase to disconnect_, then say the phrase you want, for example “Hey Siri, connect to AdGuard VPN.” Once recorded, say the same phrase to Siri any time to run it.

## Automating AdGuard VPN for specific apps

Some apps, like banking apps, don’t work with a VPN on. Set up two automations so the VPN turns off while you use the app and turns back on once you’re done. When set up correctly, automation can be more convenient than manually launching a shortcut — you don’t have to tap on a Home Screen icon to open the shortcut, simply opening the app is enough. Besides, you can include several apps in one automation. You can use automations to turn AdGuard VPN on or off when you open an app, when you close an app, and when you join or disconnect from your home Wi-Fi.

[How to set up automations on your iPhone or iPad](/adguard-vpn-for-ios/features/automation/)
