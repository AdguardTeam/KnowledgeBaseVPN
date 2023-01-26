---
title: Como funciona a VPN
sidebar_position: 1
---

Para entender como o AdGuard VPN funciona, você deve primeiro entender os princípios gerais do serviço VPN.

## Recursos da VPN

Uma VPN é uma rede privada virtual que ajuda a ocultar sua localização e proteger seus dados na web. Uma VPN conecta um computador ou dispositivo móvel a um servidor VPN e usa o endereço IP desse servidor para fazer parecer a um observador externo que você está em outro lugar. Isso permite que você acesse com segurança vários recursos da Internet e proteja seus dados pessoais.

Dessa forma, uma VPN executa duas funções importantes:

1. **Mantendo o anonimato**

Usando uma conexão com a Internet, o usuário deixa sua pegada digital, que pode ser analisada e utilizada por terceiros. Por exemplo, uma das lojas online que você visitou pode salvar seu histórico de pesquisa e, em seguida, oferecer seus produtos com base nele por meio de publicidade direcionada. Ou os serviços secretos, tendo aprendido sua localização por meio do endereço IP de seu dispositivo e determinado sua identidade, podem monitorar secretamente sua atividade na web. Além disso, os navegadores da web e os próprios ISPs podem usar seu histórico de navegação para seus próprios fins, bem como vendê-lo a anunciantes e fornecê-lo a instituições governamentais. A VPN permite ocultar seu endereço IP e substituí-lo pelo endereço IP do servidor VPN ao qual você está conectado. Dessa forma, você poderá manter sua privacidade e pesquisar anonimamente informações na web.

2. **Proteção de dados**

Se você se conectar a uma rede não confiável ou pública, os dados em seu dispositivo podem ficar vulneráveis a cibercriminosos. Detalhes do cartão bancário, nomes de usuário e senhas, dados do passaporte - todos esses dados podem ser interceptados por fraudadores online. O túnel VPN criptografa as informações que você envia e recebe da web, para que não caiam em mãos erradas.

## Estrutura VPN

Quando você se conecta a uma rede, seu computador ou dispositivo móvel recebe um número de identificação exclusivo ou endereço IP. Geralmente consiste em números de 0 a 255, separados por pontos ou dois pontos. Conhecendo essa sequência, pode-se determinar a geolocalização do dispositivo. O endereço IP geralmente é definido pelo seu ISP e ficará visível até o chegar ao recurso desejado. Por esse motivo, o servidor web do site que você está visitando pode registrar seu endereço IP e registrar o que você solicitou. Esse registro pode ser usado principalmente para coleta de dados e análise de tráfego.

Uma VPN cria um túnel entre seu dispositivo e o servidor VPN. Seus dados passam por esse túnel, são criptografados e entram na Internet aberta de forma segura. Portanto, parecerá ao servidor web que seu dispositivo não possui mais seu endereço IP real, mas o endereço IP do endpoint do túnel, ou seja, o servidor VPN. Assim, o site que você acessar depois de passar pelo túnel VPN considerará a geolocalização do servidor VPN que você selecionou como sua localização real. E os dados criptografados não cairão nas mãos de anunciantes, hackers e serviços de segurança.

![Estrutura VPN](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Tipos de protocolos VPN

Os protocolos de segurança VPN são ferramentas que criptografam dados em um túnel VPN e permitem manter a privacidade do usuário em uma Internet aberta. No momento, a grande maioria dos serviços VPN modernos usa um dos três protocolos VPN a seguir:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Uma de suas principais vantagens é que está disponível na maioria dos dispositivos e sistemas operacionais e oferece um alto nível de segurança. No entanto, o uso do duplo [encapsulamento](https://en.wikipedia.org/wiki/Encapsulation_(networking)) neste protocolo pode resultar em uma velocidade de conexão menor.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Este protocolo moderno é de código aberto, portanto, fabricantes terceirizados podem melhorar e atualizar a tecnologia.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Suas principais vantagens são facilidade de uso, alta eficiência e baixa vulnerabilidade a ataques.

Além desses protocolos VPN, existem outros (por exemplo, TLS, SSTP, IKEv2), mas são impopulares ou não atendem aos padrões modernos de criptografia de dados.

![Como funciona um protocolo VPN](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/4.svg)

O AdGuard VPN também possui seu próprio [*protocolo*](adguard-vpn-protocol.mdx). Uma de suas vantagens é que o tráfego transmitido usando o protocolo AdGuard VPN é difícil de distinguir do tráfego regular. O túnel VPN parece tráfego HTTPS normal, por isso é extremamente difícil detectá-lo e bloqueá-lo. Além disso, é baseado nos mecanismos do moderno protocolo HTTP/2, que garante alta velocidade de conexão.

![Como funciona a VPN oculta](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg)

## Desvantagens da VPN

Apesar das vantagens óbvias, a VPN não é perfeita e apresenta algumas desvantagens:

**Velocidade mais baixa**

Como seu tráfego não vai diretamente para o servidor da Web, mas primeiro passa pelo servidor VPN, a velocidade da conexão VPN diminui. Outros fatores também afetam a velocidade ao usar uma VPN: a carga do servidor VPN, sua largura de banda, a compatibilidade do protocolo VPN com seu sistema operacional. Todos esses fatores, assim como a velocidade da própria rede, podem reduzir a qualidade da sua conexão VPN.

**Bloqueio de acesso**

Alguns serviços online se esforçam muito para detectar o tráfego VPN e bloquear o acesso aos usuários de VPN. No entanto, poucas VPNs podem mascarar seu tráfego como regular. Portanto, muitas tentativas de acessar um determinado site sem desativar a VPN acabam em nada.

**Queda nas conexões VPN**

Um sinal fraco, sobrecarga de rede, incompatibilidade de VPN com firewall, antivírus e outros programas, um protocolo VPN desatualizado - tudo isso pode causar uma falha repentina na conexão VPN, especialmente por provedores de VPN não confiáveis.

## AdGuard VPN

Nosso serviço VPN tem várias [vantagens](why-adguard-vpn.md) importantes:

* [*Protocolo VPN proprietário*](adguard-vpn-protocol.mdx), que funciona de forma estável mesmo com uma conexão de Internet lenta e se disfarça como tráfego normal, dificultando seu rastreamento e bloqueio

* [*Política "No-logs"*](https://adguard-vpn.com/en/privacy.html), o que significa que o AdGuard VPN não coleta seus dados pessoais e não os transfere para terceiros

* *Mais de 50 servidores VPN em dezenas de países*

* *Facilidade de uso e amplas opções de personalização*

Atualmente, o AdGuard VPN está disponível como:

* [Extensão do navegador](../adguard-vpn-browser-extension/overview.md) para Chrome, Firefox e Edge

* Aplicativo móvel para [Android](../adguard-vpn-for-android/overview.md) e [iOS](../adguard-vpn-for-ios/overview.md)

* Aplicativo de área de trabalho para [Windows](../adguard-vpn-for-windows/overview.md) e [Mac](../adguard-vpn-for-mac/overview.md)

Você pode aprender mais sobre os recursos do AdGuard VPN (incluindo a versão ilimitada) [aqui](https://adguard-vpn.com/en/welcome.html).
