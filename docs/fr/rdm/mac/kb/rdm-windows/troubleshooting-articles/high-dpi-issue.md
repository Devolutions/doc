---
eleventyComputed:
  title: Problèmes de haute résolution
  description: Il existe plusieurs problèmes qui peuvent être causés par une haute résolution dans les sessions RDP.
  keywords:
  - DPI
  - Résolution supérieure
  - Points par pouce
---
Il existe plusieurs problèmes qui peuvent être causés par une haute résolution dans les sessions RDP, les plus courants sont les suivants :
* Les connexions RDP sont minuscules
* Les connexions RDP sont grandes
* Les connexions RDP ont toujours une barre de défilement
* {{ fr.RDM }} est flou
* Problèmes de résolution 4K
## Solution
Il existe plusieurs méthodes pour résoudre ces problèmes.
### Méthode 1
1. Dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Interface utilisateur*** et changer l'***Échelle d'affichage*** en ***Non conscient du DPI***.
![Échelle d'affichage](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4994.png)

Si vous ne pouvez pas voir le paramètre à cause de problèmes d'affichage, vous pouvez ajouter la ligne directement dans vos fichiers de configuration.
{% snippet, "badgeHelp" %}
Pour localiser votre fichier de configuration, référez-vous à [Emplacement du fichier de configuration](/rdm/mac/kb/rdm-windows/knowledge-base/locating-configuration-file/).
{% endsnippet %}

2. Une fois que vous avez trouvé le bon dossier, ouvrir **RemoteDesktopManager.cfg** avec votre éditeur de texte préféré.
3. Sous la ligne <CreationDate>XXXX-XX-XXT00:00:00-00:00</CreationDate> changer en None le <DPIAwareness>Default</DPIAwareness> et sauvegarder.
4. Redémarrer {{ fr.RDM }}.
### Méthode 2
1. Fermer {{ fr.RDM }}.
1. Faire un clic droit sur votre icône {{ fr.RDM }}.
1. Aller à ***Propriétés***.
1. Dans l'onglet ***Compatibilité***, cliquer sur ***Modifier les paramètres de haute résolution***.
![Modifier les paramètres de haute résolution](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4995.png)
1. Dans la section ***Remplacement du comportement de mise à l'échelle haute résolution***, cocher ***Remplacer le comportement de mise à l'échelle haute résolution*** et cliquer sur OK.
![Remplacement du comportement de mise à l'échelle haute résolution](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4996.png)
{% snippet, "badgeInfo" %}
Lors de l'application de ce changement, vous devez vous déconnecter et vous reconnecter avec votre utilisateur pour que les changements prennent effet.
{% endsnippet %}

### Méthode 3
Dans ***Fichier – Paramètres – Types – Bureau à distance – Avancé***, décocher l'option ***Désactiver le facteur d'échelle RDP (HDPI)***.
![Désactiver le facteur d'échelle RDP (HDPI)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6004.png)

### Méthode 4

1. Dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Avancé***.
1. Régler l'***Accélération matérielle*** sur ***Par défaut (Automatique)***. Cliquer sur ***OK***.
![Fenêtre Avancée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6001.png)
1. Dans le ruban sous l'onglet ***Aide***, cliquer sur ***Diagnostic***.
![Onglet Aide](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6003.png)
1. En bas de l'onglet ***Système***, s'assurer que ***DirectX activé*** est désactivé.
![Diagnostic Système](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6002.png)
