---
title: Devolutions Server Console crash with DevExpress
---
After the {{ en.DVLSCONSOLE }} installation version 2019.2.12.0, it is not possible to launch the {{ en.DVLSCONSOLE }} anymore.

Here is the call stack the {{ en.DVLSCONSOLE }} should trigger in the Windows Event logs

Event 1000 – Application Error

```
Faulting application name: DPS.Console.exe, version: 2019.2.12.0, time stamp: 0x5df29c50
Faulting module name: DevExpress.Utils.v18.2.ni.dll, version: 18.2.6.0, time stamp: 0x845e3753
Exception code: 0xc0000005
Fault offset: 0x0130baeb
Faulting process id: 0x77c
Faulting application start time: 0x01d5d03946bf6c3a
Faulting application path: C:\Program Files (x86)\Devolutions\Devolutions Password Server Console\DPS.Console.exe
Faulting module path: C:\Windows\assembly\NativeImages_v4.0.30319_32\DevExpress.ffe40a5c#\44210e7be8dab7c95a0fa0f011d9a163\DevExpress.Utils.v18.2.ni.dll
Report Id: e8048943-003d-4862-acb8-6cc86b79484c
Faulting package full name:
Faulting package-relative application ID:
Event 1026NET Runtime
Application: DPS.Console.exe
Framework Version: v4.0.30319
Description: The process was terminated due to an unhandled exception.
Exception Info: System.NullReferenceException
at DevExpress.Utils.FormShadow.FormShadowHookController.InternalPreFilterMessage(Int32, System.Windows.Forms.Control, IntPtr, IntPtr, IntPtr)
at DevExpress.Utils.Win.Hook.HookManager.InternalPreFilterMessage(DevExpress.Utils.Win.Hook.HookInfo, Int32, System.Windows.Forms.Control, IntPtr, IntPtr, IntPtr)
at DevExpress.Utils.Win.Hook.HookManager.WndHook(Int32, IntPtr, IntPtr)
```

## Solution

Follow these instructions to be able to open the {{ en.DVLSCONSOLE }}.

1. On the server where your {{ en.DVLS }} instance is hosted, navigate to the following folder.
**%appdata%\Devolutions\DPSConsole**
1. Delete the **DPSConsole.ext** file.
2. Restart the {{ en.DVLSCONSOLE }}.
