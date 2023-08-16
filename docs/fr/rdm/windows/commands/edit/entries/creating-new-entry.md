---
eleventyComputed:
  title: Créer une entrée
  description: Après l'installation de {{ fr.RDM }}, il vous faut configurer vos entrées. Il existe plusieurs types d'entrées; vous devez savoir quel tiers ou quelle technologie vous utiliserez pour choisir le(s) type(s) d'entrée(s) approprié(s) que vous envisagez de configurer. 
---
{% youtube 'YiuwiFVIlrY' %}  

Après l'installation de {{ fr.RDM }}, il vous faut configurer vos entrées. Il existe plusieurs types d'entrées; vous devez savoir quel tiers ou quelle technologie vous utiliserez pour choisir le(s) type(s) d'entrée(s) approprié(s) que vous envisagez de configurer. 

## Créer une entrée

### À partir du Ruban

Dans le ***{{ fr.NPANE }}***, sélectionnez l'endroit où vous souhaitez que l'entrée soit située. Dans le ***Ruban***, allez dans ***Modifier*** et cliquez sur ***Nouvelle entrée***. Vous serez invité à personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.  
![Ajouter une entrée à partir du Ruban](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2134.png) 

### À partir du menu contextuel

Dans le ***{{ fr.NPANE }}***, faites un clic droit à l'endroit où vous souhaitez que l'entrée soit située et sélectionnez ***Ajouter*** dans le menu. Pour initialiser une nouvelle session, vous pouvez spécifier le type de session ou un modèle. Vous serez invité à personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.  
![Ajouter une entrée à partir du menu contextuel](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2135.png) 

### Par glisser-déposer

Vous pouvez également créer une session en glissant-déposant un fichier RDP dans le ***{{ fr.NPANE }}***. Ce faisant, {{ fr.RDM }} vous demandera s'il faut importer le contenu et créer une nouvelle session, ou créer une session liée au fichier RDP. Il est également possible de faire glisser le raccourci de bureau LogMeIn pour créer une session LogMeIn. 
{% snippet icon.badgeInfo %} 
Il est possible que le glisser-déposer ne fonctionne pas en raison de vos paramètres de sécurité. Ceux-ci peuvent empêcher les applications exécutées dans des contextes différents d'interagir. Par exemple, si {{ fr.RDM }} s'exécute dans un contexte élevé (mode administrateur) et qu'Internet Explorer s'exécute en mode par défaut, Windows ne vous permettra pas de faire glisser un lien URL dans l'application. 
{% endsnippet %}

### En important une configuration

Vous pouvez également importer des entrées en utilisant l'[Assistant d'importation pour l'ordinateur](/fr/rdm/windows/commands/file/import/computer-wizard/) ou en important sa configuration directement à partir de n'importe quelle application compatible supportée par nos outils d'importation. Pour en savoir plus, consultez [Importer](/fr/rdm/windows/commands/file/import/sessions/). 

## Créer une sous entrée

{% snippet icon.badgeInfo %}
Depuis la version 2022.3 de {{ fr.RDMMAC }}, les sous entrées ont remplacé les sous connexions. Elles sont différentes dans la mesure où les sous connexions étaient stockées en XML dans leur entrée parente, ce qui n'est pas le cas des sous entrées. Celles-ci sont beaucoup plus polyvalentes.  

La migration des sous connexions préexistantes vers les nouvelles sous entrées est automatique lors de la mise à jour de {{ en.RDM }} de la version 2022.2 ou antérieure vers la version 2022.3 ou ultérieure.
{% endsnippet %}  

Les sous entrées sont des entrées à part entière, indépendantes, situées sous une entrée « parent » dans l'arborescence. Elles se réfèrent à leur parent par un ID. Elles sont compatibles avec les pièces jointes, la documentation, l'historique complet, etc. 

Elles se trouvent sous l'entrée parent ou dans l'onglet ***Sous entrées*** du [***Tableau de bord***](/fr/rdm/windows/user-interface/content-area/dashboards/) de l'entrée parent.

{% snippet icon.badgeInfo %}
Vous ne pouvez pas créer une sous entrée sous une autre sous entrée.
{% endsnippet %}  

### À partir du Ruban

Dans le ***{{ fr.NPANE }}***, sélectionnez l'entrée sous laquelle vous souhaitez placer une sous entrée. Dans le ***Ruban***, allez dans ***Modifier*** et cliquez sur ***Nouvelle entrée***. Comme vous avez précédemment sélectionné l'entrée parente, vous serez invité à choisir entre la création d'une sous entrée ou d'une entrée. Sélectionnez ***Nouvelle sous entrée***. Ensuite, personnalisez vos paramètres dans la fenêtre des propriétés de l'entrée.  
![Ajouter une sous entrée à partir du Ruban](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2134.png) 
![Invitation à créer une nouvelle sous entrée](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2136.png) 

### À partir du menu contextuel

Dans le ***{{ fr.NPANE }}***, faites un clic droit sur l'entrée sous laquelle vous souhaitez placer une sous entrée et sélectionnez ***Ajouter*** dans le menu. Pour initialiser une nouvelle session, vous pouvez spécifier le type de session ou un modèle. Vous serez invité à choisir entre la création d'une sous entrée ou d'une entrée. Sélectionnez ***Nouvelle sous entrée***. Ensuite, personnalisez vos paramètres dans la fenêtre des propriétés de l'entrée.  
![Ajouter une sous entrée à partir du menu contextuel](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2137.png) 
![Invitation à créer une nouvelle sous entrée](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2136.png) 
