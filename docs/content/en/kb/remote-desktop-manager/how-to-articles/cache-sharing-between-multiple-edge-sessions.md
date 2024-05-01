---
eleventyComputed:
  title: Cache sharing between multiple Edge sessions
  description: Sharing a cache between multiple website sessions with Edge as the web browser in {{ en.RDM }} is affected by five different settings.
---
The Edge cache is controlled by a few settings. This is a limitation of the EdgeView2 control, which requires a unique folder as opposed to defined settings. Trying to share caches with conflicting settings will prevent the EdgeView2 control from loading, thus leading to a blank screen.

Here are the settings that affect sharing a cache between multiple Website sessions using Microsoft Edge:

## In {{ en.RDM }} Settings

1. Language code (in entry ***Properties*** – ***Common*** – ***General*** – ***Advanced***).

![!!Language code](https://cdnweb.devolutions.net/docs/RDMW4034_2024_1.png)

2. SmartScreen (in entry ***Properties*** – ***Common*** – ***General*** – ***General***)

![!!SmartScreen option](https://cdnweb.devolutions.net/docs/RDMW4035_2024_1.png)

3. Enable Single Sign-On with Windows accounts (***File*** – ***Settings*** – ***Types*** – ***Website*** – ***Session*** – ***Microsoft Edge***).

![!!Enable Single Sign-On](https://cdnweb.devolutions.net/docs/RDMW4038_2024_1.png)

These settings need to be appended to the Microsoft Edge’s cache folder path. Here are some examples:

C:\Users\{user}\AppData\Local\Devolutions\RemoteDesktopManager\WebView2.Cache\de\EBWebView     
C:\Users\{user}\AppData\Local\Devolutions\RemoteDesktopManager\WebView2.Cache\SingleSignOn\EBWebView       
C:\Users\{user}\AppData\Local\Devolutions\RemoteDesktopManager\WebView2.Cache\de\DisableSmartScreen\SingleSignOn\EBWebView

## Profile

A profile then needs to be specified using the Edgeview2 control, which allows for various cache matching configurations.
1. Private mode: This mode its own private profile consisting of a profile name – if it exists – and the entry’s ID.
1. Profile name: This profile will allow sharing with all other sessions that match the three settings previously defined in {{ en.RDM }} and the profile name.
1. No profile name: This profile will allow sharing with all other sessions that match the three settings previously defined in {{ en.RDM }} without a profile name (it will revert to a hard-coded folder name).

## Clear cache on startup

With all this configured, the setting ***Clear cache on startup*** can be enabled. From then on, the cache will be cleared when first launching a session, and any subsequent sessions will not have theirs cleared until all are closed and a new one is launched.