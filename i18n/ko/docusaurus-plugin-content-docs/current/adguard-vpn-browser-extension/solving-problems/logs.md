---
title: 로그를 수집하고 전송하는 방법
sidebar_position: 1
---

AdGuard VPN이 확장 프로그램 로그를 수집하는 방법은 여러 가지가 있지만, 당신이 어떤 것을 고르든, 동일한 데이터가 수집됩니다. 확장 프로그램에서, 로그는 표준 로그와 디버그 로그로 나누어지지 않습니다. 더불어, 문제가 발생하여 당신이 한 가지 또는 다른 지시를 따를 수 없을 경우를 위하여 다양한 로그 수집 옵션이 제공됩니다.

## *버그 신고* 섹션을 통해 로그를 수집하고 전송하기

1. AdGuard VPN 브라우저 확장 프로그램을 열고, 가능하다면, 에러를 발생시킨 작업을 반복합니다. 이 에러가 발생한 정확한 시간을 기록해 주세요.
1. 햄버거 메뉴 아이콘(☰) 을 선택하여 *설정*을 열고, *고객 지원* → *버그 신고*로 이동합니다.
1. 열린 양식에 자동으로 입력된 이메일을 남겨두거나 다른 것을 입력하고, 발생한 시간을 포함해 발견한 오류를 설명합니다. 문제를 재현할 수 없는 경우, 마지막으로 발생한 시간을 최대한 정확하게 명시합니다.
1. *이 메시지에 진단 보고서를 첨부합니다* 옆에 체크 표시가 있는지 확인하고, *제출*버튼을 클릭합니다. 이 방법을 통해, 버그 리포트와 로그를 함께 전송할 수 있습니다.

## *로그 내보내기* 버튼을 통해 로그를 수집하고 전송하기

1. AdGuard VPN 브라우저 확장 프로그램을 열고, 가능하다면, 에러를 발생시킨 작업을 반복합니다. 이 에러가 발생한 정확한 시간을 기록해 주세요.
1. AdGuard VPN 브라우저 확장 프로그램 아이콘을 우클릭합니다.
1. 열린 메뉴에서 *로그 내보내기*를 클릭합니다.
1. 이를 통해, 로그 파일은 `txt` 포맷으로 디바이스에 저장됩니다.

이제 로그를 수집했으므로, 개발 팀에 이를 전달해야 합니다. 절차는 다음과 같습니다.

1. GitHub에서 버그를 제보합니다. GitHub에서 issue를 생성하는 자세한 지침은 이 문서에서 확인할 수 있습니다.
1. 로그와 재현한 시간이 포함된 아카이브를 `devteam@adguard.com`에 보내고, GitHub issue에 링크를 첨부합니다. 또한, 구글 드라이브에 로그와 재현한 시간이 포함된 아카이브를 추가하고 `devteam@adguard.com`에게 공유하며, GitHub issue에 구글 드라이브 링크를 첨부하는 것도 가능합니다.

## 브라우저 개발자 도구를 통해 로그를 수집하고 전송하기

### 크롬

1. AdGuard VPN 브라우저 확장 프로그램을 열고, 가능하다면, 에러를 발생시킨 작업을 반복합니다. 이 에러가 발생한 정확한 시간을 기록해 주세요.
1. `chrome://extensions` 으로 이동합니다.
1. *개발자 모드*를 켜세요.

    ![개발자 모드 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. `background.html`을 클릭합니다.

    ![배경 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. *Console 탭*을 엽니다.

    ![콘솔 탭 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. 컨텍스트 메뉴를 열어 *Save as...*를 클릭합니다.

    ![다른 이름으로 저장 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

이제 로그를 수집했으므로, 개발팀에 이를 전달해야 합니다. 절차는 다음과 같습니다.

1. GitHub에서 버그를 제보합니다. GitHub에서 issue를 생성하는 자세한 지침은 이 문서에서 확인할 수 있습니다.
1. 로그와 재현한 시간이 포함된 아카이브를 `devteam@adguard.com`에 보내고, GitHub issue에 링크를 첨부합니다. 또한, 구글 드라이브에 로그와 재현한 시간이 포함된 아카이브를 추가하고 `devteam@adguard.com`에게 공유하며, GitHub issue에 구글 드라이브 링크를 첨부하는 것도 가능합니다.

### 파이어폭스

1. AdGuard VPN 브라우저 확장 프로그램을 열고, 가능하다면, 에러를 발생시킨 작업을 반복합니다. 이 에러가 발생한 정확한 시간을 기록해 주세요.
1. `about:addons`으로 이동합니다.
1. *디버그 애드온*을 클릭합니다.

    ![디버그 애드온 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. *검사*를 클릭합니다.

    ![검사 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. *콘솔* 탭으로 이동합니다.

    ![콘솔 창 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. *모든 메세지를 파일에 저장*을 클릭합니다.

    ![저장 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

이제 로그를 수집했으므로, 개발팀에 이를 전달해야 합니다. 절차는 다음과 같습니다.

1. GitHub에서 버그를 제보합니다. GitHub에서 issue를 생성하는 자세한 지침은 이 문서에서 확인할 수 있습니다.
1. 로그와 재현한 시간이 포함된 아카이브를 `devteam@adguard.com`에 보내고, GitHub issue에 링크를 첨부합니다. 또한, 구글 드라이브에 로그와 재현한 시간이 포함된 아카이브를 추가하고 `devteam@adguard.com`에게 공유하며, GitHub issue에 구글 드라이브 링크를 첨부하는 것도 가능합니다.
