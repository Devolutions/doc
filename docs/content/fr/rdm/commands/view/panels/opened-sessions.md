---
eleventyComputed:
  title: Sessions Ouvertes
---
L'onglet ***Sessions Ouvertes*** affiche les sessions actuellement en cours par type et uniquement pour la machine locale. Les ***Sessions Ouvertes*** peuvent être accédées depuis le menu ***{{ fr.NPANE }}***.
![Onglet Sessions Ouvertes](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2057.png)

Il se trouve également dans la section [***Panneaux***](/rdm/windows/commands/view/panels/) de l'onglet [***Affichage***](/rdm/windows/commands/view/view/) dans le ***Ruban***.
![Bouton Sessions Ouvertes](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2052.png)

Donner le focus à une session ouverte en double-cliquant dessus dans la liste. Toutes les sessions intégrées sont listées et les sessions externes apparaîtront si {{ fr.RDM }} est capable de découvrir le type spécifique de session.

Les ***Sessions Ouvertes*** peuvent être triées par types :

* [***Sessions en cours (Locale)***](#running-sessions-local)
* [***Sessions en cours (Globale)***](#running-sessions-global)
* [***Onglets de session cachés***](#hidden-session-tab)
* [***Groupes VPN (Ouverts)***](#vpn-groups-opened)
* [***États des entrées***](#entry-states)

### Sessions en cours (Locale)

![Sessions Ouvertes Locales](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11209.png)

### Sessions en cours (Globale)

Avec les sources de données SQL Server, surveiller les sessions actuellement en cours, à condition qu'elles aient été ouvertes dans {{ fr.RDM }}.
![Sessions Ouvertes Globales](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11210.png)

Pour de nombreuses raisons indépendantes de notre volonté, il est possible qu'une session soit terminée sans que {{ fr.RDM }} ne soit au courant que cela s'est produit. Cela peut arriver, par exemple, si {{ fr.RDM }} n'est pas en cours d'exécution lorsqu'une autre application se termine. Par conséquent, toute session terminée restera listée dans le journal. Marquer manuellement comme fermée via le menu contextuel en sélectionnant ***Marquer comme Fermée***.

Pour consulter un journal détaillé, double-cliquer sur une entrée de session.

### Onglet Session Cachée

Certaines sessions, comme ***SSH Port Forward***, peuvent être cachées du tableau de bord lorsque la connexion est établie. Lorsque ces sessions sont cachées, elles ne sont pas affichées dans les ***Sessions Locales***. Sélectionner ***Sessions Cachées*** dans la boîte combinée au-dessus de la liste des entrées pour afficher uniquement les sessions cachées.
![Sessions Locales / Sessions Cachées](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11211.png)

### Groupes VPN (ouverts)

Les sessions peuvent être configurées pour utiliser un Groupe VPN. Lorsque plusieurs sessions utilisent le même groupe VPN, il apparaîtra dans cette section avec le nombre de connexions ouvertes utilisant ce même groupe.
![Groupes VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11212.png)

### États des Entrées

Voir le statut des entrées dans la base de données sélectionnée. Il existe différentes options d'affichage. Choisir d'afficher les entrées de tous les utilisateurs et les entrées vérifiées, verrouillées ou en cours d'exécution.
![Options d'Affichage Différentes](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2206.png)

## Notes

* {{ fr.RDM }} essaie de détecter les sessions ouvertes même si elles n'ont pas été lancées depuis l'application. Il utilise le nom du processus pour accomplir cette tâche.
* Les sessions VPN n'apparaissent pas dans la liste.
