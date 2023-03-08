---
title: Enable Server Side Synchronizer
---
{% snippet icon.badgeCaution %}
The {{ en.DPS }} Scheduler must be installed and running to have this feature enabled.
{% endsnippet %}

{% snippet icon.badgeNotice %}
Only Active Directory and VMWare synchronizer entry types are supported by this feature.
{% endsnippet %}

The following steps describe how to enable server side synchronizer to be run by the {{ en.DPS }} Scheduler.

1. From the {{ en.DPS }} web interface, create a new Synchronizer entry.  
![New Synchronizer entry.png](/img/en/kb/KB8056.png)
1. Fill in the properties for the selected Synchronizer.
1. Go in General - Schedule
1. Check the Enable box and set the occurrence and the time of the execution of the Synchronizer.  
![Synchronizer - Schedule.png](/img/en/kb/KB8057.png)
1. In {{ en.RDM }} , this option can be configured in General - Schedule.  
![KB8058.png](/img/en/kb/KB8058.png)