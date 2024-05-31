---
eleventyComputed:
  title: Configurer une entrée PowerShell dans {{ fr.DHUBB }}
  description: L'entrée PowerShell dans {{ fr.DHUBB }} permet aux utilisateurs d'exécuter et de gérer des sessions PowerShell à distance directement depuis l'interface {{ fr.DHUB }}.
---
L'entrée ***PowerShell (à distance)*** dans {{ fr.DHUBB }} permet aux utilisateurs d'exécuter et de gérer des sessions PowerShell à distance en utilisant {{ fr.DGW }}. L'entrée est disponible sous ***Nouvelle entrée – PowerShell (à distance)***.
![Entrée PowerShell (à distance) dans {{ fr.DHUBB }}](https://cdnweb.devolutions.net/docs/HUBB6012_2024_1.png)

## Exigences
Pour utiliser cette fonctionnalité, certaines exigences doivent être remplies, à savoir :
* Windows 10 ou 11.
* Windows Server 2016 et versions ultérieures.
* Avoir une version de [{{ fr.DGW }}](/dgw/hub/hub-business-configuration/) 2023.1 ou ultérieure.

### Configuration de la session PowerShell à distance
Suivre les étapes ci-dessous pour configurer correctement votre session PowerShell à distance dans {{ fr.DHUBB }} :

1. Aller dans les ***Propriétés*** de l'entrée.
1. Dans la section ***Général***, sélectionner le nom et le dossier.
1. Choisir le ***Type d'hôte*** et entrer l'hôte (la machine à laquelle vous souhaitez vous connecter). 
![Configuration générale](https://cdnweb.devolutions.net/docs/HUBB6014_2024_1.png)
1. Aller dans la section ***VPN/tunnel/gateway***.
1. Sélectionner ***Hérité*** sous ***Type***. La configuration de votre {{ fr.DGW }} sera héritée.
1. Cliquer sur ***Toujours se connecter***. 
1. Cliquer sur ***Mettre à jour*** pour sauvegarder. 
![VPN/tunnel/gateway](https://cdnweb.devolutions.net/docs/HUBB6015_2024_1.png)

## Lancement de la connexion
Une fois toutes les conditions remplies, vous pouvez appuyer sur le bouton ***Ouvrir dans le client Web (Aperçu)*** pour lancer la connexion depuis le client web.
![Ouvrir dans le client Web (Aperçu)](https://cdnweb.devolutions.net/docs/HUBB6013_2024_1.png)

Votre session devrait démarrer dans un nouvel onglet du navigateur.
