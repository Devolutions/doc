---
title: Sessions ouvertes
---
L'onglet ***Sessions ouvertes*** affiche les sessions en cours d'exécution par type et pour la machine locale uniquement. Il est possible d'y accéder par le ***{{ fr.NPANE }}***.  
![Onglet Sessions ouvertes](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0032.png) 

Il est aussi situé dans l'onglet ***Affichage*** dans le ***Ruban***.  
![Sessions ouvertes](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0031.png) 

Vous pouvez attribuer le focus à une session ouverte en double-cliquant sur celle-ci dans la liste. Toutes les sessions intégrées sont répertoriées et les sessions externes apparaîtront si {{ fr.RDMMAC }} est capable de découvrir le type de session spécifique.  

## Sessions ouvertes

### Sessions en Cours d'exécution (Locales) 

![Sessions locales](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0033.png) 

### Sessions en cours d'exécution (Globales) 

Avec les sources de données SQL Server, vous pouvez surveiller les sessions en cours d'exécution à condition qu'elles aient été ouvertes dans {{ fr.RDMMAC }}.  
![Sessions globales](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0034.png) 

Pour de nombreuses raisons indépendantes de notre volonté, il est possible qu'une session se termine sans que {{ fr.RDMMAC }} en soit conscient. Cela peut se produire, par exemple, si {{ fr.RDMMAC }} n'est pas en cours d'exécution lorsqu'une autre application se termine. Par conséquent, toute session terminée restera répertoriée dans le journal. Vous pouvez la marquer manuellement comme fermée via le menu contextuel en sélectionnant ***Marquer comme fermé***.  

Pour consulter un journal détaillé, double-cliquez sur une entrée de session. 

### Onglet des Sessions masquées 

Certaines sessions, comme ***Redirection de port SSH***, peuvent être masquées du tableau de bord lorsque la connexion est établie. Lorsque ces sessions sont masquées, elles ne sont pas affichées dans les ***Sessions locales***. Sélectionnez ***Onglets des sessions masquées*** dans la zone de liste déroulante au-dessus de la liste d'entrées pour afficher uniquement les sessions masquées.  
![Session locale / Session masquée](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0035.png) 

### États des entrées 

Il est possible de voir l'état des entrées dans la base de données sélectionnée. Il existe différentes options d'affichage. Vouc pouvez choisir d'afficher les entrées de tous les utilisateurs et les entrées réservées, verrouillées ou en cours d'exécution.  
![Différentes options d'affichage](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0036.png) 

## Notes 

* {{ fr.RDMMAC }} essaie de détecter les sessions ouvertes même si elles n'ont pas été lancées à partir de l'application. Il utilise le nom du processus pour accomplir cette tâche. 
* Les sessions VPN n'apparaissent pas dans la liste. 

