---
eleventyComputed:
  title: Apply policies
  description: Administrative Templates facilitate the management of registry-based policy settings, which can be applied on the computer and/or user configuration. Group policy (GPO) is a tool that enables your organization to enforce global settings on all computers, and at the same time, harden {{ en.RDM }} security.
  keywords:
  - silent
  - unattended
  - gpo
  - administrative template
  - policy
---
Administrative Templates facilitate the management of registry-based policy settings, which can be applied on the computer and/or user configuration. Group policy (GPO) is a tool that enables your organization to enforce global settings on all computers, and at the same time, harden {{ en.RDM }} security.

{% snippet icon.badgeInfo %}
Administrative Templates are registry settings that are enforced by domains. They contain registry keys that can also be set on computers that are not joined to domains. In this case, however, proper Access Control Lists (ACLs) must be put in place to prevent users from modifying registry settings. Refer to the tables below to find the registry key for each policy setting.
{% endsnippet %}

To learn more on how to deploy the {{ en.RDM }} Administrative Templates on your domain, please refer to the Microsoft Online Help.

## List {{ en.RDM }} GPOs in the Local Group Policy Editor

{% snippet icon.badgeInfo %}
For now, the additional support is exclusively for the policies that require a numerical input higher than 0-1 (ex: ForceLockOnIdle).
{% endsnippet %}

{{ en.RDM }} includes an administrative template file (.admx), which describes the policies that are offered. You will find it in the policies subfolder. Before you can manage GPOs in {{ en.RDM }}, you first need to list them in the Local Group Policy Editor. Here are the steps:

1. Go to your policies subfolder. By default, the path is **C:\Program Files (x86)\Devolutions\Remote Desktop Manager\Policies**.
1. Copy the Devolutions.admx file.
1. Go to **C:\Windows\PolicyDefinitions**.
1. Paste the Devolutions.admx file in the root of **C:\Windows\PolicyDefinitions**.
1. Go to **C:\Program Files\Devolutions\Remote Desktop Manager\Policies\en-US**.
1. Copy the Devolutions.adml file.
1. Paste the Devolutions.adml file in **C:\Windows\PolicyDefinitions\en-US**.
1. Open your Group Policy Editor and go to ***Computer Configuration – Administrative Templates – Devolutions – {{ en.RDM }} – Sessions***.
1. In the ***Sessions*** folder, locate the specific policy that you wish to change.
1. Right-click the specific policy, edit it accordingly, and save.  

If {{ en.RDM }} is open when you make this change, then you will need to restart it for the new policy to take effect.

## Policies

### General

<table>
	<tr>
		<th>
POLICY NAME
		</th>
		<th>
REGISTRY KEY
		</th>
	</tr>
	<tr>
		<td>
Disable export {{ en.VLT }} menus in export menus
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableExportVaultMenus
		</td>
	</tr>
	<tr>
		<td>
Disable features requiring an internet connection, such as telemetry, automatic favicon fetching and checking for add-on updates
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\NoInternetConnection
		</td>
	</tr>
	<tr>
		<td>
Disable Onboarding
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOnboarding
		</td>
	</tr>
	<tr>
		<td>				
Disable the application's automatic update check
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAutoUpdate
		</td>
	</tr>
	<tr>
		<td>
Disable the application's update menus
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableUpdate
		</td>
	</tr>
	<tr>
		<td>
Disable the launching of entries at startup
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLaunchAtStartup
		</td>
	</tr>
	<tr>
		<td>
Disable the license expiration message in the Overview
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLicenseExpirationMessage
		</td>
	</tr>
	<tr>
		<td>
Disable the telemetry data collection
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAnalytics
		</td>
	</tr>
	<tr>
		<td>
Disable the system Contacts, Macros and VPNs in the {{ en.UVLT }}
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableGlobalVaultInUserVault
		</td>
	</tr>
	<tr>
		<td>
Enable PowerShell Remote Console API hooking
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnablePowerShellRemoteConsoleHooking
		</td>	
	</tr>
	<tr>
		<td>					
Force application close when idle
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceCloseOnIdle
		</td>	
	</tr>
	<tr>
		<td>
Force proxy settings to System
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceSystemProxy
		</td>
	</tr>
	<tr>
		<td>
Force refresh before edit entry
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeEditEntry
		</td>
	</tr>
	<tr>
		<td>
Force the loading of the current configuration file
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceCurrentConfigurationLoading
		</td>
	</tr>
	<tr>
		<td>
Force the loading of the default.cfg file
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceDefaultConfigurationLoading
		</td>
	</tr>
	<tr>
		<td>
Force updating all major updates
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingMajorUpdate
		</td>
	</tr>
	<tr>
		<td>
Force updating all updates
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingAllUpdate
		</td>
	</tr>
	<tr>
		<td>
Force updating all updates and beta
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingAllUpdateAndBeta
		</td>
	</tr>
	<tr>
		<td>
Force updating once a month
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingOnceAMonth
		</td>
	</tr>
</table>

### Security

<table>
	<tr>
		<th>
POLICY NAME
		</th>
		<th>
REGISTRY KEY
		</th>
	</tr>
	<tr>
		<td>
Apply forced password template in Password Generator tool
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ApplyForcedPasswordTemplateInPasswordGeneratorTool
		</td>
	</tr>
	<tr>
		<td>
Check for server certificate revocation
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\CheckForServerCertificateRevocation
		</td>
	</tr>
	<tr>
		<td>
Disable Azure interactive persistent login
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAzureInteractivePersistentLogin
		</td>
	</tr>
	<tr>
		<td>
Disable execute scripts via terminal
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableExecuteScriptsViaTerminal
		</td>
	</tr>
	<tr>
		<td>
Disable exporting the {{ en.UVLT }}
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableUserVaultExport
		</td>
	</tr>
	<tr>
		<td>
Disable local drive sharing of RDP entries
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLocalDriveSharing
		</td>
	</tr>
	<tr>
		<td>
Disable Mask Password in View Password
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMaskPasswordInViewPassword
		</td>
	</tr>
	<tr>
		<td>
Disable My Account Settings
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyAccountSettings
		</td>
	</tr>
	<tr>
		<td>
Disable My Personal Private Key
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPersonalPrivateKey
		</td>
	</tr>
	<tr>
		<td>
Disable My Privileged Account
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPrivilegedAccount
		</td>
	</tr>
	<tr>
		<td>
Disable read/write in Offline Mode
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableReadWriteOffline
		</td>
	</tr>
	<tr>
		<td>
Disable the Caching mode
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableCaching
		</td>
	</tr>
	<tr>
		<td>
Disable the Offline Mode
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOffline
		</td>
	</tr>
	<tr>
		<td>
Disable the override hard drive specific settings for RDP entries
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRDPHardDrivesSpecificSettings
		</td>
	</tr>
	<tr>
		<td>
Disable the Password Generator
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisablePasswordGenerator
		</td>
	</tr>
	<tr>
		<td>
Disable the Reveal Password option in My Account Settings for all users, including administrators
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRevealPasswordInMyAccountSettings
		</td>
	</tr>
	<tr>
		<td>
Force an application two-factor authentication mode (check against all configured methods or prompt for selection on use)
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\Application2faMode
		</td>
	</tr>
	<tr>
		<td>
Force application lock on standby
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnStandby
		</td>
	</tr>
	<tr>
		<td>
Force application lock when idle
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnIdle
		</td>
	</tr>
	<tr>
		<td>
Force application lock when minimizing
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnMinimize
		</td>
	</tr>
	<tr>
		<td>
Force application lock when Windows locks
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnWindowsLock
		</td>
	</tr>
	<tr>
		<td>
Force Application Password
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLocalApplicationPassword
		</td>
	</tr>
	<tr>
		<td>		
Force multi-factor authentication on the application login
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA
		</td>
	</tr>
	<tr>
		<td>
Force secure desktop usage
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceSecureDesktop
		</td>
	</tr>
	<tr>
		<td>
Force the local save of My Account Settings
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLocalMyAccountSettings
		</td>
	</tr>
	<tr>
		<td>
Force the user to always be prompted for their credentials when launching the application
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLogin
		</td>
	</tr>
	<tr>
		<td>
Force the user to always be prompted for their passphrase while connecting to a data source that is protected by a Shared Passphrase Security Provider
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\AlwaysPromptForPassphrase
		</td>
	</tr>
	<tr>
		<td>
Force Windows Hello authentication on the application login
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceWindowsHello
		</td>
	</tr>
	<tr>
		<td>
Ignore application certification errors
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\IgnoreApplicationCertificateErrors
		</td>
	</tr>
	<tr>
		<td>
LastPass two-factor authentication mode
1 = Do not trust this device
2 = Trust this device
3 = Trust this device on close
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\LastPass2FAMode
		</td>
	</tr>
	<tr>
		<td>
Remove the possibility to see passwords entirely
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceHidePasswordForAdministrators
		</td>
	</tr>
	<tr>
		<td>
Use Windows credentials as the application password and force the currently logged on username and domain (unless an application password is already set)
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceWindowsCredentialsAndCurrentlyLoggedOnUsernameAndDomain
		</td>
	</tr>
</table>

### Sessions

<table>
	<tr>
		<th>
POLICY NAME
		</th>
		<th>
REGISTRY KEY
		</th>
	</tr>
	<tr>
		<td>
Allow the user to connect even after the entry has expired
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableConnectionAfterExpiration
		</td>
	</tr>
	<tr>
		<td>
Confirm on multiple sessions open if open count greater than
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ConfirmSessionsOpenOnCountGreaterThan
		</td>
	</tr>
	<tr>
		<td>
Disable all session events
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceDisableAllSessionEvents
		</td>
	</tr>
	<tr>
		<td>
Disable import in {{ en.UVLT }}
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableImportInPrivateVault
		</td>
	</tr>
	<tr>
		<td>
Disable Reveal Password
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRevealPassword
		</td>
	</tr>
	<tr>
		<td>
Disable the Add-on creation and the Add-on Manager. Deprecated, use DisableAddOnEntries and DisableAddOnManager instead
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOn
		</td>
	</tr>
	<tr>
		<td>
Disable the Add-on creation of entries
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOnEntries
		</td>
	</tr>
	<tr>
		<td>
Disable the Add-on Manager
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOnManager
		</td>
	</tr>
	<tr>
		<td>
Disable the custom image edition in the session configuration
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableCustomImage
		</td>
	</tr>
	<tr>
		<td>
Disable Website Session and Website (legacy) Information (Deprecated) credential autofill after one minute
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableWebsiteCredentialAutofillAfterDelay
		</td>
	</tr>
	<tr>
		<td>
Enable RDP API hooking
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableRDPHooking
		</td>
	</tr>
	<tr>
		<td>
Force refresh before copy password/username/domain
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeCopyFromEntry
		</td>
	</tr>
	<tr>
		<td>
Force refresh before execute entry
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeExecuteEntry
		</td>
	</tr>
	<tr>
		<td>
Force refresh before view password
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeViewPassword
		</td>
	</tr>
	<tr>
		<td>
Force User Specific Settings migration
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUserSpecificSettingsMigration
		</td>
	</tr>
	<tr>
		<td>
Hide the custom port in RDP sessions
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HidePortInRDP
		</td>
	</tr>
	<tr>
		<td>
Only allow the creation of credentials when inside the {{ en.UVLT }}
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\OnlyAllowCredentialsInPrivateVault
		</td>
	</tr>
	<tr>
		<td>
Select the default PowerShell version
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DefaultPowershellVersion
		</td>
	</tr>
</table>

### User Interface

<table>
	<tr>
		<th>
POLICY NAME
		</th>
		<th>
REGISTRY KEY
		</th>
	<tr>
		<td>
Dashboard Auto Focus Item on Tab Select
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardAutoFocusItemOnTabSelect
		</td>
	</tr>
	<tr>
		<td>
Dashboard Auto Focus Tab on Item Select
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardAutoFocusTabOnItemSelect
		</td>
	</tr>
	<tr>
		<td>						
Disable all the local application tools like the Event Viewer or IIS
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableApplicationTools
		</td>
	</tr>
	<tr>
		<td>
Dashboard Hide All Recordings Panels
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllRecordingsPanels
		</td>
	</tr>
	<tr>
		<td>		
Disable drag and drop in the connection list
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableDragAndDrop
		</td>
	</tr>
<tr>
		<td>
Disable import and export options
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableImportExportOptions
		</td>
	</tr>
	<tr>
		<td>
Disable My Personal Credentials
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPersonalCredentials
		</td>
	</tr>
	<tr>
		<td>
Disable Quick Connect
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableQuickConnect
		</td>
	</tr>
	<tr>
		<td>
Disable the About menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAbout
		</td>
	</tr>
	<tr>
		<td>
Disable the Add-on Manager in the Tools menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsAddOnManager
		</td>
	</tr>
	<tr>
		<td>
Disable the auto-focus of the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAutoFocusDashboard
		</td>
	</tr>
	<tr>
		<td>
Disable the Chocolatey Console in the Tools menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsChocolateyConsole
		</td>
	</tr>
	<tr>
		<td>
Disable the {{ en.DA }} usage
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOnlineAccount
		</td>
	</tr>
	<tr>
		<td>
Disable the {{ en.DVLSCONSOLE }} in the Tools menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsDevolutionsServerConsole
		</td>
	</tr>
	<tr>
		<td>
Disable the Error Report prompt
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableSendErrorReportDialog
		</td>
	</tr>
	<tr>
		<td>
Disable the Extension Manager in the Tools menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsExtensionManager
		</td>
	</tr>
	<tr>
		<td>
Disable the Help menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableHelp
		</td>
	</tr>
	<tr>
		<td>
Disable the Local RDP/RemoteApp Manager in the Tools menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsLocalRDPRemoteAppManager
		</td>
	</tr>
	<tr>
		<td>
Disable the menu File – Data Sources
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableFileDataSources
		</td>
	</tr>
	<tr>
		<td>
Disable the menu File – Options
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableFileOptions
		</td>
	</tr>
	<tr>
		<td>
Disable the Open New Remote Desktop option in the Tools menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsOpenNewRemoteDesktop
		</td>
	</tr>
	<tr>
		<td>
Disable the option to open with parameters
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOpenWithParameters
		</td>
	</tr>
	<tr>
		<td>
Disable the PowerShell {{ en.RDM }} Cmdlet in the Tools menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsPowershellRDMCmdlet
		</td>
	</tr>
	<tr>
		<td>
Disable the {{ en.RDMA }} in the Tools menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsRDMAgent
		</td>
	</tr>
	<tr>
		<td>
Disable the Tools Ribbon tab and menu
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsMenu
		</td>
	</tr>
	<tr>
		<td>
Disable the Top Pane (Ribbon/Menubar)
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableTopPane
		</td>
	</tr>
	<tr>
		<td>
Force the main tree view to load with all nodes collapsed at launch
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceTreeViewCollapseAtLaunch
		</td>
	</tr>
	<tr>
		<td>
Hide the Asset panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllAssetPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Attachments panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllAttachmentsPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Documentation panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllDocumentationPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Entries panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllEntriesPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Logs panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllLogsPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the MacroScriptTools panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllMacroScriptToolsPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Management Tools panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllManagementToolsPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Overview panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllOverviewPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Password List panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllPasswordListPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Permissions panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllPermissionsPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Referenced By panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllReferencedByPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Sub Entries panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllSubConnectionsPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Summary panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllSummaryPanels
		</td>
	</tr>
	<tr>
		<td>
Hide the Task panel located in the Dashboard
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllTaskPanels
		</td>
	</tr>
	<tr>
		<td>
Hide What's New Page
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HideWhatsNewPage
		</td>
	</tr>
	<tr>
		<td>		
Lock Navigation Pane
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\LockNavigationPane
		</td>
	</tr>
	<tr>
		<td>		
Select the default tab for the {{ en.NPANE }} on launch
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DefaultNavigationPaneTab
		</td>
	</tr>
	<tr>
		<td>		
SQLite Default Location
		</td>
		<td>
%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\SQLiteDefaultLocation
		</td>		
	</tr>
</table>

### Notes

Note 1: For each GPO’s corresponding Registry Key, the **%Root%** can either be **HKEY_LOCAL_MACHINE** or **HKEY_CURRENT_USER**, depending on how you want to enforce the policy. Please refer to [Microsoft's online documentation](https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users) to make the best choice for your organization's requirements.
