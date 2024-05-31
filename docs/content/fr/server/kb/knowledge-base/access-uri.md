---
eleventyComputed:
  title: URI d'accès
---
{% snippet, "badgeCaution" %}
Ce problème est lié à la mise à niveau d'une version antérieure à 2022.1 vers 2022.2.
{% endsnippet %}

Pendant le processus de mise à niveau ou le processus d'installation de {{ fr.DVLS }}, nous devons fournir un URI d'accès. Cet URI est une URL de redirection qui est utilisée par le système OAuth et redirige le trafic d'authentification vers l'URI d'accès.

## Paramètres

1. Dans la {{ fr.DVLSCONSOLE }}, aller à ***Serveur - Modifier - IIS***.
1. Entrer l'***URI d'accès*** dans le champ de texte suivant le format fourni dans les Scénarios.

{% snippet, "badgeNotice" %}
L'URI d'accès est sensible à la casse et doit respecter le nom d'hôte du certificat. Assurez-vous qu'il n'y a pas de '/' à la fin de l'URL.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Il peut y avoir plus d'un URI d'accès. Cliquer sur le bouton des points de suspension pour ajouter ou gérer des ***URI d'accès*** supplémentaires.
{% endsnippet %}

![Serveur – Modifier – ISS](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5020.png)
1. Cliquer sur ***OK***.
{start="3"}

## Scénarios

Plusieurs formats peuvent être définis et vous devez choisir le bon.

1. L'instance {{ fr.DVLS }} est disponible uniquement en interne et est hébergée sur un seul serveur. Alors l'URI d'accès doit être défini avec le FQDN de la machine et se terminer par l'application IIS {{ fr.DVLS }} si elle n'est pas installée à la racine du site web.
https<area>://monnomdeserveur.mondomaine.loc/dvls
1. L'instance {{ fr.DVLS }} est disponible de l'extérieur sur le web ou derrière un environnement équilibré en charge. Alors l'URI d'accès doit être défini avec l'URL que vous utilisez pour atteindre l'instance depuis internet.
https<area>://monorganisation.com/dvls
1. Si {{ fr.DVLS }} est installé à la racine du site web IIS. Alors l'URI d'accès doit être uniquement le FQDN de la machine.
https<area>://monorganisation.com
1. Si {{ fr.DVLS }} utilise un port non standard (80 pour http, 443 pour https). Alors l'URI d'accès devra contenir le numéro de port après un deux-points.
https<area>://monorganisation.com:4443/dvls

