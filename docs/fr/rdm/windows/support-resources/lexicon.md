---
  title: Lexique
---
{{ fr.RDM }} est un logiciel qui possède un ensemble complet de fonctionnalités. Voici les principaux concepts qu'il est important de comprendre afin d'utiliser le programme à son plein potentiel. 

### Connexion 

Tout type d'entrée qui vous permet de vous connecter à un hôte, à un service ou à un périphérique distant est une connexion. Une adresse IP ou un nom d'hôte est normalement utilisé ainsi que des identifiants. 

### Entrée 

Tous les éléments dans votre source de données sont des entrées. Il en existe plusieurs types. L'entrée est un concept abstrait qui sert de répertoire pour tous les types spécifiques. 

### Identifiants 

Un identifiant est utilisé pour contrôler l'accès à une ressource en identifiant l'utilisateur. Il peut s'agir d'une combinaison classique du nom d'utilisateur/mot de passe détenu par l'application ou encore par une source externe. 

### Information 

Une entrée d'informations peut contenir divers éléments tels que des informations de compte, des courriels et des numéros de série. Contrairement aux entrées d'identifiants, les entrées d'informations sont destinées à être partagées. Par conséquent, les données des entrées d'informations ne sont pas cryptées. Son utilisation principale dans {{ fr.RDM }} est de conserver les informations de site Web, de l'URL aux identifiants. Cela permet une connexion automatique sur le site Web spécifié. 

### Session 

À ses débuts, {{ fr.RDM }} visait principalement à gérer Microsoft Remote Desktop. Une session était un terme utilisé à l'époque pour décrire une connexion aux services de Microsoft Remote Desktop. Il apparaît largement dans notre documentation. Toute technologie qui se connecte et qui doit utiliser l'authentification est une session. 

### Source de données 

C'est un répertoire pour les entrées. Il peut s'agir d'un fichier local ou d'une base de données (locale ou partagée). Vous pouvez utiliser plusieurs sources de données distinctes dans l'application, bien qu'une seule à la fois soit considérée comme active. Voir [Sources de données](/fr/rdm/windows/data-sources/) pour plus d'informations. 

