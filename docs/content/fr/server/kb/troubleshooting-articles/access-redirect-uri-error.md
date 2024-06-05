---
eleventyComputed:
  title: L'URI de redirection spécifié n'est pas valide pour cette application cliente.
---
L'erreur suivante est affichée lorsque vous tentez de vous connecter sur la page web de {{ fr.DVLS }}.
![!!KB8060](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8060.png)

## Solution

{% snippet, "badgeNotice" %}
L'URI d'accès est sensible à la casse et doit respecter le nom d'hôte du certificat.
{% endsnippet %}

Pour résoudre ce problème, vérifier que l'URI d'accès est correctement défini dans l'onglet IIS des paramètres de {{ fr.DVLS }}. Veuillez consulter [URI d'accès](/server/kb/knowledge-base/access-uri/) pour plus d'informations.
![!!KB8061](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8061.png)
