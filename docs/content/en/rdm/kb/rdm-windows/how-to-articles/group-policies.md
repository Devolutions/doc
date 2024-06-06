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
Administrative templates facilitate the management of registry-based policy settings, which can be applied on the computer and/or user configuration. Group policy (GPO) is a tool that enables your organization to enforce global settings on all computers, and at the same time, harden {{ en.RDM }} security.

{% snippet, "badgeInfo" %}
Administrative Templates are registry settings that are enforced by domains. They contain registry keys that can also be set on computers that are not joined to domains. In this case, however, proper Access Control Lists (ACLs) must be put in place to prevent users from modifying registry settings. Refer to the tables below to find the registry key for each policy setting.
{% endsnippet %}

To learn more on how to deploy the {{ en.RDM }} administrative templates on your domain, please refer to the Microsoft documentation.

## List {{ en.RDM }} GPOs in the Local Group Policy Editor
{% snippet, "badgeInfo" %}
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
1. Open your Group Policy Editor and go to ***Computer Configuration*** – ***Administrative Templates*** – ***Devolutions*** – ***{{ en.RDM }}*** – ***Sessions***.
1. In the ***Sessions*** folder, locate the specific policy that you wish to change.
1. Right-click the specific policy, edit it accordingly, and save.

If {{ en.RDM }} is open when you make this change, then you will need to restart it for the new policy to take effect.

## Policies

### General

#### Disable export {{ en.VLT }} menus in export menus
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableExportVaultMenus`

---

#### Disable features requiring an internet connection
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\NoInternetConnection`

---

#### Disable Onboarding
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOnboarding`

---

#### Disable the application's automatic update check
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAutoUpdate`

---

#### Disable the application's update menus
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableUpdate`

---

#### Disable the launching of entries at startup
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLaunchAtStartup`

---

#### Disable the license expiration message in the Overview
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLicenseExpirationMessage`

---

#### Disable the telemetry data collection
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAnalytics`

---

#### Disable the system Contacts, Macros and VPNs in the {{ en.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableGlobalVaultInUserVault`

---

#### Enable PowerShell Remote Console API hooking
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnablePowerShellRemoteConsoleHooking`

---

#### Force application close when idle
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceCloseOnIdle`

---

#### Force proxy settings to System
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceSystemProxy`

---

#### Force refresh before edit entry
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeEditEntry`

---

#### Force the loading of the current configuration file
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceCurrentConfigurationLoading`

---

#### Force the loading of the default.cfg file
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceDefaultConfigurationLoading`

---

#### Force updating all major updates
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingMajorUpdate`

---

#### Force updating all updates
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingAllUpdate`

---

#### Force updating all updates and beta
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingAllUpdateAndBeta`

---

#### Force updating once a month
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingOnceAMonth`

---

### Security

#### Apply forced password template in Password Generator tool
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ApplyForcedPasswordTemplateInPasswordGeneratorTool`

---

#### Check for server certificate revocation
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\CheckForServerCertificateRevocation`

---

#### Disable Azure interactive persistent login
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAzureInteractivePersistentLogin`

---

#### Disable execute scripts via terminal
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableExecuteScriptsViaTerminal`

---

#### Disable exporting the {{ en.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableUserVaultExport`

---

#### Disable local drive sharing of RDP entries
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLocalDriveSharing`

---

#### Disable Mask Password in View Password
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMaskPasswordInViewPassword`

---

#### Disable My Account Settings
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyAccountSettings`

---

#### Disable My Personal Private Key
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPersonalPrivateKey`

---

#### Disable My Privileged Account
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPrivilegedAccount`

---

#### Disable read/write in Offline Mode
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableReadWriteOffline`

---

#### Disable the Caching mode
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableCaching`

---

#### Disable the Offline Mode
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOffline`

---

#### Disable the override hard drive specific settings for RDP entries
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRDPHardDrivesSpecificSettings`

---

#### Disable the Password Generator
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisablePasswordGenerator`

---

#### Disable the Reveal Password option in My Account Settings for all users, including administrators
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRevealPasswordInMyAccountSettings`

---

#### Enable DPAPI cryptography on local files
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableDPAPICryptographyOnLocalFiles`

---

#### Force an application two-factor authentication mode (check against all configured methods or prompt for selection on use)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\Application2faMode`

---

#### Force application lock on standby
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnStandby`

---

#### Force application lock when idle
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnIdle`

---

#### Force application lock when minimizing
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnMinimize`

---

#### Force application lock when Windows locks
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnWindowsLock`

---

#### Force Application Password
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLocalApplicationPassword`

---

#### Force clear cache on close (Chrome)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceClearCacheOnCloseChrome`

---

#### Force clear cache on close (MSEdge)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceClearCacheOnCloseMSEdge`

---

#### Force multi-factor authentication on the application login
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA`

---

#### Force secure desktop usage
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceSecureDesktop`

---

#### Force the local save of My Account Settings
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLocalMyAccountSettings`

---

#### Force the user to always be prompted for their credentials when launching the application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLogin`

---

#### Force the user to always be prompted for their passphrase while connecting to a data source that is protected by a Shared Passphrase Security Provider
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\AlwaysPromptForPassphrase`

---

#### Force Windows Hello authentication on the application login
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceWindowsHello`

---

#### Ignore application certification errors
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\IgnoreApplicationCertificateErrors`

---

#### LastPass two-factor authentication mode 1 = Do not trust this device 2 = Trust this device 3 = Trust this device on close
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\LastPass2FAMode`

---

#### Remove the possibility to see passwords entirely
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceHidePasswordForAdministrators`

---

#### Use Windows credentials as the application password and force the currently logged on username and domain (unless an application password is already set)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceWindowsCredentialsAndCurrentlyLoggedOnUsernameAndDomain`

---

### Sessions

#### Allow the user to connect even after the entry has expired
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableConnectionAfterExpiration`

---

#### Confirm on multiple sessions open if open count greater than
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ConfirmSessionsOpenOnCountGreaterThan`

---

#### Disable all session events
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceDisableAllSessionEvents`

---

#### Disable import in {{ en.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableImportInPrivateVault`

---

#### Disable Reveal Password
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRevealPassword`

---

#### Disable the Add-on creation and the Add-on Manager. Deprecated, use DisableAddOnEntries and DisableAddOnManager instead
`Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOn`

---

#### Disable the Add-on creation of entries
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOnEntries`

---

#### Disable the Add-on Manager
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOnManager`

---

#### Disable the custom image edition in the session configuration
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableCustomImage`

---

#### Disable the mouse jiggler option
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMouseJiggler`

---

#### Disable the session recording feature
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableSessionRecording`

---

#### Disable network scan
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableNetworkScan`

---

#### Disable Website Session and Website (legacy) Information (Deprecated) credential autofill after one minute
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableWebsiteCredentialAutofillAfterDelay`

---

#### Enable RDP API hooking
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableRDPHooking`

---

#### Force refresh before copy password/username/domain
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeCopyFromEntry`

---

#### Force refresh before execute entry
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeExecuteEntry`

---

#### Force refresh before view password
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeViewPassword`

---

#### Force User Specific Settings migration
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUserSpecificSettingsMigration`

---

#### Hide the custom port in RDP sessions
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HidePortInRDP`

---

#### Only allow the creation of credentials when inside the {{ en.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\OnlyAllowCredentialsInPrivateVault`

---

#### Select the default PowerShell version
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DefaultPowershellVersion`

---

### User interface

#### Dashboard Auto Focus Item on Tab Select
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardAutoFocusItemOnTabSelect`

---

#### Dashboard Auto Focus Tab on Item Select
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardAutoFocusTabOnItemSelect`

---

#### Disable all the local application tools like the Event Viewer or IIS
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableApplicationTools`

---

#### Dashboard Hide All Recordings Panels
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllRecordingsPanels`

---

#### Disable drag and drop in the connection list
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableDragAndDrop`

---

#### Disable import and export options
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableImportExportOptions`

---

#### Disable My Personal Credentials
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPersonalCredentials`

---

#### Disable Quick Connect
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableQuickConnect`

---

#### Disable the send message feature in the dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableSendMessageInDashboard`

#### Disable the About menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAbout`

---

#### Disable the Add-on Manager in the Tools menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsAddOnManager`

---

#### Disable the auto-focus of the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAutoFocusDashboard`

---

#### Disable the Chocolatey Console in the Tools menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsChocolateyConsole`

---

#### Disable the {{ en.DA }} usage
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOnlineAccount`

---

#### Disable the {{ en.DVLSCONSOLE }} in the Tools menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsDevolutionsServerConsole`

---

#### Disable the Error Report prompt
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableSendErrorReportDialog`

---

#### Disable the Extension Manager in the Tools menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsExtensionManager`

---

#### Disable the Help menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableHelp`

---

#### Disable the Local RDP/RemoteApp Manager in the Tools menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsLocalRDPRemoteAppManager`

---

#### Disable the menu File – Data Sources
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableFileDataSources`

---

#### Disable the menu File – Settings
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableFileOptions`

---

#### Disable the Open New Remote Desktop option in the Tools menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsOpenNewRemoteDesktop`

---

#### Disable the option to open with parameters
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOpenWithParameters`

---

#### Disable the PowerShell {{ en.RDM }} Cmdlet in the Tools menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsPowershellRDMCmdlet`

---

#### Disable the {{ en.RDMA }} in the Tools menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsRDMAgent`

---

#### Disable the Tools Ribbon tab and menu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsMenu`

---

#### Disable the Top Pane (Ribbon/Menubar)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableTopPane`

---

#### Force the main tree view to load with all nodes collapsed at launch
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceTreeViewCollapseAtLaunch`

---

#### Hide the Asset panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllAssetPanels`

---

#### Hide the Attachments panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllAttachmentsPanels`

---

#### Hide the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HideDashboard`

---

#### Hide the Documentation panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllDocumentationPanels`

---

#### Hide the Entries panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllEntriesPanels`

---

#### Hide the Logs panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllLogsPanels`

---

#### Hide the MacroScriptTools panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllMacroScriptToolsPanels`

---

#### Hide the Management Tools panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllManagementToolsPanels`

---

#### Hide Navigation Pane
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HideNavigationPane`

---

#### Hide the Overview panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllOverviewPanels`

---

#### Hide the Password List panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllPasswordListPanels`

---

#### Hide the Permissions panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllPermissionsPanels`

---

#### Hide the Referenced By panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllReferencedByPanels`

---

#### Hide the Sub Entries panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllSubConnectionsPanels`

---

#### Hide the Summary panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllSummaryPanels`

---

#### Hide the Task panel located in the Dashboard
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllTaskPanels`

---

#### Hide What's New Page
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HideWhatsNewPage`

---

#### Lock Navigation Pane
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\LockNavigationPane`

---

#### Select the default tab for the {{ en.NPANE }} on launch
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DefaultNavigationPaneTab`

---

#### SQLite Default Location
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\SQLiteDefaultLocation`

### Notes
Note 1: For each GPO’s corresponding Registry Key, the **%Root%** can either be **HKEY_LOCAL_MACHINE** or **HKEY_CURRENT_USER**, depending on how you want to enforce the policy. Please refer to [Microsoft's online documentation](https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users) to make the best choice for your organization's requirements.
