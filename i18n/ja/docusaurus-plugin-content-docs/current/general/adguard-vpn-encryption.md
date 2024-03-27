---
title: 'AdGuard VPNで使用されている暗号化の種類は？'
sidebar_position: 7
---

## はじめに

Virtual Private Network（VPN）という言葉に「プライベート」（Private）という言葉があるのは、暗号化されているからです。 A VPN creates a tunnel between your device and a VPN server, that encrypts and transmits your data securely to the open Internet. 暗号化とは、データを傍受した人が解読不可解な形に変えることであり、暗号化はVPNサービスにとって不可欠なものです。

The AdGuard VPN protocol uses the most secure and fast encryption algorithm to date — AES-256. このアルゴリズムはなぜそんなに抜群なのかを見てみましょう。

## AESの歴史

AES（Advanced Encryption Standard）暗号は、20世紀後半に米国政府の要請で開発された。 既存のDES（Data Encryption Standard）が陳腐化し、より安全な新しい暗号化アルゴリズムが必要になったからである。

政府が発表した公開コンペで、DESに似ていながらより洗練されたRijndael暗号が優勝した。 2002年にAESと改称され、米国国立標準技術研究所によって公開された。

現在では、AESは暗号化の業界標準となっている。 そのオープンな性質から、NSAや政府機関だけでなく、民間、営利、非営利団体にも利用されている。

## AES-256の仕組み

AESは共通鍵によるブロック暗号です。 共通鍵暗号であるため、データの暗号化・復号化に必要な暗号鍵は1つだけです。 ブロック暗号であるAESは、平文と呼ばれる暗号化されていない情報をブロックに分割し、元の暗号鍵を複数に分割して各ブロックに割り当てます。 最終的には暗号文、つまり暗号化されたテキストが出来上がります。

鍵のサイズは128ビット、192ビット、256ビットがあり、ブロックもビット単位で計測されます。 暗号化中、暗号元はセキュリティキーに応じて、各情報を別の情報に置き換えます。 例えばAES-256は、256個の平文ブロックから256個の暗号文ブロックを、14回のラウンドで作成します。

各ラウンドは、データをブロックに分割する、バイトを入れ替える、行をずらす、列を並べ替えるといった複数ステップで構成されます。 The result is a completely random set of characters that will only make sense when using the right encryption key.

AES-256 is the strongest level of encryption: to break this cipher, 2256 discrete combinations, each consisting of 78 digits, would have to be tried.
