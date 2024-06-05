---
eleventyComputed:
  title: Aucune licence Entreprise trouvée dans {{ fr.RDM }} avec {{ fr.DHUBB }}
---
Avec une licence {{ fr.RDM }} valide, vous êtes alerté par le message d'erreur ***Aucune Licence Entreprise Trouvée*** dans la version 2022.3.X liée à une source de données {{ fr.DHUBB }}.

{% snippet, "badgeInfo" %}
Pour en savoir plus sur cette amélioration majeure, lisez notre dernier blog Devolutions [{{ fr.RDM }} Gratuit et Entreprise sont maintenant unifiés](https://blog.devolutions.net/2022/10/news-remote-desktop-manager-is-changing-for-the-better/).
{% endsnippet %}

## Solution

Enregistrer la licence produit {{ fr.RDM }} dans {{ fr.DHUB }} et l'attribuer aux utilisateurs.

{% snippet, "badgeCaution" %}
Seuls les ***Administrateurs*** et les utilisateurs avec des permissions dans la section ***Permissions Système*** auront accès à l'enregistrement d'une licence dans {{ fr.DHUBB }}.
{% endsnippet %}

1. Dans {{ fr.RDM }}, cliquer ***Administration – Licence*** pour être redirigé vers l'interface web de {{ fr.DHUB }}.
1. Cliquer le bouton ***Ajouter***.
![Administration – Licences](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5024.png)
1. Coller la ***Licence*** {{ fr.RDM }} et cliquer ***Ajouter***.
![Licence Produit](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5023.png)
1. Attribuer la licence produit {{ fr.RDM }} en cliquant sur le bouton ***Modifier***.
![Administration – Licences – Modifier](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5025.png)
1. Cliquer ***Attribué À*** et gérer l'accès à la licence de vos utilisateurs.
![Licence Produit – Attribué À](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5026.png)
1. Cliquer ***Mettre à jour*** pour sauvegarder.
1. Redémarrer {{ fr.RDM }}.