---
eleventyComputed:
  title: Liste des points d'accès Internet utilisés par {{ fr.DHUB }}
  description: Ceci est la liste des adresses qui sont accédées par {{ fr.DHUB }} pendant son fonctionnement normal.
  keywords:
  - points d'accès
---
Ceci est la liste des adresses qui sont accédées par {{ fr.DHUB }} pendant son fonctionnement normal.

{% snippet, "badgeWarning" %}
Nous utilisons une approche de "meilleur effort" pour maintenir cette liste, mais cela **ne remplace pas les bonnes pratiques de sécurité informatique**. Si la sécurité est primordiale, il serait préférable de bloquer d'abord tout accès Internet, puis d'autoriser les adresses souhaitées au besoin.
{% endsnippet %}

## Liste des points d'accès

| Description               | URL                                                                                          | Action associée                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Certains graphiques       | https<area>://chart.googleapis.com                                                           | Service de graphiques pour l'affichage dans les tableaux de bord      |
| Certaines icônes          | https<area>://use.fontawesome.com/                                                           | Fournisseur d'icônes                                  |
| Certaines images          | https<area>://cdnweb.devolutions.net                                           | Service d'images                                   |
| {{ fr.DSEND }}            | https<area>://send.devolutions.com                                                           | Envoyer des mots de passe par courriel/lien de manière externe        |
| Polices pour l'application | https<area>://fonts.googleapis.com<br>https<area>://fonts.gstatic.com                        | Fournisseur de polices pour afficher l'application       |
| Connexion                 | https<area>://login.devolutions.com                                                          | Fournisseur de connexion                                  |
| Avatars d'utilisateur     | https<area>://secure.gravatar.com<br>https<area>://ui-avatars.com<br>https<area>://i2.wp.com | Service d'avatars                                  |
| Icônes de site Web (favicon)   | https<area>://iconcache.devolutions.com                                                      | Service de favicon Devolutions pour les entrées de site Web |