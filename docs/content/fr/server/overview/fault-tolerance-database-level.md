---
eleventyComputed:
  title: Tolérance aux pannes au niveau de la base de données
---
La plateforme Devolutions suit certaines directives de conception pour préserver l'historique complet de vos données, qu'il s'agisse de modifications ou de suppressions. Elle dispose également d'une couche de journalisation étendue pour fournir une visibilité complète sur l'activité effectuée pendant l'utilisation du système. Ces choix de conception affectent les options disponibles pour vous en ce qui concerne la fourniture d'une tolérance aux pannes au niveau de la base de données.

## Impact sur les choix technologiques

En raison de toutes les opérations d'écriture se produisant en arrière-plan, vous ne pouvez pas avoir une topologie autre qu'active-passive. La réplique de secours doit être synchronisée en permanence, mais ne doit pas être touchée. Il ne peut y avoir qu'une seule base de données utilisée à tout moment. Vous pouvez utiliser les technologies Microsoft de miroir ou de clustering, mais il est essentiel que le contenu répliqué ne soit accédé que lorsque le contenu maître est indisponible.

## Le miroir comme moyen de partager avec des équipes distantes

La conséquence de garder les données répliquées intactes signifie que la réplication n'est PAS la solution appropriée à utiliser chaque fois que vous avez plusieurs équipes et que vous souhaitez partager un ensemble de données maîtres entre elles. Pour ce scénario, il est préférable d'utiliser un mélange de :

* Synchronisateurs, particulièrement celui pour les données {{ fr.RDM }} ; et  
* Scripting PowerShell (pour exporter une branche spécifique de votre arbre).
