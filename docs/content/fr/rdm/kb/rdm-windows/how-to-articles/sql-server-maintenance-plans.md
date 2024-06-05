---
eleventyComputed:
  title: Plans de maintenance SQL Server
---
Malheureusement, une instance SQL Server n'est pas quelque chose que vous pouvez simplement installer et exécuter sans un soin approprié. Conserver les valeurs par défaut pour les nouvelles bases de données causera presque certainement des problèmes à long terme.

Si la maintenance n'est pas effectuée régulièrement, les fichiers de la base de données continueront de croître jusqu'à ce que la simple taille des fichiers diminue les performances et finalement atteigne un point où l'application cliente semble inutilisable.

Nous NE sommes PAS un magasin de DBA. Poser la question "Quel est le meilleur plan de maintenance que je peux mettre en œuvre ?" à des DBA chevronnés aboutira invariablement à une réponse similaire à "Cela dépend".

{% snippet, "shieldWarning" %}
Ces "pointeurs" sont fournis tels quels et nous ne pouvons être tenus responsables s'ils ne répondent pas à vos besoins. Vous devez consulter un administrateur de base de données qualifié pour confirmer vos besoins et comment les satisfaire.
{% endsnippet %}

La stratégie de sauvegarde dépend vraiment de la quantité de données que vous êtes prêt à perdre en cas de défaillance, oui... attendez-vous à perdre des données, le coût d'un système qui NE perd AUCUNE donnée est assez élevé et n'est pas dans le cadre de ce sujet.

Si vous êtes à l'aise avec le fait de ne pouvoir revenir qu'à la sauvegarde de la nuit précédente, vous pouvez définir le modèle de récupération de la DB sur simple, et prendre une sauvegarde complète chaque nuit.

Si vous voulez quelque chose d'un peu plus robuste, nous avons vu ce qui suit :

* Une sauvegarde complète quotidienne de la DB.
* Une sauvegarde plus fréquente du journal des transactions, disons toutes les 4 heures à partir de 06:00 et se terminant à 18:01 ou 22:01
* Une tâche de nettoyage pour supprimer les anciennes sauvegardes.

Si vous avez besoin de pouvoir récupérer des données qui datent de quelques minutes, alors vous avez vraiment besoin d'un DBA qualifié pour vous aider.

Encore une fois, ce sont des exemples de la manière dont nous avons vu des sauvegardes planifiées pour des systèmes non critiques. Si cela ne répond pas à vos besoins spécifiques. Vous devez surveiller : le temps que les sauvegardes prennent pour se compléter ; l'espace libre restant sur le dispositif de sauvegarde ; et ainsi de suite et ainsi de suite !

De plus, une stratégie de sauvegarde implique réellement de passer régulièrement par le processus de récupération pour prouver qu'il fonctionne. Les sauvegardes fonctionnent généralement bien, c'est le processus de restauration qui est difficile, imaginez avoir un patron qui respire dans votre cou pendant que vous recherchez la séquence d'actions appropriée parce que vous n'avez jamais fait cela auparavant...

Si vous regardez notre tout premier sysadminotaur, (à [http://blog.devolutions.net/2012/08/sysadminotaur.html](http://blog.devolutions.net/2012/08/sysadminotaur.html)) vous pouvez deviner que nous avons entendu parler de mauvais plans de sauvegarde avant...

{% snippet, "shieldWarning" %}
Les plans de sauvegarde doivent être surveillés et les plans de récupération doivent être mis en œuvre pour confirmer qu'ils fonctionnent réellement !
{% endsnippet %}
