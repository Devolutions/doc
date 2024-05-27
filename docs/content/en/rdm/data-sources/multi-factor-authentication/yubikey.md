---
eleventyComputed:
  title: Yubikey
---
{{ en.RDM }} allows you to use a ***Yubikey*** to provide an additional security layer when opening a data source.

{% snippet, "badgeCaution" %}
{{ en.RDM }} only supports the Yubico OTP at this time.
{% endsnippet %}

## Settings

{% snippet, "badgeInfo" %}
Before you start the configuration, make sure you have a ***Yubikey*** in your possession.
{% endsnippet %}

1. If not already done, follow these [Multi-Factor Authentication Configuration steps](/rdm/windows/data-sources/multi-factor-authentication/).
1. After having selected the ***Yubikey*** MFA type, click ***Configure***.
![Configure Multi-Factor Authentication](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10014.png)
1. Insert the ***Yubikey*** into a USB port of your computer.
1. Hold the gold button on the ***Yubikey*** to have the code filled in the field.
![Yubikey Setup](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10015.png)
1. Click ***Save***.
1. Relaunch {{ en.RDM }} to be prompted for a ***Yubikey*** code.

