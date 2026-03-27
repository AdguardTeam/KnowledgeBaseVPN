---
title: VPN-Modi und Ausschlusslisten
sidebar_position: 11
---

In diesem Abschnitt wird erklärt, wie Sie Website- und App-Ausschlüsse in verschiedenen VPN-Modi verwenden können.

## VPN-Modi

AdGuard VPN bietet zwei Modi:

1. Standardmäßig ist AdGuard VPN für alle Websites und Apps aktiv, mit Ausnahme derer, die in den Website- und App-Ausschlusslisten aufgeführt sind.

2. AdGuard VPN ist _selektiv_ aktiv: nur für die Websites und Apps aus den Ausschlusslisten.

:::note

Sie können verschiedene VPN-Modi für Anwendungen und Websites einstellen. Sie können AdGuard VPN beispielsweise so einstellen, dass es für alle Apps aktiv ist, mit Ausnahme derer, die der App-Ausschlussliste hinzugefügt wurden, und nur für die Websites aus der Website-Ausschlussliste aktiv ist.

:::

## Ausschlusslisten

Eine Ausschlussliste ist eine Liste von Anwendungen oder Websites, die AdGuard VPN je nach aktuellem VPN-Modus aus dem Tunnel ausschließt oder in den Tunnel einbezieht.

:::note

Jeder VPN-Modus bietet zwei Ausschlusslisten: eine für Apps und eine für Websites. Insgesamt gibt es vier Ausschlusslisten:

- App-Ausschlussliste [VPN überall aktiv]
- App-Ausschlussliste [VPN selektiv aktiv]
- Website-Ausschlussliste [VPN überall aktiv]
- Website-Ausschlussliste [VPN selektiv aktiv]

:::

## Kombination von VPN-Modi und Ausschlusslisten

Sie können vier Kombinationen von VPN-Aktivitäten einrichten.

### Einrichtung 1

AdGuard VPN ist überall aktiv, außer für Apps und Websites aus den App- und Website-Ausschlusslisten.

VPN-Modus:

- Aktiv für alle Anwendungen mit Ausnahme von App-Ausschlüssen
- Aktiv für alle Websites mit Ausnahme derer, die ausgeschlossen sind

Angewendete Ausschlusslisten:

- App-Ausschlussliste [VPN überall aktiv]
- Website-Ausschlussliste [VPN überall aktiv]

Dies ist der Standard-VPN-Modus mit maximalem VPN-Schutz. Wenn Sie eine Website oder eine App von AdGuard VPN ausschließen möchten, fügen Sie sie der entsprechenden Ausschlussliste hinzu.

**Leere Ausschlusslisten:** Ihre App- und Website-Ausschlusslisten können leer sein. Wenn darin nichts angegeben ist, ist AdGuard VPN für alle Anwendungen und Websites aktiv.

**Warum diesen Modus verwenden:** Sie möchten einen umfassenden VPN-Schutz für alles auf Ihrem Gerät. Wenn eine bestimmte Anwendung oder Website außerhalb des VPN funktionieren soll, fügen Sie sie zu den Ausschlüssen hinzu.

:::caution

Wenn Sie eine Browser-App zur App-Ausschlussliste hinzufügen, wird AdGuard VPN für alle Websites, die in diesem Browser geöffnet werden, nicht aktiv sein.

:::

### Einrichtung 2

AdGuard VPN ist nur für die Apps aus der App-Ausschlussliste und für alle Websites außer denen aus der Website-Ausschlussliste aktiv.

VPN-Modus:

- Aktiv nur für Apps aus App-Ausschlüssen
- Aktiv für alle Websites mit Ausnahme derer, die ausgeschlossen sind

Angewendete Ausschlusslisten:

- App-Ausschlussliste [VPN selektiv aktiv]
- Website-Ausschlussliste [VPN überall aktiv]

Um in diesen Modus zu wechseln, lassen Sie AdGuard VPN für alle Websites aktiv und stellen Sie es so ein, dass es nur für die Apps aus der App-Ausschlussliste aktiviert ist. Dieser Modus bietet eine geringere VPN-Schutzabdeckung, da Sie Apps zur App-Ausschlussliste hinzufügen müssen, um sicherzustellen, dass diese geschützt sind.

Dieser Modus erfordert Ihre Aufmerksamkeit bei der Einrichtung Ihrer App-Ausschlussliste.

**Leere Ausschlusslisten:** Wenn die **App-Ausschlussliste** **leer** ist, ist AdGuard VPN **für Websites und Apps nicht aktiv**.

**Warum diesen Modus verwenden:** Sie benötigen ein VPN für die meisten Websites, aber nur für einige wenige Apps.

:::caution

Wenn Sie eine Browser-App nicht zur App-Ausschlussliste hinzufügen, ist AdGuard VPN in diesem Browser für alle Websites inaktiv, auch für die aus der Website-Ausschlussliste.

:::

### Einrichtung 3

AdGuard VPN ist für alle Apps aktiv, mit Ausnahme derjenigen, die in der App-Ausschlussliste aufgeführt sind, und nur für die Websites, die in der Website-Ausschlussliste aufgeführt sind.

VPN-Modus:

- Aktiv für alle Anwendungen mit Ausnahme von App-Ausschlüssen
- Nur für Websites aus Website-Ausschlüssen aktiv

Angewandte Ausschlusslisten:

- App-Ausschlussliste [VPN überall aktiv]
- Website-Ausschlussliste [VPN selektiv aktiv]

Um in diesen Modus zu wechseln, lassen Sie AdGuard VPN für alle Anwendungen aktiv und stellen Sie es so ein, dass es nur für die Websites aus der Website-Ausschlussliste aktiviert ist. Um eine App zu verwenden, fügen Sie die entsprechende Domain zur Website-Ausschlussliste hinzu.

Dieser Modus bietet sogar noch geringeren VPN-Schutz, da Sie Websites zur Website-Ausschlussliste hinzufügen müssen, um sicherzustellen, dass sie geschützt sind.

In diesem Modus müssen Sie Ihre Website-Ausschlussliste einrichten.

**Leere Ausschlusslisten:** Wenn die **Websites-Ausschlussliste** **leer** ist, ist AdGuard VPN **für alle Websites und Apps inaktiv**.

**Warum diesen Modus verwenden:** Sie benötigen ein VPN für die meisten Anwendungen, aber nur für einige wenige Websites.

:::caution

Für alle Anwendungen: Stellen Sie sicher, dass Sie die entsprechenden Domains zur Website-Ausschlussliste hinzufügen. Fügen Sie zum Beispiel für Facebook `facebook.com` zur Website-Ausschlussliste hinzu.

:::

### Einrichtung 4

AdGuard VPN ist nur für die Apps und Websites aktiv, die in den App- und Website-Ausschlusslisten aufgeführt sind.

VPN-Modus:

- Aktiv nur für Apps aus App-Ausschlüssen
- Aktiv nur für Websites aus Website-Ausschlüssen

Angewandte Ausschlusslisten:

- App-Ausschlussliste [VPN selektiv aktiv]
- Website-Ausschlussliste [VPN selektiv aktiv]

Sie müssen sowohl für Apps als auch für Websites in diesen Modus wechseln. Dieser Modus bietet die geringste VPN-Schutzabdeckung. In diesem Modus müssen Sie der Einrichtung Ihrer App- und Website-Ausschlusslisten höchste Aufmerksamkeit schenken.

**Leere Ausschlusslisten:** Wenn **eine** der Ausschlusslisten **leer** ist, ist AdGuard VPN **für Websites und Apps inaktiv**.

**Warum diesen Modus verwenden:** Sie benötigen VPN nur für bestimmte Websites und Apps.

:::caution

1. Wenn Sie eine Browser-App nicht zur App-Ausschlussliste hinzufügen, ist AdGuard VPN in diesem Browser für alle Websites inaktiv, auch für die aus der Website-Ausschlussliste.

2. Für Apps aus der App-Ausschlussliste: Stellen Sie sicher, dass Sie die entsprechenden Domains zur Website-Ausschlussliste hinzufügen. Wenn Sie beispielsweise _Facebook_ zur App-Ausschlussliste hinzufügen möchten, fügen Sie `facebook.com` zur Website-Ausschlussliste hinzu.

:::
