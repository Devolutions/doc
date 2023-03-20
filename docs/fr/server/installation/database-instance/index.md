---
title: Instance de la base de données
---
{{ fr.RDMS }} n&apos;a aucune exigence qui dicterait le protocole de communication utilisé, ainsi que la plupart des options qui vous sont offertes par l&apos;instance SQL Server choisie. Tant que le poste de travail client peut se connecter à l&apos;instance SQL, {{ fr.RDMS }} fonctionnera efficacement. Veuillez consulter la documentation Microsoft afin d&apos;autoriser la connectivité à l&apos;instance.  

Avec l&apos;authentification Windows, vous devez définir l&apos;identité du pool d&apos;applications sur un compte du domaine. Nous vous recommandons de créer un compte dédié à cet effet. Reportez-vous a la rubrique [Configure {{ fr.RDMS }} to use integrated security](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/) (en anglais) pour les instructions qui doivent être exécutées après la création de l&apos;instance {{ fr.RDMS }} . 

