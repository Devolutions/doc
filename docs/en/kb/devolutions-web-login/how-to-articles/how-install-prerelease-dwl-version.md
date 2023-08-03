---
title: How to Install a Pre-Release DWL Version
---

When a new {{ en.DWL }} version is about to come out, a pre-release version might be made available. The steps to install a pre-release {{ en.DWL }} are different from a released version.

This document will show how to install a pre-release {{ en.DWL }} version on [Chrome](#chrome), [Firefox](#firefox), [Opera](#opera) and [Safari](#safari)

{% snippet icon.badgeInfo %}
X.X.X.X is the version number. Ex: 8.2.0.0
{% endsnippet %}

## Chrome
<a name="chrome"></a>

1. Download the Chrome version on Dropbox located at **Devolutions-QA/PreReleases/DWL/X.X.X.X/DevolutionsWebLoginChrome.X.X.X.X.zip**.
1. Unzip the zip file.
1. Open Chrome.
1. Write **chrome://extensions/** in the address bar.
1. Activate the developer mode (Located at the top right).
1. Click on ***Load unpacked***
1. Select the folder you unzipped at step 2.

You are now ready to go!

## Firefox
<a name="firefox"></a>

1. Download the Firefox version on Dropbox located at **Devolutions-QA/PreReleases/DWL/X.X.X.X/DevolutionsWebLoginFirefox.X.X.X.X.xpi**.
1. Open Firefox.
1. Write about:debugging in the address bar.
1. Click on ***This Firefox***
1. Click on ***Load temporary Add-ons***
1. Select the file **DevolutionsWebLoginFirefox.X.X.X.X.xpi**.

You are now ready to go!

{% snippet icon.badgeCaution %}
When closing Firefox, the temporary add-on will be automatically removed and you will need to add it again the next time you open Firefox.
{% endsnippet %}

## Opera
<a name="opera"></a>

1. Download the Opera version on Dropbox located at **Devolutions-QA/PreReleases/DWL/X.X.X.X/DevolutionsWebLoginOpera.X.X.X.X.nex**.
1. Open Opera.
1. Write **opera://extensions** in the address bar.
1. Drag & drop **DevolutionsWebLoginOpera.X.X.X.X.nex** to the Opera Window.

You are now ready to go!

## Safari
<a name="safari"></a>

{% snippet icon.badgeCaution %}
Safari version 14+ is required.
{% endsnippet %}

1. Open Safari
2. Choose ***Safari - Preferences***
3. Select the ***Advanced*** tab.
4. Check the ***Show Develop menu in menu bar*** option and close the panel.
5. Go to the ***Develop*** tab.
6. Click on ***Allow Unsigned Extensions*** (This setting is reset when you quit Safari; set it again the next time you launch Safari)
7. Download the Safari version on Dropbox located at **Devolutions-QA/PreReleases/DWL/X.X.X.X/{{ en.DWL }}**.
8. Double-click on the file {{ en.DWL }} and follow the instructions.

You are now ready to go!
