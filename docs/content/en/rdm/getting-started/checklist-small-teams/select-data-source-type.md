---
eleventyComputed:
  title: Select a data source type – small teams
  description: To help you select a data source type, here is a set of concerns and the list of data sources that can serve in such a context.
---

This topic is for small teams of at most 15 users that use the functionality offered by our Team Edition.

To help you select a data source type, here is a set of concerns and the list of SQL data sources that can serve in such
a a context.

{% snippet icon.shieldWarning %}
When choosing any type of data source that is not on-premises, you must consider the security of the data at rest and in
transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or
a [security provider](/rdm/commands/administration/security/security-providers/)
for [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). This ensures that only
you can read the data.

For additional security features such as encryption at rest and in transit, no direct database access, and
zero-knowkedge encryption, consider
our [enterprise data sources](/rdm/windows/getting-started/checklist-teams/select-data-source-type/).
{% endsnippet %}

| CONCERN                              |       SQL SERVER       |       SQL AZURE        |
|--------------------------------------|:----------------------:|:----------------------:|
| Database not accessible to end users |     Notes 1 and 2      |         Note 1         |
| AD accounts used for authentication  | {{ icon.badgeNotice }} |                        |
| Data stored on-premises              | {{ icon.badgeNotice }} |                        |
| Activity logs                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Data accessible globally             |         Note 3         | {{ icon.badgeNotice }} |
| Optional local cache of connections  | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |

## Notes

### Note 1

Administrators can create end user accounts without sharing passwords. A locked data source definition is imported for
each end user. This requires a lot of manual work by the administrator.

### Note 2

Integrated security a Microsoft technology that allows access to an instance of SQL Server without sending credentials,
using the token provided by the authentication in your Windows computer. This allows users to connect directly to the
database using other tools. It should not be used if you need to prevent direct access to the database.

Our SQL Server data source provides a third authentication option, namely the ***Custom (Devolutions)*** user type. This
allows the user to be impersonated and therefore not be made aware of the credentials used to connect to the database.
See [User Management](/rdm/windows/commands/administration/management/user-management/) for details.

### Note 3

You can expose a database to the Internet, but you have to use SSL/TLS to encrypt the traffic and also protect against
DDoS attacks. Cloud services like Azure have this concern at the forefront. The default firewall settings should be to
block everything and then add exceptions and rules. It is also necessary to open the minimum number of required ports,
add the numbers of those ports to the exception list, and filter all future requests based on their origin.  
