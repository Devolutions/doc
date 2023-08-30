---
eleventyComputed:
  title: Set up {{ en.UVLT }} credentials in {{ en.RDM }}
  description: You can configure an entry to apply credentials that are in your {{ en.UVLT }} without affecting other users' settings.
  keywords:
  - User Specific Settings
---
You can configure an entry to apply credentials that are in your {{ en.UVLT }} without affecting other users' settings.
To do so, you need to create a ***User Specific Setting***. Follow the steps below.

1. Select the entry in the ***{{ en.NPANE }}***, then go to ***Edit – User Specific Settings***.
![Edit – User Specific Settings](https://webdevolutions.azureedge.net/docs/en/kb/KB2206.png) 
1. In the ***General*** tab, enable ***Override credentials***.
![Override credentials](https://webdevolutions.azureedge.net/docs/en/kb/KB2207.png) 
1. In the drop-down list next to this option, select ***Linked ({{ en.UVLT }})***.
![Linked ({{ en.UVLT }})](https://webdevolutions.azureedge.net/docs/en/kb/KB2208.png) 
1. Select your credentials or, alternatively, select ***Prompt on connection*** to receive a list of credential entries when you connect to the session entry.
1. Click ***OK*** to save your changes.  

You will now be prompted for the credentials you selected to open the entry.
