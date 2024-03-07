---
title: Compatibilidad con AdGuard Ad Blocker
sidebar_position: 3
---

AdGuard VPN tiene dos modos de funcionamiento: *VPN* y *Integrado*.

El modo VPN está habilitado de forma predeterminada y utiliza el [protocolo AdGuard VPN](/general/adguard-vpn-protocol). Proporciona la mejor combinación de velocidad de conexión y seguridad. Sin embargo, este modo de funcionamiento no permite que AdGuard VPN y el bloqueador de anuncios AdGuard funcionen simultáneamente.

A su vez, en el modo integrado se utiliza el protocolo IPsec, que hace posible que las aplicaciones de AdGuard trabajen juntas. Si ya tiene AdGuard Ad Blocker al instalar AdGuard VPN, este modo se activará automáticamente y le permitirá usar nuestras aplicaciones al mismo tiempo. Si instalaste primero AdGuard VPN y sólo entonces decidiste probar el bloqueador de anuncios AdGuard, sigue estos pasos para usar las dos aplicaciones juntas:

1. Abre AdGuard VPN para iOS y selecciona *Configuración* en la esquina inferior derecha de la pantalla.

2. Ve a *Configuración de la app* y selecciona *Modo de funcionamiento*.

3. Cambia el modo de *VPN* a *Integrado*. ¡Listo!

:::note

En *Modo integrado*, *Exclusiones* y *Servidor DNS* no están disponibles.

:::
