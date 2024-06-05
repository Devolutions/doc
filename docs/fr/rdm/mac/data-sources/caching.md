---
eleventyComputed:
  title: Mise en cache
  description: Le mode de mise en cache déterminera comment le client rechargera les entrées lorsque des changements seront détectés.
---
Le mode de mise en cache déterminera comment le client rechargera les entrées lorsque des changements seront détectés. Sur de grandes sources de données, la mise en cache est indispensable et augmentera significativement les performances.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible lors de l'utilisation d'une [Source de Données Avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeNotice" %}
Si le cache est obsolète, appuyer sur <kbd>Ctrl</kbd>+<kbd>F5</kbd> pour rafraîchir le cache local. Cela forcera la lecture depuis la base de données pour recréer le cache.
{% endsnippet %}

## Paramètres

L'option de ***mode*** de mise en cache peut être accédée via ***Fichier – Sources de Données – Modifier Source de Données – Avancé*** dans une source de données avancée.
![Mode de mise en cache](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10591.png)

| OPTION   | DESCRIPTION |
|----------|-------------|
| Désactivé | Empêche l'utilisation d'un cache hors ligne. |
| En Mémoire| Utilise le cache hors ligne uniquement pour les changements récents, mais empêche son écriture sur le disque (uniquement en mémoire). |
| Fichier     | Utilise le cache hors ligne uniquement pour les changements récents. Le cache écrira sur le disque. |

### Stockage

Vous pouvez trouver le fichier de configuration en faisant un clic droit sur votre Finder - Aller au dossier et dans le dialogue du dossier taper ~/Library.

Vous pouvez ensuite suivre le chemin Support d'Application/com.devolutions.remotedesktopmanager sélectionner la base de données concernée où vous trouverez le fichier offline.db.

Le fichier est une base de données SQLite chiffrée en utilisant une clé de hachage calculée non portable.

{% snippet, "shieldNotice" %}
Vous pouvez renforcer la sécurité du fichier hors ligne en réglant la sécurité renforcée dans les Préférences des Sources de Données – [Sécurité Hors Ligne](/rdm/mac/commands/file/preferences/security/).
{% endsnippet %}

{% snippet, "badgeHelp" %}
Selon la configuration du Mode de Mise en Cache et du Mode Hors Ligne, le fichier Offline.db peut toujours exister puisque le fichier a un double objectif : la mise en cache et le support hors ligne.
{% endsnippet %}
