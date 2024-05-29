---
eleventyComputed:
  title: Add an RDP (session) entry
  description: RDP (Microsoft Remote Desktop) and other tools that open remote connections are saved as session entries in {{ en.RDM }}.
---
{% youtube 'FtSlp_TVAxE?si=cSznMwIYyRIIwnkR&amp;start=156' %}

***RDP (Microsoft Remote Desktop)*** and other tools that open remote connections are saved as ***Session*** entries in {{ en.RDM }}. The entries store information about the host, credentials, local resources, and VPN, so users can open a session with one click. You can also set permissions, configure security settings and customize logs.

## Create an RDP session

Here are the basics to get you started:

1. On the ***Edit*** tab, click ***New entry***.
1. Choose ***RDP (Microsoft Remote Desktop)***.
1. Enter a name for the session.
1. Choose a ***Display*** mode, the most common are:
    * ***Embedded*** (tabbed) opens a new tab in {{ en.RDM }}.
    * ***External*** opens in the external application.
1. Choose the credentials to use.
    * To use credentials you have saved as a separate entry, choose ***Credential repository*** and select the entry from the list.
    * Select ***Default*** if you want to enter the credentials directly in the entry.
1. Enter the ***Host*** address.

## Open an RDP session

Click ***Open session*** on the ***Home*** tab or in the ***Dashboard***.

You can open more than one session at once. With embedded sessions, you can switch between the tabs or monitor connections simultaneously: use thumbnail view or [rearrange open sessions with split screen](/rdm/windows/user-interface/content-area/embedded-sessions/).