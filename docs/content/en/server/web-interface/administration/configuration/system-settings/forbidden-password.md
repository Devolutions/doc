---
eleventyComputed:
  title: Forbidden password
---
***Forbidden Passwords*** allow to create a list of blacklisted passwords to forbid usage in the application. Once set in this list, the password cannot be used anymore in the {{ en.DVLS }} data source.
![Administration – System Settings – Forbidden Password](https://cdnweb.devolutions.net/docs/en/server/clip10378.png)

| Option            | Description                                                                                                 |
|-------------------|-------------------------------------------------------------------------------------------------------------|
| Case sensitive    | Make the verification mode case sensitive.                                                                  |
| Verification mode | Select the verification mode between:<br>Contains: the password will be forbidden if it contains a word in the blacklist.<br>Exact match: the password will be forbidden if it matches a word in the blacklist. |
| Import            | Import a list from your computer (*.pwd or .txt).                                                           |
| Export            | Export your forbidden password list. By default the list will be exported in a password file format (.pwd). |
