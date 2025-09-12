---
title: Installation on Keenetic routers
sidebar_position: 3
---

You can configure AdGuard VPN on Keenetic routers starting from KeeneticOS 3.5. Follow the steps below:

1. Install the IKEv2/IPsec VPN client system component. Go to the manufacturer's [web interface](https://help.keenetic.com/hc/en-us/articles/360001923020-Web-interface) → *General system settings* → *KeeneticOS update and component options* and click *Component options*.

:::note

After installing the IKEv2/IPsec VPN client component, give the router a few seconds to apply the changes. If the IKEv2 option does not appear, refresh the web interface or log in again.

:::

1. Go to *Other connections* → *VPN connections* and click *Create connection*.

1. In the *VPN connection settings* screen, enable *Use this connection to access the Internet*.

1. Enter any name to identify the connection in the *Connection name* field. In the *Type (protocol)* field, select `IKEv2`. In *Authentication*, choose *EAP (Username/Password)*.

1. Go to your [AdGuard account](https://adguardaccount.com/account/product/vpn) and switch to the *AdGuard VPN* tab. Under *Devices*, select your router. Copy its username, password, and server address. Paste them into the respective fields in the Keenetik *VPN connection settings* screen.

1. Once the connection is established, toggle the switch to *Enabled*. The status of this connection will be displayed on the same page.

1. Assign the highest priority to this connection. Drag the created VPN connection profile to the top of the list.
