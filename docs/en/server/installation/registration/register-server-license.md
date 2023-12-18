---
eleventyComputed:
  title: Register a {{ en.DVLS }} license
  order: 10
  description: Register your {{ en.DVLS }} license in the {{ en.DVLS }} web interface. 
---
Register your {{ en.DVLS }} license in the {{ en.DVLS }} web interface. 

1. In the {{ en.DVLS }} web interface, go to ***Administration – Licenses***.  
![Administration – Licenses](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp2101.png)  
1. Select ***Add***. 
![Administration – Licenses – Add](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp2102.png)  
1. Enter the license or import the license file, then click ***Add***.

   {% snippet icon.badgeInfo %}
   Importing the license using the **.lic** file is most uselful when offline. See the next section about offline registration for more information.
   {% endsnippet %}  

   ![License window](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp2103.png)  

### Offline registration

If you need to register your license while offline (if internet is disabled or if for whatever reason you cannot reach the servers), you can only do it by importing the **.lic** file provided to you, which contains a JSON Web Token (JWT).

* ***Trial license***: The license file must be downloaded from the Devolutions confirmation email and imported as described in the steps above for {{ en.DVLS }} 2023.3 and later.
* ***Purchased license***: The purchased license must be downloaded from your {{ en.DPORTAL }} account and imported as described in the steps above for {{ en.DVLS }} 2023.3 and later.
