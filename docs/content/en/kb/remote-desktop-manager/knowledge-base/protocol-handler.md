---
eleventyComputed:
  title: Protocol handler
  description: A potocol handler has been implemented in {{ en.RDM }} to be able to launch a session directly from HTML content.
---
A ***Protocol handler*** has been implemented in {{ en.RDM }} to be able to launch a session directly from HTML content. This can be very useful to call {{ en.RDM }} from a Configuration Management Database (CMDB) or even a Document Management System (DMS).

{% snippet icon.badgeInfo %}
Internet Explorer and Mozilla Firefox execute the URL by clicking on it or by pressing Enter. However, with some other web browsers such as Google Chrome, executing the URL normally results in a web search. These browsers may require to do <kbd>Ctrl</kbd>+click or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> to execute the URL.
{% endsnippet %}

## Scenarios
There are two ways of using the handler:
* Generate a URL for a session (basically every entry type that connects to a remote device using a protocol).
* Generate a URL for a template, this will allow you to specify the host name of the device you wish to connect to, but it will take the settings of the template.

## Parameters
Here are the parameters used to build a protocol handler URL. These are for advanced scenarios. Only the ***DataSource*** and ***Session IDs*** are enough to open a connection.

{% snippet icon.badgeInfo %}
Please note that the ***DataSource*** parameter overrides the data source which the application connects to at start-up. This applies even if the user is prompted for a data source to connect to when the application starts.
{% endsnippet %}

| PARAMETER  | DESCRIPTION |
|------------|-------------|
| DataSource | Indicate the data source or the database ID. Find them in the ***IDs*** section of the ***Advanced properties*** of an entry.<br><br>A data source ID is unique per installation, which makes the URL usable only by the workstation where the data source has been created. By default, {{ en.RDM }} generates the URL with the database ID. |
| Session    | Indicate the ID of a session. Find it in the ***Session ID*** field in the ***Advanced properties*** of a session. |
| Template   | Indicate the ID of the template of an entry. The template parameter retrieves some properties of a template and uses them against the session parameter. The host parameter is required when using the template parameter. |
| Host       | Indicate the hostname or IP address of the remote device. Used along with the template parameter, or to override the host property of the session parameter. |
| Port       | Indicate the port to use. Used to override the port property of the session or template parameter. |
| Username   | Indicate the username to use. Used to override the username property of the session or template parameter. |
| Password   | Indicate the password to use. Used to override the password property of the session or template parameter. |
| Domain     | Indicate the domain to use. Used to override the domain property of the session or template parameter. |
| Title      | Indicate the title of the tab when a session is launched using the ***Embedded*** (tabbed) display mode. This can be very useful when several sessions are launched at the same time. |
| Filter     | Populate the ***Search*** field. |
| Tabpage    | Give the focus to a tab in the dashboard after the application has completed the startup procedure. Available only with the ***Select*** action. The possible tabs are:<ul><li>***Overview***</li><li>***Documentation***</li><li>***Macros/Scripts/Tools***</li><li>***Management Tools***</li><li>***Information***</li><li>***Attachments***</li><li>***Logs***</li><li>***Recordings***</li></ul> |

## Actions
* ***Open***: Open the specified connection.
* ***Find***: Find sessions by host.
* ***Edit***: Edit the specified connection.
* ***View***: View the password of the specified entry.
* ***OpenWithMacro***: Open the specified with a macro.
* ***Select***: Select a connection in the ***{{ en.NPANE }}*** (allows to select a tab in the dashboard as well).

## Syntax
`rdm://<action><parameter1>=<value>[&<parameter2>=<value>]`

The base syntax of the protocol handler requires the application protocol, an action and at least one parameter to work with.

There are three rules to follow when constructing an URL for the protocol handler:
* The action is separated from the parameters with a question mark (?).
* Each parameter is assigned a value by using an equal sign (=).
* Parameter/Value pairs are separated with an ampersand (&).

## Examples

#### Open {{ en.RDM }} with the search/filter field populated and the focus on the Dashboard
`rdm://open?Filter=RDP&Tabpage=Dashboard`

#### Open an RDP session
1. In the ***Advanced*** section of an entry properties, click on the ***Create Web Url*** button.
![Create Web URL](https://cdnweb.devolutions.net/docs/en/kb/KB4466.png)
1. The Url is stored in the clipboard.
![URL has been copied to the clipboard](https://cdnweb.devolutions.net/docs/en/kb/KB4467.png)
1. Paste (<kbd>Ctrl</kbd>+<kbd>V</kbd>) this Url in any application able to handle application protocols. It can be in a web page, a web browser address bar, or even a supported chat application. The protocol handler launches {{ en.RDM }} if it is closed, then perform the requested action with the provided parameters.
