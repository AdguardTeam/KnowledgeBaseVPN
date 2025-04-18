---
title: Özelliklere genel bakış
sidebar_position: 1
---

## Windows için AdGuard VPN ne yapar

- Ağ trafiğinin kesilmesine (aldatma) karşı korur. AdGuard VPN, cihazınızla uzak sunucu arasında şifrelenmiş bir tünel oluşturur. Tüm internet trafiğiniz bu tünelden geçer, böylece verileriniz yol boyunca korunur. And thanks to [AdGuard’s unique protocol](/general/adguard-vpn-protocol), you’re guaranteed a fast and secure connection.

- IP adresinizi gizler. Gerçek IP adresiniz, siber suçlular için kişisel verilerinizin anahtarıdır. Your name, email address, phone number, credit card information can all fall into the hands of fraudsters if you don’t hide your IP. AdGuard VPN ile tüm trafiğiniz şifrelenmiş bir tünelden geçer ve VPN sunucusuna gelir. The web server registers the IP address of the endpoint of the tunnel, i.e. the VPN server, and not the device’s real IP address.

- Gerçek konumunuzu gizler. Bu size ne kazandırıyor? For example, the ability to book a hotel at locals’ rates or hide from geotargeted advertising.

AdGuard VPN for Windows has many advantages, so we’ve dedicated [a separate article](/general/why-adguard-vpn) to them. Ancak burada, uygulamanın kendisine ve nasıl çalıştığına daha fazla odaklanmak istiyoruz.

## Windows için AdGuard VPN'i kullanmaya nasıl başlanır

Windows için AdGuard VPN'i kullanmaya başlamak için uygulamayı [sitemizden](https://adguard-vpn.com/welcome.html) indirin. The installation takes no more than a minute — and you’ll see a dialog window where you’ll need to check at least one box applying the terms of the User Agreement and the Privacy policy. And it’s up to you to decide whether you want AdGuard to collect anonymized data about your app usage. Son olarak program sizden [AdGuard hesabı](https://auth.adguard.com/login.html) veya sosyal ağlar (Apple, Google, Facebook) aracılığıyla giriş yapmanızı ister. That’s all, you can now use AdGuard VPN for Windows.

## Ana ekran

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/windows/saved_locations.png)

The most noticeable item on the **Home screen** is the AdGuard VPN *Connect/Disconnect* button, below which you can see the selected server. Ekranın sağ tarafında mevcut konumların bir listesini göreceksiniz. En hızlı konum, yani en düşük ping değerine sahip olan, listenin en üstünde gösterilir. Herhangi bir konum çevrimdışıysa tıklayabileceğiniz bir yenileme düğmesi de vardır.

You can also save your favorite locations to access them quickly. Just hover over a location, click the bookmark icon that appears, and it will be saved. Your marked locations will then show up in the *Saved* tab.

At the top of the screen there is a navigation panel with five tabs: **Home**, **Exclusions**, **Stats**, **Support**, and **Settings**.

## İstisnalar

By default, AdGuard VPN for Windows works everywhere. You can add websites and apps you want to exclude from the VPN tunnel to the list of exclusions. Or, you can make AdGuard VPN work only on the websites and apps specified in the list of exclusions. Please note that these two lists are independent of each other.

![Exclusions *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_screen.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![Add Exclusions from list *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

When adding domains manually, you should take into account certain details. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list.

:::

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- Kullanıcı AdGuard VPN'i ilk kez yüklediyse
- Kullanıcı sürüm 2.4'ten önce İstisnalar ayarlarını değiştirmediyse

:::

### İstisna listelerini içe ve dışa aktarma

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. The archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. You can edit them by adding new exclusions or deleting old ones.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## İstatistikler

![Statistics screen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

The Statistics screen shows detailed information about your data usage, categorized by both location and app. It highlights your most frequently used locations and applications. You can access statistics for different time periods: daily, monthly, or for the entire time you have been using AdGuard VPN for Windows.

Crucially, all this information is stored exclusively on your device, ensuring that only you can view it. Access to the statistics feature is available only to AdGuard VPN subscribers.

## Ayarlar

![Settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

The fourth tab contains sections that will help you customize the app.

### Uygulama ayarları

![App settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymous app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### DNS sunucuları

The **DNS servers** tab allows you to add your own DNS server — manually or from the list. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Gelişmiş ayarlar

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you’re willing to take time to learn what they do.

##### Çalışma modu

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Günlük kayıt düzeyi

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### QUIC'i kullan

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

#### WinTun'u kullan

![Use WinTun *border](https://cdn.adguard-vpn.com/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

WinTun is a traffic routing driver commonly used for VPN implementations on Windows that improves the quality of VPN connections by creating a virtual network adapter. By default AdGuard VPN uses the regular WFP driver (and TDI driver for Windows 7).

#### Alt ağ istisnaları

This feature allows you to add subnets to exclude traffic from specific devices connected to your network. For example, your robot vacuum cleaner.

## Diğer sekmeler

### Hakkında

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### Hesap

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Destek

This tab is aimed to solve users’ questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
