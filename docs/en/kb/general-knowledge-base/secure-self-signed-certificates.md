---
title: Generate a self-signed server and client certificates with OpenSSL
description: This is the definitive guide to create secure certificates, for both servers and clients, using OpenSSL.
---
This is the definitive guide to create secure certificates, for both servers and clients, using OpenSSL.

## Procedure

{% snippet icon.badgeHelp %}
On Windows, we recommend using Chocolatey to install OpenSSL and its dependencies. The command line is simply
`choco install openssl`
{% endsnippet %}

- [Create the Root Certification Authority (CA)](#root)
- [Generate a Certificate Signing Request (CSR) - Server](#server)
- [Generate a Certificate Signing Request (CSR) - Client](#client)
- [Process a Certificate Signing Request (CSR) on the Root Certificate Authority (CA)](#process)

### Root Certification authority (CA)
<a name="root"></a>

1. Generate the Root CA Private Key.

   Every certificate must have a corresponding private key. Generate it using the following command line:

   `openssl ecparam -name prime256v1 -genkey -noout -out ca.key`

   This will create a 256-bit private key with elliptic curves, which is the industry standard.

2. Generate the Root CA Certificate (Certificate Authority).

   The CA generates and issues certificates. Generate it using the following command line:

   `openssl req -new -x509 -sha256 -key ca.key -out ca.crt`  

   You will be prompted to provide some information about the CA. replace with your own specific information:  

   `Country Name (2 letter code) [AU]:US`  
   `State or Province Name (full name) [Some-State]:CA`  
   `Locality Name (eg, city) []:Toontown`  
   `Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme inc.`  
   `Organizational Unit Name (eg, section) []:Security`  
   `Common Name (e.g. server FQDN or YOUR name) []:acme.com`  
   `Email Address []:security@acme.com`  

   Your certificate will be generated in the ca.crt file.  

3. [Install the certificate](/kb/general-knowledge-base/install-root-certificates/) Note that the certificate must be installed on the server and on all of the clients to validate the legitimacy of issued certificates. Some browsers also have particularities which are described in the topic.

### Server certificate
<a name="server"></a>

{% snippet icon.shieldCaution %}
These steps are usually performed on each server or device for which you intend to request a certificate. Install OpenSSL if it is not present. The alternative is to securely deploy the private key to the destination server at the same time as the certificate. We recommend you use this last approach only if you must adhere to scripted deployments to follow cloudops/devops practices.
{% endsnippet %}

1. Generate the Server Certificate Private Key.

   Every certificate must have a corresponding private key. Generate it using the following command line:  

   `openssl ecparam -name prime256v1 -genkey -noout -out server.key`  

   This will create a 256bit private key in the server.key file  

2. Generate the server certificate signing request (CSR).  

   This request will later be processed on the Root CA server. Generate it using the following command line:  

   `openssl req -new -sha256 -key server.key -out server.csr`  

   You will be prompted to provide some information about the server certificate. You can enter mostly the same information you used for the CA certificate, but for securing a web site, you must specify the exact FQDN that is used by the server. For Example:  

   `Country Name (2 letter code) [AU]:US`  
   `State or Province Name (full name) [Some-State]:CA`  
   `Locality Name (eg, city) []:Toontown`  
   `Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme inc.`  
   `Organizational Unit Name (eg, section) []:Security`  
   `Common Name (e.g. server FQDN or YOUR name) []:vault.acme.com`  
   `Email Address []:security@acme.com`  

   You will also be prompted for a password, using a password manager as well as a strong password generator is essential.

   The server.csr file must now be transferred to the Root CA.

3. Process the request by following the instructions [below](#process).

4. Deploy the certificate.

### Client certificate
<a name="client"></a>

Follow the same procedure as for the Server above, but you must adapt two attributes of the information you enter to your needs, namely the Common Name and the Email Address

`Common Name (e.g. server FQDN or YOUR name) []:John Doe`  
`Email Address []:JohnDoe@acme.com`  

### Process a Certificate Signing Request (CSR) on the Root Certificate Authority (CA)
<a name="process"></a>

Process the CSR by generating a certificate.

Generate it using the following command line, where the server.csr has been generated on the server:

`openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 1000 -sha256`

This results in the certificate being generated in the server.crt file. You must deploy it to the server where you generated the CSR.