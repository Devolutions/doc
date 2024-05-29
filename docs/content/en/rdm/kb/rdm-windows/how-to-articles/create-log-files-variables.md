---
eleventyComputed:
  title: Create log files with variables
---
Our client often ask us what are the variables set to add the year, month, day and time to the name of their log files.
The variable that must be used are:

$DATE_YEAR$

$DATE_MONTH$

$DATE_DAY$

$DATE_TEXT_ISO$

$TIME_TEXT_ISO$

$NAME$

$HOST$

An example would be:

**C:\Users\Documents\$DATE_YEAR$.$DATE_MONTH$.$DATE_DAY$.$TIME_TEXT_ISO$.$NAME$.$HOST$.log**
