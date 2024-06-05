---
eleventyComputed:
  title: Créer une entrée VPN Microsoft L2TP
---
Créer une entrée VPN Microsoft L2TP avec les versions de {{ fr.RDM }} 2021.1.1.0 et supérieures.

1. D'abord, créer une nouvelle entrée ***VPN Microsoft*** avec les informations et paramètres de base.
1. Dans la section ***Général - Connexion***, utiliser le menu déroulant à côté du ***type de VPN***, et sélectionner ***L2TP*** au lieu de ***Automatique***.
1. Entrer votre ***Clé partagée*** fournie par Microsoft.
![!!KB4703](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4703.png)
1. Remplir les informations pour le ***Nom d'utilisateur***, ***Domaine***, et ***Mot de passe***.
1. Optionnel : La ***Méthode d'authentification*** peut être différente pour chaque utilisateur (elle est par défaut définie sur ***PAP***), selon votre configuration VPN Microsoft. Utiliser le menu déroulant pour la changer.
   ![!!KB4704](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4704.png)
   | Option | Description |
   | ------ | ----------- |
   | PAP | Mot de passe non chiffré |
   | CHAP | Protocole d'authentification par échange de clés |
   | MS-CHAP v2 | Microsoft CHAP Version 2 |
   | EAP | Protocole d'authentification extensible |

1. Cliquer sur ***OK*** pour sauvegarder.
