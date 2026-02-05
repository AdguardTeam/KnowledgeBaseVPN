---
title: Alt seviye ayarlar kılavuzu
sidebar_position: 6
---

## Alt seviye ayarlara nasıl ulaşılır

:::caution

_Alt seviye ayarların_ değiştirilmesi AdGuard VPN'in performansında sorunlara neden olabilir, internet bağlantısını kesebilir veya güvenliğinizi ve gizliliğinizi tehlikeye atabilir. You should only open this section if you know what you are doing, or if you were asked to do so by our support team.

:::

_Alt seviye ayarlara_ erişmek için AdGuard VPN uygulamasını açın ve ekranın sağ alt köşesindeki dişli çark simgesine dokunun. Then choose _General_ → _Advanced_ → _Low-level settings_.

## Alt seviye ayarları

Aşağıda Android için AdGuard VPN'de bulunan tüm alt seviye ayarları listeliyor ve bunların ne işe yaradığını açıklıyoruz. Bu kılavuzu okumuş olsanız bile bu ayarlarla körü körüne oynamamanızı bir kez daha öneriyoruz. Bunu ne yaptığınızı bildiğiniz ancak ayrıntıları tazelemek istediğiniz zamanlar için bir kopya kağıdı olarak düşünün.

### AdGuard VPN protokolü

By default, AdGuard VPN protocol uses dynamic VPN protocol selection (_Auto-select_ option). That means that AdGuard VPN automatically figures out which protocol — HTTP2/TLS or HTTP3/QUIC — will give you the best performance and switches to it instantly. This improves VPN speed and stability, which is particularly helpful in regions where VPN usage is restricted or unreliable.

If you know what you are doing, you can switch AdGuard VPN to use only HTTP2/TLS or HTTP3/QUIC protocol instead of _Auto-select_. [QUIC](https://adguard-vpn.com/kb/general/why-adguard-vpn/#6-quic-support) nispeten yeni bir protokoldür, bu nedenle daha az kararlı olabilir. However, if your Internet connection is unstable (for example, when you connect to the public Wi-Fi), it provides better security and increases the connection speed thanks to the [Head-Of-Line Blocking](https://adguard-dns.io/en/blog/dns-over-quic.html#headoflineblocking) technology.

Also, here’s a dedicated article about the protocol: [How AdGuard VPN protocol works](https://trusttunnel.org/).

### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.
If you disable it, then the route configuration (IP ranges that are filtered) will be changed. The Wi-Fi gateway of the network to which the user is connected will be excluded, and therefore, it will not be subject to filtering.

Bu ayar varsayılan olarak etkindir.

### Paket yakalama (PCAP)

Bu ayar etkinleştirilirse, AdGuard VPN, uygulama önbellek dizininde adı için bir zaman damgası olan (örneğin, `1682599851461.pcap`) bir `.pcap` dosyası oluşturur. This file lists all network packets transferred through the VPN and can be analyzed with the [Wireshark program](https://www.wireshark.org/).

### Gözetleyici

Gözetleyici, herhangi bir sorun olup olmadığını kontrol etmek için VPN işlem durumunu izler. When enabled, AdGuard VPN will protect itself against aggressive battery saver apps that could otherwise kill it.

### Tercih edilen IP sürümü

Burada uç nokta adreslerini ayarlayabilirsiniz. Üç seçenek vardır: IPv4, IPv6 veya IPv4 ve IPv6 (cihazınız her ikisini de destekliyorsa).

### VPN'den hariç tutulan IPv4 aralıkları

Bu bölümde listelenen IPv4 aralıkları için VPN tünelleme devre dışı bırakılacaktır.

### IPv6 arayüzü

Bu seçeneği etkinleştirdikten sonra VPN bağlantısı üzerinden trafiği yönlendirirken bir IPv6 adresine sahip olacaksınız. _VPN'den hariç tutulan IPv6 aralıkları_ öğesinde istisnaları ayarlayabilirsiniz.

### VPN'den hariç tutulan IPv6 aralıkları

Bu bölümde listelenen IPv6 aralıkları için VPN tünelleme devre dışı bırakılacaktır.

:::note

You need to enable _IPv6 interface_ setting in _Low-level settings_ first, otherwise this setting will not be applied.

:::

### MTU (maksimum iletim birimi)

Burada yerel VPN'de kullanılan veri paketinin maksimum boyutunu (bayt cinsinden) ayarlayabilirsiniz. Önerilen aralık 1500-9000 bayttır.

### Hariç tutulan uygulamalar

You can list here UIDs (unique identifiers) or package names of the apps that you want to exclude from VPN routing.
Unlike with apps added to regular _Exclusions_, the traffic of apps added to _Excluded apps_ doesn’t go to the local VPN service on your device at all. Bunun yerine, doğrudan istikamete gider.

### Proxy sunucu bağlantı noktası

Burada dâhili SOCKS5 proxy sunucusunun bağlantı noktasını ayarlayabilirsiniz. Varsayılan seçenek 1080'dir.
