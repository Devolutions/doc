---
eleventyComputed:
  title: Password generator
---
The ***Password Generator*** allows to create random passwords that are difficult to interpret or predict, due to a mix of uppercase and lowercase letters, numbers and punctuation symbols.

{% snippet icon.badgeHelp %}
You can create and force a [***Password Templates***](/server/web-interface/administration/templates/password-templates/) to follow your organization secure policies.
{% endsnippet %}

![Password generator in entry properties](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4086.png)

### Generate passwords with the password generator

1. Go to the ***General*** section in the ***Properties*** of an entry.
1. Next to the ***Password*** field, click the three-dots menu to access the ***Password generator*** tool.
1. Customize all the criteria you want your password to have, then click ***Generate***.
1. In the proposed list, choose and click on a password.
{% snippet icon.badgeInfo %}
At the bottom of the list, you can review the strength and phonetics of the selected password.
{% endsnippet %}

1. Click on ***Select*** to close and autofill the ***Password*** entry field.
{% snippet icon.badgeNotice %}
You can also create a ***Password template*** from your ***Password Generator*** settings. Just customize the settings and click on ***Add template*** next to the ***Template*** drop-down list.
{% endsnippet %}

![Password generator](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4085.png)

| Option                           | Description                                                                    |
|----------------------------------|--------------------------------------------------------------------------------|
| Template                         | Choose a ***Password Templates***.                                             |
| Mode                             | Choose a ***Mode*** setting for the passwords.<ul><li>***Default***: Customize the length and the minimum number of characters per type you want the passwords to have.</li><li>***Advanced settings***: Select the length, type, and number of characters to include in the passwords. Include and exclude specific characters.</li><li>***Readable password***: Generate passwords that are readable but are not actual words.</li><li>[***Use a pattern***](/server/web-interface/administration/templates/password-templates/use-a-pattern-password/): Select any pattern you need to create the passwords. You can also exclude certain characters if desired. A list of the most recent used patterns is also created.</li><li>***Pronounceable password***: Generate passwords that are pronounceable, but are not actual words.</li></ul> |
| Upper-case (A, B...)             | Include uppercase letters in passwords. generation.                            |
| Underline ( _ )                  | Include the underline ( _ ) character in passwords. generation.                |
| High ANSI characters             | Include characters from '-' to U255 (excluding U255) in passwords. generation. |
| Minus ( - )                      | Include the minus ( - ) character in passwords. generation.                    |
| Brackets ([], (), <>)         | Include bracket characters in passwords. generation.                           |
| Digits (0, 1, 2...)              | Include digits in passwords. generation.                                       |
| Special (!, $, %, &...)          | Include special characters in passwords. generation.                           |
| Lower-case (a, b, c...)          | Include lowercase letters in passwords. generation.                            |
| Space ( )                        | Include the space character in passwords. generation.                          |
| XML Compliant                    | Generate XML compliant passwords. passwords.                                   |
| Password count                   | Maximum number of passwords generated.                                         |
| Include the following characters | Forcefully include characters inside the password.                             |
| Exclude the following characters | Forcefully exclude characters from the password.                               |
