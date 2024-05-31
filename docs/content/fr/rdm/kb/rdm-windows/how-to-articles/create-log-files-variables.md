---
eleventyComputed:
  title: Créer des fichiers journaux avec des variables
---
Nos clients nous demandent souvent quelles sont les variables à définir pour ajouter l'année, le mois, le jour et l'heure au nom de leurs fichiers journaux.
Les variables qui doivent être utilisées sont :

$DATE_YEAR$

$DATE_MONTH$

$DATE_DAY$

$DATE_TEXT_ISO$

$TIME_TEXT_ISO$

$NAME$

$HOST$

Un exemple serait :

**C:\Users\Documents\$DATE_YEAR$.$DATE_MONTH$.$DATE_DAY$.$TIME_TEXT_ISO$.$NAME$.$HOST$.log**
