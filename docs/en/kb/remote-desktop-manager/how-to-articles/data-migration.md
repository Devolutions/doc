---
title: Data Migration
---
# {{ en.TOPICTITLE }}  
{% snippet icon.badgeCaution %}
For security, usability, and efficiency reasons, multiple data sources are tagged as deprecated in Remote Desktop Manager. Read more about it in the [Deprecated Data Sources](/kb/remote-desktop-manager/knowledge-base/deprecated-data-sources/) topic
{% endsnippet %}  

Here are the steps to follow when copying data from one data source to another. The migration is an export of your original data source followed by an import in the new destination data source.  
{% snippet icon.badgeCaution %}
If you are using a self-managed RDBMS (SQL Server, MySQL, MariaDB), you can use their management tools to move the database to another server. Please follow their respective documentation on how to successfully transfer not only that data, but also the user accounts.  

SQL Server: [MSDN Article on how to move databases](https://support.microsoft.com/en-us/help/314546/how-to-move-databases-between-computers-that-are-running-sql-server)  

MySQL: [MySQL Copying databases](https://dev.mysql.com/doc/refman/5.7/en/copying-databases.html)  

MariaDB: [MySQLDump](https://mariadb.com/kb/en/mariadb/mysqldump/)  
{% endsnippet %}  

* <a href="#export">Export a data source</a>
* <a href="#import">Import a data source</a>
### Export a data source
<a name="export"></a>

1. Select the data source you wish to export.  
{% snippet icon.badgeCaution %}
If you have multiple vaults, you will need to export each vault separately or use the ***Export all Vaults (.rdx)*** in the ***Administration*** tab.
{% endsnippet %}  

2. Select File – Export – Export Vault (.rdm)  
![Export Vault option.png](/img/en/kb/kb4540.png)
1. For a typical migration, you would check the options ***Include credentials*** , ***Include attachments and documents*** and ***Encrypt with master key***
* You can choose to remove all the folders present in your navigation tree.
* It is important to ***Include credentials*** at this step. If you choose not to, all your entries will be imported without any credentials.
* If you have documents and attachments saved in your data, we highly recommend you check the option to include them in the export.
* Choose to ***Encrypt with master key*** as an added security layer.  
{% snippet icon.badgeWarning %}
Ensure that you do not forget the ***Master Key*** as you will not be able to decrypt the data without it.
{% endsnippet %}  

![Export Entries window.png](/img/en/kb/kb4541.png)
4. Save the file.
### Import a data source
<a name="import"></a>

1. Validate that your new data source is created and selected in your {{ en.NPANE }}
1. Select File – Import – Import (.rdm )  
![Import option.png](/img/en/kb/kb4542.png)
1. Find your previouslyrdm saved file on your computer, select the file and click ***Open***
1. In &#32; ***Import Entries*** select if you wish to ***Import in root*** , ***Import in current folder*** or ***Import in specific folder***  
![Import Entries Window.png](/img/en/kb/kb4543.png)
<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Import in root
		</td>
		<td>
Import your entries in the root of your data source, meaning it will keep the exact same structure (group, folder, credentials) as the one you&apos;ve exported. It is the suggested method of import.
		</td>
	</tr>
	<tr>
		<td>
Import in current folder
		</td>
		<td>
Import all your entries under the selected folder of the data source.
		</td>
	</tr>
	<tr>
		<td>
Import in specific folder
		</td>
		<td>
Import all your entries under the specific folder chosen of the data source.
		</td>
	</tr>
</table>

5. Click ***OK***
1. In the next dialog, you will be presented with a list of all entries that are in the data file. You can select which entry you wish to import or you can ***Select All*** to import all of your entries.
1. Press ***OK*** to complete the process.
