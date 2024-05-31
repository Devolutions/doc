---
eleventyComputed:
  title: Codes de secours
  description: Les codes de secours sont des codes de validation qui fournissent aux utilisateurs un accès unique à {{ fr.DVLS }} lorsqu'ils n'ont pas accès à leur produit ou appareil d'authentification à deux facteurs (A2F) habituel. Ils doivent être générés au préalable et conservés en lieu sûr en cas d'urgence.
  keywords:
  - code de secours
---
Les codes de secours sont des codes de validation qui fournissent aux utilisateurs un accès unique à {{ fr.DVLS }} lorsqu'ils n'ont pas accès à leur produit ou appareil d'authentification multifacteur (AMF) habituel. Ils doivent être générés au préalable et conservés en lieu sûr en cas d'urgence.

Un administrateur doit d'abord activer l'option, après quoi les utilisateurs peuvent générer leurs codes de secours.

## Paramètres

### Activer les Codes de Secours (Administrateur)

Un administrateur doit activer les codes de secours comme méthode AMF alternative :

1. Dans ***Administration – Paramètres du Serveur – Authentification Multifacteur***, cocher la case ***Codes de secours***, puis cliquer sur ***Configurer*** à côté de l'option.
![Activer les Codes de Secours comme une Méthode AMF Alternative](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp7017.png)
1. Définir le ***Nombre de codes de secours*** qu'un utilisateur peut générer, puis cliquer sur ***Enregistrer***.
![Configurer le Nombre de Codes de Secours](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp7018.png)
1. Cliquer sur l'icône ***Enregistrer*** de la section ***Authentification Multifacteur*** pour sauvegarder vos modifications.

{% snippet, "badgeInfo" %}
Si votre ***Utilisation AMF*** est réglée sur ***AMF Optionnel par Utilisateur***, vous devez configurer l'AMF pour chaque utilisateur avant qu'ils puissent générer des codes de secours. Voir [Authentification Multifacteur (Modifier Utilisateur)](/server/web-interface/administration/security-management/users/edit-user-two-factor/) pour plus de détails.
{% endsnippet %}

### Générer des Codes de Secours (Utilisateur)

1. Pour générer des codes de secours, cliquer sur votre avatar dans le menu latéral de {{ fr.DVLS }}, puis cliquer sur ***Modifier votre Compte***.
![Modifier votre Compte](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp7020.png)
1. Aller à ***AMF Alternatif*** et cliquer sur ***Générer des codes de secours***. Une liste de codes de secours sera affichée. L'utilisateur peut copier et coller les codes et les stocker quelque part en sécurité en cas d'urgence.
![AMF Alternatif – Générer des codes de secours](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp7021.png)
