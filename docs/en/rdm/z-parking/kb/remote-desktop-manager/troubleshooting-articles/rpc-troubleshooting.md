---
eleventyComputed:
  title: RPC troubleshooting
---
The RPC server is unavailable (exception from HRESULT: 0X800706BA)  

This error may occur in the normal operation of {{ en.RDM }} The root causes are network connectivity or stopped Windows services.
## Solution
1. Ensure the host is properly identified (Name or IP address) and it is indeed running and accepting network traffic.
1. Ensure the host firewall allows inbound traffic for Windows Management Instrumentation.
1. Ensure the following services are started and are set to automatic startup type.  

* TCP/IP NetBIOS Helper  
* Remote Procedure Call (RPC)  
* Windows Management Instrumentation  
