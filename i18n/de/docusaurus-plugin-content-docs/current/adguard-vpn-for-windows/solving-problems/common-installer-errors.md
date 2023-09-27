---
title: Häufige Installationsfehler
sidebar_position: 2
---

Dieser Artikel enthält einige der häufigsten Fehler, die während der Installation von AdGuard VPN für Windows auftreten können, und mögliche Lösungen.

### Fehler 5: Zugriff verweigert {#error-5}

Dieser Fehler tritt auf, wenn etwas mit den Berechtigungen nicht stimmt. Es kann verschiedene Gründe geben, warum das AdGuard VPN-Installationsprogramm nicht über die erforderlichen Berechtigungen verfügt, um den Installationsvorgang ordnungsgemäß abzuschließen. Sie können die folgenden Schritte versuchen:

- Deaktivieren Sie vorübergehend Ihre Antivirenprogramme. Einige von ihnen können die Installation beeinträchtigen, je nachdem, wie stark sie eingestellt sind.

- Wählen Sie einen anderen Installationsordner. Es ist möglich, dass der aktuelle Installationsordner Zugriffsbeschränkungen hat. Stellen Sie außerdem sicher, dass Sie kein externes oder virtuelles Laufwerk usw. auswählen.

- Starten Sie Ihren Computer neu. Manchmal sind die Berechtigungsprobleme vorübergehend und können durch einen Neustart des PCs behoben werden.

### Fehler 112: Datenträger ist voll, Fehler 1632: Temporärer Ordner voll oder unzugänglich {#error-112}

Es handelt sich um zwei verschiedene Fehler mit sehr ähnlichen Lösungen. Wie der Name schon sagt, hat das AdGuard VPN-Installationsprogramm nicht genügend Speicherplatz gefunden, um die Installation abzuschließen. Es gibt mehrere Möglichkeiten, das Problem zu beheben:

- Deinstallieren Sie einige Programme oder löschen Sie unnötige Dateien von dem Laufwerk, auf dem Sie AdGuard VPN installieren wollten.

- Laden Sie [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/) herunter, installieren Sie es und führen Sie es aus, eine kostenlose Software von Malwarebytes. Es befreit Ihr System unter anderem von allen Arten zusätzlicher „übrig gebliebener“ Dateien, die nach der fehlerhaften Deinstallation von Programmen usw. zurückbleiben. Das wird helfen, etwas Speicherplatz freizumachen.

- Starten Sie Ihren Computer neu. Manchmal können temporäre Dateien eine beträchtliche Menge an Speicherplatz beanspruchen, und ein Neustart Ihres PCs ist die zuverlässigste Methode, sie loszuwerden.

### Fehler 1601: Windows Installer ist nicht zugänglich {#error-1601}

Man könnte sagen, dass dies eine besondere Unterart des Fehlers 1603 ist. Die möglichen Lösungen sind ähnlich:

- Starten und registrieren Sie den Microsoft Installer-Dienst erneut. Das erfordert etwas Arbeit.

    1. Drücken Sie *Win ⊞ + R* und geben Sie **services.msc** ein.
    1. Suchen Sie in der Liste und doppelklicken Sie auf *Windows Installer*.
    1. Klicken Sie auf *Starten* unter *Dienststatus* und auf *OK*. Wenn der Dienststatus **Wird ausgeführt** lautet, sollten Sie zuerst auf *Beenden* und anschließend auf *Starten* klicken.
    1. Drücken Sie *Win + R*, geben Sie ***msiexec /unregister*** ein und drücken Sie *Eingabetaste* ⏎.
    1. Drücken Sie erneut *Win ⊞ + R*, geben Sie ***msiexec /regserver*** ein und drücken Sie *Eingabetaste* ⏎

- Starten Sie den PC neu und beginnen Sie die Installation von vorne. Manchmal reicht das schon aus, um das Problem zu beheben.

### Fehler 1602: Vom Benutzer abgebrochen {#error-1602}

Wenn Sie diese Fehlermeldung erhalten, haben Sie den Installationsprozess wahrscheinlich auf die eine oder andere Weise manuell unterbrochen. Was Sie tun können, ist:

- Schließen Sie das Fenster des Installationsprogramms nicht. Wenn die Installation abgeschlossen ist, wird sie automatisch beendet.

- Wenn während der Installation ein Dialogfenster erscheint, klicken Sie auf „Ja“, um dem Installationsprogramm die erforderlichen Berechtigungen zu erteilen. Wenn Sie auf „Nein“ klicken, wird die Installation abgebrochen.

- Starten Sie keine anderen Prozesse, während die Installation ausgeführt wird.

### Fehler 1603: Schwerwiegender Fehler bei der Installation {#error-1603}

Der Fehler klingt erschreckender als er tatsächlich ist. In Wirklichkeit handelt es sich um einen eher allgemeinen Fehler, der viele verschiedene Ursachen haben kann, von denen einige leicht zu beheben sind. Probieren Sie die folgenden Lösungen aus:

- Drücken Sie die Taste *Win*, suchen Sie nach *Eingabeaufforderung*, und führen Sie sie aus. Geben Sie dort `sfc /scannow` ein und drücken Sie *Enter*.

- Wählen Sie einen anderen Installationsordner. Es ist möglich, dass der aktuelle Installationsordner Zugriffsbeschränkungen hat. Stellen Sie außerdem sicher, dass Sie kein externes oder virtuelles Laufwerk usw. auswählen.

- Deinstallieren Sie AdGuard VPN mit unserem speziellen [Deinstallationstool](/adguard-vpn-for-windows/installation#advanced) und wiederholen Sie anschließend die Installation.

- Starten und registrieren Sie den Microsoft Installer-Dienst erneut. Das erfordert etwas Arbeit.

    1. Drücken Sie *Win ⊞ + R* und geben Sie ***services.msc*** ein.
    1. Suchen Sie in der Liste und doppelklicken Sie auf *Windows Installer*.
    1. Klicken Sie auf *Starten* unter *Dienststatus* und auf *OK*. Wenn der Dienststatus **Wird ausgeführt** lautet, sollten Sie zuerst auf *Beenden* und anschließend auf *Starten* klicken.
    1. Drücken Sie *Win + R*, geben Sie ***msiexec /unregister*** ein und drücken Sie *Eingabetaste* ⏎.
    1. Drücken Sie erneut *Win ⊞ + R*, geben Sie ***msiexec /regserver*** ein und drücken Sie *Eingabetaste* ⏎

- Verschaffen Sie sich für die Installation volle Berechtigungen auf dem Laufwerk. Es ist möglich, dass der Fehler 1603 auftritt, weil Sie nicht die vollen Berechtigungen für den Speicherort der Datei haben. Es ist auch nicht so einfach wie einige der anderen Lösungen:

    1. Öffnen Sie *Datei-Explorer*, klicken Sie mit der rechten Maustaste auf das Laufwerk mit dem Installationsort und wählen Sie *Eigenschaften*.
    1. Öffnen Sie den Tab *Sicherheit* und klicken Sie auf *Bearbeiten*.
    1. Klicken Sie auf *SYSTEM* und vergewissern Sie sich, dass das Kästchen *Zulassen* für jedes Element in *Berechtigungen für SYSTEM* aktiviert ist (sofern es aktiviert werden kann). Führen Sie die gleiche Prüfung für *Administratoren* durch.
    1. Klicken Sie auf *OK*, um zum Dialogfeld *Eigenschaften* zurückzukehren. Klicken Sie dann auf *Erweitert*.
    1. Klicken Sie auf *Berechtigungen ändern*.
    1. Doppelklicken Sie im Tab *Berechtigungen* auf *Administratoren*.
    1. Wählen Sie *Dieser Ordner, Unterordner und Dateien* für das Feld *Gilt für* und markieren Sie alle verfügbaren *Grundlegenden Berechtigungen*. Klicken Sie danach auf *OK*.
    1. Führen Sie den gleichen Vorgang (ab Punkt 7) für *SYSTEM* durch.
    1. Klicken Sie auf *OK* bis zum Ende. Versuchen Sie, AdGuard erneut zu installieren.

### Fehler 1618: Eine andere Installation ist bereits im Gange {#error-1618}

Dieser Fehler tritt auf, wenn mehrere Instanzen des AdGuard VPN-Installationsprogramms gleichzeitig gestartet werden. Was ist zu tun, wenn Sie diesen Fehler erhalten:

- Starten Sie Ihren PC neu und starten Sie das Installationsprogramm erneut. Wenn Sie den Computer neu starten, werden alle laufenden Prozesse angehalten, einschließlich aller Kopien des Installationsprogramms.

- Klicken Sie nicht mehrmals auf das Installationsprogramm, auch wenn es nicht sofort startet. Manchmal kann es ein paar Sekunden dauern, bis die Benutzeroberfläche des Installationsprogramms angezeigt wird.

### Fehler 1638: Eine andere Version dieses Produkts ist bereits installiert {#error-1638}

Es ist sehr wahrscheinlich, dass Sie AdGuard VPN schon einmal installiert haben.

- Überprüfen Sie, ob AdGuard VPN bereits auf Ihrem Computer installiert ist. Sie können dies tun, indem Sie die Taste *Win* drücken und ***AdGuard VPN*** eingeben.

- Möglicherweise gibt es einige übrig gebliebene Dateien von einer früheren AdGuard VPN-Installation. Deinstallieren Sie AdGuard mit unserem speziellen [Deinstallationsprogramm](/adguard-vpn-for-windows/installation#advanced) und wiederholen Sie anschließend die Installation.

### Andere Fehler {#other}

Wenn Sie auf einen Fehler gestoßen sind, der oben nicht aufgeführt ist, ist es möglich, dass wir ihn selbst lösen können. Dazu benötigen wir jedoch Protokolldateien von Ihnen. Bitte führen Sie die folgenden Schritte aus:

- Suchen und archivieren Sie **AdGuard VPN-Installationsprotokolle** auf dieselbe Weise wie in [diesem Artikel](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/) beschrieben.

- Suchen und Speichern auf der Festplatte **Event Viewer** Protokolle. [Dieser Artikel](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) erklärt, wie man das macht.

Bitte senden Sie alle diese Dateien aus den beiden vorangegangenen Schritten per E-Mail an **support@adguard.com** und beschreiben Sie das Problem im Nachrichtentext. Unser Support-Team wird Ihnen so schnell wie möglich antworten.
