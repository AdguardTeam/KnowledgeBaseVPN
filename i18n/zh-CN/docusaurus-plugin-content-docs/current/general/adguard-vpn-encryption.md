---
title: 'AdGuard VPN 使用的加密方式'
sidebar_position: 7
---

## 前言

加密是“虚拟私人网络“中存在"私人"一词的原因。 A VPN creates a tunnel between your device and a VPN server, passing through which your data is encrypted and then securely transmitted to the open Internet. 加密过程，即将数据变成任何人都无法读取的乱码，对于任何 VPN 服务都是必不可少的。

The AdGuard VPN protocol uses the most secure and fast encryption algorithm to date — AES-256. 了解什么是 AES-256，以及它为何如此出色。

## AES 历史发展

AES 加密（英语：Advanced Encryption Standard，中文：高级加密标准），本技术于 20 世纪末在美国开发。 政府要求：现有的 Data Encryption Standard (英文缩写：DES，中文：数据加密标准) 已过时，需要一种新的、更安全的加密算法。

在政府宣布的公开竞赛中赢得了 Rijndael 密码 —— 与 DES 非常相似，但更复杂。 2002 年，更名为 AES 并由美国出版 美国国家标准与技术研究院。

今天，AES 是加密的标准。 由于其开放性，它被国家安全局和政府机构，以及私人、商业和非营利组织所使用。

## AES-256 工作原理

AES 是一种带有对称密钥的分组密码。 作为一种对称密钥密码，它只需要一个密钥来加密和解密数据。 作为分组密码，AES 将未加密的信息（明文）分成多个块，将原始密钥拆分为多个密钥并将它们应用于每个块。 最后，得到一个密码文本，即一个加密文本。

有不同的密钥大小，包括 128、192 和 256 位，并且信息块也以位为单位。 在加密过程中，加密器根据安全密钥将每条信息替换为另一条信息。 因此，例如，AES-256 在 14 轮中从 256 个明文块创建 256 个密文块。

轮回由几个步骤组成：将数据分割成块，交换字节，移动行和重新排列列。 The result is a completely random set of characters that will only make sense when using the right encryption key.

AES-256 is the strongest level of encryption: to break this cipher, 2256 discrete combinations, each consisting of 78 digits, would have to be tried.
