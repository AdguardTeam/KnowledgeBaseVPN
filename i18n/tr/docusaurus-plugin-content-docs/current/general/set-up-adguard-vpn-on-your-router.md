---
title: Yönlendiricinizde AdGuard VPN nasıl kurulur
sidebar_position: 8
---

Yönlendiricinize AdGuard VPN'i kurmak, ağınıza bağlı tüm cihazları korumanıza olanak tanır. Bu cihazlara akıllı TV'ler, medya oynatıcılar, oyun konsolları ve VPN uygulamalarını doğrudan desteklemeyen diğer cihazlar da dâhildir.

:::note

Bu seçenek yalnızca bir AdGuard VPN aboneliğiniz varsa ve yönlendiriciniz _VPN İstemcisi_ (\*_VPN Sunucusu_ değil) ayarlarında IPsec'i destekliyorsa kullanılabilir. IPsec _VPN CLient_ ayarlarında listelenmiyorsa, [Linux için AdGuard VPN](/adguard-vpn-for-linux/setting-up-on-a-router) ayarlamayı deneyebilirsiniz. Bu çözüm AdGuard'ın tescilli protokolünü kullanır ve Keenetic, OpenWRT ve Asuswrt-Merlin yönlendiricileriyle uyumludur.

:::

## Yönlendiricinizde AdGuard VPN nasıl kurulur

1. [AdGuard hesabınızda](https://auth.adguardaccount.com/login.html), AdGuard VPN'i seçin.

2. _Aygıtlar_ altında, _Yönlendirici ekle_ öğesine tıklayın.

   ![Yönlendirici ekle \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. İstediğiniz VPN sunucusu konumunu seçin ve kimlik bilgileri oluşturun.

   ![Kimlik bilgileri oluştur \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   Sonraki adımlar yönlendiricinize bağlı olarak değişebilir. Örnek olarak Keenetic yönlendiriciyi kullandık.

   :::

4. Yönetici sayfanızda, yönlendirici ayarlarına gidin.

5. _VPN İstemcisi_ öğesini etkinleştirin ve _VPN sunucusu ekle_ öğesine tıklayın.

6. IPsec-client öğesini seçin (bazı yönlendirici markaları için IKEv2 olarak adlandırılabilir; L2TP/IPsec değil).

7. 3. adımda oluşturduğunuz kimlik bilgilerini girin.

   ![Kimlik bilgilerini gir \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Cihazları yönlendiricinize bağlayın.

:::note

VPN sunucu konumunu değiştirmek istiyorsanız yönlendirici ayarlarınızı güncellemeniz gerekir.

:::

## AdGuard VPN ile uyumsuz olduğu bilinen yönlendiriciler

- **ASUS**
  - IPsec yalnızca _VPN Sunucusu_ ayarlarında bulunur ve doğru _VPN Fusion_/_VPN İstemcisi_ ayarlarında bulunmaz
- **FRITZ!Box**
