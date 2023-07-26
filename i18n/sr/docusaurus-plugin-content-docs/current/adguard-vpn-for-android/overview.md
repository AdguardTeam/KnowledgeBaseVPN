---
title: Pregled funkcija
sidebar_position: 1
---

## Šta je AdGuard VPN za Android?

VPN je idealna alatka koja obezbeđuje sigurnost i anonimnost svaki put kada pregledate Internet. [Kako to funkcioniše?](/general/how-vpn-works.md) Bez ulaženja u tehničke detalje, možemo reći da VPN kreira bezbedan šifrovani tunel između računara korisnika ili mobilnog uređaja i udaljenog VPN servera. Na taj način se čuva poverljivost podataka, kao i anonimnost korisnika, jer posmatrač nezavisnog proizvođača vidi IP adresu VPN servera, a ne IP stvarnog korisnika.

**VPN se često koristi za:**

* Čuvanje ličnih podataka čak i dok koristite javni Wi-Fi
* Sprečavanje praćenja aktivnosti na mreži maskiranjem IP adrese
* Skrivanje prave geolokacije da bi ostali anonimni

AdGuard VPN za Android sve to može da uradi za vas – pa čak i da ponudi nešto jedinstveno. Da biste saznali zašto je AdGuard VPN bolja opcija – pročitajte [ovaj članak](/general/why-adguard-vpn.md).

## Kako početi sa kkorišćenjem AdGuard VPN-a za Android

Prvo preuzmite AdGuard VPN sa [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) i prijavite se na svoj AdGuard nalog. U slučaju da ga nemate – trebalo bi [da ga napravite](https://auth.adguard.com/login.html). Možete se direktno prijaviti pomoću akreditiva AdGuard naloga. Ili to uradite preko Google-a ili Facebook-a, ako je vaš AdGuard nalog registrovan koristeći istu email adresu.

## Glavni ekran

Na glavnom ekranu postoje dve trake koje odražavaju status aplikacije (Povezano/Prekinuto veza) i izabrani režim izuzetaka ([Opšte/selektivno](#lists-of-exclusions)). Na istom ekranu, postoji takođe *Poveži se/Prekini vezu* dugmići i lista dostupnih servera.

Svaki server ima svoju lokaciju i brzinu pinga, opisujući vreme odziva servera. Što je ova stopa niža, vaša veza je brža. Najbrže opcije su uvek prikazane na vrhu liste koja se sastoji od više od 50 lokacija u desetinama zemalja. Možete se povezati sa najbržim serverom tako što ćete dodirnuti *Poveži/prekini vezu* ili odabirom lokacije.

## Izuzeci

Učinili smo sve da vam olakšamo upravljanje listom izuzetaka vaših sajtova i aplikacija. AdGuard VPN će raditi samo tamo gde vi odaberete.

### Lista izuzetaka

Liste izuzetaka vam omogućavaju da izaberete lokacije za koje VPN treba da bude omogućen, a za koje – onemogućen. Da biste došli do *Izuzetaka* kliknite na drugu ikonu sleva na dnu ekrana.

Postoje dva režima: u *Opštem režimu* lokacije sa liste izuzetaka su isključene i u *Selektivnom režimu*, oni će biti jedini gde AdGuard VPN radi.

You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites to the *Exclusions* in three ways: enter them manually in the app, or right from the browser by clicking the *Share* button and selecting AdGuard VPN in the opened list below, or from built-in lists of services divided by categories.

![Exclusions](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)
> There are some nuances in manual adding domains. For example, if you manually exclude the domain `yahoo.com`, all `*.yahoo.com` subdomains will also be listed in exclusions. However, domain names with other top-level domains, such as `yahoo.jp` or `yahoo.fr`, will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not get into the list. In this case, it’s more safe to use built-in lists of services, because we put there all subdomains related to each platform.

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name: **fully-enabled** status is marked with a white check mark on green background, **fully-disabled** — with a gray box, and **partly-enabled**, which means that one or more parameters were changed — with a green square on white background. Good news: you can always return to the default view of service lists in case you’ve deleted or disabled any domains from there.

![Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Another useful feature is *Import/Export exclusions*. There are only four steps to reach the goal:

1. Open AdGuard VPN on the device/in the browser from where you want to export your lists of exclusions. Find the appropriate section and click the *Export* button. The `adguard_vpn_exclusions.zip` archive will be downloaded.
2. There are two `.txt` files inside the archive, one for each of the *General* and *Selective* lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as is.
3. When transferring between different devices, don't forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your Windows device to your Android, make sure to send the `.zip` file to your Android beforehand.
4. Open AdGuard VPN on the device where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click the *Import* button and select the archive.

![Import/Export](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

### Apps Settings

As we mentioned above, not only websites can be easily added to the exclusions. Choose for which applications you need AdGuard VPN and for which you don't. Tap the icon next to the *Exclusions lists* icon at the bottom of the screen, to open Apps settings. By default, AdGuard VPN works with all apps, but you can toggle the slider next to any app in the list — and disable AdGuard VPN for it.

If the *Compatibility mode* with AdGuard is enabled, you can only manage apps through the AdGuard Ad Blocker. Therefore, when you tap the button, the AdGuard app opens.

![Apps settings](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Settings

You can reach *Settings* by pressing the gear icon at the bottom right of the screen. The first section there is *App Settings*: configure AdGuard VPN for Android as you need by selecting different options there.

![Apps settings](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN autostart

The slider switched to the right enables an AdGuard VPN autostart after the device's startup.

### DNS servers

The purpose of the [Domain name system](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) (DNS) is to translate websites' names into something browsers can understand, i.e. IP addresses. This job is performed by DNS servers. AdGuard VPN for Android offers a choice of several DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with SafeSearch and adult content blocking. There is also an option to add a custom DNS server.

### Auto-protection

This feature enables AdGuard VPN automatically when your device connects to a cellular or Wi-Fi network.

### Kill Switch

You can set up the Kill Switch function on your Android device by following simple instructions on the screen. Why would you do this? If for some reason your VPN connection suddenly drops while you are using a mobile network or public Wi-Fi, Kill Switch will automatically terminate the internet connection, keeping attackers away from seizing your information.

Note that if Kill Switch is on, *Apps settings* and *Exclusions* won’t work.

### Theme

You can choose the system default, dark or light theme of the app.

![Theme](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Advanced settings

In the *Advanced settings*, you can find five sections. You can *Help us to become better* by toggling the switch in the upper block. This action will allow AdGuard VPN to gather crash reports, technical and interaction data. This information will come in anonymously.

*Operating mode* section allows you to choose one of three options: VPN, Proxy, and Compatibility mode. In *VPN mode* all traffic is routed through AdGuard VPN automatically. When the *Proxy mode* (SOCKS5) is on, AdGuard VPN runs a local proxy server which can be used by other apps to route their traffic through it. Choose this option only if you know what you are doing. Enabled *Compatibility mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

> Please note that some AdGuard VPN features are disabled in *Compatibility mode*: DNS server selection, Kill Switch and Auto-protection. Also, to manage application tunneling you should open AdGuard Ad Blocker application.

The next two sections are *Logging level* and *Diagnostic info*. Concerning the first option, it is not recommended to enable the Extended or Extreme logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

The last section of *Advanced settings* is *Low-level settings*. We urge you not to enter this section unless you are highly qualified or have been asked to do so by our support team. Here it is possible to enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used.

### Support

At the *Support* section you can leave feedback, report a bug, or export logs and system info for further submission to the helpdesk.
