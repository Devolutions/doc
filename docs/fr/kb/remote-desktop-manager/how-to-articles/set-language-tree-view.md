---
title: Définir une langue pour l'arborescence
description: Dans Remote Desktop Manager, il est possible de spécifier une langue et un emplacement/type pour l'arborescence du Volet de navigation.
keywords:
- culture
- langue
- emplacement
- région
---
Dans {{ fr.RDM }}, il est possible de spécifier une langue et un emplacement/type pour l'arborescence du ***{{ fr.NPANE }}***. Ceci peut être particulièrement utile pour les langues qui utilisent des caractères autres que l'alphabet A-Z.  
{% snippet icon.badgeInfo %} 
Notez que le système sur lequel {{ fr.RDM }} est installé doit supporter la langue spécifique pour qu'elle fonctionne dans {{ fr.RDM }}. 
{% endsnippet %} 
 
1. Dans {{ fr.RDM }}, accéder à ***Fichier – Options – Interface utilisateur – Arborescence***.  
2. Dans le champ ***Culture de l'arborescence***, spécifier une étiquette de langue (« Language tag »).  
{% snippet icon.badgeInfo %} 
Une liste d'étiquettes est disponible sur ce [site Web de Microsoft (EN)](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c), dans un tableau sous la colonne ***Language tag***.  

Ces étiquettes sont généralement composées de lettres minuscules représentant la langue (p. ex., *fr* pour français) suivies de lettres majuscules représentant l'emplacement ou le type (p. ex., *CA* pour Canada), séparées par un trait d'union. Par exemple, *fr-CA* est l'étiquette pour le français canadien.  

Il existe d'autres formats d'étiquettes. 
{% endsnippet %}

![Champ Culture de l'arborescence](/img/fr/kb/KB2072.png) 

3. Cliquer sur le bouton ***Vérifier*** à droite du champ ***Culture de l'arborescence***. Une fenêtre s'affichera pour confirmer la langue et l'emplacement ou le type. Cliquer sur ***OK*** pour la fermer.  
![Vérifier la culture](/img/fr/kb/KB2073.png) 

4. Cliquer sur ***OK*** dans la fenêtre ***Arborescence*** pour sauvegarder vos changements et redémarrer {{ fr.RDM }} pour les appliquer.  

Vous avez maintenant modifié la langue de l'arborescence.  


