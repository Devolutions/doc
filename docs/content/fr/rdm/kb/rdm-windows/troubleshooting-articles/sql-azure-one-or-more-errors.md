---
eleventyComputed:
  title: SQL Azure une ou plusieurs erreurs se sont produites
---
Après avoir suivi les étapes dans [Configurer l'inscription d'application Azure Active Directory](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/create-app-registration/), vous recevez le message d'erreur ci-dessous :

System.AggregateException : Une ou plusieurs erreurs se sont produites. ---> System.AggregateException : Une ou plusieurs erreurs se sont produites
## Solution 1
Valider que le type d'***URI de redirection*** est défini sur ***Application mobile et de bureau***.
![!!KB4964](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4964.png)
Modifier la valeur de l'***URI de redirection*** après la création du manifeste nécessitera de supprimer la mauvaise redirection et d'ajouter la bonne dans la section ***Authentification***.
![!!KB4965](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4965.png)
## Solution 2
Si vous obtenez toujours cette erreur, veuillez nous envoyer votre [manifeste d'application Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-app-manifest) à [service@devolutions.net](mailto:service@devolutions.net) afin que nous puissions valider votre configuration.
