---
eleventyComputed:
  title: "{{ fr.CIS }}"
  description: "Le {{ fr.CIS }} génère des paquets d'installation personnalisés pour {{ fr.RDM }}."
---
![!!CustomInstallerServiceIcon](https://cdnweb.devolutions.net/images/projects/custom-installer/logos/custom-installer-white-shadow.svg)

* Générer des paquets d'installation personnalisés pour {{ fr.RDM }}.
* Inclure des sources de données préconfigurées dans le paquet pour un déploiement rapide à l'échelle de l'entreprise.

Le {{ fr.CIS }} réplique la configuration d'une instance {{ fr.RDM }}. Cette configuration est utilisée pour créer un fichier d'installateur (*.rdi), qui sera utilisé pour créer le paquet d'installation destiné à la distribution. La configuration peut contenir des sources de données, des identifiants, des modèles de base de données, et plus encore. Il est recommandé d'avoir une installation {{ fr.RDM }} utilisée spécifiquement pour créer le paquet d'installation.

{% snippet, "shieldWarning" %}
L'option ***Pas de connexion Internet*** dans {{ fr.RDM }} (***Fichier*** – ***Option*** – ***Outils*** – ***Avancé***) doit être désactivée pour que {{ fr.CI }} fonctionne.
{% endsnippet %}

Vous **devez créer un fichier d'installateur** en utilisant {{ fr.RDM }} avant de créer l'installateur. Ceci est décrit dans [Générateur de fichier d'installateur](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/).

Le {{ fr.CIS }} peut être trouvé avec les outils {{ fr.DA }}, situés dans ***Fichier – {{ fr.DA }} – Outils***. Vous devez être connecté pour y accéder.
![Fichier – {{ fr.DA }} – Outils](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11245.png)

Les sujets suivants vous aideront à commencer à configurer vos installateurs personnalisés avec {{ fr.RDM }}.

* [Créer un paquet d'installation](/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/)
* [Générateur de fichier d'installateur](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/)
* [Dialogue de sélection d'option](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/)
