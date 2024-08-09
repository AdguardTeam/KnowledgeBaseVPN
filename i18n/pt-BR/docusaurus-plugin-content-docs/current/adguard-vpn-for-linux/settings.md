---
title: Configurações
sidebar_position: 4
---

Você pode gerenciar as configurações do AdGuard VPN para Linux a partir da linha de comando. Para visualizar a configuração atual, digite:

```
adguardvpn-cli config show
```

## Modo VPN: TUN ou SOCKS5

Você pode escolher como o AdGuard VPN roteia o tráfego.

Para definir o modo de túnel padrão, digite:

```
adguardvpn-cli config set-mode TUN
```

Para definir o modo SOCKS5, digite:

```
adguardvpn-cli config set-mode SOCKS
```

Para definir a porta SOCKS5, digite:

```
adguardvpn-cli config set-socks-port <número_da_porta>
```

Substitua `<número_da_porta>` pela porta à qual você deseja se conectar.

## Configurações de SOCKS

Para definir o host de escuta SOCKS, digite:

```
adguardvpn-cli config set-socks-host <host>
```

Substitua `<host>` pelo host que você deseja usar. Usar um host diferente de 127.0.0.1 requer a configuração de um nome de usuário e senha. Para definir o nome de usuário e a senha do SOCKS, digite:

```
adguardvpn-cli config set-socks-username <nome de usuário>
adguardvpn-cli config set-socks-password <senha>
```

Substitua `<nome de usuário>` e `<senha>` pelo nome de usuário e senha desejados. Para limpar o nome de usuário e a senha do SOCKS, digite:

```
adguardvpn-cli config clear-socks-auth
```

## Endereço upstream do DNS

Para definir um upstream DNS, digite:

```
adguardvpn-cli config set-dns <endereço_do_servidor>
```

Substitua `<endereço_do_servidor>` pelo endereço do seu servidor DNS. Para usar este servidor DNS no nível do sistema, digite:

```
adguardvpn-cli config set-system-dns on
```

## Modo de roteamento de túnel VPN: NONE, AUTO ou SCRIPT

Você pode escolher como o AdGuard VPN roteia o tráfego pelo túnel VPN. Para definir o modo de roteamento de túnel como NONE (sem roteamento), digite:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

Para definir o modo de roteamento de túnel como AUTO (roteamento automático), digite:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

Para definir o modo de roteamento de túnel como SCRIPT (script de roteamento personalizado), digite:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

Para criar um script de rotas com as permissões adequadas, digite:

```
adguardvpn-cli config create-routes-script
```

## Usar QUIC

Para habilitar o uso do protocolo AdGuard VPN baseado em QUIC (HTTP/3), digite:

```
adguardvpn-cli config set-use-quic on
```

Para desativá-lo, defina como `off`.

## Relatórios de erros

Se você ativar os relatórios de erros automáticos, o AdGuard VPN notificará os desenvolvedores se algo der errado. Para habilitar a configuração, digite:

```
adguardvpn-cli config send-reports on
```

Para desativá-lo, defina como `off`.

## Canal de atualização

Para alterar o canal de atualização, digite:

```
adguardvpn-cli config set-update-channel <canal>
```

Substitua `<canal>` por `release`, `beta` ou `nightly`, dependendo de suas preferências.

## Dicas

O AdGuard VPN pode mostrar dicas após a execução de comandos - por exemplo, o que fazer a seguir ou como corrigir um erro. Esta configuração é habilitada por padrão, mas você pode desabilitá-la digitando:

```
adguardvpn-cli config set-show-hints off
```

Para habilitá-lo novamente, substitua `off` por `on`.

## Registro de depuração

Para relatar um bug, pode ser necessário compartilhar logs de depuração com os desenvolvedores ou equipe de suporte. Para habilitar o registro de depuração, digite:

```
adguardvpn-cli config set-debug-logging on
```

Desative esta configuração após exportar os logs.
