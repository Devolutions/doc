---
eleventyComputed:
  title: Export and import vaults
---
It is possible to export and import multiple {{ en.VLT }}s from one type of advanced data source to another.

{% snippet icon.badgeCaution %}
If you have ***Users*** and they are overriding entries properties with ***User Specific Settings***, they will be required to export and import their ***User Specific Settings List***. See [Export and import User Specific Settings](/kb/remote-desktop-manager/how-to-articles/export-import-user-specific-settings/).
{% endsnippet %}

{% snippet icon.badgeCaution %}
Administration rights are required to export and import multiple {{ en.VLT }}s.
{% endsnippet %}

## Export

1. In the {{ en.RDM }} ***{{ en.NPANE }}***, select your data source.
1. Go to ***Administration - Export All {{ en.VLT }}s (.rdx)***.
1. Select the {{ en.VLT }}s from the prompted list and click ***OK***.
1. For a typical migration, you would check the options ***Include credentials, Include attachments and documents*** and ***Encrypt with master key***.  
{% snippet icon.badgeInfo %}
By default the credentials are NOT included. It is critical to check the ***Include credentials*** option in order for the exported data to include the credentials.
{% endsnippet %}  
{% snippet icon.shieldWarning %}
Specifying a master key will encrypt the whole content of the ***.rdx*** file to protect its content. It is highly recommended as a backup measure, but the key is absolutely necessary for decryption. Preserve this as well in a separate storage device for safekeeping.
{% endsnippet %}  

![!!KB4975](https://webdevolutions.azureedge.net/docs/en/kb/KB4975.png)  

5. Click ***OK***.
1. Save the ***.rdx*** file on your computer.

## Import

1. In the ***{{ en.NPANE }}***, select the data source you wish to import the {{ en.VLT }}s in.
1. Go to ***Administration - Import Multiple {{ en.VLT }}s (.rdx)***.
1. Locate the ***.rdx*** saved file on your computer and click ***Open***.
1. Set the ***Mappings*** of the {{ en.VLT }}s.  
{% snippet icon.badgeInfo %}
At this step, if needed, you can add {{ en.VLT }}s by clicking on the ***Add {{ en.VLT }}*** button.
{% endsnippet %}  
{% snippet icon.badgeCaution %}
If you have ***Users*** and they are overriding entries properties with ***User Specific Settings***, uncheck ***Change ID***.
{% endsnippet %}  

5. Click ***Finish***.
