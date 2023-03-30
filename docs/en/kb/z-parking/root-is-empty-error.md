---
title: Root Is Empty Error
---
After upgrading to {{ en.RDM }} 13.5.x, you may receive the error below;  

RootException - Root is empty!  
at Devolutions.RemoteDesktopManager.Managers.RootConnectionManager.get_RootConnection()  
at Devolutions.RemoteDesktopManager.Frames.ConnectionViews.FreConnectionTreeListView.ce5f4c5875531b613e87da05d31efd852(ConnectionViewMode cfa8984eaceb595fb57911c4e0ee96824)  
at Devolutions.RemoteDesktopManager.Frames.ConnectionViews.FreConnectionTreeListView.LoadConnectionList(Connection[] connections, ConnectionViewMode viewMode)  
at Devolutions.RemoteDesktopManager.Forms.FrmMainRibbonBase.LoadAllConnectionView(Boolean saveState)  
at Devolutions.RemoteDesktopManager.Forms.FrmMainRibbonBase.RefreshAllConnectionView(Boolean saveState, Boolean checkOnline)  
at Devolutions.RemoteDesktopManager.Managers.MainFormManager.DoFirstLoad(IMainForm mainform)  
at Devolutions.RemoteDesktopManager.Forms.FrmMainDocumentManager.cae3b4c7c167cf0d9747ac4fee11ac00a(Object c19f185fd70cefc696ba148af1c4faf54, EventArgs cf1018bb83ec7debd818319fd3cb4844e)  
at System.Windows.Forms.Timer.OnTick(EventArgs e)  
at System.Windows.Forms.Timer.TimerNativeWindow.WndProc(Message& m)  
at System.Windows.Forms.NativeWindow.Callback(IntPtr hWnd, Int32 msg, IntPtr wparam, IntPtr lparam)  
### Solution
### Method 1
Many issues related to it have been addressed in the latest version which you can download here; [https://devolutions.net/remote-desktop-manager/home/download](https://devolutions.net/remote-desktop-manager/home/download)
### Method 2
The other solution is to switch between data sources or delete and recreate the data source in ***File - Data Sources***
