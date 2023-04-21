---
title: Configure Failed Request Tracing
---
{% snippet icon.badgeInfo %}
The following steps are applicable on IIS 7.0 or higher.
{% endsnippet %}

The following steps describe how to configure the Failed Request Tracing.

Click on the link below to expand the section to configure the Failed Request Tracing using [appcmd.exe command](https://docs.microsoft.com/en-us/iis/get-started/getting-started-with-iis/getting-started-with-appcmdexe).

| Enable and configure Failed Request Tracing |
| ------------------------------------------- |
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.enabled:True" /commit:apphost |
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.maxLogFiles:10" /commit:apphost |
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.directory:%SystemDrive%\inetpub\logs\FailedReqLogFiles" /commit:apphost |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /+"[path='*']" |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /+"[path='*'].traceAreas.[provider='WWW Server',areas='Rewrite',verbosity='Verbose']" |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /[path='*'].failureDefinitions.statusCodes:"400-599" |

1. Open IIS Manager, expand the ***root node***, expand ***Sites*** and then select ***Default Web Sites***. 
![!!KB4327.png](/img/en/kb/KB4327.png) 
1. In ***Actions*** pane on the right, select ***Failed Requests Tracing***....  
![!!KB4328.png](/img/en/kb/KB4328.png) 
1. Select the ***Enable*** check box and then click ***OK***. The Directory target and the Maximum number of trace files can be modified.  
![!!KB4329.png](/img/en/kb/KB4329.png) 
1. Expand ***Default Web Site*** and select the Web site to be traced.  
![!!KB4330.png](/img/en/kb/KB4330.png) 
1. Double click on the ***Failed Request Tracing Rules*** icon of the selected Web Site.  
![!!KB4331.png](/img/en/kb/KB4331.png) 
1. In the Actions pane on the right, click on ***Add***... to add a new rule.  
![!!KB4332.png](/img/en/kb/KB4332.png) 
1. Select All content (*) and click ***Next***.  
![!!KB4333.png](/img/en/kb/KB4333.png) 
1. Select the ***Status Code(s)*** check box. Enter the type of the status code to be traced, in this case type in the ***Status code(s)*** is set to monitor everything between code 200 to 599. Set the appropriate status code and click ***Next***.  
![!!KB4334.png](/img/en/kb/KB4334.png) 
1. The last setting is to select the providers of the tracing. Select ***WWW*** Server. For each of them, set the ***Verbosity*** to ***Verbose***. Finally, check Rewrite and click ***Finish***.  
![!!KB4335.png](/img/en/kb/KB4335.png) 
1. The tracing rule is now defined.  
![!!KB4336.png](/img/en/kb/KB4336.png) 