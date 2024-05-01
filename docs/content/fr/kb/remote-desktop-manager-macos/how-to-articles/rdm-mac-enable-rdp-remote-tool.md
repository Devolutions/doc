---
eleventyComputed:
  title: "{{ en.RDMMAC }} enable RDP Remote Tools"
---
{% snippet icon.badgeInfo %}
Devolutions Proxy is deprecated, this function will work with {{ en.DVLS }}.
{% endsnippet %}

It is possible to get access to the Remote Tools such as Terminal Services, Remote Event or Remote Service as an example in a RDP session in {{ en.RDMMAC }}.

Prior to your configuration in {{ en.RDMMAC }}, a Devolutions Proxy needs to be configured via {{ en.RDM }} for Windows.

## Method 1

1. After the deployment of your Devolutions Proxy, open {{ en.RDMMAC }} and click on ***{{ en.RDM }} – Preferences***.
![!!KB4209](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4209.png)
1. Click on ***Tools - Remote Tools*** and in the ***Access mode***, select ***Via custom Devolutions Proxy***.
![!!KB4210](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4210.png)
1. Enter the ***Server*** name where your Devolutions Proxy has been deployed and ***Save***.
![!!KB4211](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4211.png)
1. Go in the ***{{ en.NPANE }}***, edit your RDP session entry and click on ***Remote Tools*** Set the ***Access mode*** to ***Default*** to use the Devolutions Proxy.
![!!KB4212](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4212.png)

The Remote Tools will now be available via the Dashboard for your RDP sessions.

## Method 2

1. After the deployment of your Devolutions Proxy, open {{ en.RDMMAC }}. Right-click your RDP session, click ***Properties***.
1. Click on ***Remote Tools***.
![!!KB4213](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4213.png)
1. In ***Access Mode***, select ***Via custom Devolutions Proxy*** and enter the ***Server*** name for the Devolutions Proxy, ***Save***.
![!!KB4214](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4214.png)

The Remote Tools will now be available via the Dashboard for this RDP session.

## Method 3

After the deployment of your Devolutions Proxy, open {{ en.RDMMAC }} and create a new Devolutions Proxy session.

1. When the Devolutions Proxy session is created, right-click your RDP session, click ***Properties***.
1. Click on ***Remote Tools***.
![!!KB4213](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4213.png)
1. In ***Access mode***, select ***Via Devolutions Proxy*** and select your Devolutions Proxy session.
![!!KB4215](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4215.png)

The Remote Tools will now be available via the Dashboard for this RDP session.
