---
title: 'AdGuard VPN''de ne tür şifreleme kullanılır'
sidebar_position: 7
---

## Giriş

"Sanal Özel Ağ" teriminde "özel" kelimesinin bulunmasının nedeni şifrelemedir. A VPN creates a tunnel between your device and a VPN server, that encrypts and transmits your data securely to the open Internet. Şifreleme süreci, yani verileri, araya giren hiç kimsenin okuyamayacağı anlamsız kelimelere dönüştürmek, herhangi bir VPN hizmeti için çok önemlidir.

AdGuard VPN protokolü, bugüne kadarki en güvenli ve hızlı şifreleme algoritmasını kullanır — AES-256. Ne olduğunu ve neden bu kadar iyi olduğunu öğrenin.

## AES tarihi turu

AES (Gelişmiş Şifreleme Standardı) şifrelemesi, 20. yüzyılın sonlarında ABD'de geliştirildi. hükümet talebi: mevcut Veri Şifreleme Standardı (DES) geçersiz hâle geldi ve yeni, daha güvenli bir şifreleme algoritması gerekliydi.

Hükümet tarafından ilan edilen halka açık bir yarışmada Rijndael şifresini kazandı - DES'e oldukça benzer, ancak çok daha karmaşık. 2002 yılında AES olarak yeniden adlandırıldı ve ABD tarafından yayınlandı. Ulusal Standartlar ve Teknoloji Enstitüsü.

Bugün, AES şifreleme için endüstri standardıdır. Açık doğası nedeniyle, NSA ve devlet kurumlarının yanı sıra özel, ticari ve kar amacı gütmeyen kuruluşlar tarafından kullanılır.

## AES-256 nasıl çalışır

AES, simetrik anahtarlı bir blok şifredir. Simetrik anahtar şifresi olarak, verileri şifrelemek ve şifresini çözmek için yalnızca bir gizli anahtar gerektirir. Bir blok şifresi olarak AES, düz metin adı verilen şifrelenmemiş bilgiyi bloklara böler, orijinal kriptografik anahtarı birkaç taneye böler ve bunları her bloğa uygular. Sonunda bir şifreli metin, yani şifrelenmiş bir metin elde edilir.

Farklı anahtar boyutları vardır — 128, 192 ve 256 bit — ve bloklar da bit cinsinden ölçülür. Şifreleme işlemi sırasında, şifreleyici, güvenlik anahtarına bağlı olarak her bilgiyi bir başkasıyla değiştirir. Bu nedenle, örneğin, AES-256, 14 turda 256 blok düz metinden 256 blok şifreli metin oluşturur.

Turlar birkaç adımdan oluşur: verileri bloklara ayırma, baytları değiştirme, satırları kaydırma ve sütunları yeniden düzenlemek. Sonuç, yalnızca doğru şifreleme anahtarı kullanıldığında anlamlı olacak tamamen rastgele bir karakter kümesidir.

AES-256 en güçlü şifreleme seviyesidir: bu şifreyi kırmak için her biri 78 basamaktan oluşan 2256 ayrı kombinasyonun denenmesi gerekir.
