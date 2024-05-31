---
eleventyComputed:
  title: "{{ fr.RDM }} ne démarre pas"
  description: Lors de la modernisation de notre processus de construction de {{ fr.RDM }} pour Windows, un problème est passé inaperçu.
---
Lors de la modernisation de notre processus de construction de {{ fr.RDM }} pour Windows, un problème est passé inaperçu. Un outil qui effectue des actions contre notre base de code a introduit un problème au sein de l'application.

Le résultat de ce problème est que les versions suivantes de {{ fr.RDM }} ne vous permettront plus de démarrer l'application après une date donnée (voir la liste ci-dessous).

| Version     | Expire le  |
|-------------|------------|
| 2022.1.19.0 | 2022-03-29 |
| 2022.1.20.0 | 2022-03-31 |
| 2022.1.21.0 | 2022-04-05 |

La cause était l'activation incorrecte de la licence pour l'outil pendant le processus de construction automatisé. En d'autres termes, même si nous détenions la licence appropriée, les informations de licence n'étaient pas transmises à l'outil.

## Solution
Nous avons depuis résolu le problème dans toutes les constructions égales ou supérieures à 2022.1.22.0. Veuillez visiter notre [page de téléchargement](https://devolutions.net/remote-desktop-manager/home/download) pour obtenir la dernière version.
