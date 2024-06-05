---
eleventyComputed:
  title: Problèmes de page blanche dans un environnement Citrix
---
Multiples problèmes concernant le comportement de Webview2 sous un environnement Citrix.
## Solution
Nous avons trouvé des informations sur un comportement indésirable sous un environnement Citrix que d'autres utilisateurs ont eu en raison des accrochages d'API de Citrix interférant avec le Webview2 : [Application Webview2 fonctionnant dans un environnement Citrix · Problème #1082 · MicrosoftEdge/WebView2Feedback](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1082)  

Selon eux, ajouter le processus Webview2 comme une exception aux accrochages d'API de Citrix a résolu le problème.  

Cela peut être fait en suivant les instructions dans [Comment désactiver les accrochages d'API de Citrix sur une base par application](https://support.citrix.com/article/CTX107825).
