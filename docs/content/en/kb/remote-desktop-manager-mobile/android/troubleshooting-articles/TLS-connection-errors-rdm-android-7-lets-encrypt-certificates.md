---
eleventyComputed:
  title: TLS connection errors in {{ en.RDMANDROID }} 7 and later with Let’s Encrypt certificates
  description: Beginning May 15, 2024, devices that do not trust the ISRG Root X1 root certificate will face issues with Let’s Encrypt certificates.
---
Beginning May 15, 2024, devices that do not trust the ISRG Root X1 root certificate will face issues with Let’s Encrypt certificates. Devolutions employs Let’s Encrypt certificates for its Devolutions account-related services. However, this will not affect users on Android version 8 or later, since these versions trust the ISRG Root X1 certificate.

### Solution
If you are using Android 7, follow these instructions from your Android device:

1. Navigate to [valid-isrgrootx1.letsencrypt.org](https://valid-isrgrootx1.letsencrypt.org/). If a TLS error is displayed, you must add the root certificate. Otherwise, no further action is needed since the root certificate if already added to your device.
1. Download the ISRG Root X1 certificate from [https://letsencrypt.org/certs/isrgrootx1.pem](https://letsencrypt.org/certs/isrgrootx1.pem) (automatic download).
1. Navigate to ***Settings – Security – Install from SD card*** and add the certificate that you downloaded in the previous step to the System store.
1. Navigate back to [valid-isrgrootx1.letsencrypt.org](https://valid-isrgrootx1.letsencrypt.org/). The page should now load correctly.

{% snippet icon.badgeHelp %}
Further information can be found on the following Let's Encrypt pages:
* [Upcoming Let’s Encrypt certificate chain change and impact for Cloudflare customers](https://blog.cloudflare.com/upcoming-lets-encrypt-certificate-chain-change-and-impact-for-cloudflare-customers)
* [Shortening the Let's Encrypt Chain of Trust](https://letsencrypt.org/2023/07/10/cross-sign-expiration.html)
{% endsnippet %}