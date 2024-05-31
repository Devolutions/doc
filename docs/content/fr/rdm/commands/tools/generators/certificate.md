---
eleventyComputed:
  title: Générateur de certificat
  description: Le Générateur de Certificat vous permet de créer un certificat auto-signé qui est un certificat d'identité signé par la même entité dont l'identité est certifiée.
---
Le ***Générateur de Certificat*** permet de créer un certificat auto-signé qui est un certificat d'identité signé par la même entité dont l'identité est certifiée.

## Paramètres

![Générateur de Certificat - Certificat Auto-signé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10390.png)

| OPTION               | DESCRIPTION                                                            |
|----------------------|------------------------------------------------------------------------|
| Nom commun          | Nom du certificat.                                                                                                                                              |
| Taille de clé (bits)      | Indique la taille de clé (bits) du certificat. Sélectionner entre : <ul><li>1024</li><li>2048</li>4096 <li>8192</li><li>16384</li></ul>                                                                                             |
| Valide à partir de           | Date de début de validité du certificat.                                      |
| Valide jusqu'à             | Date d'expiration du certificat.                                    |
| Enregistrer dans un fichier (pfx)   | Enregistrer le certificat dans un fichier *.pfx et sécuriser ce certificat avec un mot de passe.                                                                                       |
| Enregistrer dans le magasin de certificats | Indiquer l'emplacement et le magasin pour enregistrer le certificat.      |
| Emplacement             | Indiquer l'emplacement du certificat. Sélectionner entre : <ul><li>Utilisateur actuel</li><li>Machine locale</li> </ul>                                                                                             |
| Magasin                | Indiquer l'emplacement du magasin du certificat. Sélectionner entre : <ul><li>Carnet d'adresses</li><li>Racine d'autorisation</li><li>Autorité de certification</li><li>Interdit</li> <li>Mes</li><li>Racine</li><li>Personnes de confiance</li><li>Éditeur de confiance</li></ul> |

![Certificat Auto-signé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10391.png)

| OPTION         | DESCRIPTION                                   |
|----------------|-----------------------------------------------|
| Magasin          | Indiquer le magasin où le certificat sera situé. |
| Parcourir le magasin   | Parcourir le magasin indiqué dans le champ magasin. |
| Empreinte     | Afficher l'empreinte du certificat.           |
| Voir le Certificat | Afficher le certificat que vous avez créé. |
| Clé Privée    | Afficher la clé privée du certificat           |
| Voir la Clé Privée | Voir le fichier de clé privée sur votre ordinateur.   |
