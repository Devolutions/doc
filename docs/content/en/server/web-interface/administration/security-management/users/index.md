---
eleventyComputed:
  title: Users
  order: 10
---
***Users*** is where you can create, import and manage users. To access the user management, navigate to ***Administration – Users***. Click on a user to configure specific settings and permissions. 

## Settings
![Administration – Users](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6082.png)

{% snippet, "badgeInfo" %}
***User Specific Settings*** are shared between {{ en.RDM }}, {{ en.DVLS }} and {{ en.DHUB }}.
{% endsnippet %}

### Global Options

| Option                                                                                 | Description                         |
|----------------------------------------------------------------------------------------|-------------------------------------|
| ![!!add-large](https://cdnweb.devolutions.net/docs/docs_common_add-large.png)         | Add a user.                         |
| ![!!import-bold](https://cdnweb.devolutions.net/docs/docs_common_import-bold.png)     | Import users from LDAP or Azure.    |
| ![!!authentification-migration](https://cdnweb.devolutions.net/docs/docs_common_authentification-migration.png) | Migrate users and user groups from one authentication provider to another. |
| ![!!user-sync](https://cdnweb.devolutions.net/docs/docs_common_user-sync.png)         | Synchronize users from provider(s). |
| ![!!refresh-large](https://cdnweb.devolutions.net/docs/docs_common_refresh-large.png) | Refresh users list.                 |

![Administration – Users, More](https://cdnweb.devolutions.net/docs/DVLS4037_2024_2.png)

### User Options

| Option                                                                                             | Description                                           |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| <svg xmlns="http://www.w3.org/2000/svg" class="dvl-icon-edit" width="24" height="24" viewBox="0 0 24 24"><path d="M3,16.315l-1,5.685l5.689,-1l10.951,-10.953l-4.687,-4.687l-10.953,10.955Zm18.634,-9.263c0.487,-0.487 0.487,-1.275 0,-1.762l-2.924,-2.924c-0.487,-0.487 -1.275,-0.487 -1.762,0l-2.288,2.287l4.687,4.687l2.287,-2.288Z"/></svg>                              | Edit user settings.                                   |
| <svg xmlns="http://www.w3.org/2000/svg" class="dvl-icon-user-group" width="24" height="24" viewBox="0 0 24 24"><path d="M20.53,12.577c-0.089,-0.895 -0.632,-1.577 -1.532,-1.577l-5.995,0c-0.9,0 -1.443,0.682 -1.533,1.577l-0.46,4.054c-0.103,1.031 0.641,1.925 1.678,1.925l0.315,0l0.474,3.569c0.064,0.504 0.378,0.875 0.845,0.875l3.356,0c0.467,0 0.781,-0.371 0.846,-0.875l0.474,-3.569l0.315,0c1.037,0 1.781,-0.894 1.678,-1.925l-0.461,-4.054Zm-10.564,6.777c-0.71,-0.784 -1.054,-1.85 -0.946,-2.923l0.462,-4.08c0.132,-1.326 0.845,-2.378 1.867,-2.928c-0.083,-0.131 -0.15,-0.272 -0.221,-0.41c-0.044,-0.004 -0.085,-0.013 -0.13,-0.013l-5.996,0c-0.9,0 -1.443,0.682 -1.533,1.577l-0.459,4.053c-0.103,1.031 0.641,1.925 1.678,1.925l0.315,0l0.474,3.569c0.064,0.505 0.378,0.876 0.845,0.876l3.356,0c0.467,0 0.781,-0.371 0.846,-0.875l0.033,-0.249c-0.214,-0.152 -0.413,-0.326 -0.591,-0.522Zm6.034,-16.354c1.932,-0 3.5,1.568 3.5,3.5c0,1.932 -1.568,3.5 -3.5,3.5c-1.932,-0 -3.5,-1.568 -3.5,-3.5c0,-1.932 1.568,-3.5 3.5,-3.5Zm-5.471,3.91c-0.01,-0.136 -0.03,-0.27 -0.03,-0.41c0,-1.08 0.318,-2.086 0.858,-2.937c-0.412,-1.475 -1.751,-2.563 -3.357,-2.563c-1.933,-0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c0.997,-0 1.891,-0.422 2.529,-1.09Z"/></svg>                   | Assign user groups to user account.                   |
| <svg xmlns="http://www.w3.org/2000/svg" class="dvl-icon-vault" width="24" height="24" viewBox="0 0 24 24"><path d="M12,1c-1.63,0 -3.172,0.364 -4.563,1l-5.437,0l0,4l0.787,0c-1.126,1.726 -1.787,3.785 -1.787,6c0,2.215 0.661,4.274 1.787,6l-0.787,0l0,4l5.437,0c1.391,0.636 2.933,1 4.563,1c6.075,0 11,-4.925 11,-11c0,-6.075 -4.925,-11 -11,-11Zm0,20c-4.971,0 -9,-4.029 -9,-9c0,-4.971 4.029,-9 9,-9c4.971,0 9,4.029 9,9c0,4.971 -4.029,9 -9,9Zm5.715,-7.132l-1.884,-0.78c0.099,-0.348 0.169,-0.708 0.169,-1.088c0,-0.38 -0.07,-0.74 -0.169,-1.088l1.884,-0.78c0.235,-0.097 0.347,-0.367 0.25,-0.603c-0.097,-0.236 -0.367,-0.347 -0.603,-0.25l-1.884,0.781c-0.362,-0.647 -0.892,-1.177 -1.538,-1.538l0.781,-1.884c0.097,-0.235 -0.014,-0.505 -0.25,-0.603c-0.236,-0.098 -0.505,0.014 -0.603,0.25l-0.78,1.884c-0.348,-0.099 -0.708,-0.169 -1.088,-0.169c-0.38,0 -0.74,0.07 -1.088,0.169l-0.78,-1.884c-0.097,-0.235 -0.367,-0.347 -0.603,-0.25c-0.236,0.097 -0.347,0.367 -0.249,0.603l0.781,1.884c-0.647,0.362 -1.177,0.892 -1.539,1.538l-1.884,-0.78c-0.235,-0.097 -0.505,0.014 -0.603,0.25c-0.098,0.236 0.014,0.505 0.25,0.603l1.884,0.78c-0.099,0.347 -0.169,0.707 -0.169,1.087c0,0.38 0.07,0.74 0.169,1.088l-1.884,0.78c-0.235,0.097 -0.347,0.367 -0.25,0.603c0.097,0.235 0.367,0.347 0.603,0.25l1.884,-0.781c0.362,0.647 0.892,1.177 1.538,1.538l-0.78,1.884c-0.097,0.235 0.014,0.505 0.25,0.603c0.236,0.098 0.505,-0.014 0.603,-0.25l0.78,-1.884c0.347,0.099 0.707,0.169 1.087,0.169c0.38,0 0.74,-0.07 1.088,-0.169l0.78,1.884c0.097,0.235 0.367,0.347 0.603,0.25c0.236,-0.097 0.347,-0.367 0.25,-0.603l-0.781,-1.884c0.647,-0.362 1.177,-0.892 1.538,-1.538l1.884,0.781c0.235,0.097 0.505,-0.014 0.603,-0.25c0.097,-0.236 -0.014,-0.505 -0.25,-0.603Zm-5.715,0.132c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2Z"/></svg>                      | Assign {{ en.VLT }}s to the user account.             |
| <svg xmlns="http://www.w3.org/2000/svg" class="dvl-icon-activity-logs" width="24" height="24" viewBox="0 0 24 24"><path d="M23,13.686l0,-6.686l-22,0l0,14l12.537,0c1.099,1.225 2.688,2 4.463,2c3.314,0 6,-2.686 6,-6c0,-1.226 -0.369,-2.364 -1,-3.314Zm-0.05,3.814l-1.059,0l-0.906,-3.622c-0.121,-0.485 -0.801,-0.511 -0.959,-0.037l-1.618,4.855l-1.46,-2.92c-0.184,-0.369 -0.71,-0.369 -0.894,0l-0.863,1.724l-0.691,-0.001c-0.276,0 -0.5,0.224 -0.5,0.5c-0,0.276 0.224,0.5 0.5,0.5l1,0c0.189,0 0.362,-0.107 0.447,-0.276l0.553,-1.106l1.553,3.106c0.199,0.398 0.781,0.357 0.922,-0.065l1.457,-4.371l0.583,2.334c0.055,0.223 0.255,0.379 0.485,0.379l1.246,0c-0.641,2.023 -2.511,3.5 -4.746,3.5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5c2.761,0 5,2.239 5,5c0,0.171 -0.034,0.333 -0.05,0.5Zm-12.95,-2.5l-5,0l0,-1l5,0l0,1Zm0,-2l-5,0l0,-1l5,0l0,1Zm0,-2l-5,0l0,-1l5,0l0,1Zm13,-8l-22,0l0,3l22,0l0,-3Z"/></svg>             | See user activity report.                             |
| <svg xmlns="http://www.w3.org/2000/svg" class="dvl-icon-user-disable" width="24" height="24" viewBox="0 0 24 24"><path d="M21.615,13.5l-3.115,3.115l-3.115,-3.115l-1.385,1.385l3.115,3.115l-3.115,3.115l1.385,1.385l3.115,-3.115l3.115,3.115l1.385,-1.385l-3.115,-3.115l3.115,-3.115l-1.385,-1.385Zm-10.444,7.615l3.116,-3.115l-3.116,-3.115l0.857,-0.857l-2.028,-2.028l-2.04,-0c-1.301,-0 -2.391,0.952 -2.521,2.201l-0.76,5.111c-0.149,1.439 0.822,2.688 2.321,2.688l5.056,-0l-0.885,-0.885Zm0.829,-20.115c2.76,-0 5,2.24 5,5c-0,2.76 -2.24,5 -5,5c-2.76,-0 -5,-2.24 -5,-5c-0,-2.76 2.24,-5 5,-5Z"/></svg>          | Disable user.                                         |
| <svg xmlns="http://www.w3.org/2000/svg" class="dvl-icon-password-management" width="24" height="24" viewBox="0 0 24 24"><path d="M19,9l-1,0l0,-2c0,-3.314 -2.686,-6 -6,-6c-3.314,0 -6,2.686 -6,6l0,2l-1,0c-0.552,0 -1,0.448 -1,1l0,11c0,0.552 0.448,1 1,1l14,0c0.552,0 1,-0.448 1,-1l0,-11c0,-0.552 -0.448,-1 -1,-1Zm-3,6.8l-2.96,-0.199l1.652,2.599l-1.385,0.8l-1.307,-2.799l-1.307,2.799l-1.386,-0.8l1.652,-2.599l-2.959,0.199l0,-1.6l2.96,0.199l-1.653,-2.599l1.386,-0.8l1.307,2.799l1.307,-2.799l1.386,0.8l-1.652,2.599l2.959,-0.199l0,1.6Zm0,-6.8l-8,-0l0,-2c0,-2.209 1.791,-4 4,-4c2.209,-0 4,1.791 4,4l0,2Z"/></svg> | Change password for {{ en.DVLS }} user accounts only. |
| <svg xmlns="http://www.w3.org/2000/svg" class="dvl-icon-delete" width="24" height="24" viewBox="0 0 24 24"><path d="M3,5l0,2l1.5,0l1.412,14.594c0.049,0.79 0.705,1.406 1.497,1.406l9.182,0c0.792,0 1.448,-0.616 1.497,-1.406l1.412,-14.594l1.5,-0l0,-2l-18,-0Zm8,13l-1,0l0,-9l1,0l0,9Zm3,0l-1,0l0,-9l1,0l0,9Zm5,-16l-4.277,0c-0.347,-0.595 -0.985,-1 -1.723,-1l-2,0c-0.738,0 -1.376,0.405 -1.723,1l-4.277,0c-0.552,0 -1,0.448 -1,1l0,1l16,0l0,-1c0,-0.552 -0.448,-1 -1,-1Z"/></svg>                           | Delete user.                                          |

## Active users and license owners

To find out the number of active users, go to ***Administration*** – ***Users*** and sort the list according to ***Last activity***. Then, by counting the rows or pages of users who have been inactive (say for a period of 3 months or more), you can figure out the number of active users by subtracting the inactive users from the total number of users.

![Administration – Users, Last activity](https://cdnweb.devolutions.net/docs/DVLS4034_2024_2.png)

Furthermore, {{ en.RDM }} licenses can be unassigned and then auto-assigned to make sure only active users get a license. To do this, go to ***Administration*** – ***Licenses*** – ***Assigned to***. Then, click on ***Clear all*** before going to ***General*** and checking ***Auto assign***. Keep in mind that it may take a few weeks to get an accurate number.

![Administration – Licenses, Clear all](https://cdnweb.devolutions.net/docs/DVLS4035_2024_2.png)

![Administration – Licenses, Auto assign](https://cdnweb.devolutions.net/docs/DVLS4036_2024_2.png)