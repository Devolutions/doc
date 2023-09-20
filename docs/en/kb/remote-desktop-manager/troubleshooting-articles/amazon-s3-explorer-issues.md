---
  title: Amazon S3 Explorer issues
---
Amazon.S3.AmazonS3Exception: Access Denied ---> Amazon.Runtime.Internal.HttpErrorResponseException: The remote server returned an error: (403) Forbidden. ---> System.Net.WebException: The remote server returned an error: (403) Forbidden.
## Solution
Permissions ListAllMyBuckets and GetBucketLocation are required. The workaround is to change the region to the one selected by the bucket.  
![!!KB4978](https://webdevolutions.azureedge.net/docs/en/kb/KB4978.png)
