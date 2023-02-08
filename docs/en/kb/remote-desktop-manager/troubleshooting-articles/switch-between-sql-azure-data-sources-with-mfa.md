---
title: Switch Between SQL Azure Data Sources with MFA
---
In {{ en.RDM }} , when switching between SQL Azure data sources that have multi-factor authentication (MFA) support, the connection will work only for the first data source but not for subsequent ones; the user will not be prompted when switching data sources.
### Solution
To circumvent this problem, the solution is make {{ en.RDM }} prompt the user for the data source on start up.
1. Go to ***File – Data Sources***
1. At the bottom of the window, in the ***On start up*** drop-down menu, select ***Prompt for data source***
![Prompt for Data Source on Start Up.png](/img/en/kb/kb2092.png)
1. Click ***OK***
1. Close {{ en.RDM }} and open it back up, then choose the data source. The MFA prompt should now be available.
