---
eleventyComputed:
  title: Lancer une session RDP dans un client web
  description: Depuis la version 2023.1.3.0 de {{ fr.DVLS }}, il est possible de lancer des connexions RDP directement depuis le navigateur.
---
Depuis la version 2023.1.3.0 de {{ fr.DVLS }}, il est possible de lancer des connexions RDP directement depuis le navigateur.

{% snippet, "badgeInfo" %}
Basé sur [IronRDP](https://github.com/Devolutions/IronRDP) (implémentation Rust du protocole RDP) et son composant d'assemblage web, le client web, passant par un {{ fr.DGW }}, assure une communication sécurisée utilisant le protocole directement. Contrairement à Apache Guacamole, aucun protocole intermédiaire n'est utilisé et contrairement à RD Web Access, il n'y a pas de couche TLS redondante supplémentaire. Cela assure de bonnes performances.
{% endsnippet %}

{% snippet, "badgeCaution" %}
Cette fonctionnalité est encore en développement. Ainsi, il est seulement possible de voir un aperçu de la session RDP pour le moment : vous ne pouvez pas interagir avec. Il n'est pas encore possible d'envoyer des fichiers au serveur. Soyez assuré que c'est une situation temporaire et que nous travaillons vers un client web RDP pleinement fonctionnel. Découvrez les [fonctionnalités actuellement prises en charge](#fonctionnalités-actuellement-prises-en-charge).
{% endsnippet %}

## Exigences
Pour utiliser cette fonctionnalité, certaines exigences doivent être remplies, à savoir :
* Windows 10 ou 11.
* Windows Server 2016 et supérieur.
* Avoir une version 2023.1 ou ultérieure de [{{ fr.DGW }}](/dgw/server/server-configuration/).
* Avoir une version 2023.1.3 ou ultérieure de [{{ fr.DVLS }}](/server/getting-started/installation/upgrade-server/).
* Avoir une [connexion de type RDP](#configuration-de-session-rdp) avec :
    * un VPN de type passerelle configuré.
    * pas d'enregistrement de session obligatoire.
* Avoir la permission ***Voir le mot de passe*** si vous êtes celui qui utilise la session.
    * Lors de l'utilisation d'IronRDP, un appel est généré vers l'outil, et le mot de passe peut être vu lorsque les outils de développement sont activés.
* Avoir une licence {{ fr.RDM }} ou {{ fr.DLAUNCHER }} attribuée à l'utilisateur qui souhaite utiliser la connexion.

### Configuration de Session RDP
Suivez les étapes ci-dessous pour configurer correctement votre session RDP afin de la lancer dans un navigateur :

{% snippet, "badgeInfo" %}
Les étapes ci-dessous supposent que vous avez déjà une entrée de session RDP. Si vous n'en avez pas encore créée et souhaitez apprendre comment faire, consultez [Créer des entrées manuellement](/server/web-interface/vault/entries/create-entries-manually/).
{% endsnippet %}

1. Dans l'interface web de {{ fr.DVLS }}, allez dans les ***Propriétés*** de votre entrée RDP.
1. Dans la section ***VPN/SSH/Gateway***, sélectionnez ***{{ fr.DGW }}*** dans la liste déroulante ***Type de VPN***.
![VPN/SSH/Gateway – Type de VPN – {{ fr.DGW }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2220.png)
1. Dans la liste déroulante ***Connecter***, sélectionnez ***Connecter si impossible de pinger/scanner le port***.
![VPN/SSH/Gateway – Connecter – Connecter si impossible de pinger/scanner le port](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2221.png)
1. Sous ***Paramètres***, sélectionnez le ***{{ fr.DGW }}*** à utiliser pour cette connexion, puis cliquez sur ***Vérifier la santé*** pour vous assurer que la passerelle fonctionne. Sa version doit être 2023.1 ou ultérieure.
![VPN/SSH/Gateway – Paramètres – {{ fr.DGW }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2222.png)
1. Dans la section ***Enregistrement de Session***, assurez-vous que le ***Mode*** n'est **pas** défini sur ***Obligatoire***.
![Enregistrement de Session – Mode](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2223.png)
   {% snippet, "badgeInfo" %}
   Pour le moment, le client web ne prend pas en charge l'enregistrement de session. Cependant, nous travaillons à l'ajout de cette fonctionnalité dans une version future.
   {% endsnippet %}
1. Cliquez sur ***Mettre à jour*** pour sauvegarder vos modifications.

## Lancement de la Connexion
Une fois toutes les conditions remplies, vous pouvez appuyer sur le bouton ***Ouvrir dans le Client Web (Aperçu)*** pour lancer la connexion depuis le client web.
![Ouvrir dans le Client Web (Aperçu)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2163.png)

Un nouvel onglet de navigateur devrait s'ouvrir et votre session devrait démarrer.
![Session RDP Ouverte dans un Client Web](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2224.png)

{% snippet, "badgeHelp" %}
Si la connexion ne fonctionne pas, vérifiez à nouveau les [Exigences](#exigences) ou visitez [Le Client Web RDP ne s'affiche pas](/dgw/kb/rdp-web-client-not-showing/).
{% endsnippet %}

### Fonctionnalités Actuellement Prises en Charge
Cette fonctionnalité est encore en développement. Le menu des outils dans l'interface web RDP contient ce qui est actuellement pris en charge.
![Fonctionnalités Actuellement Prises en Charge](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2225.png)

| Icône                                                                                      | Option                  | Description |
|-------------------------------------------------------------------------------------------|-------------------------|-------------|
| ![!!Plein écran](https://cdnweb.devolutions.net/docs/docs_en_kb_icons_fullscreen.png)    | Plein écran             | Affiche le contenu de la session, en s'assurant d'occuper toujours le maximum d'espace sur l'écran. |
| ![!!Ajuster à l'écran](https://cdnweb.devolutions.net/docs/docs_en_kb_icons_smallscreen.png) | Ajuster à l'écran (par défaut) | Adapte la taille pour mieux s'ajuster à l'espace disponible afin que la session entière soit toujours visible. |
| ![!!Taille réelle](https://cdnweb.devolutions.net/docs/docs_en_kb_icons_screen.png)          | Taille réelle               | Se conforme à la résolution de l'hôte cible. |
| ![!!Touche Windows](https://cdnweb.devolutions.net/docs/docs_en_kb_icons_windows.png)       | Touche Windows             | Envoie le signal de la touche Windows (toutefois, la touche doit également fonctionner). |
| ![!!Ctrl+Alt+Suppr](https://cdnweb.devolutions.net/docs/docs_en_kb_icons_gear.png)         | Ctrl+Alt+Suppr            | Envoie la commande au système hôte. |

La fonctionnalité de copier/coller (y compris le presse-papiers) est maintenant prise en charge.

Pour le moment, les fonctionnalités suivantes ne sont pas prises en charge :
* Les touches de verrouillage comme Verr Maj et Verr Num (synchronisées entre le client et l'hôte)
* Support de base du clavier
* Support de base de la souris (4 boutons et défilement)
