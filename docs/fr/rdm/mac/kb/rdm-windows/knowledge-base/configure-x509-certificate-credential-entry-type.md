---
eleventyComputed:
  title: Configurer un type d'entrée d'identifiants de certificat X.509
  description: Apprendre à configurer une entrée de code d'accès dans Remote Desktop Manager
---
Le ***type d'entrée d'identifiants de certificat X.509*** facilite l'authentification RDP Smart Card et stocke le certificat X.509 complet (partie publique et privée) pour insertion dans une Smart Card virtuelle RDP.

Certaines organisations utilisent les certificats X.509 comme alternative à l'authentification avec des identifiants et des mots de passe. Les certificats X.509 exploitent la cryptographie à clé publique et privée, et sont largement considérés comme une protection renforcée contre les usurpateurs de réseau malveillants.

1. Ajouter une nouvelle entrée dans {{ fr.RDM }}.
1. Aller à ***Gestion des identifiants*** et sélectionner ***Certificat x.509***.
![Ajouter une entrée de certificat x.509](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2362.png)
1. Cliquer sur ***OK***.
1. Choisir le ***Nom*** et le ***Dossier***.
1. Sous ***Général***, sélectionner [***Stocké dans la base de données***](/rdm/kb/rdm-windows/knowledge-base/configure-x509-certificate-credential-entry-type/#stored-in-database) ou [***Lien vers le magasin de certificats***](/rdm/kb/rdm-windows/knowledge-base/configure-x509-certificate-credential-entry-type/#link-to-certificate-store) dans le menu déroulant ***Mode de données du certificat***.
![Stocké dans la base de données et Lien vers le magasin de certificats](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2344.png)

## Stocké dans la base de données

1. Sélectionner ***Mettre à jour le certificat*** sous ***Général*** – ***Certificat x509 intégré*** pour importer un certificat x.509.
![Mettre à jour le certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2345.png)
1. Choisir le ***Fichier de certificat***.
1. Cliquer sur ***Suivant***.
![Choisir le fichier de certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2346.png)
1. Choisir un ***Fichier de clé privée*** si nécessaire.
1. Cliquer sur ***Suivant***.
![Fichier de clé privée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2347.png)
1. Cliquer sur ***Terminer*** pour fermer la fenêtre.
![Le certificat est prêt à être importé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2348.png)
1. Sélectionner ***Voir le certificat*** pour voir les informations du certificat et installer le certificat.
1. Dans la ***fenêtre du certificat***, cliquer sur ***Installer le certificat***.
![Fenêtre du certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2349.png)
1. Sélectionner l'***Emplacement du magasin*** : ***Utilisateur actuel*** ou ***Machine locale***.
1. Cliquer sur ***Suivant***.
![Utilisateur actuel ou Machine locale](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2350.png)
1. Choisir le ***Magasin de certificats***.
1. Cliquer sur ***Suivant***.
![Choisir le magasin de certificats](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2351.png)
1. Cliquer sur ***Terminer*** pour compléter l'importation.
![Fenêtre de fin de l'assistant d'importation de certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2352.png)
1. Sélectionner le ***PIN*** de la ***Smart Card*** si nécessaire.
1. Cliquer sur ***Ajouter***.
![Smart Card](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2353.png)
L'entrée est enregistrée.

## Lien vers le magasin de certificats

1. Sélectionner ***Utilisateur actuel*** ou ***Machine locale*** sous ***Emplacement du certificat***.
![Emplacement du certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2354.png)
1. Choisir le ***Magasin de certificats*** dans le menu déroulant.
![Magasin de certificats](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2355.png)
1. Choisir ***Empreinte digitale*** ou ***Nom du sujet*** dans ***Type de recherche de certificat***.
![Type de recherche de certificat](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2356.png)
1. Entrer le ***Texte de recherche***.
1. Cliquer sur ***Tester la configuration***.
![Texte de recherche et Tester la configuration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2357.png)
1. Sélectionner le ***PIN*** de la ***Smart Card*** si nécessaire.
1. Cliquer sur ***Ajouter***.
![Smart Card](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2353.png)
L'entrée est enregistrée.
