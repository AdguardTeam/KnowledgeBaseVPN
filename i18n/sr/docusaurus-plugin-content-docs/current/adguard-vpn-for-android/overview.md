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

Možete dodati domene (npr. `google.com`) ili poddomene (npr. `*.google.com`) web sajtove na *Izuzeci* na tri načina: unesite ih ručno u aplikaciju, ili direktno iz preglednika klikom na *Delite* i izabrati AdGuard VPN na otvorenoj listi ispod ili sa ugrađenih lista usluga podeljenih po kategorijama.

![Izuzeci](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)
> Postoje neke nijanse u ručnom dodavanju domena. Na primer, ako ručno isključite domen `yahoo.com`Svi `*.yahoo.com` poddomeni će takođe biti navedeni u izuzecima. However, domain names with other top-level domains, such as `yahoo.jp` or `yahoo.fr`, will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not get into the list. In this case, it’s more safe to use built-in lists of services, because we put there all subdomains related to each platform.

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

In the *Advanced settings*, you can find five sections. Možete nam *pomoći da postanemo bolji* prebacivanjem prekidača u gornjem bloku. Ova radnja će omogućiti AdGuard VPN-u da prikupi izveštaje o padu, tehničke i interakcijske podatke. Ova informacija će ići anonimno.

Odeljak *Operativni režim* vam omogućava da odaberete jednu od tri opcije: VPN, Proxy i režim kompatibilnosti. U *VPN režimu* sav saobraćaj se automatski usmerava kroz AdGuard VPN. Kada ste u *Proxy režimu* (SOCKS5), AdGuard VPN pokreće lokalni proxy server koji druge aplikacije mogu da koriste za usmeravanje svog saobraćaja kroz njega. Odaberite ovu opciju samo ako znate šta radite. Omogućen *Režim kompatibilnosti* omogućava AdGuard VPN i AdGuard blokatoru reklama da rade zajedno.

> Imajte na umu da su neke AdGuard VPN funkcije onemogućene u *Režimu kompatibilnosti*: izbor DNS servera, Kill Switch i auto-zaštita. Takođe, da biste upravljali tunelom aplikacije trebalo bi da otvorite AdGuard blokator reklama.

Sledeća dva odeljka su *Nivo vođenja evidencije* I *Dijagnostičke informacije*. Što se tiče prve opcije, nije preporučljivo omogućiti prošireni ili ekstremni nivo vođenja evidencije ukoliko to ne zahteva naš tim za podršku. Dijagnostičke informacije, lokalno uskladištene tehničke informacije o uređaju i vezama (IP adresa, lična slika, ping itd.), mogu nam se poslati u slučaju bilo kakvih tehničkih problema.

Poslednji odeljak *Naprednih postavki* Je *Postavke najnižeg nivoa*. Apelujemo na vas da ne ulazite u ovaj odeljak ukoliko niste visoko kvalifikovani ili je od vas to zatražio naš tim za podršku. Ovde je moguće omogućiti evidentiranje TUN interfejsa ili IPv6 protokol na VPN interfejsu, odabrati port proxy servera ili verziju Internet protokola koja bi trebalo da se koristi.

### Podrška

U odeljku *Podrška* možete ostaviti povratne informacije, prijaviti grešku, ili izvesti evidencije i sistemske informacije za dalje slanje podršci.
