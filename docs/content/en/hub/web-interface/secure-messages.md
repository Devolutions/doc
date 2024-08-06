---
_schema: default
eleventyComputed:
  title: Secure messages
  description: >-
    Send and receive Secure messages with users within your hub. Click the
    Messages icon next to your avatar to get started.
---
Send and receive ***Secure messages*** with users within your hub. Click the ***Messages*** icon next to your avatar to get started. ![Messages](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0005.png)

## Send a secure message

{% snippet, "badgeInfo" %}To enable this feature, [sending messages must be enabled](/hub/web-interface/administration/management/users/#edit-a-user) under ***Administration – Users***.{% endsnippet %}

1. Click the ***Messages*** icon next to your avatar.<br> ![Messages](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0015.png)
2. Click on ***New message***.<br> ![New message](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0014.png)
3. Select ***Send in-app***.<br> ![Send In-app](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0007.png) <br>{% snippet, "badgeHelp" %}To learn about the ***Send by email*** and ***Create shareable link*** options, visit [{{ en.DSEND }}](/hub/send/).{% endsnippet %}
4. Select at least one recipient from the drop-down menu.

   ![Recipient(s)](https://cdnweb.devolutions.net/docs/HUBB2369_2024_2.png)

5. Fill in the ***Subject*** and write the body of your ***Secure message***.![Subject and body text](https://cdnweb.devolutions.net/docs/HUBB2370_2024_2.png)
6. Optional:
   * ***Expires after***: Set a date and time for the message to automatically delete after sending.
   * ***High priority***: Force the message to appear directly in the web interface upon the user's next session start or promptly if they are already logged in. This feature is especially useful when onboarding new users to your hub.<br>![Expiration and priority](https://cdnweb.devolutions.net/docs/HUBB2371_2024_2.png)
7. Click ***Send*** to forward the message.

## Send a copy of a folder/entry with secure messages

You can send a copy of one of your folders or entries to other users with secure messages. Sending a copy of a folder also sends a copy of the entries it contains. This also applies to entries containing sub entries. Copies of all the attachment(s) will be sent without history or logs.

{% snippet, "badgeInfo" %}To enable this feature, ensure that [attachments are allowed when sending messages](/hub/web-interface/administration/management/users/#edit-a-user) under ***Administration – Users***.{% endsnippet %}

1. Select the folder/entry in your ***{{ en.NPANE }}***.
2. Click ***More***, then select ***Send copy***.<br> ![More – Send copy](https://cdnweb.devolutions.net/docs/HUBB2372_2024_2.png)
3. Select at least one recipient from the drop-down menu.<br>![Recipient(s)](https://cdnweb.devolutions.net/docs/HUBB2373_2024_2.png)
4. Fill in the ***Subject*** and write the body of your ***Secure message***.![Subject and body text](https://cdnweb.devolutions.net/docs/HUBB2374_2024_2.png)
5. Optional:
   * ***Expires after***: Set a date and time for the message to automatically delete after sending.
   * ***High priority***: Force the message to appear directly in the web interface upon the user's next session start or promptly if they are already logged in. This feature is especially useful when onboarding new users to your hub.<br>![Expiration and priority](https://cdnweb.devolutions.net/docs/HUBB2375_2024_2.png)
6. Click ***Send*** to forward the message. A copy of the attachment(s) will be sent without history or logs.

## Receive a secure message

If the secure message was flagged as ***High priority***, it will appear directly in the web interface upon the user's next session start or promptly if they are already logged in. If not, a blue dot will appear on the message icon to signify the user has unread messages.

1. Click on the ***Messages*** button.<br> ![Messages](https://cdnweb.devolutions.net/docs/HUBB2376_2024_2.png)
2. Click on the new message in the inbox. Unread messages have a blue tint.<br> ![New messages](https://cdnweb.devolutions.net/docs/HUBB2377_2024_2.png)

This is what the message interface looks like:

![Message interface](https://cdnweb.devolutions.net/docs/HUBB2378_2024_2.png)

When viewing a message, the recipient sees the following information:

* The sender's name.
* The subject and body text of the message.
* The time the message was sent and, if applicable, its expiration time.
* The name of any attachments.

The user has access to the following actions:

* ***Reply***: Opens a window to reply to the currently viewed message.
* ***Close***: Closes the currently open message window without deleting it. The message will be marked as read.
* ***Save in {{ variables.UVLT.en }}***: Automatically saves all attachments in the recipient's {{ variables.UVLT.en }}. This action is available only if the message includes attachments.
* ***Save as***: Opens a window allowing the recipient to specify the location for saving the attachments within the {{ variables.DHUB.null }}. This action is available only if the message includes attachments.