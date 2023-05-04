---
title: Sessions ouvertes
---
L'onglet ***Sessions ouvertes*** affiche les sessions en cours d'exécution par type et pour la machine locale uniquement. Il est possible d'y accéder par le ***{{ fr.NPANE }}*** .  
![Onglet Sessions ouvertes](/img/fr/rdm/windows/RDMWin2051.png) 

Il est aussi situé dans la section ***Panneaux*** de l'onglet ***Affichage*** dans le ***Ruban*** .  
![Sessions ouvertes](/img/fr/rdm/windows/RDMWin2052.png) 

Vous pouvez attribuer le focus à une session ouverte en double-cliquant sur celle-ci dans la liste. Toutes les sessions intégrées sont répertoriées et les sessions externes apparaîtront si {{ fr.RDM }} est capable de découvrir le type de session spécifique.  

Les ***Sessions ouvertes*** peuvent être triées par types :  

* [***Sessions en cours d'exécution (Locales)***](#sessions-en-cours-dexécution-locales) 
* [***Sessions en cours d'exécution (Globales)***](#sessions-en-cours-dexécution-globales) 
* [***Onglets des sessions masquées***](#onglet-des-sessions-masquées) 
* [***Groupes VPN (ouverts)***](#groupes-vpn-ouverts) 
* [***États des entrées***](#états-des-entrées) 

### Sessions en Cours d'exécution (Locales) 

![Sessions locales ouvertes](/img/fr/rdm/windows/clip11209.png) 

### Sessions en cours d'exécution (Globales) 

Avec les sources de données SQL Server, vous pouvez surveiller les sessions en cours d'exécution à condition qu'elles aient été ouvertes dans {{ fr.RDM }} .  
![Sessions globales ouvertes](/img/fr/rdm/windows/clip11210.png) 

Pour de nombreuses raisons indépendantes de notre volonté, il est possible qu'une session se termine sans que {{ fr.RDM }} en soit conscient. Cela peut se produire, par exemple, si {{ fr.RDM }} n'est pas en cours d'exécution lorsqu'une autre application se termine. Par conséquent, toute session terminée restera répertoriée dans le journal. Vous pouvez la marquer manuellement comme fermée via le menu contextuel en sélectionnant ***Marquer comme fermé*** .  

Pour consulter un journal détaillé, double-cliquez sur une entrée de session. 

### Onglet des Sessions masquées 

Certaines sessions, comme ***Redirection de port SSH*** , peuvent être masquées du tableau de bord lorsque la connexion est établie. Lorsque ces sessions sont masquées, elles ne sont pas affichées dans les ***Sessions locales*** . Sélectionnez ***Onglets des sessions masquées*** dans la zone de liste déroulante au-dessus de la liste d'entrées pour afficher uniquement les sessions masquées.  
![Sessions locales / Sessions masquées](/img/fr/rdm/windows/RdmWin2004.png) 

### Groupes VPN (ouverts) 

Les sessions peuvent être configurées pour utiliser un groupe VPN. Lorsque plusieurs sessions utilisent le même groupe VPN, il apparaîtra dans cette section avec le nombre de connexions ouvertes utilisant ce même groupe.  
![Groupes VPN](/img/fr/rdm/windows/RdmWin2006.png) 

### États des entrées 

Il est possible de voir l'état des entrées dans la base de données sélectionnée. Il existe différentes options d'affichage. Vouc pouvez choisir d'afficher les entrées de tous les utilisateurs et les entrées réservées, verrouillées ou en cours d'exécution.  
![Différentes options d'affichage](/img/fr/rdm/windows/RdmWin2005.png) 

## Notes 

* {{ fr.RDM }} essaie de détecter les sessions ouvertes même si elles n'ont pas été lancées à partir de l'application. Il utilise le nom du processus pour accomplir cette tâche. 
* Les sessions VPN n'apparaissent pas dans la liste. 

