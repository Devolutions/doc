---
eleventyComputed:
  title: Gestion des clés privées
  description: Votre clé privée est obligatoire dans le cas où vous accédez à votre {{ fr.DHUB }} depuis un nouvel appareil ou une session de navigation privée. Vous pouvez configurer ses méthodes de stockage dans votre {{ fr.DPORTAL }}.
  keywords:
  - clé privée
  - code QR
  - notification push
  - mobile
---
## Première connexion à {{ fr.DHUB }}

{% snippet, "badgeNotice" %}
Une clé privée est obligatoire dans le cas où vous accédez à votre {{ fr.DHUB }} depuis un nouvel appareil ou une session de navigation privée.
{% endsnippet %}

Lors de la connexion à votre {{ fr.DHUB }} pour la première fois, une clé privée sera créée. La méthode de stockage dépend de si vous avez déjà un {{ fr.DA }} ou non et de si l'authentification unique (SSO) est activée sur le hub :
* Si vous avez déjà un {{ fr.DA }}, votre clé privée sera stockée en utilisant votre mot de passe.
* Si vous n'avez pas de {{ fr.DA }} et que votre hub n'offre pas l'authentification unique (SSO), votre clé privée sera stockée en utilisant le mot de passe qui sera créé.
* Si vous n'avez pas de {{ fr.DA }} et que vous vous connectez à un hub utilisant l'authentification unique (SSO), il vous sera demandé de choisir une méthode de stockage pour votre clé privée.
    * Appareil mobile **(Recommandé)** : Votre clé privée peut être stockée sur l'[{{ fr.WMAPP }}](https://devolutions.net/workspace/). Vous recevrez une notification push pour approuver facilement de nouveaux appareils.
    * Code QR : Téléchargez et imprimez votre clé privée sous forme de code QR. Lorsqu'il sera nécessaire d'approuver de nouveaux appareils, vous devrez scanner le code QR.
    * Mot de passe : Approuvez de nouveaux appareils en entrant un mot de passe.

## Gestion du stockage

Après la première connexion, vous pouvez ajouter/modifier d'autres méthodes. Vous pouvez le faire dans votre [{{ fr.DPORTAL }}](https://portal.devolutions.com/security/private-key).

Les trois méthodes peuvent être activées en même temps, et vous aurez toujours au moins une méthode de stockage configurée pour votre clé privée. Votre méthode de stockage active aura une coche dans un cercle vert à côté, tandis qu'une méthode non configurée aura un "x" dans un cercle rouge.

Voir les exemples ci-dessous :

![Méthodes de stockage de la clé privée – Méthode par mot de passe configurée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2185.png)

![Méthodes de stockage de la clé privée – Méthode par appareil mobile configurée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2186.png)

![Méthodes de stockage de la clé privée – Méthode par code QR configurée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2187.png)

### Stocker sur un appareil mobile (Recommandé)

Cette méthode est recommandée car il n'est pas nécessaire de se souvenir d'un mot de passe ou de stocker votre code QR quelque part. Cela est particulièrement utile pour l'accès depuis un nouvel appareil ou une session de navigation privée, car votre mot de passe n'est pas stocké dans votre navigateur dans cette situation.

Suivez les étapes ci-dessous pour configurer cette méthode.

1. Dans la section ***Méthodes de stockage de la clé privée*** de votre {{ fr.DPORTAL }}, cliquez sur ***Configurer*** dans la boîte de méthode par appareil mobile.
![Configurer la méthode par appareil mobile](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2188.png)
1. [Téléchargez](https://devolutions.net/workspace/) l'{{ fr.WMAPP }}.
![Télécharger {{ fr.WMAPP }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2189.png)
1. Une fois fait, cliquez sur ***Continuer***. Un code QR apparaîtra.
1. Dans l'{{ fr.WMAPP }}, accédez à l'espace ***Authentificateur***.
1. Cliquez sur ***Ajouter***, puis sur ***Scanner un code QR***.
1. Scannez le code QR dans le navigateur avec votre appareil mobile.
![Scanner le code QR](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2190.png)

Le processus de jumelage commencera. Après sa fin (cela ne devrait prendre que quelques secondes), votre clé privée sera stockée sur l'{{ fr.WMAPP }}.

#### Dissocier

À tout moment, vous pouvez décider de supprimer cette configuration de stockage en cliquant sur ***Dissocier***. Cette option est utile si vous avez des problèmes de jumelage avec votre appareil mobile et souhaitez refaire la configuration depuis le début.
![Dissocier l'appareil mobile](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2191.png)

### Stocker sous forme de code QR

Si vous n'avez pas accès à un appareil mobile ou si vous souhaitez une méthode supplémentaire, cette option est la meilleure alternative. Suivez les étapes ci-dessous pour configurer cette méthode.

1. Dans la section ***Méthodes de stockage de la clé privée*** de votre {{ fr.DPORTAL }}, cliquez sur ***Configurer*** dans la boîte de méthode par code QR.
![Configurer la méthode par code QR](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2192.png)
1. Soit ***Téléchargez*** soit ***Imprimez*** le code QR. Quel que soit votre choix, **assurez-vous de le garder dans un endroit sûr**.
![Télécharger ou imprimer le code QR](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2193.png)

#### Régénérer

Si vous rencontrez des problèmes en utilisant cette méthode pour vous authentifier ou si vous avez perdu votre code QR, vous pouvez générer un nouveau en cliquant sur les points de suspension verticaux et en sélectionnant ***Régénérer un nouveau code QR***. Vous pouvez également supprimer le code actuel sans en générer un nouveau en sélectionnant ***Supprimer le code QR actuel***.

![Régénérer ou supprimer un code QR](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2194.png)

{% snippet, "badgeCaution" %}
Générer un nouveau code QR rend votre ancien code inutilisable. Nous recommandons donc de supprimer l'ancien code après avoir généré le nouveau.
{% endsnippet %}

### Stocker à l'aide d'un mot de passe

Suivez les étapes ci-dessous pour configurer cette méthode.

1. Dans la section ***Méthodes de stockage de la clé privée*** de votre {{ fr.DPORTAL }}, cliquez sur ***Configurer*** dans la boîte de méthode par mot de passe.
![Configurer la méthode par mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2195.png)
1. Dans les champs ***Mot de passe***, entrez un mot de passe qui suit les règles spécifiées écrites en dessous. **Assurez-vous de le garder dans un endroit sûr.**
1. Cliquez sur ***Créer un mot de passe***.

Si vous souhaitez changer ce mot de passe, cliquez sur l'icône ***Changer le mot de passe***.

![Changer le mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2196.png)

Suivez les étapes, puis cliquez sur ***Changer le mot de passe*** une fois terminé.

![Mots de passe actuel et nouveau](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2197.png)
