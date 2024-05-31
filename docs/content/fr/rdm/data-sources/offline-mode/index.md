---
eleventyComputed:
  title: Mode hors ligne
  description: Le mode hors ligne se connecte à une copie locale de la source de données lorsque vous n'êtes pas connecté à la source de données.
---
{% youtube 'W7jK8g4WbNQ' %}

Le ***Mode hors ligne*** se connecte à une copie locale de la source de données lorsque vous n'êtes pas connecté à la source de données. Cela est utile lorsque vous travaillez depuis un emplacement distant et que le réseau est inaccessible ou en cas de problème de connectivité quelconque.

Le mode hors ligne en lecture/écriture ajoute aux utilisateurs la possibilité de manipuler des entrées tout en étant déconnecté de la source de données. Cela est utile pour le personnel hors site ou lors du travail dans des environnements ayant une disponibilité réseau sporadique.

{% snippet, "badgeInfo" %}
Cette fonctionnalité n'est pas disponible pour toutes les sources de données, veuillez consulter le sujet d'aide de la source de données respective pour savoir si elle prend en charge le mode hors ligne.
{% endsnippet %}

{% snippet, "badgeNotice" %}
Le cache hors ligne est d'abord chiffré en utilisant notre propre clé privée mélangée à certaines informations prises de l'ordinateur local. Cela rend impossible la lecture d'une copie sur une autre machine. Par défaut, il est également chiffré avec le chiffrement NTFS de Windows, auquel cas aucune clé n'est sauvegardée nulle part.
{% endsnippet %}

Pour une sécurité accrue, les fichiers hors ligne sont configurés pour expirer après un délai. L'expiration par défaut est réglée sur 7 jours mais peut être modifiée via les [Paramètres système](/rdm/commands/administration/settings/system-settings/application-specific/offline/).

{{ fr.RDM }} demandera le mode hors ligne lorsque l'application ne pourra pas atteindre la source de données, mais le mode hors ligne peut être basculé manuellement avec ***Fichier – Passer en mode hors ligne***.

Plusieurs fonctionnalités ne sont pas disponibles en mode hors ligne, telles que :

* Les pièces jointes et les journaux.
* [Gestion des utilisateurs](/rdm/windows/commands/administration/management/user-management/) (Ajouter/Modifier/Supprimer des utilisateurs).

## Disponibilité

La disponibilité du mode hors ligne repose sur plusieurs paramètres :

* Le cache hors ligne de la source de données dans ***Fichier – Sources de données – Avancé – Mode de mise en cache*** doit être réglé sur ***Fichier*** ou ***En mémoire***. Cette étape doit être effectuée avant d'exporter votre source de données vers d'autres ordinateurs.
* Le compte de l'utilisateur doit être activé dans ***Administration – Utilisateurs – Modifier – Paramètres – Mode hors ligne***.
* Les politiques de groupes d'utilisateurs (uniquement pour la source de données {{ fr.DVLS }}) dans ***Administration – Groupes d'utilisateurs – Modifier – Paramètres – Mode hors ligne***.
* Les ***Paramètres système*** de la source de données dans ***Administration – Paramètres système – Cache/Hors ligne – Mode hors ligne*** et ***Expiration***.
* Pour chaque {{ fr.VLT }}, ***Administration – Paramètres de {{ fr.VLT_MAJ }} – Paramètres de sécurité – Autoriser hors ligne***.

Le paramètre le plus bas (en termes de sécurité) prévaut sur les autres, ce qui peut vous empêcher d'utiliser le mode hors ligne. Si le bouton ***Passer en mode hors ligne*** n'est pas disponible, veuillez consulter votre administrateur.

L'[Information sur la source de données](/rdm/windows/commands/file/my-data-source-information/) affiche la taille du fichier de cache hors ligne ainsi que les modes effectifs (désactivé, lecture seule ou lecture/écriture).
![Fichier – Mon information sur la source de données – Mode hors ligne](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11278.png)

### Mode de mise en cache

Le mode de mise en cache doit être réglé sur ***En mémoire*** ou ***Fichier*** pour activer le mode hors ligne.
{% snippet, "badgeCaution" %}
Cette étape ne peut pas être modifiée à distance une fois que vous avez exporté les paramètres de votre source de données. Vous devriez prendre un moment et réfléchir aux besoins de votre source de données et sélectionner ce qui convient avant de passer à l'exportation.
{% endsnippet %}

![Mode de mise en cache](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3581.png)

| OPTION    | DESCRIPTION |
|-----------|-------------|
| Désactivé  | Empêche l'utilisation d'un cache hors ligne.                                                                |
| En mémoire | Utilise le cache hors ligne uniquement pour les changements récents, mais empêche son écriture sur le disque (uniquement en mémoire). |
| Fichier      | Utilise le cache hors ligne uniquement pour les changements récents. Le cache écrira sur le disque.                         |


{% snippet, "badgeInfo" %}
Certaines fonctionnalités de {{ fr.RDM }} sont indisponibles en mode hors ligne. Même avec le mode d'accès en lecture/écriture, vous ne pourrez peut-être pas effectuer toutes les actions, telles que l'ajout de pièces jointes ou la gestion des utilisateurs, puisque ces fonctionnalités ne sont pas mises en cache localement. D'autre part, le [{{ fr.UVLT }}](/rdm/windows/data-sources/user-vault/) est toujours disponible en mode hors ligne.
{% endsnippet %}

### Autoriser/refuser le mode hors ligne
| OPTION                                       | DESCRIPTION |
|----------------------------------------------|-------------|
| Désactivé                                     | Empêche l'utilisation d'un cache hors ligne. |
| Lecture seule                                    | Permet de visualiser et d'utiliser les entrées uniquement. Le contenu de la source de données ne peut pas être modifié. |
| [Lecture/Écriture](/rdm/windows/data-sources/offline-mode/offline-read-write/) | Permet de visualiser, d'utiliser et de modifier les entrées. Les conflits causés par les modifications hors ligne sont gérés lors du retour en ligne.                                                 |

Au-delà des politiques de groupe, le ***Mode hors ligne*** est contrôlé à plusieurs niveaux :

* Permissions utilisateur
* Paramètres système
* Paramètres de {{ fr.VLT_MAJ }}

Un utilisateur doit se voir accorder Lecture/Écriture à tous les niveaux pour permettre les privilèges de lecture/écriture.

| PERMISSIONS UTILISATEUR                 | PARAMÈTRES SYSTÈME                 | PARAMÈTRES DE {{ fr.VLT_MAJ }}      | ACCÈS EFFECTIF  |
|----------------------------------|---------------------------------|--------------------------------|-------------------|
| Désactivé ou Lecture seule ou Lecture/écriture | Désactivé ou Lecture seule ou Lecture/écriture | Autoriser hors ligne désactivé  | Désactivé          |
| Désactivé ou Lecture seule ou Lecture/écriture | Désactivé ou Lecture seule ou Lecture/écriture | Autoriser hors ligne activé   | Désactivé          |
| Désactivé ou Lecture seule ou Lecture/écriture | Désactivé                     | Autoriser hors ligne activé       | Désactivé             |
| Désactivé                         | Désactivé ou Lecture seule ou Lecture/écriture | Autoriser hors ligne activé      | Désactivé          |
| Lecture seule ou Lecture/écriture          | Lecture seule ou Lecture/écriture          | Autoriser hors ligne désactivé        | Désactivé          |
| Lecture seule ou Lecture/écriture          | Lecture seule ou Lecture/écriture          | Autoriser hors ligne activé         | Lecture seule         |
| Lecture seule ou Lecture/écriture          | Lecture seule                        | Autoriser hors ligne activé         | Lecture seule         |
| Lecture seule                        | Lecture seule ou Lecture/écriture          | Autoriser hors ligne activé         | Lecture seule         |
| Lecture/écriture                       | Lecture/écriture                       | Autoriser hors ligne activé         | Lecture/écriture        |

{% snippet, "badgeNotice" %}
Pour savoir quel mode hors ligne est en vigueur lorsque vous êtes connecté, consultez [Mon information sur la source de données](/rdm/windows/commands/file/my-data-source-information/).
{% endsnippet %}