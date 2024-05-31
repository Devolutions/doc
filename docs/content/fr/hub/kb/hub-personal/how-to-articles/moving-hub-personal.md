---
eleventyComputed:
  title: Passer à {{ fr.DHUBP }}
  description: Voici les étapes pour transférer vos données vers {{ fr.DHUBP }} dans {{ fr.RDM }}.
---
Le {{ fr.DHUBP }} est destiné aux utilisateurs individuels qui souhaitent utiliser un gestionnaire de mots de passe personnel sécurisé. Voici les étapes pour transférer vos données vers {{ fr.DHUBP }} dans {{ fr.RDM }}.

{% snippet, "badgeHelp" %}
Commencer par créer un [{{ fr.DHUBP }}](/hub/getting-started/create-hub/hub-personal/).
{% endsnippet %}

## Ajouter {{ fr.DHUBP }} dans {{ fr.RDM }} comme Source de Données
1. Dans {{ fr.RDM }}, aller à ***Fichier – Sources de données*** et cliquer sur le signe plus pour ***Ajouter une Nouvelle Source de Données***.
1. Sélectionner la source de données ***{{ fr.DHUBP }}*** et cliquer sur ***OK***.
![{{ fr.DHUBP }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4823.png)
1. Remplir les champs dans la section ***Général*** et cliquer sur ***OK*** une fois terminé.
    1. ***Nom*** : Nom de la source de données.
{type="a"}
    1. ***Nom d'utilisateur*** : Adresse courriel.
![Identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4824.png)

## Exporter et Importer Votre Source de Données
Vous pouvez migrer vos données dans {{ fr.RDM }} à partir de multiples sources.

* Pour exporter et importer votre source de données déjà configurée dans {{ fr.RDM }}, aller à [Migration de Données](/rdm/kb/rdm-windows/how-to-articles/data-migration/).
* Nous supportons également les formats d'importation natifs [formats d'importation](/rdm/windows/commands/file/import/) de nombreux outils populaires sur le marché.
