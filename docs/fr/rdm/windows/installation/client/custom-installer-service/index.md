---
title: Service d'installateur personnalisé
---
<table>
	<tr>
		<td>

![!!CustomInstallerServiceIcon.png](/img/fr/rdm/windows/CustomInstallerServiceIcon.png) 
		</td>
		<td>
* Générer et télécharger des paquets d&apos;installation personnalisés pour {{ fr.RDM }} . 
* Inclure des sources de données préconfigurées dans le paquet pour un déploiement rapide à l&apos;échelle de l&apos;entreprise. 
* Télécharger le programme d&apos;installation en tant que Windows Installer (fichier .msi). 
		</td>
	</tr>
</table>

Le service d&apos;installateur personnalisé, proposé à partir de nos services Devolutions Cloud, reproduit la configuration à partir d&apos;une instance de {{ fr.RDM }} . Cette configuration est utilisée pour créer un fichier d&apos;installation (*.rdi) qui sera utilisé pour créer le paquet d&apos;installation destiné à la distribution. La configuration peut contenir les sources de données, les informations d&apos;identifiants, les modèles de base de données et plus encore. Il est recommandé d&apos;utiliser une installation type de {{ fr.RDM }} pour créer le paquet d&apos;installation. 

{% snippet icon.shieldWarning %} 
Le service d&apos;installateur personnalisé télécharge un fichier de configuration sur nos services en ligne. Vous ne devez pas utiliser le service pour redistribuer des mots de passe pour des sources de données. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Vous devez créer un fichier d&apos;installation à l&apos;aide de {{ fr.RDM }} &#32; avant de créer l&apos;installateur sur le portail Web. Cette procédure est décrite dans notre rubrique traitant du [Générateur de fichier de configuration](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Vous pouvez stocker et créer jusqu&apos;à six paquets de fichiers de configuration d&apos; ***Installateur personnalisé*** dans votre {{ fr.DA }} . 
{% endsnippet %}
 
Le service d&apos;installateur personnalisé peut être trouvé dans les outils du {{ fr.DA }} , situés sous ***Fichier – Compte Devolutions – Outils*** . Vous devez être connecté pour y accéder.  
![Fichier – Compte Devolutions – Outils](/img/fr/rdm/windows/clip11245.png)

Les rubriques suivantes vous aideront à commencer la configuration de vos programmes d&apos;installation personnalisés avec {{ fr.RDM }} .  

* [Créer un paquet d&apos;installation](/fr/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/) 
* [Générateur de fichier de configuration](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/) 
* [Sélection des options](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/) 


