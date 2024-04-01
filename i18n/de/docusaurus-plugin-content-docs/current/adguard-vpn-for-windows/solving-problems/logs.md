---
title: So sammeln und versenden Sie Protokolle
sidebar position: 1
---

Wenn Sie bei der Verwendung von AdGuard VPN für Windows auf Probleme stoßen, können Sie uns darüber informieren. Wir würden es begrüßen, wenn Sie uns auch Anwendungsprotokolle zusenden würden, da diese uns helfen, Probleme schneller zu lösen.

## Sammeln von Protokollen

### Standardprotokolle

Standardmäßig verwendet AdGuard VPN für Windows die Standardprotokollierungsstufe, d. h. die grundlegende Sammlung von Daten über laufende Prozesse der Anwendung. Bevor Sie die Protokolle senden, öffnen Sie bitte AdGuard VPN für Windows und wiederholen Sie, wenn möglich, die Aktionen, die zu dem Fehler geführt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist.

### Erweiterte Protokolle

In den meisten Fällen reicht die Standardprotokollierungsebene aus, um mögliche Fehler aufzuspüren. Es gibt jedoch Fälle, in denen detailliertere technische Informationen über das Gerät und die Verbindungen erforderlich sind und unser Support-Team Sie dann auffordert, die Erweiterte Protokollierungsebene zu aktivieren. Um diese Protokolle zu senden, machen Sie Folgendes:

1. Öffnen Sie AdGuard VPN für Windows und wählen Sie im Menü oben **Einstellungen** ➜ **App-Einstellungen** ➜ **Erweiterte Einstellungen** ➜ **Protokollebene**.

1. Im Abschnitt **Protokollierungsebene** wählen Sie **Vollständige Aufzeichnung**.

    ![Protokollierungsstufe *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. Wiederholen Sie die Aktionen, die zu dem Fehler geführt haben, und notieren Sie den Zeitpunkt, zu dem er aufgetreten ist.

1. Schalten Sie die Protokollierungsebene zurück auf **Standard-Aufzeichnung**.

### Protokolle der Ablaufverfolgung

Manchmal bittet unser Support-Team Sie um die Übersendung von Protokollen. Dazu müssen Sie die folgenden Schritte ausführen:

1. Klicken Sie mit der rechten Maustaste auf das AdGuard VPN-Symbol im Infobereich der Taskleiste und wählen Sie **AdGuard VPN beenden**.

    ![Beenden *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/exit.png)

    Wenn eine Warnmeldung angezeigt wird, stimmen Sie zu, den Dienst zu beenden.

    ![Achtung *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/attention.png)

1. Öffnen Sie die Eingabeaufforderung (geben Sie `cmd` in der Startleiste ein).

1. Führen Sie die Anwendung mit dem Befehl `C:\"Program Files (x86)"\AdGuardVpn\AdGuardVpnSvc.exe /trace` aus, wenn Sie 64-Bit-Windows verwenden, und `C:\"Program Files"\AdGuardVpn\AdGuardVpnSvc.exe /trace`, wenn Sie 32-Bit verwenden.

1. Reproduzieren Sie das Problem. Wir empfehlen Ihnen dringend, den genauen Zeitpunkt zu notieren, zu dem Sie das Problem reproduzieren: Dies hilft unserem Support-Team, relevante Protokolleinträge zu finden und das Problem schneller zu lösen.

1. Exportieren Sie die aufgezeichneten Protokolle: **Support** ➜ **Protokolle und Systeminfo exportieren**.

Machen Sie sich keine Sorgen, wenn Ihre Protokolldatei groß ist. Wir müssen so viele Details wie möglich wissen, um Ihr Problem zu lösen.

## Protokolle senden

Um Protokolle an unser Support-Team zu senden, folgen Sie bitte den nächsten Schritten:

1. Klicken Sie auf **Support** im Menü oben ➜ **Fehler melden**.

    ![Einen Fehler melden *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/support_report.jpeg)

1. Geben Sie in das sich öffnende Formular Ihre E-Mail-Adresse ein und beschreiben Sie den Fehler, den Sie gefunden haben, einschließlich der Uhrzeit, zu der er aufgetreten ist. Wenn Sie das Problem nicht reproduzieren können, geben Sie so genau wie möglich an, wann es zuletzt aufgetreten ist.

    ![Bericht *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/report_bug.png)

1. Neben **Detaillierte Systeminformationen senden** ist ein Häkchen gesetzt, d. h., wenn Sie einen Bericht senden, senden Sie auch Protokolle.

> Wenn es für Sie aus irgendeinem Grund bequemer ist, uns Protokolle auf andere Weise zu senden, können Sie sie selbst exportieren. Gehen Sie dazu auf **Support** → **Protokolle und Systeminformationen exportieren**.

![Report *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**Hinweis**: Wenn Sie beim Versuch, Protokolle zu exportieren, auf Probleme stoßen, gibt es eine alternative Möglichkeit. Bitte befolgen Sie diese Schritte:

1. Öffnen Sie die Explorer-App

1. Geben Sie `%programdata%/adguardvpn` in das Suchfeld ein

1. Suchen Sie den Ordner mit dem Namen **Logs**

1. Archivieren Sie den Ordner

1. Senden Sie es an unser Support-Team
