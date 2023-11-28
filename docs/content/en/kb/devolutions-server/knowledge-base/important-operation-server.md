---
eleventyComputed:
  title: Important operations with {{ en.DVLS }}
---
During important operations on a {{ en.DVLS }} instance, it becomes important to perform certain preparation tasks to protect the environment and to be able to restore the application or data if a problem occurs.

Here is a list of items to consider or tasks to perform:

* Whenever possible, during operations that impact the entire {{ en.DVLS }}, proceed outside of normal business hours.
   * Some interventions require the {{ en.DVLS }} instance to be in offline mode or stopped.
* Always make a backup of the database and have the possibility to restore it easily.
* Make a backup copy of the {{ en.DVLS }} web application folder.
* For some interventions, it is best to create a ***{{ en.DVLS }} Authentication type*** account with administrative rights in the {{ en.DVLS }} instance.
   * It is also possible to enable the Emergency Access feature to connect to {{ en.DVLS }}.

If you have any questions about precautions for important operations with {{ en.DVLS }}, please contact us at [service@devolutions.net](service@devolutions.net).
