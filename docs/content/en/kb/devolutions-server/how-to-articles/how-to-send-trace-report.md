---
eleventyComputed:
  title: Send a trace report
  description: Follow these steps to send a trace report to our support team for the {{ en.DVLS }} web interface.
  keywords:
  - Export HAR
  - HAR
  - HAR file
  - HAR files
---
Follow these steps to send a trace report to our support team for the {{ en.DVLS }} web interface.

{% snippet icon.shieldWarning %}
Keep in mind that HAR files contain sensitive data, including content of the pages you downloaded while recording and your cookies. This allows anyone with the HAR file to impersonate your account and all the information that you submitted while recording (personal details, passwords, credit card numbers, etc.).
Protect your session data by [sanitizing your HAR files](https://har-sanitizer.pages.dev/) before sharing.
{% endsnippet %}

## Steps

1. In Chrome, or any browser, to toggle open the developer diagnostic window, click ***F12*** on your keyboard.
1. Select the ***Network*** tab.
![!!KB4675](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4675.png)
1. Click on the ***Clear*** button to clear unrelated data.
![!!KB4676](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4676.png)
1. Perform the action in the web interface of {{ en.DVLS }}, as requested by our support team, to collect the data.
1. Export the trace report with the ***Export HAR*** button (arrow down button).
![!!KB4677](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4677.png)
1. Attach the data in an email to [service@devolutions.net](mailto:service@devolutions.net) with your ticket number.
