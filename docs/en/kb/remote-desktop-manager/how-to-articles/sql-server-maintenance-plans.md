---
title: SQL Server maintenance plans
---
Sadly, an SQL Server Instance is not something you can simply install and run without proper care. Keeping the default values for new databases will almost certainly cause issues in the long run.

If maintenance is not performed regularly, the database files will grow and grow until the mere size of the files will decrease performance and finally reach a point where the client application appears unusable.

We are NOT a DBA shop. Asking the question "What is the best maintenance plan I can implement?" to seasoned DBAs will invariably result in an answer similar to "It depends".

{% snippet icon.shieldWarning %}
These "pointers" are provided as is and we cannot be held responsible if they do not meet your requirements. You must consult a qualified database administrator to confirm your needs and how to meet them.
{% endsnippet %}

The backup strategy really depends on the amount of data you are comfortable with losing in the event of failure, yes... expect to lose data, the cost of a system that does NOT lose any data is quite high and is not in the scope of this topic.

If you are comfortable with only being able to revert to last night’s backup, you can set the DB to simple recovery model, and take a nightly full backup.

If you want something a little more robust, we have seen the following:

- A daily full backup of the DB.
- More frequent backup of the transaction log, lets say every 4 hours starting at 06:00 and ending at 18:01 or 22:01
- A cleanup task to remove older backups.

If you need to be able to recover data that is minutes in the past, then you really need a qualified DBA to help you.

Again, these are examples of how we have seen backups planned for non-critical systems. If it does not meet your specific requirements. You must monitor: the time the backups take to complete; the free space left on the backup device; and so on and so on!  

Also, a backup strategy involves actually going through the recovery process regularly to prove that it works. Backups usually work fine, it is the restoring process that is difficult, imagine having a boss breathing down your neck while you are searching for the proper sequence of actions because you have never done this before...  

If you look at our first ever sysadminotaur, (at [http://blog.devolutions.net/2012/08/sysadminotaur.html](http://blog.devolutions.net/2012/08/sysadminotaur.html)) you can guess that we have heard of bad backup plans before...

{% snippet icon.shieldWarning %}
Backup plans must be monitored and Recovery plans must be enacted to confirm they actually work!
{% endsnippet %}
