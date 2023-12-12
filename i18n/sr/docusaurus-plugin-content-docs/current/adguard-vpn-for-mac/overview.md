---
title: Pregled funkcija
sidebar_position: 1
---

AdGuard VPN za Mac je VPN usluga na radnoj površini. AdGuard VPN je u potpunosti kompatibilan sa AdGuard blokatorom reklama, mogu se koristiti zajedno i radiće neprimetno. Da vidimo koje karakteristike ima da ponudi.

Imajte na umu da **ne možete da koristite AdGuard VPN za Mac osim ako se niste prijavili na svoj AdGuard nalog**. Možete da se prijavite pomoću svog AdGuard naloga ili sa spoljašnjim nalogom, tačnije preko Apple-a, Google-a ili Facebook-a. Uverite se da je vaš spoljni nalog povezan sa istom e-adresom kao i vaš AdGuard nalog. Ako postoji odgovarajuća pretplata na vašem AdGuard nalogu, ona će biti automatski aktivirana na aplikaciji radne površine. Još uvek nemate AdGuard nalog? Kreirajte ga [Ovde](https://auth.adguard.com/registration.html).

:::note Compatibility

AdGuard VPN za Mac je trenutno podržan na macOS verzijama počev od macOS Catalina (10.15).

:::

## Početni ekran

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/main_en.png)

Prva kartica je *Početni* Ekran. Ovde možete videti AdGuard VPN trenutni status i [režim isključenja](#exclusions), odabranu lokaciju (ako je omogućen) i njen ping. Ping je vreme odziva VPN servera. Consequently, the lower this number, the faster the connection. Ako je VPN onemogućen, ispod će biti prikazana poslednja lokacija sa kojom ste se povezali. Najbrže lokacije sa najnižim pingovima prikazane su u gornjem desnom uglu ekrana. U nastavku možete videti kompletnu listu lokacija. Putem funkcije pretrage, potrebna lokacija se može lako pronaći.

:::note

Korisnici besplatne verzije mogu da se povežu samo sa određenim lokacijama, dok su druge blokirane. Osim toga, u besplatnoj verziji postoji ograničenje saobraćaja od 3 GB mesečno.

:::

## Izuzeci

![Izuzeci](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Ekran "Izuzetaka"](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_en.png)

Takođe, ne samo da možete da dodate Veb lokacije u "Izuzetke", već i da birate između lista popularnih usluga. Liste su podeljene u osam kategorija: društvene mreže, aplikacije za dopisivanje, video i muzički striming servisi, Igre, Kupovina, Pretraživači i Alatke za komunikaciju na poslu. Bilo koja od ovih usluga može biti dodata u "Isključenja" jednim klikom! To je posebno zgodno ako koristite selektivni režim.

Lista izuzetaka se može lako konfigurisati. Ako ste dodali domen i neke od njegovih poddomina, oni će biti grupisani unutar osnovnog. Prilikom dodavanja osnovnog domena (`example.com`) dodaje se i njena maska (`*.example.com`).

Ako ste dodali uslugu, promenili ili uklonili nešto i sada želite da vratite početne postavke, samo pritisnite *Vrati na podrazumevanu vrednost* pored domena — ova radnja će vratiti sve domene koji nedostaju i ukloniti sva polja za potvrdu.

Štaviše, gotove liste izuzetaka mogu se preneti na druge uređaje sa instaliranim AdGuard VPN-om. Da biste izvezli izuzetke, sledite dole navedena uputstva u četiri koraka:

1. Otvorite AdGuard VPN na uređaju sa kojeg želite da izvezete liste izuzetaka. Pronađite odgovarajući odeljak i kliknite na *Izvoz* Dugme. `exclusions.zip` arhiva će biti preuzeta.
2. Ima dve `..txt` datoteke unutar arhive, svaka za opšte i selektivne liste. Dodajte im još izuzetaka, izbrišite postojeće, preimenujte datoteke (ali više o ovome kasnije) ili jednostavno ostavite arhivu sa datotekama.
3. Prilikom prenosa između različitih uređaja, ne zaboravite da pošaljete `..zip` datoteku na uređaj radi uvoza. Na primer, ako uvozite liste izuzetaka iz Mac računara na iPhone, obavezno pošaljite `..zip` datoteku na telefon unapred.
4. Otvorite AdGuard VPN na uređaju/u pregledniku gde želite da uvezete arhivu sa spremnim listama izuzetaka. Pronađite odgovarajući odeljak, kliknite na *Uvoz* i izaberite arhivu. Gotovo!

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Podrška

![Ekran podrške](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_en.png)

Treća kartica je *Ekran*podrške. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). I slobodno [ostavite povratne informacije o našem proizvodu](https://surveys.adguard.com/vpn_mac/form.html)Cenili bismo to.

## Postavke

![Postavke](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_en.png)

Konačno, dolazimo na karticu "Postavke". U *Osnovni podaci o programu* možete videti trenutnu verziju AdGuard VPN-a, proveriti da li postoje ispravke, posetiti naš zvanični veb sajt i upoznati se sa AdGuard-ovom EULA i politikom privatnosti. U *Osnovni podaci o licenci* možete da izvršite nadogradnju sa besplatnog na neograničeno, upravljate pretplatom ili da se odjavite. I što je najvažnije, odavde možete pristupiti *Opštim postavkama*.

### Postavke aplikacije

![Postavke aplikacije](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_en.png)

Prve četiri osnovne funkcije čine aplikaciju pogodnijim i prilagođenijim korisniku, pa naime. *Prekidač za ubijanje*, *Automatsko ažuriranje*, *Pokrenite AdGuard VPN pri uključivanju*I *Automatsko povezivanje pri pokretanju aplikacije*. Šta više, možete da birate između svetlih, tamnih i sistemskih tema – ova druga se podudara sa temom na vašem Mac računaru.

You can also allow AdGuard VPN to gather and send anonymous crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. Ovo može biti korisno ako želite da priložite evidencije u vašu poruku koju šaljete podršci.

### DNS serveri

![DNS serveri](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_en.png)

Ovde možete dodati prilagođeni DNS server (ili servere) da se ne biste podrazumevano oslanjali na DNS server koji obezbeđuje dobavljač Internet usluga. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic but also identifies requests to malicious websites and redirects them to a “blackhole”.

### Napredne postavke

![Napredne postavke](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_en.png)

#### Nivo vođenja evidencije

Postoje samo dva nivoa vođenja evidencije, ali preporučujemo da koristite prvi, podrazumevani. Drugu opciju (produženo evidentiranje) treba postaviti samo da bi se zabeležilo čudno ponašanje programa nakon konsultacija sa našom tehničkom podrškom. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Sakrij ikonu trake sa menijima

Iako se ova opcija nalazi u *naprednim postavkama*, može se omogućiti bez oklevanja. Možete da sakrijete ikonu AdGuard VPN sa trake sa menijima, to neće sprečiti pokretanje naše aplikacije u pozadini.

#### Koristi QUIC (eksperimentalno)

QUIC komunikacioni protokol je najnovija, najsavremenija verzija HTTP-a. Uključite prekidač da biste dobili bolji kvalitet veze u manje idealnim uslovima, dok koristite mobilne podatke u metrou ili liftu, na primer.
