---
eleventyComputed:
  title: Startup performance
  description: The application performance must be validated with an empty data source. Create a new empty XML data source and select it as being the current data source.
---
The application performance must be validated with an empty data source. Create a new empty XML data source and select it as being the current data source.

If you are facing slow startup times, consider these solutions to speed up application readiness.

## Solution 1: {{ en.RDM }} is slow to open

1. In {{ en.RDM }}, go to ***File – Settings – Performance***.
1. Set ***Hardware acceleration*** to ***DirectX*** and ***Optimize UI performance*** to ***Yes***.
![DirectX hardware acceleration and optimized UI performance](https://cdnweb.devolutions.net/docs/RDMW2046_2024_1.png)
1. ***Save*** your changes, then restart {{ en.RDM }} to apply them.

## Solution 2: Slow startup on offline machines

For your security, we "sign" our program with a code signature. This results in the validity of the signature being checked at application startup. If the machine is not connected to the internet, the application waits for a response until a timeout occurs. For detailed explanations, please consult the following Microsoft articles:
* [Improving application Start up time](https://learn.microsoft.com/en-us/archive/blogs/amolravande/improving-application-start-up-time-generatepublisherevidence-setting-in-machine-config)
* [The Case of the Slow Keynote Demo](https://learn.microsoft.com/en-us/archive/blogs/markrussinovich/the-case-of-the-slow-keynote-demo)

The workaround is to create a text file in the {{ en.RDM }} installation folder named **RemoteDesktopManager.exe.config** that contains the following:

```
<configuration>
    <runtime>
        <generatePublisherEvidence enabled="false"/>
    </runtime>
</configuration>
```

## Solution 3: Prevent internet access

Every time you start {{ en.RDM }}, the application will try to connect on [https://devolutions.net/remote-desktop-manager/clientinternal/enterprisenews](https://devolutions.net/remote-desktop-manager/clientinternal/enterprisenews). You should prevent all internet access from the application.

Add the line `<DisableAnalytics>true</DisableAnalytics>` to your [**RemoteDesktopManager.cfg** file](/rdm/windows/installation/client/configuration-file-location/). You can place it above the last line, which should contain `</Option>`.
![<DisableAnalytics>true</DisableAnalytics>](https://cdnweb.devolutions.net/docs/INTERFACE2034.png)
To find the configuration file, navigate to ***File – Settings – Advanced*** in {{ en.RDM }} and click on the blue hyperlink at the bottom.

## Solution 4: Native image generation

{{ en.RDM }} is a .NET application. This means that the code is delivered in an intermediate format. It is then processed on your local machine to generate what is called a native image. Sometimes, this process can be slow. It can also reoccur after certain conditions are met. For those reasons, we deliver a batch file to process all of our files at once. You will find this file in the installation folder of {{ en.RDM }}. It is called **OptimizeRDM.bat**.

Open a command window using ***Run as Administrator*** and launch that script.

## Solution 5: Antivirus

If the profiler log reveals slowness on one of the three offline loading (between 10 to 30 seconds), it might be caused by an antivirus limiting the access to the path. Allowlisting the path can allow to significantly reduce the slowness.

We do not recommend turning off the antivirus protection in risky conditions. You should close all browsers and ensure that only essential applications are running. We also suggest this step only for a short duration to see the startup time of the application change significantly.

If your antivirus application allows it, turn off the monitoring of {{ en.RDM }}'s installation folder. If you are comfortable with turning off the whole antivirus protection, do it to test the startup time.

There is nothing we can do in this case. It is only a step that helps isolate the cause.
