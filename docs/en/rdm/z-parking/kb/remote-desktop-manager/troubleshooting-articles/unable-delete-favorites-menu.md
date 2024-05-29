---
eleventyComputed:
  title: Unable to delete from the favorites menu
---
The ***Delete*** option is now disabled by default in the ***Favorites*** menu for {{ en.RDM }} version 2021.1.38.0 and later.
## Solution
1. Close {{ en.RDM }}.
1. Find your **RemoteDesktopManager.cfg** file.
1. Open the file with Notepad++.
1. Find and change the ***AllowDeleteInFavorites*** options from ***False*** to ***True***.
1. Save the file and launch {{ en.RDM }}.
