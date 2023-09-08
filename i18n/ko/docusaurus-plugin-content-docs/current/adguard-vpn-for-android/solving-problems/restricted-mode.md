---
title: '제한 모드 상태에서 프로필 사용으로 인한 문제'
sidebar_position: 4
---

Android 7 이상 운영 체제를 실행하는 휴대폰 또는 태블릿 사용자는 **제한 모드 프로필** 사용 시 문제를 겪을 수 있습니다. 제한 모드 프로파일을 사용하는 경우 VPN을 사용하는 다른 응용 프로그램과 마찬가지로 **AdGuard VPN**의 VPN 트래픽 필터링 선택에 제한이 발생합니다. 또한 **듀얼 앱/듀얼 메신저 프로필**을 사용할 때 이 문제가 발생할 수 있습니다. 해당 문제를 해결하는 방법은 다음과 같습니다.

## 솔루션

문제를 해결하는 두 가지 방법이 있습니다.

### 옵션 1: ADB를 사용하여 AdGuard VPN에 권한 부여

1. **개발자 모드** 및 **USB 디버깅**을 활성화합니다.

    - 휴대폰에서 **설정**을 엽니다.
    - **시스템** 섹션(설정 메뉴의 마지막 항목)으로 이동합니다. 이 섹션에서 **휴대전화 정보**를 찾습니다.
    - **빌드 번호** 줄을 7번 클릭합니다. 그 후에 **개발자 모드를 켰습니다**라는 알림을 받게 됩니다. 필요한 경우 기기의 잠금 해제 코드를 입력하세요.
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    > If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).

1. ADB를 [설치하고 구성합니다.](https://www.xda-developers.com/install-adb-windows-macos-linux/)

    > Windows 플랫폼을 사용하는 경우, adb를 설치하고 구성합니다. **삼성 기기**를 사용하는 경우, [이 드라이버](https://developer.samsung.com/mobile/android-usb-driver.html)를 설치해야 합니다.

1. **USB 케이블**을 사용하여 **ADB**를 설치한 컴퓨터 또는 노트북에 기기를 연결합니다.

1. Open **the command line** on your PC:

    - **Windows**를 사용하는 경우 **cmd.exe**
    - **macOS**를 사용하는 경우 **터미널**

1. `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` 명령을 입력하고 **엔터**를 누릅니다.

### 옵션 2: *제한된 사용자 계정* 삭제

Android 기기에서 사용자 계정을 관리하는 방법은 [여기](https://support.google.com/a/answer/6223444?hl=en)에서 확인할 수 있습니다.

> Please note that in some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. Read below how to fix the issue in these cases.

### LG 및 삼성 기기

**LG** 또는 **삼성** 휴대폰 소유자도 비슷한 문제를 맞닥트릴 수 있습니다. 이 경우 제한된 프로필을 자동으로 생성하는 **듀얼 앱/듀얼 메신저** 기능을 사용하기 때문에 해당 문제가 발생합니다. 문제를 해결하려면 이 기능을 비활성화해야 합니다.

#### 삼성

- **설정**을 엽니다.
- **고급**을 누릅니다.
- 아래로 스크롤해 **듀얼 메신저**를 누릅니다.
- 모든 앱을 **선택 취소**합니다.
- 5분 동안 기기를 잠금 상태로 유지합니다.
- 화면 잠금을 해제하고 VPN 프로필을 다시 생성합니다.

#### LG

- **설정**을 엽니다.
- **일반** 탭을 선택합니다.
- 아래로 스크롤한 다음 **듀얼 앱**를 누릅니다.
- 목록에서 모든 응용 프로그램을 제거합니다.
- 기기를 재부팅합니다.
