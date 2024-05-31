---
eleventyComputed:
  title: ID client ou secret invalide avec l'authentification unique Microsoft
  description: Lors de la tentative de connexion à votre {{ fr.DHUBB }} en utilisant l'authentification unique Microsoft (SSO), vous pouvez rencontrer le message d'erreur suivant : "L'ID client ou le secret fourni par votre organisation est invalide, veuillez contacter un administrateur de votre organisation."
---
Lors de la tentative de connexion à votre {{ fr.DHUBB }} en utilisant l'authentification unique Microsoft (SSO), vous pouvez rencontrer le message d'erreur suivant : "L'ID client ou le secret fourni par votre organisation est invalide, veuillez contacter un administrateur de votre organisation."

![Message d'erreur ID client ou secret invalide](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2319.png)

## Solution

Cela signifie très probablement que votre secret client est expiré dans le Portail Microsoft Azure. La solution est de créer un nouveau secret et de le changer dans votre configuration SSO {{ fr.DHUBB }}.

### Vérifier la date d'expiration du secret client

1. Dans une nouvelle page de navigateur web, ouvrir votre [Portail Microsoft Azure](https://azure.microsoft.com/) et se connecter à votre compte.
1. Sélectionner ***Microsoft Entra ID*** (anciennement [Azure Active Directory](https://learn.microsoft.com/en-us/entra/fundamentals/new-name)) dans la section ***Azure services***. Si vous ne le voyez pas, cliquer sur ***More services*** pour faire apparaître d'autres services.
![Service Microsoft Entra ID](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2331.png)
1. Cliquer sur ***App registrations*** dans le menu de gauche.
![Inscriptions d'applications](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2321.png)
1. Dans la liste, cliquer sur l'application avec laquelle vous avez configuré l'authentification unique dans votre hub pour accéder à son aperçu.
1. Cliquer sur ***Certificates & secrets*** dans le menu de gauche.
1. Localiser le secret actuellement utilisé dans votre configuration SSO {{ fr.DHUBB }} et voir s'il est expiré dans la colonne ***Expires***.
![Applications d'entreprise](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2320.png)
Si c'est effectivement expiré, c'est très probablement la cause de votre problème de connexion. Vous devez créer un nouveau secret client et le changer dans votre configuration SSO {{ fr.DHUBB }} en suivant les étapes suivantes.

{% snippet, "badgeInfo" %}
Si le secret client n'est pas expiré, le problème peut venir de votre ID client. Vérifier qu'il correspond à celui dans votre configuration SSO puis essayer de vous connecter à nouveau.
{% endsnippet %}

### Créer un nouveau secret client

1. Cliquer sur ***New client secret***.
![Nouveau secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2151.png)
1. Dans la fenêtre ***Add a client secret***, entrer une ***Description*** (par exemple, le nom de votre application d'entreprise) et sélectionner une date d'expiration pour ce secret client, conformément à vos meilleures pratiques de sécurité internes.
![Ajouter un secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2152.png)
1. Cliquer sur ***Add***.
1. Copier la ***Value*** de ce nouveau secret client en cliquant sur l'icône ***Copy to clipboard*** à côté.
![Copier la valeur du secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2153.png)

   {% snippet, "badgeInfo" %}
   Le secret client expiré peut être supprimé sans problème puisqu'il est expiré et ne peut plus être utilisé.
   {% endsnippet %}

1. Se connecter à {{ fr.DHUBB }} en utilisant votre {{ fr.DA }}.
   {% snippet, "badgeHelp" %}
   Si vous avez activé l'option ***Force SSO on all users*** dans votre configuration, vous ne pourrez pas vous connecter en utilisant votre {{ fr.DA }}. Dans ce cas, [contacter notre équipe de support](mailto:service@devolutions.net) pour demander la désactivation de cette option.
   {% endsnippet %}
1. Une fois connecté, aller à ***Administration – Authentification – Single Sign-On (SSO)***, puis sélectionner votre configuration Microsoft SSO.
1. Remplacer la clé ***Client secret key*** actuellement expirée par la nouvelle que vous avez copiée plus tôt.
![Remplacer la clé secrète du client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2323.png)
1. Cliquer sur ***Test Configuration***.
![Tester la Configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2224.png)
1. Si la connexion est réussie, votre compte se connectera avec Entra ID (anciennement Azure AD) et vous verrez un résumé de votre configuration.
1. Dans le ***Summary*** de votre configuration, cliquer sur ***Save***.
![Sauvegarder votre configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2225.png)

Vous et vos utilisateurs devriez maintenant être capables de vous connecter au hub en utilisant l'authentification unique Microsoft.

{% snippet, "badgeHelp" %}
Si vous rencontrez toujours des problèmes, [contacter notre équipe de support](mailto:service@devolutions.net).
{% endsnippet %}
