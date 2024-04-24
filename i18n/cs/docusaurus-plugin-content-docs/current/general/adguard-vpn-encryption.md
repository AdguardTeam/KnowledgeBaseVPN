---
title: 'Jaký typ šifrování je používán v AdGuard VPN'
sidebar_position: 7
---

## Úvod

Šifrování je důvodem, proč se v pojmu "virtuální privátní síť" vyskytuje slovo "privátní". VPN vytváří tunel mezi vaším zařízením a serverem VPN, který šifruje a bezpečně přenáší vaše data do otevřeného internetu. Proces šifrování, tj. přeměny dat na "nesmysly", které nikdo, kdo je zachytí, nemůže přečíst, je pro každou službu VPN zásadní.

Protokol AdGuard VPN používá dosud nejbezpečnější a nejrychlejší šifrovací algoritmus — AES-256. Zjistěte, co to je a proč je to tak dobré.

## Historie AES

Šifrování AES (Advanced Encryption Standard) bylo vyvinuto na konci 20. století na žádost americké vlády: Stávající standard DES (Data Encryption Standard) zastaral a bylo zapotřebí nového, bezpečnějšího šifrovacího algoritmu.

Ve veřejné soutěži vyhlášené vládou zvítězila šifra Rijndael — dosti podobná DES, ale mnohem sofistikovanější. V roce 2002 byl přejmenován na AES a vydáván americkým Národním institutem pro standardy a technologie.

AES je dnes průmyslovým standardem pro šifrování. Vzhledem k jeho otevřené povaze ho používá NSA a vládní agentury, stejně jako soukromé, komerční a neziskové organizace.

## Jak funguje AES-256

AES je šifra bloků se symetrickým klíčem. Jako šifra se symetrickým klíčem vyžaduje k šifrování a dešifrování dat pouze jeden tajný klíč. Jako šifra bloků, rozděluje AES nešifrované informace, které se nazývají otevřený text, do bloků, původní kryptografický klíč rozdělí na několik a použije je na každý blok. Nakonec se získá text šifry, tj. zašifrovaný text.

Existují různé velikosti klíčů — 128, 192 a 256 bitů — bloky se také měří v bitech. Během šifrování nahrazuje šifrovač každou informaci jinou v závislosti na bezpečnostním klíči. Například AES-256 vytvoří 256 bloků šifrovaného textu z 256 bloků prostého textu ve 14 kolech.

Kola se skládají z několika kroků: rozdělení dat do bloků, prohození bajtů, posunutí řádků a přeskupení sloupců. Výsledkem je zcela náhodná sada znaků, která dává smysl pouze při použití správného šifrovacího klíče.

AES-256 je nejsilnější úroveň šifrování: k prolomení této šifry by bylo třeba vyzkoušet 2256 diskrétních kombinací, z nichž každá se skládá ze 78 číslic.
