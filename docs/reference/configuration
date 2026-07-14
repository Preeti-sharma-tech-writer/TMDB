# Configuration

Get key details that are required to integrate TMDB APIs.

## Endpoint
`GET /configuration`

Full URL: `https://api.themoviedb.org/3/configuration`

## Authentication
Requires a Bearer token in the `Authorization` header. See [Authentication](../03-authentication.md).

## Example request

<Tabs groupId="api-language">
<TabItem value="curl" label="cURL">

```bash
curl --location 'https://api.themoviedb.org/3/configuration' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer YOUR_ACCESS_TOKEN");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://api.themoviedb.org/3/configuration", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://api.themoviedb.org/3/configuration"

payload = {}
headers = {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

</TabItem>
</Tabs>

## Example response
<trimmed {
    "change_keys": [
        "adult",
        "air_date",
        "also_known_as",
        "alternative_titles",
        "biography",
        "birthday",
        "budget",
        "cast",
        "certifications",
        "character_names",
        "created_by",
        "crew",
        "deathday",
        "episode",
        "episode_number",
        "episode_run_time",
        "freebase_id",
        "freebase_mid",
        "general",
        "genres",
        "guest_stars",
        "homepage",
        "images",
        "imdb_id",
        "languages",
        "name",
        "network",
        "origin_country",
        "original_name",
        "original_title",
        "overview",
        "parts",
        "place_of_birth",
        "plot_keywords",
        "production_code",
        "production_companies",
        "production_countries",
        "releases",
        "revenue",
        "runtime",
        "season",
        "season_number",
        "season_regular",
        "softcore",
        "spoken_languages",
        "status",
        "tagline",
        "title",
        "translations",
        "tvdb_id",
        "tvrage_id",
        "type",
        "video",
        "videos"
    ],
    "images": {
        "base_url": "http://image.tmdb.org/t/p/",
        "secure_base_url": "https://image.tmdb.org/t/p/",
        "backdrop_sizes": [
            "w300",
            "w780",
            "w1280",
            "original"
        ],
        "logo_sizes": [
            "w45",
            "w92",
            "w154",
            "w185",
            "w300",
            "w500",
            "original"
        ],
        "poster_sizes": [
            "w92",
            "w154",
            "w185",
            "w342",
            "w500",
            "w780",
            "original"
        ],
        "profile_sizes": [
            "w45",
            "w185",
            "h632",
            "original"
        ],
        "still_sizes": [
            "w92",
            "w185",
            "w300",
            "original"
        ]
    }
}>

## Response fields
| Field | Type | Description |
|-------|------|-------------|
| `change_keys`   | array  |          |
| `images.base_url`   | string  | The base URL (HTTP) used to construct image URLs.   |
| `images.secure_base_url`   | string  | The HTTPS-encrypted root path of the complete web address.         |
| `images.backdrop_sizes`   | array  | List of all the available sizes for backdrop images.         |
| `images.logo_sizes`   | array  | List of all the available sizes for logo images.          |
| `images.poster_sizes`   | array  | List of all the available sizes for poster images.          |
| `images.profile_sizes`   | array  | List of all the available sizes for the profile images.          |
| `images.still_sizes`   | array  | List of all the available sizes for still images.          |


**Note**: To build a full image URL, combine three pieces: secure_base_url + a size + the image path from any movie response. For example: `https://image.tmdb.org/t/p/` + `w500` + `/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg` = `https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg`

## Errors
| Status | Meaning | Likely cause |
|--------|---------|--------------|
|  401	|  Unauthorized	|  API key either invalid or missing for authorization  |
|  404	|  Not Found	|  The requested path has missing or incorrect entry  |
