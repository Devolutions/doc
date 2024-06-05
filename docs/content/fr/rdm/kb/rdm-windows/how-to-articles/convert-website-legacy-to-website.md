---
eleventyComputed:
  title: Convertir une entrée de site Web (ancienne) en une entrée de site Web
---
Depuis la version 2022.2.12 de {{ fr.RDM }}, le type d'entrée de session ***Navigateur Web*** est désormais connu sous le nom de ***Site Web***, et l'ancien type d'entrée d'information ***Site Web*** a été renommé en ***Site Web (ancien)***, car il s'agit d'un type d'entrée obsolète.

Suivre les étapes ci-dessous pour apprendre à convertir votre entrée ***Site Web (ancien)*** en un type d'entrée ***Site Web*** dans {{ fr.RDM }} en utilisant [***Actions Spéciales***](/rdm/commands/edit/batch/edit-special-actions/).

{% snippet, "badgeInfo" %}
Pour convertir plusieurs entrées à la fois, vous pouvez effectuer une conversion par lot en recherchant par ***Type de connexion*** avec la fonctionnalité ***Recherche Avancée***. Si vos entrées se trouvent dans différents {{ fr.VLT }}s, vous pouvez utiliser la ***Recherche Multi {{ fr.VLT }}*** pour obtenir les mêmes résultats. Assurez-vous d'abord que vos {{ fr.VLT }}(s) contiennent des entrées ***Site Web (ancien)***, sinon le type d'entrée n'apparaîtra pas dans les options de recherche. Visitez [Édition par Lot](/rdm/windows/commands/edit/batch/batch-edit/) pour plus d'informations.
{% endsnippet %}

1. Sélectionner l'entrée que vous souhaitez convertir dans le ***{{ fr.NPANE }}***. Il est possible de sélectionner plusieurs entrées à la fois, à condition qu'elles soient du même type.
1. Faire un clic droit sur l'entrée et sélectionner ***Modifier – Modifier (Actions Spéciales)***. Alternativement, vous pouvez utiliser le ***Ruban*** en cliquant sur ***Modifier (Actions Spéciales)*** dans la section ***Lot*** de l'onglet ***Modifier***.
![Modifier – Modifier (Actions Spéciales)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2076.png)
1. Dans la section ***Web***, sélectionner ***Convertir Site Web (ancien)*** en ***Site Web*** et cliquer sur ***OK***.
![Convertir Site Web (ancien) en Site Web](https://cdnweb.devolutions.net/docs/RDMW4045_2024_1.png)
{% snippet, "badgeInfo" %}
Notez qu'il est également possible de convertir une entrée ***Site Web*** en une entrée de type ***Site Web (ancien)*** en utilisant la même méthode. Il suffit de sélectionner ***Convertir Site Web en Site Web (ancien)*** à la place.
{% endsnippet %}

4. Cliquer sur ***OK*** dans la fenêtre ***Résultat de l'Action par Lot***.
![!!Résultat de l'action par lot](https://cdnweb.devolutions.net/docs/RDMW4047_2024_1.png)

Votre entrée a maintenant été convertie.
