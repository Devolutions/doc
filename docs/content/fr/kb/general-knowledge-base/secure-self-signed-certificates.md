---
eleventyComputed:
  title: Générer des certificats autosignés serveur et client avec OpenSSL
---
Voici le guide définitif pour créer des certificats sécurisés, à la fois pour les serveurs et les clients, en utilisant OpenSSL.

## Procédure
{% snippet icon.badgeHelp %}
Sous Windows, nous recommandons d'utiliser Chocolatey pour installer OpenSSL et ses dépendances. La ligne de commande est simplement `choco install openssl`.
{% endsnippet %}

* [Créer l'authorité de certification (AC) racine](#autorite-de-certification-ac-racine)
* [Générer une demande de signature de certificat (CSR) - Serveur](#certificat-de-serveur)
* [Générer une demande de signature de certificat (CSR) - Client](#certificat-de-client)
* [Traiter une demande de signature de certificat (CSR) sur l'autorité de certification (AC) racine](#traiter-une-demande-de-signature-de-certificat-csr-sur-lautorite-de-certification-ac-racine)

### Autorité de certification (AC) racine
1. Générer la clé privée de l'AC racine à l'aide de la ligne de commande suivante : `openssl ecparam -name prime256v1 -genkey -noout -out ca.key`. Chaque certificat doit avoir une clé privée correspondante.
1. Générer le certificat de l'AC racine (autorité de certification) à l'aide de la ligne de commande suivante : `openssl req -new -x509 -sha256 -key ca.key -out ca.crt`.
1. Saisir les informations relatives à l'autorité de certification (le certificat sera généré dans le fichier ca.crt) :
```
Country Name (2 letter code)
[AU]:US State or Province Name (full name) [Some-State]:CA
Locality Name (eg, city) []:Toontown
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme inc.
Organizational Unit Name (eg, section) []:Security
Common Name (e.g. server FQDN or YOUR name) []:acme.com
Email Address []:security@acme.com
```
1. [Installer le certificat](/fr/kb/general-knowledge-base/install-root-certificates/).
{% snippet icon.badgeHelp %}
Notez que le certificat doit être installé sur le serveur et sur tous les clients pour valider la légitimité des certificats émis. Certains navigateurs ont également des particularités qui sont décrites dans la rubrique.
{% endsnippet %}

### Certificat de serveur
{% snippet icon.shieldCaution %}
Ces étapes sont généralement effectuées sur chaque serveur ou appareil pour lequel vous avez l'intention de demander un certificat. Installez OpenSSL s'il n'est pas présent. L'alternative consiste à déployer de manière sécurisée la clé privée sur le serveur de destination en même temps que le certificat. Nous vous recommandons d'utiliser cette dernière approche uniquement si vous devez adhérer à des déploiements scriptés pour suivre les pratiques CloudOps/DevOps.
{% endsnippet %}

1. Générer la clé privée du certificat de serveur à l'aide de la ligne de commande suivante : `openssl ecparam -name prime256v1 -genkey -noout -out server.key` (clé privée de 256 bits dans le fichier server.key). Chaque certificat doit avoir une clé privée correspondante.
1. Générer la demande de signature de certificat (CSR) du serveur à l'aide de la ligne de commande suivante : `openssl req -new -sha256 -key server.key -out server.csr`. Cette demande sera traitée ultérieurement sur le serveur de l'AC racine.
1. Saisir les informations relatives au certificat du serveur (le FQDN exact utilisé par le serveur doit être spécifié). Par exemple :
```
Country Name (2 letter code) [AU]:US  
State or Province Name (full name) [Some-State]:CA  
Locality Name (eg, city) []:Toontown  
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme inc.  
Organizational Unit Name (eg, section) []:Security  
Common Name (e.g. server FQDN or YOUR name) []:vault.acme.com  
Email Address []:security@acme.com  
```
1. Saisir un mot de passe dans l'invite. Il est essentiel d'utiliser un gestionnaire de mots de passe ainsi qu'un générateur de mots de passe robustes.
1. Transférer le fichier server.csr vers l'AC racine.
1. Process the request by following the instructions [below](#certificat-de-client).
1. Déployer le certificat.

### Certificat de client
Suivez la même procédure que pour le [Certificat de serveur](#certificat-de-serveur) ci-dessus, mais vous devez adapter à vos besoins deux attributs des informations que vous saisissez, à savoir le ***Common Name*** et le ***Email Address***.
```
Common Name (e.g. server FQDN or YOUR name) []:John Doe
Email Address []:JohnDoe@acme.com
```

### Traiter une demande de signature de certificat (CSR) sur l'autorité de certification (AC) racine
Traiter le CSR en générant un certificat.

Générer-le à l'aide de la ligne de commande suivante, où le fichier server.csr a été généré sur le serveur : `openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 1000 -sha256`

Le certificat est ainsi généré dans le fichier server.crt. Vous devez le déployer sur le serveur où vous avez généré le CSR.
