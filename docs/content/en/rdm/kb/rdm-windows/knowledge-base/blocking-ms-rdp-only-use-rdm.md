---
eleventyComputed:
  title: Restricting MS RDP access to {{ en.RDM }} only
  description: Many organizations aim to centralize their Remote Desktop connections, restricting them to initiate solely from {{ en.RDM }}.
---
Many organizations aim to centralize their Remote Desktop connections, restricting them to initiate solely from {{ en.RDM }}. Here are some considerations for implementing this strategy within your organization.

### Considerations

Merely blocking Microsoft RDP (**mstsc.exe**) does not sufficiently secure access, as it leaves potential vulnerabilities open. Users might bypass this by employing alternatives like Microsoft RDC Manager or unauthorized versions of {{ en.RDM }}, potentially using settings outside of approved parameters. A more secure approach involves embedding session credentials within {{ en.RDM }} itself. This method ensures that users can establish remote connections without directly accessing the credentials, thereby enforcing the use of {{ en.RDM }}.

However, if you believe that simply disabling Microsoft RDP meets your security needs, guidance on this process is available in Microsoft's article on [How to Enable or Disable Remote Desktop via Group Policy Windows 2008](https://social.technet.microsoft.com/wiki/contents/articles/4980.how-to-enable-or-disable-remote-desktop-via-group-policy-windows-2008.aspx).

Our recommended solution entails utilizing a secure gateway, shielded by a password unknown to the end user. This can be implemented via an SSH tunnel or our proprietary Jump feature, combined with firewall adjustments on remote hosts to block any connections from IP addresses not recognized by your designated gateways.

![Gateway diagram](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4436.png)

SSH tunnels are particularly effective; they can operate on a virtual machine using any *nix distribution and require minimal RAM and HDD space. Moreover, using SSH tunnels compels users to rely on {{ en.RDM }} since the tunnel credentials are not domain credentials and must be stored within the application itself.
