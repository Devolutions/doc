---
eleventyComputed:
  title: Tâches
  order: 10
  description: Le rapport ***Tâches*** permet de surveiller le statut des réinitialisations de mot de passe dans des coffres PAM {{ fr.VLT }} spécifiques. Il suit essentiellement le flux de réinitialisation de mot de passe en vous donnant les actions que le {{ fr.DHUBS }} a effectuées.
---
Le rapport ***Tâches*** permet de surveiller le statut des réinitialisations de mot de passe dans des coffres PAM {{ fr.VLT }} spécifiques. Il suit essentiellement le flux de réinitialisation de mot de passe en vous donnant les actions que le {{ fr.DHUBS }} a effectuées.

![Rapports – Accès Privilégié – Tâches](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2298.png)

Chaque entrée dans la liste des tâches correspond à une action de réinitialisation de mot de passe séparée. Vous pouvez les filtrer par ***Nom d'entrée*** ou ***Fournisseur*** pour rechercher des réinitialisations de mot de passe effectuées sur des entrées spécifiques.

La colonne ***Statut*** montre le statut de la réinitialisation de mot de passe, qui peut être ***Créé***, ***En attente***, ***En cours***, ***Terminé***, ***Annulé***, ou ***Échoué***. Comme pour le nom d'entrée et le fournisseur, vous pouvez filtrer la colonne de statut pour voir uniquement les tâches avec certains statuts.

Survolez l'icône dans la cellule de statut pour voir l'historique complet du statut de cette tâche.

![Historique du statut d'entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2299.png)

{% snippet, "badgeInfo" %}
Les journaux de réinitialisation de mot de passe peuvent également être trouvés dans la section ***Journaux*** du tableau de bord du [compte privilégié](/pam/hub/privileged-accounts/).

Dans le [***Rapport des Journaux d'Activité***](/hub/web-interface/reports/logs/), vous pouvez voir les journaux concernant l'activité des coffres {{ fr.VLT }} et PAM {{ fr.VLT }}.
{% endsnippet %}
