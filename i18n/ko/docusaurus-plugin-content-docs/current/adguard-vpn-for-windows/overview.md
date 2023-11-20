---
title: 기능 개요
sidebar_position: 1
---

## Windows용 AdGuard VPN이란 무엇인가요?

VPN(가상 사설망)은 안전한 인터넷 연결을 제공하고 온라인에서 익명성을 유지하는 데 도움이 되는 도구입니다. VPN은 어떻게 작동하나요? VPN을 사용하지 않으면 ISP는 사용자가 방문하는 웹사이트를 볼 수 있습니다. 사용자가 누구인지, 무엇을 찾고 있는지 알고 있으며 이 데이터를 수집하고 판매할 수 있습니다. 그리고 방문하는 웹사이트에서 활동을 추적할 수도 있습니다. VPN은 암호화된 터널을 통해 트래픽을 원격 VPN 서버로 리디렉션하여 개인 정보를 보호합니다. ISP는 사용자가 요청을 보낸 위치를 모르고 사이트는 사용자가 어디에서 왔는지 모릅니다.

## What AdGuard VPN for Windows does

- 네트워크 트래픽 가로채기(스푸핑)로부터 보호합니다. AdGuard VPN은 기기와 원격 서버 사이에 터널을 생성합니다. 모든 인터넷 트래픽은 이 터널을 통과하므로 데이터가 보호됩니다. And thanks to [AdGuard's unique protocol](/general/adguard-vpn-protocol), you're guaranteed a fast and secure connection.

- IP 주소를 숨깁니다. 실제 IP 주소는 사이버 범죄자의 개인 데이터의 핵심입니다. IP를 숨기지 않으면 이름, 이메일 주소, 전화번호, 신용카드 정보가 모두 유출될 수 있습니다. AdGuard VPN을 사용하면 모든 트래픽이 암호화된 터널을 통과하여 VPN 서버로 이동합니다. 따라서 기기에 해당 VPN 서버의 IP 주소가 있는 것으로 보입니다.

- 실제 위치를 숨깁니다. AdGuard VPN 서버를 선택하면 해당 위치로 즉시 순간이동됩니다. 이 기능을 언제 사용하나요? 예를 들어, 저렴한 요금으로 호텔을 예약해야 하거나 지역 타겟팅 광고를 피해야 할 때 사용할 수 있습니다.

AdGuard VPN for Windows has many advantages, so we've dedicated [a separate article](/general/why-adguard-vpn) to them. Here, however, we want to focus more on the application itself and how it works.

## How to start using AdGuard VPN for Windows

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). The installation takes no more than a minute — and you'll see a dialog window where you'll need to check at least one box applying the terms of the User Agreement and the Privacy policy. And it's up to you to decide whether you want AdGuard to collect anonymized data about your app usage. At last the program will ask you to sign in, either via [AdGuard account](https://auth.adguard.com/login.html) or via social networks (Apple, Google, Facebook). That's all, you can now use AdGuard VPN for Windows.

## Home screen

![AdGuard VPN for Windows Home Page](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

The most noticeable item on the **Home Screen** is the AdGuard VPN connect/disconnect button. Above the button you can see the [mode](#exclusions) in which the application is running, and below it you can see the selected server. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the lowest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.

## Exclusions

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. What does this mean? If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. The **Selective mode** has the opposite effect: it activates AdGuard VPN only on the websites specified in the exclusion list. Please note that these two modes' exclusions lists are independent from one another.

![Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![Add Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Add Exclusions from list](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> 도메인을 수동으로 추가할 때 몇 가지 미묘한 차이가 있습니다. 예를 들어 도메인 `google.com`을 수동으로 제외하면 모든 `*.google.com` 하위 도메인도 예외 목록에 추가됩니다. `google.es` 또는 `google.it`과 같은 최상위 도메인이 있는 도메인 이름은 제외되지 않습니다. 또는 `youtube.com`을 예외 목록에 추가할 수 있지만 동일한 서비스 `youtu.be`의 도메인은 목록에 포함되지 않습니다.

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### 예외 목록 가져오기/내보내기

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## Settings

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.

### 앱 설정

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### DNS 서버

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### 고급 설정

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Operating mode

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Logging level

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

##### Use QUIC

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

### 앱 예외 목록

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Other tabs

### 정보

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### 계정

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Support

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
