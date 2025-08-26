---
title: Installation and removal
sidebar_position: 2
---

Installing AdGuard VPN directly on your router allows every device in your network to benefit from private and secure internet access — no separate app required. Follow this guide to add your router to AdGuard VPN, generate credentials, and connect your devices in just a few simple steps.

## Installation options

There are two main ways to run AdGuard VPN on a router:

1. IPSec profile

    - Easy to set up, supported by many routers
    - Limitations: not available in Russia, only a limited number of VPN locations, and no support for exclusions

1. [AdGuard VPN CLI](/adguard-vpn-for-linux/setting-up-on-a-router)

    - Advanced setup that unlocks all AdGuard VPN features, including access to all locations and website exclusions (app exclusions are not available)
    - Requires more technical knowledge
    - On routers with low-performance processors, connection speed may be limited to 30-100 Mbps

## How to set up AdGuard VPN on your router

1. In your [AdGuard account](https://auth.adguardaccount.com/login.html), select AdGuard VPN.
1. Under *Devices*, click *Add router*.

    ![Add router *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

1. Select the desired VPN server location and generate credentials.

    ![Generate credentials *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

    :::note

    The next steps may vary depending on your router. We have used the Keenetic router as an example.

    :::

1. In your admin page, go to the router settings.
1. Enable *VPN Client* and click *Add VPN server*.
1. Select IPsec-client (it may for some router brands be called IKEv2; not L2TP/IPsec).
1. Enter the credentials you created in step 3.

    ![Enter the credentials *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

1. Connect devices to your router.

:::note

You’ll need to update your router settings if you want to change the VPN server location.

:::

## Routers known to be incompatible with AdGuard VPN

- **ASUS**
    - Only has IPsec in the *VPN Server* settings, and not in the correct *VPN Fusion*/*VPN Client* settings
- **FRITZ!Box**

## How to set up AdGuard VPN on MikroTik routers

To set up AdGuard VPN on your MikroTik router, follow these steps:

1. Access the MikroTik terminal. You can do this by using the command line or Terminal app on your computer or Mac with the command: `ssh admin@192.168.88.1`. You can also access it through your browser by visiting `http://192.168.88.1` and clicking on the Terminal tab in the upper right corner.

1. Once you're in, run the following commands:

`/ip ipsec mode-config`

`add connection-mark=to_adguard name=adguard responder=no`

`/ip ipsec policy group`

`add name=adguard`

`/ip ipsec profile`

`add name=adguard`

`/ip ipsec peer`

`add address=SERVER_ADDRESS exchange-mode=ike2 name=adguard profile=adguard`

`/ip ipsec proposal`

`add name=adguard pfs-group=none`

`/ip ipsec identity`

`add auth-method=eap certificate="" eap-methods=eap-mschapv2 generate-policy= port-strict mode-config=adguard peer=adguard policy-template-group=adguard username=USERNAME password=PASSWORD`

`/ip ipsec policy`

`add dst-address=0.0.0.0/0 group=adguard src-address=0.0.0.0/0 template=yes`

In the commands above, `SERVER_ADDRESS` indicates the server address. `USERNAME` is the username that you were assigned when adding your router in your AdGuard account. The same goes for `PASSWORD`.

Please note, these commands should be executed exactly as they are.

## Installation on Keenetic routers

You can configure AdGuard VPN on Keenetic routers starting from KeeneticOS 3.5. Follow the steps below:

1. Install the IKEv2/IPsec VPN client system component. Go to the manufacturer's [web interface](https://help.keenetic.com/hc/en-us/articles/360001923020-Web-interface) → *General system settings* → *KeeneticOS update and component options* and click *Component options*.

1. Go to *Other connections* → *VPN connections* and click *Create connection*.

1. In the *VPN connection settings* screen, enable *Use this connection to access the Internet*.

1. Enter any name to identify the connection in the *Connection name* field. In the *Type (protocol)* field, enter `IKEv2`.

1. Go to your [AdGuard account](https://adguardaccount.com/account/product/vpn) and switch to the *AdGuard VPN* tab. Under *Devices*, select your router. Copy its username, password, and server address. Paste them into the respective fields in the *VPN connection settings* screen.

1. Once the connection is established, toggle the switch to *Enabled*. The status of this connection will be displayed on the same page.

1. Assign the highest priority to this connection. Drag the created VPN connection profile to the top of the list.
