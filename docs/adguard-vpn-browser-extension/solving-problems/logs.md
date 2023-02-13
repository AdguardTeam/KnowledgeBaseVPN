---
title: How to collect and send logs
sidebar_position: 1
---

If you encounter a problem when using AdGuard VPN Browser Extension, you can inform us about it by sending application logs.

## Collecting and sending standard logs

By default, AdGuard VPN Browser Extension uses the Default logging level, that is, the basic collection of data about running processes of the app. To send these logs, follow the next steps:

1. Open AdGuard VPN Browser Extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.

2. Open *Settings* by clicking the hamburger menu icon (☰) → *Support* → *Report a bug*.

3. In the opened form, enter your email address for feedback and describe the error found, including the time when this error occurred. If you can't reproduce the problem, specify as accurately as possible when it last occurred.

4. There is a check mark next to *Include the diagnostic report in the message*, which means that when you send a report, you also send logs.

## Collecting and sending extended logs

In most cases, the Default logging level is sufficient to trace down possible bugs. But there are cases when more detailed technical information about the device and connections is required, and then our support team will ask you to collect Debug logs. To do this, follow these steps:

### Chrome

1.  Go to `chrome://extensions`
2.  Turn on *developer mode*

    ![The developer mode *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

3.  Click `background.html`

    ![Background *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

4.  Open the *Console tab*

    ![The Console tab *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

5.  Open the context menu and click *Save as…*

    ![Save as *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Send the file with logs to `devteam@adguard.com` with the time of playback. Another option is to add the file to your Google Drive and give an access to `devteam@adguard.com`. 

### Firefox

1.  Go to `about:addons`
2.  Click *Debug Add-ons*

    ![Debug Add-ons *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

3.  Click *Inspect*

    ![Inspect *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

4.  Go to the *Console* tab

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

5.  Click *Save all Messages to file*

    ![Save *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Send the file with logs to `devteam@adguard.com` with the time of playback. Another option is to add the file to your Google Drive and give an access to `devteam@adguard.com`. 