---
eleventyComputed:
  title: "{{ en.RDM }} does not start"
  description: While modernizing our {{ en.RDM }} for Windows build process, an issue went undetected.
---
While modernizing our {{ en.RDM }} for Windows build process, an issue went undetected. A tool that performs actions against our code base has introduced an issue within the application.  

The result of this issue is that the following {{ en.RDM }} will no longer allow you to start the application after a given date (see list below).

| Version     | Expires on |
|-------------|------------|
| 2022.1.19.0 | 2022-03-29 |
| 2022.1.20.0 | 2022-03-31 |
| 2022.1.21.0 | 2022-04-05 |

The cause was the improper activation of the license for the tool during the automated build process. In other words, even though we held the proper licensing, the license information was not being passed to the tool.

## Solution
We have since resolved the issue in all builds greater or equal to 2022.1.22.0. Please visit our [download page](https://devolutions.net/remote-desktop-manager/home/download) to get the latest release.
