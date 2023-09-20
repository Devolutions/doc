---
  title: Mettre hors-ligne
---
Basculez le [Mode hors-ligne](/fr/rdm/windows/data-sources/offline-mode/) de la source de données.  

Utiliser le mode hors-ligne pour vous connecter à une copie locale de la source de données lorsque la base de données distante n'est pas disponible. Ceci est utile lorsque vous travaillez à partir d'un emplacement distant et que le réseau est inaccessible ou en cas de problème de connectivité. 

{% snippet icon.shieldCaution %} 
Il y a des considérations de sécurité à prendre en compte lors de l'activation du mode hors-ligne. 
{% endsnippet %}
 
La disponibilité du mode hors ligne dépend de plusieurs paramètres, reportez-vous à [Mode hors-ligne](/fr/rdm/windows/data-sources/offline-mode/).  

Le paramètre le plus bas (en termes de sécurité) prévaut sur les autres, ce qui peut vous empêcher d'utiliser le mode hors-ligne. Si le bouton ***Mettre hors-ligne*** n'est pas disponible, veuillez consulter votre administrateur.  

Les [Informations sur la source de données](/fr/rdm/windows/commands/file/my-data-source-information/) affichent la taille du fichier de cache hors ligne ainsi que les modes effectifs (désactivé, lecture seule ou lecture/écriture).  
![Informations de la source de données - Mode hors connexion](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11278.png) 

Plusieurs fonctionnalités ne sont pas disponibles en mode hors-ligne, telles que :  

* Pièces jointes et journaux. 
* [Gestion des usagers](/fr/rdm/windows/commands/administration/management/user-management/) (Ajouter/Modifier/Supprimer des usagers). 
