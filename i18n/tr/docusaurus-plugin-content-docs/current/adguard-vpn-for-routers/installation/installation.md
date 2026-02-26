---
title: Çoğu yönlendiricide genel kurulum
sidebar_position: 1
---

AdGuard VPN'i doğrudan yönlendiricinize kurduğunuzda, ağınızdaki tüm cihazlar özel ve güvenli internet erişiminden yararlanmasını sağlar — ayrı bir uygulama gerekmez. Follow this guide to add your router to AdGuard VPN, generate credentials, and connect your devices in just a few simple steps.

:::note

If you use a MikroTik or Keenetic router, please check the dedicated setup guides below:

- [How to set up AdGuard VPN on MikroTik routers](/adguard-vpn-for-routers/installation/mikrotik.md)

- [How to set up AdGuard VPN on Keenetic routers](/adguard-vpn-for-routers/installation/keenetic.md)

:::

## Installation options

There are two main ways to run AdGuard VPN on a router:

1. IPSec profile

   - Easy to set up, supported by many routers
   - Limitations: not available in Russia, China, and Iran, only a limited number of VPN locations (USA, Germany, UK, Netherlands, Finland), and no support for exclusions

2. [AdGuard VPN CLI](/adguard-vpn-for-linux/setting-up-on-a-router)

   - Advanced setup that unlocks all AdGuard VPN features, including access to all locations and website exclusions (app exclusions are not available)
   - Daha fazla teknik bilgi gerektirir
   - Düşük performanslı işlemcilere sahip yönlendiricilerde bağlantı hızı 30-100 Mbps ile sınırlı olabilir

## Obtain your AdGuard VPN credentials

Yönlendiricinizi AdGuard VPN'e bağlamadan önce, AdGuard hesabınızda yönlendiriciniz için benzersiz kimlik bilgileri oluşturmanız gerekir. Bu kimlik bilgileri arasında sunucu adresi, kullanıcı adı ile şifre bulunur ve bunları daha sonra yönlendiricinizi yapılandırırken kullanacaksınız.

1. [AdGuard hesabınızda](https://auth.adguardaccount.com/login.html), AdGuard VPN'i seçin.

2. _Aygıtlar_ altında, _Yönlendirici ekle_ öğesine tıklayın.

   ![Yönlendirici ekle \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. İstediğiniz VPN sunucusu konumunu seçin ve kimlik bilgileri oluşturun.

   ![Kimlik bilgileri oluştur \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

## Çoğu yönlendiricide genel kurulum

Most modern routers that support IKEv2/IPSec can be configured with AdGuard VPN in just a few steps. Once you have your credentials ready, follow this general instruction to create a VPN connection on your router.

:::note

Sonraki adımlar yönlendiricinize bağlı olarak değişebilir. Örnek olarak Keenetic yönlendiriciyi kullandık.

:::

1. Yönlendiricinizin yönetici sayfasını açın

2. Yönlendirici ayarlarına gidin

3. Enable _VPN Client_ and click _Add VPN server_

4. Select IPsec-client (for some router brands, it may be called IKEv2; not L2TP/IPsec)

5. Oluşturduğunuz kimlik bilgilerini girin.

   ![Kimlik bilgilerini gir \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

   :::note

   In the _server address_ field, enter the _IP address_ from your AdGuard account.

   :::

6. Cihazları yönlendiricinize bağlayın.

:::note

VPN sunucu konumunu değiştirmek istiyorsanız yönlendirici ayarlarınızı güncellemeniz gerekir.

:::

## AdGuard VPN ile uyumsuz olduğu bilinen yönlendiriciler

Below are the routers that are currently known to have compatibility issues:

### ASUS

ASUS routers do not support IKEv2/IPsec, so you cannot set them up using the general method mentioned above. However, routers running the Asuswrt-Merlin custom firmware can install **AdGuard VPN CLI**, which makes the CLI installation method fully supported.
