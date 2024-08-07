---
_schema: default
eleventyComputed:
  title: Prise en charge de MSRDC dans {{ fr.RDM }}
  description: >-
    {{ fr.RDM }} intègre un support pour le client de Bureau à distance Microsoft (MSRDC), offrant des options améliorées pour les connexions RDP en complément du client classique des services de terminal Microsoft (MSTSC).
  status:
  keywords:
---
{{ variables.RDM.fr }} intègre un support pour le client de Bureau à distance Microsoft (MSRDC), offrant des options améliorées pour les connexions RDP en complément du client classique des services de terminal Microsoft (MSTSC).

{% snippet, "badgeHelp" %}Voir l'article complet du blog : [Remote Desktop Manager prend désormais en charge MSRDC : options de client RDP améliorées](https://blog.devolutions.net/2022/03/msrdc-is-now-supported-in-remote-desktop-manager/).{% endsnippet %}

## Principales différences entre MSTSC et MSRDC

### Définition

* **MSTSC** : Client RDP classique, préinstallé avec Windows.
* **MSRDC** : Client RDP moderne, principalement pour Azure Virtual Desktop, disponible en téléchargement séparé.

### Interface utilisateur

* **MSTSC** : Comprend une interface graphique pour la configuration de la connexion.
* **MSRDC** : Manque d'une interface graphique, s'appuyant sur des fichiers RDP pour les connexions, le rendant plus adapté pour l'intégration avec des outils comme {{ variables.RDM.null }}.

### Distribution et support

* **MSTSC** : Distribué et mis à jour via Windows Update, avec des cycles de support plus longs.
* **MSRDC** : Cycles de sortie plus rapides, peut être rétrogradé si nécessaire, non officiellement supporté en dehors d'Azure Virtual Desktop.

### Avantages de l'utilisation de MSRDC dans {{ variables.RDM.fr }}

* **Fonctionnalités améliorées** : MSRDC prend en charge des fonctionnalités telles que les changements de résolution côté serveur et le redimensionnement du bureau.
* **Flexibilité** : Mises à jour plus rapides et possibilité de revenir à des versions précédentes si nécessaire.
* **Corrections de bugs** : Les bugs RDP courants peuvent être résolus plus rapidement dans MSRDC.

## Comment utiliser MSRDC dans {{ variables.RDM.fr }}

### Installation

Assurez-vous que [MSRDC est installé](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/windowsdesktop "Se connecter à Azure Virtual Desktop avec le client de Bureau à distance pour Windows") sur votre système puisqu'il n'est pas inclus avec {{ variables.RDM.null }}. Il est également possible de [déployer MSRDC sur plusieurs ordinateurs avec des mises à jour automatiques](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/windowsdesktop-admin "Utiliser les fonctionnalités du client de Bureau à distance pour Windows lors de la connexion à Azure Virtual Desktop") au lieu de le faire manuellement.

### Configuration

1. Dans {{ variables.RDM.null }}, sélectionnez une entrée RDP et cliquez sur ***Propriétés***.<br>![Propriétés de l'entrée RDP](https://cdnweb.devolutions.net/docs/RDMW2058_2024_2.png)
2. Dans la section ***Général***, sélectionnez l'onglet ***Avancé***. De là, réglez la ***version RDP*** sur ***MSRDC***.<br>![Général – Avancé – Version RDP – MSRDC](https://cdnweb.devolutions.net/docs/RDMW2059_2024_2.png)
3. Cliquez sur ***Mettre à jour*** pour sauvegarder vos modifications.

## Conclusion

Alors que MSTSC reste le choix par défaut pour beaucoup en raison de sa nature intégrée et de sa simplicité, MSRDC offre des fonctionnalités avancées et des mises à jour plus rapides, le rendant une alternative précieuse au sein de {{ variables.RDM.null }}. Pour les problèmes liés à MSTSC, MSRDC fournit un outil de comparaison utile et une solution potentielle.