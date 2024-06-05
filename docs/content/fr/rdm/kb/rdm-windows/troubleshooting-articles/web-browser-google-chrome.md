---
eleventyComputed:
  title: Navigateur Web Google Chrome
---
## Problème 1
Adobe Flash Player nécessite votre autorisation pour s'exécuter.
### Solution
Installer Adobe Flash Player avec PPAPI. Pour ce faire, veuillez suivre les étapes ci-dessous :

1. Visiter [https://get.adobe.com/flashplayer/](https://get.adobe.com/flashplayer/) avec le navigateur Google Chrome.
1. Télécharger Adobe Flash Player.
1. Lancer l'installateur depuis votre dossier de téléchargement.
1. Après l'installation, fermer et redémarrer {{ fr.RDM }}
1. Créer une session web Chrome intégrée et utiliser le lien suivant [https://get.adobe.com/flashplayer/about/](https://get.adobe.com/flashplayer/about/) pour vérifier que cela fonctionne.
## Problème
Erreurs de certificat en mode intégré.

{{ fr.RDM }} démarre Google Chrome dans une application séparée (**Embedded32.exe**) puis réintègre l'application à l'intérieur de {{ fr.RDM }}.
### Solution 2
Pour résoudre ce problème, il faut cocher l'option ***Ignorer les erreurs de certificat*** dans les ***Propriétés*** de l'entrée de session ***Site Web***.
![!!KB4102](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4102.png)