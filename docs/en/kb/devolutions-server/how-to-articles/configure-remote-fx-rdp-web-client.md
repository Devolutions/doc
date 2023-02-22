---
title: Configure RemoteFX for the RDP WebClient
---
By default, Windows does not allow RemoteFX to be enabled to ensure backward compatibility. However, for optimal performance when using a WebClient RDP, it is recommended that you enable RemoteFX on the server machines that allow it.  

In order to enable RemoteFX on a remote machine, a number of options must be enabled.  

Here is the procedure to follow on the remote machine:  

1. Launch the Windows run command Windows+R.
1. Run: `gpedit.msc`
1. Enable: `Computer Configuration/Administrative Templates/Windows Components/Remote Desktop Services/Remote Desktop Session Host/Remote Session Environment/RemoteFX for Windows Server 2008 R2/Configure RemoteFX`
1. Enable: `Computer Configuration/Administrative Templates/Windows Components/Remote Desktop Services/Remote Desktop Session Host/Remote Session Environment/Enable RemoteFX encoding for RemoteFX clients designed for Windows Server 2008 R2 SP1`
1. Enable: `Computer Configuration/Administrative Templates/Windows Components/Remote Desktop Services/Remote Desktop Session Host/Remote Session Environment/Limit maximum color depth`
1. Restart the remote machine.