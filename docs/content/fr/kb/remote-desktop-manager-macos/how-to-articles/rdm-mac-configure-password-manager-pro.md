---
eleventyComputed:
  title: "{{ en.RDMMAC }} configure Password Manager Pro"
---
You can create Password Manager Pro credential entries in {{ en.RDMMAC }}, however Password Manager Pro needs to be configured in the application prior to the utilization.

1. Connect to your Password Manager Pro (https<area>://localhost:7272) using your admin account.
![!!KB4189](https://cdnweb.devolutions.net/docs/en/kb/KB4189.png)
1. Inside Password Manager Pro, click on ***Admin*** and select ***Users***.
![!!KB4190](https://cdnweb.devolutions.net/docs/en/kb/KB4190.png)
1. Create a new API user.
![!!KB4191](https://cdnweb.devolutions.net/docs/en/kb/KB4191.png)
1. In the creation of your API User, you need to activate the ***REST API*** to have a API Authentification Token key generated.
   ![!!KB4192](https://cdnweb.devolutions.net/docs/en/kb/KB4192.png)

   Keep a copy of the Auth token key at hand, you will need it to configure Password Manager Pro in {{ en.RDMMAC }}.
1. Inside {{ en.RDMMAC }}, click on ***{{ en.RDM }} – My Account Settings – Password Manager Pro***.
![!!KB4193](https://cdnweb.devolutions.net/docs/en/kb/KB4193.png)
1. Enter the API User that you have created in Password Manager Pro in the ***Username*** field. Paste the ***Auth Token key*** in the ***Token*** field and click on ***OK***.
![!!KB4194](https://cdnweb.devolutions.net/docs/en/kb/KB4194.png)

You can now create a Password Manager Pro credential entry in {{ en.RDMMAC }}.
