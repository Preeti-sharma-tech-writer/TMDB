# Movies Detail
Get the main highlights of a movie using its ID.

## Endpoint
`GET /movie/{movie_id}`

Full URL: https://api.themoviedb.org/3/movie/{movie_id}

## Authentication
Requires a Bearer token in the Authorization header. See [Authentication](../03-authentication.md).

## Parameters
| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `movie_id`  | path | integer | yes | The TMDB ID of the movie to retrieve. |
| `language`  | query  | string | no | Sets the language of translatable response text (such as `title` and `overview`). Format used is ISO-639-1, example en-US. |
| `append_to_response`  | query  |  string | no | Additional details (such as videos or images) about the movie using the same request. Multiple values can be added to the query using comma |


## Example request

<Tabs groupId="api-language">
<TabItem value="curl" label="cURL">

```bash
curl --location 'https://api.themoviedb.org/3/movie/313' \
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

fetch("https://api.themoviedb.org/3/movie/313", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://api.themoviedb.org/3/movie/313"

payload = {}
headers = {
    "Authorization": "Bearer
```

</TabItem>
</Tabs>

## Example response

```json
{
    "adult": false,
    "backdrop_path": "/aN5soKp3KMT5Z0LmA9lAu44V3R9.jpg",
    "belongs_to_collection": null,
    "budget": 12000000,
    "genres": [
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 18,
            "name": "Drama"
        }
    ],
    "homepage": "",
    "id": 313,
    "imdb_id": "tt0448124",
    "origin_country": [
        "CA",
        "GB",
        "US"
    ],
    "original_language": "en",
    "original_title": "Snow Cake",
    "overview": "A drama focused on the friendship between a high-functioning autistic woman and a man who is traumatized after a fatal car accident.",
    "popularity": 0.617,
    "poster_path": "/dzKNKUqaDu9JCUmjhuoDd8KQBBs.jpg",
    "production_companies": [
        {
            "id": 163,
            "logo_path": null,
            "name": "Revolution Films",
            "origin_country": "GB"
        },
        {
            "id": 164,
            "logo_path": "/v3zcUepvKC7Vz36yjklk1rw6k8Q.png",
            "name": "Rhombus Media",
            "origin_country": "CA"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "CA",
            "name": "Canada"
        },
        {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        }
    ],
    "release_date": "2006-09-08",
    "revenue": 1381665,
    "runtime": 112,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "",
    "title": "Snow Cake",
    "video": false,
    "vote_average": 7.119,
    "vote_count": 193,
}
```

## Response fields
| Field | Type | Description |
|-------|------|-------------|
| `adult`   | boolean  |  Whether the movie is classified as adult content    |
| `backdrop_path` | string | The partial path of the movie's backdrop image  |
| `belongs_to_collection` |  object  |  Details of the collection that the movie belongs to. It can be null |
| `budget`   | integer  |  The budget of the movie. The value is in dollars |
|  `genres`  | array  |   The list of different genres under which the movie is categorised    |
|  `genres[].id`  | integer  |   The id of the genre   |
|  `genres[].name`  | string  |   The name of the genre corresponding to the genre id  |
|  `homepage`  | string  |   Official site URL of the movie  |
|  `id`  |  integer | The TMDB id of the movie |
|  `imdb_id`  |  string | The IMDB id of the movie  |
|  `origin_country`  |  array | List of ISO 3166-1 country codes  |
|   `original_language`  | string  |    The original language of the movie     |
|  `original_title`  | string  |    The original title of the movie      |
|  `overview`  | string  |    The description of the movie     |
|  `popularity`  | number  |    TMDB's popularity score for the movie     |
|  `poster_path`  | string  |    The partial path of the movie's poster image     |
|  `production_companies`  | array  |    The list of production companies of the movie     |
|  `production_companies[].id`  | integer  |  Id of the production company  |
|  `production_companies[].logo_path`  | string  |  The partial path of production company's logo image. It can be null  |
|  `production_companies[].name`  | string  |  The name of the production company  |
|  `production_companies[].origin_country`  | string  |  The registered country of the production company. Format used is ISO-3166-1, example US  |
|  `production_countries`  | array  |    The list of country where the movie is produced    |
|  `production_countries[].iso_3166_1`  | string  |    The ISO-3166-1 format  of country  |
|  `production_countries[].name`  | string  |    The name of country  |
|  `release_date`  | string  |    The actual release date of the movie  |
|  `revenue`  | integer  |    The total revenue earned by the movie. The value is in dollars |
|  `runtime`  | integer  |    The Total duration (in minutes) of the movie |
|  `spoken_languages`  | array  |    The list of languages spoken in the movie |
|  `spoken_languages[].english_name`  | string  |    The english name of the laguage  |
|  `spoken_languages[].iso_639_1`  | string  |    The iso_639_1  code of the language |
|  `spoken_languages[].name`  | string  |    The common name of the laguage|
| `status` | string | The current release status of the movie |
| `tagline` | string | The tagline of the movie |
|  `title`| string | The title of the movie in the requested language|
| `video` | boolean | Whether the official video(s) of the  movie are present |
|  `vote_average`  | number  |    Average voting of the movie    |
|   `vote_count` |  integer | The total number of votes given to the movie|

## Errors
| Status | Meaning | Likely cause |
|--------|---------|--------------|
| 401 | Unauthorized | API key either invalid or missing for authorization |
| 404 | Not Found | The requested path has missing or incorrect entry. |
