---
eleventyComputed:
  title: Application des conteneurs de domaine
  description: Les conteneurs de domaine sont appliqués dans {{ fr.DVLS }}. Dans les versions antérieures, tant que les informations d'identification d'administration avaient des droits sur d'autres unités organisationnelles (UO) du domaine, les utilisateurs et les groupes d'utilisateurs pouvaient encore être utilisés même s'ils se trouvaient en dehors de ces conteneurs. Ce n'est plus le cas désormais.
---
Les conteneurs de domaine sont appliqués dans {{ fr.DVLS }}. Dans les versions antérieures, tant que les informations d'identification d'administration avaient des droits sur d'autres unités organisationnelles (UO) du domaine, les utilisateurs et les groupes d'utilisateurs pouvaient encore être utilisés même s'ils se trouvaient en dehors de ces conteneurs. Ce n'est plus le cas désormais.

S'assurer que tous les utilisateurs et groupes d'utilisateurs peuvent être utilisés :

1. Se connecter à votre interface web {{ fr.DVLS }} en utilisant un compte administrateur.
1. Aller à ***Administration – Paramètres du serveur – Authentification – Domaines***.
![Administration – Paramètres du serveur – Authentification – Domaines](https://cdnweb.devolutions.net/docs/DVLS2004_2024_1.png)
1. Cliquer sur ***Modifier*** à côté de votre domaine.
![Modifier votre domaine](https://cdnweb.devolutions.net/docs/DVLS2005_2024_1.png)
1. Aller aux ***Paramètres avancés***.
![Paramètres avancés](https://cdnweb.devolutions.net/docs/DVLS2006_2024_1.png)
1. Dans ***Conteneurs de domaine***, vérifier si vous avez des UO sélectionnées. Si vous en avez configurées, veuillez vous assurer que tous les utilisateurs et groupes d'utilisateurs sont inclus ici, sinon les utilisateurs et groupes en dehors de ces conteneurs ne pourront pas se connecter ou avoir les permissions appropriées. Vous pourriez également supprimer ces restrictions de conteneur de domaine si votre Active Directory n'est pas large.
1. Cliquer sur ***OK*** puis ***Mettre à jour*** pour sauvegarder vos modifications.
