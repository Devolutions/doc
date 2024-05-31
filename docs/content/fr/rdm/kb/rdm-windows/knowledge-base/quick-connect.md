---
eleventyComputed:
  title: Connexion Rapide
---
Via la barre d'outils de connexion rapide, ouvrir une session ad-hoc en spécifiant l'hôte et le type de session. Il est également possible de créer un modèle et d'établir la connexion avec votre modèle. Configurer les paramètres dans le modèle, {{ fr.RDM }} les appliquera lors de la connexion à l'hôte spécifié.
## Paramètres
Le contrôle est composé de plusieurs sous-contrôles.
![!!KB4446](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4446.png)
{% snippet, "badgeInfo" %}
Lister les appareils découvrables sur le réseau est une opération longue.
{% endsnippet %}

Le bouton ellipsis listera l'ordinateur découvrable sur le réseau pour vous permettre de sélectionner un ordinateur dans la liste.
### Utiliser des modèles
![!!KB4447](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4447.png)
{{ fr.RDM }} offre des modèles par défaut pour se connecter avec la fonctionnalité Connexion Rapide, mais il est possible d'utiliser [des modèles personnalisés](/rdm/windows/commands/file/templates/creating-templates/) Dans ce cas, le champ ***hôte*** dans le modèle doit être défini sur la variable $QUICK_CONNECT$. Lorsqu'ils sont créés, les modèles personnalisés sont automatiquement ajoutés en bas de la liste des types.
