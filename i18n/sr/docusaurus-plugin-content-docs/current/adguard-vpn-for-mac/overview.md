---
title: Pregled funkcija
sidebar_position: 1
---

AdGuard VPN za Mac je VPN usluga na radnoj površini. AdGuard VPN is fully compatible with AdGuard Ad Blocker, they can be used together and will operate seamlessly. Let’s see what features it has to offer.

Note that **you can't use AdGuard VPN for Mac unless you have logged into your AdGuard account**. You can either sign in with your AdGuard account or with an external account, namely, via Apple, Google or Facebook. Make sure that your external account is bound to the same e-mail address as your AdGuard account. If there is a suitable subscription in your AdGuard account, it will be automatically activated on the desktop app. Still don't have an AdGuard account? Create it [here](https://auth.adguard.com/registration.html).

> AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Catalina (10.15).

## Home screen

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/main_en.png)

The first tab is the *Home* screen. Here you can see AdGuard VPN current status and [exclusions mode](#exclusions), chosen location (if enabled) and its ping. Ping is the response time of a VPN server. Consequently, the lower this number is, the faster the connection. If VPN is disabled, the last location you connected to is displayed below. The fastest locations with the lowest pings are displayed in the upper right corner of the screen. Below you can see the full list of locations. Through the search function, the needed location can be easily found.

> Free users can connect only to certain locations, while others are blocked. Besides, there is a 3 GB monthly traffic limit in the free version.

## Izuzeci

![Izuzeci](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_en.png)

Sledeće ide *Izuzeci* Ekran. AdGuard VPN ima nekoliko funkcija koje ga čine jedinstvenim, a jedna od njih je svakako prebacivanje između dva režima izuzetaka. U opštem režimu, AdGuard VPN će raditi na svim veb lokacijama osim na onima sa liste izuzetaka. U selektivnom režimu, obrnuto, AdGuard VPN će raditi samo na Veb lokacijama sa liste izuzetaka. Vi sami možete da odlučite gde želite da VPN radi.

![Ekran "Izuzetaka"](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_en.png)

Takođe, ne samo da možete da dodate Veb lokacije u "Izuzetke", već i da birate između lista popularnih usluga. Liste su podeljene u osam kategorija: društvene mreže, aplikacije za dopisivanje, video i muzički striming servisi, Igre, Kupovina, Pretraživači i Alatke za komunikaciju na poslu. Bilo koja od ovih usluga može biti dodata u "Isključenja" jednim klikom! To je posebno zgodno ako koristite selektivni režim.

Lista izuzetaka se može lako konfigurisati. Ako ste dodali domen i neke od njegovih poddomina, oni će biti grupisani unutar osnovnog. Prilikom dodavanja osnovnog domena (`example.com`) dodaje se i njena maska (`*.example.com`).

Ako ste dodali uslugu, promenili ili uklonili nešto i sada želite da vratite početne postavke, samo pritisnite *Vrati na podrazumevanu vrednost* pored domena — ova radnja će vratiti sve domene koji nedostaju i ukloniti sva polja za potvrdu.

Štaviše, gotove liste izuzetaka mogu se preneti na druge uređaje sa instaliranim AdGuard VPN-om. Da biste izvezli izuzetke, sledite dole navedena uputstva u četiri koraka:

1. Otvorite AdGuard VPN na uređaju sa kojeg želite da izvezete liste izuzetaka. Pronađite odgovarajući odeljak i kliknite na *Izvoz* Dugme. `exclusions.zip` arhiva će biti preuzeta.
2. Ima dve `..txt` datoteke unutar arhive, svaka za opšte i selektivne liste. Dodajte im još izuzetaka, izbrišite postojeće, preimenujte datoteke (ali više o ovome kasnije) ili jednostavno ostavite arhivu sa datotekama.
3. Prilikom prenosa između različitih uređaja, ne zaboravite da pošaljete `..zip` datoteku na uređaj radi uvoza. Na primer, ako uvozite liste izuzetaka iz Mac računara na iPhone, obavezno pošaljite `..zip` datoteku na telefon unapred.
4. Otvorite AdGuard VPN na uređaju/u pregledniku gde želite da uvezete arhivu sa spremnim listama izuzetaka. Pronađite odgovarajući odeljak, kliknite na *Uvoz* i izaberite arhivu. Gotovo!

> Datoteke arhive sa drugih uređaja mogu biti slično uvezene u AdGuard VPN za Mac.

## Podrška

![Ekran podrške](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_en.png)

Treća kartica je *Ekran*podrške. Pronađite odgovore na sva pitanja u [FAQ](https://adguard-vpn.com/welcome.html#faq) ili u [Baza znanja](/intro.md) sekcije, prijavite grešku ako naiđete na jednu ili [diskutujte o AdGuard-u na bilo kojoj od platformi](https://adguard.com/discuss.html). I slobodno [ostavite povratne informacije o našem proizvodu](https://surveys.adguard.com/vpn_mac/form.html)Cenili bismo to.

## Postavke

![Postavke](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_en.png)

Konačno, dolazimo na karticu "Postavke". U *Osnovni podaci o programu* možete videti trenutnu verziju AdGuard VPN-a, proveriti da li postoje ispravke, posetiti naš zvanični veb sajt i upoznati se sa AdGuard-ovom EULA i politikom privatnosti. U *Osnovni podaci o licenci* možete da izvršite nadogradnju sa besplatnog na neograničeno, upravljate pretplatom ili da se odjavite. I što je najvažnije, odavde možete pristupiti *Opštim postavkama*.

### Postavke aplikacije

![Postavke aplikacije](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_en.png)

Prve četiri osnovne funkcije čine aplikaciju pogodnijim i prilagođenijim korisniku, pa naime. *Prekidač za ubijanje*, *Automatsko ažuriranje*, *Pokrenite AdGuard VPN pri uključivanju*I *Automatsko povezivanje pri pokretanju aplikacije*. Šta više, možete da birate između svetlih, tamnih i sistemskih tema – ova druga se podudara sa temom na vašem Mac računaru.

Još jedna opcija koju ne treba zanemariti je da možete dozvoliti AdGuard VPN-u da prikuplja i šalje anonimne izveštaje o padu, tehničke i interakcijske podatke kako bi nam pomogao da poboljšamo našu aplikaciju. Na kraju, ali ne i najmanje važno, zahvaljujući dugmetu sa desne strane, možete da izvezete evidencije u svoj Mac. Ovo može biti korisno ako želite da priložite evidencije u vašu poruku koju šaljete podršci.

### DNS serveri

![DNS serveri](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_en.png)

Ovde možete dodati prilagođeni DNS server (ili servere) da se ne biste podrazumevano oslanjali na DNS server koji obezbeđuje dobavljač Internet usluga. Preporučujemo dodavanje AdGuard DNS-a, koji ne samo da šifruje vaš DNS saobraćaj već i identifikuje zahteve ka zlonamernim sajtovima i preusmerava ih na "crnu rupu".

### Napredne postavke

![Napredne postavke](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_en.png)

Ne preporučuje se menjanje naprednih postavki. Ne menjajte ih osim ako to od vas nije tražila naša tehnička podrška ili ako niste sigurni šta radite.

#### Nivo vođenja evidencije
Postoje samo dva nivoa vođenja evidencije, ali preporučujemo da koristite prvi, podrazumevani. Drugu opciju (produženo evidentiranje) treba postaviti samo da bi se zabeležilo čudno ponašanje programa nakon konsultacija sa našom tehničkom podrškom. Čak i ako ste omogućili drugi nivo vođenja evidencije, uverite se da ste se vratili na podrazumevani nivo nakon snimanja evidencija.

#### Sakrij ikonu trake sa menijima
Iako se ova opcija nalazi u *naprednim postavkama*, može se omogućiti bez oklevanja. Možete da sakrijete ikonu AdGuard VPN sa trake sa menijima, to neće sprečiti pokretanje naše aplikacije u pozadini.

#### Koristi QUIC (eksperimentalno)

QUIC komunikacioni protokol je najnovija, najsavremenija verzija HTTP-a. Uključite prekidač da biste dobili bolji kvalitet veze u manje idealnim uslovima, dok koristite mobilne podatke u metrou ili liftu, na primer.
