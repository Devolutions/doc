---
title: Comment exporter et importer des entrées
---
Vous pouvez exporter et importer des entrées d'un type de source de données à un autre. Il existe plusieurs façons d'exporter des entrées avec {{ fr.RDM }} . 
{% snippet icon.badgeCaution %} 
Si vous avez des ***Utilisateurs*** et qu'ils remplacent les propriétés des entrées avec les ***Paramètres spécifiques de l'utilisateur*** , ceux-ci devront exporter et importer leur ***Liste des paramètres spécifiques de l'utilisateur*** . Consultez [cette rubrique](/kb/remote-desktop-manager/how-to-articles/export-import-user-specific-settings/) (EN) pour apprendre comment exporter et importer les paramètres spécifiques de l'utilisateur. 
{% endsnippet %}  
 
1. Sélectionner votre source de données dans le ***Volet de navigation*** de {{ fr.RDM }} . 
{% snippet icon.badgeNotice %} 
Pour exporter l'ensemble du coffre, cliquer sur ***Fichier - Exporter - Exporter le coffre (.rdm)*** , puis passer à l'<a href="#4">étape 4</a>. 
{% endsnippet %}
 
2. Choisir les entrées et les dossiers que vous voulez exporter. 
1. Faire un clic droit sur votre sélection et choisir ***Exporter - Exporter la sélection (.rdm)*** .  
![KB2006.png](/img/fr/kb/KB2006.png) 
1. Pour une migration typique, vous cocherez les options ***Inclure identifiants*** , ***Inclure les pièces jointes et documents*** et ***Chiffrer avec la clé maîtresse*** . <a name="4"></a>
{% snippet icon.badgeInfo %} 
Par défaut, les identifiants ne sont PAS inclus. Il est crucial de cocher l'option ***Inclure identifiants*** afin que les données exportées contiennent les identifiants. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
La saisie d’une clé maîtresse permet de chiffrer tout le contenu du fichier ***.rdm*** afin de le protéger. Cette mesure est vivement recommandée pour la sauvegarde de vos données, mais la clé est requise pour le déchiffrement. Conservez-la sur un périphérique de stockage indépendant pour des raisons de sécurité. 
{% endsnippet %}
 
![KB2007.png](/img/fr/kb/KB2007.png)  

5. Cliquer sur ***OK*** . 
1. Enregistrer le fichier ***.rdm*** sur votre ordinateur. 
1. Sélectionner votre source de données et le coffre dans lequel vous voulez importer les entrées dans le ***Volet de navigation*** . 
1. Faire un clic droit sur votre sélection et choisir ***Importer - Importer (.rdm)*** .  
![KB2008.png](/img/fr/kb/KB2008.png)  
{% snippet icon.badgeNotice %} 
Vous pouvez importer tout le coffre dans ***Fichier - Importer - Importer (.rdm)*** . 
{% endsnippet %}
 
9. Repérer le fichier ***.rdm*** enregistré sur votre ordinateur et cliquer sur ***Ouvrir*** . 
1. Sélectionner si vous voulez ***Importer à la racine*** , ***Importer dans le dossier en cours*** ou ***Importer dans le dossier spécifique*** .  
![KB2009.png](/img/fr/kb/KB2009.png) 
1. Cliquer sur ***OK*** . 
1. La boîte de dialogue suivante contient une liste de toutes les entrées du fichier de données. Vous pouvez choisir des entrées précises que vous désirez importer ou ***Sélectionner tout*** pour importer toutes vos entrées. 
{% snippet icon.badgeCaution %} 
Si des ***Utilisateurs*** remplacent les propriétés des entrées par des ***Paramètres spécifiques de l'utilisateur*** , décocher la case ***Changer ID*** . 
{% endsnippet %}
 
13. Cliquer sur ***OK*** . 

