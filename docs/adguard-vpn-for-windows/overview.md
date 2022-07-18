---
title: Features overview
sidebar position: 1
---

## What is AdGuard VPN for Windows

A VPN, acronym for "virtual private network", is a service that makes your internet connection safe and helps you stay anonymous online. How does it work? Every time you visit a website without using a VPN, your ISP sees it. It knows who you are and what you're looking for, and it can collect and sell this data. In it's turn, the website you came to can also track your activity. When you enable a VPN application, it redirects your traffic through an encrypted tunnel to a remote VPN server, ensuring your privacy: the ISP doesn't know where to you sent a request, and the site doesn't know where you came from. 

**What does AdGuard VPN for Windows do**

* Protects from network traffic interception (spoofing). AdGuard VPN creates an encrypted tunnel between your device and a remote server. All your Internet traffic passes through this tunnel, so your data is protected along the way. And thanks to [AdGuard's unique protocol](/general/adguard-vpn-protocol.mdx), you're guaranteed a fast and secure connection.

* Masks your IP address. Your true IP address is the key to your personal data for cybercriminals. Your name, email address, phone number, credit card information can all fall into the hands of fraudsters if you don't hide your IP. With AdGuard VPN, as we said before, all your traffic goes through an encrypted tunnel and comes to the VPN server. Therefore, from the outside it appears that your device has the IP address of said VPN server. 

* Hides your real location. By selecting any of the AdGuard VPN servers, you are instantly "teleported" to its location. What does this give you? For example, the ability to book a hotel at locals' rates or hide from geotargeted advertising.

AdGuard VPN for Windows has many advantages, so we've dedicated [a separate article](/general/why-adguard-vpn.md) to them. Here, however, we want to focus more on the application itself and how it works.

## How to start using AdGuard VPN for Windows

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/en/welcome.html). The installation takes no more than a minute — and you'll see a dialog window where you'll need to check at least one box applying the terms of the User Agreement and the Privacy Policy. And it's up to you to decide whether you want AdGuard to collect anonymized data about your app usage. At last the program will ask you to sign in, either via [AdGuard account](https://auth.adguard.com/login.html) or via social networks (Apple, Google, Facebook). That's all, you can now use AdGuard VPN for Windows. 


## Home Screen

![AdGuard VPN for Windows Home Page](https://cdn.adguard.com/content/kb/VPN/windows/main_en.png)

The most noticeable item on the **Home Screen** is the AdGuard VPN connect/disconnect button. Underneath, you can see the [mode](#exclusions) in which the application is running, and below — the selected server. On the right side of the screen you will find all available locations, and the fastest, i.e. with the shortest ping, will be listed at the top of the list. 

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**. With the first tab done, let's move on. 


## Exclusions

AdGuard VPN for Windows can work in two modes: **General** or **Selective**. What does this mean? If you want the application to work on all but a few sites, activate the **General mode** and list the resources you want to exclude from the tunnel. The **Selective mode** has the opposite effect: it activates AdGuard VPN only on the websites specified in the exclusion list. Please note that these two modes' exclusions lists are independent from one another.

![Exclusions](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

There are two options for creating exclusions lists: **Manually** and **From the list**. Click the **Add a website** line and choose the format you prefer for adding sites to the exclusions. 

![Add Exclusions](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Add Exclusions from list](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> When adding domains manually, you should take into account some nuances. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list. 

We would recommend to use the option **From the list** to avoid unnecessary hassle. We have already grouped eight different categories of popular services for you: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform. That way you will be certain you haven't forgotten any service or domain you'd like to keep functioning while VPN is on, or vice versa.

### Import/export exclusions lists

In the **Exclusions** tab on the right side of the screen there is a section **Actions**. It may come in handy if you need to export or import ready-made exclusions lists. 

To export the list of exclusions from AdGuard for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones. 

To transfer the exclusions lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the ready-made exclusions lists, click *Exclusions*, then *Import exclusions* and select the previously sent archive.
 
## Settings

![Settings](https://cdn.adguard.com/content/kb/VPN/windows/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **General** and **Split tunneling**.


### General

The **General** section contains many useful features. Here you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection fails. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that we can make it better. Here you can also change the default **Light Theme** to a **Dark Theme**. 

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

![DNS settings and Advanced settings](https://cdn.adguard.com/content/kb/VPN/windows/settings_dns_and_advanced_en.png)

#### DNS servers

The **DNS servers** tab allows you to add your own custom DNS server. Why should you do this? For example, not to rely on the default DNS server, which is often controlled by your ISP. 

You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking and phishing in addition to the standard functions. 

#### Advanced Settings

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

**Operating Mode**

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.    

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks. 


### Split tunneling

![Split tunnelling](https://cdn.adguard.com/content/kb/VPN/windows/split_tunneling_en.png)

AdGuard VPN encrypts the traffic not only of your browsers, but also of other apps installed on your computer. If you want to exclude certain applications from AdGuard's work, put them to the **Split tunneling** list. 

## Other tabs

### About

The **About program** tab provides information about the current version of AdGuard VPN for Windows, an update button, and a few useful links: AdGuard website, forum, EULA and Privacy Policy.

### About license

Here you will find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Support

In this tab we've collected a lot of useful links: FAQ page, application feedback form, social media pages, and **Knowledge Base**.