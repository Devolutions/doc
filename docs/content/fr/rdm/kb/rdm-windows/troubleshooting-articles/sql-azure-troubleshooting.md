---
eleventyComputed:
  title: Dépannage SQL Azure
---
## Lors de la tentative d'utilisation d'une source de données Azure SQL, vous recevez le message d'erreur ci-dessous ;
"IMPOSSIBLE DE CHARGER ADALSQL.DLL (AUTHENTIFICATION=ACTIVEDIRECTORYPASSWORD). CODE D'ERREUR : 0X2. POUR PLUS D'INFORMATIONS, VOIR HTTP<area>://GO.MICROSOFT.COM/FWLINK/?LINKID=513072"
![!!KB2007](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2007.png)
### Solution
Pour résoudre ce problème, veuillez consulter [Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/).
## Lors de la création d'un utilisateur avec authentification de compte azure active directory, vous voyez l'erreur ci-dessous ;
"LE PRINCIPAL '' NE PEUT PAS ÊTRE CRÉÉ. SEULES LES CONNEXIONS ÉTABLIES AVEC DES COMPTES ACTIVE DIRECTORY PEUVENT CRÉER D'AUTRES UTILISATEURS ACTIVE DIRECTORY."
![!!KB2008](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2008.png)
### Solution
Vous devez d'abord définir votre Admin Azure AD de SQL Server via le Portail Azure, puis vous connecter à {{ fr.RDM }} en utilisant ce compte Azure AD, à partir de là, vous pourrez créer de nouveaux comptes Azure AD (admin et non-admin). Ces nouveaux administrateurs pourront également faire de même.

Pour plus d'informations, veuillez consulter [Configurer l'authentification Azure SQL AD](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/).
