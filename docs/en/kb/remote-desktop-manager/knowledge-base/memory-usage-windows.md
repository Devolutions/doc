---
eleventyComputed:
  title: Memory usage – Windows
---
{{ en.RDM }} is built using the .NET Framework, as such it presents the memory usage patterns typical of that framework.

## .Net Memory usage patterns

The framework operates a Garbage Collector (GC) which reclaims freed memory regularly, but if the Operating System is not under pressure it will not aggressively ask for memory back from our process. Simply looking at the task scheduler memory column is misleading as there are subtleties in interpreting the Private Bytes, Virtual Bytes, and Working Set values.  Some even say that these are inappropriate to diagnose memory leaks.

## Factors to consider

* {{ en.RDM }} is mostly an integration of multiple technologies, this means that most of the features that are used invoke a third-party technology of some sort. Each technology uses memory in a manner specific to its own architecture.
* The type of data source and the number of entries that are loaded on startup is a big part of the equation. The size of each entry, as well as the presence of attachments, all have a great impact.
* Out of the box, we host a web control to display a welcome page, there is a listener for interaction with {{ en.DWL }}, we monitor for products updates, etc.  Turning off certain features may help reducing the footprint.

## Clearing the unused memory

Simply displaying the About box of the application, then closing it, clears the unused memory.  This may help in establishing a new baseline prior to performing testing scenarios.
