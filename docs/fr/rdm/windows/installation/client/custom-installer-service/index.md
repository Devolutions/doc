---
eleventyComputed:
  title: "{{ fr.CIS | safe }}"
---
<table>
	<tr>
		<td>

![!!CustomInstallerServiceIcon](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/CustomInstallerServiceIcon.png)
		</td>
		<td>
* Générer des paquets d'installation personnalisés pour {{ fr.RDM }}.
* Inclure des sources de données préconfigurées dans le paquet pour un déploiement rapide à l'échelle de l'entreprise.
		</td>
	</tr>
</table>

Le {{ fr.CIS }} reproduit la configuration à partir d'une instance de {{ fr.RDM }}. Cette configuration est utilisée pour créer un fichier d'installation (*.rdi) qui sera utilisé pour créer le paquet d'installation destiné à la distribution. La configuration peut contenir les sources de données, les informations d'identifiants, les modèles de base de données et plus encore. Il est recommandé d'utiliser une installation type de {{ fr.RDM }} pour créer le paquet d'installation.

{% snippet icon.badgeInfo %}
Vous devez créer un fichier d'installation à l'aide de {{ fr.RDM }} avant de créer l'installateur. Cette procédure est décrite dans [Générateur de fichier de configuration](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/).
{% endsnippet %}

{% snippet icon.badgeInfo %}
Vous pouvez stocker et créer jusqu'à six paquets de fichiers de configuration d'***{{ fr.CI }}*** dans votre {{ fr.DA }}.
{% endsnippet %}

Le {{ fr.CIS }} peut être trouvé dans les outils du {{ fr.DA }}, situés sous ***Fichier – {{ fr.DA }} – Outils***. Vous devez être connecté pour y accéder.
![Fichier – {{ fr.DA }} – Outils](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11245.png)

Les rubriques suivantes vous aideront à commencer la configuration de vos programmes d'installation personnalisés avec {{ fr.RDM }}.

* [Créer un paquet d'installation](/fr/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/)
* [Générateur de fichier de configuration](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/)
* [Sélection des options](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/)
