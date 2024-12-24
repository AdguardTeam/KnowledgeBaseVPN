---
title: 로그 수집 및 전송 방법
sidebar position: 1
---

If you encounter any problems while using AdGuard VPN for Windows, you can inform us about it. We would appreciate it if you also send application logs, as they help us resolve issues much quicker.

## Collecting logs

### Standard logs

By default, AdGuard VPN for Windows uses the standard logging level, which is the basic collection of data about running processes of the app. Before sending the logs, please open AdGuard VPN for Windows and, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.

### Extended logs

보통 일반 로깅 수준을 사용하면 가능한 오류를 추적할 수 있습니다. 기기 및 연결에 대한 자세한 기술 정보가 필요한 경우 지원 팀에서 고급화된 로깅 수준을 활성화하도록 요청할 것입니다. 이러한 로그를 보내려면 다음 단계를 따르십시오.

1. Open AdGuard VPN for Windows and select **Settings** in the menu above → **App settings** → **Advanced settings** → **Logging level**.

1. **로깅 수준** 섹션에서 **모두 기록**선택합니다.

    ![Logging level *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. 오류가 발생한 작업을 반복하고 오류가 발생한 시간을 기록합니다.

1. 로깅 수준을 다시 **기본 수준의 기록**으로 전환합니다.

### Trace logs

Sometimes our support team might ask you to send them trace logs. To do this, you need to follow these steps:

1. Right-click the AdGuard VPN icon in the tray menu and choose **Exit AdGuard VPN**.

    ![Exit *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/exit.png)

    If you see the warning message, agree to stop the service.

    ![Attention *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/attention.png)

1. Open the console (type `cmd` in the start panel).

1. Run the application with the command `C:\"Program Files (x86)"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 64-bit Windows, and `C:\"Program Files"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 32-bit.

1. Reproduce the issue. We strongly recommend that you note the exact time when you reproduce the problem: this will help our support team to find relevant log entries and resolve the problem faster.

1. Export the recorded logs: **Support** → **Export logs and system info**.

Don’t worry if your log file is large. We need to know as many details as possible in order to fix your problem.

## Sending logs

To send logs to our support team, please follow the next steps:

1. Click **Support** in the menu above → **Report a bug**.

    ![Report a bug *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/support_report.jpeg)

1. In the form that opens, enter your email address and describe the error you found, including the time it occurred. If you can’t reproduce the problem, be as specific as possible about when it last occurred.

    ![Report *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/report_bug.png)

1. **자세한 시스템 정보 보내기** 옆에 확인 표시가 있습니다. 즉, 보고서를 보낼 때 로그도 함께 보냅니다.

> 다른 방법으로 로그를 보내는 것이 편하다면 직접 로그를 내보내도 됩니다. 로그를 직접 내보내려면 **고객 지원** → **로그 및 시스템 정보** 내보내기로 이동합니다.

![Export *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**Note**: if you encounter any problems while trying to export logs, there is an alternative way. Please follow these steps:

1. Open the Explorer app

1. Paste `%programdata%/adguardvpn` in the search box

1. Find the folder called **Logs**

1. Archive the folder

1. Send it to our support team
