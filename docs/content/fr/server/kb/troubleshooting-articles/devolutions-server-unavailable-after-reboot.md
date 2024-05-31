---
eleventyComputed:
  title: "{{ fr.DVLS }} indisponible après redémarrage"
  description: "Le serveur SQL où se trouve votre {{ fr.DVLS }} peut ne pas être opérationnel au moment où l'instance {{ fr.DVLS }} démarre."
---
Le serveur SQL où se trouve votre {{ fr.DVLS }} peut ne pas être opérationnel au moment où l'instance {{ fr.DVLS }} démarre. En conséquence, le service planificateur ou l'application web {{ fr.DVLS }} ne peut pas se connecter à la base de données et retourne un message d'erreur qui peut ressembler à ceci dans les journaux d'événements Windows :

"Le service DevolutionsSchedulerService (DVLS) s'est terminé avec l'erreur suivante :  
Une exception s'est produite dans le service lors du traitement de la demande de contrôle."

### Solution
Exécuter les commandes ci-dessous pour configurer le service planificateur {{ fr.DVLS }} et W3SVC (essentiel pour la fonctionnalité IIS) pour dépendre de SQL Server. Cet ajustement garantit qu'ils initieront leur processus de démarrage uniquement après que SQL Server ait entièrement démarré.

* Service planificateur {{ fr.DVLS }} : `sc config <Nom du service planificateur Devolutions> depend= "<votre service d'instance SQL Server>"`
* W3SVC : `sc config W3SVC depend= "WAS/HTTP/<votre service d'instance SQL Server>"`  
Notez la présence de WAS et HTTP, qui sont des dépendances par défaut du W3SVC.

Pour effacer les dépendances des services : `sc config <nom du service> depend= ""`