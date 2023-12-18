---
eleventyComputed:
  title: "{{ en.DLOCALIZER }}"
---
{{ en.DLOCALIZER }} is our custom translation tool for our applications. We welcome you to contribute to the Devolutions community by translating our tools for the benefit of other users just like you around the world. 

Download the [{{ en.DLOCALIZER }}](https://devolutions.net/localizer) translation tool to get started! 

{% snippet icon.badgeInfo %} 
A free [{{ en.DA }}](/cloud/devolutions-account/create-devolutions-account/) is required to log in to the {{ en.DLOCALIZER }} tool. 
{% endsnippet %}
 
### Translate 

1. In ***File – Languages***, select the language(s) to translate, then click ***Ok***.  
![File – Languages](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2228.png) 
1. Click on the ***Translate*** button.  
![Translate](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2131.png) 
1. Choose the file in which to translate in the ***File*** drop-down list.  
![File Selection](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2132.png) 
1. In the lower part, you will be able to filter and review the content already translated or in need of translation. Information about each ***Resource*** line is available in the different columns. The ***Status*** field can be set to different values depending on the progress of the translation:  

* ***Changed***: The text in its original language has been modified by Devolutions. A local translator must review the localized translation and make changes if necessary. 
* ***New***: The text has not yet been translated in the target language. 
* ***Translated***: The text has already been translated in the target language. 
* ***Under review***: This status is intended to help translators communicate with each other when they are unsure of the translation and/or use of a particular value. Through the ***Comment*** field, translators can also write translation notes. 
* ***Use original***: The text should not be translated, it should be kept in its original language. For example, this can apply to product names or third-party system names.  
![Content to Translate or Translated](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2229.png) 
5. To start, select a ***Resource*** line in the bottom list and click ***Translate***. The original text will appear in the ***Original*** box.  
![Resource Line Selection](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2133.png) 

{% snippet icon.badgeCaution %} 
When translating text, you may encounter the ampersand character ("&") used in a way other than its usual meaning of "and". This is not an error: the ampersand causes the character immediately to the right of it to be underlined when displayed. Please double check before translating.  

For example, "P&roperties" will be displayed as "P r operties" with an underlined "r". 
{% endsnippet %}
 
6. Type the translated text in the right box. 
{% snippet icon.badgeInfo %} 
A ***Bing*** button is available to assist you in translating your text. 
{% endsnippet %}
 
![Translation](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11554.png) 

7. When done, change the ***Status*** to ***Translated*** for this resource and click the ***Save Changes*** button. This will send your translation to our server and it will be deployed with the next release version of our applications.  
![Change Status and Save Changes](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2134.png) 

### Preview 

You can preview your changes in {{ en.RDM }} prior to the release or view the ones already in place but not yet released. 

1. Close your {{ en.RDM }}. 
1. In the {{ en.DLOCALIZER }} ***Dashboard***, click ***Deploy – Generate & Start*** to view your changes, or ***Deploy – Start (use existing)*** to view unreleased changes.  

Follow the next steps if you want to change the language of your {{ en.RDM }} application to reflect the one you were translating:  

1. Go to ***File – Options – User Interface***. 
1. In the ***Language*** drop-down list, select the language and click ***OK***. 
1. Restart the application for this to take effect. 

### Keyboard Shortcuts 

{{ en.DLOCALIZER }} also features several keyboard shortcuts to speed up the translation process:  

* <kbd>Ctrl</kbd>+<kbd>D</kbd>: Set the ***Status*** of the current resource to ***Translated***. 
* <kbd>Ctrl</kbd>+<kbd>E</kbd>: Set the ***Status*** of the current resource to ***Use original***. This ignores any translation text and displays the original value as is. 
* <kbd>Ctrl</kbd>+<kbd>Down</kbd>: Jump to the next resource. 
* <kbd>Ctrl</kbd>+<kbd>Up</kbd>: Jump to the previous resource. 
* <kbd>Ctrl</kbd>+<kbd>B</kbd>: Request a Bing translation for the current resource. 
* <kbd>Ctrl</kbd>+<kbd>S</kbd>: Save all pending changes. 
* <kbd>Ctrl</kbd>+<kbd>F</kbd>: Enable/disable filtering. 
