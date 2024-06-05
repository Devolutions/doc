---
eleventyComputed:
  title: Créer un modèle de {{ fr.VLT }}
---
***Modèles de {{ fr.VLT_MAJ }}*** sont disponibles dans {{ fr.RDM }} 2022.1.11 et versions supérieures avec des sources de données avancées. Pour les versions antérieures de {{ fr.RDM }}, suivre le [contournement](#vault-template-workaround-for-remote-desktop-manager-version-lower-than-2022.1.11).

{% snippet, "badgeInfo" %}
Cette fonctionnalité n'est pas disponible avec la source de données {{ fr.DVLS }}.
{% endsnippet %}

## Modèle de {{ fr.VLT_MAJ }} pour {{ fr.RDM }} 2022.1.11 et versions supérieures
1. Aller à ***Administration – Paramètres Système – Gestion de {{ fr.VLT_MAJ }} – Modèles de {{ fr.VLT_MAJ }}***.
1. Cliquer ***Ajouter un modèle***.
![!!KB4938](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4938.png)
1. Nommer le ***modèle de {{ fr.VLT }}*** et définir les options pour ce modèle.
1. Cliquer ***OK***.
![!!KB4939](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4939.png)
Lors de la création d'un nouveau {{ fr.VLT }} dans ***Administration – {{ fr.VLT_MAJ }}s***, cliquer ***Modèle*** pour sélectionner votre ***Modèle de {{ fr.VLT }}*** dans la liste.
![!!KB4940](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4940.png)

## Contournement de modèle de {{ fr.VLT_MAJ }} pour {{ fr.RDM }} version inférieure à 2022.1.11
{% youtube '0GwzZJ-JS7Q' %}

1. Dans un {{ fr.VLT }} vide, créer la structure (dossiers/sessions) nécessaire.
1. Créer un nouveau {{ fr.VLT }} dans ***Administration – {{ fr.VLT_MAJ }}s – Ajouter {{ fr.VLT }}***.
1. Sélectionner tous les dossiers/sessions souhaités dans le modèle, clic droit ***Ajouter – Enregistrer comme Groupe de Modèles***.
1. Nommer le ***modèle de {{ fr.VLT }}***.
1. Dans le nouveau {{ fr.VLT }}, cliquer ***Nouvelle Entrée – Modèle*** et sélectionner le ***modèle de {{ fr.VLT }}*** créé.
