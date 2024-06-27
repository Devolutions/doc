---
eleventyComputed:
  title: Documentation de l'API
  description: Vous pouvez trouver des instructions détaillées pour l'API REST de {{ fr.DVLS }} dans la section de documentation de l'API de l'interface web de {{ fr.DVLS }}.
---
Vous pouvez trouver des instructions détaillées pour l'API REST de {{ fr.DVLS }} dans la section ***Documentation de l'API*** de l'interface web de {{ fr.DVLS }}.
![Utilitaires – Documentation de l'API](https://cdnweb.devolutions.net/docs/DVLS2036_2024_2.png)

Pour vous connecter et utiliser l'API REST, référez-vous au script bash d'exemple ci-dessous. Pour chaque appel API au serveur, assurez-vous de :
* Remplacer "https://url" par votre URL spécifique de {{ fr.DVLS }}.
* Remplacer "GUID-OF-VAULT" et "GUID-OF-ENTRY" par leurs GUID correspondants.

```bash
# Se connecter et obtenir le jeton
authResponse=$(curl -s -X POST "https://url/api/v1/login" \
    -H "Content-Type: application/json" \
    -d '{
        "appKey": "appkey",
        "appSecret": "appsecret"
    }')
token=$(echo $authResponse | jq -r '.tokenId')

# Vérifier si le jeton a été obtenu avec succès
if [ -z "$token" ] || [ "$token" = "null" ]; then
  echo "Échec de la connexion ou de l'obtention du jeton."
  exit 1
fi

# Demander des données en utilisant le jeton
response=$(curl -s -X GET "https://url/api/v1/vault/GUID-OF-VAULT/entry/GUID-OF-ENTRY" \
    -H "Content-Type: application/json" \
    -H "tokenId: $token")

echo $response | jq

# Se déconnecter
curl -s -X POST "https://url/api/v1/logout" \
    -H "Content-Type: application/json" \
    -H "tokenId: $token" \
    -H "Content-Length: 0"
```