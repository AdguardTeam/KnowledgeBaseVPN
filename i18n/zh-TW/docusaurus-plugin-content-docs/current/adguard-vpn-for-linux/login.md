---
title: 登入、連線和更新
sidebar_position: 3
---

## 登入和登出

要登入或創建帳戶，請鍵入：

```
adguardvpn-cli 登入
```

輸入您的 AdGuard 帳戶的電子郵件地址和密碼。 如果您還沒有帳戶，系統會提示您建立一個帳戶。

:::note
您也可以在我們的[網站](https://auth.adguard.com/login.html)上建立 AdGuard 帳戶，然後使用您的憑證登入 AdGuard VPN for Linux。
:::

若要登出 AdGuard VPN，請鍵入：

```
adguardvpn-cli logout
```

## 連線到 VPN

若要快速連接，請鍵入：

```
adguard-vpn cli connect
```

AdGuard VPN 將連接到最快的可用位置或上次使用的位置。

要檢視可用位置，請輸入：

```
adguardvpn-cli list-locations
```

要連線到特定位置，請輸入：

```
adguardvpn-cli connect -l <location>
```

將 `<location>` 替換為您要連接的位置的城市、國家或 ISO 代碼。

如果需要，請輸入您的管理員密碼。

## 檢查更新

若要檢查更新，請鍵入：

```
adguardvpn-cli check-update
```
