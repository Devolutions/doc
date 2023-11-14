---
eleventyComputed:
  title: Password strength rating
  description: Existing and generated passwords have a strength rating (numerical value) that is then translated into a strength label in {{ en.RDM }}.
---
{{ en.RDM }}'s [***Password generator***](/rdm/windows/commands/tools/generators/password/) tool as well as reports such as the [***Entry security analyzer***](/rdm/windows/commands/tools/tools/entry-security-analyzer/) and the ***Password analyzer*** provide feedback about existing and generated passwords.  

This feedback incorporates a password rating score, assessed through [Zxcvbn](https://lowe.github.io/tryzxcvbn/). The score, represented as a numerical value, is subsequently converted into a strength label, which is what {{ en.RDM }} displays. The numerical score can be accessed by exporting the ***Entry security analyzer*** into any file format (CSV, Html, Xlsx, or Xml).

Consult the table below to identify the corresponding strength label for each numerical score range.

| Strength label               | Score / score range          |
| ---------------------------- | ---------------------------- |
| Encrypted                    | Less than or equal to -10    |
| None                         | -1                           |
| Popular Password             | 1                            |
| Forbidden                    | 2                            |
| Very Weak                    | Less than 20                 |
| Weak                         | Less than 40                 |
| Good                         | Less than 60                 |
| Strong                       | Less than 80                 |
| Very Strong                  | Less than 100                |
| Perfect                      | Anything else (cannot be achieved) |
