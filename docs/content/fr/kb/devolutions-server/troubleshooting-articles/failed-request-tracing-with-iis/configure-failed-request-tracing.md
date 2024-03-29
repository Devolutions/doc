---
eleventyComputed:
  title: Configure failed request tracing
  description: There are two methods for configuring the failed request tracing, using either the appcmd.exe command or the IISManager app.
---
There are two methods for configuring the failed request tracing:
* [Using the appcmd.exe command](/kb/devolutions-server/troubleshooting-articles/failed-request-tracing-with-iis/configure-failed-request-tracing/#using-the-appcmdexe-command)
* [Via the IISManager app](/kb/devolutions-server/troubleshooting-articles/failed-request-tracing-with-iis/configure-failed-request-tracing/#via-the-iismanager-app)

## Using the [appcmd.exe command](https://docs.microsoft.com/en-us/iis/get-started/getting-started-with-iis/getting-started-with-appcmdexe)
| |
|------------------------|
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.enabled:True" /commit:apphost |
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.maxLogFiles:10" /commit:apphost |
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.directory:%SystemDrive%\inetpub\logs\FailedReqLogFiles" /commit:apphost |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /+"[path='*']" |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /+"[path='*'].traceAreas.[provider='WWW Server',areas='Rewrite',verbosity='Verbose']" |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /[path='*'].failureDefinitions.statusCodes:"400-599" |

{% snippet icon.badgeInfo %}
Note that the steps above only apply to IIS 7.0 or later, and that the commands work best when cmd.exe is run as an administrator.
{% endsnippet %}

## Via the IISManager app

1. In IIS Manager, expand the root node, expand ***Sites***, then select ***Default Web Site***.
![Root node – Sites – Default Web Site](https://cdnweb.devolutions.net/docs/en/kb/DVLS4006_2024_1.png)
1. In the ***Actions*** pane on the right, select ***Failed Request Tracing***.
![Actions – Failed Request Tracing](https://cdnweb.devolutions.net/docs/en/kb/DVLS4007_2024_1.png)
1. Check the ***Enable*** box (mandatory). The ***Directory*** target and ***Maximum number of trace files*** options can be customized (optional). Click ***OK*** when done.
![Edit Website Failed Request Tracing Settings](https://cdnweb.devolutions.net/docs/en/kb/DVLS4008_2024_1.png)
1. Expand ***Default Web Site***, then select the website to be traced.
![Select the website](https://cdnweb.devolutions.net/docs/en/kb/DVLS4009_2024_1.png)
1. Double-click on the ***Failed Request Tracing Rules*** icon of the selected website.
![Failed Request Tracing Rules](https://cdnweb.devolutions.net/docs/en/kb/DVLS4010_2024_1.png)
1. In the ***Actions*** pane on the right, click on ***Add*** to add a new rule.
![Actions – Add](https://cdnweb.devolutions.net/docs/en/kb/DVLS4011_2024_1.png)
1. Select ***All content (*)***, then click ***Next***.
![Trace all content](https://cdnweb.devolutions.net/docs/en/kb/DVLS4012_2024_1.png)
1. Check the ***Status Code(s)*** box, then enter the type of the status code to be traced. In this case, the ***Status code(s)*** is set to monitor everything from codes 400 to 599. Click ***Next*** when done.
![Status code(s)](https://cdnweb.devolutions.net/docs/en/kb/DVLS4013_2024_1.png)
1. Select the providers of the tracing. For each provider, set the ***Verbosity*** to ***Verbose*** and select all ***Areas***. In this case, the ***WWW Server*** provider was selected.
![Providers](https://cdnweb.devolutions.net/docs/en/kb/DVLS4014_2024_1.png)
1. Click ***Finish***.
The tracing rule is now defined.
![Defined tracing rule](https://cdnweb.devolutions.net/docs/en/kb/DVLS4015_2024_1.png)