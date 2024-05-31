---
eleventyComputed:
  title: Système de réservation
  descrption: Le système de réservation verrouille une entrée pendant qu'elle est utilisée ou modifiée. Il empêche les utilisateurs d'utiliser ou d'éditer une entrée en même temps.
---
{% youtube '-QbEyscBx8s' %}

Le ***système de réservation*** verrouille une entrée pendant qu'elle est utilisée ou modifiée. Il empêche les utilisateurs d'utiliser ou d'éditer une entrée en même temps.

Le système de réservation peut être activé pour les entrées ***Sessions***, ***Documents***, ***Identifiants***, et ***Informations***.

Définir le mode de réservation au niveau du {{ fr.VLT }}, du dossier ou de l'entrée.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible lors de l'utilisation des sources de données [SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) ou [{{ fr.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les administrateurs peuvent définir ***Retour automatique après*** un certain nombre de minutes dans ***Administration – Paramètres système – {{ fr.VLT_MAJ }}***.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les administrateurs peuvent forcer le ***Retour*** des entrées qui sont ***Réservées*** par d'autres utilisateurs. Clic droit sur l'entrée réservée, cliquer sur ***Retour***.
{% endsnippet %}

### Paramètres de sécurité

Pour accéder aux paramètres de réservation, aller dans les ***Propriétés*** d'une entrée, d'un dossier ou du dossier racine. Naviguer vers la section ***Paramètres de sécurité***.
![!!RDMWin2233](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2233.png)

### Mode de réservation

***Mode de réservation*** active ou désactive le système de réservation. Il décide également du fonctionnement du mode de réservation.
![!!clip3519](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3519.png)

| OPTION                      | DESCRIPTION                                                            |
|-----------------------------|------------------------------------------------------------------------|
| Racine          | Hérite du paramètre de mode de réservation du dossier racine.                             |
| Non disponible | Désactive le système de réservation.                                                        |
| Automatique     | Réserve une entrée automatiquement lorsque l'entrée est ouverte et retourne automatiquement l'entrée lorsqu'elle est fermée. Les utilisateurs peuvent modifier les propriétés sans réserver l'entrée.                                                                                |
| Manuel        | Les utilisateurs doivent réserver l'entrée manuellement avant de l'ouvrir ou de la modifier. Aucune action ne peut être effectuée sans réserver l'entrée.                                                                                                 |
| Hérité     | Hérite du mode de réservation du dossier parent.                                  |
| Optionnel      | Offre l'option de réserver une entrée manuellement ou d'utiliser (ouvrir et modifier) l'entrée sans la réserver.                                                                                                   |

### Invite de réservation

***Invite de réservation*** définit si un utilisateur doit entrer un commentaire lorsqu'il réserve l'entrée. Les administrateurs peuvent surveiller les commentaires via les journaux disponibles sur l'entrée ou les ***Journaux d'activité***.
![!!clip3522](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3522.png)

| OPTION   | DESCRIPTION                                  |
|----------|----------------------------------------------|
| Racine     | Utilise le paramètre d'invite de réservation du dossier racine. |
| Oui      | Invite l'utilisateur à commenter lorsqu'il réserve une entrée. |
| Non       | Supprime l'invite à commenter.              |
| Hérité | Hérite du paramètre d'un dossier parent.  |
