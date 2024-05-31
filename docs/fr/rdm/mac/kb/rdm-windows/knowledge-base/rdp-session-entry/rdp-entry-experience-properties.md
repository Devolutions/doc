---
eleventyComputed:
  title: Propriétés de l'expérience d'entrée RDP
  description: Les propriétés de l'expérience d'entrée RDP peuvent être configurées lors de la création ou de l'édition de l'entrée RDP.
---
{% snippet, "badgeInfo" %}
Les propriétés suivantes peuvent être configurées lors de la création ou de l'édition de l'entrée RDP. La plupart des propriétés générales nécessitent de fermer complètement l'entrée RDP, puis de la rouvrir pour qu'elles prennent effet.
{% endsnippet %}  

![Propriétés de l'expérience d'entrée RDP](https://webdevolutions.azureedge.net/docs/RDMW6003.png)

| PARAMÈTRES                                        | DESCRIPTION                                                                                                          |
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| ***Par défaut***                                   | Utiliser les paramètres par défaut qui sont automatiquement choisis en fonction de l'évaluation des conditions du réseau par le client RDP.   |
| ***Moderne (56 kps)***                           | Optimiser pour des connexions à très faible bande passante, minimisant l'utilisation des données pour accommoder des vitesses extrêmement limitées.          |
| ***Large bande basse vitesse (256 kps - 2Mbps)***     | Adapter l'expérience pour des vitesses de large bande inférieures, ajustant la qualité visuelle et d'autres paramètres pour une performance améliorée. |
| ***Satellite (2 - 16 Mbps avec haute latence)*** | Conçu pour les connexions par satellite, qui ont généralement une bande passante plus élevée mais souffrent également d'une latence significative.  |
| ***Large bande haute vitesse (2-10 Mbps)***          | Améliorer la session pour les utilisateurs avec une large bande haute vitesse, permettant des graphiques plus détaillés et des interactions plus fluides.  |
| ***WAN (>10 Mbps avec haute latence)***          | Optimiser pour les connexions WAN qui ont une bande passante élevée et une haute latence, équilibrant qualité et réactivité.        |
| ***LAN (>10 Mbps avec faible latence)***           | Fournir l'expérience de la plus haute qualité pour les connexions LAN, permettant l'utilisation complète des fonctionnalités avec une latence minimale.      |
| ***Détecter automatiquement le réseau***              | Détecte automatiquement les conditions du réseau et sélectionne les paramètres les plus adaptés pour optimiser la performance.         |

| PARAMÈTRES                                  | DESCRIPTION                                                                                      |
|-------------------------------------------|--------------------------------------------------------------------------------------------------|
| ***Fond d'écran du bureau***                  | Afficher le fond d'écran de l'ordinateur distant.                                         |
| ***Lissage des polices***                      | Activer le lissage des polices pour améliorer la lisibilité du texte.                                               |
| ***Composition du bureau***                 | Permettre l'utilisation des fonctionnalités Windows Aero telles que la transparence et d'autres effets visuels.            |
| ***Afficher le contenu des fenêtres lors du déplacement*** | Afficher le contenu des fenêtres lorsqu'elles sont déplacées ou redimensionnées, plutôt que juste un contour.       |
| ***Animation des menus et fenêtres***           | Activer les animations lors de l'ouverture ou de la fermeture des fenêtres et de l'accès aux menus.                           |
| ***Styles visuels***                       | Appliquer le style visuel et le thème, tels que les couleurs et l'apparence des boutons de contrôle.                |
| ***Mise en cache des bitmaps persistants***           | Stocker des images ou des parties pour améliorer la performance pendant la session.                                 |
| ***Redirection de la lecture vidéo***             | Optimiser la lecture de contenu vidéo sur la machine locale.                                     |
| ***Reconnexion si la connexion est interrompue***  | Tente automatiquement de se reconnecter à la session distante si la connexion est temporairement perdue. |
| ***Détecter automatiquement la bande passante***      | Ajuste automatiquement les paramètres de session en fonction de la bande passante estimée de la connexion.       |
| ***Activer la compression des données***             | Compresser les données pour améliorer la performance sur des connexions plus lentes.                                   |
| ***Charger les plug-ins en mode intégré***         | (La description de l'option peut varier, se rapporte généralement au chargement de plug-ins spécifiques pour une fonctionnalité améliorée dans la session RDP.) |
| ***Cache***                               | Utiliser la mise en cache pour améliorer la performance en stockant des données fréquemment accédées.  ***Par défaut***: Utilise la stratégie de mise en cache standard déterminée par le client RDP, équilibrant performance et utilisation des ressources. ***Mode complet***: Maximise l'utilisation du cache pour améliorer la réactivité de la session, idéal pour des connexions à bande passante élevée où les ressources mémoire sont abondantes. ***Client léger***: Minimise la quantité de données mises en cache, adapté pour des dispositifs informatiques à faibles ressources ou des connexions à très faible bande passante. ***Petit cache***: Offre un compromis entre absence de mise en cache et mise en cache complète, conçu pour des scénarios avec mémoire limitée ou lorsque la conservation de la bande passante est une priorité mais que certains avantages de la mise en cache sont souhaités.                                                                                 |
| ***Keep alive***                          | Envoyer des paquets de maintien en vie pour garder la connexion active pendant les périodes d'inactivité.          |
| ***Activer le jiggler de souris***                | Empêcher la session distante de devenir inactive en simulant des mouvements de souris.                         |
| ***Méthode du jiggler de souris***                | Spécifier la technique utilisée par le jiggler de souris, par exemple, mouvement aléatoire, motif spécifique, etc.  |
| ***Intervalle du jiggler de souris***              | Définir l'intervalle de temps entre les mouvements de souris simulés.                                      |
