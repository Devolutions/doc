---
eleventyComputed:
  title: Paramètres de sécurité
  description: Sécurité des sources de données et utilisation basée sur le temps dans {{ fr.RDM }}.
---
![Administration – Paramètres système – Gestion de {{ fr.VLT_MAJ }} – Paramètres de sécurité](https://cdnweb.devolutions.net/docs/RDMW2045_2024_1.png)

| SÉCURITÉ DES SOURCES DE DONNÉES                      | DESCRIPTION                                              |
|-------------------------------------------|----------------------------------------------------------|
| Créer {{ fr.VLT }} avec un accès restreint par défaut | Sécuriser automatiquement les paramètres de {{ fr.VLT }} lors de la création d'un dépôt. Par conséquent, les paramètres de permissions sont définis sur ***Jamais***.                             |
| Forcer la configuration à deux facteurs de la source de données  | Exiger des utilisateurs qu'ils aient une [configuration à deux facteurs](/rdm/windows/data-sources/multi-factor-authentication/) appliquée sur la source de données. Non affiché avec {{ fr.DVLS }} car l'A2F est défini ailleurs.                                             |
| Résoudre les identifiants dans l'aperçu           | Affiche le nom d'utilisateur et le mot de passe récupérés d'un dépôt d'identifiants dans l'aperçu de l'entrée dans le tableau de bord. Décochez cette option si sa résolution prend trop de temps.               |

| UTILISATION BASÉE SUR LE TEMPS                          | DESCRIPTION                                               |
|------------------|-----------------------------------------------------------------------             |
| Heure de la journée      | Sélectionner les heures pendant lesquelles la source de données est limitée. Sélectionner entre : <ul><li>***À tout moment*** : la session peut être utilisée à n'importe quelle heure.</li> <li> ***Personnalisé*** : sélectionner manuellement la plage horaire pendant laquelle la session est disponible.</li></ul> |
| Jour de la semaine     | Sélectionner les jours pendant lesquels la source de données est disponible. Sélectionner entre : <ul><li>***N'importe quel jour*** : la session peut être utilisée n'importe quel jour de la semaine ou du week-end. </li><li>***Jours de semaine*** : la session peut être utilisée uniquement les jours de semaine.</li> <li>***Week-ends*** : la session peut être utilisée uniquement les week-ends.</li> <li>***Personnalisé*** : sélectionner manuellement chaque jour pendant lequel la session est disponible.</li></ul> |
| Fuseau horaire        | Sélectionner le fuseau horaire dans lequel vous vous trouvez. |
