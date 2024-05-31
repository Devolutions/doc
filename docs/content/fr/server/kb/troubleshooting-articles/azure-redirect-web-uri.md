---
eleventyComputed:
  title: L'URI de redirection spécifié dans la demande ne correspond pas à l'URI de redirection configuré pour l'application
---
{% snippet, "badgeCaution" %}
Le problème d'authentification Office365 suivant se produit sur une instance {{ fr.DVLS }} mise à jour d'une version antérieure à 2022.1.13.0 vers 2022.1.13 ou supérieure.
{% endsnippet %}

Lors de la tentative d'authentification sur l'interface web {{ fr.DVLS }} en utilisant la méthode d'authentification Office365, l'erreur suivante est affichée.
![!!KB8099](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8099.png)

## Solution

1. Aller dans le portail Azure Active Directory.
1. Trouver l'application Web {{ fr.DVLS }} dans Enregistrement d'application.
![Azure App Registration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8100.png)
1. Dans les propriétés URIs de redirection de l'application, mettre à jour l'URI de **https://<access_uri>/login** à cet URI **https://<access_uri>/api/external-provider-response**.
![Redirect URI](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8101.png)
1. Enregistrer la modification.
1. Recharger la page web {{ fr.DVLS }} pour vous connecter correctement avec votre compte Office365.
