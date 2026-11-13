---
title: How to collect and send logs
sidebar_position: 2
---

1. Enable debug logging by typing:

    `adguardvpn-cli config set-debug-logging on`

1. Reproduce the problem and try to remember the exact time it occurred.

1. Wait a while, then archive the logs in the *Downloads* or *Home* folder by typing:

    `adguardvpn-cli export-logs`

    The logs will be downloaded by default to the application folder, the path to the logs will be written in the console.

1. Send the log file to [devteam@adguard.com](mailto:devteam@adguard.com). Specify the time of the error and attach a link to your GitHub issue or its number (it appears as #number next to the title). Alternatively, you can upload the log file to Google Drive and share it with [devteam@adguard.com](mailto:devteam@adguard.com). Attach the file link to your GitHub issue.

1. Disable debug logging by typing:

    `adguardvpn-cli config set-debug-logging off`
