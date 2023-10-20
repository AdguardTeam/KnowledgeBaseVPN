---
title: 'Problemer med Begrænset tilstand-profil'
sidebar_position: 4
---

Ejerne af mobiler og tablets med Android 7+ som operativsystem, kan stå over for problemet forårsaget ved brug af **en profil med Begrænset tilstand**. Har man en sådan profil, begrænses **AdGuard VPN**ligesom andre apps, som bruger VPN, i selektiv filtrering af VPN-trafik. En af årsagerne til denne situation kan også være brugen af **Dual App/Dual Messenger-profil** på enheden. Nedenfor beskrives de anbefalinger, som kan anvendes, hvis dette problem opstår.

## Løsninger

Der er tre måder at løse problemet på:

### Mulighed 1: Tildel AdGuard VPN tilladelser vha. ADB

1. Aktivér både **Udviklertilstand** samt **USB-fejlfinding**:

    - Åbn appen **Indstillinger** på mobilen;
    - Gå til afsnittet **System** (sidste punkt på indstillingsmenuen). Find underpunktet **Om telefon** i dette afsnit;
    - Tryk 7 gange på linjen **Build-nummer**. Herefter ses meddelelse **Du er nu udvikler** (angiv om nødvendigt enhedens oplåsningskode);
    - Åbn **Systemindstillinger** → **Udviklerindstillinger** → rul ned, og aktivér **USB-fejlretning** → Bekræft, at fejlretning er aktiveret i vinduet **Tillade USB-fejlretning** efter at have nærlæst advarslen.

    > Ved problemer eller yderligere spørgsmål findes den komplette vejledning [hér](https://developer.android.com/studio/debug/dev-options).

1. [Installér og opsæt](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB;

    > På Windows-platformen skal **Samsung**-ejere muligvis installere [dette værktøj](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Tilslut enheden vha. et **USB-kabel** til den computer/bærbare, på hvilken **ADB** er installeret;

1. Åbn en **kommandolinje** på PC'en:

    - **Cmd.exe** ved brug af **Windows**;
    - **Terminal** ved brug af **macOS**;

1. Skriv kommandoen `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` og tryk på **Retur**.

### Mulighed 2: Fjern *Begrænset brugerkonto*

Info kan [findes hér](https://support.google.com/a/answer/6223444?hl=en) om, hvordan brugerkonti håndteres på en Android-enhed.

> Bemærk dog, at begrænsede brugerkonti i visse tilfælde oprettes obligatorisk og ikke kan fjernes. Eksempelvis, hvis Dual Messenger- eller Dual App-funktioner bruges på enheder fra **Samsung** eller **LG**. Se nedenfor, hvordan problemet løses i sådanne tilfælde.

### LG- og Samsung-enheder

Ejere af mobiler fra **LG** eller **Samsung** kan også støde på et lignende problem. Det kan være forårsaget af brugen af **Dual App/Dual Messenger**-funktionen (der automatisk opretter en begrænset profil). For at løse dette problem skal denne funktion deaktiveres.

#### Samsung

- Åbn **Indstillinger**;
- Tryk på **Avanceret**;
- Rul ned og tryk på **Dual Messenger**;
- Deaktivér **Dual Messenger** for alle apps;
- Lås enheden i 5 minutter;
- Oplås skærmen, og prøv at oprette VPN-profilen igen.

#### LG

- Åbn **Indstillinger**;
- Vælg fanen **Generelt**;
- Rul ned og tryk på **Dual App**;
- Fjern alle apps fra listen;
- Genstart enheden.
