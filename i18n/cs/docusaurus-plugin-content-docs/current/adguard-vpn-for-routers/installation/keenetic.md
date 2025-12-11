---
title: Instalace na routerech Keenetic
sidebar_position: 3
---

AdGuard VPN můžete nakonfigurovat na routerech Keenetic od verze KeeneticOS 3.5. Postupujte podle následujících kroků:

1. Nainstalujte systémovou komponentu klienta VPN IKEv2/IPsec. Přejděte do [webového rozhraní](https://help.keenetic.com/hc/en-us/articles/360001923020-Web-interface) výrobce → _Obecná nastavení systému_ → _Aktualizace KeeneticOS a možnosti komponent_ a klikněte na _Možnosti komponent_.

   :::note

   Po instalaci komponenty klienta VPN IKEv2/IPsec počkejte několik sekund, než router změny použije. Pokud se možnost IKEv2 nezobrazí, obnovte webové rozhraní nebo se přihlaste znovu.

   :::

2. Přejděte do části _Ostatní připojení_ → _VPN připojení_ a klikněte na _Vytvořit připojení_.

3. Na obrazovce _Nastavení připojení VPN_ povolte možnost _Použít toto připojení pro přístup k internetu_.

4. Do pole _Název připojení_ zadejte libovolný název pro identifikaci připojení. V poli _Typ (protokol)_ vyberte možnost `IKEv2`. V části _Ověřování_ vyberte možnost _EAP (uživatelské jméno/heslo)_.

5. Přejděte do svého [účtu AdGuard](https://adguardaccount.com/account/product/vpn) a přepněte na kartu _AdGuard VPN_. V části _Zařízení_ vyberte svůj router. Zkopírujte jeho uživatelské jméno, heslo a adresu serveru. Vložte je do příslušných polí na obrazovce Keenetik _Nastavení připojení VPN_.

6. Jakmile je připojení navázáno, přepněte přepínač na _Povoleno_. Stav tohoto připojení se zobrazí na stejné stránce.

7. Přiřaďte tomuto připojení nejvyšší prioritu. Přetáhněte vytvořený profil připojení VPN na začátek seznamu.
