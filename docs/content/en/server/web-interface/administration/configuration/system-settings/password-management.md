---
eleventyComputed:
  title: Password management
---
The ***Password Management*** settings allow to set the minimal requirements for passwords that will be saved in the entries.
![Administration – System Settings – Password Management](https://cdnweb.devolutions.net/docs/en/server/ServerOp8076.png)

## Password Management

### Password
| Option                        | Description                                              |
|-------------------------------|----------------------------------------------------------|
| Password History              | Indicate the maximum saved password to keep in history.  |
| Password strength calculator  | Select the tool to use to analyze the password strength. |

### Advanced
| Option                                             | Description                                                        |
|----------------------------------------------------|--------------------------------------------------------------------|
| Disable password saving (shared)                   | Prevent users from saving passwords in entries.                    |
| Disable password saving (user specific settings)   | Prevent users from saving passwords in the User Specific Settings. |
| Allow reveal credentials (if enabled in the entry) | Shows the credentials if the box "Allow show credentials (everybody)" is check inside the entry. |
| Disable password saving (tools)                    | Prevent users from saving passwords in the Tools tab of a session. |
| Allow password variable for all entries            | Renders the $PASSWORD$ variable usable for this data source.       |
| Allow password in macro (send keys)                | Renders the $MACRO_PASSWORD$ variable usable for this data source. |

### Password template
| Option                 | Description                              |
|------------------------|------------------------------------------|
| Default template       | Default password template used by the system. Password Templates can be created in [Password Templates](/server/web-interface/administration/templates/password-templates/). |
| Force default template | Force the usage of the Default template. |

### Password validation
| Option                         | Description                                                              |
|--------------------------------|--------------------------------------------------------------------------|
| Forbidden password check       | A verification of the password against the [Forbidden Password](/server/web-interface/administration/configuration/system-settings/forbidden-password/) list is done if enabled. |
| Password template check        | <ul><li>None: No template will be used when creating a password.</li><li>Required: When a user creates a password, he will get a warning that the password does not respect the template. The user cannot save the password.</li><li>Warning: When a user creates a password, he will get a warning that the password does not respect the template. The user can save the password.</li></ul> |
| Compromised (pwned) check      | Verify if the used passwords have already been exposed to data breaches. |
