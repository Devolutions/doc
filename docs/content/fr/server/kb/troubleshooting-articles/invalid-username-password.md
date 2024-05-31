---
eleventyComputed:
  title: Erreur d'identifiant ou de mot de passe invalide lors de la connexion avec des identifiants de domaine
  description: Lors de la tentative de connexion à {{ fr.DVLS }} avec des identifiants de type domaine, vous pouvez obtenir l'erreur Identifiant ou mot de passe invalide, veuillez vérifier vos identifiants.
---
Lors de la tentative de connexion à {{ fr.DVLS }} avec des identifiants de type "domaine", vous pouvez recevoir le message d'erreur suivant : "Identifiant ou mot de passe invalide, veuillez vérifier vos identifiants". Cela peut être une erreur où {{ fr.DVLS }} signale incorrectement que vos identifiants sont invalides alors qu'ils ne le sont en fait pas. Cela est causé par le changement dans notre pile LDAP et la manière dont le {{ fr.DVLS }} interagit avec l'Active Directory.

### Solution
Une fois que vous avez validé que vos identifiants sont réellement les bons pour ce {{ fr.DVLS }} et cette méthode d'authentification, vous pouvez remédier à la situation en changeant la stratégie utilisée par le {{ fr.DVLS }} pour récupérer les informations.

1. Dans {{ fr.DVLS }}, aller à ***Administration – Paramètres du serveur – Authentification – Domaines***.
![Administration – Paramètres du serveur – Authentification – Domaines](https://cdnweb.devolutions.net/docs/DVLS2004_2024_1.png)
1. Cliquer ***Modifier*** sur le domaine.
![Modifier le domaine](https://cdnweb.devolutions.net/docs/DVLS2005_2024_1.png)
1. Cliquer ***Paramètres avancés***.
![Paramètres avancés](https://cdnweb.devolutions.net/docs/DVLS2006_2024_1.png)
1. Changer la valeur de la ***Validité de l'utilisateur*** de ***Par défaut (LDAP)*** à soit ***Valider les identifiants*** soit ***Créer un principal utilisateur***.
![Validité de l'utilisateur](https://cdnweb.devolutions.net/docs/DVLS2007_2024_1.png)
1. Cliquer ***OK***, puis ***Mettre à jour*** pour sauvegarder vos changements.

Vous devriez maintenant être capable de vous connecter. Si le problème persiste, vous pouvez également changer les autres valeurs trouvées dans les ***Paramètres avancés*** soit à ***Principal*** soit à ***Groupe de jetons d'entrée de répertoire*** selon ce qui est disponible. Si vous rencontrez toujours des problèmes de connexion, veuillez contacter notre équipe de support à [service@devolutions.net](mailto:service@devolutions.net).
