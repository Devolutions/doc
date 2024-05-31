---
eleventyComputed:
  title: Identités des applications
  description: La section Identités des applications permet de créer une identité d'application pour communiquer avec {{ fr.DVLS }} via le module {{ fr.PS }}.
---
La section ***Identités des applications*** permet de créer une identité d'application pour communiquer avec {{ fr.DVLS }} via le [module {{ fr.PS }}](https://www.powershellgallery.com/packages/Devolutions.PowerShell/).

{% snippet, "badgeHelp" %}
Pour plus d'informations sur la connexion de {{ fr.DVLS }} avec un utilisateur d'application, voir [Méthodes de connectivité PowerShell à {{ fr.DVLS }}](/powershell/dvls-powershell/powershell-connectivity/).
{% endsnippet %}

![Administration – Identités des applications](https://cdnweb.devolutions.net/docs/DVLS6023_2024_1.png)

![Ajout d'une nouvelle identité d'application](https://cdnweb.devolutions.net/docs/DVLS6022_2024_1.png)

| Général               | Description                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| Nom                   | Nom d'affichage de l'identité d'application.                                                                      |
| Identité d'application       | Identité d'application à utiliser dans l'application pour communiquer avec l'instance {{ fr.DVLS }}.                  |
| Secret d'application  | Clé secrète à utiliser en combinaison avec l'identité d'application. Disponible uniquement lors de la création de l'identité d'application. |
| Activé                | Activer l'identité d'application.                                                                             |
| Peut enregistrer les sessions   | Permettre à l'identité d'application d'enregistrer les enregistrements de session.                                                   |
| Activer la restriction IP | Soumettre l'application aux politiques d'accès conditionnel, le cas échéant, concernant les restrictions d'adresse IP.       |
