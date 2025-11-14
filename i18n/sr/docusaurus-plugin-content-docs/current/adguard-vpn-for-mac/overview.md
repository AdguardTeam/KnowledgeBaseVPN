---
title: Pregled funkcija
sidebar_position: 1
---

AdGuard VPN za Mac je VPN usluga na radnoj površini. AdGuard VPN je u potpunosti kompatibilan sa AdGuard blokatorom reklama, mogu se koristiti zajedno i radiće neprimetno. Da vidimo koje karakteristike ima da ponudi.

Note that **you can’t use AdGuard VPN for Mac unless you have logged into your AdGuard account**. Možete da se prijavite pomoću svog AdGuard naloga ili sa spoljašnjim nalogom, tačnije preko Apple-a, Google-a ili Facebook-a. Uverite se da je vaš spoljni nalog povezan sa istom e-adresom kao i vaš AdGuard nalog. Ako postoji odgovarajuća pretplata na vašem AdGuard nalogu, ona će biti automatski aktivirana na aplikaciji radne površine. Still don’t have an AdGuard account? Create it [here](https://auth.adguardaccount.com/registration.html).

:::note Compatibility

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Big Sur (version 11).

:::

## Početni ekran

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/saved_locations.png)

Prva kartica je *Početni* Ekran. Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Ping je vreme odziva VPN servera. The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. U nastavku možete videti kompletnu listu lokacija. The search field makes it easy to find the location you need.

:::note

Korisnici besplatne verzije mogu da se povežu samo sa određenim lokacijama, dok su druge blokirane. Osim toga, u besplatnoj verziji postoji ograničenje saobraćaja od 3 GB mesečno.

:::

### Saved locations

On the same tab, you can save your favorite locations to access them quickly.

Just hover over a location, click the bookmark icon that appears, and it will be saved. Your marked locations will then show up in the *Saved* tab.

![Saved locations](https://cdn.adguard-vpn.com/content/release_notes/vpn/mac/v2.5/Saved_locs_EN_2.png)

## Izuzeci

![Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Exclusions screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Also you can not only add websites to Exclusions but also choose among the lists of popular services. The lists are divided into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Any of these services can be added to Exclusions in one click! It’s especially convenient if you use Selective mode.

Exclusion list can be easily configured. If you’ve added a domain and some of its subdomains, they’ll be grouped inside the root one. When adding a root domain (`example.com`) its mask is added too (`*.example.com`).

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

If you’ve added a service, changed or removed something and now want to recover initial settings, just press *Reset to default* next to the domain — this action will restore any missing domains and tick all checkboxes.

What’s more, ready-made exclusions lists can be transferred to other devices with installed AdGuard VPN. To export exclusions, follow the four-step instruction below:

1. Otvorite AdGuard VPN na uređaju sa kojeg želite da izvezete liste izuzetaka. Pronađite odgovarajući odeljak i kliknite na *Izvoz* Dugme. `exclusions.zip` arhiva će biti preuzeta.
2. Ima dve `..txt` datoteke unutar arhive, svaka za opšte i selektivne liste. Dodajte im još izuzetaka, izbrišite postojeće, preimenujte datoteke (ali više o ovome kasnije) ili jednostavno ostavite arhivu sa datotekama.
3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. Na primer, ako uvozite liste izuzetaka iz Mac računara na iPhone, obavezno pošaljite `..zip` datoteku na telefon unapred.
4. Otvorite AdGuard VPN na uređaju/u pregledniku gde želite da uvezete arhivu sa spremnim listama izuzetaka. Pronađite odgovarajući odeljak, kliknite na *Uvoz* i izaberite arhivu. Gotovo!

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## Podrška

![Support screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/vpn_mac/form.html), we’d appreciate it.

## Postavke

![Settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Finally, we come to the Settings tab. In the *About program* section you can see the current version of AdGuard VPN, check for updates, visit our official website, and get acquainted with AdGuard’s EULA and Privacy policy. In the *About license* section you can upgrade from free to unlimited, manage your subscription, or log out. And most importantly, from here you can access *General settings*.

### App settings

![App settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Auto-update*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. What’s more, you can choose between light, dark, and system themes — the latter one matches the theme on your Mac.

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. This can be useful if you want to attach logs to your message to support.

### DNS servers

![DNS servers](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

One or more DNS servers can be set up here. This is useful if you don’t want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Advanced settings

![Advanced settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Nivo vođenja evidencije

There are only two logging levels but we strongly recommend that you use the first, default one. The second option (extended logging) should be set only to record a strange program behavior after consulting our technical support. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Sakrij ikonu trake sa menijima

Although this option is located in *Advanced settings*, it can be enabled without hesitation. You can hide the AdGuard VPN icon from the menu bar, it won’t prevent our app from running in the background.

##### AdGuard VPN protocol

![Select VPN protocol](https://cdn.adtidy.org/content/release_notes/vpn/mac/v2.7/protocol_en.png)

By default, AdGuard VPN protocol uses dynamic VPN protocol selection (*Auto-select* option). That means that AdGuard VPN automatically figures out which protocol — HTTP2/TLS or HTTP3/QUIC — will give you the best performance and switches to it instantly. This improves VPN speed and stability, which is particularly helpful in regions where VPN usage is restricted or unreliable.

If you wish, you can switch AdGuard VPN to use only HTTP2/TLS or HTTP3/QUIC protocol instead of *Auto-select*. Each protocol has its strengths, but the best choice can vary depending on your location, network conditions, and even the server you connect to.
