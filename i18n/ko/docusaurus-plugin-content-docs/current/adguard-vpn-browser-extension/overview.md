---
title: 기능 개요
sidebar_position: 1
---

AdGuard VPN Browser Extension is available for Chrome, Firefox, Opera, and Edge. The UI and functionality doesn’t differ between browsers so the overview below will be relevant for AdGuard VPN extensions for all browsers.

:::note

You can only use AdGuard VPN Browser Extension when logged in. Sign in with your AdGuard account or via Google, Facebook, or Apple. In the latter case make sure that your account is bound to the same email address as your AdGuard account. If you have an [AdGuard VPN subscription](/general/subscription), it will be activated automatically in AdGuard VPN Browser extension. Don’t have an AdGuard account yet? [Create it here](https://auth.adguardaccount.com/registration.html).

:::

To manage your AdGuard VPN Browser Extension:

- Either click its icon on the browser’s panel, click the hamburger menu icon, and select *Settings*,
- Or go to the *Manage extensions* page in your browser, click *Details* below *AdGuard VPN* and manage its settings from there.

Once done, you’ll see several tabs on the left:

## 설정

A few important settings are gathered inside this tab. Here you can choose a DNS server to use, add or remove the AdGuard VPN icon from the browser’s context menu, block WebRTC, change the extension’s theme, and allow AdGuard to gather anonymous crash reports and technical data.

### DNS 서버 선택

By default, the [system DNS server](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) provided by your ISP is selected, but it may compromise your privacy. With AdGuard VPN Browser extension, you can select a DNS server that provides better speed and security, and even blocks ads or potentially dangerous domains. Brief descriptions under the names of DNS servers will help you navigate and make your decision.

Learn more about [DNS servers from various providers](https://adguard-dns.io/kb/general/dns-providers/).

## 예외 목록

The next tab contains one of the main distinctive features of AdGuard VPN — two modes with separate exclusion lists.

In **General mode**, AdGuard VPN by default works on all websites, with the exception of the websites you’ve added to the exclusions list. In **Selective mode**, vice versa, AdGuard VPN by default doesn’t work anywhere. You can add any websites where you’d like it to work to an exclusions list, separate from the one you saw in the **General mode**.

When adding a website to an exclusion list, you can enter the website manually or select the **From the list** option. In the latter case, you’ll see eight categories (for example, *Shopping* or *Messengers*), each suggesting several popular services. You can exclude any of these services in one click. This will add all domains relevant to that specific service to exclusions.

### 가져오기 및 내보내기

Not only can you add and remove websites, you can also transfer ready exclusions lists to other devices where AdGuard VPN is installed. To export your exclusions list, follow the 4-step instruction below:

1. 예외 목록을 내보내려는 기기에서 AdGuard VPN 확장 프로그램을 엽니다. Find the appropriate section and click the *Export* button. `exclusions.zip` 파일이 다운로드됩니다.
1. There are two `.txt` files inside the archive, one for each of the General and Selective lists. 예외 항목을 더 추가하거나, 기존 항목을 삭제하거나, 파일 이름을 바꾸거나, ZIP 파일을 그대로 둡니다.
1. 다른 기기 간에 전송할 때 가져오기를 위해 `.zip` 파일을 기기로 보내는 것을 잊지 마십시오.
1. 해당 기기에서 AdGuard VPN을 엽니다. Find the appropriate section, click the *Import* button and select the archive. 끝!

## 계정

The third tab of AdGuard VPN Browser extension is utterly minimalistic, containing only the email address you used to sign into your account and two buttons, *Manage* and *Sign out*. Clicking the *Manage* button takes you to your personal AdGuard account, where you can see all your current licenses and subscriptions, as well as devices connected to them.

## 고객 지원

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn’t working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

## 정보

Another minor tab, where you can check the extension’s version, visit the official website, and view the EULA or Privacy policy.
