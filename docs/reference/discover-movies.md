---
title: Discover Movies
sidebar_label: Discover Movies
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Get movies based on filters and sorting options. 

## Endpoint
`GET /discover/movie`

Full URL: `https://api.themoviedb.org/3/discover/movie`

## Authentication
Requires a Bearer token in the `Authorization` header. See [Authentication](../getting-started.md).

## Parameters

### Movie Certification Parameters
| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `certification` | query | string | no | Filters results to movies whose country-specific certification matches. Use this along with the `certification_country` parameter. |
| `certification.gte` | query | string | no | Filters the movie list based on the minimum acceptable certification.  Use this along with the `certification_country` parameter. |
| `certification.lte`  | query | string | no | Filters the movie list based on the maximum acceptable certification.  Use this along with the `certification_country` parameter. |
| `certification_country` | query | string | no | The country whose rating system should be used to interpret the certification. Use this along with the `certification`, `certification.gte`and `certification.lte` parameters.  Format used is ISO-3166-1, example US. |

### Release Date Parameters
| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
|  `primary_release_year` | query | integer | no | Filters results to movies whose primary (official) release year matches. | 
|  `primary_release_date.gte` | query | string | no | Filters results to movies whose primary (official) release is on or after the requested date. Format used is YYYY-MM-DDThh:mm:ss. | 
|  `primary_release_date.lte` | query | string | no | Filters results to movies whose primary (official) release is on or before the requested date. Format used is YYYY-MM-DDThh:mm:ss. | 
|  `region`  |  query  |  string  | no  |  Filters the results that are released in the specific country. Format used is ISO-3166-1. Default value is US. | 
| `release_date.gte` | query | string | no  | Filters results to movies with any of its release date on or after the requested date. Format used is YYYY-MM-DDThh:mm:ss. |
| `release_date.lte` | query | string | no  | Filters results to movies with any of its release date on or before the requested date. Format used is YYYY-MM-DDThh:mm:ss. |
| `watch_region` | query | string | no  | The country whose streaming platforms are checked for the available of the movie. Use this along with the `with_watch_monetization_types`, and `with_watch_providers` parameters. Format used is ISO-3166-1, example US. |
| `with_release_type` | query | integer | no  | Filters results to movies whose release methods (such as, theatrical, digital, physical) represented in form of a code matches. Use this along with the `certification_country` parameter. This parameter can have multiple values separated by commas, which are treated like an `AND` query, and pipes, which are treated like an `OR`. The order of the release type affects the results. For example, specifying 2|3 would return the limited theatrical release date as opposed to 3|2 which would return the theatrical date. |
| `with_runtime.gte` | query |integer |  no |  Filters results to movies whose total duration is greater than or equal to the requested value.   |
| `with_runtime.lte` | query | integer | no   |  Filters results to movies whose total duration is less than or equal to the requested value.   |
| `with_watch_monetization_types` | query | string |  no | Filters results to movies whose monetization method matches. The allowed values for are `flatrate`, `free`, `ads`, `rent` and `buy`. Use this along with the `watch_region` parameter.  This parameter can have multiple values separated by commas, which are treated like an `AND` query, and pipes, which are treated like an `OR`.  |
|  `with_watch_providers`|  query| string | no  | Filters results to movies that are available on the requested streaming, rental, or purchase services. Use this along with the `watch_region` parameter.  This parameter can have multiple values separated by commas, which are treated like an `AND` query, and pipes, which are treated like an `OR`.   |
|  `year`|query  | string | no  | Filters results to movies that have any release in the requested year. |

### Vote Parameters
| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `vote_average.gte` | query | number |  no |  Filters results to movies whose average vote value is greater than or equal to the requested value.   |
| `vote_average.lte` | query | number |  no |  Filters results to movies whose average vote value is less than or equal to the requested value.   |
| `vote_count.gte` | query | integer |  no |  Filters results to movies whose total number of votes is greater than or equal to the requested value.     |
| `vote_count.lte` | query | integer |  no |  Filters results to movies whose total number of votes is less than or equal to the requested value.   |

### General & Sort Parameters

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
|  `include_adult` | query | boolean | no | When true, allows adult titles to appear in the results. Defaults to false. | 
|  `include_video` | query | boolean | no | When true, allows official videos to appear in the results. Defaults to false. | 
|  `language` | query | string | no | Sets the language of translatable response text (such as title and overview). Format used is ISO-639-1, example en-US. |
|  `page` | query | integer | no | Returns the specified page of results. Defaults to 1. | 
| `sort_by` | query | string | no  | Sort the movie list based on the requested property, which can have ascending or descending order. The allowed values are `original_title.asc` `original_title.desc`, `popularity.asc`, `popularity.desc`, `revenue.asc`, `revenue.desc`, `primary_release_date.asc`, `title.asc`, `title.desc`, `primary_release_date.desc`, `vote_average.asc`, `vote_average.desc`, `vote_count.asc`, `vote_count.desc` |
| `with_cast` | query | string | no  | Filters results to movies whose cast matches. This parameter can have multiple values separated by commas, which are treated like an `AND` query, and pipes, which are treated like an `OR`.  |
| `with_companies` | query | string |  no | Filters results to movies whose official companies are the requested ones. This parameter can have multiple values separated by commas, which are treated like an `AND` query, and pipes, which are treated like an `OR`.  |
| `with_crew` | query |string  | no  | Filters results to movies whose crew matches. This parameter can have multiple values separated by commas, which are treated like an `AND` query, and pipes, which are treated like an `OR`.   |
| `with_genres` | query |  string| no  | Filters results to movies whose genre IDs are the requested ones. This parameter can have multiple values separated by commas, which are treated like an `AND` query, and pipes, which are treated like an `OR`. |
| `with_keywords` | query | string | no | Filters results to movies tagged with the requested keywords. This parameter can have multiple values separated by commas, which are treated like an `AND` query, and pipes, which are treated like an `OR`.  |
| `with_origin_country` | query | string |  no | Filters results to movies that are from the requested origin country. Format used is ISO-3166-1. |
| `with_original_language` | query | string | no | Filters results to movies whose primary language matches. |
| `with_people` | query | string | no  | Filters results to movies that has the mentioned people associated with it. |

### Exclusion Parameters
| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `without_companies` | query | string |no  | Filters results to movies whose official companies are NOT the requested ones.  |
| `without_genres` | query | string |  no | Filters results to movies whose genre ID is NOT the requested ones.|
| `without_keywords`  | query  | string | no | Filters results to movies that DO NOT match the requested keywords. |
| `without_watch_providers` | query |string |  no  | Filters results to movies that are NOT available on the requested streaming, rental, or purchase services.  |


## Example request


<Tabs groupId="api-language">
<TabItem value="curl" label="cURL">

```bash
curl --location 'https://api.themoviedb.org/3/discover/movie?certification=UA&certification_country=IN&sort_by=popularity.desc&with_watch_monetization_types=flatrate&watch_region=IN&language=en-US' \
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

fetch("https://api.themoviedb.org/3/discover/movie?certification=UA&certification_country=IN&sort_by=popularity.desc&with_watch_monetization_types=flatrate&watch_region=IN&language=en-US", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://api.themoviedb.org/3/discover/movie?certification=UA&certification_country=IN&sort_by=popularity.desc&with_watch_monetization_types=flatrate&watch_region=IN&language=en-US"

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
            "backdrop_path": "/2ssWTSVklAEc98frZUQhgtGHx7s.jpg",
            "genre_ids": [
                12,
                18,
                878
            ],
            "id": 157336,
            "title": "Interstellar",
            "original_language": "en",
            "original_title": "Interstellar",
            "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            "popularity": 61.8095,
            "poster_path": "/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
            "release_date": "2014-11-05",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 40284
        },
        {
            "adult": false,
            "backdrop_path": "/cyecB7godJ6kNHGONFjUyVN9OX5.jpg",
            "genre_ids": [
                28,
                878,
                12
            ],
            "id": 1726,
            "title": "Iron Man",
            "original_language": "en",
            "original_title": "Iron Man",
            "overview": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
            "popularity": 20.5261,
            "poster_path": "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
            "release_date": "2008-04-30",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 28317
        },
        {
            "adult": false,
            "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
            "genre_ids": [
                28,
                878,
                12
            ],
            "id": 588228,
            "title": "The Tomorrow War",
            "original_language": "en",
            "original_title": "The Tomorrow War",
            "overview": "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
            "popularity": 18.4653,
            "poster_path": "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
            "release_date": "2021-09-03",
            "video": false,
            "vote_average": 7.516,
            "vote_count": 4271
        }
    ],
    "total_pages": 118,
    "total_results": 2359
}
```

## Response fields

| Field | Type | Description |
|-------|------|-------------|
| `page`   | integer  | The page number with the corresponding results    |
| `results[].adult` | boolean |  Whether the movie is classified as adult content |
| `results[].backdrop_path` |  string |  The partial path of the movie's backdrop image. Retrieve the full image URL by calling the [/configuration](./configuration.md) API |
| `results[].genre_ids`  |  array |  The id(s) of the genre of the movie |
|  `results[].id` |  integer |   The id of the movie    | 
| `results[].title` | string | The title of the movie. The title is changed to the language set in query param   |
| `results[].original_language` | string |    The original language of the movie. The format used is iso_639_1      |
| `results[].original_title` | string |    The original title of the movie      |
| `results[].overview` | string |     The description of the movie. The overview is changed to the language set in query param    |
| `results[].popularity`  | number  |    TMDB's popularity score for the movie     |
| `results[].poster_path`  | string  |    The partial path of the movie's poster image. Retrieve the full image URL by calling the [/configuration](./configuration.md) API  |
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
