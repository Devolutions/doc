---
eleventyComputed:
  title: SSH algorithm support
  description: In versions 2020.3.13.0 and later of {{ en.RDM }}, an error message can appear when opening a Secure Shell (SSH) connection.
  keywords:
  - SSH
  - Algorithm
---
In versions 2020.3.13.0 and later of {{ en.RDM }}, an error message can appear when opening a Secure Shell (SSH) connection: "An unexpected error has occurred: Error code SSH_FAIL_NO_MATCH (-3006) Unable to find a matching algorithm with the SSH server".

## Local Solution for one entry
{% snippet icon.shieldCaution %}
{{ en.RDM }} now has a selection of algorithms for the SSH session type. Please note that the **unsecured** ones are not enabled by default. We therefore recommend that you check the algorithms directly on your server for security purposes. Otherwise, you can follow the steps below to resolve this issue.
{% endsnippet %}

1. Right-click on your entry and select ***Properties***. Make sure you are in ***Common*** – ***General*** in the left menu.
1. In the ***Advanced*** tab, set the ***Algorithm support*** option to ***Custom***.
![Custom Algorithm support](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4653.png)
1. Click on the button that appeared to the right of the ***Algorithm support*** setting.
1. In the new ***SSH*** window, select the missing algorithms from the list.
   {% snippet icon.badgeCaution %}
   Make sure to go through the algorithms in **all tabs** before proceeding.
   {% endsnippet %}

   ![Missing Algorithms Selection](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2074.png)
5. Click ***OK*** in the ***SSH*** window, then ***OK*** again in the window of the entry properties.
   {% snippet icon.badgeInfo %}
   You may have to restart {{ en.RDM }} for the solution to take effect.
   {% endsnippet %}
1. Test your connection. If you are still unable to connect after enabling the algorithms, return to the ***Advanced*** tab in your entry properties and check the ***Skip environment variable setup*** box and click ***OK***.
![Skip environment variable setup](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4702.png)

## Global Solution for all entries
It is also possible to globally reactivate all the algorithms in {{ en.RDM }} via the ***File*** – ***Options*** – ***Types*** – ***Terminal*** – ***Algorithm Support*** menu. Just select the missing algorithms, then click ***OK***.
{% snippet icon.badgeCaution %}
Make sure to go through the algorithms in **all tabs**.
{% endsnippet %}

{% snippet icon.badgeInfo %}
You may have to restart {{ en.RDM }} for the solution to take effect.
{% endsnippet %}

![File – Options – Types – Terminal – Algorithm Support](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4654.png)

## Custom Powershell command script
If you still encounter issues on a specific entry, you can run the following PowerShell script in {{ en.RDM }}.
1. Right-click on the problematic entry, then select ***Edit – Edit (Special Actions)***.
1. In the ***Edit – Special Action Selection*** window, select the ***Custom PowerShell Command*** general special action and click ***OK***.
![Edit – Special Action Selection](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2131.png)
1. Paste the following script in the ***Command*** field:
   ```powershell
   $Connection.Terminal.AlgorithmSupportMode = "Custom"
   $Connection.Terminal.SshAlgorithmCipherList = "aes256-gcm@openssh.com=True;aes128-gcm@openssh.com=True;aes128-cbc=True;aes192-cbc=True;aes256-cbc=True;rijndael-cbc@lysator.liu.se=True;3des-cbc=True"
   $Connection.Terminal.SshAlgorithmHostKeyList = "ssh-dss=True"
   $Connection.Terminal.SshAlgorithmKexList = "diffie-hellman-group14-sha1=True;diffie-hellman-group-exchange-sha1=True;diffie-hellman-group1-sha1=True"
   $Connection.Terminal.SshAlgorithmMaclist = "hmac-sha1-96=True;hmac-sha1=True;hmac-md5-96=True;hmac-md5=True"
   $RDM.Save();
   ```
1. Click ***OK***.
![Custom PowerShell Command](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4758.png)
1. A notification should confirm the success of the script. Click ***OK*** and retest your session.
