---
title: Mode Lecture/Écriture hors-ligne
---
Le mode ***Lecture/Écriture*** hors ligne permet à l'utilisateur d'ajouter, de modifier et de supprimer des entrées lorsque la source de données est hors ligne. Ces modifications sont enregistrées localement et synchronisées avec la source de données une fois qu'elle est de nouveau en ligne.  

{% snippet icon.badgeInfo %} 
Certaines fonctionnalités ne sont pas disponibles hors ligne et vous ne pourrez peut-être pas effectuer toutes les actions. Notez que le ***{{ fr.UVLT }}*** est toujours disponible en mode hors ligne. 
{% endsnippet %}
 
Une fois hors ligne, les paramètres de sécurité des utilisateurs s'appliquent toujours. Les privilèges d'ajout/modification/suppression accordés par l'administrateur sont toujours en vigueur. Voir [Gestion des utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/).  

## Modifications hors connexion 

Lorsqu'une entrée est modifiée par un utilisateur en ligne alors qu'un autre utilisateur est hors ligne, la version locale de l'entrée stockée dans le cache hors ligne devient différente de la version en ligne. Cela provoque un conflit lorsque l'utilisateur hors ligne se reconnecte.  

1. Se connecter à la source de données. 
1. Se mettre hors-ligne dans ***Fichier - Mettre hors-ligne***. 
1. Modifier une entrée. 
1. Se remettre en ligne dans ***Fichier - Aller en ligne***. 

La fenêtre ***Modifications hors connexion*** s'affiche :  
![Modifications hors connexion](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10394.png) 

Utiliser cette boîte de dialogue pour ***Accepter/Rejeter*** vos modifications hors ligne.  

Vous pouvez utiliser l'action ***Comparer*** pour avoir une comparaison côte à côte de vos modifications de l'entrée actuelle.  

Les statuts possibles des entrées sont :  

* ***Accepter*** :  lorsqu'aucun changement extérieur n'a été détecté. 
* ***Conflit*** : lorsque des modifications extérieures ont été détectées depuis votre dernière connexion. 

## Modifications hors-ligne multiples 

Lorsque plusieurs utilisateurs modifient simultanément la même entrée hors ligne, un conflit se produit lorsque le deuxième utilisateur est de nouveau en ligne.  

Voici un exemple d'un tel cas pour aider à résoudre correctement les conflits :  

Lorsque le premier utilisateur revient en ligne, la fenêtre ***Modifications hors connexion*** s'affiche. Les modifications sont acceptées par défaut.  

Lorsque le deuxième utilisateur revient en ligne, un conflit se produit et la fenêtre ***Modifications hors connexion*** s'affiche.  

Lorsque le conflit se produit, l'utilisateur doit décider d'accepter ou de rejeter les modifications. Les différentes versions de l'entrée peuvent être comparées pour voir quelles modifications ont été apportées. 

### Comparer les versions d'une entrée 

Cliquer sur le bouton ***Comparer*** pour comparer les versions d'une entrée en conflit. Analyser la structure XML de l'entrée pour décider d'accepter ou de rejeter les modifications. 

