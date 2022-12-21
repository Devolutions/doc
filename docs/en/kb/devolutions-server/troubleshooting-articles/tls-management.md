---
title: TLS Management
description: TLS can be blocked inside organization and they request Devolutions help regarding the managements of TLS inside DVLS or any other Devolutions product.
keywords:
- TLS
- .net framework
- Windows Operating System
- Nartac
- IIS Crypto
---
# {{ en.TOPICTITLE }} 
TLS can be blocked inside organization and they request Devolutions help regarding the managements of TLS inside DVLS or any other Devolutions product. 
## Solution 
This is all managed by your server/desktop environment, namely your Windows Operating System.  

Since our products are coded with the .net framework, it all relies on system services. For instance, you could decide to only disable certain ciphers on the server, and the client would protest only if it cannot use a cipher from your approved list.  

In your environment, you do have a multi-tiered topology, so for your question about the Database server, its clients are in fact the IIS Servers. Please note you most likely have to disable support of legacy cipher suites (TLS 1.0 for example) to ensure that they aren&apos;t used. The Microsoft documentation is not ideal in this case, here&apos;s one that I like.  

[SQL Server Central Blog Posts](http://www.sqlservercentral.com/blogs/sqltact/2018/01/09/sql-server-on-tls-12-checklist-to-disabling-tls-11-and-10/)  

Note that the Server OS must be fully patched, as well as the .net framework.  

I would strongly recommend that the tool mentioned in the blog be used for these changes, [Nartac Software IIS Crypto](https://www.nartac.com/Products/IISCrypto), hacking the registry should be done with care and sadly that&apos;s what Microsoft is providing as guidance. 

