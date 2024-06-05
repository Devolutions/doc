---
eleventyComputed:
  title: Propriétés générales d'une entrée RDP
  description: Les propriétés générales d'une entrée RDP peuvent être configurées lors de la création ou de l'édition de l'entrée RDP.
---
{% snippet, "badgeInfo" %}
Les propriétés suivantes peuvent être configurées lors de la création ou de l'édition de l'entrée RDP. La plupart des propriétés générales nécessitent de fermer complètement l'entrée RDP, puis de la rouvrir pour qu'elles prennent effet.
{% endsnippet %}  

![Propriétés générales d'une entrée RDP](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6213.png)

| PARAMÈTRES      | DESCRIPTION |
|-------------|-------------|
| ***Nom***  | Le nom de l'entrée RDP. |
| ***Dossier***| Le dossier de l'entrée RDP. Un dossier peut être ajouté en cliquant sur la flèche ou les trois points pour ouvrir la fenêtre du dossier. Pour créer un nouveau dossier, sélectionner l'icône plus.|
| ***Affichage***| Comment l'entrée RDP est affichée. ***Incorporé (onglets)*** signifie que la connexion au bureau à distance est ouverte dans la même fenêtre que les autres onglets ou entrées. Chaque connexion a son propre onglet, ce qui facilite le passage de l'une à l'autre. Un affichage ***externe*** indique que la connexion au bureau à distance est ouverte dans une fenêtre séparée ou une application différente. Cette approche est utile lorsque vous souhaitez voir la session à distance dans une fenêtre dédiée, séparée de l'application principale. Un affichage ***détaché*** se réfère à la connexion au bureau à distance étant détachée de la fenêtre principale, similaire à un affichage ***externe***. Il vous permet de déplacer et de redimensionner librement la fenêtre de la session à distance sur votre bureau. |
| ***Hôte***  | ***Personnalisé*** vous permet de sélectionner l'hôte. ***Lié (Coffre)*** indique que l'hôte pour l'entrée RDP est lié à un coffre externe. ***Hérité*** est utilisé lorsque l'hôte est hérité d'une entrée de niveau supérieur ou parente. |

## Onglet Général 

| PARAMÈTRES             | DESCRIPTION |
|--------------------|-------------|
| ***Hôte Azure AD***| Accéder à distance et gérer le serveur ou la machine virtuelle en toute sécurité via RDP avec les identifiants Azure AD. |
| ***Hôte***         | Choisir l'hôte depuis la ***fenêtre de liste des ordinateurs***. Vous pouvez également étendre votre recherche en cliquant sur les trois points en bas à gauche de la fenêtre et en sélectionnant soit ***Rechercher dans Active Directory***, ***Rechercher dans le voisinage réseau***, et ***Sélectionner par adresse IP***. |
| ***Port***| Choisir le ***Port***. Pour générer de nouveaux ports, cliquer sur l'icône ***Générateur de ports***. Vous pouvez également inclure ***les ports bien connus***, ***les ports enregistrés***, et ***les ports utilisés par d'autres sessions***.    |
| ***Type de RDP***     | Choisir parmi ***Normal***, ***Services Cloud Azure***, et ***Hyper-V (incorporé uniquement)***. Pour ***Services Cloud Azure***, vous devrez saisir à la fois le ***Nom de rôle*** et l'***ID***. Cliquer sur ***Hyper-V (incorporé uniquement)*** vous oblige à fournir l'***instance Hyper-V***. |
| ***Nom d'utilisateur***     | Choisir un ***Nom d'utilisateur***. |
| ***Domaine***       | Entrer le ***Domaine***. |
| ***Mot de passe***     | Fournir un ***Mot de passe***. Cocher ***Toujours demander le mot de passe*** si nécessaire, et ***Ouvrir la console (mode Admin)*** pour ouvrir la console en mode admin lors de la connexion. |
