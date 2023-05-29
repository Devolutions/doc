---
eleventyComputed:
  title: Import CSV Files in {{ en.PHUB }} Business with {{ en.PHUB }} Importer
---
{% snippet icon.badgeInfo %}
This topic assumes that your CSV files are ready to be imported. For tips and recommendations on how to prepare your CSV files for importation, visit [this topic](/kb/hub-business/knowledge-base/csv-files-import-strategies-format-hub-importer/)
{% endsnippet %}  

{{ en.PHUB }} Importer is our essential companion tool designed to import files into your {{ en.PHUB }} Follow the steps below to learn how to import CSV files in {{ en.PHUB }} Business.  

{% snippet icon.badgeInfo %}
If you do not have {{ en.PHUB }} Importer, [download and install it](https://devolutions.net/password-hub-importer) first. Then, after launching the application, select your ***Hub Business Host*** and log in with your {{ en.DA }}
{% endsnippet %}  

1. Once logged in, select the ***CSV*** format in the ***Import Type*** menu. Then, click on the ellipsis button next to the ***Source*** field to open the ***Import Csv Wizard***  
{% snippet icon.badgeCaution %}
In the event that you need to import the ***Specific Settings*** , leave the ***Change ID*** box unchecked in the Import Settings section next to the ellipsis button.
{% endsnippet %}  

![CSV Import Type.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2112.png)

2. In the ***Import Csv Wizard*** window, select the ***Header format instruction*** ( ***Session*** , ***Credential*** , ***Information*** , or ***Template*** ) from the drop-down list.  
![Header Format Instruction Selection.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2114.png)
1. Click on the ellipsis button next to the ***Open CSV file*** field to select your files to import.
![Open CSV File.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2115.png)
1. Select your file and click ***Open***
1. Click ***Next*** in the ***Import Csv Wizard*** window.
1. In this step, you can modify some settings and see a preview of your entries information. See a description of each setting below:

<table>
	<tr>
		<th>
SETTING
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Delimiter
		</td>
		<td>
Select a delimiter between a Comma , a Semicolon , or a Custom symbol.
		</td>
	</tr>
	<tr>
		<td>
Has headers
		</td>
		<td>
Enable this option if your entries in your file have headers.
		</td>
	</tr>
	<tr>
		<td>
Generate direct mapping
		</td>
		<td>
Matches column names in your CSV file with those in {{ en.RDM }} You can enable this option only if you know the field name in {{ en.RDM }}'s code or if your CSV file originates from a previous CSV export from {{ en.RDM }}
		</td>
	</tr>
	<tr>
		<td>
Update preview
		</td>
		<td>
Apply the changes made to the parameters to the entries preview.
		</td>
	</tr>
</table>

![Settings and Preview.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2121.png)  

7. When done, click ***Next***
1. Under ***Mappings*** , you can edit, add, or delete variables.  
![Edit, Add, or Delete Variables.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2124.png)
* To edit a variable, select the variable type in the drop-down list of the left field. Choose between ***Name*** , ***Username*** , ***Url*** , ***Password*** , ***Description*** , ***Folder*** , ***Domain*** , ***Host*** , ***Port*** , ***Tags*** , ***Custom Field*** (1 to 5), ***Direct Property*** , or ***Template*** In the right field, enter the variable.  
* To add a variable, click on the add button. A new line will appear at the bottom of the list. Select the variable type in the drop-down list of the left field. Choose between ***Name*** , ***Username*** , ***Url*** , ***Password*** , ***Description*** , ***Folder*** , ***Domain*** , ***Host*** , ***Port*** , ***Tags*** , ***Custom Field*** (1 to 5), ***Direct Property*** , or ***Template*** In the right field, enter the variable.  
* To delete a variable, click on the x button next to it.  

9. When done, click ***Finish***
1. In the ***Target Vault*** drop-down list, select the vault in which to import your entries.
![Target Vault Selection.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2116.png)
1. Select which entry you want to import. You can use the ***Select All*** and ***Unselect All*** buttons at the bottom or select/unselect them one by one by checking/unchecking the box next to the entry.
1. When done selecting, click on ***Import Selection to Hub***
1. When the import process is complete, a window will pop up to inform you. You can close it by pressing ***OK***  

Your CSV file entries have now successfully been imported. Repeat these steps for each CSV file you want to import.
