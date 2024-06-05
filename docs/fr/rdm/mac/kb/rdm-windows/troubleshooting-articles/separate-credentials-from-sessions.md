---
eleventyComputed:
  title: Séparer les identifiants des sessions
---
L'option ***Fusionner la liste des identifiants avec la session*** dans {{ fr.RDM }} version 2021.1.27 et supérieures a été dépréciée.
## Solution
La solution de contournement consiste à créer un dossier d'identifiants à la racine de votre {{ fr.VLT }} et à y déplacer vos entrées d'identifiants.

Si nécessaire, une [Recherche avancée](/rdm/windows/commands/view/panels/search/advanced/) peut être effectuée pour localiser les entrées d'identifiants.

{% snippet, "badgeCaution" %}
Si vous utilisez la fonctionnalité d'héritage, vous devrez modifier votre structure de dossiers en conséquence.
{% endsnippet %}