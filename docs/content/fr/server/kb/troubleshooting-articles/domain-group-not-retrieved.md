---
eleventyComputed:
  title: L'appartenance au groupe de domaine n'est pas récupérée correctement
  description: Ceci est une solution pour lorsque l'appartenance au groupe de domaine n'est pas récupérée correctement depuis Active Directory.
---
Les étapes suivantes sont les mêmes pour les licences Teams, Enterprise et Platinum.

1. Accéder à l'interface web de {{ fr.DVLS }} et se connecter en utilisant un compte administrateur.
1. Aller à l'onglet ***Administration***.
1. Aller à la page ***Paramètres du serveur – Authentification – Domaine***.
![Domaine](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0022.png)
1. Aller à votre domaine et cliquer sur le bouton ***Diagnostics***.
![Diagnostics](https://cdnweb.devolutions.net/docs/DVLS6035_2024_1.png)
1. Définir l'option ***Type de diagnostic*** sur ***Obtenir les groupes par utilisateur***.
![Obtenir les groupes par utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0013.png)
1. Entrer un nom d'utilisateur du groupe problématique dans le champ ***Paramètre***.
1. Définir l'option ***Stratégie*** sur ***Groupe de jetons d'entrée d'annuaire***.
![Stratégie](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0014.png)
1. Cliquer sur ***Obtenir le diagnostic***.
![Bouton Obtenir le diagnostic](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0015.png)
{% snippet, "badgeInfo" %}
Si cela échoue, utiliser à la place ***Groupe de jetons d'entrée d'annuaire (Legacy)*** ou ***Récursivement*** dans le menu déroulant ***Stratégie***.
{% endsnippet %}

9. Fermer cette fenêtre en cliquant sur ***Fermer***.
1. Aller à votre domaine et cliquer sur le bouton ***Modifier***.
![Modifier](https://cdnweb.devolutions.net/docs/DVLS6036_2024_1.png)
1. Cliquer sur ***Paramètres avancés***.
![Bouton Paramètres avancés](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0024.png)
1. Sous ***Stratégie***, changer l'option ***Obtenir les groupes par utilisateur*** pour celle sélectionnée à l'étape 7.
![Stratégie – Obtenir les groupes par utilisateur](https://cdnweb.devolutions.net/docs/DVLS6034_2024_1.png)
1. Cliquer sur ***OK*** pour sauvegarder les changements.
