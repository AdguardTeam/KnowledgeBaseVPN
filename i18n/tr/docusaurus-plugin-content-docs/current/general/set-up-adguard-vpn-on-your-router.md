---
title: Yönlendiricinizde AdGuard VPN nasıl kurulur
sidebar_position: 8
---

Yönlendiricinizde AdGuard VPN'i kurarak, medya cihazları ve oyun konsolları gibi VPN uygulamalarını yükleyemediğiniz cihazlarda verilerinizi koruyabilirsiniz.

:::note

Bu seçenek yalnızca bir AdGuard VPN aboneliğiniz varsa ve yönlendiriciniz _VPN İstemcisi_ (\*_VPN Sunucusu_ değil) ayarlarında IPsec'i destekliyorsa kullanılabilir.

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

## Yönlendiricinizde AdGuard VPN kurmak neden yararlı olabilir

- Yönlendiricinizdeki AdGuard VPN ile ne VPN sağlayıcınız ne de başka biri internet etkinliğinize erişemez
- Yönlendiricinize AdGuard VPN kurmak tüm ağınızı güvence altına alır, yani ağa bağlı tüm cihazlar korunur
- Medya cihazları ve oyun konsolları gibi AdGuard VPN uygulamalarını yüklemenin mümkün olmadığı cihazlarda güvenliği artırabilir ve verilerinizi koruyabilirsiniz

## AdGuard VPN ile bir yönlendiriciye bağlanabilen cihazlar

- **PlayStation, Xbox ve Nintendo Switch**: PS4, PS5, Xbox One, Xbox Series ve Nintendo Switch'te sorunsuz çevrimiçi oyun oynamanın ve gelişmiş güvenliğin keyfini çıkarmak için [yönlendiricinizde AdGuard VPN'i kurun](#how-to-set-up-adguard-vpn-on-your-router) ve konsolunuzu buna bağlayın

- **Apple TV**: Yönlendiricinizde AdGuard VPN'i kurmak](#how-to-set-up-adguard-vpn-on-your-router) için talimatları izleyin, ardından Apple TV'nizi bağlayın

- **Chromecast**:

  **4. Nesil için:** [AdGuard VPN'i Google Play'den](https://play.google.com/store/apps/details?id=com.adguard.vpn) indirip kurmanız yeterlidir

  **3. Nesil İçin:** [Yönlendiricinizde AdGuard VPN'i kurmak](#how-to-set-up-adguard-vpn-on-your-router) için kılavuzumuzu izleyin. TV'nizin ve akıllı telefon, tablet veya bilgisayarınızın aynı ağa bağlı olduğundan emin olun

  **Android TV** için AdGuard VPN'i bir yönlendiriciye kurmanıza gerek yoktur — Android TV için özel bir sürümümüz var. Sadece şu adımları izleyin:

  1. Android TV'nize [Google Play'den AdGuard VPN](https://play.google.com/store/apps/details?id=com.adguard.vpn) yükleyin
  2. Zaten bir AdGuard hesabınız varsa kimlik bilgilerinizle giriş yapın. AdGuard'da yeniyseniz e-posta adresinizi girin ve ekrandaki talimatları izleyin
  3. Uygulamayı açın, istediğiniz konumu seçin ve bağlanın

## AdGuard VPN ile uyumsuz olduğu bilinen yönlendiriciler

- **ASUS**
  - Only has IPsec in the _VPN Server_ settings, and not in the correct _VPN Fusion_/_VPN Client_ settings
- **FRITZ!Box**
