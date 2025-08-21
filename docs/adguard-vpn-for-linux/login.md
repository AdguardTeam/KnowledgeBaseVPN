---
title: Login, connection, and update
sidebar_position: 3
---

## Log in and log out

To log in or create an account, type:

    adguardvpn-cli login

When prompted with the menu:

    b - Open link in browser
    s - Speed up check
    x - Cancel

select `b` to open the authentication page in your default browser. Enter your email. Once logged in, the VPN status in the Terminal will update to *active*.

You can set up your preferred login method (password or one-time code) and two-factor authentication in your [AdGuard account](https://adguardaccount.com/account/settings).

:::note
You can also create an AdGuard account on our [website](https://auth.adguardaccount.com/login.html) and then log in to AdGuard VPN for Linux using your credentials.
:::

To log out of AdGuard VPN, type:

    adguardvpn-cli logout

## Connect to VPN

For quick connection, type:

    adguardvpn-cli connect

AdGuard VPN will connect to the fastest available or the last used location.

To view available locations, type:

    adguardvpn-cli list-locations

To connect to a specific location, type:

    adguardvpn-cli connect -l <location>

Replace `<location>` with the city, country, or ISO code of the location you want to connect to.

If required, enter your admin password.

## Check for updates

To check for updates, type:

    adguardvpn-cli check-update

## Check your subscription info

To check your current subscription information and status, type:

    adguardvpn-cli license

You will see your email and subscription type. Paid users will also see the expiration date of their subscription.
