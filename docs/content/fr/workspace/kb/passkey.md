---
eleventyComputed:
  title: Clés d'accès
  description: Les clés d'accès représentent une approche moderne de l'authentification, offrant une sécurité renforcée et une commodité en éliminant le besoin de mots de passe traditionnels.
---

Les clés d'accès représentent une approche moderne de l'authentification, offrant une sécurité renforcée et une commodité en éliminant le besoin de mots de passe traditionnels. Contrairement aux mots de passe, qui peuvent être devinés ou volés, les clés d'accès sont des clés cryptographiques stockées sur votre appareil, les rendant plus sécurisées et conviviales. Les clés d'accès peuvent inclure des biométries comme les empreintes digitales ou la reconnaissance faciale, qui fournissent une couche supplémentaire de sécurité et de commodité. Une liste de sites web, applications et services compatibles avec les clés d'accès peut être trouvée [ici](https://passkeys.directory/).

## Intégration des clés d'accès dans les produits Devolutions

Le {{ fr.WBEX }} sert de pont pour ajouter et gérer les clés d'accès dans les sources de données {{ fr.RDM }}, {{ fr.DVLS }} et {{ fr.DHUBP }}.

## Utiliser {{ fr.WBEX }}

1. Installer le [{{ fr.WBEX }}](/workspace/workspace-browser-extension/installation/).
1. Configurer l'extension pour se connecter avec [{{ fr.RDM }}](/workspace/workspace-browser-extension/remote-desktop-manager/first-login/first-login-rdm-windows/), [{{ fr.DVLS }}](/workspace/workspace-browser-extension/devolutions-server/first-login/), et [{{ fr.DHUBP }}](/workspace/workspace-browser-extension/hub-personal/first-login/).
1. Créer une [Clé d'accès](https://www.passkeys.io/).
1. La fenêtre ***Ajouter une clé d'accès*** de {{ fr.WBEX }} s'ouvre.
1. Sélectionner l'application où vous souhaitez sauvegarder la clé d'accès ({{ fr.RDM }} ou {{ fr.DHUBP }}).
1. Choisir un ***Nom***, un ***Dossier***, et sélectionner le ***{{ fr.VLT }}*** dans lequel vous stockerez la clé d'accès.
1. Cliquer sur ***Sauvegarder*** pour enregistrer la clé d'accès.

Lors de l'accès à un service, {{ fr.WBEX }} utilisera automatiquement l'entrée de clé d'accès stockée pour l'authentification. Les entrées de clé d'accès ne peuvent pas être modifiées, à l'exception de leur titre.  