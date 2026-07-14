# Genre List

Get the list of all the movies or tv shows genre and their code. 

## Endpoint
`GET /genre/movie/list`
`GET /genre/tv/list`

Full URL: `https://api.themoviedb.org/3/genre/movie/list` or `https://api.themoviedb.org/3/genre/tv/list`

## Authentication
Requires a Bearer token in the `Authorization` header. See [Authentication](../03-authentication.md).

## Parameters
| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `language`  | query | string | no | Sets the language of the genre name to the requested language. Format used is ISO-639-1, example en-US. Default value is en-US.  |

## Example request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location 'https://api.themoviedb.org/3/genre/movie/list?language=es-ES' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer YOUR_ACCESS_TOKEN");

fetch("https://api.themoviedb.org/3/genre/movie/list?language=es-ES", {
  method: "GET",
  headers: myHeaders,
})
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://api.themoviedb.org/3/genre/movie/list?language=es-ES"
headers = {"Authorization": "Bearer YOUR_ACCESS_TOKEN"}

response = requests.request("GET", url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

## Example response
```json
{
    "genres": [
        {
            "id": 28,
            "name": "Acción"
        },
        {
            "id": 12,
            "name": "Aventura"
        },
        {
            "id": 16,
            "name": "Animación"
        },
        {
            "id": 35,
            "name": "Comedia"
        },
        {
            "id": 80,
            "name": "Crimen"
        },
        {
            "id": 99,
            "name": "Documental"
        },
        {
            "id": 10402,
            "name": "Música"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
}
```

## Response fields
| Field | Type | Description |
|-------|------|-------------|
| `genres`   | array  | List of all the genres available for tv shows or movies |
| `genres[].id`   | integer  | The ID of the corresponding genre |
| `genres[].name`   | string  | The name of the corresponding genre. The name is changed to the language set in query param. If it is not translatable to the requested language, response shows `null`. |

## Errors
| Status | Meaning | Likely cause |
|--------|---------|--------------|
| 401 | Unauthorized | API key either invalid or missing for authorization |
| 404 | Not Found | The requested path has missing or incorrect entry |
