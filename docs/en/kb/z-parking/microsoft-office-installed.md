---
  title: Microsoft Office has to be installed
---
When the embedded mode is used, an error is displayed that office has to be installed, yet it already is.  

Under certain conditions which we cannot identify, an Office 2013 32 bit Edition installation on a 64 bit system may miss registry keys to allow for hosting Office Documents in ActiveX controls.  

## Solution

This can be confirmed by going in ***Help – Application Logs*** to view the full error message. It should be something like ***System.Runtime.InteropServices.COMException: The associated COM server does not support ActiveX Document embedding***.  

To resolve this, you have to create a reg file with the content below and merge it in your registry. A restart may be required.  

As a preliminary step, you could open the registry to confirm that the DocObject keys are indeed missing.  

The keys below are respectively for: Word, Excel, PowerPoint, Visio, and Project:  

```
[HKEY_CLASSES_ROOT\Wow6432Node\CLSID\{F4754C9B-64F5-4B40-8AF4-679732AC0607}\DocObject]  
[HKEY_CLASSES_ROOT\Wow6432Node\CLSID\{00020830-0000-0000-C000-000000000046}\DocObject]  
[HKEY_CLASSES_ROOT\Wow6432Node\CLSID\{CF4F55F4-8F87-4D47-80BB-5808164BB3F8}\DocObject]  
[HKEY_CLASSES_ROOT\Wow6432Node\CLSID\{00021A15-0000-0000-C000-000000000046}\DocObject]  
[HKEY_CLASSES_ROOT\Wow6432Node\CLSID\{74B78F3A-C8C8-11D1-BE11-00C04FB6FAF1}\DocObject]  
```
