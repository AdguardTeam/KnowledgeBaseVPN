---
title: How to collect and send logs
sidebar_position: 1
---

There are several ways for collecting AdGuard VPN Browser Extension logs, but whichever one you choose, the same data will be collected. In the extension, logs are not divided into standard and debug ones. And different options for collecting logs are provided for those cases when a problem you encounter prevents you from using one or another instruction.

## Collecting and sending logs via the *Report a bug* section

1.  Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
2.  Open *Settings* by clicking the hamburger menu icon (☰) → *Support* → *Report a bug*.
3.  In the opened form, leave an automatically inserted email address or enter another one and describe the error found, including the time when this error occurred. If you can't reproduce the problem, specify as accurately as possible when it last occurred.
4.  Make sure that there is a check mark next to *Include the diagnostic report in the message*, and tap *Submit*. This way, you will send logs along with the bug report.  

## Collecting and sending logs via the *Export logs* button

1.  Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred. 
2.  Right-click the AdGuard VPN Browser extension icon. 
3.  In the opened menu click *Export Logs*.
4.  As a result, the logs file will be saved to your device in `txt` format.

Now that you have collected the logs, you need to hand them over to our development team. To do this: 

1.  Report a bug on GitHub. Detailed instructions on creating an issue on GitHub can be found in [this article]().  
2.  Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your issue on GitHub or add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com`. Attach the Google Drive link to your issue on GitHub.

## Collecting and sending logs via browser developer's tools

### Chrome

1.  Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred. 
2.  Go to `chrome://extensions`
3.  Turn on *developer mode*

    ![The developer mode *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

4.  Click `background.html`

    ![Background *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

5.  Open the *Console tab*

    ![The Console tab *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6.  Open the context menu and click *Save as…*

    ![Save as *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Now that you have collected the logs, you need to hand them over to our development team. To do this: 

1.  Report a bug on GitHub. Detailed instructions on creating an issue on GitHub can be found in [this article](). 
2.  Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your issue on GitHub or add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com`. Attach the Google Drive link to your issue on GitHub.

### Firefox

1.  Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred. 
2.  Go to `about:addons`
3.  Click *Debug Add-ons*

    ![Debug Add-ons *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4.  Click *Inspect*

    ![Inspect *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5.  Go to the *Console* tab

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6.  Click *Save all Messages to file*

    ![Save *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Now that you have collected the logs, you need to hand them over to our development team. To do this: 

1.  Report a bug on GitHub. Detailed instructions on creating an issue on GitHub can be found in [this article](). 
2.  Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your issue on GitHub or add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com`. Attach the Google Drive link to your issue on GitHub.