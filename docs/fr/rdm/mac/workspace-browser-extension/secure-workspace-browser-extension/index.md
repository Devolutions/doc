---
eleventyComputed:
  title: Sécuriser le {{ fr.WBEX }}
  order: 70
---
Dans {{ fr.RDMMAC }} versions 2021.1 et supérieures, nous avons changé la façon dont le {{ fr.WBEX }} communique avec {{ fr.RDM }} pour remplir les identifiants dans les pages Web. Nous avons fait ces changements pour augmenter la sécurité de cette fonctionnalité. Visitez [Première connexion](/fr/rdm/mac/workspace-browser-extension/first-login-workspace-browser-extension/) pour les étapes de configuration.

{% snippet, "shieldWarning" %}
Si vous utilisez une version antérieure à 2021.1 et, comme indiquée dans la section [Survol du {{ fr.WBEX }}](/fr/rdm/mac/workspace-browser-extension/overview/), l'installation de l'extension dans un environnement de services Bureau à distance (Terminal Services) peut présenter des risques de sécurité. Dans de tels environnements, chaque utilisateur doit disposer d'un port distinct ainsi que d'une clé d'application pour empêcher tout autre instance du {{ fr.WBEX }} d'écouter.

Si vous insistez pour l'utiliser, il est essentiel que chaque utilisateur se voie attribuer un port distinct. Une clé d'application doit également être définie. La première application client qui démarre pourra utiliser exclusivement le port. TOUte instance du {{ fr.WBEX }} appelant sur ce port obtiendra les réponses, sauf si une clé d'application est définie. Continuez à la section suivante pour les étapes de configuration.
{% endsnippet %}

## Configuration du {{ fr.WBEX }} pour une version antérieure à 2021.1 et pour les serveurs bureau à distance

{% snippet, "shieldWarning" %}
La clé de l'application est affichée en texte clair. Elle doit être gardée secrète par l'utilisateur.
{% endsnippet %}

Pour activer la couche de sécurité dans {{ fr.RDMMAC }}, procéder comme suit :

1. Dans {{ fr.RDM }}, accéder à ***Fichier – Préférences – Extensions de navigateur***.
1. Sous la section ***{{ fr.WBEX_MAJ }}***, cliquer sur ***Par défaut***. Saisir un ***Port*** et cliquer sur ***Compléter***.
![Port](https://cdnweb.devolutions.net/docs/fr/rdm/mac/Dwl2000.png)
1. Saisir la ***Clé de l'application***. Vos changements ne seront appliqués qu'après le redémarrage de l'application.
![Clé de l'application](https://cdnweb.devolutions.net/docs/fr/rdm/mac/Dwl2001.png)
1. Dans votre navigateur, cliquer sur l'icône du {{ fr.WBEX }} et accédez à ***Paramètres – Sources de données – {{ fr.RDM }}***.
1. Dans l'onglet ***Général***, désactiver ***Utiliser le port par défaut (19443)***, puis entrer le ***Port*** personnalisé créé précédemment dans {{ fr.RDM }}.
![Onglet Général](https://cdnweb.devolutions.net/docs/fr/rdm/mac/Dwl2002.png)
1. Dans l'onglet ***Avancé***, entrer la même ***Clé de l'application*** que celle de {{ fr.RDM }}, puis cliquer sur ***Enregistrer***.
![Onglet Avancé](https://cdnweb.devolutions.net/docs/fr/rdm/mac/Dwl2003.png)
