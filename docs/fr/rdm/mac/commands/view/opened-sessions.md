---
eleventyComputed:
  title: Sessions ouvertes
---
L'onglet ***Sessions ouvertes*** affiche les sessions actuellement en cours par type et uniquement pour la machine locale. L'onglet ***Sessions ouvertes*** peut être accédé depuis le menu ***{{ fr.NPANE }}***.
![Onglet Sessions Ouvertes](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0010.png)

Il se trouve également dans l'onglet ***Affichage*** dans le ***Ruban***.
![Bouton Sessions Ouvertes](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0011.png)

Vous pouvez donner le focus à une session ouverte en double-cliquant dessus dans la liste. Toutes les sessions intégrées sont listées et les sessions externes apparaîtront si {{ fr.RDMMAC }} est capable de découvrir le type spécifique de session.

## ***Sessions Ouvertes***

### Sessions en cours (Local)
![Sessions Ouvertes Locales](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0012.png)

### Sessions en cours (Global)
![Sessions Ouvertes Globales](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0013.png)

Avec les sources de données SQL Server, vous pouvez surveiller les sessions actuellement en cours, à condition qu'elles aient été ouvertes au sein de {{ fr.RDMMAC }}.

Pour de nombreuses raisons indépendantes de notre volonté, il est possible qu'une session soit terminée sans que {{ fr.RDMMAC }} ne soit au courant que cela s'est produit. Cela peut arriver, par exemple, si {{ fr.RDMMAC }} n'est pas en cours d'exécution lorsqu'une autre application se termine. Par conséquent, toute session terminée restera listée dans le journal. Vous pouvez manuellement la marquer comme fermée via le menu contextuel en sélectionnant ***Marquer comme Fermée***.

Pour consulter un journal détaillé, double-cliquez sur une entrée de session.

### Onglet Session Cachée

Certaines sessions, comme ***SSH Port Forward***, peuvent être cachées du tableau de bord lorsque la connexion est établie. Lorsque ces sessions sont cachées, elles ne sont pas affichées dans les ***Sessions Locales***. Sélectionnez ***Sessions Cachées*** dans la boîte combinée au-dessus de la liste des entrées pour afficher uniquement les sessions cachées.
![Session locale / Session cachée](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0015.png)

### États des Entrées

Vous pouvez voir le statut des entrées dans la base de données sélectionnée. Il existe différentes options d'affichage. Vous pouvez choisir d'afficher les entrées de tous les utilisateurs et les entrées vérifiées, verrouillées ou en cours d'exécution.
![Options d'Affichage Différentes](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0014.png)

## Notes

* {{ fr.RDMMAC }} essaie de détecter les sessions ouvertes même si elles n'ont pas été lancées depuis l'application. Il utilise le nom du processus pour accomplir cette tâche.

* Les sessions VPN n'apparaissent pas dans la liste.
