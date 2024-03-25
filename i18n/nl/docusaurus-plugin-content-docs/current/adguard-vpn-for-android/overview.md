---
title: Overzicht van functies
sidebar_position: 1
---

## Wat is AdGuard VPN voor Android?

Een VPN is een ideaal hulpmiddel dat veiligheid en anonimiteit biedt elke keer dat u op internet surft. [Hoe werkt het?](/general/how-vpn-works) Zonder op technische details in te gaan, kunnen we zeggen dat VPN een veilige gecodeerde verbinding (een zogeheten tunnel) creëert tussen het apparaat van een gebruiker en een externe VPN-server. Op deze manier blijft de vertrouwelijkheid van gegevens behouden, net als de anonimiteit van de gebruiker, omdat een externe waarnemer het IP-adres van de VPN-server ziet en niet het IP-adres van de daadwerkelijke gebruiker.

**VPN wordt vaak gebruikt voor:**

- Het veilig houden van persoonlijke gegevens zelfs als je openbare Wi-Fi gebruikt
- Het voorkomen dat online activiteiten gevolgd worden door het IP adres te maskeren
- De echte geolocatie verbergen om anoniem te blijven

AdGuard VPN voor Android kan het allemaal voor u doen – en zelfs iets unieks bieden. Om erachter te komen waarom AdGuard VPN de betere optie is, lees [dit artikel](/general/why-adguard-vpn).

## Hoe u start met het gebruiken van AdGuard VPN voor Android

Download eerst AdGuard VPN van [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) en log in op uw AdGuard-account. Als je die nog niet hebt, moet je die maken op [](https://auth.adguard.com/login.html). U kunt direct inloggen met uw AdGuard-accountgegevens. Of doe het via Google of Facebook, als uw AdGuard-account met hetzelfde e-mailadres is geregistreerd.

## Hoofdpagina

Het hoofdscherm geeft de VPN-status weer (Verbonden/Verbinding verbroken). Er zijn ook de knoppen *Verbinding maken/Verbinding verbreken* en een lijst met beschikbare servers.

Elke server heeft zijn locatie en zijn pingsnelheid, die de responstijd van de server beschrijven. Hoe lager dit getal, hoe sneller de verbinding. De snelste servers verschijnen altijd bovenaan de lijst die bestaat uit meer dan 50 locaties in tientallen landen. Je kunt verbinding maken met de snelste server door op de knop *Verbinden* te tikken of door een locatie te kiezen.

## Uitzonderingen

We hebben er alles aan gedaan om het gemakkelijk te maken uw site- en app-uitsluitingslijsten te beheren. AdGuard VPN werkt alleen waar u kiest.

### Lijst met uitsluitingen

Met uitsluitingslijsten kunt u de VPN-verbinding voor specifieke websites en apps beheren. Om *Uitsluitingen*te openen, tikt u op het tweede icoon van links onder aan het scherm. Om *Uitsluitingen*te openen, tikt u op het tweede icoon van links onder aan het scherm.

Standaard is AdGuard VPN actief oor alle websites en apps, behalve voor de websites en apps die zijn toegevoegd aan de uitsluitingen, maar u kunt eenvoudig overschakelen naar de andere modus.

#### Voor websites

U kunt domeinen (bijvoorbeeld `google.com`) of subdomeinen (bijvoorbeeld `*.google.com`) van websites toevoegen aan de *Uitsluitingen* op drie manieren: voer ze handmatig in de app in, of rechtstreeks vanuit de browser door op de knop *Delen* te klikken en AdGuard VPN te selecteren in de geopende lijst hieronder, of vanuit de ingebouwde in lijsten met diensten, onderverdeeld in categorieën.

![Exclusions](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

There are some nuances in manual adding domains. For example, if you manually exclude the domain `yahoo.com`, all `*.yahoo.com` subdomains will also be listed in exclusions. However, domain names with other top-level domains, such as `yahoo.jp` or `yahoo.fr`, will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not get into the list. In this case, it’s more safe to use built-in lists of services, because we put there all subdomains related to each platform.

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 Good news: you can always return to the default view of service lists in case you’ve deleted or disabled any domains from there.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Another useful feature is *Import/Export exclusions*. There are only four steps to reach the goal:

1. Open AdGuard VPN on the device/in the browser from where you want to export your lists of exclusions. Find the appropriate section and click the *Export* button. The `adguard_vpn_exclusions.zip` archive will be downloaded.
2. There are two `.txt` files inside the archive, one for each of the lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as is.
3. When transferring between different devices, don't forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your Windows device to your Android, make sure to send the `.zip` file to your Android beforehand.
4. Open AdGuard VPN on the device where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click the *Import* button and select the archive.

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### For apps

As we mentioned above, not only websites can be easily added to the exclusions. Choose for which apps you need AdGuard VPN and for which you don't.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Settings

You can reach *Settings* by pressing the gear icon at the bottom right of the screen. The first section there is *App Settings*: configure AdGuard VPN for Android as you need by selecting different options there.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN autostart

The slider switched to the right enables an AdGuard VPN autostart after the device's startup.

### DNS servers

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. There is also an option to add a custom DNS server.

### Auto-protection

This feature enables AdGuard VPN automatically when your device connects to a cellular or Wi-Fi network.

### Kill Switch

You can set up the Kill Switch function on your Android device by following simple instructions on the screen. Why would you do this? If for some reason your VPN connection suddenly drops while you are using a mobile network or public Wi-Fi, Kill Switch will automatically terminate the internet connection, keeping attackers away from seizing your information.

Note that if Kill Switch is on, *Apps settings* and *Exclusions* won’t work.

### Theme

You can choose the system default, system dynamic, dark or light theme of the app.

![System dynamic theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![Light theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![Dark theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### Advanced settings

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and App exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

The next two sections are *Logging level* and *Diagnostic info*. Concerning the first option, it is not recommended to enable the Extended or Extreme logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

The last section of *Advanced settings* is *Low-level settings*. We urge you not to enter this section unless you are highly qualified or have been asked to do so by our support team. Here it is possible to enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used.

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### Support

At the *Support* section you can leave feedback, report a bug, or export logs and system info for further submission to the helpdesk.
