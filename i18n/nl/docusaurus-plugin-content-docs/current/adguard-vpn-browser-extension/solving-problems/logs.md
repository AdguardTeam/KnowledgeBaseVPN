---
title: How to collect and send logs
sidebar_position: 1
---

Er zijn verschillende manieren om logbestanden van AdGuard VPN-browserextensies te verzamelen, maar welke u ook kiest, dezelfde gegevens worden verzameld. In de extensie zijn logboeken niet onderverdeeld in standaard- en foutopsporingslogboeken. En er zijn verschillende opties voor het verzamelen van logboeken beschikbaar voor die gevallen waarin een probleem dat u tegenkomt, u ervan weerhoudt een applicatie te gebruiken.

## Logboeken verzamelen en verzenden via de sectie *Een bug rapporteren*

1. Open de AdGuard VPN Browser-extensie en herhaal indien mogelijk de acties die tot de fout hebben geleid. Noteer het exacte tijdstip waarop deze fout is opgetreden.
1. Open *Instellingen* door op het hamburgermenupictogram (☰) → *Ondersteuning* → *Rapporteer een bug*te klikken.
1. Laat in het geopende formulier een automatisch ingevoerd e-mailadres achter of voer een ander e-mailadres in en beschrijf de gevonden fout, inclusief het tijdstip waarop deze fout is opgetreden. Als u het probleem niet kunt reproduceren, specificeer dan zo nauwkeurig mogelijk wanneer het voor het laatst is opgetreden.
1. Zorg ervoor dat er een vinkje staat naast *Neem het diagnostische rapport op in het bericht* en tik op *Verzenden*. Op deze manier verzendt u logboeken samen met het bugrapport.

## Logboeken verzamelen en verzenden via de knop *Logboeken exporteren*

1. Open de AdGuard VPN Browser-extensie en herhaal indien mogelijk de acties die tot de fout hebben geleid. Noteer het exacte tijdstip waarop deze fout is opgetreden.
1. Klik met de rechtermuisknop op het pictogram van de AdGuard VPN-browserextensie.
1. Klik in het geopende menu op *Logboeken exporteren*.
1. Als gevolg hiervan wordt het logbestand op uw apparaat opgeslagen in de indeling `txt`.

Nu u de logbestanden heeft verzameld, kunt u ze overhandigen aan ons ontwikkelingsteam. Om dit te doen:

1. Rapporteer een bug op GitHub. Gedetailleerde instructies voor het maken van een issue op GitHub vindt u in dit artikel.
1. Stuur een archief met logboeken en reproduceertijd naar `devteam@adguard.com` en voeg een link toe naar uw GitHub-issue. U kunt ook een archief met logboeken en het reproductie tijdstip toevoegen aan Google Drive en dit delen met `devteam@adguard.com` door de Google Drive-link aan uw issue op GitHub toe te voegen.

## Logboeken verzamelen en verzenden via de tools van browserontwikkelaars

### Chrome

1. Open de AdGuard VPN Browser-extensie en herhaal indien mogelijk de acties die tot de fout hebben geleid. Noteer het exacte tijdstip waarop deze fout is opgetreden.
1. Ga naar `chrome://extensions`
1. Schakel *ontwikkelaarsmodus*in

    ![De ontwikkelaarsmodus *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Klik op `achtergrond.html`

    ![Achtergrond *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Open het tabblad *Console*

    ![Het Console-tabblad *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Open het contextmenu en klik op *Opslaan als…*

    ![Opslaan als *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Nu u de logbestanden heeft verzameld, kunt u ze overhandigen aan ons ontwikkelingsteam. Om dit te doen:

1. Rapporteer een bug op GitHub. Gedetailleerde instructies voor het maken van een issue op GitHub vindt u in dit artikel.
1. Stuur een archief met logboeken en reproduceertijd naar `devteam@adguard.com` en voeg een link toe naar uw GitHub-issue. U kunt ook een archief met logboeken en het reproductie tijdstip toevoegen aan Google Drive en dit delen met `devteam@adguard.com` door de Google Drive-link aan uw issue op GitHub toe te voegen.

### Firefox

1. Open de AdGuard VPN Browser-extensie en herhaal indien mogelijk de acties die tot de fout hebben geleid. Noteer het exacte tijdstip waarop deze fout is opgetreden.
1. Ga naar `over:addons`
1. Klik op *Debug-add-ons*

    ![Foutopsporing in add-ons *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Klik op *Inspecteren*

    ![Inspecteer *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Ga naar het tabblad *Console*

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Klik op *Alle berichten opslaan in bestand*

    ![Opslaan *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Nu u de logbestanden heeft verzameld, kunt u ze overhandigen aan ons ontwikkelingsteam. Om dit te doen:

1. Rapporteer een bug op GitHub. Gedetailleerde instructies voor het maken van een issue op GitHub vindt u in dit artikel.
1. Stuur een archief met logboeken en reproduceertijd naar `devteam@adguard.com` en voeg een link toe naar uw GitHub-issue. U kunt ook een archief met logboeken en het reproductie tijdstip toevoegen aan Google Drive en dit delen met `devteam@adguard.com` door de Google Drive-link aan uw issue op GitHub toe te voegen.
