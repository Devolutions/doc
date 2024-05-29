---
eleventyComputed:
  title: Select a data source type – enterprises
  description: To help you select a data source type, here is a set of concerns and the list of data sources that can serve in such a context.
---

This topic is for enterprises that use the functionality offered by our Team Edition.

To help you select a data source type, here is a set of concerns and the list of data sources that can serve in such a a
context.

{% snippet icon.shieldWarning %}
When choosing any type of data source that is not on-premises, you must consider the security of the data at rest and in
transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or
a [security provider](/rdm/commands/administration/security/security-providers/)
for [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). This ensures that only
you can read the data.
{% endsnippet %}

| CONCERN                                         |     {{ en.DVLS }}      |     {{ en.DHUBB }}     |
|-------------------------------------------------|:----------------------:|:----------------------:|
| Self-hosted data                                | {{ icon.badgeNotice }} |                        |
| Cloud-hosted data                               |                        | {{ icon.badgeNotice }} |
| Database not accessible to end users            | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Encryption at rest and in transit               | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Zero-knowledge on sensitive data                |                        | {{ icon.badgeNotice }} |
| Privileged Access Management (PAM) module       | {{ icon.badgeNotice }} |         Note 1         |
| AD accounts used for authentication             | {{ icon.badgeNotice }} |                        |
| AD group membership used to assign permissions  | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Activity logs                                   | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Data accessible globally                        |         Note 2         | {{ icon.badgeNotice }} |
| Just-in-time (JIT) connections via {{ en.DGW }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |

## Notes

### Note 1

The ***Privileged Access Management*** module in {{ en.DHUBB }} is currently in beta development. Please contact
our [sales department](mailto:sales@devolutions.net) for further information.

### Note 2

You should not expose a {{ en.DVLS }} instance to the Internet without being able to protect it from DDoS attacks.
Strong passwords must be used, as well as obscure account names that are not easily deduced by social data mining.  
