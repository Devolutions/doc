---
eleventyComputed:
  title: Recherche dans {{ fr.UVLT }}
---
La recherche {{ fr.UVLT }} permet de lier une entrée d'identifiants {{ fr.UVLT }} à une session en fournissant le nom de l'entrée d'identifiants. Une fois l'identifiant trouvé, il sera automatiquement utilisé pour ouvrir votre session à distance.

## Paramètres

1. Créer une entrée d'identifiants dans le {{ fr.UVLT }}.
![{{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6004.png)
1. Dans la session à distance, définir la propriété des identifiants sur recherche {{ fr.UVLT }} et entrer le nom exact de l'identifiant {{ fr.UVLT }}. La recherche n'est pas sensible à la casse, si plus d'une entrée porte le même nom ou si aucune entrée ne correspond au nom recherché, une liste de tous les identifiants {{ fr.UVLT }} disponibles vous sera proposée. Les variables sont également prises en charge.
![Session RDP - recherche {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6006.png)
1. Ouvrir la session comme vous le feriez normalement. Une fois l'identifiant trouvé, il sera automatiquement utilisé pour ouvrir la session à distance.

{% snippet, "badgeInfo" %}
Le {{ fr.UVLT }} est lié à l'utilisateur de la base de données. Un autre utilisateur ne pourra jamais voir vos identifiants {{ fr.UVLT }}.
{% endsnippet %}
