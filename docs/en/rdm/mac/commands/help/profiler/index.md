---
eleventyComputed:
  title: Profiler
---
{{ en.RDMMAC }} has a built-in profiler to diagnose connectivity issues with a data source.

{% snippet icon.badgeInfo %}
Too many custom images could dramatically increase the size of the data source and cause load time issue.
{% endsnippet %}

## Procedure

1. Select ***Help - Profiler***.
![Help – Profiler](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10470.png)
1. Move the window to the side to display the {{ en.RDM }} main window and refresh the data source by using the refresh button or by using ***File – Refresh***.
{% snippet icon.badgeInfo %}
Holding the <kbd>Ctrl</kbd> key while performing the refresh will force a full reload of the data source, thereby ignoring the cache.
{% endsnippet %}

![Perfromance Profiling](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10471.png)

3. The Profiler data will appear in the Performance Profiler window.
![Performance Profiling result](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10472.png)
4. Click on Send Trace to Support to send the Profiler data logs to our support team. You can add a Marker when running multiple tests to separate them.
![Send Trace to Support](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10473.png)

### Debug only

To learn more about the debug option please see [Debug only](/rdm/mac/commands/help/profiler/debug-only/).
