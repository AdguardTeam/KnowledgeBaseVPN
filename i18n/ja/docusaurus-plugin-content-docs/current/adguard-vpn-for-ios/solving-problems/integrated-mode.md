---
title: AdGuard広告ブロッカーとの併用モード
sidebar_position: 3
---

AdGuard VPNには、標準モードと併用モードという2つの動作モードがあります。 デフォルトでは「標準」動作モードが有効になっており、このモードでは独自開発の[AdGuard VPNプロトコル](/general/adguard-vpn-protocol.mdx)が使用されています。 このプロトコルは、接続速度とセキュリティの最適なコンビネーションを提供します。

しかし、この動作モードでは、AdGuard VPNとAdGuard広告ブロッカーを同時に動作させることはできません。

一方、「併用」モードでは、IPsecプロトコルを使用し、AdGuard広告ブロッカーアプリとの連携が可能になります。 AdGuard VPNのインストール時に、すでにAdGuard広告ブロッカーをインストールしている場合は、併用モードは自動的にオンになり、両方のアプリを同時に使用できるようになります。 AdGuard VPNを先にインストールし、その後AdGuard広告ブロッカーを利用することにした場合は、以下の手順で両アプリを併用することができます。

1. Open AdGuard VPN for iOS and select "Settings" in the lower right corner of the screen.

2. 「アプリの設定」→「動作モード」へ移動します。

3. モードを「*標準*」から「*併用*」に切り替えてください。 これで完了です。

> ※**併用** モードでは、「VPN対象外リスト」機能を使用したり、DNSサーバーを選択することができません。
