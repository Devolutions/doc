---
eleventyComputed:
  title: Fichiers annexes
  description: "{{ fr.RDMMAC }} génère des fichiers annexes sur votre poste de travail. Le tableau ci-dessous répertorie un exemple de fichiers annexes et leurs emplacements."
---
{{ fr.RDMMAC }} génère des fichiers annexes sur votre poste de travail. Le tableau ci-dessous répertorie un exemple de fichiers annexes et leurs emplacements.

Comme décrit dans [Emplacement du fichier de configuration](/rdm/mac/installation/client/configuration-file-location/), le chemin par défaut pour la plupart de ces fichiers est personnalisable. Pour cette raison, nous utilisons la variable %CONFIG% pour indiquer lorsqu'un fichier est stocké dans un dossier de configuration qui peut être déplacé, ou %PROFILE% pour indiquer qu'ils sont stockés dans le profil local. Par défaut, ces points indiquent exactement le même dossier. La seule méthode pour les séparer est d'utiliser une configuration personnalisée.

La colonne ***Override*** indique si un mécanisme disponible peut déplacer les fichiers de cette catégorie ailleurs.

| FICHIER(S)                           | EMPLACEMENT                                                               | SOURCE DE REMPLACEMENT                           |
|--------------------------------------|---------------------------------------------------------------------------|--------------------------------------------------|
| Fichier(s) de configuration (*.cfg, *.ext) | %CONFIG%                                                                  | Aucun                                            |
| Fichier(s) de données (*.xml, *db)   | %CONFIG% ou chemin personnalisé                                           | Aucun                                            |
| Paramètres par défaut                | %CONFIG%                                                                  | Paramètres de source de données                  |
| Chiffrement (*.enc, *.enb)           | %CONFIG%                                                                  | Aucun                                            |
| Fichiers de disposition (*.lyt)      | %CONFIG%                                                                  | Aucun                                            |
| Fichiers journaux (*.log, *.debug)   | %CONFIG%                                                                  | Aucun                                            |
| Listes de lecture locales            | %PROFILE%\{Datasource}\Playlists                                          | Utiliser le répertoire d'application pour la liste de lecture locale |
| Modèles locaux                       | Ils sont sérialisés directement dans le fichier de configuration de l'application | Aucun                                            |
| Données hors ligne/cache (offline.db)| %PROFILE%\{Datasource}                                                    | Utiliser le répertoire d'application pour le cache en ligne       |
| Sensibles (*.stv, *.stb)             | %CONFIG%                                                                  | Aucun                                            |
| Thèmes                               | %CONFIG%                                                                  | Aucun                                            |
