---
title: Günlükler nasıl toplanır ve gönderilir
sidebar_position: 1
---

AdGuard VPN Tarayıcı uzantısı günlüklerini toplamanın birkaç yolu vardır, ancak hangisini seçerseniz seçin, aynı veriler toplanacaktır. Uzantıda, günlükler standart ve hata ayıklama olarak ayrılmaz. Karşılaştığınız bir sorunun şu veya bu talimatı kullanmanızı engellediği durumlar için günlük toplama için farklı seçenekler sunulur.

## *Hata bildir* bölümü aracılığıyla günlükleri toplama ve gönderme

1. AdGuard VPN Tarayıcı uzantısını açın, mümkünse hataya neden olan işlemleri tekrarlayın. Bu hatanın oluştuğu tam zamana dikkat edin.
1. Hamburger menü simgesine (☰) tıklayarak *Ayarlar* öğesini açın → *Destek* → *Hata bildir*.
1. Açılan formda, otomatik olarak eklenen bir e-posta adresi bırakın veya başka bir tane girin ve bu hatanın meydana geldiği zaman da dahil olmak üzere bulunan hatayı açıklayın. Sorunu yeniden oluşturamıyorsanız, en son ne zaman oluştuğunu olabildiğince doğru bir şekilde belirtin.
1. Make sure that there is a check mark next to *Include the diagnostic report in the message* and tap *Submit*. Bu şekilde, hata raporuyla birlikte günlükleri de göndermiş olursunuz.

## *Günlükleri dışa aktar* düğmesi aracılığıyla günlükleri toplama ve gönderme

1. AdGuard VPN Tarayıcı uzantısını açın, mümkünse hataya neden olan işlemleri tekrarlayın. Bu hatanın oluştuğu tam zamana dikkat edin.
1. AdGuard VPN Tarayıcı uzantısı simgesini sağ tıklayın.
1. Açılan menüde *Günlükleri dışa aktar* öğesine tıklayın.
1. Sonuç olarak, günlük dosyası cihazınıza `txt` biçiminde kaydedilecektir.

Artık günlükleri topladığınıza göre, onları geliştirme ekibimize teslim etmeniz gerekir. Bunu yapmak için:

1. GitHub'da bir hata bildirin. GitHub'da bir sorun oluşturmaya ilişkin ayrıntılı talimatları bu makalede bulabilirsiniz.
1. Günlükleri ve yeniden oluşturma süresini içeren bir arşivi `devteam@adguard.com` adresine gönderin ve GitHub sorununuza bir bağlantı ekleyin. Ayrıca Google Drive'a günlükleri ve yeniden üretim süresini içeren bir arşiv ekleyebilir ve GitHub'daki sorununuza Google Drive bağlantısını ekleyerek `devteam@adguard.com` ile paylaşabilirsiniz.

## Tarayıcı geliştirici araçları aracılığıyla günlükleri toplama ve gönderme

### Chrome

1. AdGuard VPN Tarayıcı uzantısını açın, mümkünse hataya neden olan işlemleri tekrarlayın. Bu hatanın oluştuğu tam zamana dikkat edin.
1. `chrome://extensions` adresine gidin
1. *geliştirici modunu* açın

    ![Geliştirici modu *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. `background.html` öğesine tıklayın

    ![Arka plan *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. *Konsol sekmesi* öğesini açın

    ![Konsol sekmesi *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Tarayıcının sağ tık menüsünü açın ve *Farklı kaydet…* öğesine tıklayın

    ![Farklı kaydet *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Artık günlükleri topladığınıza göre, onları geliştirme ekibimize teslim etmeniz gerekir. Bunu yapmak için:

1. GitHub'da bir hata bildirin. GitHub'da bir sorun oluşturmaya ilişkin ayrıntılı talimatları bu makalede bulabilirsiniz.
1. Günlükleri ve yeniden oluşturma süresini içeren bir arşivi `devteam@adguard.com` adresine gönderin ve GitHub sorununuza bir bağlantı ekleyin. Ayrıca Google Drive'a günlükleri ve yeniden üretim süresini içeren bir arşiv ekleyebilir ve GitHub'daki sorununuza Google Drive bağlantısını ekleyerek `devteam@adguard.com` ile paylaşabilirsiniz.

### Firefox

1. AdGuard VPN Tarayıcı uzantısını açın, mümkünse hataya neden olan işlemleri tekrarlayın. Bu hatanın oluştuğu tam zamana dikkat edin.
1. `about:addons` öğesine gidin
1. *Eklentilerde hata ayıkla* öğesine tıklayın

    ![Eklentilerde hata ayıklama *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. *Denetle* öğesine tıklayın

    ![İncele *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. *Konsol* sekmesine gidin

    ![Konsol *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. *Tüm mesajları dosyaya kaydet* öğesine tıklayın

    ![Kaydet *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Artık günlükleri topladığınıza göre, onları geliştirme ekibimize teslim etmeniz gerekir. Bunu yapmak için:

1. GitHub'da bir hata bildirin. GitHub'da bir sorun oluşturmaya ilişkin ayrıntılı talimatları bu makalede bulabilirsiniz.
1. Günlükleri ve yeniden oluşturma süresini içeren bir arşivi `devteam@adguard.com` adresine gönderin ve GitHub sorununuza bir bağlantı ekleyin. Ayrıca Google Drive'a günlükleri ve yeniden üretim süresini içeren bir arşiv ekleyebilir ve GitHub'daki sorununuza Google Drive bağlantısını ekleyerek `devteam@adguard.com` ile paylaşabilirsiniz.
