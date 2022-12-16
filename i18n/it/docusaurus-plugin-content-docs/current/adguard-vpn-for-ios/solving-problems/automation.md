---
title: Come configurare l'automazione VPN AdGuard per le app per iPhone e iPad
sidebar_position: 1
sidebar_label: Come impostare l'automazione di AdGuard VPN
---

AdGuard VPN ha una sezione *Esclusioni* e due modalità operative: *Generale* e *Selettivo*. In *Modalità generale*, AdGuard VPN funziona ovunque tranne che sui siti web aggiunti alle esclusioni. Al contrario, in *Modalità selettiva*, la VPN non funziona da nessuna parte tranne i siti elencati nell'elenco delle esclusioni. Si noti che per ogni modalità è necessario creare un elenco separato.

Come si può notare, solo i siti web possono essere aggiunti alla sezione *Esclusioni*. Per regolare AdGuard VPN per le app è necessario utilizzare un'altra funzione. Le nostre app desktop hanno il modulo *Split tunneling* e l'app per Android ha *Impostazioni delle app* — queste impostazioni ti consentono di decidere per quali app deve essere eseguito AdGuard VPN.

Ma, come spesso accade, a causa di una serie di sfumature tecniche, è impossibile implementare una funzione così utile per iOS, almeno per ora. Pertanto, ti offriamo un modo alternativo per automatizzare AdGuard VPN per le app su iPhone e iPad.

## Configurazione dell'attivazione automatica di AdGuard VPN

Se hai bisogno di una VPN per una o più app, configura AdGuard VPN in modo che si accenda e si spenga automaticamente quando le apri e le chiudi. Accedere alla scheda Esclusioni, selezionare la modalità Generale e seguire le istruzioni. Qui descriviamo come creare l'automazione per Twitter, ma puoi scegliere qualsiasi altra app.

![Istruzioni. Parte 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)
1. Scaricare [l'applicazione *Shortcuts*](https://apps.apple.com/us/app/shortcuts/id915249334) dall'App Store e accedere alla sezione *Automation* toccando l'icona dell'orologio nella parte inferiore dello schermo.
2. Toccare il pulsante *Crea automazione personale*, quindi trovare *App* nell'elenco che si apre e toccarlo.
3. Nella finestra successiva, assicurarsi che l'opzione *È aperta* sia selezionata, quindi toccare *Scegliere* per scegliere l'applicazione.

![Istruzioni. Parte 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Inizia a inserire il nome dell'applicazione, nel nostro caso Twitter, e selezionalo. Quindi premi *Fatto* nell'angolo superiore destro dello schermo. Dopodiché, premi *Avanti* nell'angolo in alto a destra dello schermo. E nella finestra aperta premi *Aggiungi azione*.

![Istruzioni. Parte 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

5. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

![Instruction. Parte 4](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
7. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, the tap *Done*.

Now you have a new scenario: AdGuard VPN will be automatically enabled when you start the Twitter app. Now you need to create another command that will make AdGuard VPN automatically turn off when you close the app.

## Configuring AdGuard VPN automatic shutdown

![Istruzioni. Parte 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)
1. In the same *Shortcuts* app start creating a new automation: click *+* in the upper right corner of the screen and then on the *Create Personal Automation* button. In the opened window choose *App*.
2. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

![Instruction. Parte 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

![Istruzioni. Parte 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

4. In the new window tap *Set VPN connection*.
5. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
6. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

Done! AdGuard VPN will now be enabled on your device every time you open the Twitter app, and disabled when you close it. You can repeat the same steps for any other app. 