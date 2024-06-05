---
eleventyComputed:
  title: Informations essentielles sur les GUID des propriétés d'identifiants dans {{ fr.RDM }}
  description: Pour optimiser l'efficacité de stockage, le système utilise des valeurs par défaut pour la plupart des champs.
  keywords: 
  - GUID
  - XML
---
Pour optimiser l'efficacité de stockage, le système utilise des valeurs par défaut pour la plupart des champs. Par conséquent, si un champ conserve sa valeur par défaut, il sera omis du contenu affiché. Il est donc important de faire attention à tout nouveau champ qui apparaît dans le contenu mis à jour.

Les identifiants sont soumis à un processus de traitement distinct qui implique l'utilisation de GUID lors de la référence à d'autres entrées. Cependant, lors de l'utilisation de mécanismes alternatifs, ils sont associés à des GUID bien connus, statiques et prédéfinis.

{% snippet icon.badgeInfo %}
Il existe [des GUID supplémentaires](/powershell/dvls-powershell/xml-information/) qui sont exclusifs à {{ fr.DVLS }} avec le module PAM activé.
{% endsnippet %}

| Paramètre                                                                | GUID bien connu                                             |
|--------------------------------------------------------------------------|-------------------------------------------------------------|
| Par défaut                                                               | " "                                                         |
| Dépôt d'identifiants --- Demander lors de la connexion ---               | "45479560-173E-435D-8848-C22F863FDC96"                      |
| Intégré                                                                  | Devrait être utilisé uniquement pour la compatibilité arrière, non listé |
| Parent (uniquement pour les sous-entrées)                                | "E2CC9029-CA3A-4308-BA54-16D5029BC8ED"                      |
| Hérité                                                                   | "1310CF82-6FAB-4B7A-9EEA-3E2E451CA2CF"                      |
| Mes identifiants personnels                                              | "9F3C3BCF-068A-4927-B996-CA52154CAE3B"                      |
| Aucun                                                                    | "B87B29D9-9239-4D7B-86D8-9B53DCD3BA9F"                      |
| {{ fr.UVLT_MAJ }}, associé à PersonalConnectionID                        | "245A4245-48E7-4DF5-9C4C-11861D8E1F81"                      |
| {{ fr.UVLT_MAJ }} Recherche, associé à CredentialPrivateVaultsearchString | "88E4BE76-4C5B-4694-AA9C-D53B7E0FE0DC"                      |

### Exemple de script pour {{ fr.RDM }}
```powershell
$session.CredentialConnectionID = "1310CF82-6FAB-4B7A-9EEA-3E2E451CA2CF"
Set-RDMSession $session -Refresh
```