---
eleventyComputed:
  title: Créer et inviter des utilisateurs
  description: Créer et inviter des utilisateurs à votre {{ fr.DHUBB }} avec leur adresse courriel.
---
Créer et inviter des utilisateurs à votre {{ fr.DHUBB }} avec leur adresse courriel.

{% snippet, "badgeCaution" %}
Si votre {{ fr.DHUBB }} est configuré avec une authentification SSO, suivre le processus spécifique pour inviter des utilisateurs dans [Inviter des utilisateurs pour SSO dans {{ fr.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/).
{% endsnippet %}

{% snippet, "badgeCaution" %}
Nous recommandons fortement d'inviter au moins un autre administrateur. Apprendre comment dans [Invitation d'administrateur](/hub/web-interface/administration/management/users/administrator-invite/).
{% endsnippet %}

### Inviter des utilisateurs
1. Aller à ***Administration – Utilisateurs***.
1. Cliquer ***Ajouter des utilisateurs***.
![!!Hub4181](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4181.png)
1. Taper l'adresse courriel de l'utilisateur.
{% snippet, "badgeInfo" %}
Il est possible de coller une liste d'adresses courriel d'***Utilisateurs*** qui feront partie des mêmes [Groupes d'utilisateurs](/hub/web-interface/administration/management/user-groups/). Chaque adresse courriel doit être séparée par un point-virgule (;) ou une virgule (,).
{% endsnippet %}

4. Appuyer sur Entrée. Cette étape valide si l'utilisateur possède un {{ fr.DA }} : 
    * Si oui, cela liera le compte à {{ fr.DHUBB }} et l'utilisateur recevra un courriel d'invitation.
    * Si non, cela créera automatiquement un {{ fr.DA }} avec un ***Mot de passe temporaire***, que vous pouvez choisir comment gérer. Vous pouvez gérer comment les ***Mots de passe temporaires*** sont gérés dans ***Administration – Paramètres du système – Général***.
![!!Hub4182](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4182.png)

5. Cliquer ***Suivant***.
1. Sélectionner des ***Options*** supplémentaires.
![!!Hub4183](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4183.png)

   {% snippet, "badgeInfo" %}
   Pour définir un profil d'interface utilisateur pour un utilisateur, vous devrez le créer et l'inviter d'abord. Ensuite, dans ***Administration – Utilisateurs***, l'option sera disponible lors de l'édition de cet utilisateur.
   {% endsnippet %}

1. Cliquer ***Suivant***.
1. Assigner des ***Groupes d'utilisateurs***.
   {% snippet, "badgeInfo" %}
   Les ***Groupes d'utilisateurs*** doivent être définis au préalable comme un groupe personnalisé dans {{ fr.DHUB }}. Pour plus d'informations, voir [Groupes d'utilisateurs](/hub/web-interface/administration/management/user-groups/).
   {% endsnippet %}

   ![!!Hub4184](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4184.png)

9. Cliquer ***Envoyer l'invitation***.

{{ fr.DHUB }} enverra un courriel avec les informations essentielles aux utilisateurs invités ; le lien pour accéder au {{ fr.DHUBB }}, l'ID d'invitation, et la clé.
