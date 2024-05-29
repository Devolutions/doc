---
eleventyComputed:
  title: Test variables
---
{% snippet, "badgeInfo" %}
Variables are only supported for ***Advanced Data Sources*** like SQL Server and {{ en.DVLS }}
{% endsnippet %}

{% snippet, "badgeCaution" %}
For the password to be available as a variable, you must go in the ***Security Settings*** of the entry and check ***Allow password in variable***.
If the option is greyed out, you need to activate ***Allow password variables for all entries*** and ***Allow password variable in macros*** in ***Administration – System Settings – Password Policy***.
{% endsnippet %}

{% snippet, "badgeCaution" %}
If you are using the ***Linked ({{ en.VLT }})*** credential mode in your entries, you will need to enable the ***Allow password in variable*** option in the linked credential entry as well.
{% endsnippet %}

{{ en.RDM }}'s ***Auto Typing Macro*** is really helpful to simulate user interaction. It is mostly used to perform automatic logon on web pages, but you can run advanced shell commands on various operating systems.

Sometimes you need to confirm exactly what will be sent when using our Variables.

A simple trick is to create a batch file that just types out whatever is sent on the command line.

Just copy the following in your favorite editor and save it as a command file, I named mine parrot.bat

```
@echo off
echo.
echo.
echo %*
echo.
echo.
pause
```
Now it is a simple matter of creating a Command Line (External Application) session and set the command line to the path of the parrot.bat file and add the variables right after.  

`"C:\tools\parrot.bat" $DOMAIN$ $IP$ $USERNAME$`  

Now when you run the entry, you will see exactly what values are sent.
