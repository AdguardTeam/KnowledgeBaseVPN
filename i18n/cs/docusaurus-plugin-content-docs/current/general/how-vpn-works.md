---
title: Jak VPN funguje
sidebar_position: 1
---

Abyste pochopili, jak AdGuard VPN funguje, měli byste nejprve porozumět obecným principům služby VPN.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Funkce VPN

A VPN is a virtual private network that helps hide your location and protect your data on the Web. VPN připojuje počítač nebo mobilní zařízení k serveru VPN a používá IP adresu tohoto serveru, aby se vnějšímu pozorovateli zdálo, že jste na jiném místě. Můžete tak bezpečně přistupovat k různým internetovým zdrojům a chránit své osobní údaje.

VPN tak plní dvě důležité funkce:

1. **Maintaining anonymity**

    Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN allows you to hide your IP address and replace it with the IP address of the VPN server to which you are connected. This way you will be able to maintain your privacy and anonymously search for information on the web.

1. **Data protection** If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. Údaje o bankovních kartách, uživatelská jména a hesla, údaje o cestovních pasech — všechny tyto údaje mohou zachytit online podvodníci. VPN tunel šifruje informace, které odesíláte a přijímáte z webu, takže se nemohou dostat do nepovolaných rukou.

## Struktura VPN

Po připojení k síti je počítači nebo mobilnímu zařízení přiděleno jedinečné identifikační číslo neboli IP adresa. Obvykle se skládá z čísel od 0 do 255 oddělených tečkami nebo dvojtečkami. Znalost této sekvence umožňuje určit zeměpisnou polohu zařízení. IP adresa je obvykle nastavena poskytovatelem internetových služeb a je viditelná až k požadovanému zdroji. Z tohoto důvodu může webový server navštívené stránky zaregistrovat vaši IP adresu a zaznamenat, co jste požadovali. Tento záznam pak může sloužit především ke sběru dat a analýze provozu.

VPN vytváří tunel mezi vaším zařízením a serverem VPN. Vaše data projdou tímto tunelem, zašifrují se a poté se v zabezpečené podobě dostanou do otevřeného internetu. Proto se webovému serveru bude zdát, že vaše zařízení již nemá vaši skutečnou IP adresu, ale IP adresu koncového bodu tunelu, tedy serveru VPN. Stránky, na které se dostanete po průchodu tunelem VPN, tak budou považovat geolokaci vybraného serveru VPN za vaši skutečnou polohu. A zašifrovaná data se nedostanou do rukou inzerentů, hackerů ani bezpečnostních služeb.

![VPN structure](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Typy VPN protokolů

Bezpečnostní protokoly VPN jsou nástroje, které šifrují data v tunelu VPN a umožňují zachovat soukromí uživatele v otevřeném internetu. V současné době používá naprostá většina moderních služeb VPN jeden ze tří následujících protokolů VPN:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Jednou z jeho hlavních výhod je, že je k dispozici na většině zařízení a operačních systémech a poskytuje vysokou úroveň zabezpečení. Použití dvojitého [zapouzdření](https://en.wikipedia.org/wiki/Encapsulation_(networking)) v tomto protokolu však může mít za následek nižší rychlost připojení.

1. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Tento moderní protokol má otevřený zdrojový kód, takže výrobci třetích stran mohou technologii vylepšovat a aktualizovat.

1. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Jeho hlavními výhodami jsou snadné použití, vysoká účinnost a nízká zranitelnost vůči útokům.

Kromě těchto protokolů VPN existují i další (například TLS, SSTP, IKEv2), které však nejsou oblíbené nebo nesplňují moderní standardy šifrování dat.

AdGuard VPN also has its own [*protocol*](/general/adguard-vpn-protocol). One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

## Nevýhody VPN

Despite the obvious advantages, VPN is not perfect and has some disadvantages:

### Nižší rychlosti

Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, can reduce the quality of your VPN connection.

### Blokování přístupu

Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask their traffic as regular. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing.

### Přerušení VPN připojení

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers.

## AdGuard VPN

Our VPN service has several important [advantages](/general/why-adguard-vpn):

- [*Proprietary VPN protocol*](/general/adguard-vpn-protocol), which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

- [*No-logging policy*](https://adguard-vpn.com/privacy.html), which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties

- *Více než 50 VPN serverů v desítkách zemí*

- *Snadné používání a rozsáhlé možnosti přizpůsobení*

Currently, AdGuard VPN is available as:

- [Browser extension](/adguard-vpn-browser-extension/overview) for Chrome, Firefox, and Edge

- Mobile app for [Android](/adguard-vpn-for-android/overview) and [iOS](/adguard-vpn-for-ios/overview)

- Desktop application for [Windows](/adguard-vpn-for-windows/overview) and [Mac](/adguard-vpn-for-mac/overview)

[Learn more about AdGuard VPN features](https://adguard-vpn.com/welcome.html)
