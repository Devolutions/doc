---
eleventyComputed:
  title: Invalid TLS certificate issues for session recording via {{ en.DGW }}
  description: If you encounter issues with session recording via {{ en.DGW }}, it may be due to an invalid TLS certificate.
---
If you encounter issues with session recording via {{ en.DGW }}, it may be due to an invalid TLS certificate. There are several reasons why a TLS certificate could be considered invalid. Here are the most common causes:
* **Misconfigured certificate**: Incorrect setup or installation of the TLS certificate.
* **Domain mismatch**: The certificate is issued for a different domain (e.g., certificate issued for *example.loc* but the host destination address is *not-example.loc*).
* **Break in the chain of trust**: The certificate issuer's identity cannot be verified.
* **Incorrect date/time on client machine**: If the local date/time on the client machine is incorrect, the certificate may be considered expired if it falls past the certificate's expiration date.
* **Broken certificate structure**: The certificate has an invalid digital signature or other structural issues.
* **Outdated hashing algorithm**: The certificate uses only the SHA-1 hash algorithm, which is outdated and no longer considered secure.
* **Revoked certificate**: The certificate has been revoked by the issuing authority.
* **Self-signed certificate and Sophos**: When using a self-signed certificate, if the client is using Sophos, the certificate may be replaced by an untrusted one, bypassing the option to allow self-signed certificates by {{ en.RDM }}.