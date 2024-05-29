---
eleventyComputed:
  title: SFTP vs. SCP entries
  description: In {{ en.RDM }}, you should always use SFTP entries over SCP entries unless SFTP does not work.
  keywords:
  - scp
  - sftp
---
In {{ en.RDM }}, you should always use SFTP entries over SCP entries unless SFTP does not work. For more information, see the explanations below.

## SFTP vs. SCP

SCP is not a file transfer protocol; it is a command for transferring one or more files from one host to another. This means that SCP does not support any way of listing the contents of a remote directory. Some SCP implementations use SFTP to do the listing, which is rather counterproductive since you can just use SFTP for transfer as well.

In {{ en.RDM }}, to implement SCP independently of SFTP, non-interactive commands are available to do what SCP does not support. Although this works, it is subject to problems linked to various server parameters, including language. It is also problematic for large directories and transfers.

By contrast, SFTP is a complete, formal protocol that guarantees excellent interoperability and scales very well for large directories and transfers. The server's language settings have no effect on the data exchanged, and files are better protected during transfers from actions taken by other parties.
