---
title: Как работает VPN
sidebar_position: 1
---

Чтобы понять, как работает AdGuard VPN, для начала следует разобраться с основными принципами работы VPN-сервиса.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Функции VPN

A VPN is a virtual private network that helps hide your location and protect your data on the Web. VPN соединяет компьютер или мобильное устройство с VPN-сервером и использует его IP-адрес, чтобы стороннему наблюдателю казалось, что вы находитесь в другом месте. Это позволяет вам безопасно получать доступ к различным интернет-ресурсам и защищать свои личные данные.

Таким образом, VPN выполняет две важные функции:

1. **Maintaining anonymity**

    Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN allows you to hide your IP address and replace it with the IP address of the VPN server to which you are connected. This way you will be able to maintain your privacy and anonymously search for information on the web.

1. **Data protection** If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. Данные банковских карт, имена пользователей и пароли, паспортные данные — все эти данные могут быть перехвачены мошенниками. VPN-туннель шифрует информацию, которую вы отправляете и получаете из интернета, чтобы она не попала в чужие руки.

## Структура VPN

Когда вы подключаетесь к сети, вашему компьютеру или мобильному устройству присваивается уникальный идентификационный номер или IP-адрес. Обычно он состоит из чисел от 0 до 255, разделённых точками или двоеточиями. Зная эту последовательность, можно определить местоположение устройства. Обычно ваш IP-адрес задаёт интернет-провайдер, и он остаётся видимым на всём пути к нужному ресурсу. По этой причине веб-сервер сайта, который вы посещаете, может зарегистрировать ваш IP-адрес и запомнить все ваши запросы. Затем эта запись может быть использована для сбора данных и анализа трафика.

VPN создаёт туннель между вашим устройством и VPN-сервером. Ваши данные проходят через него, шифруются и затем попадают в открытый интернет в защищённом виде. Поэтому веб-серверу будет казаться, что у вашего устройства IP-адрес конечной точки туннеля, то есть VPN-сервера, а не ваш реальный IP. Таким образом, сайт, на который вы попадёте после прохождения через VPN-туннель, будет считать геолокацию выбранного вами VPN-сервера вашим реальным местоположением. А зашифрованные данные не попадут в руки рекламодателей, хакеров и служб безопасности.

![Структура VPN](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Типы VPN-протоколов

Протоколы безопасности VPN — это главные инструменты, которые шифруют данные в VPN-туннеле и обеспечивают конфиденциальность пользователя в интернете. Большинство современных VPN-сервисов используют один из следующих трёх VPN-протоколов:

1. [*IPSec*](https://ru.wikipedia.org/wiki/IPsec). Одно из его основных преимуществ в том, что он доступен на большинстве устройств и операционных систем и обеспечивает высокий уровень безопасности. Однако использование двойной [инкапсуляции](https://en.wikipedia.org/wiki/Encapsulation_(networking)) в этом протоколе может привести к снижению скорости соединения.

1. [*OpenVPN*](https://ru.wikipedia.org/wiki/OpenVPN). У этого современного протокола открытый исходный код, поэтому сторонние производители могут совершенствовать и обновлять технологию.

1. [*WireGuard*](https://ru.wikipedia.org/wiki/WireGuard). Его основные преимущества — простота использования, высокая эффективность и низкая уязвимость.

Помимо этих VPN-протоколов существуют и другие (например, TLS, SSTP, IKEv2), но они непопулярны или не соответствуют современным стандартам шифрования данных.

AdGuard VPN also has its own [*protocol*](/general/adguard-vpn-protocol). One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

## Недостатки VPN

Despite the obvious advantages, VPN is not perfect and has some disadvantages:

### Снижение скорости

Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, can reduce the quality of your VPN connection.

### Блокировка доступа

Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask their traffic as regular. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing.

### Обрыв VPN-соединений

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers.

## AdGuard VPN

Our VPN service has several important [advantages](/general/why-adguard-vpn):

- [*Proprietary VPN protocol*](/general/adguard-vpn-protocol), which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

- [*No-logging policy*](https://adguard-vpn.com/privacy.html), which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties

- *Более 50 VPN-серверов в десятках стран;*

- *Простота использования и широкие возможности настройки.*

Currently, AdGuard VPN is available as:

- [Browser extension](/adguard-vpn-browser-extension/overview) for Chrome, Firefox, and Edge

- Mobile app for [Android](/adguard-vpn-for-android/overview) and [iOS](/adguard-vpn-for-ios/overview)

- Desktop application for [Windows](/adguard-vpn-for-windows/overview) and [Mac](/adguard-vpn-for-mac/overview)

[Learn more about AdGuard VPN features](https://adguard-vpn.com/welcome.html)
