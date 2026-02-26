---
title: Installation on Keenetic routers
sidebar_position: 3
---

You can configure AdGuard VPN on Keenetic routers starting from KeeneticOS 3.5. Follow the steps below:

1. Install the IKEv2/IPsec VPN client system component. Go to the manufacturerʼs [web interface](https://help.keenetic.com/hc/en-us/articles/360001923020-Web-interface) → _General system settings_ → _KeeneticOS update and component options_ and click _Component options_.

   :::note

   After installing the IKEv2/IPsec VPN client component, give the router a few seconds to apply the changes. If the IKEv2 option does not appear, refresh the web interface or log in again.

   :::

2. Go to _Other connections_ → _VPN connections_ and click _Create connection_.

3. In the _VPN connection settings_ screen, enable _Use this connection to access the Internet_.

4. Enter any name to identify the connection in the _Connection name_ field. In the _Type (protocol)_ field, select `IKEv2`. In _Authentication_, choose _EAP (Username/Password)_.

5. Go to your [AdGuard account](https://adguardaccount.com/account/product/vpn) and switch to the _AdGuard VPN_ tab. Under _Devices_, select your router. Copy its username, password, and server address. Paste them into the respective fields in the Keenetik _VPN connection settings_ screen.

6. Once the connection is established, toggle the switch to _Enabled_. The status of this connection will be displayed on the same page.

7. Assign the highest priority to this connection. Drag the created VPN connection profile to the top of the list.
