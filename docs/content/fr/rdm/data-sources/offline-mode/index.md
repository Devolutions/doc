---
eleventyComputed:
  title: Mode hors ligne
  description: Le mode hors ligne se connecte à une copie locale de la source de données lorsque vous n'êtes pas connecté à la source de données.
---
{% youtube 'W7jK8g4WbNQ' %}

Le ***Mode hors ligne*** se connecte à une copie locale de la source de données lorsque vous n'êtes pas connecté à la source de données. Cela est utile lorsque vous travaillez depuis un emplacement distant et que le réseau est inaccessible ou s'il y a un quelconque problème de connectivité.

Le mode hors ligne en lecture/écriture ajoute aux utilisateurs la possibilité de manipuler des entrées tout en étant déconnecté de la source de données. Cela est utile pour le personnel hors site ou lorsqu'on travaille dans des environnements ayant une disponibilité réseau sporadique.

Le cache hors ligne est d'abord chiffré en utilisant notre propre clé privée mélangée à certaines informations prises de l'ordinateur local. Cela rend impossible la lecture d'une copie sur une autre machine. Par défaut, il est également chiffré avec le chiffrement NTFS de Windows, auquel cas aucune clé n'est sauvegardée nulle part.

Pour une sécurité accrue, les fichiers hors ligne sont configurés pour expirer après un délai. L'expiration par défaut est fixée à 7 jours mais peut être modifiée via les [Paramètres système](/rdm/commands/administration/settings/system-settings/application-specific/offline/).

{% snippet, "badgeInfo" %}
Cette fonctionnalité n'est pas disponible pour toutes les sources de données, veuillez consulter le sujet d'aide de la source de données respective pour savoir si elle prend en charge le mode hors ligne. De plus, plusieurs fonctionnalités ne sont pas disponibles en mode hors ligne, telles que les pièces jointes, les journaux et [la gestion des utilisateurs](/rdm/windows/commands/administration/management/user-management/) (ajouter/modifier/supprimer des utilisateurs).
{% endsnippet %}

## Disponibilité

La disponibilité du mode hors ligne dépend de plusieurs paramètres :

- [Le cache hors ligne de la source de données](#mode-de-mise-en-cache-hors-ligne-de-la-source-de-données)
- [Le paramètre de mode hors ligne étant activé pour chaque compte utilisateur](#paramètre-de-mode-hors-ligne-du-compte-utilisateur)
- [Les politiques de groupes d'utilisateurs (uniquement pour les sources de données {{ fr.DVLS }})](#politiques-de-groupes-dutilisateurs-uniquement-pour-les-sources-de-données-devolutions-server)
- [Les paramètres système de la source de données](#paramètres-système-de-la-source-de-données)
- [Pour chaque coffre](#paramètres-du-coffre) 

Le paramètre le plus bas (en termes de sécurité) prévaut sur les autres, ce qui peut vous empêcher d'utiliser le mode hors ligne. Si le bouton ***Passer en mode hors ligne*** n'est pas disponible, veuillez consulter votre administrateur.

L'[Information sur la source de données](/rdm/windows/commands/file/my-data-source-information/) affiche la taille du fichier de cache hors ligne ainsi que les modes effectifs (***Désactivé***, ***Lecture seule*** ou ***Lecture/écriture***).
![Fichier – Mon Information sur la Source de Données – Mode hors ligne](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11278.png)

### Mode de mise en cache hors ligne de la source de données

Pour activer le mode hors ligne sur la source de données, le mode de mise en cache doit être réglé sur ***Fichier*** ou ***En mémoire*** dans ***Fichier*** – ***Sources de données*** – ***Avancé*** – ***Mode de mise en cache***.

{% snippet, "badgeCaution" %}
Cette étape ne peut pas être modifiée à distance une fois que vous avez exporté vos paramètres de source de données. Vous devriez prendre un moment et réfléchir aux besoins de votre source de données et sélectionner ce qui convient avant de passer à l'exportation.
{% endsnippet %}

![Mode de mise en cache hors ligne de la source de données](https://cdnweb.devolutions.net/docs/RDMW4083_2024_2.png)

| OPTION    | DESCRIPTION |
|-----------|-------------|
| Désactivé  | Empêche l'utilisation d'un cache hors ligne.                                                                |
| En mémoire | Utilise le cache hors ligne uniquement pour les changements récents, mais empêche son écriture sur le disque (uniquement en mémoire). |
| Fichier      | Utilise le cache hors ligne uniquement pour les changements récents. Le cache écrira sur le disque.                         |

{% snippet, "badgeInfo" %}
Certaines fonctionnalités de {{ fr.RDM }} sont indisponibles en mode hors ligne. Même avec le mode d'accès en lecture/écriture, vous pourriez ne pas être en mesure d'effectuer toutes les actions, telles que l'ajout de pièces jointes ou la gestion des utilisateurs, puisque ces fonctionnalités ne sont pas mises en cache localement. D'autre part, le [{{ fr.UVLT }}](/rdm/windows/data-sources/user-vault/) est toujours disponible en mode hors ligne.
{% endsnippet %}

### Paramètre de mode hors ligne du compte utilisateur

Pour permettre à un compte utilisateur d'utiliser le mode hors ligne, aller à ***Administration*** – ***Utilisateurs*** – ***Modifier*** – ***Paramètres***, et régler le paramètre ***Mode hors ligne*** sur ***Cache uniquement***, ***Lecture seule*** ou ***Lecture/écriture***.

![Gestion des utilisateurs](https://cdnweb.devolutions.net/docs/RDMW4088_2024_2.png)

| OPTION                                       | DESCRIPTION |
|----------------------------------------------|-------------|
| Désactivé                                     | Empêche l'utilisation d'un cache hors ligne. |
| Lecture seule                                    | Permet de voir et d'utiliser les entrées uniquement. Le contenu de la source de données ne peut pas être modifié. |
| [Lecture/Écriture](/rdm/windows/data-sources/offline-mode/offline-read-write/) | Permet de voir, d'utiliser et de modifier les entrées. Les conflits causés par les modifications hors ligne sont gérés lors du retour en ligne.                                                 |

### Politiques de groupes d'utilisateurs (uniquement pour les sources de données {{ fr.DVLS }})

Les politiques de groupes d'utilisateurs (uniquement pour les sources de données {{ fr.DVLS }}) doivent être réglées sur ***Cache uniquement***, ***Lecture seule*** ou ***Lecture/écriture*** dans ***Administration*** – ***Groupes d'utilisateurs*** – ***Modifier*** – ***Paramètres***.

![{{ fr.DVLS }} Politiques de groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/RDMW4084_2024_2.png)

| OPTION                                       | DESCRIPTION |
|----------------------------------------------|-------------|
| Désactivé                                     | Empêche l'utilisation d'un cache hors ligne. |
| Lecture seule                                    | Permet de voir et d'utiliser les entrées uniquement. Le contenu de la source de données ne peut pas être modifié. |
| [Lecture/Écriture](/rdm/windows/data-sources/offline-mode/offline-read-write/) | Permet de voir, d'utiliser et de modifier les entrées. Les conflits causés par les modifications hors ligne sont gérés lors du retour en ligne.                                                 |

{% snippet, "badgeInfo" %}
Notez que régler le niveau de sécurité d'un {{ fr.VLT }} sur ***Élevé*** dans {{ fr.DVLS }} (***Administration*** – ***{{ fr.VLT_MAJ }}*** – ***Modifier*** – ***Niveau de sécurité***) empêche l'utilisation du mode hors ligne.
{% endsnippet %}

### Paramètres système de la source de données

Pour permettre le mode hors ligne pour une source de données, aller à ***Administration*** – ***Paramètres système*** – ***Cache/Hors ligne***, et régler ***Mode hors ligne*** sur ***Cache uniquement***, ***Lecture seule*** ou ***Lecture/écriture***. Pour le mode hors ligne au niveau du système, un temps d'***Expiration*** peut être défini également.

![Paramètres système](https://cdnweb.devolutions.net/docs/RDMW4087_2024_2.png)

### Paramètres du coffre

Pour chaque {{ fr.VLT }}, aller à ***Administration*** – ***Paramètres du {{ fr.VLT_MAJ }}*** – ***Paramètres de sécurité***, et régler ***Permettre le mode hors ligne*** sur ***Oui***.

![Paramètres du {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/RDMW4086_2024_2.png)

## Passer en mode hors ligne
Une fois que les paramètres de l'utilisateur, des groupes d'utilisateurs (pour les sources de données {{ fr.DVLS }}), du {{ fr.VLT }}, et de la source de données permettent le mode hors ligne, {{ fr.RDM }} proposera le mode hors ligne lorsque l'application ne pourra pas atteindre la source de données. Le mode hors ligne peut également être basculé manuellement via ***Fichier*** – ***Passer en mode hors ligne*** ou en cliquant sur le bouton ***Passer en mode hors ligne*** situé dans le volet inférieur.

![Boutons Passer en mode hors ligne](https://cdnweb.devolutions.net/docs/RDMW4090_2024_2.png)

## Accorder/refuser le mode hors ligne

Un utilisateur doit se voir accorder des privilèges de lecture/écriture à tous les niveaux pour permettre les privilèges de lecture/écriture. Voici un tableau récapitulatif de tous les paramètres/autorisations ainsi que l'accès effectif qu'ils accordent :

| PERMISSIONS UTILISATEUR                 | PARAMÈTRES SYSTÈME                 | PARAMÈTRES DU {{ fr.VLT_MAJ }}      | ACCÈS EFFECTIF  |
|----------------------------------|---------------------------------|--------------------------------|-------------------|
| Désactivé ou Lecture seule ou Lecture/écriture | Désactivé ou Lecture seule ou Lecture/écriture | Permettre le mode hors ligne désactivé  | Désactivé          |
| Désactivé ou Lecture seule ou Lecture/écriture | Désactivé ou Lecture seule ou Lecture/écriture | Permettre le mode hors ligne activé   | Désactivé          |
| Désactivé ou Lecture seule ou Lecture/écriture | Désactivé                     | Permettre le mode hors ligne activé          | Désactivé          |
| Désactivé                         | Désactivé ou Lecture seule ou Lecture/écriture | Permettre le mode hors ligne activé      | Désactivé          |
| Lecture seule ou Lecture/écriture          | Lecture seule ou Lecture/écriture          | Permettre le mode hors ligne désactivé        | Désactivé          |
| Lecture seule ou Lecture/écriture          | Lecture seule ou Lecture/écriture          | Permettre le mode hors ligne activé         | Lecture seule         |
| Lecture seule ou Lecture/écriture          | Lecture seule                        | Permettre le mode hors ligne activé         | Lecture seule         |
| Lecture seule                        | Lecture seule ou Lecture/écriture          | Permettre le mode hors ligne activé         | Lecture seule         |
| Lecture/écriture                       | Lecture/écriture                       | Permettre le mode hors ligne activé         | Lecture/écriture        |