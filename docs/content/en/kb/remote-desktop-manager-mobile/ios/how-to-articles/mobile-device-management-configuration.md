---
eleventyComputed:
  title: Mobile device management configuration from {{ en.RDM }}
  description: Use an application like Workspace One to push the configuration to other user's iOS and/or Android devices.
---
The Devolutions environment does not have a Mobile Device Management (MDM) tool to push the configuration to other user's iOS and/or Android devices. But with the use of an application like Workspace One, it is possible to do so.

## Solution
1. Configure a {{ en.RDM }} iOS and/or Android device.
1. Export the configuration in a MDM file.
    * In {{ en.RDMIOS }}, go to ***Settings – Advanced – Generate Managed App Configuration file (xml, plist)***.
    * In {{ en.RDMANDROID }}, go to ***Settings – Generate Managed App Configuration file (xml, plist)***.
1. In your MDM application, use the exported MDM file to push it to all devices.
