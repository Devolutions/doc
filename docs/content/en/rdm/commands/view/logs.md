---
eleventyComputed:
  title: Logs
  description: When using {{ en.RDM }} locally with an individual type data source, the Activity Logs, normally found in the ***View*** section of the View tab, are not available.
---
{% tabs %}
{% tabItem "Windows" %}
When using {{ en.RDM }} locally with an individual type data source, the [***Activity Logs***](/rdm/windows/commands/view/view/activity-logs/), normally found in the ***View*** section of the ***View*** tab, are not available. In this situation, the ***Logs*** section appears in the ***View*** tab.  
![Local Connection Logs Button](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2046.png) 

{% snippet icon.badgeInfo %} 
The ***Local Connection Logs*** replace the [***Activity Logs***](/rdm/windows/commands/view/view/activity-logs/) if you do not have the sufficient permissions to view them. 
{% endsnippet %}
 
### Local Connection Logs 

In the ***Logs*** section, you will find the ***Local Connection Logs*** feature, which is useful if you still want to access your local logs. Clicking on it opens a window containing all your local logs in chronological order (oldest to newest). You can scroll through the list to find the logs you are looking for.  
![Local Connection Logs Window](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2047.png) 

The buttons at the bottom of the window give you more options. 

| OPTION     | DESCRIPTION                                                                    |
|------------|--------------------------------------------------------------------------------|
| Open       | Open the local folder on your computer where the logs are stored.              |
| Clear Log  | Clear the logs from the ***Local Connection Logs*** window. The logs are not erased from the folder. |
| Copy       | Copy the logs to your clipboard as they appear in the ***Local Connection Logs*** window. |
{% endtabItem %}

{% tabItem "macOS" %}
When using {{ en.RDMMAC }} with a data source without a database or if you do not possess the correct permissions, the ***Activity Logs***, normally found in the ***View*** tab, are not available. In this situation, the ***Local Connection Logs*** appear in the ***View*** tab instead.  
![Local Connection Logs](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac0024.png) 

{% snippet icon.badgeInfo %} 
The ***Local Connection Logs*** replace the ***Activity Logs*** if you do not have the sufficient permissions to view them. 
{% endsnippet %}
 
### Local Connection Logs 
In the ***View*** section, you will find the ***Local Connection Logs*** feature, which is useful if you still want to access your local logs. Clicking on it opens a window containing all your local logs in chronological order (oldest to newest). You can scroll through the list to find the logs you are looking for. 
The buttons at the bottom of the window give you more options.  
![Local Connection Logs Window](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac0035.png) 

| OPTION    | DESCRIPTION |
|-----------|-------------|
| Open      | Open the local folder on your computer where the logs are stored. |
| Clear Log | Clear the logs from the ***Local Connection Logs*** window. The logs are not erased from the folder. |
| Copy      | Copy the logs to your clipboard as they appear in the ***Local Connection Logs*** window. |
{% endtabItem %}
{% endtabs %}