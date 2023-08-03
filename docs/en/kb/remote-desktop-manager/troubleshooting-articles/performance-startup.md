---
title: Startup performance
---
The startup performance of the application can be affected by two main events:  

1. Launching the "Shell".
1. Obtaining the content of the data source.
## Solution
Since getting the data involves an additional layer that may be the cause of a perceived slowness for the application to be ready, we require that you create a new empty XML data source to measure the application start-up time. This will in help determine if the issue lies with the shell or with the data source.  

Please consult {{ en.RDM }} [Startup performance](/kb/remote-desktop-manager/troubleshooting-articles/startup-performance/) for the first step. You can then consult [Performance – Data sources](/kb/remote-desktop-manager/troubleshooting-articles/performance-data-sources/) if you feel that there is an issue in that area.
