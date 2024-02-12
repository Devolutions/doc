---
eleventyComputed:
  title: Import sessions
  description: Import sessions from an external source into {{ en.RDM }} via File – Import – Sessions or by right-clicking in the {{ en.NPANE }} and selecting Import – Import Session From.
---
{% tabs %}
{% tabItem "Windows" %}
{% youtube 'FtSlp_TVAxE?si=O85mqPUZRZGAyTui&amp;start=319' %}

Import sessions from an external source into {{ en.RDM }} via ***File – Import – Sessions*** or by right-clicking in the {{ en.NPANE }} and selecting ***Import – Import Session From***.

{% snippet icon.badgeInfo %} 
The import feature is only active if the import ***Privilege*** has been enabled inside the user account. 
{% endsnippet %}  

You can import your sessions from an existing application or an existing file format. Some applications encrypt the data, but it must be in plain text to allow the application to parse the content.  

{% snippet icon.badgeInfo %} 
All entries will be imported in the current folder. 
{% endsnippet %}  

{% snippet icon.shieldCaution %} 
For some applications, it is not possible to extract the password. 
{% endsnippet %}  

![Import sessions from an external source](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10036.png)
{% endtabItem %}

{% tabItem "macOS" %}
Use the File - Import - Import Sessions From to import sessions into {{ en.RDMMAC }}.  

## Settings 

![Import Sessions from](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10314.png) 

### Import Sessions From 

You can import your sessions from an existing application or an existing file format. Some application encrypt the data which makes it impossible to parse the content, therefore you must use a plain text export format. Please note that all of the entries will be imported in the current folder. For some applications it might be impossible to extract the password.  

You can import sessions from the following applications:  

* CoRD 
* Jump Desktop (.jdz) 
* Remote Desktop Connection Manager (.rdg) 
* RDP Configuration (.rdp) 
* visionApp Remote Desktop (.vrd, .vre, .vrb, .rde, .csv)
{% endtabItem %}
{% endtabs %}