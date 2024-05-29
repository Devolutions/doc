---
eleventyComputed:
  title: Links not loading in embedded mode
  description: Using Edge or Chrome in embedded mode may cause links to load a blank page.
---
When using Microsoft Edge or Google Chrome in an embedded browser mode through a website entry, you may experience an issue where clicking a link results in a non-loading page (displayed as "about:blank"). This problem originates from a known issue with Microsoft.

### Workaround
While Microsoft is addressing the issue, you can use the following workaround to mitigate the problem:
1. In {{ en.RDM }}, navigate to the properties of your website entry.
1. Change the ***Web browser*** setting to ***Google Chrome***.
![Set the web browser to Google Chrome](https://cdnweb.devolutions.net/docs/RDMW2039_2024_1.png)
1. Click ***Update*** to save your changes.
1. Launch your website entry in the embedded mode.
1. Navigate to the page containing the problematic link and click on it. This will likely open a blank page again. Keep this new blank window open.
1. Return to the original link and click it once more. The page should now load correctly within the previously opened blank window.

Keep the blank page open during your session. As long as it remains open, subsequent links should function as expected.