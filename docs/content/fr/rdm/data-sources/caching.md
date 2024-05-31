---
eleventyComputed:
  title: Mise en cache
  description: Le mode de mise en cache déterminera comment le client rafraîchira le contenu de la source de données lorsque des changements sont détectés. Sur de grandes sources de données, la mise en cache est essentielle car elle augmente significativement les performances.
---
Le mode de mise en cache déterminera comment le client rafraîchira le contenu de la source de données lorsque des changements sont détectés. Sur de grandes sources de données, la mise en cache est essentielle car elle augmente significativement les performances.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible lors de l'utilisation d'une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeNotice" %}
Si le cache est obsolète, appuyer sur <kbd>Ctrl</kbd>+<kbd>F5</kbd> pour rafraîchir le cache local. Cela forcera l'application à récupérer l'intégralité du contenu de la source de données pour recréer le cache.
{% endsnippet %}

## Paramètres

L'option ***Mode de mise en cache*** peut être accédée via ***Fichier – Sources de Données – Modifier Source de Données – Avancé*** dans une source de données avancée.
![Mode de mise en cache](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3581.png)

| OPTION    | DESCRIPTION |
|-----------|-------------|
| Désactivé | Empêche l'utilisation d'un cache hors ligne. |
| En Mémoire | Utilise le cache hors ligne uniquement pour les changements récents, mais empêche son écriture sur le disque (uniquement en mémoire). |
| Fichier   | Utilise le cache hors ligne uniquement pour les changements récents. Le cache écrira sur le disque. |

### Emplacement

Le cache client est persisté sur le disque dans **%LocalAppData%\Devolutions\RemoteDesktopManager\[GUID:DataSourceID]**

Il existe trois moteurs pour le cache :

* SQLite (offline.db)
* MCDF (offline.mcdf)
* MCDF v2.0 (offline.mcdf2)

Si vous utilisez une version de {{ fr.RDM }} antérieure à 11.2, le moteur par défaut sera SQLite, dans ce cas la base de données est chiffrée en utilisant une clé de hachage calculée non portable.

Si vous utilisez la version 11.2 ou plus récente de {{ fr.RDM }}, le moteur de cache par défaut sera les fichiers Microsoft Compound Document Format (MCDF).

{% snippet, "shieldNotice" %}
Vous pouvez renforcer la sécurité du fichier hors ligne en définissant la sécurité renforcée dans ***Fichier – Paramètres – Sécurité – Sécurité Hors Ligne.***
{% endsnippet %}

{% snippet, "badgeInfo" %}
Selon la configuration du Mode de mise en cache & du [Mode Hors Ligne](/rdm/windows/data-sources/offline-mode/) le fichier hors ligne peut toujours exister puisque le fichier sert à un double objectif de mise en cache & de support hors ligne.
{% endsnippet %}
