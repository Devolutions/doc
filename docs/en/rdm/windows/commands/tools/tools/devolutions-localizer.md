---
title: Devolutions Localizer
---
Devolutions Localizer is our custom translation tool for our applications. We welcome you to contribute to the Devolutions community by translating our tools for the benefit of other users just like you around the world. 

Download the [Devolutions Localizer](https://devolutions.net/localizer) translation tool to get started! 

{% snippet icon.badgeInfo %} 
A free [Devolutions Account](/cloud/devolutions-account/create-devolutions-account/) is required to log in to the Devolutions Localizer tool. 
{% endsnippet %}
 
### Translate 

1. In ***File – Languages*** , select the language(s) to translate, then click ***Ok*** .  
![File – Languages](/img/en/rdm/windows/RdmWin4049.png) 
1. Click on the ***Translate*** button.  
![Translate](/img/en/rdm/windows/RDMWin2131.png) 
1. Choose the file in which to translate in the ***File*** drop-down list.  
![File Selection](/img/en/rdm/windows/RDMWin2132.png) 
1. In the lower part, you will be able to filter and review the content already translated or in need of translation. Information about each ***Resource*** line is available in the different columns. The ***Status*** field can be set to different values depending on the progress of the translation:  

* ***Changed*** : The text in its original language has been modified by Devolutions. A local translator must review the localized translation and make changes if necessary. 
* ***New*** : The text has not yet been translated in the target language. 
* ***Translated*** : The text has already been translated in the target language. 
* ***Under review*** : This status is intended to help translators communicate with each other when they are unsure of the translation and/or use of a particular value. Through the ***Comment*** field, translators can also write translation notes. 
* ***Use original*** : The text should not be translated, it should be kept in its original language. For example, this can apply to product names or third party system names.  
![Content to Translate or Translated](/img/en/rdm/windows/RdmWin4050.png) 
5. To start, select a ***Resource*** line in the bottom list and click ***Translate*** . The original text will appear in the ***Original*** box.  
![Resource Line Selection](/img/en/rdm/windows/RDMWin2133.png) 

{% snippet icon.badgeCaution %} 
When translating text, you may encounter the ampersand character (&quot;&amp;&quot;) used in a way other than its usual meaning of &quot;and&quot;. This is not an error: the ampersand causes the character immediately to the right of it to be underlined when displayed. Please double check before translating.  

For example, &quot;P&amp;roperties&quot; will be displayed as &quot;P r operties&quot; with an underlined &quot;r&quot;. 
{% endsnippet %}
 
6. Type the translated text in the right box. 
{% snippet icon.badgeInfo %} 
A ***Bing*** button is available to assist you in translating your text. 
{% endsnippet %}
 
![Translation](/img/en/rdm/windows/clip11554.png) 

7. When done, change the ***Status*** to ***Translated*** for this resource and click the ***Save Changes*** button. This will send your translation to our server and it will be deployed with the next release version of our applications.  
![Change Status and Save Changes](/img/en/rdm/windows/RDMWin2134.png) 

### Preview 

You can preview your changes in {{ en.RDM }} prior to the release or view the ones already in place but not yet released. 

1. Close your {{ en.RDM }} . 
1. In the Devolutions Localizer ***Dashboard*** , click ***Deploy – Generate &amp; Start*** to view your changes, or ***Deploy – Start (use existing)*** to view unreleased changes.  

Follow the next steps if you want to change the language of your {{ en.RDM }} application to reflect the one you were translating:  

1. Go to ***File – Options – User Interface*** . 
1. In the ***Language*** drop-down list, select the language and click ***OK*** . 
1. Restart the application for this to take effect. 

### Keyboard Shortcuts 

Devolutions Localizer also features several keyboard shortcuts to speed up the translation process:  

* Ctrl + D : Set the ***Status*** of the current resource to ***Translated*** . 
* Ctrl + E : Set the ***Status*** of the current resource to ***Use original*** . This ignores any translation text and displays the original value as is. 
* Ctrl + Down : Jump to the next resource. 
* Ctrl + Up : Jump to the previous resource. 
* Ctrl + B : Request a Bing translation for the current resource. 
* Ctrl + S : Save all pending changes. 
* Ctrl + F : Enable/disable filtering. 

