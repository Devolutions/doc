---
eleventyComputed:
  title: Performance data sources
---
This category affects all data source refreshes  

1. Initial load at program startup.
1. Prior to an Edit operation: by default, we reload the entry to ensure that we are working on the current version.
1. Prior to establishing a connection: we need to insert in the activity in our Logs.
1. Whenever you use Refresh: Depending on your cache settings, we typically just get the changes that occurred since your last refresh.
1. Whenever you use the Tree View.  

SQL Server has certain particularities that, if the default configuration is used, will cause performance degradation as time goes by. Please consult [SQL Server Performance](/kb/remote-desktop-manager/troubleshooting-articles/sql-server-performance-troubleshooting/).
## Problem 1
Heavy usage of custom images.
### Solution
Custom images need to be stored in the data source, this results in the size of the configuration becoming problematic if there are too many entries using them.  

If that becomes the case, it would be better to revert to built-in images.
## Problem 2
Heavy usage of rtf description.
### Solution
RTF in itself is not a real issue until you decide to embed images in the description. This results in the same problem as using custom images, namely the size of the configuration becoming too large.  

If that becomes the case, reduce the size of your descriptions.
## Problem 3
Classic UI.
### Solution
The new ribbon UI is modern and allows for infinite variations of panel organization, but it does take more calculations by the UI layer. On most systems this is not a cause for noticeable performance slowdown, but on others setting the User Interface to Classic UI (v7.x) in the ***General Options*** tab will definitely help.
