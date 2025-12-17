---
title: 기능 개요
sidebar_position: 1
---

## iOS용 AdGuard VPN이란 무엇인가요?

VPN을 사용하면 인터넷의 다른 네트워크에 안전하게 연결할 수 있습니다. It connects a user’s computer or mobile device to a server and allows one to browse the Internet using a “cover” IP address. VPN 서버가 다른 국가에 있는 경우, 이 국가에서 인터넷 연결이 설정된 것처럼 표시됩니다. 자세한 내용은 [VPN이 작동하는 방식에 대한 글](/general/how-vpn-works)을 확인하세요.

AdGuard VPN에는 여러 가지 기능이 있습니다.

- Hides your real whereabouts and helps you stay anonymous
- Changes your IP address to protect your data from tracking
- Encrypts your traffic, making the content inaccessible to scammers
- Lets you configure where to use VPN and where not to (exclusions feature)

iOS용 AdGuard VPN의 다음 장점은 자체 VPN 프로토콜입니다. AdGuard VPN 프로토콜은 다른 VPN 프로토콜에 비해 탐지하기가 매우 어렵고, 인터넷 연결 상태가 좋지 않은 경우에도 안정적입니다. [Read more about the AdGuard VPN protocol](/general/adguard-vpn-protocol).

## iOS용 AdGuard를 사용하는 방법

To use AdGuard VPN for iOS, first you need to log into your [AdGuard account](https://adguardaccount.com/). AdGuard 계정 자격 증명으로 직접 로그인하거나 Google, Apple ID 또는 Facebook(동일한 이메일 주소를 사용하여 AdGuard 계정을 등록한 경우)을 통해 로그인할 수 있습니다.

If you don’t have an AdGuard account yet, you will have to create it first.

AdGuard VPN을 사용하는 것은 매우 쉽습니다. On the main screen you can see the *Connect* (*Disconnect*) button and the list of available servers (we call them *locations*). Each server has its own location (a certain country and a city) and ping indicator.

The ping shows the server’s response time in milliseconds. This indicates how fast the VPN connection will be when you connect to that location. Selecting a server with a ping of 22 ms means that a data packet sent to this server will be returned in 22 ms.

With AdGuard VPN, you can choose from over 85 locations in dozens of countries.

![Home and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios.png)

## Exclusions

You can find the Exclusions tab by tapping the second icon in the bottom bar.

By default, AdGuard VPN is active for all websites except those added to Exclusions. You can also turn it on selectively — VPN will be active only for specified websites. To switch to this mode, tap *Change mode*.

:::note

Each mode has its own exclusion list.

:::

You can add domains (e.g., `google.com`) or subdomains (e.g., `news.google.com`) of websites to the lists in three ways:

- Enter them manually in the app
- [Choose from domain lists for popular services](#domain-lists-for-popular-services)
- Add them directly from the browser by sharing the desired pages to the AdGuard VPN app

![예외 *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

When you manually add a domain, all subdomains are added automatically (it looks like `*.google.com`). Want to keep only google.com or turn VPN off for a specific domain? Tap the line with the website — this will open a separate screen where you can manage subdomains. Just uncheck the boxes for the ones you don’t need.

![Subdomains *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

If you manually add a subdomain, the main domain will also be added — but the checkbox next to it will not be checked.

### Domain lists for popular services

Large services like Google are tricky. They usually use more than one domain — one for media files, another for the API, plus domains for different countries. For example, in the case of Google, we have 416 domains in our list — all of them need to be added to Exclusions to completely turn VPN off (or on) for the service.

Here’s how to add all necessary domains for a popular service to exclusion list:

1. Open *Exclusions*.
2. Tap *Add website*.
3. Tap *From list*.
4. Find the desired service in the list and tap *Add*.

![List of popular services *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### Import/export exclusions

Another useful feature is the import and export of exclusion lists. This way you can share exclusion lists from and to other devices.

You can do it in four steps:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. 해당 섹션을 찾아 *내보내기* 버튼을 클릭합니다. `exclusions.zip` 파일이 다운로드됩니다.

2. ZIP 파일 내부에는 일반 및 선별 목록 각각에 대해 하나씩 두 개의 `.txt` 파일이 있습니다. 제외 항목을 더 추가하거나, 기존 항목을 삭제하거나, 파일 이름을 바꾸거나, ZIP 파일을 그대로 둡니다.

3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. 예를 들어, iOS 기기에서 Mac으로 예외 목록을 가져오는 경우, 미리 `.zip` 파일을 Mac으로 보내야 합니다.

4. 예외 목록이 있는 ZIP 파일을 가져오려는 기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *가져오기* 버튼을 클릭하고 ZIP 파일을 선택합니다.

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

![가져오기/내보내기 예외 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Saved locations

This feature lets you save your favorite server locations to a dedicated tab so that you can quickly access them without the need to search or scroll through the whole list.

To add a location to *Saved*, just swipe left on it. To remove it from *Saved*, do the same:

![Saved locations add remove *mobile](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## General settings

To open General settings:

1. Tap the Settings icon (⚙) in the bottom right corner of the app’s main screen.
2. Tap *General*.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS 서버

AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### 테마

You can set your app theme to System, Dark, or Light (available in iOS 13 or later).

### 고급 설정

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### 운영 모드

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. This protocol is also secure, but a bit slower and easier to detect. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

#### Logging level

This setting is primarily used for debugging and troubleshooting purposes. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Export logs and system info

This option can be used to send the app’s logs and system info to our support or anyone else.

#### Diagnostic data

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

#### AdGuard VPN protocol

![Select VPN protocol *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.8/Auto_EN.PNG)

By default, AdGuard VPN protocol uses dynamic VPN protocol selection (*Auto-select* option). That means that AdGuard VPN automatically figures out which protocol — HTTP2/TLS or HTTP3/QUIC — will give you the best performance and switches to it instantly. This improves VPN speed and stability, which is particularly helpful in regions where VPN usage is restricted or unreliable.

If you wish, you can switch AdGuard VPN to use only HTTP2/TLS or HTTP3/QUIC protocol instead of *Auto-select*. Each protocol has its strengths, but the best choice can vary depending on your location, network conditions, and even the server you connect to.

### Send technical and interaction data

By turning this option on, you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Quick actions

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Support

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
