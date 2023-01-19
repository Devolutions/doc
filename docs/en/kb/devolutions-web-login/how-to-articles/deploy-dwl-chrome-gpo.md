---
eleventyComputed:
  title: Deploy {{ en.DWL }} in Chrome using GPO
keywords:
- DWL
- GPO
---
# {{ en.TOPICTITLE }}  
{% snippet icon.badgeInfo %}
IMPORTANT NOTE (for {{ en.DWL }} versions prior to 2021.2.3.0)
The settings deployed with the group policy object (GPO) are only enforced when the extension is used for the first time. This means that the settings will not be enforced and changed if you change the settings in the GPO and the extension has already been used by a user at least once.
{% endsnippet %}  

### Configuring extensions by policy on Windows 10 for Chrome
1. Open ***Group Policy Management*** ( ***Start - Run - GPMC.msc*** ).
1. Right-click on the GPO list and select ***New***
1. In the ***New GPO*** window, create your new object then click on ***OK***
1. Right-click on your new GPO and select ***Edit***
1. Select Registry located in Computer Configuration – Preferences – Windows Settings – Registry or User Configuration – Preferences – Windows Settings – Registry according to your needs.
1. Right-click in the ***Registry*** items list and select ***New – Registry Item***
1. Set the ***Action*** parameter to Replace to modify the existing rule or to create it if it does not exist.
1. Set the ***Hive*** parameter to ***HKEY_LOCAL_MACHINE*** or ***HKEY_CURRENT_USER*** according to your needs.
1. Enter ***SOFTWARE\Policies\Google\Chrome\3rdparty\extensions\neimonjjffhehnojilepgfejkneaidmo\policy*** in the ***Key Path*** text field.
1. Enter ***Settings*** in the ***Value name*** text field.
1. Select REG_SZ in the ***Value type*** drop-down list.
1. Write the JSON settings string in the ***Value data*** text field. See the <a href="#values">Values</a> section below for an example.
1. Click on ***OK***  
![KB8106.png](/img/en/kb/KB8106.png)
1. In ***Group Policy Management*** , configure the GPO ***Links*** and ***Security Filtering*** according to your needs.
### Default settings
All attributes can have their value changed or their key removed.
```
{
&quot;activateBeta&quot;: false,
&quot;autoFillEntryOnLoad&quot;: false,
&quot;autoRetrieveCredentials&quot;: true,
&quot;autoSubmitFormOnFill&quot;: false,
&quot;autofillBasicAuthentication&quot;: false,
&quot;destinationGroup&quot;: &quot;Devolutions Web Login&quot;,
&quot;disableAnalytics&quot;: false,
&quot;dvlsActivated&quot;: false,
&quot;dvlsAutoFillEntryOnLoad&quot;: false,
&quot;dvlsAutoRetrieveCredentials&quot;: true,
&quot;dvlsAutoSubmitFormOnFill&quot;: false,
&quot;dvlsAutofillBasicAuthentication&quot;: false,
&quot;dvlsDestinationFolder&quot;: &quot;Devolutions Web Login&quot;,
&quot;dvlsMatchDetectionType&quot;: 2,
&quot;dvlsShouldIncludePrivate&quot;: true,
&quot;dvlsShowFavicon&quot;: false,
&quot;dvlsSyncAllAvailableVaults&quot;: false,
&quot;dvlsUrl&quot;: &quot;&quot;,
&quot;enableContextMenu&quot;: true,
&quot;enableNativeMessaging&quot;: false,
&quot;filledFieldsColor&quot;: &quot;#b3d9ff&quot;,
&quot;hubActivated&quot;: false,
&quot;hubAutoFillEntryOnLoad&quot;: false,
&quot;hubAutoSubmitFormOnFill&quot;: false,
&quot;hubAutofillBasicAuthentication&quot;: false,
&quot;hubDefaultLoginUsername&quot;: &quot;&quot;,
&quot;hubMatchDetectionType&quot;: 2,
&quot;hubPersonalActivated&quot;: false,
&quot;hubPersonalAutoFillEntryOnLoad&quot;: false,
&quot;hubPersonalAutoSubmitFormOnFill&quot;: false,
&quot;hubPersonalDefaultLoginUsername&quot;: &quot;&quot;,
&quot;hubPersonalLucidUrl&quot;: &quot;https://login.devolutions.com&quot;,
&quot;hubPersonalMatchDetectionType&quot;: 2,
&quot;hubPersonalServerUrl&quot;: &quot;https://hub-server.devolutions.com&quot;,
&quot;hubPersonalShowFavicon&quot;: true,
&quot;hubShouldIncludePrivate&quot;: true,
&quot;hubShowFavicon&quot;: true,
&quot;hubSyncAllAvailableVaults&quot;: false,
&quot;hubUrl&quot;: &quot;&quot;,
&quot;lucidUrl&quot;: &quot;https://login.devolutions.com&quot;,
&quot;rdmActivated&quot;: false,
&quot;rdmApplicationCode&quot;: &quot;&quot;,
&quot;rdmAutoFillEntryOnLoad&quot;: false,
&quot;rdmAutoRetrieveCredentials&quot;: true,
&quot;rdmAutoSubmitFormOnFill&quot;: false,
&quot;rdmAutofillBasicAuthentication&quot;: false,
&quot;rdmDefaultDestinationVaultIsPrivate&quot;: true,
&quot;rdmDefaultPortUsage&quot;: true,
&quot;rdmDestinationFolder&quot;: &quot;Devolutions Web Login&quot;,
&quot;rdmEnableNativeMessaging&quot;: false,
&quot;rdmPort&quot;: 19443,
&quot;rdmShowFavicon&quot;: false,
&quot;rdmUseLegacyApi&quot;: false,
&quot;shouldColorFilledFields&quot;: false,
&quot;showIconInFields&quot;: true,
&quot;showSaveSiteDialog&quot;: true,
&quot;theme&quot;: 0,
&quot;useLegacyApi&quot;: false
}
```
### Default admin Settings
```
{
&#160; &#160;&quot;adminSettings&quot;: {
&#160; &#160; &#160; &#160;&quot;disableSettingsPage&quot;: false,
&#160; &#160; &#160; &#160;&quot;setGPOSettings&quot;: &quot;OnInstall&quot;
&#160; &#160;}
}
```
### Values
<a name="values"></a>
disableSettingsPage  

Hide the settings button and disable the settings page in {{ en.DWL }} for the end-user.  
Possible values:  
* ***True***
* ***False*** (Default)  

setGPOSettings  

Set when the GPO settings are used.  
Possible values:  
* OnInstall (default): Set the value the GPO settings when the extension is installed.
* AlwaysOverride : Always override the value from the GPO settings when the extension is started.
* AlwaysUseDefaultAndOverride : Use the default settings for all settings not in the GPO and override the values from the GPO when the extension is started.
### Example
* Activate {{ en.DPS }}
* Set ***https<area>://localhost/mydpsurl*** as {{ en.DPS }} URL.
* Disable the settings page.
* Always override the settings in the ***settings*** section when the extension starts.
```
{
&#160; &#160;&quot;settings&quot;: {
&#160; &#160; &#160; &#160;&quot;dvlsActivated&quot;: true,
&#160; &#160; &#160; &#160;&quot;dvlsUrl&quot;: &quot;https://localhost/mydpsurl&quot;
&#160; &#160;},
&#160; &#160;&quot;adminSettings&quot;: {
&#160; &#160; &#160; &#160;&quot;disableSettingsPage&quot;: true,
&#160; &#160; &#160; &#160;&quot;setGPOSettings&quot;: &quot;AlwaysOverride&quot;
&#160; &#160;}
}
```
### configuring {{ en.DWL }} extension to be automatically pinned on the Chrome toolbar
1. Create a new GPO rule to have the {{ en.DWL }} extension automatically pinned on the Chrome toolbar.
1. Select Registry located in Computer Configuration – Preferences – Windows Settings – Registry or User Configuration – Preferences – Windows Settings – Registry according to your needs.
1. In the registry properties, set the Action parameter to ***Replace*** to change the existing rule or to create it if it does not exist.
1. Set the Hive parameter to ***HKEY_LOCAL_MACHINE*** or ***HKEY_CURRENT_USER*** according to your needs.
1. Enter ExtensionSettings in the ***Value name*** text field.
1. Select REG_SZ in the ***Value type*** drop-down list.
1. Enter the following JSON settings string in the Value data text field:
```
{&quot;neimonjjffhehnojilepgfejkneaidmo&quot;: {&quot;installation_mode&quot;: &quot;force_installed&quot;,&quot;update_url&quot;:&quot;https<area>://clients2.google.com/service/update2/crx&quot;,&quot;toolbar_pin&quot;:&quot;force_pinned&quot;}}
```
8. Click on ***OK*** and update the GPO rules on your local machine.  
![KB8105.png](/img/en/kb/KB8105.png)
### References
[https://www.chromium.org/administrators](https://www.chromium.org/administrators)  
[https://www.chromium.org/administrators/complex-policies-on-windows](https://www.chromium.org/administrators/complex-policies-on-windows)
