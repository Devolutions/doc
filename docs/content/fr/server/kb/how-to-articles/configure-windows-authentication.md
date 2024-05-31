---
eleventyComputed:
  title: Configurer l'authentification unique (SSO) de domaine
  description: La machine hébergeant {{ fr.DVLS }} doit être jointe au domaine configuré pour que l'authentification unique (SSO) de domaine fonctionne.
---
{% snippet, "badgeCaution" %}
La machine hébergeant {{ fr.DVLS }} doit être jointe au [domaine configuré](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) pour que l'authentification unique (SSO) de domaine fonctionne.
{% endsnippet %}

Ces étapes fournissent les informations pour activer la fonctionnalité ***d'authentification unique (SSO) de domaine*** dans {{ fr.DVLS }}.

## Étapes

1. Ouvrir l'application de bureau ***Gestionnaire de serveur*** et aller à ***Gérer – Ajouter des rôles et fonctionnalités***.
![Ajouter des rôles et fonctionnalités](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5001.png)
1. Dans la section ***Rôles de serveur***, s'assurer que le rôle de serveur ***Authentification Windows*** est installé.
1. Une fois terminé, fermer la fenêtre ***Assistant Ajout de rôles et fonctionnalités*** et la fenêtre ***Gestionnaire de serveur***.
![Authentification Windows](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4378.png)
3. Ouvrir le ***Gestionnaire IIS***. Sélectionner le serveur dans l'arborescence et ouvrir la ***Délégation des fonctionnalités*** dans la section ***Gestion***.
![Délégation des fonctionnalités](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4379.png)
1. Définir la fonctionnalité ***Authentification - Windows*** à la valeur ***Lecture/Écriture***.
1. Une fois terminé, fermer le ***Gestionnaire IIS***.
![Authentification - Windows](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2129.png)
1. Dans ***Administration – Paramètres du serveur – Authentification*** de l'interface web de l'instance {{ fr.DVLS }}, cocher la case de l'option ***Activer l'authentification unique (SSO) de domaine***. Une fois terminé, cliquer sur le bouton ***Enregistrer***.
![Cocher l'option Activer l'authentification unique (SSO) de domaine](https://cdnweb.devolutions.net/docs/DVLS6007_2024_1.png)
1. Définir les propriétés des informations d'identification de l'administrateur dans ***Administration – Paramètres du serveur – Authentification – Domaines***.
7. Enfin, dans la configuration de la source de données de chaque client dans {{ fr.RDM }}, activer l'option ***Utiliser l'authentification Windows***, puis cliquer sur ***OK*** une fois terminé pour enregistrer les modifications.
![Utiliser l'authentification Windows](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4381.png)
