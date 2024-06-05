---
eleventyComputed:
  title: Privilèges minimaux pour le mot de passe Active Directory
---
Avec un compte de fournisseur PAM, {{ fr.DVLS }} permet de faire tourner les mots de passe des comptes. Dans Active Directory, avoir un compte d'administrateur de domaine comme fournisseur peut être un peu excessif pour la rotation des mots de passe. L'article suivant décrit les étapes pour créer un compte Active Directory qui sera utilisé comme fournisseur PAM et aura la capacité de faire tourner les mots de passe dans Active Directory.

{% snippet, "shieldInfo" %}
Pour gérer les comptes d'administrateur de domaine comme comptes privilégiés dans le module PAM, le fournisseur AD PAM doit faire partie des groupes d'administrateurs de domaine. Il n'est alors pas nécessaire de suivre ces instructions.
{% endsnippet %}

## Étapes

1. Ouvrir la console Utilisateurs et Ordinateurs Active Directory.
1. Sélectionner l'Unité Organisationnelle (OU) dans laquelle se trouvent les comptes privilégiés ou un niveau OU supérieur pour englober toutes les OU que le compte fournisseur PAM devrait avoir la capacité de faire tourner les mots de passe des comptes.
1. Depuis le menu contextuel de l'OU, sélectionner ***Déléguer le Contrôle***.
![!!KB8022](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8022.png)
1. Dans la boîte de dialogue ***Bienvenue***, cliquer ensuite sur Suivant.
![!!KB8023](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8023.png)
1. Dans la boîte de dialogue Utilisateurs ou Groupes, sélectionner le compte qui sera utilisé comme compte fournisseur PAM dans {{ fr.DVLS }}. Puis cliquer sur ***Suivant***.
![!!KB8024](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8024.png)
1. Dans la boîte de dialogue ***Tâches à Déléguer***, sélectionner l'option ***Créer une tâche personnalisée à déléguer***. Puis cliquer sur ***Suivant***.
![!!KB8025](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8025.png)
1. Dans la boîte de dialogue ***Type d'Objet Active Directory***, sélectionner l'option ***Seulement les objets suivants dans le dossier***, cocher l'élément ***Objets utilisateur***. Puis cliquer sur ***Suivant***.
![!!KB8026](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8026.png)
1. Dans la boîte de dialogue ***Permissions***, sélectionner l'option ***Général***. Sélectionner les éléments ***Changer le mot de passe*** et ***Réinitialiser le mot de passe***. Puis décocher l'option ***Général***.
![!!KB8027](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8027.png)
1. De nouveau dans la boîte de dialogue Permissions, sélectionner l'option Spécifique à la propriété. Trouver et sélectionner les éléments suivants :
   - ***Lire le temps de verrouillage***
   - ***Écrire le temps de verrouillage***
   - ***Lire pwdLastSet***
   - ***Écrire PwdLastSet***
   - ***Lire user AccountControl***
   - ***Écrire user AccountControl***

   Puis cliquer sur Suivant
   ![!!KB8028](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8028.png)
   ![!!KB8030](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8030.png)
   ![!!KB8029](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8029.png)
10. Puis cliquer sur le bouton Terminer pour compléter la Délégation de Contrôle.
![!!KB8031](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8031.png)

{% snippet, "shieldInfo" %}
La fonction de rotation de mot de passe utilisera les règles de mot de passe intégrées par défaut de {{ fr.DVLS }}. Pour améliorer les règles de mot de passe afin de respecter les règles de mot de passe de votre domaine, créer un modèle de mot de passe dans ***Administration - Paramètres du système - Modèle de mot de passe***. Puis le définir comme le modèle de mot de passe par défaut dans ***Administration - Paramètres du système Gestion des mots de passe - Modèle de mot de passe***.
{% endsnippet %}
