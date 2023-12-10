---
title: 'AdGuard VPN에서 사용되는 암호화 유형'
sidebar_position: 7
---

## 소개

암호화는 Virtual Private Network(VPN)라는 단어에 '개인'(Private)이라는 단어가 존재하는 이유입니다. A VPN creates a tunnel between your device and a VPN server, passing through which your data is encrypted and then securely transmitted to the open Internet. 암호화는 데이터를 가로채는 사람이 해독할 수 없는 형태로 변환하는 것으로, 암호화는 VPN 서비스에 필수적입니다.

The AdGuard VPN protocol uses the most secure and fast encryption algorithm to date — AES-256. AES-256 알고리즘이 무엇인지, 어떤 장점이 있는지 알아보겠습니다.

## AES의 역사

AES(Advanced Encryption Standard) 암호화는 20세기 후반 미국 정부의 요청으로 개발되었습니다. 기존 DES(Data Encryption Standard)는 구식이 되었고, 더 안전한 새 암호화 알고리즘이 필요했습니다.

정부가 발표한 공개 경쟁에서 Rijndael 암호가 우승을 차지했습니다. 이 암호는 DES와 매우 유사하지만 훨씬 더 복잡합니다. 2002년에 AES로 이름이 바뀌었고 미국 국립 표준 기술 연구소에 의해 공개되었습니다.

오늘날 AES는 암호화의 업계 표준입니다. 오픈 소스 구조로 인해 AES는 NSA 및 정부 기관은 물론 민간, 상업 및 비영리 조직에서 사용됩니다.

## AES-256 작동 방식

AES는 대칭 키를 사용하는 블록 암호입니다. 대칭 키 암호로서, 단 하나의 비밀 키만 있으면 데이터를 암호화하고 해독할 수 있습니다. 블록 암호로서 AES는 평문이라고 하는 암호화되지 않은 정보를 블록으로 나누고, 원래의 암호 키를 여러 개로 분할하여 각 블록에 적용합니다. 결국 암호문, 즉 암호화된 텍스트를 얻게 됩니다.

128, 192 및 256비트의 다양한 키 크기가 있으며 블록도 비트 단위로 측정됩니다. 암호화 프로세스 중에 암호기는 보안 키에 따라 각 정보를 다른 정보로 바꿉니다. 예를 들어 AES-256은 14라운드 동안 256개의 일반 텍스트 블록에서 256개의 암호문 블록을 생성합니다.

라운드는 데이터를 블록으로 분할, 바이트 교환, 행 이동 및 열 재정렬과 같은 여러 단계로 구성됩니다. The result is a completely random set of characters that will only make sense when using the right encryption key.

AES-256 is the strongest level of encryption: to break this cipher, 2256 discrete combinations, each consisting of 78 digits, would have to be tried.
