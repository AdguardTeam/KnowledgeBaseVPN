---
title: Como uma VPN funciona
sidebar_position: 1
---

Para entender como o AdGuard VPN funciona, você deve primeiro entender os princípios gerais do serviço VPN.

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Recursos da VPN

Uma VPN é uma rede privada virtual que ajuda a ocultar sua localização e proteger seus dados na Web. Uma VPN conecta um computador ou dispositivo móvel a um servidor VPN e usa o endereço IP desse servidor para fazer parecer a um observador externo que você está em outro lugar. Isso permite que você acesse com segurança vários recursos da Internet e proteja seus dados pessoais.

Dessa forma, uma VPN desempenha duas funções importantes:

1. **Manter o anonimato**

   Usando uma conexão com a Internet, o usuário deixa sua pegada digital, que pode ser analisada e usada por terceiros. Por exemplo, uma das lojas online que você visitou pode salvar seu histórico de pesquisa e, em seguida, oferecer seus produtos com base nele por meio de publicidade direcionada. Ou os serviços secretos, tendo aprendido sua localização através do endereço IP do seu dispositivo e tendo determinado sua identidade, podem monitorar secretamente sua atividade na web. Além disso, os próprios navegadores da Web e ISPs podem usar seu histórico de navegação para seus próprios fins, bem como vendê-lo para anunciantes e fornecê-lo a instituições governamentais. A VPN permite que você oculte seu endereço IP e o substitua pelo endereço IP do servidor VPN ao qual você está conectado. Dessa forma, você poderá manter sua privacidade e pesquisar informações na web anonimamente.

2. **Proteção de dados**

   Se você se conectar a uma rede não confiável ou pública, os dados em seu dispositivo podem ficar vulneráveis a cibercriminosos. Detalhes do cartão bancário, nomes de usuário e senhas, dados do passaporte - todos esses dados podem ser interceptados por fraudadores online. O túnel VPN criptografa as informações que você envia e recebe da Web, tornando-as inúteis nas mãos erradas.

## Estrutura VPN

Quando você se conecta a uma rede, seu computador ou dispositivo móvel recebe um número de identificação exclusivo ou endereço IP. Geralmente consiste em números de 0 a 255, separados por pontos ou dois pontos. Conhecendo esta sequência, pode-se determinar a geolocalização do dispositivo. O endereço IP geralmente é atribuído pelo seu ISP e ficará visível até o recurso desejado. Por esse motivo, o servidor da Web do site que você está visitando pode registrar seu endereço IP e gravar o que você solicitou. Esse registro pode então ser usado principalmente para coleta de dados e análise de tráfego.

Uma VPN cria um túnel entre seu dispositivo e o servidor VPN. Seus dados passam por este túnel, são criptografados e então entram na Internet aberta de forma segura. O servidor da Web, portanto, registra o endereço IP do ponto final do túnel, ou seja, o servidor VPN e, portanto, não o endereço IP real do dispositivo. Assim, o site que você acessa após passar pelo túnel VPN considerará a geolocalização do servidor VPN que você selecionou como sua localização real. E os dados criptografados não cairão nas mãos de anunciantes, hackers e serviços de segurança.

![Estrutura VPN](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Tipos de protocolos VPN

Os protocolos de segurança VPN são ferramentas que criptografam dados em um túnel VPN e permitem que você mantenha a privacidade do usuário na Internet aberta. No momento, a grande maioria dos serviços VPN modernos usa um dos três protocolos VPN a seguir:

1. [_IPSec_](https://en.wikipedia.org/wiki/IPsec). Uma de suas principais vantagens é que está disponível na maioria dos dispositivos e sistemas operacionais e fornece um alto nível de segurança. No entanto, o uso de [encapsulamento](https://en.wikipedia.org/wiki/Encapsulation_\(networking\)) duplo neste protocolo pode resultar em uma velocidade de conexão menor.

2. [_OpenVPN_](https://en.wikipedia.org/wiki/OpenVPN). Este protocolo moderno é de código aberto, portanto, os fabricantes terceirizados podem melhorar e atualizar a tecnologia.

3. [_WireGuard_](https://en.wikipedia.org/wiki/WireGuard). Suas principais vantagens são facilidade de uso, alta eficiência e baixa vulnerabilidade a ataques.

Além desses protocolos VPN, existem outros (por exemplo, TLS, SSTP, IKEv2), mas eles são impopulares ou não atendem aos padrões modernos de criptografia de dados.

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" alt="protocol 6" /> </object>

O AdGuard VPN também tem seu próprio [_protocolo_](/general/adguard-vpn-protocol). Uma de suas vantagens é que o tráfego transmitido usando o protocolo AdGuard VPN é difícil de distinguir do tráfego regular. O túnel VPN se assemelha ao tráfego HTTPS normal, tornando-o extremamente difícil de detectar e bloquear. Além disso, ele é baseado nos mecanismos do moderno protocolo HTTP/2, que garante alta velocidade de conexão.

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" alt="protocol 5" /></object>

## Desvantagens da VPN

Apesar das vantagens óbvias, a VPN não é perfeita e tem algumas desvantagens:

### Menor velocidade

Como seu tráfego não vai diretamente para o servidor da Web, mas primeiro passa pelo servidor VPN, a velocidade da conexão VPN diminui. Outros fatores também afetam a velocidade ao usar uma VPN: a carga do servidor VPN, sua largura de banda, a compatibilidade do protocolo VPN com seu sistema operacional. Todos esses fatores, bem como a velocidade da própria rede, podem impactar a experiência geral do usuário de uma conexão VPN.

### Bloqueio de acesso

Alguns serviços online se esforçam muito para detectar o tráfego VPN e bloquear o acesso de usuários VPN. No entanto, poucas VPNs podem se mascarar de forma que sejam vistas apenas como tráfego regular. Portanto, muitas tentativas de acessar um determinado site por meio de uma conexão VPN acabam em nada.

### Quebra de conexões VPN

Um sinal fraco, sobrecarga de rede, incompatibilidade de VPN com um firewall, antivírus e outros programas, um protocolo VPN desatualizado - tudo isso pode causar uma falha repentina na conexão VPN, especialmente com provedores de VPN não confiáveis.

## AdGuard VPN

Nosso serviço VPN tem várias [vantagens](/general/why-adguard-vpn) importantes:

- [_Protocolo VPN proprietário_](/general/adguard-vpn-protocol), que funciona de forma estável mesmo com uma conexão lenta com a Internet e se disfarça de tráfego normal, tornando mais difícil rastreá-lo e bloqueá-lo

- [_Política de não registro_](https://adguard-vpn.com/privacy.html), o que significa que nenhum dado pessoal pode ser compartilhado com terceiros porque o AdGuard VPN nunca coleta tais dados

- _Mais de 50 servidores VPN em dezenas de países_

- _Facilidade de uso e extensas opções de personalização_

Atualmente, o AdGuard VPN está disponível como:

- [Extensão de navegador](/adguard-vpn-browser-extension/overview) para Chrome, Edge, Firefox e Opera

- Aplicativo móvel para [Android](/adguard-vpn-for-android/overview) e [iOS](/adguard-vpn-for-ios/overview)

- Aplicativo para desktop para [Windows](/adguard-vpn-for-windows/overview) e [Mac](/adguard-vpn-for-mac/overview)

- No terminal de comando para [Linux, Mac e alguns roteadores](/adguard-vpn-for-linux/)

- Um cliente VPN para [roteadores](/general/set-up-adguard-vpn-on-your-router/)

[Saiba mais sobre os recursos do AdGuard VPN](https://adguard-vpn.com/welcome.html)
