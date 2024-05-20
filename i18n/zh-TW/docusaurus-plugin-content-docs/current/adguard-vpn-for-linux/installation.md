---
title: 安裝和移除
sidebar_position: 2
---

## 安裝 AdGuard VPN Linux 版

要安裝 AdGuard VPN，請輸入：

正式版

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

測試版

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v
```

如果需要，請輸入您的管理員密碼。

按“y”同意將二進位檔案連結到“usr/local/bin”，然後等待安裝完成。

:::note
您可以使用“gpg”工具驗證簽名以證明它是AdGuard VPN的正式版本。 [在 GitHub 上了解更多資訊](https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases)
:::

## 移除 AdGuard VPN Linux 版

要卸載 AdGuard VPN，請輸入：

正式版

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v -u
```

測試版

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v -u
```

Nightly

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v -u
```

如果需要，請輸入您的管理員密碼。
