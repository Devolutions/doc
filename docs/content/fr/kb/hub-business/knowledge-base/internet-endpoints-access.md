---
eleventyComputed:
  title: Liste des points de terminaison auxquels {{ fr.DHUB }} accède
  description: Voici la liste des adresses que {{ fr.DHUB }} pourrait utiliser durant les activités normales.
  keywords: 
  - endpoints
---
Voici la liste des adresses que {{ fr.DHUB }} pourrait utiliser durant les activités normales.  

{% snippet icon.badgeWarning %}
Nous utilisons une approche de « meilleur effort » pour maintenir cette liste à jour, mais celle-ci ne remplace pas les meilleures pratiques de sécurité TI. Si la sécurité est primordiale, il serait préférable de bloquer d'abord tout accès à Internet, puis de mettre les adresses souhaitées sur une liste d'autorisation si nécessaire. 
{% endsnippet %}

## Liste des points de terminaison

| Description                    | URL                                                                            | Action(s) associée(s) |
| ------------------------------ | ------------------------------------------------------------------------------ | ------------------------- |
| Connexion                      | https<area>://login.devolutions.com                                            | Fournisseur d'accès |
| Polices de caractères pour l'application | https<area>://fonts.googleapis.com<br>https<area>://fonts.gstatic.com | Fournisseur de polices pour l'affichage de l'application |
| Icônes du site Web (favicône)  | https<area>://iconcache.devolutions.com                                        | Le service favicône de Devolutions pour les entrées de sites Web |
| Avatars d'utilisateurs         | https<area>://secure.gravatar.com<br>https<area>://ui-avatars.com<br>https<area>://i2.wp.com | Service des avatars |
| Certains graphiques            | https<area>://chart.googleapis.com                                             | Service de graphiques à afficher dans les tableaux de bord |
| Certaines images               | https<area>://cdnweb.devolutions.net                             | Service pour les images |
| Certaines icônes               | https<area>://use.fontawesome.com/                                             | Fournisseur d'icônes |