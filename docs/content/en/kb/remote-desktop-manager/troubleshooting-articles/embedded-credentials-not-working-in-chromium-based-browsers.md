---
eleventyComputed:
  title: Embedded credentials not working in Chromium-based browsers
  description: Google Chrome, and therefore every Chromium-based web browser, no longer support embedded credentials in URLs.
---
Google Chrome, and therefore every Chromium-based web browser, no longer support embedded credentials in URLs. As a result, credentials cannot be pushed directly into a basic authentication prompt anymore.

## Solution
In {{ en.RDM }}, a typing macro can be set up to automatically input usernames and passwords:

1. Select the entry to edit, then go to ***Properties*** - ***Connection*** - ***Events***.

1. In the ***After Open*** tab, set the initial wait time to 2 or 3 seconds, and enter in the typing macro box: $USERNAME${TAB}$PASSWORD${ENTER}

![!!Typing macro](https://cdnweb.devolutions.net/docs/RDMW4043_2024_1.png)

3. Go to ***Properties*** - ***Security*** - ***Security Settings***, and make sure the ***Allow Password in Variable*** checkbox is checked.

![!!Allow Password in Variable](https://cdnweb.devolutions.net/docs/RDMW4044_2024_1.png)

Using this method, usernames and passwords should be automatically typed on session launch.