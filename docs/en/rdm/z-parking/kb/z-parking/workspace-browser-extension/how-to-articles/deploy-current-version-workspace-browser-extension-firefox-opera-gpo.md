---
eleventyComputed:
  title: Deploy the current version of the {{ en.WBEX }} in Firefox and Opera using GPOs
  description: Distribute the current version of the {{ en.WBEX }} in Firefox and Opera browsers using GPOs.
  keywords:
  - GPO
---
{% snippet icon.badgeInfo %}
IMPORTANT NOTE (for {{ en.WBEX }} versions prior to 2021.2.3.0)

The settings deployed with the group policy object (GPO) are only enforced when the extension is used for the first time. This means that the settings will not be enforced and changed if you modify the settings in the GPO and the extension has already been used by a user at least once.
{% endsnippet %}

To distribute the current latest version of the {{ en.WBEX }} in Firefox and Opera browsers using GPOs, we use the following URLs:
* [Firefox URL](https://cdn.devolutions.net/download/BrowserExtension/DevolutionsWorkspaceFirefox.Latest.xpi)
* [Opera URL](https://cdn.devolutions.net/download/BrowserExtension/DevolutionsWorkspaceOpera.Latest.crx)

When a new version of the {{ en.WBEX }} is available, the packages are overwritten to keep the link up to date.

{% snippet icon.badgeInfo %}
The update is already performed by the browser with the update file. Users do not have to do anything.
{% endsnippet %}
