---
eleventyComputed:
  title: Automatically fill in credentials in a Windows UAC prompt
  description: You may require to enter credentials in a user access control (UAC) prompt when making changes or additions within a Windows computer.
---
You may require to enter credentials in a Windows user access control (UAC) prompt when making changes or additions within a Windows computer. They can be automatically filled in by following the instructions below: 

1. When the prompt appears in your embedded RDP session and you need to fill in both your username and your password, right-click on the RDP entry in the {{ en.NPANE }} and select ***Copy username***.
![Copy username](https://cdnweb.devolutions.net/docs/RDMW2035_2024_1.png)
1. Click in the username field in the RDP session.
1. Right-click the RDP session tab and select ***Clipboard – Type clipboard***. Doing this pastes the contents of your clipboard into the selected field, which is currently your username.
![Clipboard – Type clipboard](https://cdnweb.devolutions.net/docs/RDMW2037_2024_1.png)
1. Right-click on the RDP entry in the {{ en.NPANE }} and this time select ***Copy password***.
![Copy password](https://cdnweb.devolutions.net/docs/RDMW2036_2024_1.png)
1. Click in the password field in the RDP session.
1. Right-click the RDP session tab and select ***Clipboard – Type clipboard***. Doing this pastes the contents of your clipboard into the selected field, which is currently your password.
![Clipboard – Type clipboard](https://cdnweb.devolutions.net/docs/RDMW2037_2024_1.png)
1. Connect to your session.
