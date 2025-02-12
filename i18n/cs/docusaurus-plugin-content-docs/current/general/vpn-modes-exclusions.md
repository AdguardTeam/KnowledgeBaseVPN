---
title: Režimy VPN a seznamy výjimek
sidebar_position: 11
---

V této části je vysvětleno, jak používat výjikky webových stránek a aplikací v různých režimech VPN.

## Režimy VPN

AdGuard VPN má dva režimy:

1. Ve výchozím nastavení je AdGuard VPN aktivní pro všechny weby a aplikace, kromě těch, které jsou přidány do seznamů výjimek webových stránek a aplikací.

2. AdGuard VPN je aktivní _selektivně_: pouze pro webové stránky a aplikace ze seznamů výjimek.

:::note

Pro aplikace a webové stránky můžete nastavit různé režimy VPN. Můžete například nastavit, aby byla AdGuard VPN aktivní pro všechny aplikace kromě těch, které byly přidány do seznamu výjimek aplikace, a aktivní pouze pro webové stránky ze seznamu výjimek webových stránek.

:::

## Seznamy výjimek

Seznam výjimek je seznam aplikací nebo webových stránek, které AdGuard VPN vylučuje nebo zahrnuje do svého tunelu na základě aktuálního režimu VPN.

:::note

Každý režim VPN má dva seznamy výjimek: jeden pro aplikace a druhý pro webové stránky. Celkem existují čtyři seznamy výjimek:

- Seznam výjimek pro aplikace [VPN aktivní všude]
- Seznam výjimek pro aplikace [VPN aktivní selektivně]
- Seznam výjimek pro webové stránky [VPN aktivní všude]
- Seznam výjimek pro webové stránky [VPN aktivní selektivně]

:::

## Kombinace režimů VPN a seznamů výjimek

Můžete nastavit čtyři kombinace aktivit VPN.

### Nastavení 1

AdGuard VPN je aktivní všude kromě aplikací a webových stránek ze seznamů výjimek aplikací a webových stránek.

Režim VPN:

- Aktivní pro všechny aplikace mimo aplikace ve výjimkách
- Aktivní pro všechny webové stránky mimo webové stránky ve výjimkách

Použité seznamy výjimek:

- Seznam výjimek pro aplikace [VPN aktivní všude]
- Seznam výjimek pro webové stránky [VPN aktivní všude]

Jedná se o výchozí režim VPN s maximální ochranou VPN. Pokud chcete webovou stránku nebo aplikaci z AdGuard VPN vyloučit, přidejte je do příslušného seznamu výjimek.

**Prázdné seznamy výjimek:** Seznamy výjimek aplikací a webových stránek mohou být prázdné. Pokud v nich není nic uvedeno, bude AdGuard VPN aktivní pro všechny aplikace a webové stránky.

**Proč používat tento režim:** Chcete mít v zařízení komplexní ochranu VPN pro všechno. Pokud má určitá aplikace nebo webová stránka fungovat mimo VPN, přidejte ji do výjimek.

:::caution

Pokud přidáte aplikaci prohlížeče do seznamu výjimek, nebude AdGuard VPN aktivní pro všechny webové stránky otevřené v tomto prohlížeči.

:::

### Nastavení 2

AdGuard VPN je aktivní pouze pro aplikace ze seznamu výjimek a pro všechny webové stránky kromě těch ze seznamu výjimek webových stránek.

Režim VPN:

- Aktivní pouze pro aplikace z výjimek
- Aktivní pro všechny webové stránky mimo webové stránky ve výjimkách

Použité seznamy výjimek:

- Seznam výjimek pro aplikace [VPN aktivní selektivně]
- Seznam výjimek pro webové stránky [VPN aktivní všude]

Chcete-li přepnout do tohoto režimu, ponechte AdGuard VPN aktivní pro všechny webové stránky a nastavte ji tak, aby byla zapnutá pouze pro aplikace ze seznamu výjimek. Tento režim poskytuje menší pokrytí ochrany VPN, protože je třeba přidávat aplikace do seznamu výjimek, abyste zajistili jejich ochranu.

Tento režim vyžaduje, abyste věnovali pozornost nastavení seznamu výjimek pro aplikace.

**Prázdné seznamy výjimek:** Pokud je **seznam výjimek pro aplikace** **prázdný**, AdGuard VPN bude **neaktivní pro webové stránky i aplikace**.

**Proč používat tento režim:** Potřebujete VPN pro většinu webových stránek, ale pouze pro několik aplikací.

:::caution

Pokud aplikaci prohlížeče nepřidáte do seznamu výjimek, bude AdGuard VPN v tomto prohlížeči neaktivní pro všechny webové stránky, i pro ty ze seznamu výjimek pro webové stránky.

:::

### Nastavení 3

AdGuard VPN je aktivní pro všechny aplikace kromě těch ze seznamu výjimek a pouze pro webové stránky ze seznamu výjimek pro webové stránky.

Režim VPN:

- Aktivní pro všechny aplikace mimo aplikace ve výjimkách
- Aktivní pouze pro webové stránky mimo webové stránky ve výjimkách

Použité seznamy výjimek:

- Seznam výjimek pro aplikace [VPN aktivní všude]
- Seznam výjimek pro webové stránky [VPN aktivní selektivně]

Chcete-li přepnout do tohoto režimu, ponechte AdGuard VPN aktivní pro všechny aplikace a nastavte ji tak, aby byla zapnutá pouze pro webové stránky ze seznamu výjimek. Chcete-li aplikaci používat, přidejte její příslušnou doménu do seznamu výjimek pro webové stránky.

Tento režim poskytuje ještě menší ochranu VPN, protože je třeba přidat webové stránky do seznamu výjimek, aby byla zajištěna jejich ochrana.

Tento režim vyžaduje, abyste věnovali pozornost nastavení seznamu výjimek pro webové stránky.

**Prázdné seznamy výjimek:** Pokud je **seznam výjimek pro webové stránky** **prázdný**, AdGuard VPN bude **neaktivní pro webové stránky i aplikace**.

**Proč používat tento režim:** Potřebujete VPN pro většinu aplikací, ale pouze pro několik webových stránek.

:::caution

Pro všechny aplikace: nezapomeňte přidat jejich příslušné domény do seznamu výjimek pro webové stránky. Například v případě Facebooku přidejte do seznamu výjimek pro webové stránky adresu `facebook.com`.

:::

### Nastavení 4

AdGuard VPN je aktivní pouze pro aplikace a webové stránky ze seznamu výjimek pro aplikace a webové stránky.

Režim VPN:

- Aktivní pouze pro aplikace z výjimek
- Aktivní pouze pro webové stránky mimo webové stránky ve výjimkách

Použité seznamy výjimek:

- Seznam výjimek pro aplikace [VPN aktivní selektivně]
- Seznam výjimek pro webové stránky [VPN aktivní selektivně]

Do tohoto režimu je třeba přepnout aplikace i webové stránky. Tento režim poskytuje nejmenší pokrytí ochrany VPN. Tento režim vyžaduje, abyste věnovali maximální pozornost nastavení seznamů výjimek pro aplikace a webové stránky.

**Prázdné seznamy výjimek:** Pokud je **kterýkoli** ze seznamů výjimek **prázdný**, AdGuard VPN bude **neaktivní pro webové stránky i aplikace**.

**Proč používat tento režim:** VPN potřebujete pouze pro určité webové stránky a aplikace.

:::caution

1. Pokud aplikaci prohlížeče nepřidáte do seznamu výjimek, bude AdGuard VPN v tomto prohlížeči neaktivní pro všechny webové stránky, i pro ty ze seznamu výjimek pro webové stránky.

2. Pro aplikace ze seznamu výjimek: nezapomeňte přidat jejich příslušné domény do seznamu výjimek pro webové stránky. Pokud například přidáte _Facebook_ do seznamu výjimek pro aplikace, přidejte `facebook.com` do seznamu výjimek pro webové stránky.

:::
