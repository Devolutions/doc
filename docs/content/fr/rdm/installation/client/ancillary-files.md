---
eleventyComputed:
  title: Fichiers annexes
  description: "{{ fr.RDM }} génère des fichiers annexes sur votre poste de travail. Le tableau ci-dessous répertorie un exemple de fichiers annexes et leurs emplacements."
---
{{ fr.RDM }} génère des fichiers annexes sur votre poste de travail. Le tableau ci-dessous répertorie un exemple de fichiers annexes et leurs emplacements.

Comme décrit dans [Emplacement du fichier de configuration](/rdm/windows/installation/client/configuration-file-location/), le chemin par défaut pour la plupart de ces fichiers est personnalisable. Pour cette raison, nous utilisons le jeton [CONFIG] dans cette documentation pour indiquer lorsqu'un fichier est stocké dans un dossier de configuration qui peut être déplacé, ou le jeton [PROFILE] pour indiquer qu'ils sont stockés dans le profil local. Par défaut, ces points indiquent le même dossier exact. La seule méthode pour les séparer est d'utiliser une configuration personnalisée.

Puisque vous pouvez également déployer sur un appareil portable, parfois connu sous le nom de modèle de déploiement XCOPY, nous utiliserons le jeton [INSTALLDIR] pour indiquer que le fichier se trouve au même emplacement que {{ fr.RDM }}.

La colonne Source de remplacement indique si un mécanisme disponible peut déplacer les fichiers de cette catégorie ailleurs.

## Résumé

| FICHIER(S)                            | EMPLACEMENT                         | SOURCE DE REMPLACEMENT                  |
|---------------------------------------|-------------------------------------|-----------------------------------------|
| Fichier(s) de configuration (*.cfg*, .ext) | [CONFIG]                          | Aucun                                   |
| Fichier(s) de données (*.xml*, *.db*)      | [CONFIG] ou chemin personnalisé.   | Aucun                                   |
| Paramètres par défaut                      | [CONFIG]                          | Paramètres de source de données (Paramètres système) |
| Chiffrement (*.enc*, *.enb*)               | [CONFIG]                          | Aucun                                   |
| Fichiers de mise en page (*.lyt*)          | [CONFIG]                          | Aucun                                   |
| Fichiers journaux (*.log*, *.debug*)       | [CONFIG]                          | Aucun                                   |
| Listes de lecture locales                  | [PROFILE]\\[Datasource]\\Playlists | Utiliser le répertoire de l'application pour la liste de lecture locale utilisera à la place [INSTALLDIR] |
| Modèles locaux                             | Ils sont sérialisés directement dans le fichier de configuration de l'application. | Aucun |
| Données hors ligne/cache (*offline.db*)    | [PROFILE]\\[Datasource]            | Utiliser le répertoire de l'application pour le cache en ligne utilisera à la place [INSTALLDIR] |
| Sensibles (*.stv*, *.stb*)                 | [CONFIG]                          | Aucun                                   |
| Thèmes                                     | [CONFIG]                          | Aucun                                   |


### Option Hors ligne et Liste de lecture locale

Les options hors ligne et liste de lecture locale peuvent être accessibles en naviguant vers ***Fichier – Paramètres – Avancé***.
![Options - Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11275.png)
