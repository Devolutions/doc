---
title: Export Html Encrypted
---
The Html Encrypted export format was designed for simple and secure exports of entries. It allows for an html export of the entry information while using symmetric encryption (AES-256) to encrypt sensitive information such as passwords. The file is an ultra portable self contained html file that requires no external script files or installs. As long as you have a web browser with JavaScript enabled you can get to your encrypted data.  

{% snippet icon.shieldNotice %} 
With a secure encrypted document you can freely send the information via email or any other protocol without compromising the sensitive data. Use the export as means of sharing or as a backup for sensitive information. 
{% endsnippet %}
 
## Settings 

Select the entries to export or export all entries. Right-click and select Export - Export Special - Export All Entries (.html) or use File - Export - Export All Entries (.html). You will be prompted for a password for the symmetric encryption key. Select the file name for the new document. Once the export is completed the file will open in your default browser. 

{% snippet icon.badgeWarning %} 
Ensure you do not forget the password as you will not be able to decrypt the data without it. 
{% endsnippet %}
 
When exporting multiple entries that are all contained within the same file, at decrypt time, each encrypted value must be decrypted individually for security reasons. Once you are done with the sensitive data simply hit F5 to refresh the file or simply close it. Your data is now safe from prying eyes.  

### AES-256 

We use AES-256 to encrypt/decrypt your sensitive data. Since the decryption is done entirely in the browser, there’s no need for external tools, downloads or installs.  
![Encrypted value](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10132.png) 

### Safe & Smart Virtual Backup 

In addition, HTML Export using symmetric encryption is a great way to securely backup your passwords and other sensitive information. It allows you to share information via email, or simply send the file to your personal email account as a backup. 

