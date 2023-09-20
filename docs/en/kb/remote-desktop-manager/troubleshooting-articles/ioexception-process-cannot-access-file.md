---
eleventyComputed:
  title: IOException - The process cannot access the file
---
IOException - The process cannot access the file 'C:\Users\*User*\AppData\Local\Temp\RDM\record.mp4' because it is being used by another process.  

## Solution

This error can be avoided by adding a variable to the name of your recording. That way, {{ en.RDM }} will not have issues trying to overwrite an already existing recording. In general, we recommend using variables such as $DATE_TEXT$ or $TIME_TEXT$ to identify recording.  

For example, if you changed your path to:  

**C:\Users\*User*\AppData\Local\Temp\RDM\record-$DATE_TEXT$-$TIME-TEXT$.mp4**  

The name of your recording would look something like "record-2202020-100257.mp4". This will ensure that each recording has a unique name.
