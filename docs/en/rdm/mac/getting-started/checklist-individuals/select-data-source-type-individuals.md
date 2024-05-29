---
eleventyComputed:
  title: Select a data source type – individuals
  description: To help you select a data source, here is a set of concerns and the list of data sources that can serve in such a context.
---

This topic is primarily intended for individuals, but also for teams of three users or less who do not wish to set up
security.

To help you select a data source, here is a set of concerns and the list of data sources that can serve in such a
context. If you have multiple concerns, create the intersection of all sets to isolate a list of choices.

{% snippet icon.shieldWarning %}
When choosing any data source type that is not on-premises, you must consider the security of the data at rest and in
transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or
a [security provider](/rdm/mac/commands/administration/security-provider/)
for [advanced data sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you
can read the data.

For additional security features such as encryption at rest and in transit, no direct database access, and
zero-knowkedge encryption, consider
our [enterprise data sources](/rdm/mac/getting-started/checklist-teams/select-data-source-type-teams/).
{% endsnippet %}

| DATA SOURCE    |         LOCAL          | SELF-HOSTED |      CLOUD-BASED       | SHARED BETWEEN YOUR COMPUTERS |     WORKS OFFLINE      | MULTI-USER |
|----------------|:----------------------:|:-----------:|:----------------------:|:-----------------------------:|:----------------------:|:----------:|
| {{ en.DHUBP }} |                        |             | {{ icon.badgeNotice }} |    {{ icon.badgeNotice }}     | {{ icon.badgeNotice }} |            |
| SQLite         | {{ icon.badgeNotice }} |             |                        |                               | {{ icon.badgeNotice }} |            |
| XML            | {{ icon.badgeNotice }} |             |                        |                               | {{ icon.badgeNotice }} |            |
| {{ en.DOD }}   |                        |             | {{ icon.badgeNotice }} |    {{ icon.badgeNotice }}     | {{ icon.badgeNotice }} |            |
| Dropbox        |                        |             | {{ icon.badgeNotice }} |    {{ icon.badgeNotice }}     |                        |  *Note 1*  |
| Google Drive   |                        |             | {{ icon.badgeNotice }} |    {{ icon.badgeNotice }}     | {{ icon.badgeNotice }} |            |

## Notes

### Note 1

There is no protection against data contention issues. The data source is designed to allow one user to access the data
from multiple computers. Therefore, it is impossible for multiple users to use the data at the same time.

### Note 2

The master XML file is maintained by a single user and synchronized by {{ en.RDMMAC }} to a website that is hosted to
your specifications. Access to the data via a URL ensures that it is read-only for other users.  
