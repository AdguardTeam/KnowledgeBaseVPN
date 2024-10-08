---
title: Low-level settings guide
sidebar_position: 6
---

## How to reach Low-level settings

:::caution

Changing _Low-level settings_ can cause problems with the performance of AdGuard VPN, may break the Internet connection or compromise your security and privacy. You should only open this section if you know what you are doing, or if you were asked to do so by our support team.

:::

To access _Low-level settings_, open the AdGuard VPN app and tap the gear icon in the lower right corner of the screen. Then choose _General_ → _Advanced_ → _Low-level settings_.

## Alt seviye ayarları

Below we list all low-level settings available in AdGuard VPN for Android and explain what they do. We once again urge you not to mess with these settings blindly even if you’ve read this guide. Treat it as a cheat sheet for when you know what you are doing but want to brush up on specifics.

### AdGuard VPN protokolü

AdGuard VPN protokolü varsayılan olarak tespit edilmeyi önlemek ve yüksek hızı korumak için HTTP/2 aktarım protokolünü kullanır. You can read more about its implementation in a [dedicated article](/general/adguard-vpn-protocol.md).

You can switch AdGuard VPN to use QUIC transport protocol instead. [QUIC](https://adguard-vpn.com/kb/general/why-adguard-vpn/#6-quic-support) nispeten yeni bir protokoldür, bu nedenle daha az kararlı olabilir. However, if your Internet connection is unstable (for example, when you connect to the public Wi-Fi), it provides better security and increases the connection speed thanks to the [Head-Of-Line Blocking](https://adguard-dns.io/en/blog/dns-over-quic.html#headoflineblocking) technology.

### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.
Bunu devre dışı bırakırsanız, yönlendirme yapılandırması (filtrelenen IP aralıkları) değişecektir. The Wi-Fi gateway of the network to which the user is connected will be excluded, and therefore, it will not be subject to filtering.

This setting is enabled by default.

### Paket yakalama (PCAP)

If this setting is enabled, AdGuard VPN will create a `.pcap` file with a timestamp for its name (for instance, `1682599851461.pcap`) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the [Wireshark program](https://www.wireshark.org/).

### Gözetleyici

Gözetleyici, herhangi bir sorun olup olmadığını kontrol etmek için VPN işlem durumunu izler. When enabled, AdGuard VPN will protect itself against aggressive battery saver apps that could otherwise kill it.

### Tercih edilen IP sürümü

Burada uç nokta adreslerini ayarlayabilirsiniz. Üç seçenek vardır: IPv4, IPv6 veya IPv4 ve IPv6 (cihazınız her ikisini de destekliyorsa).

### VPN'den hariç tutulan IPv4 aralıkları

VPN tunneling for the IPv4 ranges listed in this section will be disabled.

### IPv6 arayüzü

Bu seçeneği etkinleştirdikten sonra VPN bağlantısı üzerinden trafiği yönlendirirken bir IPv6 adresine sahip olacaksınız. You can set up the exclusions in the _IPv6 ranges excluded from VPN_.

### VPN'den hariç tutulan IPv6 aralıkları

Bu bölümde listelenen IPv6 aralıkları için VPN tünelleme devre dışı bırakılacaktır.

:::note

You need to enable _IPv6 interface_ setting in _Low-level settings_ first, otherwise this setting will not be applied.

:::

### MTU (maksimum iletim birimi)

Burada yerel VPN'de kullanılan veri paketinin maksimum boyutunu (bayt cinsinden) ayarlayabilirsiniz. Önerilen aralık 1500-9000 bayttır.

### Hariç tutulan uygulamalar

VPN yönlendirmesinden hariç tutmak istediğiniz uygulamaların UID'lerini (benzersiz tanımlayıcılar) veya paket adlarını buraya listeleyebilirsiniz.
Unlike with apps added to regular _Exclusions_, the traffic of apps added to _Excluded apps_ doesn’t go to the local VPN service on your device at all. Bunun yerine, doğrudan istikamete gider.

### Proxy sunucu bağlantı noktası

Burada dahili SOCKS5 proxy sunucusunun portunu ayarlayabilirsiniz. Varsayılan seçenek 1080'dir.
