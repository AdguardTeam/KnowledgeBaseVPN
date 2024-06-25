---
title: 如何在路由器上设置 AdGuard VPN
sidebar_position: 8
---

通过在路由器上设置 AdGuard VPN，可以保护您在无法安装 VPN 应用程序的设备（如智能电视和游戏机）上的数据。

:::note

此选项仅在您拥有 AdGuard VPN 订阅并且您的路由器支持 IPsec 协议时才可用。

:::

## 如何在路由器上设置 AdGuard VPN

1. 在您的 [AdGuard 帐户](https://auth.adguard.com/login.html)中，选择 AdGuard VPN。

2. 在「**设备**」下，单击「**添加路由器**」

   ![Add router \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. 选择所需的 VPN 服务器位置并生成认证信息.

   ![Generate credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::提示

   接下来的步骤可能会根据您的路由器而有所不同。 我们以 Keenetic 路由器为例。

   :::

4. 在管理页面上，转到路由器设置.

5. 启用「**VPN 客户端**」并单击「**添加 VPN 服务器**」

6. 选择 IPsec-client（它可能称为 IKE；而不是 L2TP/IPsec）。

7. 输入在步骤 3 中创建的**认证信息**

   ![Enter the credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. 将设备连接到路由器.

:::note

如果要更改VPN服务器位置，您需要更新路由器设置。

:::

## 为什么在路由器上设置 AdGuard VPN 可能很有用

- 在路由器上安装 AdGuard VPN 后，VPN 提供商或其他任何人都无法访问您的互联网活动。
- 在路由器上安装 AdGuard VPN 可以保护整个网络，这意味着连接到路由器的所有设备都受到保护
- 您可以为无法安装 AdGuard VPN 应用程序的设备增强安全性并保护您的数据，例如智能电视（目前，AdGuard VPN 仅在 Android TV 上可用）和游戏机
