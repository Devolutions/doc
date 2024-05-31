---
eleventyComputed:
  title: Configurer {{ fr.DVLS }} PAM dans {{ fr.RDM }}
  description: Ce sujet couvre plusieurs manières de configurer et d'utiliser la fonctionnalité PAM de {{ fr.DVLS }} dans {{ fr.RDM }}
---
Ce sujet couvre plusieurs manières de configurer et d'utiliser la fonctionnalité PAM de {{ fr.DVLS }} dans {{ fr.RDM }}.
{% snippet, "badgeInfo" %}
Une autre alternative serait d'utiliser le [tableau de bord PAM](/rdm/commands/view/panels/pam-dashboard/) et de lancer des sessions à partir de celui-ci.
{% endsnippet %}

## Étapes
1. Aller dans ***Propriétés*** – ***Commun*** – ***Général*** – ***Identifiants*** et sélectionner ***Compte privilégié*** dans le menu déroulant.
![Compte privilégié](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0051.png)
1. Cliquer sur le bouton des points de suspension et sélectionner un compte configuré dans le module PAM.
![Bouton des points de suspension](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0052.png)

### Plusieurs Utilisateurs
Si chaque utilisateur a un compte privilégié qu'il souhaite utiliser, voici les étapes :
1. Sous ***Propriétés*** – ***Commun*** – ***Général***, régler l'option dans le menu déroulant ***Identifiants*** sur ***Mon compte privilégié***.
1. Ensuite, ces utilisateurs doivent définir le compte PAM souhaité sous ***Fichier*** – ***Paramètres de mon compte*** – ***Mes paramètres par défaut*** – ***Mon compte privilégié***.
![Mon compte privilégié](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0053.png)
1. Sélectionner l'option ***Compte privilégié DVLS*** sous ***Gestion des accès privilégiés***.
![Compte privilégié DVLS](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0054.png)
1. Entrer l'URL de {{ fr.DVLS }}, le ***Nom d'utilisateur*** et sélectionner le compte PAM.
{% snippet, "badgeInfo" %}
Il est également possible de cocher l'option ***Toujours demander avec la liste*** pour sélectionner avec quel compte se connecter à chaque fois.
{% endsnippet %}
