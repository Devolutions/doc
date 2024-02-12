---
eleventyComputed:
  title: Application logs
---
{% tabs %}
{% tabItem "Windows" %}
When encountering errors, you can verify the local application log, which is available in ***Help – Application Logs***.  

These logs are saved in **%LocalAppData%\Devolutions\RemoteDesktopManager\RemoteDesktopManager.log.db**. Logs are displayed as a list which can be filtered by date, message, version,or type of log.  
![View Application Log dialog](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10432.png) 

### Report 

A report of the logs can be saved in a text file as well. Simply navigate to the ***Report*** tab of the application log, then click on the ***Save*** button to select a location to save the file.  
![!!clip3568](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3568.png) 

### Clean up 

For security reason, it is a best practice is to clean up the application log once every month. To do so, in the application log, use the ***Clean Up*** feature.  

We strongly recommend to do a ***Delete all***, but this can be customized to delete specific logs by type, date or selection.  
![!!clip10434](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10434.png) 

### Increasing the Debug level 

When experiencing issues with {{ en.RDM }} our support team might ask you to increase the debug level of the application during the support process. We strongly suggest to only increase the debug level when requested by our support team.  

Increase the debug level in ***File – Options – Advanced***.  
![File – Options – Advanced – Debug level](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10813.png)
{% endtabItem %}

{% tabItem "macOS" %}
In case of error, you can verify the local application log, which is available from the menu in ***Help - View Application Log***.  
![Help ribbon](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10463.png) 

## Settings 

Those logs are saved in Macintosh HD/Users/Username/Library/Application Support/com.devolutions.remotedesktopmanager/RemoteDesktopManager.log. You can view it as a list which can then be filter by Date, Message, Version, Info, Error or Error Silent.  
![Application Logs](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10464.png) 

### Increasing the log level 

When requested by a Devolutions employee during a support process, you may be asked to increase the log level of the application to a higher level.  

This can be done via ***File - Preferences - Advanced***.  
![Advanced - Debug Level](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10465.png)
{% endtabItem %}
{% endtabs %}