---
eleventyComputed:
  title: Évaluation de la force des mots de passe
  description: Les mots de passe existants et générés ont une évaluation de force (valeur numérique) qui est ensuite traduite en une étiquette de force dans {{ fr.RDM }}.
---
L'outil [***Générateur de mot de passe***](/rdm/windows/commands/tools/generators/password/) de {{ fr.RDM }} ainsi que des rapports tels que l'[***Analyseur de sécurité des entrées***](/rdm/commands/reports/entry-security-analyzer/) et l'***Analyseur de mot de passe*** fournissent un retour sur les mots de passe existants et générés.

Ce retour intègre une note de force de mot de passe, évaluée à travers [Zxcvbn](https://lowe.github.io/tryzxcvbn/). La note, représentée par une valeur numérique, est ensuite convertie en une étiquette de force, qui est ce que {{ fr.RDM }} affiche. La note numérique peut être consultée en exportant l'***Analyseur de sécurité des entrées*** dans n'importe quel format de fichier (CSV, Html, Xlsx ou Xml).

Consultez le tableau ci-dessous pour identifier l'étiquette de force correspondante pour chaque plage de score numérique.

| Étiquette de force           | Score / plage de scores      |
| ---------------------------- | ---------------------------- |
| Chiffré                      | Inférieur ou égal à -10      |
| Aucun                        | -1                           |
| Mot de passe populaire       | 1                            |
| Interdit                     | 2                            |
| Très faible                  | Inférieur à 20               |
| Faible                       | Inférieur à 40               |
| Bon                          | Inférieur à 60               |
| Fort                         | Inférieur à 80               |
| Très fort                    | Inférieur à 100              |
| Parfait                      | Tout autre (ne peut être atteint) |

{% snippet, "badgeHelp" %}
Pour en savoir plus sur [la vérification de mot de passe compromis (pwned)](/rdm/kb/rdm-windows/how-to-articles/pwned-password-check/).
{% endsnippet %}