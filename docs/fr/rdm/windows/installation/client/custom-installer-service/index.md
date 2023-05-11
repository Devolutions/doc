---
title: Service d'installateur personnalisé
---
<table>
	<tr>
		<td>

![!!CustomInstallerServiceIcon.png](/img/fr/rdm/windows/CustomInstallerServiceIcon.png) 
		</td>
		<td>
* Générer et télécharger des paquets d'installation personnalisés pour {{ fr.RDM }} . 
* Inclure des sources de données préconfigurées dans le paquet pour un déploiement rapide à l'échelle de l'entreprise. 
* Télécharger le programme d'installation en tant que Windows Installer (fichier .msi). 
		</td>
	</tr>
</table>

Le service d'installateur personnalisé, proposé à partir de nos services Devolutions Cloud, reproduit la configuration à partir d'une instance de {{ fr.RDM }} . Cette configuration est utilisée pour créer un fichier d'installation (*.rdi) qui sera utilisé pour créer le paquet d'installation destiné à la distribution. La configuration peut contenir les sources de données, les informations d'identifiants, les modèles de base de données et plus encore. Il est recommandé d'utiliser une installation type de {{ fr.RDM }} pour créer le paquet d'installation. 

{% snippet icon.shieldWarning %} 
Le service d'installateur personnalisé télécharge un fichier de configuration sur nos services en ligne. Vous ne devez pas utiliser le service pour redistribuer des mots de passe pour des sources de données. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Vous devez créer un fichier d'installation à l'aide de {{ fr.RDM }}   avant de créer l'installateur sur le portail Web. Cette procédure est décrite dans notre rubrique traitant du [Générateur de fichier de configuration](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Vous pouvez stocker et créer jusqu'à six paquets de fichiers de configuration d' ***Installateur personnalisé*** dans votre {{ fr.DA }} . 
{% endsnippet %}
 
Le service d'installateur personnalisé peut être trouvé dans les outils du {{ fr.DA }} , situés sous ***Fichier – Compte Devolutions – Outils*** . Vous devez être connecté pour y accéder.  
![Fichier – Compte Devolutions – Outils](/img/fr/rdm/windows/clip11245.png)

Les rubriques suivantes vous aideront à commencer la configuration de vos programmes d'installation personnalisés avec {{ fr.RDM }} .  

* [Créer un paquet d'installation](/fr/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/) 
* [Générateur de fichier de configuration](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/) 
* [Sélection des options](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/) 


