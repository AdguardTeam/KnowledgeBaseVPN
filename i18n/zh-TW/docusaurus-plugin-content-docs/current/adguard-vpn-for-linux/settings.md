---
title: 設定
sidebar_position: 4
---

您可以從命令列管理 AdGuard VPN for Linux 設定。 若要查看目前配置，請鍵入：

```
adguardvpn-cli config show
```

## VPN模式：TUN 或 SOCKS5

您可以選擇 AdGuard VPN 路由流量的方式。

若要設定預設隧道模式，請鍵入：

```
adguardvpn-cli config set-mode TUN
```

若要設定 SOCKS5 模式，請輸入：

```
adguardvpn-cli config set-mode SOCKS
```

若要設定 SOCKS5 連接埠，請輸入：

```
adguardvpn-cli config set-socks-port <port_number>
```

Replace `<port_number>` with the port you want to connect to.

## SOCKS settings

To set the SOCKS listen host, type:

```
adguardvpn-cli config set-socks-host <host>
```

Replace `<host>` with the host you want to use. Using a host other than 127.0.0.1 requires setting a username and password. To set the SOCKS username and password, type:

```
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

Replace `<username>` and `<password>` with your desired username and password. To clear the SOCKS username and password, type:

```
adguardvpn-cli config clear-socks-auth
```

## DNS上游位址

若要設定 DNS 上游，請輸入：

```
adguardvpn-cli config set-dns <server_address>
```

將 `<server_address>` 替換為您的 DNS 伺服器位址。 若要在系統層級使用此 DNS 伺服器，請鍵入：

```
adguardvpn-cli config set-system-dns on
```

## VPN tunnel routing mode: NONE, AUTO, or SCRIPT

You can choose how AdGuard VPN routes traffic through the VPN tunnel. To set the tunnel routing mode to NONE (no routing), type:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

To set the tunnel routing mode to AUTO (automatic routing), type:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

To set the tunnel routing mode to SCRIPT (custom routing script), type:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

To create a routes script with proper permissions, type:

```
adguardvpn-cli config create-routes-script
```

## Use QUIC

To enable the use of AdGuard VPN protocol based on QUIC (HTTP/3), type:

```
adguardvpn-cli config set-use-quic on
```

要停用它，請將其設為“off”。

## 崩潰報告

如果您啟用自動崩潰報告，AdGuard VPN 將在出現問題時通知開發人員。 若要啟用該設置，請鍵入：

```
adguardvpn-cli config send-reports on
```

To disable it, set it to `off`.

## 更新頻道

若要變更更新頻道，請輸入：

```
adguardvpn-cli config set-update-channel <channel>
```

Replace `<channel>` with `release`, `beta`, or `nightly`, depending on your preferences.

## 提示

AdGuard VPN 可以在執行命令後向您顯示提示 - 例如，下一步要做什麼或如何修復錯誤。 預設啟用此設置，但您可以透過鍵入以下內容來停用它：

```
adguardvpn-cli config set-show-hints off
```

若要重新啟用它，請將“off”替換為“on”。

## 偵錯日誌

若要報告錯誤，您可能需要與開發人員或支援團隊共用偵錯日誌。 若要啟用調試日誌記錄，請輸入：

```
adguardvpn-cli config set-debug-logging on
```

匯出日誌後停用此設定。
