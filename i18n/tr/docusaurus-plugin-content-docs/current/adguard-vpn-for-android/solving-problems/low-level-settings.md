---
title: Alt seviye ayarlar kılavuzu
sidebar_position: 6
---

## Alt seviye ayarlara nasıl ulaşılır

:::caution

_Alt seviye ayarların_ değiştirilmesi AdGuard VPN'in performansında sorunlara neden olabilir, internet bağlantısını kesebilir veya güvenliğinizi ve gizliliğinizi tehlikeye atabilir. You should only open this section if you know what you are doing, or if you were asked to do so by our support team.

:::

To access _Low-level settings_, open the AdGuard VPN app and tap the gear icon in the lower right corner of the screen. Then choose _General_ → _Advanced_ → _Low-level settings_.

## Alt seviye ayarları

Aşağıda Android için AdGuard VPN'de bulunan tüm alt seviye ayarları listeliyor ve bunların ne işe yaradığını açıklıyoruz. We once again urge you not to mess with these settings blindly even if you’ve read this guide. Treat it as a cheat sheet for when you know what you are doing but want to brush up on specifics.

### AdGuard VPN protokolü

AdGuard VPN protokolü varsayılan olarak tespit edilmeyi önlemek ve yüksek hızı korumak için HTTP/2 aktarım protokolünü kullanır. Uygulaması hakkında daha fazla bilgiyi [özel makalede](/general/adguard-vpn-protocol.md) okuyabilirsiniz.

AdGuard VPN'i bunun yerine QUIC aktarım protokolünü kullanacak şekilde değiştirebilirsiniz. [QUIC](https://adguard-vpn.com/kb/general/why-adguard-vpn/#6-quic-support) nispeten yeni bir protokoldür, bu nedenle daha az kararlı olabilir. However, if your Internet connection is unstable (for example, when you connect to the public Wi-Fi), it provides better security and increases the connection speed thanks to the [Head-Of-Line Blocking](https://adguard-dns.io/en/blog/dns-over-quic.html#headoflineblocking) technology.

### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.
Bunu devre dışı bırakırsanız, yönlendirme yapılandırması (filtrelenen IP aralıkları) değişecektir. Kullanıcının bağlı olduğu ağın Wi-Fi ağ geçidi hariç tutulacak ve bu nedenle filtrelemeye tabi olmayacaktır.

Bu ayar varsayılan olarak etkindir.

### Paket yakalama (PCAP)

Bu ayar etkinleştirilirse, AdGuard VPN, uygulama önbellek dizininde adı için bir zaman damgası olan (örneğin, `1682599851461.pcap`) bir `.pcap` dosyası oluşturur. Bu dosya VPN üzerinden aktarılan tüm ağ paketlerini listeler ve [Wireshark programı](https://www.wireshark.org/) ile analiz edilebilir.

### Gözetleyici

Gözetleyici, herhangi bir sorun olup olmadığını kontrol etmek için VPN işlem durumunu izler. Etkinleştirildiğinde, AdGuard VPN, aksi takdirde onu kapatabilecek agresif pil tasarrufu uygulamalarına karşı kendisini korur.

### Tercih edilen IP sürümü

Burada uç nokta adreslerini ayarlayabilirsiniz. Üç seçenek vardır: IPv4, IPv6 veya IPv4 ve IPv6 (cihazınız her ikisini de destekliyorsa).

### VPN'den hariç tutulan IPv4 aralıkları

Bu bölümde listelenen IPv4 aralıkları için VPN tünelleme devre dışı bırakılacaktır.

### IPv6 arayüzü

Bu seçeneği etkinleştirdikten sonra VPN bağlantısı üzerinden trafiği yönlendirirken bir IPv6 adresine sahip olacaksınız. _VPN'den hariç tutulan IPv6 aralıkları_ öğesinde istisnaları ayarlayabilirsiniz.

### VPN'den hariç tutulan IPv6 aralıkları

Bu bölümde listelenen IPv6 aralıkları için VPN tünelleme devre dışı bırakılacaktır.

:::note

Öncelikle _Alt seviye ayarlar_ bölümünden _IPv6 arayüzü_ ayarını etkinleştirmeniz gerekiyor, aksi takdirde bu ayar uygulanmayacaktır.

:::

### MTU (maksimum iletim birimi)

Burada yerel VPN'de kullanılan veri paketinin maksimum boyutunu (bayt cinsinden) ayarlayabilirsiniz. Önerilen aralık 1500-9000 bayttır.

### Hariç tutulan uygulamalar

VPN yönlendirmesinden hariç tutmak istediğiniz uygulamaların UID'lerini (benzersiz tanımlayıcılar) veya paket adlarını buraya listeleyebilirsiniz.
Normal _İstisnalara_ eklenen uygulamaların aksine, _Hariç Tutulan uygulamalara_ eklenen uygulamaların trafiği cihazınızdaki yerel VPN hizmetine asla gitmez. Bunun yerine, doğrudan istikamete gider.

### Proxy sunucu bağlantı noktası

Burada dahili SOCKS5 proxy sunucusunun portunu ayarlayabilirsiniz. Varsayılan seçenek 1080'dir.
