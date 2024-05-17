---
eleventyComputed:
  title: PAM password rotation policies
  description: "{{ en.DHUB }} boasts versatile password rotation policies, easily accessible via the Edit {{ en.VLT }} option."
---
{{ en.DHUB }} boasts versatile password rotation policies for PAM vaults, easily accessed by clicking the ellipsis button next to a {{ en.VLT }}'s name, then going to ***General*** – ***PAM password rotation policy***. 

These can be applied to many {{ en.VLT }} and entries, allowing for simple password rotation management.

![PAM password rotation policies](https://cdnweb.devolutions.net/docs/HUBB4005_2024_1.png)

OPTION | DESCRIPTION | 
|------|-------------|
| Inherited | The password rotation policy is inherited from the system {{ en.VLT }}. |
| None | No password rotation policy. |
| Manual only | Password are only reset manually. |
| Periodical | Allows manual password rotation and forces automatic rotations at set intervals (in hours or days). | 
| Mandatory on checkin | Forces password rotation upon checkin. | 