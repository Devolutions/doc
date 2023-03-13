---
title: Mobile Device Management Configuration from RDM
---
The Devolutions environment does not have a Mobile Device Management (MDM) tool to push the configuration to other user's iOS and/or Android devices. But with the use of an application like Workspace One it is possible to do so.

### Solution

1. Configure a {{ en.RDM }} iOS and/or Android device.
1. Export the configuration in a MDM file.
* In RDM iOS go to ***Options - Advanced - Generate Managed App Configuration file***
* In RDM Android go to ***Options - Generate Managed App Configuration file***
3. In your MDM application, use the exported MDM file to push it to all devices.
