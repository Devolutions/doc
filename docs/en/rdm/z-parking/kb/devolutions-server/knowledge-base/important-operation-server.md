---
eleventyComputed:
  title: Essential practices for managing {{ en.DVLS }} operations
  description: During critical operations on a {{ en.DVLS }} instance, it is essential to undertake specific preparatory tasks.
---
During critical operations on a {{ en.DVLS }} instance, it is essential to undertake specific preparatory tasks. These tasks safeguard the environment and enable the restoration of the application or data should any issues arise.

Here are key considerations and actions to take:

* Conduct impactful operations on the entire {{ en.DVLS }} system during off-peak hours whenever feasible. This may require setting the {{ en.DVLS }} instance to offline mode or shutting it down.
* Consistently back up the database and ensure you can restore it easily if necessary.
* Create a backup of the {{ en.DVLS }} web application folder.
* For certain operations, consider setting up a ***{{ en.DVLS }} Authentication type*** account with administrative rights on your {{ en.DVLS }} instance. Additionally, consider enabling the ***Emergency aAccess*** feature to maintain connectivity with {{ en.DVLS }}.

For further guidance or if you have questions regarding precautions during critical {{ en.DVLS }} operations, please contact our support team at [service@devolutions.net](service@devolutions.net).
