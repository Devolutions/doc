---
eleventyComputed:
  title: Advanced
  order: 20
---
The ***Advanced*** section allows the administrator to configure the ***Refresh token lifetime*** parameter and some other specific parameters like the [Labelling](/server/web-interface/administration/configuration/server-settings/general/advanced/white-labeling-customizations/).
![Administration – {{ en.DVLS }} Settings – Advanced](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8044.png)

## Settings

### Features
| Category                                        | Description                                                |
|-------------------------------------------------|------------------------------------------------------------|
| Refresh token lifetime (minutes)                | This the duration time of the token. At the expiration of the token, the user must again authenticate himself on the {{ en.DVLS }} instance. When updated, the {{ en.DVLS }} needs to be restarted using the Stop Server/Start Server button on the {{ en.DVLSCONSOLE }}. |
| Automatically logout idle users after (minutes) | Enter the delay for the user to be disconnected from the server if inactive. This value must be lower than the Refresh token lifetime parameter. This parameter is applied on the web interface or with the [{{ en.WBEX }}](/workspace/workspace-browser-extension/) It has no effect on {{ en.RDM }}. When updated, the {{ en.DVLS }} needs to be restarted using the Stop Server/Start Server button on the {{ en.DVLSCONSOLE }}. |
| User license type                               | Select the license type. Default is Connection Management. |
| Launch connection with                          | Sets the application that opens remote connections: {{ en.RDM }} or {{ en.DLAUNCHER }}. Default refers to {{ en.DLAUNCHER }}. |
| Server Logo Large / Server Logo Small           | See the [White Labeling Customizations](/server/web-interface/administration/configuration/server-settings/general/advanced/white-labeling-customizations/) page for more information. |
