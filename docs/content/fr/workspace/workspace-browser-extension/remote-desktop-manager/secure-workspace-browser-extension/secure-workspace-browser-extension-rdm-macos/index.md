---
eleventyComputed:
  title: Sécuriser le {{ fr.WBEX }} avec {{ fr.RDMMAC }}
  description: Dans les versions de {{ fr.RDM }} 2021.1 et ultérieures, nous avons modifié la manière dont le {{ fr.WBEX }} communique avec {{ fr.RDMMAC }} pour remplir les identifiants dans les pages web. Nous avons apporté ces modifications pour augmenter la sécurité de cette fonctionnalité.
  order: 20
---
Dans les versions de {{ fr.RDM }} 2021.1 et ultérieures, nous avons modifié la manière dont notre {{ fr.WBEX }} communique avec {{ fr.RDMMAC }} pour remplir les identifiants dans les pages web. Nous avons apporté ces modifications pour augmenter la sécurité de cette fonctionnalité. Visiter [Première connexion](/workspace/workspace-browser-extension/remote-desktop-manager/first-login/first-login-rdm-macos/) pour les étapes de configuration.

{% snippet, "shieldWarning" %}
Si vous utilisez une version antérieure à 2021.1, comme mentionné dans l'[Aperçu du {{ fr.WBEX }}](/workspace/workspace-browser-extension/), installer l'extension dans un environnement de Services Bureau à Distance (Terminal Services) peut introduire des risques de sécurité. Dans de tels environnements, chaque utilisateur doit avoir un port distinct attribué ainsi qu'une clé d'application pour empêcher tout autre {{ fr.WBEX }} d'écouter.

Si vous insistez pour utiliser ces anciennes versions, il est crucial que chaque utilisateur se voie attribuer un port distinct. Une clé d'application doit également être définie. La première application cliente qui démarre pourra utiliser le port exclusivement. TOUS les {{ fr.WBEX }} appelant ce port recevront les réponses à moins qu'une clé d'application ne soit définie. Continuer à la section suivante pour les étapes de configuration.
{% endsnippet %}

### Configurer le {{ fr.WBEX }} pour les versions antérieures à 2021.1 et pour les serveurs Bureau à Distance

{% snippet, "shieldWarning" %}
La clé d'application est affichée en texte clair. Elle doit être gardée secrète par l'utilisateur.
{% endsnippet %}

Pour activer la couche de sécurité dans {{ fr.RDM }}, suivre ces étapes :

1. Dans {{ fr.RDM }}, naviguer vers ***Fichier – Préférences – Extensions de navigateur***.
1. Sous la section ***{{ fr.WBEX }}***, cliquer sur ***Défaut***. Entrer un ***Port*** personnalisé et cliquer sur ***Terminé***.
![Port](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2021.png)
1. Taper une ***Clé d'application***. Vos modifications ne seront appliquées qu'après un redémarrage de l'application.
![Clé d'Application](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2023.png)
1. Dans votre navigateur, cliquer sur l'icône du {{ fr.WBEX }} et aller à ***Paramètres – Sources de données – {{ fr.RDM }}***.
1. Dans l'onglet ***Général***, décocher ***Utiliser le port par défaut***, puis entrer le ***Port*** personnalisé créé précédemment dans {{ fr.RDM }}.
![Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl2000.png)
1. Dans l'onglet ***Avancé***, entrer la même ***Clé d'application*** que dans {{ fr.RDM }}, puis cliquer sur ***Enregistrer***.
![Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl4033.png)
