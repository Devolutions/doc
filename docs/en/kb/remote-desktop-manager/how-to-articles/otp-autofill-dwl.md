---
eleventyComputed:
  title: OTP autofill with {{ en.DWL }}
  description: Devolutions Web Login allows to autofill a one-time password (OTP) request with a Website session entry and a Website (Legacy) information entry from {{ en.RDM }}.
---
{{ en.DWL }} allows to autofill a one time password (OTP) request with a ***Website*** session entry and a ***Website (Legacy)*** information entry from {{ en.RDM }}.

{% snippet icon.badgeNotice %}
For this topic, we will be using Google Chrome to inspect the field.
{% endsnippet %}

1. Select the ***Source*** configuration type to set the OTP information required to be saved in the ***General*** section of the ***Website*** session entry or the ***Website (Legacy)*** information entry in ***One Time Password (OTP)*** or link to a separate ***One Time Password (OTP)*** credential entry.  
![!!KB4822.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4822.png)
1. Open a browser page to the site with the OTP.  
1. Right-click in the OTP field and click on ***Inspect***.  
![!!KB4818.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4818.png)
1. Look for the OTP ID in the ***Elements*** window and copy the information. In this example the ID to copy is passField.  
![!!KB4819.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4819.png)
1. In {{ en.RDM }}, save the information in:
   - a ***Website*** session entry in ***Login - Html Control ID - One time password ID***.  
      ![!!KB4821.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4821.png)
   - a ***Website (Legacy)*** information session entry in the ***More Settings - One time password***..  
      ![!!KB4820.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4820.png)  
{% snippet icon.badgeInfo %}
If your ***Credentials*** are set to ***Linked (Vault)***, you also need to configure and set the ***One Time Password (OTP)*** link in the ***General*** tab section.
{% endsnippet %}  

6. Click ***OK*** to save.
