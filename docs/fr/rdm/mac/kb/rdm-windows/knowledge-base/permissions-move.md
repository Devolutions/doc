---
eleventyComputed:
  title: Déplacer une permission
---
La permission ***Déplacer une Permission sur les Entrées*** dans {{ fr.RDM }} peut être configurée sur votre {{ fr.VLT }} ou dans vos entrées et elle est activée par défaut.

Avant la version 2022.1.11, pour déplacer une entrée, vous aviez besoin uniquement de la permission de :

* Modifier l'entrée "source".
* Ajouter dans la destination.

Cela rendait le fait de donner à un utilisateur la permission ***Modifier*** assez risqué, car un utilisateur pouvait déplacer une entrée dans un dossier différent, ce qui changerait l'héritage des permissions, et possiblement lui permettre de faire plus avec l'entrée qu'il ne devrait pouvoir.

Avec l'ajout de la ***Permission de Déplacer sur les Entrées***, cela nécessite les permissions suivantes :

* Modifier l'entrée "source"
* Ajouter dans la destination
* Déplacer sur l'entrée "source"

Ce qui signifie que vous pourriez configurer un utilisateur pour avoir la permission de modifier une entrée, mais lui refuser le droit de la déplacer.
