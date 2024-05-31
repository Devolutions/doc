---
eleventyComputed:
  title: Configurer SQL Server pour les utilisateurs protégés avec sécurité intégrée
---
Voici les étapes pour configurer votre SQL Server afin de permettre à vos ***Utilisateurs Protégés*** de se connecter à la base de données en utilisant la méthode d'authentification de Sécurité Intégrée.

Selon Microsoft, ***Utilisateurs Protégés*** bloque l'utilisation des [hachages NTLM](https://docs.microsoft.com/en-us/windows-server/security/credentials-protection-and-management/protected-users-security-group#domain-controller-protections-for-protected-users). Il est cependant possible de configurer SQL Server pour utiliser également [Kerberos pour la Sécurité Intégrée](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/register-a-service-principal-name-for-kerberos-connections). La bonne nouvelle est que cela est pris en charge par défaut par {{ fr.RDM }}.

Pour que SQL Server prenne en charge l'authentification Kerberos, des SPN doivent être créés. Par défaut, le service fonctionne sous des comptes qui n'ont pas les permissions requises. Nous soupçonnons que vous pourriez avoir les messages suivants lorsque SQL Server démarre (vous pouvez voir les journaux dans SSMS sous ***Gestion des journaux SQL Server***).

![!!KB4657](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4657.png)

Vous devrez configurer le service SQL Server pour qu'il s'exécute sous ***Network Service*** car il dispose des [permissions nécessaires](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/register-a-service-principal-name-for-kerberos-connections?view=sql-server-ver15#Permissions) Selon [cet article](https://dba.stackexchange.com/questions/180064/what-should-my-spn-entries-look-like-for-each-sql-instance/180147#180147), il est également possible d'accorder les permissions de créer des SPN à un compte de service. Vous devrez également changer le compte dans le Gestionnaire de Configuration SQL Server.
![!!KB4658](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4658.png)
![!!KB4659](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4659.png)

Cependant, sur notre serveur, SQL Server signalait toujours qu'il était incapable d'enregistrer les SPN. Nous avons utilisé [Microsoft Kerberos Configuration Manager pour SQL Server](https://www.microsoft.com/en-ca/download/details.aspx?id=39046) pour corriger les SPN. Il montre des boutons cliquables dans les colonnes Action.
![!!KB4660](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4660.png)

Après avoir redémarré le service SQL Server, vous devriez voir “The SQL Server Network Interface library successfully registered the Service Principal Name (SPN) [ **MSSQLSvc/vdownsrv-sql3.downhill.loc:1433** ] for the SQL Server service.” dans les journaux.

À ce stade, la connexion devrait à nouveau fonctionner dans {{ fr.RDM }}.
