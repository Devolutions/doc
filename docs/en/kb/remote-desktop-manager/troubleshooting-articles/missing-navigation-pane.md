---
title: Missing Navigation Pane
---
# {{ en.TOPICTITLE }}
Several panes are missing in {{ en.RDM }} and you seem unable to bring them back.
### Solution for Remote Desktop Manager enterprise
1. Close {{ en.RDM }}
1. In ***File Explorer*** , navigate to %localappdata%\Devolutions.
1. Copy the RemoteDesktopManager folder on your desktop.
1. Delete the RemoteDesktopManager folder in %localappdata%\Devolutions.
1. Restart {{ en.RDM }}  

This will create a new RemoteDesktopManager folder in %localappdata%\Devolutions.  

When everything is back to normal:  

1. Close {{ en.RDM }}
1. Copy the files named like below from the folder RemoteDesktopManager on your desktop into %localappdata%\Devolutions\RemoteDesktopManager:  

RemoteDesktopManager.cfg  
RemoteDesktopManager.enc  
RemoteDesktopManager.stv  
RemoteDesktopManager.ext  
Connections.db  

This action will restore your configuration and your local data source.
### Solution for Remote Desktop Manager Free
1. Close {{ en.RDM }}
1. In ***File Explorer*** , navigate to %localappdata%\Devolutions.
1. Copy the RemoteDesktopManagerFree folder on your desktop.
1. Delete the RemoteDesktopManagerFree folder in %localappdata%\Devolutions.
1. Restart {{ en.RDM }}  

This will create a new RemoteDesktopManagerFree folder in %localappdata%\Devolutions.  

When everything is back to normal:  

1. Close {{ en.RDM }}
1. Copy the files named like below from the folder RemoteDesktopManagerFree on your desktop into %localappdata%\Devolutions\RemoteDesktopManagerFree:  

RemoteDesktopManagerFree.cfg  
RemoteDesktopManager.enc  
RemoteDesktopManager.stv  
RemoteDesktopManagerFree.ext  
Connections.db  

This action will restore your configuration and your local data source.
