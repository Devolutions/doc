---
title: Configure Failed Request Tracing
---
# {{ en.TOPICTITLE }} 
{% snippet icon.badgeInfo %} 
The following steps are applicable on IIS 7.0 or higher. 
{% endsnippet %}
 
The following steps describe how to configure the Failed Request Tracing.  

Click on the link below to expand the section to configure the Failed Request Tracing using [appcmd.exe command](https://docs.microsoft.com/en-us/iis/get-started/getting-started-with-iis/getting-started-with-appcmdexe) . 
<table>
	<tr>
		<td>
<b>Enable and configure Failed Request Tracing</b>
		</td>
	</tr>
	<tr>
		<td>
appcmd.exe set config -section:system.applicationHost/sites &quot;/[name=&apos;Default Web Site&apos;].traceFailedRequestsLogging.enabled:True&quot; /commit:apphost 
		</td>
	</tr>
	<tr>
		<td>
appcmd.exe set config -section:system.applicationHost/sites &quot;/[name=&apos;Default Web Site&apos;].traceFailedRequestsLogging.maxLogFiles:10&quot; /commit:apphost 
		</td>
	</tr>
	<tr>
		<td>
appcmd.exe set config -section:system.applicationHost/sites &quot;/[name=&apos;Default Web Site&apos;].traceFailedRequestsLogging.directory:%SystemDrive%\inetpub\logs\FailedReqLogFiles&quot; /commit:apphost 
		</td>
	</tr>
	<tr>
		<td>
appcmd.exe set config &quot;Default Web Site&quot; -section:system.webServer/tracing/traceFailedRequests /+&quot;[path=&apos;*&apos;]&quot; 
		</td>
	</tr>
	<tr>
		<td>
appcmd.exe set config &quot;Default Web Site&quot; -section:system.webServer/tracing/traceFailedRequests /+&quot;[path=&apos;*&apos;].traceAreas.[provider=&apos;WWW Server&apos;,areas=&apos;Rewrite&apos;,verbosity=&apos;Verbose&apos;]&quot; 
		</td>
	</tr>
	<tr>
		<td>
appcmd.exe set config &quot;Default Web Site&quot; -section:system.webServer/tracing/traceFailedRequests /[path=&apos;*&apos;].failureDefinitions.statusCodes:&quot;400-599&quot; 
		</td>
	</tr>
</table>


1. Open IIS Manager , expand the ***root node*** , expand ***Sites*** and then select ***Default Web Sites*** . 
![KB4327.png](/img/en/kb/KB4327.png) 
1. In ***Actions*** pane on the right, select ***Failed Requests Tracing*** ....  
![KB4328.png](/img/en/kb/KB4328.png) 
1. Select the ***Enable*** check box and then click ***OK*** . The Directory target and the Maximum number of trace files can be modified.  
![KB4329.png](/img/en/kb/KB4329.png) 
1. Expand ***Default Web Site*** and select the Web site to be traced.  
![KB4330.png](/img/en/kb/KB4330.png) 
1. Double click on the ***Failed Request Tracing Rules*** icon of the selected Web Site.  
![KB4331.png](/img/en/kb/KB4331.png) 
1. In the Actions pane on the right, click on ***Add*** ... to add a new rule.  
![KB4332.png](/img/en/kb/KB4332.png) 
1. Select All content (*) and click ***Next*** .  
![KB4333.png](/img/en/kb/KB4333.png) 
1. Select the ***Status Code(s)*** check box. Enter the type of the status code to be traced, in this case type in the ***Status code(s)*** is set to monitor everything between code 200 to 599. Set the appropriate status code and click ***Next*** .  
![KB4334.png](/img/en/kb/KB4334.png) 
1. The last setting is to select the providers of the tracing. Select ***WWW*** Server . For each of them, set the ***Verbosity*** to ***Verbose*** . Finally, check Rewrite and click ***Finish*** .  
![KB4335.png](/img/en/kb/KB4335.png) 
1. The tracing rule is now defined.  
![KB4336.png](/img/en/kb/KB4336.png) 

