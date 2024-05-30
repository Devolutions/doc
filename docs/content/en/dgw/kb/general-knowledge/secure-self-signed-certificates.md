---
eleventyComputed:
  title: Generate a self-signed server and client certificates with OpenSSL
  description: This is the definitive guide to create secure certificates, for both servers and clients, using OpenSSL.
---
This is the definitive guide to create secure certificates, for both servers and clients, using OpenSSL.

## Procedure
{% snippet, "badgeHelp" %}
On Windows, it is recommended to use Chocolatey to install OpenSSL and its dependencies. The command line is simply `choco install openssl`.
{% endsnippet %}

* [Create the Root Certification Authority (CA)](#root-certification-authority-ca)
* [Generate a Certificate Signing Request (CSR) – Server](#server-certificate)
* [Generate a Certificate Signing Request (CSR) – Client](#client-certificate)
* [Process a Certificate Signing Request (CSR) on the Root Certificate Authority (CA)](#process-a-certificate-signing-request-csr-on-the-root-certificate-authority-ca)

### Root Certification authority (CA)
1. Generate the ***Root CA Private Key*** using the following command line:`openssl ecparam -name prime256v1 -genkey -noout -out ca.key`. Every certificate must have a corresponding private key.
1. Generate the ***Root CA Certificate*** (Certificate Authority) using the following command line: `openssl req -new -x509 -sha256 -key ca.key -out ca.crt`.
1. Enter the information about the CA (the certificate will be generated in the ca.crt file):
   ```
   Country Name (2 letter code) [AU]:US
   State or Province Name (full name) [Some-State]:CA
   Locality Name (eg, city) []:Toontown
   Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme inc.
   Organizational Unit Name (eg, section) []:Security
   Common Name (e.g. server FQDN or your name) []:acme.com
   Email Address []:security@acme.com
   ```
1. [Install the certificate](/dgw/kb/general-knowledge/install-root-certificates/).
{% snippet, "badgeInfo" %}
Note that the certificate must be installed on the server and on all of the clients to validate the legitimacy of issued certificates. Some browsers also have particularities which are described in the topic.
{% endsnippet %}

### Server certificate
{% snippet, "shieldCaution" %}
These steps are usually performed on each server or device for which you intend to request a certificate. Install OpenSSL if it is not present. The alternative is to securely deploy the private key to the destination server at the same time as the certificate. It is recommended to use this last approach only if you must adhere to scripted deployments to follow CloudOps/DevOps practices.
{% endsnippet %}

1. Generate the ***Server Certificate Private Key*** using the following command line: `openssl ecparam -name prime256v1 -genkey -noout -out server.key` (256bit private key in the server.key file). Every certificate must have a corresponding private key.
1. Generate the server ***Certificate Signing Request*** (CSR) using the following command line: `openssl req -new -sha256 -key server.key -out server.csr`. This request will later be processed on the Root CA server.
1. Enter the information about the server certificate (the exact FQDN that is used by the server must be specified). For Example:
   ```
   Country Name (2 letter code) [AU]:US
   State or Province Name (full name) [Some-State]:CA
   Locality Name (eg, city) []:Toontown
   Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme inc.
   Organizational Unit Name (eg, section) []:Security
   Common Name (e.g. server FQDN or your name) []:vault.acme.com
   Email Address []:security@acme.com
   ```
1. Enter a password into the prompt, using a password manager as well as a strong password generator is essential.
1. Transfer the server.csr file to the Root CA.
1. Process the request by following the instructions [below](#process-a-certificate-signing-request-csr-on-the-root-certificate-authority-ca).
1. Deploy the certificate.

### Client certificate
Follow the same procedure as for the [Server certificate](#server-certificate), but you must adapt two attributes of the information you enter to your needs, namely the ***Common Name*** and the ***Email Address***.
```
Common Name (e.g. server FQDN or your name) []:John Doe
Email Address []:JohnDoe@acme.com
```

### Process a Certificate Signing Request (CSR) on the Root Certificate Authority (CA)
Process the CSR by generating a certificate.

Generate it using the following command line, where the server.csr has been generated on the server:
`openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 1000 -sha256`

This results in the certificate being generated in the server.crt file. You must deploy it to the server where you generated the CSR.
