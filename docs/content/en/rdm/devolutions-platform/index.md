---
eleventyComputed:
  title: The Devolutions platform
  description: Our platform offers multiple products to help managing all of the aspects of an IT infrastructure.
---
{% tabs %}
{% tabItem "Windows" %}
Our platform offers multiple products to help managing all of the aspects of an IT infrastructure. 

| APPLICATIONS | DESCRIPTION | INSTALLATION |
|--------------|-------------|--------------|
| {{ en.RDM }} (RDM) | Application used to manage and centralize remote access technologies, privileged passwords, documents and shared information. | Windows, macOS, Linux, iOS, Android |
| [{{ en.RDMA }}](/rdm/windows/overview/the-devolutions-platform/rdm-agent/) | The {{ en.RDMA }} can run commands on remote hosts, but what is really useful is that it can send commands to multiple hosts at the same time. Since {{ en.RDM }} uses a secure RDP channel to communicate with the {{ en.RDMA }}, it can only operate against Windows-based hosts. | Windows |
| [{{ en.RDMJ }}](/rdm/windows/overview/the-devolutions-platform/rdm-jump/)  | {{ en.RDMJ }} connects to a remote host, often called a Jump Box, Service Host, or a Bastion Server, which in turn connects to other hosts. {{ en.RDMJ }} is actually an RDP in an RDP. | Windows |
| [{{ en.DVLS }} (DVLS)](/server/overview/what-is-server/) | {{ en.DVLS }} is a full-featured shared account and password management solution with add-on privileged access components. It deploys rapidly, implements easily, and delivers the core features of a comprehensive PAM solution. {{ en.DVLS }} is designed to meet the ever-expanding security requirements of SMBs, while remaining very affordable. | Windows             |
| [{{ en.DHUBB }}](/hub/overview/what-is-hub/) | {{ en.DHUBB }} is a secure and cloud-based password manager for teams. It empowers your organization to easily and securely {{ en.VLT }} and manage business-user passwords, along with other sensitive information, through a user-friendly web interface that can be quickly, easily and securely accessed via any browser. | Windows, macOS                                         |
| [{{ en.WBEX }}](/rdm/windows/workspace-browser-extension/overview/)        | The {{ en.WBEX }} is a free browser plugin used in conjunction with {{ en.RDM }}, {{ en.DVLS }}, and {{ en.DHUB }}, which allows users to securely inject passwords into websites using credentials stored in their {{ en.VLT }}s. | Windows, macOS |
{% endtabItem %}

{% tabItem "macOS" %}
Our platform offers multiple products to help managing all of the aspects of an IT infrastructure. 

| APPLICATIONS | DESCRIPTION | INSTALLATION |
|--------------|-------------|--------------|
| {{ en.RDM }} (RDM) | Application used to manage and centralize remote access technologies, privileged passwords, documents and shared information. | Windows, macOS, Linux, iOS, Android |
| [{{ en.RDMA }}](/rdm/windows/overview/the-devolutions-platform/rdm-agent/) | The {{ en.RDMA }} can run commands on remote hosts, but what is really useful is that it can send commands to multiple hosts at the same time. Since {{ en.RDM }} uses a secure RDP channel to communicate with the {{ en.RDMA }}, it can only operate against Windows-based hosts. | Windows |
| [{{ en.RDMJ }}](/rdm/windows/overview/the-devolutions-platform/rdm-jump/) | {{ en.RDMJ }} connects to a remote host, often called a Jump Box, Service Host, or a Bastion Server, which in turn connects to other hosts. {{ en.RDMJ }} is actually an RDP in an RDP. | Windows |
| [{{ en.DVLS }} (DVLS)](/server/overview/what-is-server/) | {{ en.DVLS }} is a full-featured shared account and password management solution with add-on privileged access components. It deploys rapidly, implements easily, and delivers the core features of a comprehensive PAM solution. {{ en.DVLS }} is designed to meet the ever-expanding security requirements of SMBs, while remaining very affordable. | Windows |
| [{{ en.DHUBB }}](/hub/overview/what-is-hub/) | {{ en.DHUBB }} is a secure and cloud-based password manager for teams. It empowers your organization to easily and securely manage business-user passwords, along with other sensitive information, through a user-friendly web interface that can be quickly, easily and securely accessed via any browser. | Windows, macOS |
| [{{ en.WBEX }}](/rdm/mac/workspace-browser-extension/overview/) | The {{ en.WBEX }} is a free browser plugin used in conjunction with {{ en.RDM }}, {{ en.DVLS }}, and {{ en.DHUB }}, which allows users to securely inject passwords into websites using credentials stored in their {{ en.VLT }}s. | Windows, macOS |
{% endtabItem %}
{% endtabs %}