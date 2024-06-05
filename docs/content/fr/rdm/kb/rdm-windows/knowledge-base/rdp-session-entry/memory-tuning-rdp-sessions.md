---
eleventyComputed:
  title: Ajustement de la mémoire des sessions RDP
  description: Dans l'onglet Expérience de la session RDP, il y a un paramètre Cache que vous pouvez utiliser pour contrôler le comportement.
---
Par défaut, le protocole RDP réservera une portion importante de mémoire dès le début d'une session à des fins de mise en cache, mais nous avons un certain niveau de contrôle sur cela. Dans l'onglet ***Expérience*** de la session RDP, il y a un paramètre ***Cache*** que vous pouvez utiliser pour contrôler le comportement.

![Mode Cache](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4455.png)

Voici ce que chaque mode fait :

| VALEUR      | DESCRIPTION                                                                  |
|-------------|------------------------------------------------------------------------------|
| Par défaut  | Utilise la valeur définie dans ***Fichier – Paramètres – Types – Bureau à distance – Cache***. |
| Mode complet| Le protocole est le cache complet du protocole Bureau à distance Windows 8.                |
| Client léger| Le protocole est limité à l'utilisation du codec RemoteFX de Windows 7 avec SP1 et un cache plus petit. Tous les autres codecs sont désactivés. Ce protocole a l'empreinte mémoire la plus petite. |
| Petit cache | Le protocole est le même que le ***Mode complet***, sauf qu'il utilise un cache plus petit. |

Choisir ***Client léger*** est donc le choix qui limite le plus la consommation de mémoire, mais rétrogradera à la version précédente du protocole. Le mode ***Petit Cache*** peut être suffisant pour vos besoins si vous avez besoin des fonctionnalités plus récentes du protocole RDP.

Vous pourriez souhaiter définir cela pour toutes les sessions. Dans ce cas, allez dans ***Fichier – Paramètres – Types – Bureau à distance – Cache*** pour assigner la valeur par défaut, puis dans toutes vos sessions utilisez ***Par défaut***.

![Fichier – Paramètres – Types – Bureau à distance – Cache](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4456.png)
