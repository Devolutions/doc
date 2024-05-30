---
eleventyComputed:
  title: Profiler
---
{{ en.RDM }} has a built-in profiler to diagnose connectivity issues with a data source.

{% snippet, "badgeInfo" %}
Displaying the Profiler window might slow down the operations on the data source. Proceed with care.
{% endsnippet %}

{% snippet, "badgeNotice" %}
To diagnose startup issues, you can enable the profiler from the command line as described in [Command Line Arguments](/rdm/kb/rdm-windows/how-to-articles/command-line-arguments/#usage-remotedesktopmanagerexe-parameters).
{% endsnippet %}

## Procedure

1. Once the Profiler is opened, refresh the data source.

{% snippet, "badgeInfo" %}
Holding the <kbd>Ctrl</kbd> key while performing the refresh should force a full reload of the data source, recreating the offline cache.
{% endsnippet %}

![Performance Profiling](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10442.png)

2. The Profiler data will appear in the ***Performance Profiling*** window.
![Refresh Data Source](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10438.png)
1. Click on ***Send Trace to Support*** to send the Profiler data logs to our support team. You can add a Marker when running multiple tests to separate them.

### Debug only

To learn more about the ***Debug only*** tab, please see [Debugging](/rdm/kb/rdm-windows/troubleshooting-articles/debugging/).
![Debug only](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10443.png)
