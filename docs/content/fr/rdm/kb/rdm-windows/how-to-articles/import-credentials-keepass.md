---
eleventyComputed:
  title: Importer des identifiants depuis KeePass
---
{{ fr.RDM }} importe des identifiants depuis KeePass. C'est une manière simple de construire vos données. Les informations importées peuvent être converties en trois types d'entrée : ***Nom d'utilisateur/Mot de passe*** et ***Site Web*** Les entrées incluent les identifiants, les adresses URL et les notes.

## Importer diverses entrées
{% youtube '0Oq4gLkF88A' %}

## Procédure

### Exporter des entrées depuis KeePass

1. Dans le menu ***Fichier***, cliquer sur ***Exporter***.
![!!KB4250](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4250.png)
1. Exporter les données vers un fichier externe. {{ fr.RDM }} prend en charge deux types de fichiers pour KeePass : XML et CSV. Un fichier XML conservera la structure des dossiers de KeePass.
    1. Choisir le type de fichier souhaité : ***KeePass CSV (1.x)*** ou ***KeePass XML (2.x)***.
{type="a"}
    1. Sélectionner le chemin pour sauvegarder le fichier exporté.
![!!KB4251](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4251.png)

### Importer des données dans {{ fr.RDM }}

1. Les données sont importées dans le dossier actuellement sélectionné.
![!!KB4252](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4252.png)
1. Choisir le type de fichier à importer dans ***Fichier – Importer***.
    1. Pour importer un fichier xml, choisir ***Importer depuis une session***.
![!!KB4253](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4253.png)
{type="a"}
    1. Pour importer un fichier csv, choisir ***Importer depuis une connexion***.
![!!KB4254](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4254.png)
1. Choisir un type d'entrée. Toutes les entrées importées sont converties en ce type.
![!!KB4255](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4255.png)
   | Option      | Description |
   | ----------- | ----------- |
   | Identifiants | Inclut le nom d'utilisateur, le mot de passe et le domaine. |
   | Site Web     | Inclut le nom d'utilisateur, le mot de passe et l'adresse du site Web. Bon choix pour les informations de site Web et peut être utilisé avec le {{ fr.WBEX }}. Dispose de plus de paramètres pour le navigateur web par défaut, l'affichage, les identifiants et les questions de sécurité. |

1. Sélectionner le fichier exporté de KeePass dans l'explorateur de fichiers et cliquer sur ***Ouvrir***.
1. Choisir les entrées à importer.
![!!KB4256](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4256.png)
1. Les entrées importées sont prêtes à l'emploi.
![!!KB4257](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4257.png)
