---
title: 'AdGuard VPN''de ne tür şifreleme kullanılır'
sidebar_position: 7
---

## Giriş

"Sanal Özel Ağ" teriminde "özel" kelimesinin bulunmasının nedeni şifrelemedir. VPN, cihazınızla bir VPN sunucusu arasında verilerinizin şifrelendiği ve ardından açık internete güvenli bir biçimde girdiği bir tünel oluşturur. Şifreleme süreci, yani verileri, araya giren hiç kimsenin okuyamayacağı anlamsız kelimelere dönüştürmek, herhangi bir VPN hizmeti için çok önemlidir.

AdGuard VPN protokolü, bugüne kadarki en güvenli ve hızlı şifreleme algoritmasını kullanır – AES-256. Ne olduğunu ve neden bu kadar iyi olduğunu öğrenin.

## AES tarihi turu

AES (Gelişmiş Şifreleme Standardı) şifrelemesi, 20. yüzyılın sonlarında ABD'de geliştirildi. hükümet talebi: mevcut Veri Şifreleme Standardı (DES) geçersiz hâle geldi ve yeni, daha güvenli bir şifreleme algoritması gerekliydi.

In a public competition announced by the government won the Rijndael cipher — rather similar to DES but much more sophisticated. 2002 yılında AES olarak yeniden adlandırıldı ve ABD tarafından yayınlandı. Ulusal Standartlar ve Teknoloji Enstitüsü.

Bugün, AES şifreleme için endüstri standardıdır. Açık doğası nedeniyle, NSA ve devlet kurumlarının yanı sıra özel, ticari ve kar amacı gütmeyen kuruluşlar tarafından kullanılır.

## AES-256 nasıl çalışır

AES, simetrik anahtarlı bir blok şifredir. Simetrik anahtar şifresi olarak, verileri şifrelemek ve şifresini çözmek için yalnızca bir gizli anahtar gerektirir. Bir blok şifresi olarak AES, düz metin adı verilen şifrelenmemiş bilgiyi bloklara böler, orijinal kriptografik anahtarı birkaç taneye böler ve bunları her bloğa uygular. Sonunda bir şifreli metin, yani şifrelenmiş bir metin elde edilir.

Farklı anahtar boyutları vardır — 128, 192 ve 256 bit — ve bloklar da bit cinsinden ölçülür. Şifreleme işlemi sırasında, şifreleyici, güvenlik anahtarına bağlı olarak her bilgiyi bir başkasıyla değiştirir. So, for example, AES-256 creates 256 blocks of ciphertext from 256 blocks of plaintext in 14 rounds.

The rounds consist of several steps: splitting the data into blocks, swapping bytes, shifting rows and rearranging columns. Sonuç, yalnızca bir şifreleme anahtarıyla anlamlı olacak tamamen rastgele bir karakter kümesidir.

AES-256 en güçlü şifreleme düzeyidir: Bu şifreyi kırmak için kötü bir oyuncunun her biri 78 basamaktan oluşan 2256 ayrı kombinasyonu denemesi gerekir.
