---
title: Problème de résolution élevée
description: De multiples problèmes peuvent être causés par une résolution élevée dans les sessions RDP.
keywords:
- DPI
- Résolution élevée
- Point par pouce
- PPP
---
# {{ fr.TOPICTITLE }} 
## Description 
Plusieurs problèmes peuvent être causés par une résolution élevée dans une session RDP. Voici les plus courants : 
* Les connexions RDP sont trop petites. 
* Les connexions RDP sont trop grandes. 
* Les connexions RDP ont toujours une barre de défilement. 
* {{ fr.RDM }} est flou. 
* Problèmes de résolution 4K. 
## Solution 
Plusieurs méthodes permettent de remédier à ces problèmes. 
### Méthode 1 
1. Dans {{ fr.RDM }}, aller dans ***Fichier – Options – Interface utilisateur*** et changer la ***Résolution de l'écran*** à ***Ne détecte pas DPI***. 
![Résolution de l'écran](/img/fr/kb/KB2027.png) 
*Résolution de l'écran*{.caption}  

Si vous ne pouvez pas voir ce paramètre en raison de problèmes d'affichage, vous pouvez ajouter la ligne directement dans vos fichiers de configuration. 
{% snippet icon.badgeHelp %} 
Pour localiser votre fichier de configuration, reportez-vous à [Localisation du fichier de configuration](/fr/kb/remote-desktop-manager/knowledge-base/locating-configuration-file/). 
{% endsnippet %}
 
2. Une fois que vous avez trouvé le bon dossier, ouvrir RemoteDesktopManager.cfg avec votre éditeur de texte favori. 
3. Sous la ligne &lt;CreationDate&gt;XXXX-XX-XXT00:00:00-00:00&lt;/CreationDate&gt;, changer le &lt;DPIAwareness&gt;Default&lt;/DPIAwareness&gt; à &lt;DPIAwareness&gt;None&lt;/DPIAwareness&gt; et sauvegarder le document. 
4. Redémarrer {{ fr.RDM }}. 
### Méthode 2 
1. Fermer {{ fr.RDM }}. 
2. Faire un clic droit sur l'icône de {{ fr.RDM }}. 
3. Cliquer sur ***Propriétés***. 
4. Dans l'onglet ***Compatibilité***, cliquer sur ***Modifier les paramètres de résolution élevée***.  
![Modifier les paramètres de résolution élevée](/img/fr/kb/KB2028.png) 
*Modifier les paramètres de résolution élevée*{.caption} 
1. Sous ***Remplacement de mise à l'échelle PPP élevée***, cocher ***Remplacer le comportement de mise à l'échelle PPP élevée*** puis cliquer sur ***OK***. 
![Remplacer le comportement de mise à l'échelle PPP élevée](/img/fr/kb/KB2029.png) 
*Remplacer le comportement de mise à l'échelle PPP élevée*{.caption} 
{% snippet icon.badgeInfo %} 
Lors de l'application de ce changement, vous devez vous déconnecter puis vous reconnecter avec votre utilisateur pour que les changements prennent effet. 
{% endsnippet %}
 
### Méthode 3 
Dans {{ fr.RDM }}, aller dans ***Fichier – Options – Types – Bureau à distance – Avancé***, puis décocher l'option ***Désactiver le facteur d'échelle RDP (HDPI)***. 
![Désactiver le facteur d'échelle RDP (HDPI)](/img/fr/kb/KB2030.png) 
*Désactiver le facteur d'échelle RDP (HDPI)*{.caption} 
