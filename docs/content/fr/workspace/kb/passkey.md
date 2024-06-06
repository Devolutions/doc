---
eleventyComputed:
  title: Clés de passage
  description: Les clés de passage représentent une approche moderne de l'authentification, offrant une sécurité renforcée et plus de commodité en éliminant le besoin de mots de passe traditionnels.
---

Les clés de passage représentent une approche moderne de l'authentification, offrant une sécurité renforcée et plus de commodité en éliminant le besoin de mots de passe traditionnels. Contrairement aux mots de passe, qui peuvent être devinés ou volés, les clés de passage sont des clés cryptographiques stockées sur votre appareil, les rendant plus sécurisées et conviviales. Les clés de passage peuvent inclure des biométries comme les empreintes digitales ou la reconnaissance faciale, qui fournissent une couche supplémentaire de sécurité et de commodité. Une liste de sites prenant en charge les clés de passage peut être trouvée [ici](https://passkeys.directory/).

## Intégration des clés de passage dans les produits Devolutions

Le {{ fr.WBEX }} sert de pont pour ajouter et gérer les clés de passage au sein des sources de données {{ fr.RDM }} et {{ fr.DHUBP }}.

## Utiliser {{ fr.WBEX }}

1. Installer le [{{ fr.WBEX }}](/workspace/workspace-browser-extension/installation/).
1. Configurer l'extension pour se connecter avec [{{ fr.RDM }}](/workspace/workspace-browser-extension/remote-desktop-manager/first-login/first-login-rdm-windows/), et [{{ fr.DHUBP }}](/workspace/workspace-browser-extension/hub-business/first-login/).
1. Créer une [Clé de passage](https://www.passkeys.io/).
1. La fenêtre ***Ajouter Clé de passage*** de {{ fr.WBEX }} s'ouvre.
1. Sélectionner l'application où vous souhaitez sauvegarder ces identifiants ({{ fr.RDM }} ou {{ fr.DHUBP }}).
1. Choisir un Nom, un Dossier de Destination, et sélectionner le {{ fr.VLT }} dans lequel stocker la clé de passage.
1. Cliquer sur ***Sauvegarder*** pour enregistrer la clé de passage.

Lors de l'accès à un service, {{ fr.WBEX }} utilisera automatiquement l'entrée de clé de passage stockée pour l'authentification. Les entrées de clé de passage ne peuvent pas être modifiées, excepté leur titre.  