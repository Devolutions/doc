---
eleventyComputed:
  title: Cisco ASDM unable to launch after updating ASDM
  description: This is a workaround for the issue where Cisco ASDM does not launch after updating ASDM
---
This is a workaround for the issue where Cisco ASDM does not launch after updating ASDM.

## Workaround
1. Create a new PowerShell entry.
![PowerShell entry](https://cdnweb.devolutions.net/docs/en/kb/KB0055.png)
1. In the ***Command*** field, enter `Start-Process "C:\Program Files (x86)\Cisco Systems\ASDM\jre\bin\javaw.exe"`.
1. In the ***Arguments*** field, enter `-ArgumentList "-Xms64m -Xmx512m -Dsun.swing.enableImprovedDragGesture=true -classpath lzma.jar;jploader.jar;asdm-launcher.jar;retroweaver-rt-2.0.jar com.cisco.launcher.Launcher cert.PEM"`.
1. Check the ***Change default working directory*** option.
1. Set the path to `C:\Program Files (x86)\Cisco System\ASDM`.
1. Go to the ***Host and Credentials*** tab.
1. Input the ***Host*** and credentials.
1. Go to ***Connection – Events***, then the ***After Open*** tab.
![After Open tab](https://cdnweb.devolutions.net/docs/en/kb/KB0056.png)
1. Under the ***After open - Macro*** section, input `$HOST${TAB}$USERNAME${TAB}` into the ***Typing macro*** field.
   {% snippet icon.badgeInfo %}
   The password parameter `$PASSWORD${ENTER}` is optional. If used, it also needs to be configured correctly under ***Security – Security Settings***.
   {% endsnippet %}
1. Click ***OK*** to close the window and create the entry.
