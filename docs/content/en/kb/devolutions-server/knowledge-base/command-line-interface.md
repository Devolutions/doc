---
eleventyComputed:
  title: Command line interface
  description: A Command Line Interface (CLI) is a {{ en.CTOOL }} which allows {{ en.DVLS }} users to access credentials with the command line.
  keywords:
  - CLI
  - Command Line Interface
---
A Command Line Interface (CLI) is a {{ en.CTOOL }} which allows {{ en.DVLS }} users to access credentials with the command line.
Listed below are the available command line:

## Config

#### Parameters:
`-v or --vault`
The default {{ en.VLT }} id to use for the other commands: 0000000-0000-0000-0000-000000000000

`-s or --server`
The address of the server to connect to.
If you call config without parameters, it will return the current settings.

#### Options:
`-j or--json`
The command output will be formatted in JSON format.

#### Examples:
![{{ en.DVLS }} CLI examples](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8006.png)

## Get
Returns the credentials of an entry based on its id.

#### Parameters:
The entry's id can be found in its advance property or in the last part of its URL.
![Entry ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4351.png)

#### Options:
`-j or --json`
The command output will be formatted in JSON format.

`-d or --domain`
Only returns the domain.

`-u or --username`
Only returns the username.

`-p or --password`
Only returns the password.

#### Examples:
```
DPS> get 4574725f-0d24-4cbc-a116-a5270179e251
domain: dddd
username: asdf
password: 12345

DPS> get 4574725f-0d24-4cbc-a116-a5270179e251 --json
{
  "domain": "dddd",
  "username": "asdf",
  "password": "12345"
}
DPS> get 4574725f-0d24-4cbc-a116-a5270179e251 -u
asdf
DPS> get 4574725f-0d24-4cbc-a116-a5270179e251 -p
12345
```

![GET Command Line Interface examples](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4352.png)

## Login

#### Parameters:
First parameter: the username (the key, if the user is of the type application)
Second parameter: the password (the secret, if the user is of the type application)
![Application – General](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4353.png)

The user/application must have the right to use the CLI
![Edit user – Applications](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4354.png)

#### Options:
`-j or --json`
The command output will be formatted in JSON format.

#### Examples:
`DPS> login dsavard 12345`
![Command Line Interface examples](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4355.png)

## Logout
Logout the current user.
![Command Line Interface examples](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4356.png)

## Set
Update the credentials of an entry.

#### Parameters:
The entry's id can be found in its advance property or in the last part of its URL.
![Credentials – Username/Password – Advanced](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4357.png)

#### Options:
`-j or --json`
The command output will be formatted in JSON format.

`-d or --domain new-value`
Update the domain.

`-u or --username new-value`
Update the username.

`-p or --password new-value`
Update the password.

#### Examples:
`DPS> set 4574725f-0d24-4cbc-a116-a5270179e251 --domain newdomain`
Entry has been successfully updated
![Command Line Interface examples](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4358.png)
