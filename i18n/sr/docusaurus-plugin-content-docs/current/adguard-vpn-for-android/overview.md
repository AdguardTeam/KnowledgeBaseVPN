---
title: Pregled funkcija
sidebar_position: 1
---

## Šta je AdGuard VPN za Android?

VPN je idealna alatka koja obezbeđuje sigurnost i anonimnost svaki put kada pregledate Internet. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. Na taj način se čuva poverljivost podataka, kao i anonimnost korisnika, jer posmatrač nezavisnog proizvođača vidi IP adresu VPN servera, a ne IP stvarnog korisnika.

**VPN se često koristi za:**

- Čuvanje ličnih podataka čak i dok koristite javni Wi-Fi
- Sprečavanje praćenja aktivnosti na mreži maskiranjem IP adrese
- Skrivanje prave geolokacije da bi ostali anonimni

AdGuard VPN za Android sve to može da uradi za vas – pa čak i da ponudi nešto jedinstveno. To find out why AdGuard VPN is the better option — read [this article](/general/why-adguard-vpn).

## Kako početi sa kkorišćenjem AdGuard VPN-a za Android

Prvo preuzmite AdGuard VPN sa [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) i prijavite se na svoj AdGuard nalog. U slučaju da ga nemate – trebalo bi [da ga napravite](https://auth.adguard.com/login.html). Možete se direktno prijaviti pomoću akreditiva AdGuard naloga. Ili to uradite preko Google-a ili Facebook-a, ako je vaš AdGuard nalog registrovan koristeći istu email adresu.

## Glavni ekran

The main screen reflects the VPN status (Connected/Disconnected). There are also the *Connect/Disconnect* button and a list of available servers.

Svaki server ima svoju lokaciju i brzinu pinga, opisujući vreme odziva servera. The lower this rate, the faster the connection. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. You can connect to the fastest server by tapping the *Connect* button or by picking a location.

## Izuzeci

Učinili smo sve da vam olakšamo upravljanje listom izuzetaka vaših sajtova i aplikacija. AdGuard VPN će raditi samo tamo gde vi odaberete.

### Lista izuzetaka

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. Da biste došli do *Izuzetaka* kliknite na drugu ikonu sleva na dnu ekrana.

By default, AdGuard VPN works for all websites and apps except those added to exclusions, but you can easily switch to the other mode.

#### For websites

Možete dodati domene (npr. `google.com`) ili poddomene (npr. `*.google.com`) web sajtove na *Izuzeci* na tri načina: unesite ih ručno u aplikaciju, ili direktno iz preglednika klikom na *Delite* i izabrati AdGuard VPN na otvorenoj listi ispod ili sa ugrađenih lista usluga podeljenih po kategorijama.

![Izuzeci](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Postoje neke nijanse u ručnom dodavanju domena. Na primer, ako ručno isključite domen `yahoo.com`Svi `*.yahoo.com` poddomeni će takođe biti navedeni u izuzecima. Međutim, imena domena sa drugim domenima najvišeg nivoa, kao što su `yahoo.jp` Ili `yahoo.fr`, neće biti izuzeti. Ili možete dodati `youtube.com` u izuzetke, ali domen iste usluge `youtu.be` neće ući na listu. U ovom slučaju, sigurnije je koristiti ugrađene liste usluga, jer tu stavljamo sve poddomene vezane za svaku platformu.

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

You can choose the system default, dark or light theme of the app.

![Theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Advanced settings

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and App exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

Sledeća dva odeljka su *Nivo vođenja evidencije* I *Dijagnostičke informacije*. Što se tiče prve opcije, nije preporučljivo omogućiti prošireni ili ekstremni nivo vođenja evidencije ukoliko to ne zahteva naš tim za podršku. Dijagnostičke informacije, lokalno uskladištene tehničke informacije o uređaju i vezama (IP adresa, lična slika, ping itd.), mogu nam se poslati u slučaju bilo kakvih tehničkih problema.

Poslednji odeljak *Naprednih postavki* Je *Postavke najnižeg nivoa*. Apelujemo na vas da ne ulazite u ovaj odeljak ukoliko niste visoko kvalifikovani ili je od vas to zatražio naš tim za podršku. Ovde je moguće omogućiti evidentiranje TUN interfejsa ili IPv6 protokol na VPN interfejsu, odabrati port proxy servera ili verziju Internet protokola koja bi trebalo da se koristi.

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### Podrška

U odeljku *Podrška* možete ostaviti povratne informacije, prijaviti grešku, ili izvesti evidencije i sistemske informacije za dalje slanje podršci.
