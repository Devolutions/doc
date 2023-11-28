---
eleventyComputed:
  title: Compromised (pwned) password check
  description: In the InfoSec world, a pwned password is a password that has been exposed in data breaches (i.e., they are owned/pwned by hackers). Using a pwned password significantly increases the chances of being the victim of a data breach.
---
{% youtube 'D2PnLXJY100' %}

In the InfoSec world, a pwned password is a password that has been exposed in data breaches (i.e., they are owned/pwned by hackers).

Using a pwned password significantly increases the chances of being the victim of a data breach. Pwned Check leverages Troy Hunt’s Pnwed Passwords API and automatically checks to see if a password that you’re using (or are thinking of using) has been pwned by hackers. If it has, you will be notified and can be proactive and choose something else to stay out of harm’s way. There are over half a billion passwords in the Pwned Passwords database.

## Set up the pwned password check

In existing databases, Pwned check is not turned on automatically.

1. Go to ***Administration – System Settings – Password Validation***.
1. In the ***Compromised (pwned) check*** option, choose ***Enabled*** from the list and click ***OK***.  
![Enable the Compromised (pwned) check option](https://webdevolutions.azureedge.net/docs/en/kb/KB2324.png)  

{{ en.RDM }} analyzes a password when you save an entry. A message is displayed when a password is found in the Pwned Passwords database. If you see this window, you should change your password immediately. Remember to change it in {{ en.RDM }} and the actual account.  
![Change your password](https://webdevolutions.azureedge.net/docs/en/kb/KB2325.png)  

### The back end

Rest assured {{ en.RDM }} does NOT send your passwords to Pwned Passwords.

Here is how it works:

1. Pwned Password Check uses k-Anonymity.
1. {{ en.RDM }} only sends the first five characters of the SHA-1 password hast to the API.
1. The API sends back a list of every password hash that matches the first five characters of the hash. The API only sends back the second part of the hash.
1. {{ en.RDM }} compares the hashes on the list to the password hash for the password you want to use.
1. If there is a match, you receive a warning.

### Choose stronger passwords

{{ en.RDM }} makes it easy to make strong passwords. The built-in [Password Generator](/rdm/windows/commands/tools/generators/password/) creates secure passwords, following your specifications for password length and complexity. The password generator is available on every entry next to the password fields.  
![Password generator icon](https://webdevolutions.azureedge.net/docs/en/kb/KB2326.png)  
![Password generator](https://webdevolutions.azureedge.net/docs/en/kb/KB2327.png)  

{% snippet icon.badgeHelp %}
{{ en.RDM }} also has a [Entry Security Analyzer](/rdm/windows/commands/tools/tools/entry-security-analyzer/) that provides feedback on all your passwords. A rating is included on the entry. It uses Zxcvbn to assess passwords. You can also create a report of all your passwords by using the ***Entry Security Analyzer*** in the ***Tools*** tab. Learn more about this in [Password strength rating](/kb/remote-desktop-manager/).
{% endsnippet %}
