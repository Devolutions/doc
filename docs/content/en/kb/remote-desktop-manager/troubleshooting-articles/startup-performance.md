---
eleventyComputed:
  title: Startup performance
---
The application performance must be validated with an empty data source. Create a new empty XML data source and select it as being the current data source.  

If you experience slow startup times, there are a few things to try in order to reduce the time before the application is available for use.

## Problem 1
{{ en.RDM }} is slow to open.
### Solution
1. In {{ en.RDM }}, go to ***File – Options – Advanced***.
1. Set ***Hardware acceleration*** to ***DirectX*** and ***Optimize UI performance*** to ***Yes***.

![DirectX Hardware Acceleration and Optimized UI Performance](https://webdevolutions.azureedge.net/docs/en/kb/KB2184.png)

3. Click ***OK*** to save your changes, then restart {{ en.RDM }} to apply them.

## Problem 2
Slow startup on machines that are not connected to the internet.
### Solution
For your security, we "sign" our program with a code signature. This results in the validity of the signature being checked at application startup. If the machine is not connected to the internet, the application will wait for a response until a timeout occurs. For detailed explanations please read the following:  

[Improving Application Start Up Time](https://docs.microsoft.com/fr-fr/archive/blogs/amolravande/improving-application-start-up-time-generatepublisherevidence-setting-in-machine-config)  

[https://blogs.technet.microsoft.com/markrussinovich/2009/05/23/the-case-of-the-slow-keynote-demo/](https://blogs.technet.microsoft.com/markrussinovich/2009/05/23/the-case-of-the-slow-keynote-demo/)  

The workaround is to create a text file in the {{ en.RDM }} installation folder named **RemoteDesktopManager.exe.config** that must contain the following:  

```
<configuration>  
    <runtime>  
        <generatePublisherEvidence enabled="false"/>  
    </runtime>  
</configuration>  
```
## Problem 3
Prevent internet access.  

Every time you start {{ en.RDM }}, the application will try to connect on [https://devolutions.net/remote-desktop-manager/clientinternal/enterprisenews](https://devolutions.net/remote-desktop-manager/clientinternal/enterprisenews). You should prevent all internet access from the application.
### Solution
Add the line `<DisableAnalytics>true</DisableAnalytics>` to your [**RemoteDesktopManager.cfg**](/rdm/windows/installation/client/configuration-file-location/) file. You can place it above the last line, which should contain </Option>.  

You can find the configuration file using ***File – Options – Advanced*** and click on the blue hyperlink at the bottom.  

![!!KB4090](https://webdevolutions.azureedge.net/docs/en/kb/KB4090.png)
## Problem 4
Native image generation.
### Solution
{{ en.RDM }} is aNET application. This means that the code is delivered in an intermediate format. It is then processed on your local machine in order to generate what is called a Native Image. Sometimes, this process can be slow. It can also reoccur after certain conditions are met. For these reasons, we deliver a batch file to process all of our files at once. You will find this file in the installation folder of {{ en.RDM }} It is called OptimizeRDM.bat.  

Open a Command Window using Run as Administrator and launch that script.
## Problem 5
Antivirus.
### Solution
If the profiler log reveals slowness on one of the 3 offline loading (between 10 to 30 seconds), it might be caused by an antivirus limiting the access to the path. Whitelisting the path can allow to significantly reduce the slowness.  

We do not recommend turning off the antivirus protection in risky conditions. You should close all browsers and ensure that only essential applications are running. We also suggest this step only for a short duration in order to see the startup time of the application change significantly.  

If your antivirus application allows it, simply turn off monitoring of {{ en.RDM }} 's installation folder. If you are comfortable with turning of the whole antivirus protection, do this to test the startup time.  

There is nothing we can do in this case. It is only a step that helps in isolating the cause.
