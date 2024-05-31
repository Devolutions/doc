---
eleventyComputed:
  title: "{{ fr.DGW }} fermes"
  description: Une ferme peut regrouper plusieurs passerelles et effectuer de l'équilibrage de charge pour les connexions utilisant la passerelle.
---
L'objectif de la fonctionnalité des fermes {{ fr.DGW }} est de regrouper plusieurs passerelles sous une seule ferme pour équilibrer la charge des sessions passant par chaque passerelle. En utilisant cette fonctionnalité, les sessions seront distribuées entre elles selon la configuration de la ferme :

* Répartir la charge pour éviter de surcharger une passerelle particulière. Auparavant, pour une entrée donnée, une passerelle pouvait être configurée, mais toutes les connexions pour cette session passeraient par elle, pouvant conduire à une saturation. Avec les fermes, il est maintenant possible de distribuer cette charge pour éviter la surcharge du service et maintenir la performance.

* Haute disponibilité, signifiant que la ferme aide à maintenir une disponibilité continue du service. Auparavant, si une passerelle devenait indisponible pour une raison quelconque, il n'était pas possible d'établir une session. Avec une ferme, si une passerelle est indisponible, la session sera automatiquement dirigée vers l'une des autres passerelles disponibles dans la ferme. Cela peut également être utile pour la maintenance ou les mises à jour, car une passerelle peut être temporairement mise hors ligne tandis qu'une autre active continue de fournir le service.
