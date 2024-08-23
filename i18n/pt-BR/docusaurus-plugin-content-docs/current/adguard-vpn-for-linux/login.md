---
title: Login, conexão e atualização
sidebar_position: 3
---

## Fazer login e sair

Para fazer login ou criar uma conta, digite:

```
adguardvpn-cli login
```

Digite o endereço de e-mail e a senha da sua conta do AdGuard. Se você ainda não possui uma conta, será solicitado que você crie uma.

:::note
Você também pode criar uma conta do AdGuard em nosso [site](https://auth.adguard.com/login.html) e fazer login no AdGuard VPN para Linux usando suas credenciais.
:::

Para sair do AdGuard VPN, digite:

```
adguardvpn-cli logout
```

## Conectar à VPN

Para conexão rápida, digite:

```
adguardvpn-cli connect
```

O AdGuard VPN se conectará ao local disponível mais rápido ou ao último local usado.

Para visualizar os locais disponíveis, digite:

```
adguardvpn-cli list-locations
```

Para se conectar a um local específico, digite:

```
adguardvpn-cli connect -l <local>
```

Substitua `<local>` pela cidade, país ou código ISO do local ao qual deseja se conectar.

Se necessário, digite sua senha de administrador.

## Verificar atualizações

Para verificar se há atualizações, digite:

```
adguardvpn-cli check-update
```
