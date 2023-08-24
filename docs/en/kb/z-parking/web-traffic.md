---
title: Web traffic
---
{% snippet icon.badgeInfo %}
Do not use this without a specific request from Devolution's support personnel.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
The trace file must NOT have a path specified, this requires that {{ en.RDM }} be installed in a folder other than Program Files. (Running with elevated privileges does not circumvent the UAC.)
{% endsnippet %}  

## Solution
```
<system.diagnostics>  
<trace autoflush="true" />  
<sources>  
<source name="System.Net" tracemode="protocolonly" maxdatasize="1024">  
<listeners>  
<add name="MyTraceFile"/>  
</listeners>  
</source>  
</sources>  
<sharedListeners>  
<add  
name="MyTraceFile"  
type="System.Diagnostics.TextWriterTraceListener"  
initializeData="System.Net.trace.log"  
/>  
</sharedListeners>  
<switches>  
<add name="System.Net" value="Verbose" />  
</switches>  
</system.diagnostics>  
```
## Advanced mode
To use with SvcTraceViewer.exe  

```
<sharedListeners>  
        <add  
        name="MyTraceFile"  
        type="System.Diagnostics.XmlWriterTraceListener"  
        initializeData="System.Net.trace.svclog"  
        />  
    </sharedListeners>  
```
