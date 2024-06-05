---
eleventyComputed:
  title: Pratiques essentielles pour gérer les opérations {{ fr.DVLS }}
  description: Lors d'opérations critiques sur une instance {{ fr.DVLS }}, il est essentiel d'entreprendre des tâches préparatoires spécifiques.
---
Lors d'opérations critiques sur une instance {{ fr.DVLS }}, il est essentiel d'entreprendre des tâches préparatoires spécifiques. Ces tâches protègent l'environnement et permettent la restauration de l'application ou des données en cas de problèmes.

Voici les considérations clés et les actions à entreprendre :

* Effectuer des opérations impactantes sur l'ensemble du système {{ fr.DVLS }} pendant les heures creuses lorsque cela est possible. Cela peut nécessiter de mettre l'instance {{ fr.DVLS }} en mode hors ligne ou de l'éteindre.
* Sauvegarder régulièrement la base de données et s'assurer de pouvoir la restaurer facilement si nécessaire.
* Créer une sauvegarde du dossier de l'application web {{ fr.DVLS }}.
* Pour certaines opérations, envisager de configurer un compte de type ***{{ fr.DVLS }} Authentication type*** avec des droits administratifs sur votre instance {{ fr.DVLS }}. Envisager également d'activer la fonctionnalité ***Emergency Access*** pour maintenir la connectivité avec {{ fr.DVLS }}.

Pour plus de conseils ou si vous avez des questions concernant les précautions pendant les opérations critiques {{ fr.DVLS }}, veuillez contacter notre équipe de support à [service@devolutions.net](service@devolutions.net).
