---
title: Créer une entrée
---
{% youtube 'YiuwiFVIlrY' %}  

Après l’installation de {{ fr.RDM }} , il faut configurer vos entrées. Il existe plusieurs types d&apos;entrées°: vous devez savoir quelle technologie ou quel tiers vous utiliserez pour vous connecter à distance. Ainsi, vous serez en mesure de choisir le type d&apos;entrée le plus approprié selon votre future configuration. 

## Créer une entrée à partir du menu contextuel 

Dans la fenêtre principale de l’application, cliquer avec le bouton droit sur le nom de la source de données et sélectionner ***Ajouter*** . Pour initialiser une nouvelle session, vous pouvez spécifier soit le type de session ou choisir un modèle. Vous pourrez personnaliser vos paramètres dans la fenêtre des propriétés de la session.  
![!!clip11224.png](/img/fr/rdm/windows/clip11224.png) 

## Créer une entrée à l’aide de glisser-déposer 

Vous pouvez aussi créer une session en glissant-déposant un fichier .rdp dans la fenêtre principale de l&apos;application. {{ fr.RDM }} vous demandera alors d&apos;importer le contenu et créer une session, ou de créer une session liée au fichier .rdp. Il est aussi possible de glisser-déposer le raccourci bureau LogMeIn pour créer une session LogMeIn.  

{% snippet icon.badgeInfo %} 
Il est possible que l&apos;option de créer une session grâce à glisser-déposer ne fonctionne pas en raison des paramètres de sécurité. Ces derniers peuvent bloquer l&apos;interaction entre les applications s&apos;exécutant dans des contextes différents. Par exemple, si {{ fr.RDM }} s&apos;exécute dans un contexte avec des privilèges élevés (mode administrateur) et Internet Explorer en mode par défaut, Windows ne permettra pas de glisser un lien URL dans l&apos;application. 
{% endsnippet %}
 
## Créer une entrée en important la configuration 

Vous pouvez également importer des entrées en utilisant l’ [Assistant d’importation](/fr/rdm/windows/commands/file/import/computer-wizard/) ou en important sa configuration directement à partir de n’importe quelle application prise en charge par nos outils d’importation. Pour plus d’informations, veuillez consulter la section [Importer](/fr/rdm/windows/commands/file/import/sessions/) . 
