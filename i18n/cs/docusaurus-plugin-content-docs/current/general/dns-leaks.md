---
title: Co je únik DNS
sidebar_position: 9
---

Po instalaci VPN si chcete být jisti, že nedojde k úniku informací, který by vedl k vaší deanonymizaci. AdGuard VPN spolehlivě chrání váš provoz a vaše data před zvědavýma očima. Přesto můžete mít v některých případech podezření, že v naší službě VPN dochází k únikům DNS. Vysvětlíme vám, z čeho tyto obavy pramení a proč jsou neopodstatněné.

## Co jsou úniky DNS?

Při používání VPN může připojení k DNS serveru probíhat mimo šifrovaný tunel VPN a váš provoz může být viditelný pro poskytovatele internetových služeb.

Jinými slovy, při každém otevření webové stránky odešle prohlížeč požadavek na DNS server poskytovatele internetových služeb a na oplátku obdrží IP adresu požadované webové stránky. Poskytovatel internetu tak vidí všechny vaše online aktivity a může vás sledovat.

## Jak zjistit úniky DNS

Existují nejrůznější služby kontroly anonymity pro zjišťování úniků DNS, například `whoer.net`. Algoritmy těchto webových stránek nejsou jasné, ale jejich záměry jsou — vyděsit uživatele imaginárními úniky, což jim potenciálně umožní prodávat své služby.

Některé webové stránky provádějící bezpečnostní skenování považují shodu IP adresy uživatele a IP adresy serveru DNS za “dobrý“ výsledek, který znamená, že nedochází k únikům. Ve skutečnosti může taková shoda znamenat použití sítě VPN. Pokud je VPN vypnuta a požadavky směřují na DNS server vašeho poskytovatele internetových služeb, IP adresa DNS serveru a vaše vlastní adresa se neshodují.

## Proč v AdGuard VPN nedochází k únikům DNS

Pokud na svém zařízení zapnete AdGuard VPN a spustíte kontrolu na některé ze skenovacích webových stránek, zjistí, že dotazy DNS směřují na [Servery AdGuard DNS](https://adguard-dns.io). To však nelze považovat za únik.

Použití serveru AdGuard DNS bez filtrování je v AdGuard VPN nastaveno jako výchozí. Tím je zajištěno, že vaše dotazy nebudou směřovat na DNS servery vašeho poskytovatele internetových služeb, což znamená, že zůstanete na internetu v soukromí a anonymitě.

AdGuard DNS je navíc velmi oblíbená služba DNS, kterou používá více než 50 milionů uživatelů. Co to pro vás znamená? Představte si následující situaci: běžná služba VPN používá DNS server, který se nachází na stejné IP adrese jako server VPN. Počet jeho uživatelů sotva přesahuje 1000.

A v případě AdGuard DNS se “spojíte“ s 50 miliony uživatelů, takže vás nikdo nebude moci sledovat jen na základě toho, že používáte tento DNS server.

## Jak nastavit vlastní DNS server v AdGuard VPN

Existuje mnoho oblíbených veřejných DNS serverů od [dobře známých poskytovatelů DNS](https://adguard-dns.io/kb/general/dns-providers). Některé z nich mohou plnit pouze své přímé úkoly — poskytovat IP adresy požadovaných domén a některé mohou dělat více.

Například AdGuard DNS odstraňuje reklamy a chrání zařízení před sledováním, zatímco Ochrana rodiny AdGuard DNS kombinuje funkce AdGuard DNS s bezpečným vyhledáváním a rodičovskou kontrolou.

Můžete si vybrat libovolný DNS server a nakonfigurovat jej v AdGuard VPN:

- v AdGuard VPN pro Windows: *Nastavení* → *Nastavení aplikace* → *DNS servery*
- v AdGuard VPN pro macOS: *Nastavení* → *Nastavení aplikace* → *DNS servery*
- v AdGuard VPN pro Android: *Nastavení* (ikona ozubeného kola) → *Nastavení aplikace* → *DNS server*
- v AdGuard VPN pro iOS: *Nastavení* (ikona ozubeného kola) → *Nastavení aplikace* → *DNS server*
- v Rozšíření prohlížeče AdGuard VPN: ikona hamburger menu → *Nastavení* → *DNS-server*
