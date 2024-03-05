---
eleventyComputed:
  title: Configure failed request tracing
  description: The following steps describe how to configure the failed request tracing.
---
The following steps describe how to configure the failed request tracing using [appcmd.exe command](https://docs.microsoft.com/en-us/iis/get-started/getting-started-with-iis/getting-started-with-appcmdexe). Note that they only apply to IIS 7.0 or later.

| Enable and configure failed request tracing |
| ------------------------------------------- |
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.enabled:True" /commit:apphost |
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.maxLogFiles:10" /commit:apphost |
| appcmd.exe set config -section:system.applicationHost/sites "/[name='Default Web Site'].traceFailedRequestsLogging.directory:%SystemDrive%\inetpub\logs\FailedReqLogFiles" /commit:apphost |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /+"[path='*']" |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /+"[path='*'].traceAreas.[provider='WWW Server',areas='Rewrite',verbosity='Verbose']" |
| appcmd.exe set config "Default Web Site" -section:system.webServer/tracing/traceFailedRequests /[path='*'].failureDefinitions.statusCodes:"400-599" |

1. In IIS Manager, expand the root node, expand ***Sites***, then select ***Default Web Site***.
![Root node – Sites – Default Web Site](https://cdnweb.devolutions.net/docs/en/kb/KB4327.png)
1. In the ***Actions*** pane on the right, select ***Failed Request Tracing***.
![Actions – Failed Request Tracing](https://cdnweb.devolutions.net/docs/en/kb/KB4328.png)
1. Check the ***Enable*** box (mandatory). The ***Directory*** target and ***Maximum number of trace files*** options can be customized (optional). Click ***OK*** when done.
![Edit Website Failed Request Tracing Settings](https://cdnweb.devolutions.net/docs/en/kb/KB4329.png)
1. Expand ***Default Web Site***, then select the website to be traced.
![Select the website](https://cdnweb.devolutions.net/docs/en/kb/KB4330.png)
1. Double-click on the ***Failed Request Tracing Rules*** icon of the selected website.
![Failed Request Tracing Rules](https://cdnweb.devolutions.net/docs/en/kb/KB4331.png)
1. In the ***Actions*** pane on the right, click on ***Add*** to add a new rule.
![Actions – Add](https://cdnweb.devolutions.net/docs/en/kb/KB4332.png)
1. Select ***All content (*)***, then click ***Next***.
![Trace all content](https://cdnweb.devolutions.net/docs/en/kb/KB4333.png)
1. Check the ***Status Code(s)*** box, then enter the type of the status code to be traced. In this case, the ***Status code(s)*** is set to monitor everything from codes 400 to 599. Click ***Next*** when done.
![Status code(s)](https://cdnweb.devolutions.net/docs/en/kb/KB4334.png)
1. Select the providers of the tracing. For each provider, set the ***Verbosity*** to ***Verbose*** and check ***Rewrite*** in ***Arear***.
![Providers](https://cdnweb.devolutions.net/docs/en/kb/KB4335.png)
1. Click ***Finish***.
The tracing rule is now defined.
![Defined tracing rule](https://cdnweb.devolutions.net/docs/en/kb/KB4336.png)
