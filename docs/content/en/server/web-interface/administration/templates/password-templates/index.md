---
eleventyComputed:
  title: Password templates
  order: 10
---
***Password Templates*** are used by administrators to create predefined settings for the [***Password Generator***](/server/web-interface/administration/templates/password-templates/password-generator/) of {{ en.DVLS }}.
![Administration – Password Templates](https://cdnweb.devolutions.net/docs/en/server/clip10401.png)

## Create password templates
To create ***Password Templates***, go to ***Administration – Password Templates*** and click on the ***Add*** button. You can also create a ***Password Template*** when using the ***Password Generator***. Just customize the settings and click on ***Add template***.
![Password Templates](https://cdnweb.devolutions.net/docs/en/server/clip10402.png)

| Option                           | Description                                                                        |
|----------------------------------|------------------------------------------------------------------------------------|
| Name                             | Name of the ***Password Templates***.                                              |
| Mode                             | Chose a ***Mode*** setting for the passwords.<ul><li>***Default***: Customize the length and the minimum number of characters per type you would want the passwords to have.</li><li>***Advanced settings***: Select the length, type and number of characters to include in the passwords. Include and exclude specific characters.</li><li>***Readable password***: Generate passwords that are readable but are not actual words.</li><li>[***Use a pattern***](/server/web-interface/administration/templates/password-templates/use-a-pattern-password/): Select any pattern you need to create the passwords, you can also exclude certain characters if desired. A list of the most recent used pattern will also be created.</li><li>***Pronounceable password***: Generate passwords that are pronounceable, but are not actual words.</li></ul> |
| Upper-case (A, B...)             | Will include uppercase letters for password generation.                            |
| Underline ( _ )                  | Will include the underline ( _ ) character for password generation.                |
| High ANSI characters             | Will include characters from '-' to U255 (excluding U255) for password generation. |
| Minus ( - )                      | Will include the minus ( - ) character for password generation.                    |
| Brackets ([,], (,), <,>)         | Will include brackets characters for password generation.                          |
| Digits (0, 1, 2...)              | Will include digits for password generation.                                       |
| Special (!, $, %, &...)          | Will include special characters for password generation.                           |
| Lower-case (a, b, c...)          | Will include lowercase letters for password generation.                            |
| Space ( )                        | Will include the space character for password generation.                          |
| XML Compliant                    | Will generate XML compliant passwords.                                             |
| Password count                   | Maximum number of passwords that will be generated.                                |
| Include the following characters | Forcefully including characters inside the password.                               |
| Exclude the following characters | Forcefully excludes characters from the password.                                  |

### Force default password template
Force a default ***Password Template*** for all {{ en.DVLS }} users.
1. Go to ***Administration – System Settings – Password Management – Password Template***.
2. Choose a ***Default template***.
3. Check ***Force default template*** and ***Save***.
![Default Password Template](https://cdnweb.devolutions.net/docs/en/server/ServerOp4087.png)
