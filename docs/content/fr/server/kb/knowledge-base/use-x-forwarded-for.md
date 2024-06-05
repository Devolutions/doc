---
eleventyComputed:
  title: Utiliser X-Forwarded-For
  description: L'option Utiliser X-Forwarded-For, trouvée dans l'interface web de {{ fr.DVLS }} sous Administration – Paramètres du serveur – Sécurité, a été introduite pour résoudre un problème de sécurité avec {{ fr.DVLS }} sous un équilibreur de charge.
---
L'option ***Utiliser X-Forwarded-For***, trouvée dans l'interface web de {{ fr.DVLS }} sous ***Administration – Paramètres du serveur – Sécurité***, a été introduite pour résoudre un problème de sécurité avec {{ fr.DVLS }} sous un équilibreur de charge : le serveur ne voyait que l'appelant directement avant lui.

Lors de sa première mise en œuvre, l'option était activée par défaut pour permettre la compatibilité avec les utilisateurs utilisant déjà des équilibreurs de charge. Cependant, depuis {{ fr.DVLS }} 2023.3, elle est désactivée par défaut pour les nouvelles installations de {{ fr.DVLS }}. Par conséquent, pour les nouvelles installations utilisant un équilibreur de charge, vous devez activer manuellement l'option dans ***Administration – Paramètres du serveur – Sécurité***. Aucune action n'est requise pour les installations existantes.

![Administration – Paramètres du serveur – Sécurité – Utiliser X-Forwarded-For](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2343.png)

Lorsque l'option est activée, l'en-tête [X-Forwarded-For header](https://en.wikipedia.org/wiki/X-Forwarded-For) est ajouté à la requête par IIS (cela ne fonctionne pas avec Kestrel). Chaque nœud intermédiaire ajoute l'identité de l'appelant original à l'en-tête de la requête et continue d'ajouter son appelant au suivant. Par conséquent, le dernier nœud voit non seulement l'appelant original, mais aussi quels nœuds sont intervenus avant lui.
