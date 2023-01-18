---
eleventyComputed:
  title: Important Operations with {{ en.DPS }}
---
# {{ en.TOPICTITLE }}
During important operations on a {{ en.DPS }} instance, it becomes important to perform certain preparation tasks to protect the environment and to be able to restore the application or data if a problem occurs.  
Here is a list of items to consider or tasks to perform:
* Whenever possible, during operations that impact the entire {{ en.DPS }} , proceed outside of normal business hours.
  * Some interventions require the {{ en.DPS }} instance to be in offline mode or stopped.  
* Always make a backup of the database and have the possibility to restore it easily.
* Make a backup copy of the {{ en.DPS }} web application folder.
* For some interventions, it is best to create a ***{{ en.DPS }} Authentication type*** account with administrative rights in the {{ en.DPS }} instance.
  * It is also possible to enable the Emergency Access feature to connect to {{ en.DPS }}  

If you have any questions about precautions for important operations with {{ en.DPS }} , please contact us at [service@devolutions.net](service@devolutions.net)
