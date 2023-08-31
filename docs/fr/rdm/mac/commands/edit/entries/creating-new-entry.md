---
eleventyComputed:
  title: Créer une entrée
  description: Après l'installation de {{ fr.RDMMAC }}, il vous faut configurer vos entrées. Il existe plusieurs types d'entrées; vous devez savoir quel tiers ou quelle technologie vous utiliserez pour choisir le(s) type(s) d'entrée(s) approprié(s) que vous envisagez de configurer. 
---
Après l'installation de {{ fr.RDMMAC }}, il vous faut configurer vos entrées. Il existe plusieurs types d'entrées; vous devez savoir quel tiers ou quelle technologie vous utiliserez pour choisir le(s) type(s) d'entrée(s) approprié(s) que vous envisagez de configurer. 

## Créer une entrée

### À partir du Ruban

Dans le ***{{ fr.NPANE }}***, sélectionnez l'endroit où vous souhaitez que l'entrée soit située. Dans le ***Ruban***, allez dans ***Modifier*** et cliquez sur ***Nouvelle entrée***. Vous serez invité à personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.  
![Ajouter une entrée à partir du Ruban](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2054.png) 

### À partir du menu contextuel

Dans le ***{{ fr.NPANE }}***, faites un clic droit à l'endroit où vous souhaitez que l'entrée soit située et sélectionnez ***Ajouter*** dans le menu. Pour initialiser une nouvelle session, vous pouvez spécifier le type de session ou un modèle. Vous serez invité à personnaliser vos paramètres dans la fenêtre des propriétés de l'entrée.  
![Ajouter une entrée à partir du menu contextuel](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2055.png) 

### En important une configuration

Vous pouvez également importer des entrées dans ***Fichier – Importer***. Pour en savoir plus, consultez [Importer](/fr/rdm/mac/commands/file/import/sessions/).

## Créer une sous entrée

{% snippet icon.badgeInfo %}
Depuis la version 2022.3 de {{ fr.RDMMAC }}, les sous entrées ont remplacé les sous connexions. Elles sont différentes dans la mesure où les sous connexions étaient stockées en XML dans leur entrée parente, ce qui n'est pas le cas des sous entrées. Celles-ci sont beaucoup plus polyvalentes.  

La migration des sous connexions préexistantes vers les nouvelles sous entrées est automatique lors de la mise à jour de {{ fr.RDM }} de la version 2022.2 ou antérieure vers la version 2022.3 ou ultérieure.
{% endsnippet %}  

Les sous entrées sont des entrées à part entière, indépendantes, situées sous une entrée « parent » dans l'arborescence. Elles se réfèrent à leur parent par un ID. Elles sont compatibles avec les pièces jointes, la documentation, l'historique complet, etc. 

Elles se trouvent sous l'entrée parent ou dans l'onglet ***Sous entrées*** du [***Tableau de bord***](/fr/rdm/mac/user-interface/content-area/dashboard/) de l'entrée parent.

### À partir du Ruban

Dans le ***{{ fr.NPANE }}***, sélectionnez l'entrée sous laquelle vous souhaitez placer une sous entrée. Dans le ***Ruban***, allez dans ***Modifier*** et cliquez sur ***Nouvelle entrée***. Comme vous avez précédemment sélectionné l'entrée parente, vous serez invité à choisir entre la création d'une sous entrée ou d'une entrée. Sélectionnez ***Nouvelle sous entrée***. Ensuite, personnalisez vos paramètres dans la fenêtre des propriétés de l'entrée.  

{% snippet icon.badgeInfo %}
Vous ne pouvez pas créer une sous entrée sous une autre sous entrée.
{% endsnippet %}  

![Ajouter une sous entrée à partir du Ruban](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2054.png) 
![Invitation à créer une nouvelle sous entrée](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2057.png) 

### À partir du menu contextuel

Dans le ***{{ fr.NPANE }}***, faites un clic droit sur l'entrée sous laquelle vous souhaitez placer une sous entrée et sélectionnez ***Ajouter*** dans le menu. Pour initialiser une nouvelle session, vous pouvez spécifier le type de session ou un modèle. Vous serez invité à choisir entre la création d'une sous entrée ou d'une entrée. Sélectionnez ***Nouvelle sous entrée***. Ensuite, personnalisez vos paramètres dans la fenêtre des propriétés de l'entrée.  

{% snippet icon.badgeInfo %}
Vous ne pouvez pas créer une sous entrée sous une autre sous entrée.
{% endsnippet %}  

![Ajouter une sous entrée à partir du menu contextuel](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2056.png) 
![Invitation à créer une nouvelle sous entrée](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac2057.png) 
