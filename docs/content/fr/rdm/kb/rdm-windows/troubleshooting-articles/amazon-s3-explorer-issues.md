---
eleventyComputed:
  title: Problèmes avec Amazon S3 Explorer
---
Amazon.S3.AmazonS3Exception : Accès refusé ---> Amazon.Runtime.Internal.HttpErrorResponseException : Le serveur distant a retourné une erreur : (403) Interdit. ---> System.Net.WebException : Le serveur distant a retourné une erreur : (403) Interdit.
## Solution
Les permissions ListAllMyBuckets et GetBucketLocation sont requises. La solution consiste à changer la région pour celle sélectionnée par le seau.
![!!KB4978](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4978.png)
