---
eleventyComputed:
  title: "{{ en.DGW }} configuration with {{ en.DHUBB }}"
  order: 30
  description: "{{ en.DGW }} provides a flexible and secure alternative to VPNs, allowing for easy access management and efficient use of network resources."
---
{{ en.DGW }} allows for just-in-time connections at the session level, eliminating the need to change the system's global configuration. {{ en.DGW }} provides a flexible and secure alternative to VPNs, allowing for easy access management and efficient use of network resources.  

{% snippet, "badgeInfo" %}
Each {{ en.DHUB }} license comes with a {{ en.DGW }}. It is user-based and supports up to 5 users.
{% endsnippet %}

{% snippet, "badgeCaution" %}
If your clients fail to connect with {{ en.DGW }}, ensure the certificate contains the entire chain. This certificate chain includes any intermediate certificates. For example: Root Certificate Authority – Secure (Intermediate) Certificate Authority – Purchased XYZ Certificate
{% endsnippet %}  

## Steps for installing manually
The following instructions explain how to manually install {{ en.DGW }} through {{ en.DHUBB }}.

{% snippet, "badgeCaution" %}
As the installer is an MSI file, this method only works on Windows.
{% endsnippet %}

1. Log in with an administrator {{ en.DHUBB }} account.
1. Click on the ***Administration*** tab.  
![Administration tab](https://cdnweb.devolutions.net/docs/HUBB0005_2024_1.png)
1. Click on {{ en.DGW }}, which is under the ***Management*** section.  
![{{ en.DGW }}](https://cdnweb.devolutions.net/docs/HUBB0006_2024_1.png)
1. Click on the ***More*** button in the top right.  
![More button](https://cdnweb.devolutions.net/docs/HUBB0007_2024_1.png)
1. Click on ***Download public key***. This key is unique to the {{ en.DHUBB }} account. It is automatically renamed to *provisioner.pem*. Keep track of where you saved this key, as you will need it later.  
![Gateway public key](https://cdnweb.devolutions.net/docs/HUBB0009_2024_1.png)
1. Select ***Download MSI*** from the dropdown.  
![Download MSI](https://cdnweb.devolutions.net/docs/HUBB0008_2024_1.png)
1. Execute the installer.
   {% snippet, "badgeInfo" %}
   The installer should be run on the server hosting {{ en.DGW }}.
   {% endsnippet %}
1. Click ***Next***.  
![Setup Wizard](https://cdnweb.devolutions.net/docs/HUBB0010_2024_1.png)
1. Once the desired installation path is selected, click ***Next***.  
![Destination Folder](https://cdnweb.devolutions.net/docs/HUBB0011_2024_1.png)
1. Click ***Next***.  
![Configure the Gateway installation](https://cdnweb.devolutions.net/docs/HUBB0012_2024_1.png)
   {% snippet, "badgeInfo" %}
   The additional options are for the {{ en.DGW }} Standalone web interface and ngrok integration, both of which are not needed for {{ en.DHUB }}.
   {% endsnippet %}
1. Change the ***Ports*** to the desired value and click ***Next***.
![Listeners](https://cdnweb.devolutions.net/docs/HUBB0013_2024_1.png)
   {% snippet, "badgeInfo" %}
   HTTP(S) and TCP default ports are 7171 and 8181, respectively, but can be changed.
   {% endsnippet %}
1. Input the {{ en.DHUBB }} access URI and click ***Next***.
![Access URI](https://cdnweb.devolutions.net/docs/HUBB0014_2024_1.png)
1. After clicking the top ellipsis button, select either a PFX file or a Certificate file, then enter the corresponding password. (If the listener is ***HTTP*** this step is automatically skipped)
![Certificate](https://cdnweb.devolutions.net/docs/HUBB0015_2024_1.png)
1. Click on the ellipsis button and select the ***Provisioner Public Key*** which was generated in Step 5.  
![Public Key File](https://cdnweb.devolutions.net/docs/HUBB0016_2024_1.png)
1. This screen shows a summary of the current paths/settings. It is possible to go ***Back*** and modify them. If the settings are correct, click ***Next***.  
![Gateway setup summary](https://cdnweb.devolutions.net/docs/HUBB0017_2024_1.png)
1. Click ***Install***.  
![Install button](https://cdnweb.devolutions.net/docs/HUBB0018_2024_1.png)
1. Click ***Finish*** when the setup is complete.  
![Finish button](https://cdnweb.devolutions.net/docs/HUBB0019_2024_1.png)
1. Go back to the ***Administration*** – ***{{ en.DGW }}*** page in {{ en.DHUBB }}.
1. Input the correct information.
![Information fields](https://cdnweb.devolutions.net/docs/HUBB0020_2024_1.png)
   {% snippet, "badgeInfo" %}
   Once the {{ en.DGW }} URL is entered, click the ***Auto-Detect*** button next to the TCP Hostname to fill in the value automatically.
   {% endsnippet %}
1. By checking the ***Default*** box, this {{ en.DGW }} will be the one selected if none are specified or if ***Default*** is chosen when connecting.  
![Default option](https://cdnweb.devolutions.net/docs/HUBB0021_2024_1.png)
1. Make certain the gateway can be reached by clicking ***Test Connection***.  
![Test Connection button](https://cdnweb.devolutions.net/docs/HUBB0022_2024_1.png)
1. Click the ***Add*** button to link your {{ en.DGW }} installation to your {{ en.DHUBB }}.  
![Add button](https://cdnweb.devolutions.net/docs/HUBB0023_2024_1.png)
1. A rectangle will show the information for every {{ en.DGW }} Hub link(s).  
![Successful link](https://cdnweb.devolutions.net/docs/HUBB0024_2024_1.png)
{% snippet, "badgeInfo" %}
Visit [{{ en.RDM }} Configuration](/dgw/hub/rdm-configuration/) to learn more about linking {{ en.RDM }} and {{ en.DGW }}.
{% endsnippet %}
