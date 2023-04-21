---
eleventyComputed:
  title: Coffre de l'utilisateur Recherche
---

La recherche dans le ***{{ fr.PVLT }}*** permet de lier une entrée d'identifiants du coffre de l'utilisateur à une session en fournissant le nom de l'entrée d'identifiants. Une fois l'identifiant trouvé, il sera automatiquement utilisé pour ouvrir votre session à distance.  

## Paramètres 

1. Créer une entrée d'identifiant dans le {{ fr.PVLT }} .  
![!!RDMMac4035.png](/img/fr/rdm/mac/RdmMac4035.png) 
1. Dans la session, définir la propriété de l'identifiant sur Rechercher par nom (Coffre d'utilisateur) et entrer le nom exact de l'identifiant dans le coffre d'utilisateur. La recherche n'est pas sensible à la casse, si plus d'une entrée a le même nom ou si aucune entrée ne correspond au nom recherché, vous serez invité avec une liste de tous les identifiants du coffre d'utilisateur disponibles. Les variables sont également prises en charge.  
![!!RDMMac4036.png](/img/fr/rdm/mac/RdmMac4036.png) 
1. Ouvrir la session comme vous le feriez normalement. Une fois les identifiants trouvés, ils seront automatiquement utilisés pour ouvrir la session à distance. 

{% snippet icon.badgeInfo %} 
Le {{ fr.PVLT }} est lié à l'utilisateur de la base de données. Un autre utilisateur ne pourra jamais voir vos identifiants du coffre d'utilisateur. 
{% endsnippet %}
 

