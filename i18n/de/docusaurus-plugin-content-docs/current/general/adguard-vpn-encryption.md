---
title: Welcher Verschlüsselungstyp wird in AdGuard VPN verwendet
sidebar_position: 7
---

## Einleitung

Encryption is the reason the word “private” exists in the term “Virtual Private Network”. Ein VPN schafft einen Tunnel zwischen Ihrem Gerät und einem VPN-Server, der Ihre Daten verschlüsselt und sicher ins offene Internet überträgt. Der Verschlüsselungsprozess, d. h. das Umwandeln von Daten in Kauderwelsch, das niemand lesen kann, der sie abfängt, ist für jeden VPN-Dienst unerlässlich.

Das AdGuard VPN-Protokoll verwendet den bisher sichersten und schnellsten Verschlüsselungsalgorithmus — AES-256. Erfahren Sie, was es ist und warum es so gut ist.

## Ein historischer Überblick über die AES

Die AES-Verschlüsselung (Advanced Encryption Standard) wurde Ende des 20. Jahrhunderts auf Wunsch der US-Regierung entwickelt: Der bestehende Data Encryption Standard (DES) war veraltet und ein neuer, sicherer Verschlüsselungsalgorithmus wurde benötigt.

In einem von der Regierung ausgeschriebenen öffentlichen Wettbewerb gewann die Rijndael-Chiffre — ähnlich wie DES, aber viel anspruchsvoller. Im Jahr 2002 wurde sie in AES umbenannt und von der US-Behörde veröffentlicht. Nationales Institut für Standards und Technologie.

Heute ist AES der Industriestandard für Verschlüsselung. Aufgrund seiner offenen Natur wird es von der NSA und Regierungsbehörden sowie von privaten, kommerziellen und gemeinnützigen Organisationen verwendet.

## Funktionsweise von AES-256

AES ist eine Blockverschlüsselung mit einem symmetrischen Schlüssel. Als Verschlüsselung mit symmetrischem Schlüssel benötigt es nur einen geheimen Schlüssel, um die Daten zu verschlüsseln und zu entschlüsseln. Als Blockchiffre unterteilt AES die unverschlüsselte Information, die als Klartext bezeichnet wird, in Blöcke, teilt den ursprünglichen kryptografischen Schlüssel in mehrere auf und wendet sie auf jeden Block an. Am Ende erhält man einen Chiffretext, d. h. einen verschlüsselten Text.

Es gibt verschiedene Schlüsselgrößen – 128, 192 und 256 Bit – und die Blöcke werden auch in Bit gemessen. Während des Verschlüsselungsprozesses ersetzt der Verschlüssler je nach Sicherheitsschlüssel jede Information durch eine andere. So erzeugt beispielsweise AES-256 in 14 Runden aus 256 Blöcken Klartext 256 Blöcke Chiffretext.

Die Runden bestehen aus mehreren Schritten: Daten in Blöcke aufteilen, Bytes ersetzen, Zeilen verschieben und Spalten neu anordnen. Das Ergebnis ist ein völlig zufälliger Zeichensatz, der nur bei Verwendung des richtigen Verschlüsselungscodes Sinn ergibt.

AES-256 ist die stärkste Verschlüsselungsstufe: Um diese Chiffre zu knacken, müssten 2256 diskrete Kombinationen, die jeweils aus 78 Ziffern bestehen, ausprobiert werden.
