---
title: Sending feedback
sidebar_position: 5
---

## Report a problem or suggest a feature

If you’ve found a bug in AdGuard VPN for Linux or want to suggest a new feature, here’s how to do it:

- Fill out the [feedback form](https://surveys.adguard.info/en/vpn_linux/form.html).
- [Create a GitHub issue](https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose). But before you do, check the [repository](https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3Aissue) for similar issues.

:::note
If you want to support the implementation of a new feature or bugfix, you can vote for it on GitHub. To vote, just react with some emoji.
:::

## Collect and send logs

1. Enable debug logging by typing:

    `adguardvpn-cli config set-debug-logging on`

1. Reproduce the problem and try to remember the exact time it occurred.

1. Wait a while, then archive the logs in the *Downloads* or *Home* folder by typing:

    For Linux

    `zip -rj logs.zip ${XDG_DATA_HOME:-~/.local/share}/adguardvpn-cli/*.log`

    For Mac

    `zip -rj ~/Downloads/logs.zip ~/Library/"Application Support"/adguardvpn-cli/*.log`

1. Send the log file to <devteam@adguard.com>. Specify the time of the error and attach a link to your GitHub issue or its number (it appears as #number next to the title).
Alternatively, you can upload the log file to Google Drive and share it with <devteam@adguard.com>. Attach the file link to your GitHub issue.

1. Disable debug logging by typing:

    `adguardvpn-cli config set-debug-logging off`
