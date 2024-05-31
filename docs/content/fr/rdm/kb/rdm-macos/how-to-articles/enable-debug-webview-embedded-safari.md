---
eleventyComputed:
  title: Activer le débogage WebView pour Safari intégré dans {{ fr.RDMMAC }}
  description: Suivre ces étapes pour activer le débogage WebView pour Safari intégré dans {{ fr.RDMMAC }}
---
Déboguer une page web rendue dans un WebView peut être un exercice inestimable, surtout lorsqu'il s'agit d'examiner minutieusement sa mise en page, de plonger dans les complexités de son design, ou de s'attaquer à des complications JavaScript déroutantes. Suivre ces étapes pour activer le débogage WebView pour Safari intégré dans {{ fr.RDMMAC }}.

## Activer les outils de développeur Safari
1. Ouvrir ***Safari***.
1. Sélectionner ***Safari – Préférences***.  
![Safari – Préférences](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6065.png)
1. Aller à ***Avancé***.
1. Cocher ***Afficher le menu Développement dans la barre de menus***.  
![Avancé – Afficher le menu Développement dans la barre de menus](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6066.png)
Les ***outils de développeur Safari*** sont maintenant disponibles depuis le ***menu Développement dans la barre de menus***.

## Activer le débogage WebView pour Safari intégré
1. Fermer {{ fr.RDM }}.
1. Depuis le Terminal (Terminal.app), exécuter la commande suivante :
`defaults write com.devolutions.remotedesktopmanager WebKitDeveloperExtras -bool true`
1. Ouvrir {{ fr.RDM }} et naviguer vers le site web dans le navigateur intégré.
1. De retour dans Safari, aller à ***Développer – Nom de votre machine locale***.  
![Développer – Nom de votre machine locale](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6071.png)
Le site web est maintenant listé sous la machine locale.  
![Site web sous la machine locale](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6067.png)
1. Cliquer sur le nom du site web pour ouvrir les ***outils de développeur Safari***.  
![Outils de développeur Safari](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6069.png)
