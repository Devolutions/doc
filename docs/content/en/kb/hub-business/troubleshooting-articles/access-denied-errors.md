---
eleventyComputed:
  title: Access denied errors
  description: In {{ en.DHUB }}, many situations can trigger an Access denied error. Here are the most common messages and their solutions.
---
In {{ en.DHUB }}, many situations can trigger an ***Access denied*** error. Here are the most common messages and their solutions.

{% snippet icon.badgeInfo %}
All other types of {{ en.DHUB }} errors are listed [here](/kb/hub-business/troubleshooting-articles/hub-errors/).
{% endsnippet %}

## Activate your Two-Step Verification on your account.
![Activate your Two-Step Verification on your account.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4770.png)

#### Description
The two-factor authentication login was enforced on the {{ en.DHUBB }}.
#### Solution
All users that connect to this {{ en.DHUBB }} need to have a two-factor authentication configured on their {{ en.DA }}. Please follow the displayed instructions.

---

## Enter your emergency reset code.
![Enter your emergency reset code.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4771.png)

#### Description
This user did a Forgot password on their {{ en.DA }} for their {{ en.DHUBP }}.
#### Solution
Enter your Emergency reset code. The Emergency reset kit was provided at the first login after the initial creation of the {{ en.DHUBP }}. It is a mandatory step in the creation process.

You can search for a PDF file titled "{{ en.DHUBP }} Emergency Kit". There is no way to recover it if the Emergency reset kit cannot be located.

---

## Please contact your administrator to be allowed to use the {{ en.WBEX }}.
![Please contact your administrator to be allowed to use the {{ en.WBEX }}.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2146.png)

#### Description
This user is not allowed to access this {{ en.DHUBB }} via the {{ en.WBEX }} {{ en.CTOOL }}.
#### Solution
The user needs to contact their {{ en.DHUBB }} administrator or any user that has the permission to manage users to enable their access.

---

## Please contact your administrator to enable your account.
![Please contact your administrator to enable your account.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4767.png)

#### Description
This user was disabled in {{ en.DHUBB }}.
#### Solution
The user needs to contact their {{ en.DHUBB }} administrator or any user that has the permission to manage users to enable their access.

---

## Please contact your administrator to request an invitation.
![Please contact your administrator to request an invitation.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4763.png)

#### Description
This user account does not exist in the {{ en.DHUBB }}.
#### Solution
An administrator or any user that has the permission to manage users needs to invite the user with their {{ en.DA }} in this {{ en.DHUBB }}.

---

## Please contact your administrator to request an invitation OR Enter your emergency reset code.
![Please contact your administrator to request an invitation OR Enter your emergency reset code.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4765.png)

#### Description
This user did a Forgot password on his {{ en.DA }} and is the owner of the {{ en.DHUBB }}.
#### Solution
Is there another administrator or any user that has the permission to manage users?

* **Yes**: Ask the other administrator or user with enough rights to re-invite the owner.
* **No**: The owner will need to enter their Emergency reset code.

The Emergency reset kit was provided at the first login after the initial creation of the {{ en.DHUBB }}. It is a mandatory step in the creation process.

You can search for a PDF file titled "{{ en.DHUB }} Emergency Kit huburlxxxx.devolutions.app". If you are a {{ en.DHUBB }} owner and cannot locate your Emergency reset kit PDF file and do not have another administrator or any user that has the permission to manage users, please contact our [support team](mailto:service@devolutions.net) by email.

---

## We detected a forgot password. In order to regain access to this Hub, please contact your administrator to request a new invitation.
![We detected a forgot password. In order to regain access to this Hub, please contact your administrator to request a new invitation.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4764.png)

#### Description
This user did a Forgot password on their {{ en.DA }} and is not the owner. This action cuts the link with the {{ en.DHUBB }}.

Note: If the {{ en.DA }} has more than one hub, it will cut the link to all of them.
#### Solution
An administrator or any user that has the permission to manage users needs to re-invite this user. This invitation will establish the link with the {{ en.DHUBB }}.

---

## We detected a forgot password or a lost your phone (unpaired). In order to regain access to this Hub, please contact your administrator to request a new invitation.
![We detected a forgot password or a lost your phone (unpaired). In order to regain access to this Hub, please contact your administrator to request a new invitation.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2219.png)

#### Description
This user's phone pairing is broken for the private key push notification storage method.
#### Solution
1. Go to [Private Key Storage Methods](https://portal.devolutions.com/security/private-key) in your {{ en.DPORTAL }}.
1. Delete the push entry related to the account on your phone.
1. Remove the QR code or Password linked to the account, if any.
1. Click on the ***Forgot your phone*** button in the ***Store on a mobile device*** method.
1. Follow the push notification configuration process.
1. Ask an administrator or any user that has the permission to manage users for a new invitation to the {{ en.DHUBB }}.

---

## {{ en.WS }} is disabled for this user on this hub.
![{{ en.WS }} is disabled for this user on this hub.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2209.png)

#### Description
This user is not allowed to access this {{ en.DHUBB }} via the {{ en.WAPPS }}.
#### Solution
The user needs to contact their {{ en.DHUBB }} administrator or any user that has the permission to manage users to enable their access.

---

## Your IP address is not allowed.
![Your IP address is not allowed.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4768.png)

#### Description
The IP address of this user is not in the IP Allowlist.
#### Solution
The user needs to contact their {{ en.DHUBB }} administrator.

---

## Your license is invalid; please contact your administrator. If you believe this is an error, contact support.
![Your license is invalid; please contact your administrator. If you believe this is an error, contact support.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4766.png)

#### Description
The trial or paid license for {{ en.DHUBB }} has expired.
#### Solution
The {{ en.DHUBB }} owner must [buy or renew the license](https://store.devolutions.net/store).

---

## Your hub has been disabled; contact your administrator.
![Your hub has been disabled; contact your administrator.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4769.png)

#### Description
This {{ en.DHUBB }} was locked or a bug occurred between the license and the link to the {{ en.DHUBB }}.
#### Solution
Please contact our [support team](mailto:service@devolutions.net).
