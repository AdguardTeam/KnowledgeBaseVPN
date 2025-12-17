---
title: 기능 개요
sidebar_position: 1
---

## 메인 화면

메인 화면에는 VPN 상태(연결됨/연결 해제됨)가 표시됩니다. *연결/연결 해제* 버튼과 사용 가능한 서버 목록도 있습니다.

서버의 위치와 핑 속도는 각 서버 옆에 표시됩니다. 핑 속도는 서버의 응답 시간을 나타냅니다. 핑이 낮을수록 연결 속도가 빨라집니다. The fastest servers always appear at the top of the list that consists of more than 85 locations in dozens of countries. *연결* 버튼을 누르거나 위치를 선택하면 가장 빠른 서버에 연결할 수 있습니다.

## Saved locations

![Saved locations *mobile](https://cdn.adguard-vpn.com/content/kb/vpn/android/saved-loc_en.png)

This section lets you save your favorite server locations to a dedicated tab so that you can quickly access them without the need to search or scroll through the whole list.

To add a location to *Saved*, just swipe left on it. To remove it, do the same.

## 예외

예외 목록을 사용하면 특정 웹사이트 및 앱에 대한 VPN 연결을 관리할 수 있습니다. *예외*에 액세스하려면 화면 하단의 왼쪽에서 두 번째 아이콘을 누릅니다.

![예외 *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

### Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- Enter it manually in the app
- Add it directly from the browser by sharing the website with AdGuard VPN
- Add it from a built-in list of services

![Add manually *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. 예를 들어 도메인 `yahoo.com`을 수동으로 제외하면 모든 `*.yahoo.com` 하위 도메인도 예외 목록에 나열되지만 `yahoo.jp` 또는 `yahoo.fr`과 같은 최상위 도메인이 있는 도메인 이름은 제외되지 않습니다.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **완전히 활성화된 상태**는 녹색 배경에 흰색 체크 표시로 표시됩니다.
- **부분적으로 활성화된 상태**(기본 도메인이 없는 활성화된 하위 도메인)는 흰색 배경에 녹색 사각형으로 표시됩니다.
- **완전히 비활성화된 상태**는 빈 확인란으로 표시됩니다.

![Website exclusions *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![앱 예외 *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/apps.jpg)

:::caution

*통합 모드*에서는 AdGuard 광고 차단기를 통해서만 앱을 관리할 수 있습니다.

:::

## 설정

화면 오른쪽 하단의 톱니바퀴 아이콘을 눌러 *설정*으로 이동할 수 있습니다.

![Settings *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/settings.jpg)

### General

![General *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/general.jpg)

In *General*, you can manage basic AdGuard VPN settings:

- Launch AdGuard VPN at system startup
- Select a DNS server to encrypt traffic and block ads when connected to VPN (we recommend using AdGuard DNS)
- Enable Kill Switch to protect your privacy and disconnect from the Internet if the VPN connection drops
- Select a color theme
- Enable anonymous crash reports to notify developers about app issues

### Advanced

![Advanced *mobile_border](https://cdn.adtidy.org/blog/new/mbc4icryptoon.png)

The *Advanced* section is a set of settings that are not as commonly used.

*운영 모드*에서는 트래픽이 어떻게 라우팅될지 지정할 수 있습니다. VPN, SOCKS5 및 통합 모드의 세 가지 모드가 있습니다. *VPN* 모드에서는 모든 트래픽이 AdGuard VPN을 통해 라우팅됩니다. *SOCKS5* 모드에서 AdGuard VPN은 트래픽 라우팅을 위해 다른 앱에서 사용할 수 있는 로컬 프록시 서버를 실행합니다. *통합 모드*에서 AdGuard VPN과 AdGuard 광고 차단기는 동시에 작동할 수 있습니다.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. AdGard 광고 차단기 앱에서 DNS 보호를 관리하고 AdGard VPN 프록시를 통해 앱을 라우팅할 수 있습니다.

:::

*Post-quantum cryptography* refers to cryptographic algorithms designed to secure data against potential threats posed by quantum computers, which could eventually break current encryption methods. This feature ensures that data remains securely encrypted, even in the face of advancements in quantum computing that might otherwise compromise traditional encryption techniques.

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

The last section of *Advanced settings* is *Low-level settings*. We urge you not to enter this section unless you are highly qualified or have been asked to do so by our support team. Here it is possible to enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used.

:::caution

In the **Preferred IP version** option, before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you will have problems connecting to the Internet. And vice versa.

:::

### 고객 지원

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/support.jpg)
