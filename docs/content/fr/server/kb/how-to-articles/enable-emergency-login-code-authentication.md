---
eleventyComputed:
  title: Activer l'authentification par code d'urgence
---
Dans {{ fr.DVLS }}, activer la fonctionnalité pour un accès d'urgence permettant la connexion pour les administrateurs même si les fournisseurs sont en panne (Azure ou AD).
## Paramètres
1. Dans l'interface Web de {{ fr.DVLS }}, valider avoir un serveur de courriel (SMTP) configuré sous ***Administration - Paramètres du serveur - Courriel***.
1. Activer la fonctionnalité ***Activer l'authentification par Code d'Urgence*** dans ***Administration - Paramètres du serveur - Authentification***.
![!!KB4988](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4988.png)
1. Dans ***Administration - Utilisateurs - Général***, activer l'option ***Activer la Connexion d'Urgence*** pour chaque administrateur.
{% snippet, "badgeCaution" %}
L'utilisateur doit être administrateur. Avoir des droits d'administrateur uniquement via un ***Groupes d'Utilisateurs*** ne fonctionnera pas.
{% endsnippet %}
{% snippet, "badgeInfo" %}
Chaque administrateur devra configurer un courriel pour recevoir le code d'urgence.
{% endsnippet %}

![!!KB4989](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4989.png)

## Expérience de l'Utilisateur Final
À la connexion, l'option de faire une ***Connexion d'Urgence*** deviendra disponible.

1. Cliquer sur ***Connexion d'Urgence***.
![!!KB4990](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4990.png)
1. Entrer un ***Nom d'Utilisateur*** et cliquer sur ***Demander le Code d'Urgence***.
{% snippet, "badgeInfo" %}
Pour les systèmes Active Directory, le ***Nom d'Utilisateur*** doit être saisi en suivant le format du Nom Principal de l'Utilisateur (UPN). Cela signifie que le "nom d'utilisateur" est suivi du "signe arobase" suivi du nom du domaine Internet auquel l'utilisateur est associé.
{% endsnippet %}

![!!KB4991](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4991.png)

3. Coller le ***Code d'Urgence***, reçu par courriel, et cliquer sur ***Se Connecter***.
![!!KB4992](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4992.png)

Un journal sera affiché dans l'audit et dans le courriel d'administration qu'une connexion d'urgence a été utilisée.
