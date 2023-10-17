---
eleventyComputed:
  title: Installation for All Users
---
{{ en.RDM }} 's current installation package does require to install with elevated privileges, as well as making the application available to all users of the computer where you are installing. That being said, feedback has shown that it does complete successfully across a wide spectrum of our community's environments. Follow this procedure to reduce deployment issues in the future. 

## Procedure 

{% snippet icon.badgeWarning %} 
This procedure registers all file types associations, this mean that rdp files will from now on be opened with {{ en.RDM }}. If you wish to avoid this, install manually using the Custom mode, and choose every option but that rdp association. 
{% endsnippet %}
 
1. Copy the installer to a folder available for all users of the workstation (e.g., **C:\Deploy**). 
1. Open an Elevated Command prompt (right click on the shortcut and select ***Run as administrator***). 
1. Run the following command, adapted for the version that you are installing  

```powershell
msiexec /i Setup.{APPNAME}.{VERSION}.msi /Quiet /Passive INSTALLMODE=Complete 
```
We also recommend disabling the auto-update check as all further installations or upgrades should be performed by an administrator AND using elevated privileges.  

If you wish to proceed with upgrades from within {{ en.RDM }}, it must have been started using ***Run as administrator***. 

## Notes 

The Microsoft installer technology copies the installer package under a new randomized name as well as register it in a database. Our experience shows that this copy has a way of disappearing and that the database becomes corrupted. We often have to direct our community to use [https://support.microsoft.com/en-us/mats/program_install_and_uninstall](https://support.microsoft.com/en-us/topic/fix-problems-that-block-programs-from-being-installed-or-removed-cca7d1b6-65a9-3d98-426b-e9f927e1eb4d) 

The Quiet and Passive parameters are just to ensure that you do not have to make a choice during the installation. We found that this reduces the risk of errors. 
