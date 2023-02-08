---
title: How to Export and Import Entries
---
# {{ en.TOPICTITLE }}
{% youtube 'jipoCzhIEs8' %}  

It is possible to export and import entries from one type of data source to another. There are many ways of exporting entries with {{ en.RDM }}  
{% snippet icon.badgeCaution %}
If you have ***Users*** and they are overriding entries properties with ***User Specific Settings*** , they will be required to export and import their ***User Specific Settings List*** Follow this topic to learn how to [Export and Import User Specific Settings](/kb/remote-desktop-manager/how-to-articles/export-import-user-specific-settings/)
{% endsnippet %}  

1. In {{ en.RDM }} ***Navigation Pane*** , select your data source.  
{% snippet icon.badgeNotice %}
To export the entire vault, go to ***File - Export - Export Vault (.rdm)*** and continue on <a href="#4">Step 4</a>
{% endsnippet %}

2. Select the entries and/or folders you wish to export.
1. Right click on the selection and in the menu select ***Export - Export Selection (.rdm)***  
![KB4998.png](/img/en/kb/KB4998.png)
1. For a typical migration, you would check the options ***Include credentials, Include attachments and documents*** and ***Encrypt with master key***  
<a name="4"></a>
{% snippet icon.badgeInfo %}
By default the credentials are NOT included. It&apos;s critical to check the ***Include credentials*** option in order for the exported data to include the credentials.
{% endsnippet %}  
{% snippet icon.shieldWarning %}
Specifying a master key will encrypt the whole content of the ***.rdm*** file to protect its content. It is highly recommended as a backup measure, but the key is absolutely necessary for decryption. Preserve this as well in a separate storage device for safekeeping.
{% endsnippet %}  

![KB4839.png](/img/en/kb/KB4839.png)

5. Click ***OK*** 
1. Save the ***.rdm*** file on your computer. 
1. In the ***Navigation Pane*** , select your data source and vault you wish to import the entries. 
1. Right click on the folder and select ***Import - Import (.rdm)***  
![KB4999.png](/img/en/kb/KB4999.png)  
{% snippet icon.badgeNotice %}
You can import the entire vault in ***File - Import - Import (.rdm)***
{% endsnippet %}  

9. Locate the ***.rdm*** saved file on your computer and click ***Open*** 
1. Select if you wish to ***Import in root*** , ***Import in current folder*** or ***Import in specific folder***  
![KB5000.png](/img/en/kb/KB5000.png)
1. Click ***OK*** 
1. In the next dialog, you&apos;ll be presented with a list of all the entries that are in the data file. You can select specific entries you wish to import or ***Select All*** to import all of your entries.  
{% snippet icon.badgeCaution %}
If you have ***Users*** and they are overriding entries properties with ***User Specific Settings*** , uncheck ***Change ID***
{% endsnippet %}

13. Click ***OK***
