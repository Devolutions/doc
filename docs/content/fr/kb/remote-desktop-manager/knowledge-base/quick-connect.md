---
eleventyComputed:
  title: Quick Connect
---
Via the quick connect toolbar, you can open an ad-hoc session by specifying the host and session type. It is also possible to create a template and establish the connection with your template. Configure the settings in the template, {{ en.RDM }} will apply them when connecting to the specified host.
## Settings
The control is composed of multiple sub controls.
![!!KB4446](https://cdnweb.devolutions.net/docs/en/kb/KB4446.png)
{% snippet icon.badgeInfo %}
Listing network discoverable devices is a lengthy operation.
{% endsnippet %}

The ellipsis button will list network discoverable computer to allow you to select a computer from the list.
### Using templates
![!!KB4447](https://cdnweb.devolutions.net/docs/en/kb/KB4447.png)
{{ en.RDM }} offers default templates to connect with the Quick Connect feature, but it is possible to use [custom templates](/rdm/windows/commands/file/templates/creating-templates/) In that case, the ***host*** field in the template must be set to the $QUICK_CONNECT$ variable. When they are created, custom templates are automatically added at the bottom of the type list.
