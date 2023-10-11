---
eleventyComputed:
  title: Offline licenses 
  description: Downloaded licenses are stored and validated locally until they expire. Serial licenses already registered in the product will continue to be validated from the serial until they expire.
---

Each serial has an associated license file (.lic) containing license information (product, expiration date, number of licenses, etc.).

Downloaded licenses are stored and validated locally until they expire. Serial licenses already registered in the product will continue to be validated from the serial until they expire.

When a serial is entered in {{ en.RDM }}, the associated license file will be downloaded automatically. The license file can also be downloaded from the [{{ en.DPORTAL }}](portal.devolutions.com).

{% snippet icon.badgeInfo %}
{{ en.RDM }} and {{ en.DVLS }} installations using Legacy licenses will automatically fetch the license when upgrading to 2023.3.
{% endsnippet %}  

## How do I add a license from the file

For trials, the license file is sent with the serial email. Licenses can also be downloaded from the [{{ en.DPORTAL }}](portal.devolutions.com).

Each serial can be imported by clicking on the ***Import*** button in the ***User and Security Management*** window in {{ en.RDM }}. 

1. Go to ***Administration*** – ***Licenses*** in the ribbon of {{ en.RDM }}.  
![Administration – Licenses](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6144.png)  
1. Click ***Add License*** in the ***User and Security Management*** window.
![Administration – Licenses – User and Security Management – Add License](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6146.png)
1. Select ***Import***.
1. Import your License and click ***OK***.
![Administration – Licenses – User and Security Management – Add License – Import](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6147.png)

### {{ en.RDM }} does not have Internet access when adding the license

Should {{ en.RDM }} or {{ en.DVLS }} not have Internet access, a message will be displayed inviting the user to download the license from [{{ en.DPORTAL }}](portal.devolutions.com).


