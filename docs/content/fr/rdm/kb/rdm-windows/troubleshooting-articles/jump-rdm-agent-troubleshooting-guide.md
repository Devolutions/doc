---
eleventyComputed:
  title: Guide de dépannage Jump ({{ fr.RDMA }}) 
  description: Voici un guide de dépannage rapide pour diagnostiquer tout problème avec Jump ({{ fr.RDMA }}).
  keywords:
  - Jump
  - Agent
---
Voici un guide de dépannage rapide pour diagnostiquer tout problème avec Jump ({{ fr.RDMA }}).

## Valider la configuration de l'hôte de saut RDP

1. Se connecter à l'hôte de saut via {{ fr.RDM }} et attendre que {{ fr.RDMA }} et/ou {{ fr.RDM }} démarrent automatiquement.
1. Si {{ fr.RDMA }} ne démarre pas automatiquement, suivre ces étapes de vérification :
    1. Démarrer {{ fr.RDM }}.
{type="a"}
    1. Aller à ***Outils – Plus d'outils***.
![Outils – Plus d'outils](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2226.png)
    1. Sélectionner ***Agent RDM***, puis cliquer sur ***OK***.
![{{ fr.RDMA }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2227.png)
    1. Valider l'installation et la connexion.
    1. Dans la barre d'état système, cliquer avec le bouton droit sur l'icône de la barre d'état de {{ fr.RDMA }} et cliquer sur ***À propos...***.
![Icône de la barre d'état de {{ fr.RDMA }} – À propos...](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2228.png)
    1. Valider que ***Connecté*** et ***{{ fr.RDM }} est installé*** ont une icône de vérification à côté d'eux.
![Connecté et {{ fr.RDM }} est installé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2229.png)
    1. Cliquer à nouveau avec le bouton droit sur l'icône de la barre d'état de {{ fr.RDMA }} et s'assurer que le paramètre ***Démarrage automatique*** a une icône de vérification à côté. Si ce n'est pas le cas, cliquer dessus pour l'activer.
![Icône de la barre d'état de {{ fr.RDMA }} – Démarrage automatique](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2230.png)
    1. Une demande de droits élevés sera affichée car le paramètre ***Démarrage automatique*** le nécessite. Cliquer sur ***Oui***.
1. Si {{ fr.RDM }} ne s'est pas démarré automatiquement, vous pouvez optionnellement [le configurer via Windows](https://support.microsoft.com/en-us/windows/add-an-app-to-run-automatically-at-startup-in-windows-10-150da165-dcd9-7230-517b-cf3c295d89dd).

## Valider la connexion {{ fr.RDMA }} et/ou {{ fr.RDM }}

1. Dans {{ fr.RDM }}, démarrer la session RDP de l'hôte de saut.
1. Cliquer avec le bouton droit sur l'onglet de l'hôte de saut et sélectionner ***Statut de l'agent*** dans le menu contextuel.
![Statut de l'agent](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2231.png)
1. Valider qu'au moins le ***{{ fr.RDMA }}*** est connecté. Il y aura une icône de vérification à côté. ***{{ fr.RDM }}*** peut également avoir une icône de vérification, ce qui est normal.
![{{ fr.RDMA }} Connecté](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2232.png)

## Valider la session de saut

1. Avec la session RDP de l'hôte de saut en cours dans {{ fr.RDM }}, démarrer la session de saut. Elle devrait démarrer dans l'hôte de saut.
1. Cliquer avec le bouton droit sur l'onglet de l'hôte de saut et sélectionner ***Statut de l'agent*** dans le menu contextuel.
![Statut de l'agent](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2231.png)
1. Valider qu'il y a un "1" à côté de ***Sessions de saut {{ fr.RDM }}*** puisque la session de saut est maintenant ouverte.
![1 Session de saut {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2233.png)
1. Pour activer la journalisation, cliquer avec le bouton droit sur l'icône de la barre d'état de {{ fr.RDMA }} et cliquer sur ***Paramètres...***.
![Icône de la barre d'état de {{ fr.RDMA }} – Paramètres...](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2234.png)
1. Cocher le paramètre ***Journaliser les messages de débogage***, puis cliquer sur ***Enregistrer***.
![Cocher Journaliser les messages de débogage](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2235.png)
1. Pour voir les journaux, cliquer à nouveau avec le bouton droit sur l'icône de la barre d'état de {{ fr.RDMA }} et cliquer sur ***Voir les journaux...***.
![Icône de la barre d'état de {{ fr.RDMA }} – Voir les journaux...](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2236.png)
1. Fermer la session RDP de l'hôte de saut. En faisant cela, la session de saut et l'hôte de saut devraient se fermer.

## Effectuer un test complet

Si vous effectuez un test complet, voici ce qui devrait se passer dans l'ordre chronologique après l'ouverture de la session de l'hôte de saut :
1. La session de l'hôte de saut démarrera.
1. {{ fr.RDM }} attendra que {{ fr.RDMA }} ou que {{ fr.RDM }} se connecte avec le client {{ fr.RDM }}.
1. Le client {{ fr.RDM }} enverra la session de saut à l'hôte de saut.
1. La session de saut démarrera.

## Conseils pro

* Il n'est pas recommandé de démarrer automatiquement {{ fr.RDM }} car :
    * {{ fr.RDMA }} est plus rapide à démarrer automatiquement.
    * Démarrer automatiquement {{ fr.RDM }} peut causer un dépassement de temps pour le saut.

   Nous recommandons donc de laisser {{ fr.RDMA }} démarrer {{ fr.RDM }} lors du premier saut.
* Si {{ fr.RDM }} est lent à démarrer sur l'hôte de saut, surtout s'il fonctionne sur TS ou des environnements similaires. Voir [Performance au démarrage](/rdm/kb/rdm-windows/troubleshooting-articles/startup-performance/) pour quelques solutions rapides pour améliorer les temps de démarrage de {{ fr.RDM }}. Vous pouvez également décocher le paramètre ***Afficher l'écran de démarrage*** dans ***Fichier – Paramètres – Application – Démarrage de l'application*** pour désactiver l'écran de démarrage.
* Le client {{ fr.RDM }} favorisera la communication directe avec {{ fr.RDM }} s'il est déjà connecté, et ne se rabattra sur {{ fr.RDMA }} que s'il n'est pas disponible. Cela est conçu ainsi et a l'avantage d'être légèrement plus rapide pour démarrer les sessions.
