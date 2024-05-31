---
eleventyComputed:
  title: Avancé
  order: 20
---
La section ***Avancé*** permet à l'administrateur de configurer le paramètre ***Durée de vie du jeton d'actualisation*** et certains autres paramètres spécifiques comme le [Labelling](/server/web-interface/administration/configuration/server-settings/general/advanced/white-labeling-customizations/).
![Administration – Paramètres {{ fr.DVLS }} – Avancé](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8044.png)

## Paramètres

### Fonctionnalités
| Catégorie                                        | Description                                                |
|-------------------------------------------------|------------------------------------------------------------|
| Durée de vie du jeton d'actualisation (minutes)                | C'est la durée de vie du jeton. À l'expiration du jeton, l'utilisateur doit à nouveau s'authentifier sur l'instance {{ fr.DVLS }}. Lors de la mise à jour, le {{ fr.DVLS }} doit être redémarré en utilisant le bouton Arrêter le serveur/Démarrer le serveur sur le {{ fr.DVLSCONSOLE }}. |
| Déconnexion automatique des utilisateurs inactifs après (minutes) | Entrer le délai pour que l'utilisateur soit déconnecté du serveur s'il est inactif. Cette valeur doit être inférieure au paramètre Durée de vie du jeton d'actualisation. Ce paramètre est appliqué sur l'interface web ou avec le [{{ fr.WBEX }}](/workspace/workspace-browser-extension/) Il n'a aucun effet sur {{ fr.RDM }}. Lors de la mise à jour, le {{ fr.DVLS }} doit être redémarré en utilisant le bouton Arrêter le serveur/Démarrer le serveur sur le {{ fr.DVLSCONSOLE }}. |
| Type de licence utilisateur                               | Sélectionner le type de licence. Par défaut, il s'agit de la gestion de connexion. |
| Lancer la connexion avec                          | Définit l'application qui ouvre les connexions à distance : {{ fr.RDM }} ou {{ fr.DLAUNCHER }}. Par défaut, il s'agit de {{ fr.DLAUNCHER }}. |
| Logo du serveur Grand / Logo du serveur Petit           | Voir la page [Personnalisations de Marque Blanche](/server/web-interface/administration/configuration/server-settings/general/advanced/white-labeling-customizations/) pour plus d'informations. |