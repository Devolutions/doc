---
eleventyComputed:
  title: All Files Access permission denied
  description: Google has denied us the All Files Access permission. Without it, some functionalities are either unavailable or significantly impaired.
---
Google has enforced stricter privacy policies, denying us the **All Files Access** permission. This permission is essential for several features of our application, and without it, some functionalities are either unavailable or significantly impaired. These features include:

* **Split view**: This feature is no longer available for FTP, SMB, Google Drive, and Azure Blob Storage sessions. Users will not be able to browse the file structure on their local device or easily copy and move files between the device and the remote session. Only the file structure on the remote host will be visible, making file management cumbersome.
* **RDP sessions**: Client file browsing from remote host: Remote hosts can no longer browse through client files on the Android device, hindering file manipulation between the remote host and the client.
* **SSH sessions**: Zmodem support for uploading and downloading is no longer available.
* **SFTP sessions**: Original timestamps are not preserved when downloading files. The downloaded file will have the timestamp of the actual download rather than the original file's timestamp.

We apologize for any inconvenience this may cause and are committed to improving the user experience. We will also work with Google to try to regain the **All Files Access** permission that we previously had until it was recently revoked for reasons we are trying to figure out.