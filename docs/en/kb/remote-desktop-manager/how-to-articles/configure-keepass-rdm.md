---
eleventyComputed:
  title: Configure KeePass plugin mode with {{ en.RDM }}
  description: 
---
1. Install the latest KeePass 2 version.
(If client doesn't have the latest version installed the plugins we install from RDM won't be compatible)
Link to KeePass 2 Download web page: https://keepass.info/download.html
Note: During the installation, make sure that the installation folder is installed here: "C:\Program Files\KeePass Password Safe 2". This will ensure that the RDM integration works properly.
1. Once installed create your KeePass database, as shown here: https://keepass.info/help/base/firststeps.html
1. Configure database.
1. Save your database.
1. Close KeePass.
1. In RDM, go to File – Options – Paths – Configure Installation Path – KeePass, and make sure that the KeePass executable is detected
1. Go to Tools – Extensions Manager – Others (Tab) and select "Install"
1. The plug-in should be installed under "C:\Program Files\KeePass Password Safe 2\Plugins"
1. Create your KeePass entry in RDM
  9.1 Select "New Entry" under "Edit"
  9.2 Select the "KeePass (Credentials)" entry
  9.3 Select the "Plugin" mode in the "Mode" drop-down menu
  9.3.1 If necessary, check the "Set database path manually" option and configure the file path by clicking the (...) button next to the "Database" field
  9.4 Under the "Entry" tab, select the "Default (specific UUID)" option in the drop-down list.
  9.5 Click the (...) button next to the "Uuid" field
  9.6 KeePass should be launched with the proper file path mentioned, enter your master password to access the KeePass database
  9.7 In RDM, the KeePass Credentials List will now show what credentials are available to reference in ther KeePass entry. 
  9.8 Select the credential you wish to reference.
  9.9 Name the KeePass entry
  9.10 Click "OK" at the bottom of the window.
1. Your KeePass entry should be configured and ready to go within RDM.

Extra notes, "Always Prompt with list" option under the "Entry" tab will make it so that whenever the entry is used it will reference and allow you to select an entry from the entire database rather than configuring a static KeePass credential entry from the KeePass database.

The "Name filtering" option allows users to reference the name (or "Title" in KeePass terms) of one of many credential entries from their KeePass database. The option can be configured toi more restrictive with case sensitivity or the ability to find an exact match within the database based on what was written in the "Name" field.
(Eg. I have Sample 1 and Sample 2 in my KeePass database, name filtering to "Sample" will give me every entry with "Sample" included in the title)