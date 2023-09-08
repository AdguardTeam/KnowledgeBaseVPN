---
title: Como funciona a VPN
sidebar_position: 1
---

Para entender como o AdGuard VPN funciona, você deve primeiro entender os princípios gerais do serviço VPN.

## Recursos da VPN

Uma VPN é uma rede privada virtual que ajuda a ocultar sua localização e proteger seus dados na web. Uma VPN conecta um computador ou dispositivo móvel a um servidor VPN e usa o endereço IP desse servidor para fazer parecer a um observador externo que você está em outro lugar. Isso permite que você acesse com segurança vários recursos da Internet e proteja seus dados pessoais.

Dessa forma, uma VPN executa duas funções importantes:

1. **Maintaining anonymity** Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN allows you to hide your IP address and replace it with the IP address of the VPN server to which you are connected. This way you will be able to maintain your privacy and anonymously search for information on the web.

2. **Data protection** If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. Bank card details, usernames and passwords, passport data — all this data can be intercepted by online fraudsters. The VPN tunnel encrypts the information that you send and receive from the web, so it can not fall into the wrong hands.

## Estrutura VPN

When you connect to a network, your computer or mobile device is assigned a unique ID number, or IP address. It usually consists of numbers from 0 to 255, separated by dots or colons. Knowing this sequence, one can determine the geolocation of the device. The IP address is usually set by your ISP, and it will be visible all the way to the desired resource. For this reason, the web server of the site you are visiting can register your IP address and record what you have requested. This record can then be used primarily for data collection and traffic analysis.

A VPN creates a tunnel between your device and the VPN server. Your data goes through this tunnel, gets encrypted and then enters the open Internet in a secure form. Therefore, it will seem to the web server that your device has no longer your real IP address, but the IP address of the endpoint of the tunnel, that is, the VPN server. Thus, the site that you get to after passing through the VPN tunnel will consider the geolocation of the VPN server you selected as your real location. And the encrypted data will not fall into the hands of advertisers, hackers and security services.

![VPN structure](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Tipos de protocolos VPN

VPN security protocols are tools that encrypt data in a VPN tunnel and allow you to maintain user privacy in an open Internet. At the moment, the vast majority of modern VPN services use one of the following three VPN protocols:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). One of its main advantages is that it is available on most devices and operating systems and provides a high level of security. However, the use of double [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(networking)) in this protocol may result in a lower connection speed.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). This modern protocol is open source, so third-party manufacturers can improve and update the technology.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Its main advantages are ease of use, high efficiency and low vulnerability to attacks.

In addition to these VPN protocols, there are others (for example, TLS, SSTP, IKEv2), but they are unpopular or do not meet modern data encryption standards.

![How a VPN protocol works](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/4.svg)

AdGuard VPN also has its own [*protocol*](adguard-vpn-protocol.mdx). One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

![How concealed VPN works](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg)

## Desvantagens da VPN

Despite the obvious advantages, VPN is not perfect and has some disadvantages:

### Lower speed

Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, can reduce the quality of your VPN connection.

### Access blocking

Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask their traffic as regular. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing.

### VPN connections breaking

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers.

## AdGuard VPN

Our VPN service has several important [advantages](why-adguard-vpn.md):

- [*Protocolo VPN proprietário*](adguard-vpn-protocol.mdx), que funciona de forma estável mesmo com uma conexão de Internet lenta e se disfarça como tráfego normal, dificultando seu rastreamento e bloqueio

- [*Política "No-logs"*](https://adguard-vpn.com/en/privacy.html), o que significa que o AdGuard VPN não coleta seus dados pessoais e não os transfere para terceiros

- *Mais de 50 servidores VPN em dezenas de países*

- *Facilidade de uso e amplas opções de personalização*

Currently, AdGuard VPN is available as:

- [Extensão do navegador](../adguard-vpn-browser-extension/overview.md) para Chrome, Firefox e Edge

- Aplicativo móvel para [Android](../adguard-vpn-for-android/overview.md) e [iOS](../adguard-vpn-for-ios/overview.md)

- Aplicativo de área de trabalho para [Windows](../adguard-vpn-for-windows/overview.md) e [Mac](../adguard-vpn-for-mac/overview.md)

You can learn more about AdGuard VPN features (including the unlimited version) [here](https://adguard-vpn.com/en/welcome.html).
