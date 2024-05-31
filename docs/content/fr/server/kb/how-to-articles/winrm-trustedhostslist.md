---
eleventyComputed:
  title: WinRM et la liste des hôtes de confiance
  description: Ce guide fournit des étapes pour activer WinRM et ajouter les noms des machines distantes dans la liste des hôtes de confiance sur le serveur où {{ fr.DVLS }} est hébergé.
---
Ce guide fournit des étapes pour activer WinRM et ajouter les noms des machines distantes dans la liste des hôtes de confiance sur le serveur où {{ fr.DVLS }} est hébergé.

{% snippet, "badgeInfo" %}
Les ports de transport WinRM sont **5985 pour HTTP** et **5986 pour HTTPS**.
{% endsnippet %}

1. S'assurer que WinRM est activé sur la machine distante où se trouvent les comptes locaux. La commande **winrm quickconfig** peut être utilisée pour activer WinRM. Pour plus de détails, veuillez consulter [Activer Windows Remote Shell](https://docs.microsoft.com/en-us/troubleshoot/windows-server/remote/how-to-enable-windows-remote-shell) et [Installation et configuration pour la gestion à distance Windows](https://learn.microsoft.com/en-us/windows/win32/winrm/installation-and-configuration-for-windows-remote-management).
1. S'assurer d'ajouter le nom de la machine distante dans la liste des hôtes de confiance de la machine où {{ fr.DVLS }} est hébergé.
    1. Pour ajouter tous les hôtes distants, la commande PowerShell est : __Set-Item WSMan:localhost\client\trustedhosts -value *__
{type="a"}
    1. Pour ajouter tous les hôtes distants d'un domaine spécifique à la liste des hôtes de confiance : __Set-Item WSMan:\localhost\Client\TrustedHosts *.yourdomain.local__
    1. Pour ajouter un seul hôte à la liste existante des hôtes de confiance : **Set-Item WSMan:\localhost\Client\TrustedHosts host.yourdomain.local -Concatenate**