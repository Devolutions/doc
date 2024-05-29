---
eleventyComputed:
  title: Unable to save recording info to {{ en.DVLS }}
  description: In {{ en.DVLS }}, in the processor.log file of the Recording Server, you may encounter the error message "Unable to save recording info to DPS".
  keywords:
  - recording server
---
In {{ en.DVLS }}, in the processor.log file of the Recording Server, you may encounter the error message `Unable to save recording info to DPS`.
```
2022-12-21 08:59:21,085  INFO Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Frame count: 26, FPS: 5
2022-12-21 08:59:21,092  INFO Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Saving recording to DPS
2022-12-21 08:59:21,410 ERROR Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Error: 
2022-12-21 08:59:21,411 ERROR Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Detail: 
2022-12-21 08:59:21,411 ERROR Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Unable to save recording info to DPS
2022-12-21 08:59:21,419  INFO Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Finished processing E:\Recording\collector\76d9c5e1-ac88-44bf-9b46-94f1adf7faa7.pcap.
```

## Solution
Make sure that the DPSURL parameter in the **processor.config** file contains a URL that is reachable from the machine where the Recording Server is installed and that the URL does not end with "/".
```
<?xml version="1.0"?>
<Settings>
  <DPSApiKey>xxxxxxxxxxxx</DPSApiKey>
  <DPSApiKeyPasswordEncrypted>xxxxxxxxxxxx</DPSApiKeyPasswordEncrypted>
  <DPSUrl>https://devolutions237.devolutions.loc</DPSUrl>
  <MaxParallelProcess>8</MaxParallelProcess>
  <MonitorFolder>C:\Temp\Recording\collector</MonitorFolder>
  <OutputFolder>C:\Temp\Recording</OutputFolder>
</Settings>
```
