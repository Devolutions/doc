---
eleventyComputed:
  title: Lexique
---
{{ fr.RDM }} est un logiciel qui possède un ensemble étendu de fonctionnalités. Voici les principaux concepts qu'il est important de comprendre pour utiliser le programme à son plein potentiel.

### Connexion

Tout type d'entrée qui permet de se connecter à un hôte distant, un service ou un appareil est une connexion. Une adresse IP ou un nom d'hôte est normalement utilisé ainsi que des identifiants.

### Entrée d'identifiants

Un identifiant est utilisé pour contrôler l'accès à une ressource en identifiant l'utilisateur. Il peut s'agir d'une paire nom d'utilisateur/mot de passe classique détenue par l'application ou même par une source externe.

### Source de données

C'est un conteneur pour les entrées. Il peut s'agir d'un fichier local ou d'une base de données (locale ou partagée). Vous pouvez utiliser plusieurs sources de données distinctes dans l'application, bien qu'une seule soit considérée comme active à un moment donné. Voir [Sources de données](/rdm/mac/data-sources/) pour plus d'informations.

### Entrée

Tous les éléments de votre source de données sont des entrées. Il existe plusieurs types. L'entrée est un concept abstrait qui sert de conteneur pour tous les types spécifiques.

### Entrée d'information

Une entrée d'information peut contenir divers éléments comme des informations de compte, des courriels et des numéros de série. Contrairement aux entrées d'identifiants, les entrées d'information sont destinées à être partagées. Par conséquent, les données dans les entrées d'information ne sont pas chiffrées. Son utilisation principale dans {{ fr.RDM }} est de contenir des informations de site web, de l'URL aux identifiants. Cela permet une connexion automatique sur le site web spécifié.

### Session

Aux premiers jours de {{ fr.RDM }}, il visait principalement à gérer Microsoft Remote Desktop. Une session était un terme qui était utilisé à l'époque pour décrire une connexion aux services Bureau à distance de Microsoft. Il apparaît largement dans notre documentation. Toute technologie qui se connecte et qui a besoin d'utiliser une authentification est une session.
