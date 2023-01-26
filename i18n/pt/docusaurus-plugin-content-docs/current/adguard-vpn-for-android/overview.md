---
title: Resumo de recursos
sidebar_position: 1
---

## O que é o AdGuard VPN para Android?

Uma VPN é uma ferramenta ideal que fornece segurança e anonimato sempre que você navega na Internet. [Como funciona?](/general/how-vpn-works.md) Sem entrar em detalhes técnicos, podemos dizer que a VPN cria um túnel criptografado seguro entre o computador ou dispositivo móvel do usuário e um servidor VPN remoto. Desta forma, a confidencialidade dos dados é preservada, bem como o anonimato do usuário, porque um observador terceiro vê o endereço IP do servidor VPN e não o IP real do usuário.

**A VPN é frequentemente usada para:**

* Manter dados pessoais em segurança mesmo durante a utilização de uma rede de Wi-Fi pública
* Impedir o rastreamento de atividades online, ocultando o endereço IP
* Ocultar a localização geográfica real do usuário para que permaneça anônimo

O AdGuard VPN para Android pode fazer tudo isso por você, além de oferecer vantagens únicas. Para descobrir por que o AdGuard VPN é a melhor opção, leia [este artigo](/general/why-adguard-vpn.md).

## Como começar a usar o AdGuard VPN para Android

Primeiramente, baixe AdGuard VPN no [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) e faça login em sua conta AdGuard. Caso você não tenha, basta [criá-la](https://auth.adguard.com/login.html). Você pode fazer login diretamente com as credenciais da sua conta do AdGuard. Ou então via Google ou Facebook, se sua conta AdGuard foi criada usando o mesmo endereço de e-mail.

## Tela principal

Existem duas barras na tela principal que refletem o status do aplicativo (Conectado/Desconectado) e o modo de exclusão selecionado ([Geral/Seletivo](#lists-of-exclusions)). Na mesma tela, há também um botão *Conectar/Desconectar* e uma lista de servidores disponíveis.

Cada servidor conta com sua localização e taxa de ping, que corresponde ao tempo de resposta do servidor. Quanto menor esta taxa, mais rápida será sua conexão. As opções mais rápidas são sempre exibidas no topo da lista, que apresenta mais de 50 locais em dezenas de países. Você pode se conectar ao servidor mais rápido tocando no botão *Conectar/Desconectar* ou escolhendo uma localização.

## Exclusões

Nós trabalhamos duro para facilitar o gerenciamento de suas listas de exclusão de sites e aplicativos. O AdGuard VPN só funcionará nos domínios que você escolher.

### Listas de exclusões

As listas de exclusões permitem selecionar sites para os quais a VPN deve ser habilitada ou desabilitada. Para chegar à seção *Exclusões* , toque no segundo ícone à esquerda na parte inferior da tela.

Existem dois modos: no *Modo geral*, os sites da lista de exclusões são excluídos e, no *Modo seletivo*, eles serão os únicos em que o AdGuard VPN será habilitado.

Você pode adicionar domínios (por exemplo `google.com`) ou subdomínios (por exemplo, `*.google.com`) de sites às *Exclusões* de três maneiras: insira-os manualmente no aplicativo ou diretamente no navegador clicando no botão *Share* e selecionando AdGuard VPN na lista aberta abaixo ou nas listas integradas de serviços divididos por categorias.

![Exclusões](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)
> Há alguns detalhes importantes na adição manual de domínios. Por exemplo, se você excluir manualmente o domínio `yahoo.com`, todos os `*.yahoo.com` subdomínios também serão listados nas exclusões. No entanto, nomes de domínio com outros domínios de nível superior, como `yahoo.jp` ou `yahoo.fr`, não serão excluídos. Ou você pode adicionar `youtube.com` às exclusões, mas o domínio do mesmo serviço `youtu.be` não entrará na lista. Nesse caso, é mais seguro usar listas de serviços integradas, pois nela colocamos todos os subdomínios relacionados a cada plataforma.

Como você pode ativar subdomínios em listas de serviço, adicionamos caixas que refletem o status de cada serviço. Você pode vê-los na tela principal de *Exclusões* à esquerda de cada nome de serviço: o status **Totalmente ativado** é sinalizado com um marca de verificação branca sobre fundo verde, o **Totalmente desativado**, com uma caixa cinza e o **Parcialmente ativado**, o que significa que um ou mais parâmetros foram alterados, com um quadrado verde sobre fundo branco. Boas notícias: você sempre pode retornar à exibição padrão das listas de serviços, caso tenha excluído ou desativado algum domínio de lá.

![Exclusões](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Outro recurso útil é a *Importação/exportação de exclusões*. Existem apenas quatro passos para atingir a meta:

1. Abra o AdGuard VPN no dispositivo/browser a partir do qual você pretende exportar suas listas de exclusões. Encontre a seção apropriada e clique no botão *Exportar*. O arquivo `adguard_vpn_exclusions.zip` será baixado.
2. Existem dois arquivos `.txt` dentro do arquivo, um para cada uma das listas *Geral* e *Seletiva*. Adicione mais exclusões a elas, exclua as existentes, renomeie os arquivos (mais sobre isso mais tarde) ou simplesmente deixe-os como estão.
3. Ao transferir entre dispositivos diferentes, não se esqueça de enviar o arquivo `.zip` para o dispositivo para importação. Por exemplo, se você importar listas de exclusão do seu dispositivo Windows para o Android, certifique-se de enviar o arquivo `.zip` para o Android com antecedência.
4. Abra o AdGuard VPN no dispositivo para o qual deseja importar o arquivo com as listas de exclusões prontas. Encontre a seção apropriada, clique no botão *Importar* e selecione o arquivo.

![Importar/Exportar](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

### Configurações de aplicativos

Como mencionamos acima, não apenas os sites podem ser facilmente adicionados às exclusões. Escolha para quais aplicativos você precisa do AdGuard VPN e para quais você não precisa. Toque no ícone ao lado de *Listas de exclusões* na parte inferior da tela para abrir as configurações do app. Por padrão, o AdGuard VPN funciona em todos os apps, mas você pode alternar o controle deslizante ao lado de qualquer aplicativo da lista e desativar o AdGuard VPN para ele.

Se o modo de compatibilidade ** com AdGuard estiver ativado, você só poderá gerenciar aplicativos por meio do AdGuard Ad Blocker. Portanto, quando você toca no botão, o aplicativo AdGuard é aberto.

![Configurações de aplicativo](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Configurações

Você pode acessar as *Configurações* pressionando o ícone de engrenagem no canto inferior direito da tela. A primeira seção contém *Configurações do aplicativo*: configure o AdGuard VPN para Android conforme necessário, selecionando diferentes opções.

![Configurações de aplicativo](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Início automático do AdGuard VPN

O controle deslizante à direita permite uma inicialização automática do AdGuard VPN após a inicialização do dispositivo.

### Servidores DNS

O objetivo do [Domain Name System](https://kb.adguard.com/en/general/dns-filtering#what-is-dns) (DNS) é traduzir os nomes dos sites em algo que os navegadores possam entender, ou seja, endereços IP. Este trabalho é executado por servidores DNS. O AdGuard VPN para Android oferece uma escolha de vários servidores DNS, cada um com características especiais. Por exemplo, o [AdGuard DNS](https://kb.adguard.com/en/dns/overview) remove anúncios e protege seu dispositivo contra rastreamento, enquanto o AdGuard DNS Family Protection combina as funções do AdGuard DNS com SafeSearch e bloqueio de conteúdo adulto. Há também uma opção para adicionar um servidor DNS personalizado.

### Proteção automática

Esse recurso habilita o AdGuard VPN automaticamente quando seu dispositivo se conecta a uma rede de celular ou Wi-Fi.

### Kill switch

Você pode configurar a função Kill Switch em seu dispositivo Android seguindo instruções simples na tela. Por que fazer isso? Se, por algum motivo, sua conexão VPN cair repentinamente enquanto você estiver usando uma rede móvel ou Wi-Fi público, o Kill Switch encerrará automaticamente a conexão com a Internet, impedindo que invasores tenham acesso a suas informações.

Lembre-se de que, se o Kill Switch estiver ativado, as *Configurações de aplicativo* e as *Exclusões* não funcionarão.

### Tema

Você pode escolher o tema padrão do sistema, escuro ou claro para o aplicativo.

![Tema](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Configurações avançadas

Nas *Configurações avançadas*, você encontrará cinco seções. Você pode *nos ajudar a melhorar* alternando a chave no bloco superior. Essa ação permitirá que o AdGuard VPN colete relatórios de falhas, dados técnicos e de interação. Esta informação chegará anonimamente.

A seção *Modo de operação* permite que você escolha uma das três opções: VPN, Proxy e Modo de compatibilidade. No *modo VPN*, todo o tráfego é roteado automaticamente através do AdGuard VPN. Quando o modo *Proxy* (SOCKS5) está ativado, o AdGuard VPN executa um servidor proxy local que pode ser usado por outros aplicativos para rotear seu tráfego. Escolha esta opção somente se você souber o que está fazendo. A ativação do *Modo de compatibilidade* permite que o AdGuard VPN e o AdGuard Ad Blocker funcionem juntos.

> Tenha em conta que alguns recursos do AdGuard VPN ficam desativados no *Modo de compatibilidade*: seleção de servidor DNS, Kill Switch e proteção automática. Além disso, para gerenciar o tunelamento de aplicativos, você deve abrir o aplicativo AdGuard Ad Blocker.

As próximas duas seções são *Nível de registro* e *Informações de diagnóstico*. Em relação à primeira opção, não é recomendável habilitar o nível de registro Estendido ou Extremo, a menos que solicitado por nossa equipe de suporte. Informações de diagnóstico e informações técnicas armazenadas localmente sobre o dispositivo e conexões (endereço IP, ID, ping etc.) podem ser enviadas para nós em caso de problemas técnicos.

A última seção de *Configurações avançadas* é *Configurações de nível baixo*. Pedimos que você não entre nesta seção, a menos que seja altamente qualificado ou tenha sido solicitado a fazê-lo por nossa equipe de suporte. Aqui é possível habilitar o registro da interface TUN ou protocolo IPv6 na interface VPN, escolher uma porta do servidor proxy ou versão do protocolo Internet que deve ser usada.

### Suporte

Na seção *Suporte*, você pode deixar comentários, relatar um bug ou exportar logs e informações do sistema para posterior envio ao helpdesk.
 
