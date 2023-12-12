---
title: 'Problemi con il profilo Modalità con restrizioni'
sidebar_position: 4
---

I possessori di telefoni e tablet con sistema operativo Android 7+ potrebbero dover affrontare il problema causato dall'utilizzo **un profilo con Modalità con restrizioni**. Se disponi di un profilo di questo tipo, **AdGuard VPN**, come altre applicazioni che utilizzano VPN, ottiene restrizioni sulla gestione selettiva del traffico VPN. Inoltre, uno dei motivi di questo problema potrebbe essere l'utilizzo del profilo **Dual App/Dual Messenger** sul dispositivo. Di seguito sono descritte le raccomandazioni da applicare quando si verifica questo problema.

## Soluzioni

Due modi esistano per risolvere il problema:

### Opzione 1: concedere le autorizzazioni ad AdGuard VPN utilizzando ADB

1. Attivare la **modalità sviluppatore** e abilitare il **debug USB**:

    - Aprire l'applicazione **Impostazioni** sul telefono;
    - Accedere alla sezione **Sistema** (ultimo punto del menu impostazioni). In questa sezione si trova la sottovoce **Informazioni sul telefono**;
    - Clicca la voce **Numero build** per 7 volte. Dopodiché, si riceverà una notifica all'indirizzo **Ora sei uno sviluppatore** (se necessario, inserire un codice di sblocco per il dispositivo);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    :::note

    If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).

    :::

1. [Installa e configura](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB;

    :::note

    On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

    :::

1. Collegare il dispositivo con un **cavo USB** al computer o laptop su cui è stato installato **ADB**;

1. Apri **la riga di comando** sul tuo PC:

    - **Cmd.exe** se si utilizza **Windows**;
    - **Terminale** se si utilizza **macOS**;

1. Immettere il comando `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` e premere **Invio**.

### Opzione 2: Rimuovere *L'account utente con restrizioni*

Puoi [trovare qui](https://support.google.com/a/answer/6223444?hl=en) come gestire gli account utente da un dispositivo Android.

:::note

In some cases restricted user accounts are created implicitly and cannot be removed. Ad esempio, quando utilizzi le funzionalità Dual Messenger o Dual App sui dispositivi **Samsung** o **LG**. Leggi come risolvere il problema in questi casi, di seguito.

:::

### Dispositivi LG e Samsung

Anche i possessori di **LG** o **Samsung** potrebbero riscontrare un problema simile. Può essere causato dall'uso della funzione **Dual App/Dual Messenger** (che crea automaticamente un profilo riservato). Per risolvere questo problema, è necessario disabilitare questa funzione.

#### Samsung

- Aprire **Impostazioni**;
- Premere **Avanzate**;
- Scorrere verso il basso e premere **Dual Messenger**;
- Disable the **Dual Messenger** for all apps;
- Bloccare il dispositivo per 5 minuti;
- Sbloccare lo schermo e riprovare a creare il profilo VPN.

#### LG

- Aprire le **Impostazioni**;
- Scegliere la scheda **Generale**;
- Scorrere verso il basso e premere **Dual App**;
- Remove all apps from the list;
- Riavviare il dispositivo.
