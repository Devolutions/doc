---
eleventyComputed:
  title: Configurer un VPN pour plusieurs sessions
  description: Cette procédure définit les configurations VPN sur le dossier et les entrées héritent des paramètres.
---
{{ fr.RDM }} automatise l'ouverture d'un VPN lors du lancement d'une session à distance. Cette configuration est bien adaptée aux situations où vous avez besoin d'un VPN pour un groupe de serveurs dans un emplacement distant. Cette procédure définit les configurations VPN sur le dossier et les entrées héritent des paramètres.

{% youtube 'sKYPgwUnH0g' %}

## Étapes

Avant de suivre les étapes ci-dessous, dans un dossier, créer une entrée VPN et des entrées de session à distance.

### Configurer les paramètres VPN sur l'entrée du dossier parent

1. Faire un clic droit sur l'entrée du dossier et ouvrir ses ***Propriétés***.
1. Depuis le menu de gauche, sous la section ***Connexion***, cliquer sur ***VPN/SSH/Gateway***.
![VPN/SSH/Gateway](https://cdnweb.devolutions.net/docs/RDMW6001_2023_2.png)
1. Sous la section ***Général***, dans la liste déroulante ***Type***, cliquer sur ***Session***.
1. Dans la liste déroulante ***Connecter***, sélectionner comment le VPN s'ouvre lorsque vous lancez une session à distance. Nous recommandons de choisir ***Connecter si impossible de pinguer/analyser le port*** sur le dossier. Nous devrons définir chaque entrée de session sur ***Hérité*** plus tard.
   | Option                               | Description |
   | ------------------------------------ | ----------- |
   | Non activé                           | Le VPN ne s'ouvre pas lorsque la session est ouverte. |
   | Toujours connecter                   | Le VPN s'ouvre toujours lorsque la session est ouverte. |
   | Connecter manuellement               | Le VPN nécessite que les utilisateurs ouvrent manuellement le VPN avant de lancer la session. |
   | Connecter si impossible de pinguer/analyser le port  | {{ fr.RDM }} teste automatiquement si l'hôte répond, sinon le VPN s'ouvre. |
   | Hérité                               | Le VPN hérite des paramètres du dossier parent. |
   | Demander confirmation pour connecter | Le VPN demande une confirmation avant de s'ouvrir. |
   | Connecter si l'adaptateur réseau n'est pas trouvé | {{ fr.RDM }} teste si l'adaptateur réseau est installé et actif, sinon le VPN s'ouvre. |
   | Demander si impossible de pinguer/analyser        | {{ fr.RDM }} teste si l'hôte répond, sinon le VPN demande une confirmation avant de s'ouvrir. |

1. Dans la liste déroulante ***Fermer***, sélectionner comment le VPN se ferme à la fin d'une session à distance.
   | Option             | Description |
   | ------------------ | ----------- |
   | À la fermeture de la session   | Le VPN se ferme automatiquement lorsque la session est fermée. |
   | Manuellement plus tard     | Le VPN nécessite que les utilisateurs ferment manuellement l'entrée VPN lorsqu'ils ont terminé. |
   | Confirmer la déconnexion | Le VPN demande à se fermer lorsque la session est fermée. |

1. Créer un ***groupe VPN*** pour que le VPN se ferme seulement lorsque la dernière session dans le ***groupe VPN*** est fermée.
   - Cliquer sur le signe plus pour ajouter un nouveau ***groupe VPN***, puis entrer un nom de groupe. Cliquer sur ***OK*** lorsque le nom est entré. Regarder cette [vidéo YouTube](https://youtu.be/5jKREtc63ks) pour une démonstration sur l'option ***groupe VPN***.

7. Si vous avez besoin d'utiliser des identifiants spécifiques, dans un environnement d'équipe, vous pouvez les définir dans le ***VPN/SSH/Gateway***.
1. Cliquer sur l'onglet ***Paramètres (Session)***.
1. Dans ***Session***, sélectionner l'entrée VPN que vous avez créée en cliquant sur ***Lié ({{ fr.VLT_MAJ }})*** dans le menu déroulant. Vous pouvez également sélectionner ***Trouver par nom ({{ fr.UVLT_MAJ }})*** pour rechercher un VPN créé par les utilisateurs dans leur {{ fr.UVLT }}.
![Lié ({{ fr.VLT_MAJ }}) et Trouver par nom ({{ fr.UVLT_MAJ }})](https://cdnweb.devolutions.net/docs/RDMW6002_2023_2.png)
1. Cliquer sur ***Mettre à jour*** pour sauvegarder.

### Effectuer une modification par lot pour configurer les entrées de session

{% youtube 'x0blJWlThuc' %}

1. Sélectionner les entrées de session dans le dossier parent tout en maintenant la touche <kbd>Ctrl</kbd> enfoncée pour sélectionner plusieurs entrées à la fois.
1. Faire un clic droit sur la sélection, puis cliquer sur ***Modifier – Modification par lot – Modifier les entrées (Paramètres généraux)***. Alternativement, le même chemin peut être suivi dans le ruban sous l'onglet ***Modifier***.
1. Depuis le menu de gauche, sous la section ***Connexion***, cliquer sur ***VPN/SSH/Gateway***.
1. Cocher la case ***Remplacer VPN***.
![!!KB2065](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2065.png)
1. Dans la liste déroulante ***Connecter***, sélectionner ***Hérité***.
1. Cliquer sur ***OK***.

### Paramètres pour des situations spécifiques

Il existe de nombreuses options pour accommoder une gamme de types de VPN. Voici deux situations courantes et des options pour rendre l'utilisation du VPN plus efficace.

Situation 1 : Vous perdez la connexion à la source de données lorsque le VPN est actif.

Suivre les étapes ci-dessous pour automatiser le passage hors ligne lorsque le VPN s'ouvre.

1. Faire un clic droit sur l'entrée du dossier et ouvrir ses ***Propriétés***.
1. Depuis le menu de gauche, sous la section ***Connexion***, cliquer sur ***VPN/SSH/Gateway***.
1. Aller à l'onglet ***Avancé***.
1. Dans la section ***Paramètres avancés***, cocher les options ***Passer hors ligne à la connexion*** et ***Repasser en ligne à la déconnexion après X sec***. Dans cette dernière option, spécifier le nombre de secondes, puis cliquer sur ***OK***.
![!!KB2066](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2066.png)

Situation 2 : Le VPN est lent à se connecter.

Suivre les étapes ci-dessous pour changer le temps que {{ fr.RDM }} attend pour que le VPN s'ouvre.

1. Faire un clic droit sur l'entrée du dossier et ouvrir ses ***Propriétés***.
1. Depuis le menu de gauche, sous la section ***Connexion***, cliquer sur ***VPN/SSH/Gateway***.
1. Aller à l'onglet ***Avancé***.
1. Dans la section ***Après exécution attendre***, entrer le temps en secondes, puis cliquer sur ***OK***.
{% snippet, "badgeInfo" %}
La valeur ***-1*** sec est le temps par défaut (5 secondes). Vous pouvez changer le temps par défaut pour toutes les entrées VPN dans ***Fichier – Paramètres – Types – VPN – Pause par défaut VPN***.
{% endsnippet %}

![!!KB2067](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2067.png)
