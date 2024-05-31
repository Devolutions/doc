---
eleventyComputed:
  title: Expérience d'invitation des utilisateurs finaux dans {{ fr.DHUBB }}
---
{% youtube 'FObiAXJrBXI' %}

{% snippet, "badgeInfo" %}
L'administrateur peut [Inviter des utilisateurs à se connecter avec l'authentification unique (SSO)](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/), qui est une manière d'identifier un utilisateur avec un identifiant unique, à {{ fr.DHUBB }}. L'expérience d'invitation des utilisateurs finaux est différente avec le SSO, car l'email que l'utilisateur reçoit lui demande d'utiliser l'option « Se connecter avec Microsoft » pour se connecter. Si c'est le cas, veuillez vous référer à [Expérience d'invitation des utilisateurs finaux pour le SSO](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/end-user-experience/).
{% endsnippet %}

Les utilisateurs invités à rejoindre {{ fr.DHUBB }} par un administrateur reçoivent un email d'invitation. Cet email varie selon que l'utilisateur possède ou non un {{ fr.DA }} et selon les paramètres de l'administrateur qui a envoyé l'invitation. Pour apprendre à inviter des utilisateurs, visitez [Créer et inviter des utilisateurs](/hub/web-interface/administration/management/users/create-invite-users/).

Pour des informations concernant la première connexion de l'utilisateur à {{ fr.DHUBB }}, visitez l'une des sections ci-dessous basées sur la situation de l'utilisateur.

* [Invité sans {{ fr.DA }}](#invitee-with-no--enda)
* [Invité avec un {{ fr.DA }} existant](#invitee-with-an-existing--enda)

Pour passer les instructions de connexion et aller directement aux fonctionnalités essentielles de {{ fr.DHUBB }}, allez à la section [Premiers pas dans {{ fr.DHUBB }}](#first-steps-in--enphub--business).

## Première Connexion

### Invité sans {{ fr.DA }}

Si l'utilisateur n'a pas de {{ fr.DA }}, il aura besoin d'un [Mot de passe temporaire](/hub/web-interface/administration/management/users/create-invite-users/temporary-password/) pour accéder à {{ fr.DHUBB }}. L'administrateur qui a invité l'utilisateur peut inclure ce mot de passe dans l'email d'invitation ou non.

Si le mot de passe temporaire est inclus, l'utilisateur reçoit un email d'invitation avec un lien vers {{ fr.DHUBB }} avec leur mot de passe temporaire.
![Email d'invitation – Mot de passe temporaire inclus](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2000.png)

Si le mot de passe temporaire n'est pas inclus, l'utilisateur reçoit un email d'invitation avec un lien vers {{ fr.DHUBB }} et un avis que l'administrateur leur transmettra bientôt le mot de passe temporaire.
![Email d'invitation – Mot de passe temporaire non inclus](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2001.png)

Une fois que les utilisateurs ont reçu leur mot de passe temporaire, ils sont prêts à se connecter à {{ fr.DHUBB }}.

1. Accéder au lien URL de {{ fr.DHUBB }}.
1. Entrer le mot de passe temporaire, puis cliquer sur ***Continuer***.
![Connexion – Pas de {{ fr.DA }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2002.png)
1. Créer un nouveau mot de passe pour le compte en suivant les restrictions de mot de passe, puis cliquer sur ***Mettre à jour le mot de passe***.
![Modification du mot de passe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2003.png)

Maintenant que vous avez accès à {{ fr.DHUBB }}, vous pouvez passer à la section [Premiers pas dans {{ fr.DHUBB }}](#first-steps-in--enphub--business).

### Invité avec un {{ fr.DA }} existant

Si l'utilisateur possède déjà un {{ fr.DA }}, il reçoit un email d'invitation avec un lien vers {{ fr.DHUBB }}.
![Email d'invitation – {{ fr.DA }} existant](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2004.png)

1. Accéder au lien URL de {{ fr.DHUBB }}.
1. Entrer vos identifiants {{ fr.DA }}, puis cliquer sur ***Continuer***.
![Connexion – Compte Devolutions existant](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2005.png)

Maintenant que vous avez accès à {{ fr.DHUBB }}, vous pouvez continuer à la section suivante.

## Premiers pas dans {{ fr.DHUBB }}

Après s'être connecté, {{ fr.DHUBB }} s'ouvre sur l'onglet ***{{ fr.VLT_MAJ }}***. Dans cette vue, il est possible d'interagir avec les {{ fr.VLT }}s et les entrées auxquelles vous avez accès. Vous pouvez changer de {{ fr.VLT }} en utilisant le menu sélecteur de {{ fr.VLT }} en haut.
![Onglet {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2006.png)

Vous pouvez également accéder à votre ***{{ fr.UVLT }}***, qui est centré sur l'utilisateur et est utilisé pour stocker des informations telles que les identifiants de compte personnels, en cliquant sur l'onglet ***{{ fr.UVLT_MAJ }}*** dans le menu latéral.
![Onglet {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2007.png)

### Créer des entrées

L'{{ fr.WBEX }} est notre extension de navigateur Web pour les mots de passe. C'est le client préféré à utiliser conjointement avec {{ fr.DHUBB }} pour créer et gérer les entrées d'identifiants de sites Web. Visitez [Ajouter une entrée de site Web dans {{ fr.DHUBB }} avec l'{{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/add-entry-hub-business-workspace-browser-extension/) pour les étapes sur comment ajouter une entrée de site Web avec l'{{ fr.WBEX }}, ou visitez [Créer des entrées manuellement](/hub/web-interface/entries/create-entries-manually/) pour savoir comment les créer directement dans {{ fr.DHUBB }}. Vous pouvez également suivre les étapes ci-dessous pour créer manuellement une entrée dans votre ***{{ fr.UVLT }}*** :

1. Sélectionner le dossier où vous souhaitez créer la nouvelle entrée, si applicable. Sinon, passer cette première étape.
1. Cliquer sur le bouton ***Ajouter*** situé dans le ***{{ fr.NPANE }}***.
![Bouton Ajouter](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2008.png)
1. Sélectionner le type d'entrée que vous souhaitez créer. Vous pouvez rechercher par catégories avec le menu latéral ou appliquer un filtre avec la barre de recherche. Cliquer sur ***Continuer*** lorsque votre type d'entrée est sélectionné.
{% snippet, "badgeInfo" %}
Pour en savoir plus sur les types d'entrées, visitez [Type d'entrée](/hub/web-interface/entries/entry-type/).
{% endsnippet %}

![Ajouter une nouvelle entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2009.png)

4. Remplir les informations pertinentes pour le type d'entrée sélectionné, puis cliquer sur ***Ajouter***.
![Exemples de champs d'informations à remplir](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2010.png)
