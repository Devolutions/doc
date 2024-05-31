---
eleventyComputed:
  title: Passer hors ligne et en ligne
---
Basculer la source de données en [Mode Hors Ligne](/rdm/windows/data-sources/offline-mode/).

Utiliser le mode hors ligne pour se connecter à une copie locale de la source de données lorsque la base de données distante n'est pas disponible. Cela est utile lors du travail depuis un emplacement distant et que le réseau est inaccessible ou en cas de problème de connectivité quelconque.

{% snippet, "shieldCaution" %}
Il y a des considérations de sécurité à prendre en compte lors de l'activation du mode hors ligne.
{% endsnippet %}

La disponibilité du mode hors ligne dépend de plusieurs paramètres, se référer à [Mode Hors Ligne](/rdm/windows/data-sources/offline-mode/).

Le paramètre le plus bas (en termes de sécurité) prévaut sur les autres, ce qui peut vous empêcher d'utiliser le mode hors ligne. Si le bouton ***Passer Hors Ligne*** n'est pas disponible, veuillez consulter votre administrateur.

L'***Information sur la Source de Données*** affiche la taille du fichier de cache hors ligne ainsi que les modes effectifs (désactivé, lecture seule ou lecture/écriture).
![Information sur la Source de Données - Mode Hors Ligne](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11278.png)

Plusieurs fonctionnalités ne sont pas disponibles en mode hors ligne, telles que :

* Les pièces jointes et les journaux.
* [Gestion des utilisateurs](/rdm/windows/commands/administration/management/user-management/) (Ajouter/Modifier/Supprimer des utilisateurs).
