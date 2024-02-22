---
eleventyComputed:
  title: Extract TeamViewer ID
---
{% tabs %}
{% tabItem "Windows" %}
You can use Powershell to extract the TeamViewer ID from a session.

## Settings
Here is a script to extract the TeamViewer ID from a session:  

```powershell
$sessions = Get-RDM-Session | where {$_.Session.Kind -eq "TeamViewer"} 
$sessions[0].Session.GetProperty("TeamViewer", "ID") 
```
{% endtabItem %}
{% endtabs %}