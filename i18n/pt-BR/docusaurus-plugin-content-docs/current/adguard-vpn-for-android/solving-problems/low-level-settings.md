---
title: Guia de configurações de baixo nível
sidebar_position: 6
---

## Como acessar as Configurações de baixo nível

:::caution

Alterar as _Configurações de baixo nível_ pode causar problemas no desempenho do AdGuard VPN, interromper a conexão com a Internet ou comprometer sua segurança e privacidade. Você só deve abrir essa seção se souber o que está fazendo ou se tiver sido solicitado a fazê-lo por nossa equipe de suporte.

:::

Para acessar as _Configurações de baixo nível_, abra o aplicativo AdGuard VPN e toque no ícone de engrenagem no canto inferior direito da tela. Em seguida, escolha _Geral_ → _Avançado_ → _Configurações de baixo nível_.

## Configurações de baixo nível

Abaixo, listamos todas as configurações de baixo nível disponíveis no AdGuard VPN para Android e explicamos o que elas fazem. Novamente, alertamos para que não altere essas configurações sem saber o que está fazendo, mesmo que tenha lido este guia. Use isso como um guia rápido para quando você já souber o que está fazendo, mas precisar relembrar alguns detalhes específicos.

### Protocolo AdGuard VPN

Por padrão, o Protocolo do AdGuard VPN usa a seleção dinâmica de protocolo VPN (opção _Seleção automática_). Isso significa que o AdGuard VPN determina automaticamente qual protocolo — HTTP2/TLS ou HTTP3/QUIC — oferecerá o melhor desempenho e muda para ele instantaneamente. Isso melhora a velocidade e a estabilidade da VPN, o que é especialmente útil em regiões onde o uso de VPN é restrito ou instável.

Se souber o que está fazendo, pode alternar o AdGuard VPN para usar apenas o protocolo HTTP2/TLS ou HTTP3/QUIC em vez de Seleção automática. [QUIC](https://adguard-vpn.com/kb/general/why-adguard-vpn/#6-quic-support) é um protocolo relativamente novo e, portanto, pode ser menos estável. No entanto, se a sua conexão com a Internet estiver instável (por exemplo, quando você se conecta à Wi-Fi pública), ela oferece mais segurança e aumenta a velocidade da conexão graças à tecnologia [Head-Of-Line Blocking](https://adguard-dns.io/en/blog/dns-over-quic.html#headoflineblocking).

Além disso, aqui está um artigo dedicado sobre o protocolo: [Como funciona o Protocolo do AdGuard VPN](https://trusttunnel.org/).

### Incluir a porta Wi-Fi nas rotas VPN

Se esta configuração estiver ativada, os endereços IP do gateway serão adicionados às rotas da VPN quando conectado ao Wi-Fi.
Se você desativar essa opção, a configuração de rota (intervalos de IP que são filtrados) será alterada. O gateway Wi-Fi da rede à qual o usuário está conectado será excluído e, portanto, não será filtrado.

Essa configuração é ativada por padrão.

### Captura de pacotes (PCAP)

Se essa configuração estiver ativada, o AdGuard VPN criará um arquivo `.pcap` nomeado com a data e hora (por exemplo, `1682599851461.pcap`) no diretório de cache do aplicativo. Esse arquivo contém todos os pacotes de rede que passaram pela VPN e pode ser analisado com o [programa Wireshark](https://www.wireshark.org/).

### Watchdog

O Monitoramento (Watchdog) acompanha o status da VPN para identificar possíveis problemas. Quando ativado, o AdGuard VPN se protegerá contra aplicativos agressivos de economia de bateria que, de outra forma, poderiam encerrá-lo.

### Versão de IP de preferência

Aqui você pode configurar os endereços de endpoint. Há três alternativas: IPv4, IPv6 ou ambos (caso seu dispositivo ofereça suporte a IPv4 e IPv6).

### Intervalos IPv4 excluídos da VPN

O tunelamento VPN para os intervalos IPv4 listados nesta seção será desativado.

### Interface IPv6

Depois de ativar essa opção, você terá um endereço IPv6 ao rotear o tráfego por meio da conexão VPN. Você pode configurar as exclusões em _Intervalos IPv6 excluídos da VPN_.

### Intervalos IPv6 excluídos da VPN

O tunelamento VPN para os intervalos IPv6 listados nesta seção será desativado.

:::note

É necessário ativar a _Interface IPv6 nas Configurações de baixo nível_ primeiro, caso contrário, essa configuração não terá efeito.

:::

### MTU (unidade máxima de transmissão)

Aqui você pode definir o tamanho máximo (em bytes) do pacote de dados usado na VPN local. O intervalo recomendado é entre 1500 a 9000 bytes.

### Aplicativos excluídos

Aqui é possível adicionar UIDs (identificadores únicos) ou nomes de pacotes dos apps que você deseja excluir do roteamento VPN.
Ao contrário dos aplicativos nas _Exclusões_ comuns, o tráfego dos aplicativos adicionados a _Aplicativos excluídos_ não passa pelo serviço VPN local no seu dispositivo. Em vez disso, ele vai diretamente para o destino.

### Porta do servidor proxy

Aqui você pode configurar a porta do servidor proxy SOCKS5 interno. Por padrão, é usada a porta 1080.
