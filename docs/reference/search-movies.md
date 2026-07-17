---
title: Search Movies
sidebar_label:  Search Movies
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



Get movie using their original and alternative titles.

## Endpoint
`GET /search/movie`
Full URL: https://api.themoviedb.org/3/search/movie

## Authentication
Requires a Bearer token in the Authorization header. See [Authentication](../getting-started.md).

## Parameters
| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `query`  | query | string | yes | Searches for the movie whose title or original title matches the text entered. |
| `include_adult`  | query  |  boolean | no | When `true`, allows adult titles to appear in the results. Defaults to `false`. |
| `language`  | query  | string | no | Sets the language of translatable response text (such as `title` and `overview`).   Format used is ISO-639-1, example en-US. |
| `primary_release_year`  | query  |  string | no | Filters results to movies whose primary (official) release year matches. |
| `year`  | query  |  string | no | Filters results to movies that had any release in the given year (broader than primary_release_year, which matches only the official release year). |
| `page`  | query  |  integer | no | Returns the specified page of results. Defaults to `1`.|

## Example request
## Example request

<Tabs groupId="api-language">
<TabItem value="curl" label="cURL">

```bash
curl --location 'https://api.themoviedb.org/3/search/movie?query=her&include_adult=false&language=es-ES&primary_release_year=2010&page=3' \
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

fetch("https://api.themoviedb.org/3/search/movie?query=her&include_adult=false&language=es-ES&primary_release_year=2010&page=3", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://api.themoviedb.org/3/search/movie?query=her&include_adult=false&language=es-ES&primary_release_year=2010&page=3"

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
```json {
    "page": 3,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/owZjVtbtThrdZIf5rnLn4gazRGe.jpg",
            "genre_ids": [
                99
            ],
            "id": 98326,
            "title": "Olímpicamente grandes",
            "original_language": "de",
            "original_title": "Herbstgold",
            "overview": "En Europa se está produciendo una curiosa corriente: su población envejece, pero están creciendo los clubes deportivos para gente mayor. Esto es en lo que se basa el documental. 'Olímpicamente grandes', un filme protagonizado por atletas de entre 80 y 100 años. Cada uno de ellos tiene su propia historia: algunos han superado problemas personales, han sobrevivido a la guerra o han vencido a una enfermedad que amenazaba con quitarles la vida. Ahora todos ellos están unidos por el deporte y tienen como objetivo llegar en buenas condiciones al campeonato del mundo de atletismo para mayores de Finlandia.",
            "popularity": 0.2735,
            "poster_path": "/beSJRL88gitxFFnViOppnU7BhEj.jpg",
            "release_date": "2010-07-08",
            "video": false,
            "vote_average": 5.2,
            "vote_count": 3
        },
        {
            "adult": false,
            "backdrop_path": "/j4wwKS0aokfGe7QDYqU2k6744hi.jpg",
            "genre_ids": [
                99,
                27
            ],
            "id": 58862,
            "title": "Herschell Gordon Lewis: The Godfather of Gore",
            "original_language": "en",
            "original_title": "Herschell Gordon Lewis: The Godfather of Gore",
            "overview": "",
            "popularity": 0.2233,
            "poster_path": "/mzwiMxr0a5xOe3R8d5c2DlkCYzM.jpg",
            "release_date": "2010-06-01",
            "video": false,
            "vote_average": 5.977,
            "vote_count": 22
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                35
            ],
            "id": 271981,
            "title": "Herkes mi Aldatır?",
            "original_language": "tr",
            "original_title": "Herkes mi Aldatır?",
            "overview": "",
            "popularity": 0.6672,
            "poster_path": "/qoVpsQJNtajF4fBhIelRPet9p28.jpg",
            "release_date": "2010-04-02",
            "video": false,
            "vote_average": 4.0,
            "vote_count": 4
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                10402,
                99
            ],
            "id": 65860,
            "title": "Heretik System: We Had A Dream",
            "original_language": "fr",
            "original_title": "Heretik System: We Had A Dream",
            "overview": "",
            "popularity": 0.0997,
            "poster_path": "/hJwdD1ESwwIIcfGG54gidqAJxmS.jpg",
            "release_date": "2010-11-08",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 3
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18,
                53
            ],
            "id": 4440,
            "title": "Herzensschrei",
            "original_language": "en",
            "original_title": "Herzensschrei",
            "overview": "",
            "popularity": 0.1073,
            "poster_path": null,
            "release_date": "2010-10-01",
            "video": false,
            "vote_average": 0.0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 265839,
            "title": "Here Come the Girls 2",
            "original_language": "en",
            "original_title": "Here Come the Girls 2",
            "overview": "",
            "popularity": 0.1083,
            "poster_path": null,
            "release_date": "2010-06-28",
            "video": true,
            "vote_average": 4.8,
            "vote_count": 2
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18
            ],
            "id": 542237,
            "title": "Hermoso Silencio",
            "original_language": "es",
            "original_title": "Hermoso Silencio",
            "overview": "",
            "popularity": 0.083,
            "poster_path": "/4jjPTR58LydhhcpGOOrVoj5bkQD.jpg",
            "release_date": "2010-01-01",
            "video": false,
            "vote_average": 5.0,
            "vote_count": 2
        }
    ],
    "total_pages": 10,
    "total_results": 198
}
```

## Response fields
| Field | Type | Description |
|-------|------|-------------|
| `page`   | integer  |  The page number with the corresponding results      |
| `results`   | array  |  List of matching movies      |
|  `total_pages`  |  integer |   The total number of pages available for this query     |
|  `total_results`  |  integer |   The total number of movies available for this query     |
|  `results[].adult`  | boolean  |   Whether the movie is classified as adult content  |
|  `results[].genre_ids`  |  array |    The ids of the genre of the movie     |
|  `results[].id`  | integer  |   The id of the movie     |
| `results[].title` | string | The title of the movie. The title is changed to the language set in query param   |
|  `results[].original_title`  | string  |    The original title of the movie      |
| `results[].original_language` | string |    The original language of the movie. The format used is iso_639_1      |
|  `results[].backdrop_path` | string | The partial path of the movie's backdrop image. Retrieve the full image URL by calling the [/configuration](./configuration.md) API  |
| `results[].overview` | string |     The description of the movie. The overview is changed to the language set in query param    |
|  `results[].popularity`  | number  |    TMDB's popularity score for the movie     |
|  `results[].poster_path`  | string  |    The partial path of the movie's poster image     |
| `results[].release_date`  | string  |    The primary release date of the movie  |
| `results[].video` | boolean |    Whether the official video(s) of the movie are present     |
| `results[].vote_average` | number |   Average voting of the movie      |
| `results[].vote_count` | integer |   The total number of votes given to the movie     |

## Errors
| Status | Meaning | Likely cause |
|--------|---------|--------------|
| 401 | Unauthorized | API key either invalid or missing for authorization |
| 404 | Not Found | The requested path has missing or incorrect entry |
