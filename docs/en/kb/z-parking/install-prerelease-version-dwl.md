---
eleventyComputed:
  title: Install a prerelease version of the {{ en.WBEX }}
  description: When a new {{ en.WBEX }} version is about to come out, a prerelease version might be made available. The steps to install a prerelease {{ en.WBEX }} are different from a released version.
---
When a new {{ en.WBEX }} version is about to come out, a prerelease version might be made available. The steps to install a prerelease {{ en.WBEX }} are different from a released version.

This page contains instructions for installing a prerelease version of the {{ en.WBEX }} on [Chrome](#chrome), [Firefox](#firefox), [Opera](#opera), and [Safari](#safari) browsers.

{% snippet icon.badgeInfo %}
X.X.X.X is the version number (e.g., 2023.2.1.0).
{% endsnippet %}

## Chrome

1. Download the Chrome version on OneDrive located in **Devolutions-QA/Prereleases/DWL/X.X.X.X/DevolutionsWebLoginChrome.X.X.X.X.zip**.
1. Unzip the ZIP file.
1. Open Chrome.
1. Enter "chrome://extensions/" in the address bar.
1. Enable ***Developer mode*** (located in the top right corner).
1. Click on ***Load unpacked***.
1. Select the folder you unzipped in step 2.

You are now ready to go!

## Firefox

1. Download the Firefox version on OneDrive located in **Devolutions-QA/Prereleases/DWL/X.X.X.X/DevolutionsWebLoginFirefox.X.X.X.X.xpi**.
1. Open Firefox.
1. Enter "about:debugging" in the address bar.
1. Click on ***This Firefox***.
1. Click on ***Load temporary Add-on***.
1. Select the ***DevolutionsWebLoginFirefox.X.X.X.X.xpi*** file.

You are now ready to go!

{% snippet icon.badgeCaution %}
When closing Firefox, the temporary add-on will be automatically removed and you will need to add it again the next time you open Firefox.
{% endsnippet %}

## Opera

1. Download the Opera version on OneDrive located in **Devolutions-QA/Prereleases/DWL/X.X.X.X/DevolutionsWebLoginOpera.X.X.X.X.crx**.
1. Open Opera.
1. Enter "opera://extensions" in the address bar.
1. Drag and drop ***DevolutionsWebLoginOpera.X.X.X.X.crx*** in the Opera window.

You are now ready to go!

## Safari

{% snippet icon.badgeCaution %}
Safari version 16 or later is required.
{% endsnippet %}

### Safari 17 and later

1. Download the Safari version on OneDrive located in **Devolutions-QA/Prereleases/DWL/X.X.X.X/DevolutionsWebLoginSafari.X.X.X.X.zip**.
1. Unzip the ZIP file.
1. Allow unsigned extensions:
   1. Open Safari.
   1. Go to ***Safari – Settings***. In older versions, it may be called ***Preferences***.
   1. Select the ***Advanced*** tab.
   1. Check the ***Show features for web developers*** box.
   1. Select the ***Develop*** tab.
   1. Check the ***Allow Unsigned Extensions*** box.
   {% snippet icon.badgeCaution %}
   The ***Allow Unsigned Extensions*** setting resets when you quit Safari; set it again the next time you launch Safari.
   {% endsnippet %}  

1. Enable the {{ en.WBEX }}:
   1. In Safari Settings, select the ***Extensions*** tab.
   1. Find the {{ en.WBEX }} in the list on the left and enable it by checking the box.
   1. Close Safari Settings.  

   If you have profiles set up in Safari 17 or later, manage your extension for a specific profile:  
   1. In Safari Settings, select the ***Profiles*** tab.
   1. Select a profile in the list on the left.
   1. Select the ***Extensions*** tab.
   1. Find the {{ en.WBEX }} in the list on the right and enable it by checking the box.
   1. Close Safari Settings.
1. Double-click "{{ en.WBEX }}" in the unzipped folder.

You are now ready to go!

{% snippet icon.badgeHelp %}
Source: [Running your Safari web extension - Configure Safari in {{ en.MAC }} to run unsigned extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744467)
{% endsnippet %}

### Safari 16 and earlier
1. Download the Safari version on OneDrive located in **Devolutions-QA/Prereleases/DWL/X.X.X.X/DevolutionsWebLoginSafari.X.X.X.X.zip**.
1. Unzip the ZIP file.
1. Allow unsigned extensions:
   1. Open Safari.
   1. Go to ***Safari – Settings***. In older versions, it may be called ***Preferences***.
   1. Select the ***Advanced*** tab.
   1. Check the ***Show Develop menu in menu bar*** box.
   1. In the menu bar, go to the ***Develop*** tab.
   1. Click on ***Allow Unsigned Extensions***.
   {% snippet icon.badgeCaution %}
   The ***Allow Unsigned Extensions*** setting resets when you quit Safari; set it again the next time you launch Safari.
   {% endsnippet %}  

1. Enable the {{ en.WBEX }}:
   1. In Safari Settings, select the ***Extensions*** tab.
   1. Find the {{ en.WBEX }} in the list on the left and enable it by checking the box.
   1. Close Safari Settings.
1. Double-click "{{ en.WBEX }}" in the unzipped folder.

You are now ready to go!

{% snippet icon.badgeHelp %}
Source: [Running your Safari web extension - Configure Safari in {{ en.MAC }} to run unsigned extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744467)
{% endsnippet %}
