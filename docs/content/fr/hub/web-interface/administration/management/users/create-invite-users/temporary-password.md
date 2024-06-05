---
eleventyComputed:
  title: Mot de passe temporaire
---
***Mot de passe temporaire*** sont créés automatiquement pour les nouveaux utilisateurs qui sont invités à {{ fr.DHUBB }} et qui n'ont pas de {{ fr.DA }}.

{% snippet, "badgeNotice" %}
Vous pouvez prédéfinir comment ils sont gérés dans ***Administration - Paramètres du système - Général***. Pour un aperçu sur le sujet, voir [Général](/hub/web-interface/administration/configuration-security/system-settings/).
{% endsnippet %}


## Configuration du mot de passe temporaire

### Invité avec un {{ fr.DA }} existant

Dans le processus d'invitation, lorsqu'un {{ fr.DA }} est trouvé pour l'utilisateur, il liera automatiquement le compte à {{ fr.DHUBB }}.

{% snippet, "badgeNotice" %}
Dans ce cas, le ***Mot de passe temporaire*** n'est pas utilisé puisque le compte existe déjà.
{% endsnippet %}

![!!Hub4185](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4185.png)

L'utilisateur recevra un email d'invitation avec un lien vers {{ fr.DHUB }}. Pour y accéder, l'utilisateur se connecte avec ses identifiants {{ fr.DA }} actuels.
![!!Hub4187](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4187.png)

### Gérer automatiquement le mot de passe temporaire pour l'invité sans {{ fr.DA }}

Lors de l'invitation d'un utilisateur qui n'a pas de {{ fr.DA }}, {{ fr.DHUB }} créera le compte et ajoutera l'utilisateur dans le {{ fr.VLT }}.

Dans le processus, vous pouvez choisir de laisser {{ fr.DHUB }} gérer automatiquement le ***Mot de passe temporaire*** et l'envoyer via l'email d'invitation.
![!!Hub4186](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4186.png)

L'utilisateur recevra un email d'invitation avec un lien vers le hub avec leur ***Mot de passe temporaire***.

Il sera rappelé de changer son mot de passe.
![!!Hub4188](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4188.png)

### Gérer manuellement le mot de passe temporaire pour l'invité sans {{ fr.DA }}

Lors de l'invitation d'un utilisateur qui n'a pas de {{ fr.DA }}, {{ fr.DHUB }} créera le compte et ajoutera l'utilisateur dans le {{ fr.VLT }}.

Dans le processus, vous pouvez choisir de gérer manuellement le ***Mot de passe temporaire*** depuis {{ fr.DHUB }}.
![!!Hub4189](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4189.png)

Dans la fenêtre ***Rapport d'invitation de masse***, vous devrez copier ou télécharger le PDF du ***Mot de passe temporaire*** pour chacun de vos utilisateurs. Cela est obligatoire, puisqu'ils auront besoin du ***Mot de passe temporaire*** pour accéder à {{ fr.DHUBB }}.
![!!Hub4191](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4191.png)

L'utilisateur recevra l'email d'invitation automatique avec un lien vers {{ fr.DHUB }} et un avertissement que vous lui transmettrez le ***Mot de passe temporaire***.
![!!Hub4190](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4190.png)
