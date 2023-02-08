---
title: 'What a DNS leak is'
sidebar_position: 9
---

Once you install a VPN, you want to be sure that there won't be any leaks that will lead to your de-anonymization. AdGuard VPN reliably protects your traffic and your data from prying eyes. Nevertheless, in some cases you may suspect the presence of DNS leaks in our VPN service. We'll explain where these concerns come from and why they are unfounded.

## What are DNS leaks?

When you use a VPN, a connection to a DNS server may travel outside of the encrypted VPN tunnel and your traffic may become visible to the ISP.  

In other words, every time you open a website, your browser sends a request to the ISP's DNS server and in return receives the IP address of the requested website. In this way, your ISP sees all your online activity and can track you.

## How to detect DNS leaks

There are all sorts of anonymity check services for detecting DNS leaks, such as `whoer.net`. It should be understood that these websites themselves are not perfect and their algorithms are not clear, as opposed to their intentions to intimidate users with imaginary leaks and potentially sell some service.

Some security scanning websites consider the coincidence of the user's IP address and the DNS server's IP address to be a "good" result, indicating that there are no leaks. In reality, such a match may indicate the use of a VPN. When VPN is disabled and the requests go to your ISP's DNS server, the IP address of the DNS server and your own one do not coincide.

## Why there are no DNS leaks in AdGuard VPN 

If you enable AdGuard VPN on your device and run a check on any of the scanner websites, it finds that DNS queries go to the [AdGuard DNS](https://adguard-dns.io/welcome.html) servers. However, this cannot be considered a leak.

Using a non-filtering AdGuard DNS server is set by default in AdGuard VPN. This ensures that your queries do not go to the DNS servers of your ISP, which means that you stay private and anonymous online.

What's more, AdGuard DNS is a very popular DNS service, used by over 50 million people. What does this mean for you? Imagine the following situation: the usual VPN service uses the DNS server which is located at the same IP address as the VPN server. The number of its users hardly exceeds 1,000.

And in the case of AdGuard DNS you will "merge" with 50 million users so nobody will be able to track you by the fact of using the DNS server.

## How to set up a custom DNS server in AdGuard VPN

There are many popular public DNS servers from [well-known DNS providers](https://adguard-dns.io/kb/general/dns-providers). Some of them can only perform their direct duties – giving the IP addresses of the requested domains, and some can do more. 

For example, the filtering AdGuard DNS removes ads and protects your device from being tracked, while AdGuard DNS Family Protection combines AdGuard DNS features with Safe search and Parental control.

You can select any DNS server and configure it in AdGuard VPN:

* in AdGuard VPN for Windows: *Settings* → *App settings* → *DNS servers*.
* in AdGuard VPN for Mac: *Settings* → *App settings* → *DNS servers*.
* in AdGuard VPN for Android: *Settings* (gear icon) → *App settings* → *DNS server*
* in AdGuard VPN for iOS: *Settings* (gear icon) → *App settings* → *DNS server
* in AdGuard VPN Browser extension: the burger menu → *Settings* → *DNS-server
