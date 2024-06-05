---
eleventyComputed:
  title: Générer des certificats auto-signés pour serveur et client avec OpenSSL
  description: Ce guide définitif pour créer des certificats sécurisés, pour serveurs et clients, en utilisant OpenSSL.
---
Ceci est le guide définitif pour créer des certificats sécurisés, pour serveurs et clients, en utilisant OpenSSL.

## Procédure
{% snippet, "badgeHelp" %}
Sous Windows, il est recommandé d'utiliser Chocolatey pour installer OpenSSL et ses dépendances. La ligne de commande est simplement `choco install openssl`.
{% endsnippet %}

* [Créer l'Autorité de Certification Racine (CA)](#root-certification-authority-ca)
* [Générer une Demande de Signature de Certificat (CSR) – Serveur](#server-certificate)
* [Générer une Demande de Signature de Certificat (CSR) – Client](#client-certificate)
* [Traiter une Demande de Signature de Certificat (CSR) sur l'Autorité de Certification Racine (CA)](#process-a-certificate-signing-request-csr-on-the-root-certificate-authority-ca)

### Autorité de Certification Racine (CA)
1. Générer la ***Clé Privée de l'Autorité de Certification Racine*** en utilisant la ligne de commande suivante : `openssl ecparam -name prime256v1 -genkey -noout -out ca.key`. Chaque certificat doit avoir une clé privée correspondante.
1. Générer le ***Certificat de l'Autorité de Certification Racine*** (Certificate Authority) en utilisant la ligne de commande suivante : `openssl req -new -x509 -sha256 -key ca.key -out ca.crt`.
1. Entrer les informations concernant le CA (le certificat sera généré dans le fichier ca.crt) :
   ```
   Country Name (2 letter code) [AU]:US
   State or Province Name (full name) [Some-State]:CA
   Locality Name (eg, city) []:Toontown
   Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme inc.
   Organizational Unit Name (eg, section) []:Security
   Common Name (e.g. server FQDN or your name) []:acme.com
   Email Address []:security@acme.com
   ```
1. [Installer le certificat](/rdm/kb/general-knowledge/install-root-certificates/).
{% snippet, "badgeInfo" %}
Notez que le certificat doit être installé sur le serveur et sur tous les clients pour valider la légitimité des certificats émis. Certains navigateurs ont également des particularités qui sont décrites dans le sujet.
{% endsnippet %}

### Certificat Serveur
{% snippet, "shieldCaution" %}
Ces étapes sont généralement effectuées sur chaque serveur ou appareil pour lequel vous avez l'intention de demander un certificat. Installer OpenSSL s'il n'est pas présent. L'alternative est de déployer de manière sécurisée la clé privée sur le serveur de destination en même temps que le certificat. Il est recommandé d'utiliser cette dernière approche uniquement si vous devez adhérer à des déploiements scriptés pour suivre les pratiques CloudOps/DevOps.
{% endsnippet %}

1. Générer la ***Clé Privée du Certificat Serveur*** en utilisant la ligne de commande suivante : `openssl ecparam -name prime256v1 -genkey -noout -out server.key` (clé privée de 256 bits dans le fichier server.key). Chaque certificat doit avoir une clé privée correspondante.
1. Générer la ***Demande de Signature de Certificat*** (CSR) du serveur en utilisant la ligne de commande suivante : `openssl req -new -sha256 -key server.key -out server.csr`. Cette demande sera plus tard traitée sur le serveur de l'Autorité de Certification Racine.
1. Entrer les informations concernant le certificat serveur (le FQDN exact utilisé par le serveur doit être spécifié). Par exemple :
   ```
   Country Name (2 letter code) [AU]:US
   State or Province Name (full name) [Some-State]:CA
   Locality Name (eg, city) []:Toontown
   Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme inc.
   Organizational Unit Name (eg, section) []:Security
   Common Name (e.g. server FQDN or your name) []:vault.acme.com
   Email Address []:security@acme.com
   ```
1. Entrer un mot de passe lors de l'invite, utiliser un gestionnaire de mots de passe ainsi qu'un générateur de mots de passe forts est essentiel.
1. Transférer le fichier server.csr à l'Autorité de Certification Racine.
1. Traiter la demande en suivant les instructions [ci-dessous](#process-a-certificate-signing-request-csr-on-the-root-certificate-authority-ca).
1. Déployer le certificat.

### Certificat Client
Suivre la même procédure que pour le [Certificat Serveur](#server-certificate), mais vous devez adapter deux attributs des informations que vous entrez à vos besoins, à savoir le ***Nom Commun*** et l'***Adresse Email***.
```
Common Name (e.g. server FQDN or your name) []:John Doe
Email Address []:JohnDoe@acme.com
```

### Traiter une Demande de Signature de Certificat (CSR) sur l'Autorité de Certification Racine (CA)
Traiter la CSR en générant un certificat.

Le générer en utilisant la ligne de commande suivante, où le server.csr a été généré sur le serveur :
`openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 1000 -sha256`

Cela résulte en la génération du certificat dans le fichier server.crt. Vous devez le déployer sur le serveur où vous avez généré la CSR.
