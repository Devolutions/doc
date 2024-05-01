---
eleventyComputed:
  title: Disappearing {{ en.NPANE }}
  description: If the {{ en.NPANE }} has disappeared and the ***Reset Layout*** button does not seem to fix the issue, this is an alternate solution.
  keywords:
  - Reset Layout
---
If the ***{{ en.NPANE }}*** has disappeared and the ***Reset Layout*** button does not seem to fix the issue, here is the solution:

1. Close {{ en.RDM }}.
1. Open your File Explorer and navigate to **%localappdata%\Devolutions\RemoteDesktopManager**.
1. Delete the **RemoteDesktopManager.ext** file.
![.ext File](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0006.png)
1. Delete all the **RemoteDesktopManagerLayout.lyt** files.
![.lyt Files](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0007.png)
1. Open {{ en.RDM }}.
