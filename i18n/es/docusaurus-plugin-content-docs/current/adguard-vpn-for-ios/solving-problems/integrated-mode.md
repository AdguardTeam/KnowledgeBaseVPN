---
title: Compatibilidad con AdGuard Ad Blocker
sidebar_position: 3
---

AdGuard VPN tiene dos modos de funcionamiento: el general y el integrado. El modo general está habilitado de forma predeterminada y utiliza [el protocolo AdGuard VPN](/general/adguard-vpn-protocol.mdx). Proporciona la mejor combinación de velocidad de conexión y seguridad.

Sin embargo, este modo de funcionamiento no permite que AdGuard VPN y AdGuard Ad Blocker funcionen simultáneamente.

A su vez, en el modo integrado se utiliza el protocolo IPsec, que hace posible que las aplicaciones de AdGuard trabajen juntas. Si ya tiene AdGuard Ad Blocker al instalar AdGuard VPN, este modo se activará automáticamente y le permitirá usar nuestras aplicaciones al mismo tiempo. Si instalaste primero AdGuard VPN y sólo entonces decidiste probar AdGuard Ad Blocker, sigue estos pasos para usar las dos aplicaciones juntas:

1. Abra AdGuard VPN para iOS y seleccione "Configuración" en la esquina inferior derecha de la pantalla.

2. Vaya a "Configuración de la aplicación" y seleccione "Modo de funcionamiento".

3. Cambie el modo de *General* a *Integrado*. ¡Listo!

> Tenga en cuenta que en el modo **Integrado** no se puede utilizar la función de Exclusiones ni la de Servidor DNS.