---
eleventyComputed:
  title: Jump ({{ en.RDMA }}) troubleshooting guide
  description: Here is a quick troubleshooting guide to diagnose any issue with Jump ({{ en.RDMA }}).
  keywords:
  - Jump
  - Agent
---
Here is a quick troubleshooting guide to diagnose any issue with Jump ({{ en.RDMA }}).

## Validate the RDP Jump Host Configuration

1. Connect to the jump host via {{ en.RDM }} and wait for the {{ en.RDMA }} and/or {{ en.RDM }} to start automatically.
1. If the {{ en.RDMA }} does not start automatically, follow these verification steps:
    1. Start {{ en.RDM }}.
    1. Go to ***Tools – More Tools***.
    ![Tools – More Tools](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2226.png)
    1. Select ***RDM Agent***, then click ***OK***.
    ![{{ en.RDMA }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2227.png)
    1. Validate the installation and connection.
    1. In the system tray, right-click the {{ en.RDMA }} tray icon and click on ***About...***.
    ![{{ en.RDMA }} Tray Icon – About...](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2228.png)
    1. Validate that ***Connected*** and ***{{ en.RDM }} is installed*** have a checkmark icon next to them.
    ![Connected and {{ en.RDM }} is installed](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2229.png)
    1. Right-click the {{ en.RDMA }} tray icon again and make sure that the ***Auto Start*** setting has a checkmark next to it. If not, click on it to enable it.
    ![{{ en.RDMA }} Tray Icon – Auto Start](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2230.png)
    1. You will be prompted for elevated rights as the ***Auto Start*** setting requires it. Click ***Yes***.
1. If {{ en.RDM }} did not start automatically, you can optionally [configure it through Windows](https://support.microsoft.com/en-us/windows/add-an-app-to-run-automatically-at-startup-in-windows-10-150da165-dcd9-7230-517b-cf3c295d89dd).

## Validate the {{ en.RDMA }} and/or {{ en.RDM }} Connection

1. In {{ en.RDM }}, start the jump host RDP session.
1. Right-click on the jump host tab and select ***Agent Status*** in the contextual menu.
![Agent Status](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2231.png)
1. Validate that at least the ***{{ en.RDMA }}*** is connected. There will be a checkmark icon next to it. ***{{ en.RDM }}*** may also have a checkmark, which is normal.
![{{ en.RDMA }} Connected](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2232.png)

## Validate the Jump Session

1. With the jump host RDP session running in {{ en.RDM }}, start the jump session. It should start in the jump host.
1. Right-click on the jump host tab and select ***Agent Status*** in the contextual menu.
![Agent Status](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2231.png)
1. Validate that there is a "1" next to ***{{ en.RDM }} Jump Sessions*** since the jump session is now open.
![1 {{ en.RDM }} Jump Session](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2233.png)
1. To enable logging, right-click the {{ en.RDMA }} tray icon and click on ***Settings...***.
![{{ en.RDMA }} Tray Icon – Settings...](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2234.png)
1. Check the ***Log debug messages*** setting, then click ***Save***.
![Check Log debug messages](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2235.png)
1. To view the logs, right-click the {{ en.RDMA }} tray icon again and click on ***View Logs...***.
![{{ en.RDMA }} Tray Icon – View Logs...](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2236.png)
1. Close the jump host RDP session. By doing so, both the jump session and the jump host should close.

## Perform a Full Test

If you perform a full test, here is what should happen in chronological order after opening the jump host session:
1. The jump host session will start.
1. {{ en.RDM }} will wait for the {{ en.RDMA }} or for {{ en.RDM }} to connect with the client {{ en.RDM }}.
1. The client {{ en.RDM }} will send the jump session to the jump host.
1. The jump session will start.

## Pro Tips

* It is not recommended to auto-start {{ en.RDM }} because:
  * {{ en.RDMA }} is faster to auto-start.
  * Auto-starting {{ en.RDM }} may cause the jump to timeout.
  We therefore recommend that you let {{ en.RDMA }} start {{ en.RDM }} on the first jump.
* If {{ en.RDM }} is slow to start on the jump host, especially if it is running on TS or similar environments. See [Startup Performance](/kb/remote-desktop-manager/troubleshooting-articles/startup-performance/) for a few quick solutions to improve {{ en.RDM }} startup times. You can also uncheck the ***Show Splash screen*** setting in ***File – Settings – Application – Application Startup*** to disable the splash screen.
* The client {{ en.RDM }} will favor direct communication with {{ en.RDM }} if it is already connected, and will only fall back to {{ en.RDMA }} if it is not available. This is by design and has the advantage of being slightly faster at starting sessions.
