---
title: KeePass troubleshooting
---
## Problem 1

You are prompted twice to open KeePass when connecting to a session.

### Solution

In KeePass, click on ***Tools - Options***, go to the ***Advanced*** tab and uncheck ***Remember*** and ***Automatically open last used database on startup***.

## Problem 2

The following plugin is incompatible with the current KeePass version.

### Solution

Make sure that the installation of KeePass was successful.  

Delete all the RemoteDesktopManager.Connector.dll and RemoteDesktopManagerPlugin.dll files that you may have in the installation folder of KeePass.  

{% snippet icon.badgeInfo %}
We have since then modified how Plug In functions, and these files should no longer exist.
{% endsnippet %}

## Problem 3

KeePass ***Direct*** mode fails.

### Solution

For this to work, you will need to have your ***Key Derivation function*** set to one of the following options depending on your ***Encryption*** You can locate this in your KeePass ***Database settings*** under the ***Security*** section.  

* Encryption CHACHA20
    * Argon2d
    * AES-KDF
* Encryption AES/Rijndael
    * Argon2d  
    
{% snippet icon.badgeInfo %}
If you are using a ***Keyfile*** it needs to be in v1.
{% endsnippet %}
