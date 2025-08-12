---
title: Özelliklere genel bakış
sidebar_position: 1
---

AdGuard VPN Tarayıcı Uzantısı Chrome, Firefox, Opera ve Edge için mevcuttur. Kullanıcı arayüzü ve işlevsellik tarayıcılar arasında farklılık göstermez, bu nedenle aşağıdaki genel bakış, tüm tarayıcılar için AdGuard VPN uzantılarıyla alakalı olacaktır.

:::note

AdGuard VPN Tarayıcı Uzantısını yalnızca giriş yaptığınızda kullanabilirsiniz. AdGuard hesabınızla veya Google, Facebook ya da Apple aracılığıyla giriş yapın. İkinci durumda, hesabınızın AdGuard hesabınızla aynı e-posta adresine bağlı olduğundan emin olun. [AdGuard VPN aboneliğiniz](/general/subscription) varsa, AdGuard VPN Tarayıcı uzantısında otomatik olarak etkinleştirilecektir. Henüz bir AdGuard hesabınız yok mu? [Burada oluşturun](https://auth.adguardaccount.com/registration.html).

:::

## Saved locations

You can save your favorite locations for quick access. To do so, just hover over a location and click the bookmark icon that appears:

![Save a location *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-locations-en.png)

Your marked locations will then show up in the *Saved* tab.

![Saved tab *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-tab-en.png)

## Stats

The *Stats* section in the menu is a simple way to keep track of how much data passes through your VPN connection.

![Statistics *mobile](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/Statistics.png)

When stats can come in handy:

- **Check if the VPN is actually working**. A quick look at the stats confirms that your connection is active and data is routed through the VPN.

- **Spot unexpected activity**. If traffic grows while you’re idle, something in the background — a tab or an extension — might be sending data.

- **Troubleshoot slow connection issues**. If your connection feels slow, a spike in traffic might point to something running or downloading in the background.

:::note

All statistics are stored locally on your device. We only calculate how much data is used — we don’t see what websites you visit. You can also disable statistics if you don’t need them.

:::

The *Stats* section is available to users of the paid version.

## Settings

To manage your AdGuard VPN Browser Extension:

- Tarayıcı panelindeki simgesine tıklayın, hamburger menü simgesine tıklayın ve *Ayarlar* öğesini seçin,
- Veya tarayıcınızda *Uzantıları yönet* sayfasına gidin, *AdGuard VPN* altındaki *Ayrıntılar* öğesine tıklayın ve ayarlarını buradan yönetin.

Once done, you’ll see several tabs on the left:

### General

A few important settings are gathered inside this tab. Here you can choose a DNS server to use, add or remove the AdGuard VPN icon from the browser’s context menu, block WebRTC, change the extension’s theme, and allow AdGuard to gather anonymous crash reports and technical data.

#### DNS server

By default, the [system DNS server](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) provided by your ISP is selected, but it may compromise your privacy. With AdGuard VPN Browser extension, you can select a DNS server that provides better speed and security, and even blocks ads or potentially dangerous domains. Brief descriptions under the names of DNS servers will help you navigate and make your decision.

Learn more about [DNS servers from various providers](https://adguard-dns.io/kb/general/dns-providers/).

### Exclusions

The next tab contains one of the main distinctive features of AdGuard VPN — two modes with separate exclusion lists.

In **General mode**, AdGuard VPN by default works on all websites, with the exception of the websites you’ve added to the exclusions list. In **Selective mode**, vice versa, AdGuard VPN by default doesn’t work anywhere. You can add any websites where you’d like it to work to an exclusions list, separate from the one you saw in the **General mode**.

When adding a website to an exclusion list, you can enter the website manually or select the **From the list** option. In the latter case, you’ll see eight categories (for example, *Shopping* or *Messengers*), each suggesting several popular services. You can exclude any of these services in one click. This will add all domains relevant to that specific service to exclusions.

#### Import and export

Not only can you add and remove websites, you can also transfer ready exclusions lists to other devices where AdGuard VPN is installed. To export your exclusions list, follow the 4-step instruction below:

1. İstisnaların listesini dışa aktarmak istediğiniz yerden AdGuard VPN Tarayıcı uzantısını açın. Uygun bölümü bulun ve "Dışa aktar" düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.
1. Arşivde, Genel ve Seçici listelerin her biri için birer tane olmak üzere iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın veya arşivi olduğu gibi bırakın.
1. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza gönderin.
1. Bu cihazda AdGuard VPN'i açın. Uygun bölümü bulun, "İçe aktar" düğmesine tıklayın ve arşivi seçin. Tamamlandı!

### Account

The third tab of AdGuard VPN Browser extension is utterly minimalistic, containing only the email address you used to sign into your account and two buttons, *Manage* and *Sign out*. Clicking the *Manage* button takes you to your personal AdGuard account, where you can see all your current licenses and subscriptions, as well as devices connected to them.

### Support

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn’t working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

### About

Another minor tab, where you can check the extension’s version, visit the official website, and view the EULA or Privacy policy.
