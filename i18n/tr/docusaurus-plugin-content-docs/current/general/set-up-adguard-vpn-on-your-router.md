---
title: Yönlendiricinizde AdGuard VPN nasıl kurulur
sidebar_position: 8
---

Setting up AdGuard VPN on your router allows you to protect all devices connected to your network. This includes smart TVs, media players, gaming consoles, and other gadgets that do not support VPN apps directly.

:::note

Bu seçenek yalnızca bir AdGuard VPN aboneliğiniz varsa ve yönlendiriciniz _VPN İstemcisi_ (\*_VPN Sunucusu_ değil) ayarlarında IPsec'i destekliyorsa kullanılabilir. If IPsec is not listed in the _VPN CLient_ settings, you can try setting up [AdGuard VPN for Linux](/adguard-vpn-for-linux/setting-up-on-a-router). This solution uses AdGuard's proprietary protocol and is compatible with Keenetic, OpenWRT, and Asuswrt-Merlin routers.

:::

## Yönlendiricinizde AdGuard VPN nasıl kurulur

1. [AdGuard hesabınızda](https://auth.adguard.com/login.html), AdGuard VPN'i seçin.

2. _Aygıtlar_ altında, _Yönlendirici ekle_ öğesine tıklayın.

   ![Yönlendirici ekle \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. İstediğiniz VPN sunucusu konumunu seçin ve kimlik bilgileri oluşturun.

   ![Kimlik bilgileri oluştur \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   Sonraki adımlar yönlendiricinize bağlı olarak değişebilir. Örnek olarak Keenetic yönlendiriciyi kullandık.

   :::

4. Yönetici sayfanızda, yönlendirici ayarlarına gidin.

5. _VPN İstemcisi_ öğesini etkinleştirin ve _VPN sunucusu ekle_ öğesine tıklayın.

6. IPsec-client öğesini seçin (bazı yönlendirici markaları için IKEv2 olarak adlandırılabilir; L2TP/IPsec değil).

7. 3. adımda oluşturduğunuz kimlik bilgilerini girin.

   ![Kimlik bilgilerini gir \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Cihazları yönlendiricinize bağlayın.

:::note

VPN sunucu konumunu değiştirmek istiyorsanız yönlendirici ayarlarınızı güncellemeniz gerekir.

:::

## AdGuard VPN ile uyumsuz olduğu bilinen yönlendiriciler

- **ASUS**
  - IPsec yalnızca _VPN Sunucusu_ ayarlarında bulunur ve doğru _VPN Fusion_/_VPN İstemcisi_ ayarlarında bulunmaz
- **FRITZ!Box**
