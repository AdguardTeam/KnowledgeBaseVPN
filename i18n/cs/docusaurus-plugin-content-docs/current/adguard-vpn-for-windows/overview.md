---
title: Přehled funkcí
sidebar position: 1
---

## Co je AdGuard VPN pro Windows

A VPN, acronym for "virtual private network", is a service that makes your Internet connection safe and helps you stay anonymous online. Jak VPN funguje? Pokaždé, když navštívíte webovou stránku bez použití sítě VPN, vidí ji váš poskytovatel internetových služeb (ISP). Ví, kdo jste a co hledáte, a může tato data shromažďovat a prodávat. Webové stránky, které jste navštívili, zase mohou sledovat vaši aktivitu. Když zapnete aplikaci VPN, přesměruje váš datový provoz přes šifrovaný tunel na vzdálený server VPN, čímž zajistí vaše soukromí: ISP neví, kam jste odeslali požadavek, a web neví, odkud jste přišli.

**Co dělá AdGuard VPN pro Windows**

* Chrání před zachycením síťového provozu (spoofing). AdGuard VPN vytvoří šifrovaný tunel mezi vaším zařízením a vzdáleným serverem. Veškerý internetový provoz prochází tímto tunelem, takže vaše data jsou po cestě chráněna. A díky [jedinečnému AdGuard protokolu](/general/adguard-vpn-protocol.mdx) máte zaručeno rychlé a bezpečné připojení.

* Maskuje IP adresu. Vaše skutečná IP adresa je pro kyberzločince klíčem k vašim osobním údajům. Vaše jméno, e-mailová adresa, telefonní číslo a údaje o kreditní kartě se mohou dostat do rukou podvodníků, pokud neskryjete svou IP adresu. Jak jsme již uvedli, s AdGuard VPN prochází veškerý váš datový provoz šifrovaným tunelem a přichází na server VPN. Zvenčí se tedy zdá, že vaše zařízení má IP adresu uvedeného serveru VPN.

* Skrývá vaši skutečnou polohu. Výběrem některého ze serverů AdGuard VPN budete okamžitě "teleportováni" do jeho umístění. Co tím získáte? Například možnost rezervovat si hotel za ceny pro místní obyvatele nebo se skrýt před geograficky cílenou reklamou.

AdGuard VPN pro Windows má mnoho výhod, proto jsme tomu věnovali [samostatný článek](/general/why-adguard-vpn.md). Zde se však chceme zaměřit spíše na samotnou aplikaci a její fungování.

## Jak začít používat AdGuard VPN pro Windows

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). Instalace netrvá déle než minutu — zobrazí se dialogové okno, ve kterém je třeba zaškrtnout alespoň jedno políčko s podmínkami uživatelské smlouvy a zásady ochrany osobních údajů. Je na vás, zda chcete, aby AdGuard shromažďoval anonymizovaná data o používání aplikací. Nakonec vás program požádá o přihlášení, a to buď prostřednictvím účtu [AdGuard](https://auth.adguard.com/login.html), nebo prostřednictvím sociálních sítí (Apple, Google, Facebook). To je vše, nyní můžete používat AdGuard VPN pro Windows.


## Domovská obrazovka

![Domovská stránka AdGuard VPN pro Windows](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Nejvýraznější položkou na domovské obrazovce **** je tlačítko pro připojení/odpojení AdGuard VPN. Underneath, you can see the [mode](#exclusions) in which the application is running and the selected server below. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the shortest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.


## Výjimky

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. Co to znamená? If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. **Selektivní režim** má opačný účinek: zapne AdGuard VPN pouze na webových stránkách uvedených v seznamu výjimek. Upozorňujeme, že seznamy výjimek těchto dvou režimů jsou na sobě nezávislé.

![Výjimky](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![Přidat výjimky](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Přidat výjimky ze seznamu](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Při ručním přidávání domén byste měli vzít v úvahu některé nuance. Pokud například ručně vyloučíte doménu `google.com`, budou do výjimek přidány také všechny subdomény `*.google.com`. Doménové názvy s ostatními doménami nejvyšší úrovně, jako je `google.es` nebo `google.it`, však vyloučeny nebudou. Nebo můžete do výjimek přidat `youtube.com`, ale doména stejné služby `youtu.be` se do seznamu nedostane.

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Umístili jsme tam nejoblíbenější služby, včetně všech názvů domén a subdomén souvisejících s každou platformou.

### Import/export exclusion lists

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## Nastavení

![Settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.


### App settings

![App settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

Ve spodní části stránky jsou dvě sekce: **DNS servery** a **Pokročilá nastavení**.

#### DNS servery

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Advanced settings

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

**Operating mode**

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.


### App exclusions

![Adding an app to exclusions](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Další karty

### O programu

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy Policy.

### Account

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Podpora

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.