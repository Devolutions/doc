---
eleventyComputed:
  title: Deploy {{ en.DWL }} in Google Chrome using GPOs
  keywords:
  - GPO
---
{% snippet icon.badgeInfo %}
IMPORTANT NOTE (for {{ en.DWL }} versions prior to 2021.2.3.0)
The settings deployed with the group policy object (GPO) are only enforced when the extension is used for the first time. This means that the settings will not be enforced and changed if you change the settings in the GPO and the extension has already been used by a user at least once.
{% endsnippet %}

## Configuring extensions by policy on Windows 10 for Chrome

1. Open ***Group Policy Management*** (***Start - Run - GPMC.msc***).
1. Right-click on the GPO list and select ***New***.
1. In the ***New GPO*** window, create your new object then click on ***OK***.
1. Right-click on your new GPO and select ***Edit***.
1. Select ***Registry*** located in ***Computer Configuration – Preferences – Windows Settings – Registry or User Configuration – Preferences – Windows Settings – Registry*** according to your needs.
1. Right-click in the ***Registry*** items list and select ***New – Registry Item***.
1. Set the ***Action*** parameter to Replace to modify the existing rule or to create it if it does not exist.
1. Set the ***Hive*** parameter to **HKEY_LOCAL_MACHINE** or **HKEY_CURRENT_USER** according to your needs.
1. Enter ***SOFTWARE\Policies\Google\Chrome\3rdparty\extensions\neimonjjffhehnojilepgfejkneaidmo\policy*** in the ***Key Path*** text field.
1. Enter ***Settings*** in the ***Value name*** text field.
1. Select REG_SZ in the ***Value type*** drop-down list.
1. Write the JSON settings string in the ***Value data*** text field. See the <a href="#values">Values</a> section below for an example.
1. Click on ***OK***.  
![!!KB8106.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8106.png)
1. In ***Group Policy Management***, configure the GPO ***Links*** and ***Security Filtering*** according to your needs.

## Example <a name="Example"></a>

- Activate {{ en.DVLS }}
- Set ***https<area>://localhost/mydvlsurl*** as {{ en.DVLS }} URL.
- Disable the settings page.
- Always override the settings in the ***settings*** section when the extension starts.

```
{
  "settings": {
    "dvlsActivated": true,
    "dvlsUrl": "https://localhost/mydvlsurl"
  },
  "adminSettings": {
    "disableSettingsPage": true,
    "setGPOSettings": "AlwaysOverride"
  }
}
```

## Default settings

All attributes can have their value changed or their key removed. 

```
{
  "settings": {
    "activateBeta": false,
    "autoFillEntryOnLoad": false,
    "autoRetrieveCredentials": true,
    "autoSubmitFormOnFill": false,
    "autofillBasicAuthentication": false,
    "destinationGroup": "{{ en.DWL }}",
    "disableAnalytics": false,
    "dvlsActivated": false,
    "dvlsAutoFillEntryOnLoad": false,
    "dvlsAutoRetrieveCredentials": true,
    "dvlsAutoSubmitFormOnFill": false,
    "dvlsAutofillBasicAuthentication": false,
    "dvlsDestinationFolder": "{{ en.DWL }}",
    "dvlsMatchDetectionType": 2,
    "dvlsShouldIncludePrivate": true,
    "dvlsShowFavicon": false,
    "dvlsSyncAllAvailableVaults": false,
    "dvlsUrl": "",
    "enableContextMenu": true,
    "enableNativeMessaging": false,
    "filledFieldsColor": "#b3d9ff",
    "hubActivated": false,
    "hubAutoFillEntryOnLoad": false,
    "hubAutoSubmitFormOnFill": false,
    "hubAutofillBasicAuthentication": false,
    "hubDefaultLoginUsername": "",
    "hubMatchDetectionType": 2,
    "hubPersonalActivated": false,
    "hubPersonalAutoFillEntryOnLoad": false,
    "hubPersonalAutoSubmitFormOnFill": false,
    "hubPersonalDefaultLoginUsername": "",
    "hubPersonalLucidUrl": "https://login.devolutions.com",
    "hubPersonalMatchDetectionType": 2,
    "hubPersonalServerUrl": "https://hub-server.devolutions.com",
    "hubPersonalShowFavicon": true,
    "hubShouldIncludePrivate": true,
    "hubShowFavicon": true,
    "hubSyncAllAvailableVaults": false,
    "hubUrl": "",
    "lucidUrl": "https://login.devolutions.com",
    "rdmActivated": false,
    "rdmApplicationCode": "",
    "rdmAutoFillEntryOnLoad": false,
    "rdmAutoRetrieveCredentials": true,
    "rdmAutoSubmitFormOnFill": false,
    "rdmAutofillBasicAuthentication": false,
    "rdmDefaultDestinationVaultIsPrivate": true,
    "rdmDefaultPortUsage": true,
    "rdmDestinationFolder": "{{ en.DWL }}",
    "rdmEnableNativeMessaging": false,
    "rdmPort": 19443,
    "rdmShowFavicon": false,
    "rdmUseLegacyApi": false,
    "shouldColorFilledFields": false,
    "showIconInFields": true,
    "showSaveSiteDialog": true,
    "theme": 0,
    "useLegacyApi": false
  }
}
```

## Default admin Settings

All attributes can have their value changed or their key removed. If this section is added in the JSON string, a comma needs to be added at the end of the settings section above. See the sample in the <a href="#Example">Example</a> section about it.

```
{
  "adminSettings": {
    "disableSettingsPage": false,
    "setGPOSettings": "OnInstall"
  }
}
```

## Values
<a name="values"></a>

disableSettingsPage

Hide the settings button and disable the settings page in {{ en.DWL }} for the end-user.  
Possible values:

- ***True***
- ***False*** (Default)

setGPOSettings

Set when the GPO settings are used.  
Possible values:

- OnInstall (default): Set the value the GPO settings when the extension is installed.
- AlwaysOverride: Always override the value from the GPO settings when the extension is started.
- AlwaysUseDefaultAndOverride: Use the default settings for all settings not in the GPO and override the values from the GPO when the extension is started.

## Configuring {{ en.DWL }} extension to be automatically pinned on the Chrome toolbar

1. Create a new GPO rule to have the {{ en.DWL }} extension automatically pinned on the Chrome toolbar.
1. Select Registry located in Computer Configuration – Preferences – Windows Settings – Registry or User Configuration – Preferences – Windows Settings – Registry according to your needs.
1. In the registry properties, set the Action parameter to ***Replace*** to change the existing rule or to create it if it does not exist.
1. Set the Hive parameter to **HKEY_LOCAL_MACHINE** or **HKEY_CURRENT_USER** according to your needs.
1. Enter ExtensionSettings in the ***Value name*** text field.
1. Select REG_SZ in the ***Value type*** drop-down list.
1. Enter the following JSON settings string in the Value data text field:
   ```
   {
     "neimonjjffhehnojilepgfejkneaidmo": {
       "installation_mode": "force_installed",
       "update_url": "https<area>://clients2.google.com/service/update2/crx",
       "toolbar_pin": "force_pinned"
     }
   }
   ```
1. Click on ***OK*** and update the GPO rules on your local machine.  
![!!KB8105.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8105.png)

## References

[https://www.chromium.org/administrators](https://www.chromium.org/administrators)  
[https://www.chromium.org/administrators/complex-policies-on-windows](https://www.chromium.org/administrators/complex-policies-on-windows)
