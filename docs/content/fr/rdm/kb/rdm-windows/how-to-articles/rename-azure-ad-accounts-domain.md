---
eleventyComputed:
  title: Renommer le domaine des comptes Azure AD
  description: Si vous utilisez {{ fr.RDM }} avec l'intégration Azure AD et changez le nom de domaine et le locataire Azure, vous devrez les modifier dans {{ fr.RDM }}.
---
Si vous utilisez {{ fr.RDM }} avec l'intégration Azure AD et changez le nom de domaine et le locataire Azure, vous devrez les modifier dans votre base de données pour que les utilisateurs puissent se connecter.

Vous pouvez utiliser le script SQL ci-dessous pour renommer vos utilisateurs avec le bon domaine.

{% snippet, "badgeNotice" %}
D'abord, assurer vous d'avoir une sauvegarde de votre base de données SQL puisque vous devrez effectuer des modifications dessus.
{% endsnippet %}

1. Dans SSMS, se connecter à votre serveur SQL Azure cloud/local et créer une nouvelle requête. Assurer vous qu'elle s'exécute contre votre base de données {{ fr.RDM }} et **non** votre master.
1. Utiliser le script suivant avec vos informations :
```
DECLARE @oldDomain as varchar(255) = '@oldDomain'
DECLARE @newDomain as varchar(255) = '@newDomain'

UPDATE UserSecurity 
SET Name=replace(Name,@oldDomain,@newDomain),
    UPN=replace(UPN,@oldDomain,@newDomain),
    ExternalID = NULL
WHERE UserType = 0

UPDATE UserProfile 
SET Name=replace(Name,@oldDomain,@newDomain)
```

Si vous avez changé votre locataire Azure, vous devez également faire ce qui suit :
1. Exécuter `Select*FROM sys.sysusers` pour obtenir une liste de tous les utilisateurs.
1. Pour chaque utilisateur, les supprimer et les recréer en utilisant le script suivant :
```
DROP USER [user@domain.com];
CREATE USER [user@domain.com] FROM EXTERNAL PROVIDER;
```
3. Une fois les étapes ci-dessus complétées, vous pourriez avoir besoin de "réinitialiser" le cache en changeant votre plan Azure et en revenant ensuite à l'ancien plan pour que vos utilisateurs puissent se connecter.

Après avoir complété les étapes ci-dessus, le SID contiendra les informations actuelles, et vous devriez être capable de vous authentifier avec les anciens utilisateurs.
