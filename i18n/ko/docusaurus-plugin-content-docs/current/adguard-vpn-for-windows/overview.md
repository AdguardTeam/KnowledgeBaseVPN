---
title: 기능 개요
sidebar position: 1
---

## Windows용 AdGuard VPN이란 무엇인가요?

A VPN, acronym for "virtual private network", is a service that makes your Internet connection safe and helps you stay anonymous online. VPN은 어떻게 작동하나요? VPN을 사용하지 않으면 ISP는 사용자가 방문하는 웹사이트를 볼 수 있습니다. 사용자가 누구인지, 무엇을 찾고 있는지 알고 있으며 이 데이터를 수집하고 판매할 수 있습니다. 그리고 방문하는 웹사이트에서 활동을 추적할 수도 있습니다. VPN은 암호화된 터널을 통해 트래픽을 원격 VPN 서버로 리디렉션하여 개인 정보를 보호합니다. ISP는 사용자가 요청을 보낸 위치를 모르고 사이트는 사용자가 어디에서 왔는지 모릅니다.

**Windows용 AdGuard VPN의 기능**

* 네트워크 트래픽 가로채기(스푸핑)로부터 보호합니다. AdGuard VPN은 기기와 원격 서버 사이에 터널을 생성합니다. 모든 인터넷 트래픽은 이 터널을 통과하므로 데이터가 보호됩니다. 그리고 [AdGuard의 고유한 프로토콜](/general/adguard-vpn-protocol.mdx) 덕분에 빠르고 안전한 연결이 보장됩니다.

* IP 주소를 숨깁니다. 실제 IP 주소는 사이버 범죄자의 개인 데이터의 핵심입니다. IP를 숨기지 않으면 이름, 이메일 주소, 전화번호, 신용카드 정보가 모두 유출될 수 있습니다. AdGuard VPN을 사용하면 모든 트래픽이 암호화된 터널을 통과하여 VPN 서버로 이동합니다. 따라서 기기에 해당 VPN 서버의 IP 주소가 있는 것으로 보입니다.

* 실제 위치를 숨깁니다. AdGuard VPN 서버를 선택하면 해당 위치로 즉시 순간이동됩니다. 이 기능을 언제 사용하나요? 예를 들어, 저렴한 요금으로 호텔을 예약해야 하거나 지역 타겟팅 광고를 피해야 할 때 사용할 수 있습니다.

Windows용 AdGuard VPN에는 많은 이점이 있으므로 [별도의 기사](/general/why-adguard-vpn.md)를 작성했습니다. 이 기사에서는 프로그램이 어떻게 작동하는지 살펴보겠습니다.

## Windows용 AdGuard VPN 사용을 시작하는 방법

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). 설치는 1분도 걸리지 않습니다. 사용자 약관 및 개인정보취급방침의 조건에 동의하기 위해 하나 이상의 확인란을 선택하라는 대화 상자가 나타납니다. AdGuard가 앱 사용에 대한 익명 데이터를 수집할지 여부를 결정할 수 있습니다. 마지막으로 프로그램은 [AdGuard 계정](https://auth.adguard.com/login.html)이나 소셜 네트워크(Apple, Google, Facebook)를 통해 로그인하라는 메시지를 표시합니다. 이제 Windows용 AdGuard VPN을 사용할 수 있습니다.


## 홈 화면

![Windows용 AdGuard VPN 메인 화면](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

**홈 화면**에서 가장 눈에 띄는 항목은 AdGuard VPN 연결/연결 해제 버튼입니다. Underneath, you can see the [mode](#exclusions) in which the application is running and the selected server below. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the shortest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.


## 예외 목록

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. 이 기능을 언제 사용하나요? If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. **선별 모드**는 예외 목록에 지정된 웹사이트에서만 AdGuard VPN을 활성화합니다. 이 두 모드의 예외 목록은 서로 영향을 주지 않습니다.

![예외 목록](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![예외 추가](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![목록에서 예외 항목 추가](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> 도메인을 수동으로 추가할 때 몇 가지 미묘한 차이가 있습니다. 예를 들어 도메인 `google.com`을 수동으로 제외하면 모든 `*.google.com` 하위 도메인도 예외 목록에 추가됩니다. `google.es` 또는 `google.it`과 같은 최상위 도메인이 있는 도메인 이름은 제외되지 않습니다. 또는 `youtube.com`을 예외 목록에 추가할 수 있지만 동일한 서비스 `youtu.be`의 도메인은 목록에 포함되지 않습니다.

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. 각 그룹에는 각 서비스와 관련된 모든 도메인 이름과 하위 도메인이 포함되었습니다.

### Import/export exclusion lists

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## 설정

![Settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.


### App settings

![App settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

페이지 하단에는 **DNS 서버** 및 **고급 설정**의 두 섹션이 있습니다.

#### DNS 서버

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Advanced settings

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

**Operating mode**

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.


### App exclusions

![Adding an app to exclusions](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## 기타 탭

### 정보

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy Policy.

### Account

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## 고객 지원

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.