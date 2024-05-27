---
eleventyComputed:
  title: Expérience d'invitation de l'utilisateur final dans {{ fr.DHUBB }}
---
{% snippet, "badgeInfo" %}
L'administrateur peut [inviter des utilisateurs à se connecter avec l'identification unique (SSO)](/fr/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/), qui est un moyen d'identifier un utilisateur en utilisant un seul identifiant, à {{ fr.DHUBB }}. L'expérience d'invitation de l'utilisateur final est différente avec le SSO, car le courriel que l'utilisateur reçoit lui demande de se connecter avec Microsoft. Si tel est le cas, veuillez vous référer à [Expérience d'invitation de l'utilisateur final pour SSO](/fr/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/end-user-experience/).
{% endsnippet %}

Les utilisateurs qui sont invités à rejoindre {{ fr.DHUBB }} par un administrateur reçoivent un courriel d'invitation. Ce courriel varie selon que l'utilisateur possède ou non un {{ fr.DA }} et selon les paramètres de l'administrateur qui a envoyé l'invitation. Pour savoir comment inviter des utilisateurs, consultez [Créer et inviter des utilisateurs](/fr/hub/web-interface/administration/management/users/create-invite-users/).

Pour des informations concernant la première connexion de l'utilisateur à {{ fr.DHUBB }}, visitez l'une des sections ci-dessous en fonction de la situation de l'utilisateur.

* [Invité sans {{ fr.DA }}](#invité-sans--frda)
* [Invité avec un {{ fr.DA }} existant](#invité-avec-un--frda--existant)

Pour sauter les instruction de connexion et accéder directement aux fonctionnalités essentielles de {{ fr.DHUBB }}, rendez-vous à la section [Premiers pas dans {{ fr.DHUBB }}](#premiers-pas-dans--frphub--business).

## Première connexion

### Invité sans {{ fr.DA }}

Si l'utilisateur ne possède pas de {{ fr.DA }}, il aura besoin d'un [mot de passe temporaire](/fr/hub/web-interface/administration/management/users/create-invite-users/temporary-password/) pour accéder à {{ fr.DHUBB }}. L'administrateur qui a invité l'utilisateur peut inclure ou non ce mot de passe dans le courriel d'invitation.

Si le mot de passe temporaire est inclus, l'utilisateur reçoit un courriel d'invitation contenant un lien vers {{ fr.DHUBB }} avec son mot de passe temporaire.
![Courriel d'invitation – Mot de passe temporaire inclus](https://cdnweb.devolutions.net/docs/fr/hub/Hub2008.png)

Si le mot de passe temporaire n'est pas inclus, l'utilisateur reçoit un courriel d'invitation avec un lien vers {{ fr.DHUBB }} ainsi qu'un avis indiquant que l'administrateur lui transmettra bientôt le mot de passe temporaire.
![Courriel d'invitation – Mot de passe temporaire non inclus](https://cdnweb.devolutions.net/docs/fr/hub/Hub2011.png)

Une fois que les utilisateurs ont reçu leur mot de passe temporaire, ils sont prêts à se connecter à {{ fr.DHUBB }}.

1. Accéder au lien URL de {{ fr.DHUBB }}.
1. Saisir le mot de passe temporaire, puis cliquer sur ***Continuer***.
![Connexion – Aucun {{ fr.DA }}](https://cdnweb.devolutions.net/docs/fr/hub/Hub2009.png)
1. Créer un nouveau mot de passe pour le compte en respectant les restrictions relatives au mot de passe, puis cliquer sur ***Mettre à jour mon mot de passe***.
![Modification du mot de passe](https://cdnweb.devolutions.net/docs/fr/hub/Hub2010.png)

Maintenant que vous avez accès à {{ fr.DHUBB }}, vous pouvez passer à la section [Premiers pas dans {{ fr.DHUBB }}](#premiers-pas-dans--frphub--business).

### Invité avec un {{ fr.DA }} existant

Si l'utilisateur possède déjà un {{ fr.DA }}, il recevra un courriel d'invitation avec un lien vers {{ fr.DHUBB }}.
![Courriel d'invitation – {{ fr.DA }} existant](https://cdnweb.devolutions.net/docs/fr/hub/Hub2006.png)
1. Accéder au lien URL de {{ fr.DHUBB }}.
1. Saisir vos identifiants de {{ fr.DA }}, puis cliquer sur ***Continuer***.
![Connexion – {{ fr.DA }} existant](https://cdnweb.devolutions.net/docs/fr/hub/Hub2007.png)

Maintenant que vous avez accès à {{ fr.DHUBB }}, vous pouvez continuer à la section suivante.

## Premiers pas dans {{ fr.DHUBB }}

Après vous être connecté, {{ fr.DHUBB }} s'ouvre sur l'onglet ***{{ fr.VLT_MAJ }}***. Cette vue permet d'interagir avec les {{ fr.VLT }}s et les entrées auxquels vous avez accès. Vous pouvez changer de {{ fr.VLT }} en utilisant le menu de sélection des {{ fr.VLT }}s en haut.
![Onglet {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/fr/hub/Hub2001.png)
Vous pouvez aussi accéder à votre ***{{ fr.UVLT }}***, qui est centré sur l'utilisateur et est utilisé pour stocker des informations telles que des identifiants de comptes personnels, en cliquant sur l'onglet ***{{ fr.UVLT_MAJ }}*** dans le menu latéral.
![Onglet {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/fr/hub/Hub2002.png)

### Créer des entrées

Le {{ fr.WBEX }} est notre extension de navigateur Web pour les mots de passe. Il s'agit du client privilégié à utiliser en conjonction avec {{ fr.DHUBB }} pour créer et gérer les entrées d'identifiants de sites Web. Consultez [Ajouter une entrée de site Web dans {{ fr.DHUBB }} par le {{ fr.WBEX }}](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-business/add-entry-hub-business-workspace-browser-extension/) pour connaître les étapes permettant d'ajouter une entrée de site Web avec le {{ fr.WBEX }}, ou consultez [Créer des entrées manuellement](/fr/hub/web-interface/entries/create-entries-manually/) pour savoir comment les créer directement dans {{ fr.DHUBB }}. Vous pouvez également suivre les étapes ci-dessous pour créer manuellement une entrée dans votre ***{{ fr.UVLT }}***.

1. Sélectionner le dossier dans lequel vous voulez créer la nouvelle entrée, le cas échéant. Sinon, passez cette première étape.
1. Cliquer sur le bouton ***Ajouter*** situé dans le ***{{ fr.NPANE }}***.
![Bouton Ajouter](https://cdnweb.devolutions.net/docs/fr/hub/Hub2003.png)
1. Sélectionner le type d'entrée que vous voulez créer. Vous pouvez effectuer une recherche par catégories avec le menu latéral ou appliquer un filtre avec la barre de recherche. Cliquer sur ***Continuer*** lorsque votre type d'entrée est sélectionné.
{% snippet, "badgeInfo" %}
Pour en apprendre davantage sur les types d'entrées, visitez [Type d'entrée](/fr/hub/web-interface/entries/entry-type/).
{% endsnippet %}

![Ajouter une entrée](https://cdnweb.devolutions.net/docs/fr/hub/Hub2004.png)

4. Remplir les informations pertinentes pour le type d'entrée que vous avez sélectionné, puis cliquer sur ***Ajouter***.
![Exemples de champs d'information à remplir](https://cdnweb.devolutions.net/docs/fr/hub/Hub2005.png)
