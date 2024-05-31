---
eleventyComputed:
  title: Impossible de se connecter avec votre {{ fr.DA }}
  description: Vous recevez une erreur lors de la tentative de connexion à {{ fr.RDM }} avec votre {{ fr.DA }}.
  keywords:
  - HAR
---
Vous recevez une erreur lors de la tentative de connexion à {{ fr.RDM }} avec votre {{ fr.DA }}.
## Solution
1. Fermer {{ fr.RDM }}
1. Valider pouvoir se connecter à votre ***{{ fr.DA }}*** via un navigateur en utilisant ce lien : [Connexion Devolutions](https://login.devolutions.com/op/login)
1. Si vous êtes redirigé vers https<area>://account.devolutions.net, supprimer vos cookies de navigateur et réessayer le lien fourni à l'étape 1.
1. Si la connexion ne fonctionne pas, supprimer le cache historique de votre navigateur et voir si ce problème se produit toujours par la suite.
1. Si vous êtes toujours incapable de vous connecter, essayer avec un autre navigateur, ou en mode incognito.
1. Si cela persiste, ouvrir les ***Outils de Développeur*** de votre navigateur en appuyant sur F12.
1. Revenir à [Connexion Devolutions](https://login.devolutions.com/op/login)
1. Effacer le contenu des sections ***Console*** et ***Réseau*** de la fenêtre ***Outils de Développeur***.
![!!KB4830](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4830.png)
1. Essayer de se connecter à votre ***{{ fr.DA }}*** une fois de plus en entrant votre adresse courriel sur la page de connexion.
1. Lorsque vous obtenez l'erreur :
    * Dans la section Réseau, exporter le rapport de trace avec le bouton ***Exporter HAR*** (bouton flèche vers le bas).
    * Dans la section Console, cliquer avec le bouton droit sur la ligne d'erreur et ***Enregistrer sous***.
   {% snippet, "shieldWarning" %}
   Gardez à l'esprit que les fichiers HAR contiennent des données sensibles, y compris le contenu des pages que vous avez téléchargées lors de l'enregistrement et vos cookies. Cela permet à quiconque possédant le fichier HAR de se faire passer pour votre compte et toutes les informations que vous avez soumises lors de l'enregistrement (détails personnels, mots de passe, numéros de carte de crédit, etc.).
Protégez vos données de session en [nettoyant vos fichiers HAR](https://har-sanitizer.pages.dev/) avant de les partager.
   {% endsnippet %}

   ![!!KB4831](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4831.png)
11. Joindre les données dans un courriel à [service@devolutions.net](mailto:service@devolutions.net) avec une brève description de votre problème. Nous pourrons alors dépanner ce problème avec vous via notre système de billetterie.
