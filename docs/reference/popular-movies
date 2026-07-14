# Popular Movies

Get the list of movies sorted by popularity.

## Endpoint
`GET /movie/popular`

Full URL: `https://api.themoviedb.org/3/movie/popular`

## Authentication
Requires a Bearer token in the `Authorization` header. See [Authentication](../03-authentication.md).

## Parameters
| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| language | query | string | no | Sets the language of translatable response text (such as title and overview). Format used is ISO-639-1, example hi-IN. Default value is en-US. |
|  page  |  query  |  integer  |  no  |  Returns the specified page of results. Defaults to 1  |
|  region  |  query  |  string  |  no |  Filters the results that are released in the specific country. Format used is ISO-3166-1. Default value is US. |

## Example request
## Example request

<Tabs groupId="api-language">
<TabItem value="curl" label="cURL">

```bash
curl --location 'https://api.themoviedb.org/3/movie/popular' \
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

fetch("https://api.themoviedb.org/3/movie/popular", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://api.themoviedb.org/3/movie/popular"

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
```json
{
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/rZfmzpixLKLR3Hg2u0WgC7XLFl8.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 1339713,
            "title": "Obsession",
            "original_language": "en",
            "original_title": "Obsession",
            "overview": "After breaking the mysterious \"One Wish Willow\" to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.",
            "popularity": 697.4596,
            "poster_path": "/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",
            "release_date": "2026-05-13",
            "video": false,
            "vote_average": 8.273,
            "vote_count": 2558
        },
        {
            "adult": false,
            "backdrop_path": "/qjTqY5coNiz6sVtPng40IzltsoN.jpg",
            "genre_ids": [
                16,
                10751,
                35,
                12
            ],
            "id": 1084244,
            "title": "Toy Story 5",
            "original_language": "en",
            "original_title": "Toy Story 5",
            "overview": "When Bonnie receives a Lilypad tablet as a gift and becomes obsessed, Buzz, Woody, Jessie and the rest of the gang's jobs become exponentially harder when they have to go head to head with the all-new threat to playtime.",
            "popularity": 668.4493,
            "poster_path": "/sfQtVlIHljToOwYjhe21KPGzZWK.jpg",
            "release_date": "2026-06-17",
            "video": false,
            "vote_average": 7.398,
            "vote_count": 554
        },
        {
            "adult": false,
            "backdrop_path": "/s6ly8laenkHWlIBRkLSfIuEMLC6.jpg",
            "genre_ids": [
                878,
                53
            ],
            "id": 1275779,
            "title": "Disclosure Day",
            "original_language": "en",
            "original_title": "Disclosure Day",
            "overview": "A cybersecurity expert becomes a whistleblower after uncovering secrets about aliens, putting him on the run from a corporation. Meanwhile, a meteorologist experiencing strange phenomena joins forces with him to prove there's life beyond our understanding.",
            "popularity": 486.3209,
            "poster_path": "/259wnijEJoJLPuZuscxDTqwnypw.jpg",
            "release_date": "2026-06-10",
            "video": false,
            "vote_average": 6.689,
            "vote_count": 845
        }
    ],
    "total_pages": 57937,
    "total_results": 1158724
}
```

**Note**: The list updates frequently; your results will differ from the example.

## Response fields
| Field | Type | Description |
|-------|------|-------------|
| `page`  | integer  | The page number with the corresponding results  |
| `results[].adult`  | boolean  | Whether the movie is classified as adult content  |
| `results[].backdrop_path` | string | The partial path of the movie's backdrop image. Retrieve the full image URL by calling the [/configuration](./configuration.md) API |
| `results[].genre_ids` | array  |   The id(s) of the genre of the movie  |
| `results[].id` | integer  |   The id of the movie    |
| `results[].title` | string | The title of the movie. The title is changed to the language set in query param   |
| `results[].original_language` | string |    The original language of the movie. The format used is iso_639_1      |
| `results[].original_title` | string |    The original title of the movie      |
| `results[].overview` | string |     The description of the movie. The overview is changed to the language set in query param    |
| `results[].popularity`  | number  |    TMDB's popularity score for the movie     |
| `results[].poster_path`  | string  |    The partial path of the movie's poster image. Retrieve the full image URL by calling the [/configuration](./configuration) API  |
| `results[].release_date`  | string  |    The primary release date of the movie  |
| `results[].video` | boolean |    Whether the official video(s) of the movie are present     |
| `results[].vote_average` | number |   Average voting of the movie      |
| `results[].vote_count` | integer |   The total number of votes given to the movie     |
| `total_pages` | integer |   The total number of pages that constitute the list     |
| `total_results` | integer |   The total number of results the list contains     |


## Errors
| Status | Meaning | Likely cause |
|--------|---------|--------------|
| 401 | Unauthorized | API key either invalid or missing for authorization |
| 404	| Not Found	|  The requested path has missing or incorrect entry.  |
