---
eleventyComputed:
  title: Informations essentielles sur les GUID des propriétés d'identifiants dans {{ fr.DVLS }}
  description: Pour optimiser l'efficacité du stockage, le système utilise des valeurs par défaut pour la plupart des champs.
  keywords: 
  - GUID
  - XML
---
Pour optimiser l'efficacité du stockage, le système utilise des valeurs par défaut pour la plupart des champs. En conséquence, si un champ conserve sa valeur par défaut, il sera omis du contenu affiché. Il est donc important de prêter attention à tout nouveau champ qui apparaît dans le contenu mis à jour.

Les identifiants sont soumis à un processus de traitement distinct qui implique l'utilisation de GUID lors de la référence à d'autres entrées. Cependant, lors de l'utilisation de mécanismes alternatifs, ils sont associés à des GUID bien connus, statiques et prédéfinis.

{% snippet, "badgeInfo" %}
Il existe [des GUID supplémentaires](/powershell/rdm-powershell/xml-information/) utilisés dans {{ fr.RDM }}.
{% endsnippet %}

| Paramètre              | GUID bien connu                               |
|------------------------|-----------------------------------------------|
| Par défaut             | " "                                           |
| Compte privilégié      | "56EDBCA3-E76A-457B-8F6A-6B78F3D084CE"        |
| Mon compte privilégié  | "0BCD4B51-1E29-4FCF-9B01-15684E1FA033"        |

#### Exemple de script pour {{ fr.DVLS }}
```powershell
$session.CredentialConnectionID = "56EDBCA3-E76A-457B-8F6A-6B78F3D084CE"
Set-RDMSession $session -Refresh
```
