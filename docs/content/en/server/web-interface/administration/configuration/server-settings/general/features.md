---
eleventyComputed:
  title: Features
  description: The Features section allows administrators to configure the web interface features.
---
The ***Features*** section allows administrators to configure the web interface features. Enabling or disbling these features allows or denies access to [remote endpoints](/server/kb/knowledge-base/internet-endpoints-server/). When enabled, {{ en.DVLS }} will alert the external party for the service in question.
![Administration – Server settings – Features](https://cdnweb.devolutions.net/docs/DVLS0014_2024_2.png)

## Settings
| Option                                           | Description                                                                           |
|--------------------------------------------------|---------------------------------------------------------------------------------------|
| Allow browser extensions ({{ en.WBEX }})         | Allow users to save credentials in the {{ en.DVLS }} instance with the {{ en.WBEX }}. |
| Enable Internet Access                           | Allows {{ en.DVLS }} to communicate with external entities for the options below.     |
| Enable Gravatar                                  | Fetches the user's Gravatar icon.                                                     |
| Enable compromised (pwned) check                 | Searches an external database for compromised passwords.                              |
| Block Tor clients                                | Prevents users who are using Tor, an anonymity network, from accessing {{ en.DVLS }}. This can enhance security by blocking access from users who might be trying to hide their identity. |
| Share anonymous usage data with Devolutions      | Allows {{ en.DVLS }} to send telemetry. No sensitive and/or personal data is sent; what is collected is information such as the version used, the authentication modes used, and the number of {{ en.VLT }}s. |
| Enable {{ en.WAPPS }} Push notification          | Allows {{ en.DVLS }} to send push notifications to notify of various situations such as new secure messages, approval requests for temporary access, and approval requests for PAM. |
| Allow users to send password with {{ en.DSEND }} | Allows users to send passwords through {{ en.DSEND }} (they also need the ***View password*** permission). |
| Enable automatic service updates check           | Allows {{ en.DVLS }} to view the latest versions of our services to indicate whether they are up to date on the ***System dashboard***. |
