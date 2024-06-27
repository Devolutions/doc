---
eleventyComputed:
  title: API documentation
  description: You can find detailed instructions for the {{ en.DVLS }} REST API in the API documentation section of the {{ en.DVLS }} web interface.
---
You can find detailed instructions for the {{ en.DVLS }} REST API in the ***API documentation*** section of the {{ en.DVLS }} web interface.
![Utilities – API documentation](https://cdnweb.devolutions.net/docs/DVLS2036_2024_2.png)

To connect and use the REST API, refer to the sample bash script below. For each API call to the server, ensure you:
* Replace "https://url" with your specific {{ en.DVLS }} URL.
* Replace "GUID-OF-VAULT" and "GUID-OF-ENTRY" with their corresponding GUIDs.

```bash
# Log in and get token
authResponse=$(curl -s -X POST "https://url/api/v1/login" \
    -H "Content-Type: application/json" \
    -d '{
        "appKey": "appkey",
        "appSecret": "appsecret"
    }')
token=$(echo $authResponse | jq -r '.tokenId')

# Check if token was successfully obtained
if [ -z "$token" ] || [ "$token" = "null" ]; then
  echo "Failed to login or obtain token."
  exit 1
fi

# Request data using the token
response=$(curl -s -X GET "https://url/api/v1/vault/GUID-OF-VAULT/entry/GUID-OF-ENTRY" \
    -H "Content-Type: application/json" \
    -H "tokenId: $token")

echo $response | jq

# Log out
curl -s -X POST "https://url/api/v1/logout" \
    -H "Content-Type: application/json" \
    -H "tokenId: $token" \
    -H "Content-Length: 0"
```