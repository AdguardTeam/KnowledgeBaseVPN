---
title: Přehled funkcí
sidebar_position: 1
---

## Co dělá AdGuard VPN pro Windows

- Chrání před zachycením síťového provozu (spoofing). AdGuard VPN vytvoří šifrovaný tunel mezi vaším zařízením a vzdáleným serverem. Veškerý internetový provoz prochází tímto tunelem, takže vaše data jsou po cestě chráněna. A díky [jedinečnému AdGuard protokolu](/general/adguard-vpn-protocol) máte zaručeno rychlé a bezpečné připojení.

- Maskuje IP adresu. Vaše skutečná IP adresa je pro kyberzločince klíčem k vašim osobním údajům. Vaše jméno, e-mailová adresa, telefonní číslo a údaje o kreditní kartě se mohou dostat do rukou podvodníků, pokud neskryjete svou IP adresu. S AdGuard VPN prochází veškerý váš datový provoz šifrovaným tunelem a přichází na server VPN. Webový server registruje IP adresu koncového bodu tunelu, tj. serveru VPN, a nikoli skutečnou IP adresu zařízení.

- Skrývá vaši skutečnou polohu. Co tím získáte? Například možnost rezervovat si hotel za ceny pro místní obyvatele nebo se skrýt před geograficky cílenou reklamou.

AdGuard VPN pro Windows má mnoho výhod, proto jsme tomu věnovali [samostatný článek](/general/why-adguard-vpn). Zde se však chceme zaměřit spíše na samotnou aplikaci a její fungování.

## Jak začít používat AdGuard VPN pro Windows

Chcete-li začít používat AdGuard VPN pro Windows, stáhněte si aplikaci z [našich webových stránek](https://adguard-vpn.com/welcome.html). Instalace netrvá déle než minutu — zobrazí se dialogové okno, ve kterém je třeba zaškrtnout alespoň jedno políčko s podmínkami uživatelské smlouvy a zásady ochrany osobních údajů. And it's up to you to decide whether you want AdGuard to collect anonymous data about your app usage. Nakonec vás program požádá o přihlášení, a to buď prostřednictvím účtu [AdGuard](https://auth.adguard.com/login.html), nebo prostřednictvím sociálních sítí (Apple, Google, Facebook). To je vše, nyní můžete používat AdGuard VPN pro Windows.

## Domovská obrazovka

![AdGuard VPN for Windows homepage](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Nejvýraznější položkou na domovské obrazovce **** je tlačítko pro připojení/odpojení AdGuard VPN. Nad tlačítkem se zobrazí [režim](#exclusions), ve kterém je aplikace spuštěna a pod ním vybraný server. Na pravé straně obrazovky najdete všechna dostupná umístění. Nejrychlejší umístění, tj. umístění s nejmenší odezvou ping se zobrazí na začátku seznamu.

V horní části obrazovky se nachází navigační panel se čtyřmi kartami: **Domů**, **Výjimky**, **Podpora**, **Nastavení**.

## Výjimky

AdGuard VPN pro Windows může pracovat ve dvou režimech. Ve výchozím nastavení funguje aplikace všude a můžete vypsat weby a aplikace, které chcete z tunelu vyloučit. Můžete však přepnout do opačného režimu: AdGuard VPN se spustí pouze na webových stránkách a v aplikacích uvedených v seznamu výjimek. Upozorňujeme, že tyto dva seznamy jsou na sobě nezávislé.

![Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Webové stránky můžete do výjimek **přidat ručně** zadáním názvů jejich domén. Aplikace také nabízí možnost vybrat si oblíbené weby **ze seznamu**.

![Add Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Add Exclusions from list](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

:::note

When adding domains manually, you should take into account some nuances. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list.

:::

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### Import/export seznamů výjimek

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. You can edit them by adding new exclusions or deleting old ones.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Nastavení

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab contains sections that will help you customize the application.

### Nastavení aplikace

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymous app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### DNS servery

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Pokročilá nastavení

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Pracovní režim

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Úroveň záznamu

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### Použití QUIC

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

### Výjimky aplikací

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Další karty

### O programu

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### Účet

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Podpora

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
