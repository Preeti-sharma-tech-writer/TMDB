# Search Movies
The keyword can be a movie title or original title.

## Endpoint
<GET> </search/movie>
Full URL: https://api.themoviedb.org/3/search/movie

## Authentication
Requires a Bearer token in the Authorization header. See [Authentication](../03-authentication.md).

## Parameters
| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| query  | query | string | yes | Searches for the movie whose title or original title matches the text entered. |
| include_adult  | query  |  boolean | no | When `true`, allows adult titles to appear in the results. Defaults to `false`. |
| language  | query  | string | no | Sets the language of translatable response text (such as `title` and `overview.`) |
| primary_release_year  | query  |  integer | no | Filters results to movies whose primary (official) release year matches. |
| page  | query  |  integer | no | Returns the specified page of results. Defaults to `1`.|

## Example request
<curl --location 'https://api.themoviedb.org/3/search/movie?query=her&include_adult=false&language=es-ES&primary_release_year=2010&page=3' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'>
  
<JavaScript const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer YOUR_ACCESS_TOKEN");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api.themoviedb.org/3/search/movie?query=her&include_adult=false&language=es-ES&primary_release_year=2010&page=3", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));>
  
<Python import requests

url = "https://api.themoviedb.org/3/search/movie?query=her&include_adult=false&language=es-ES&primary_release_year=2010&page=3"

payload = {}
headers = {
  'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
>

## Example response
<trimmed {
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
            "softcore": false,
            "video": false,
            "vote_average": 5.2,
            "vote_count": 3
        },
        {
            "adult": false,
            "backdrop_path": "/hMPHmocpwcMKoHCpcUKFbx7Uq1A.jpg",
            "genre_ids": [
                18
            ],
            "id": 51976,
            "title": "Hermano",
            "original_language": "es",
            "original_title": "Hermano",
            "overview": "Daniel es un delantero excepcional, un fenómeno. Julio, el capitán del equipo, es un líder nato. Ambos son hermanos de crianza y juegan al fútbol en el pequeño barrio de “La Ceniza”. Mientras Daniel desea con todas sus fuerzas llegar a ser un futbolista profesional, Julio mantiene a su familia con dinero sucio y no tiene tiempo para soñar. La oportunidad de sus vidas llega cuando un cazatalentos los invita a unas pruebas en el famoso equipo de la ciudad: el “Caracas Fútbol Club”. En ese momento una tragedia los sacude y deben decidir, a patadas y sobre una cancha de tierra, qué es más importante: la unión de la familia, el sabor de la venganza o el sueño de sus vidas.",
            "popularity": 0.8241,
            "poster_path": "/1nTTDblwirJMMhqeJu70pAmetuK.jpg",
            "release_date": "2010-07-02",
            "softcore": false,
            "video": false,
            "vote_average": 6.7,
            "vote_count": 30
        },
        {
            "adult": false,
            "backdrop_path": "/6VJXuJoGOnowrnkja03ydYQN7V0.jpg",
            "genre_ids": [
                35,
                18
            ],
            "id": 43541,
            "title": "Dos hermanos",
            "original_language": "es",
            "original_title": "Dos hermanos",
            "overview": "Marcos y Susana, dos hermanos que rondan los sesenta, viven en un continuo y cómico enfrentamiento. Sus vidas y sus temperamentos son completamente distintos, pero se ven obligados a afianzar su relación tras la muerte de su madre. Susana, con una personalidad entre avasalladora y delirante, y que siempre hace los bussines en la familia, convence a su hermano Marcos, un orfebre culto y sensible, para que compre una vieja casa en un pequeño pueblo uruguayo. Comenzarán así un nuevo periodo de su vida en el que no sabrán estar juntos ni separados.",
            "popularity": 0.2348,
            "poster_path": "/gXIKoLIVNij1bgeQFo5y68t7qP4.jpg",
            "release_date": "2010-04-01",
            "softcore": false,
            "video": false,
            "vote_average": 6.7,
            "vote_count": 20
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                16
            ],
            "id": 44430,
            "title": "Hermie & Friends: Antonio Meets His Match",
            "original_language": "en",
            "original_title": "Hermie & Friends: Antonio Meets His Match",
            "overview": "",
            "popularity": 0.7118,
            "poster_path": "/npSAVeXf29LN85PzTnrG0UxLWm3.jpg",
            "release_date": "2010-06-14",
            "softcore": false,
            "video": false,
            "vote_average": 6.0,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": "/sAnVDIFIsZgpZahShxCRlrQodEF.jpg",
            "genre_ids": [
                35
            ],
            "id": 269180,
            "title": "L'année des guignols - Et il est où Hervé Miaou ?!",
            "original_language": "fr",
            "original_title": "L'année des guignols - Et il est où Hervé Miaou ?!",
            "overview": "",
            "popularity": 0.0848,
            "poster_path": "/jlkS9L5bnmONHidolMDa0GUMo2A.jpg",
            "release_date": "2010-10-26",
            "softcore": false,
            "video": true,
            "vote_average": 8.0,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99,
                36
            ],
            "id": 134681,
            "title": "Lafayette: The Lost Hero",
            "original_language": "en",
            "original_title": "Lafayette: The Lost Hero",
            "overview": "",
            "popularity": 0.356,
            "poster_path": "/ndtPdT8f7iJRJhRqygfYTmFodKC.jpg",
            "release_date": "2010-09-13",
            "softcore": false,
            "video": false,
            "vote_average": 10.0,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                16,
                10751
            ],
            "id": 980779,
            "title": "Hermie and Friends: Who's in Charge Anyway?",
            "original_language": "en",
            "original_title": "Hermie and Friends: Who's in Charge Anyway?",
            "overview": "",
            "popularity": 0.0927,
            "poster_path": "/ue2EaIM5hkXWPSoP651gPQqTQuQ.jpg",
            "release_date": "2010-05-01",
            "softcore": false,
            "video": false,
            "vote_average": 0.0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99
            ],
            "id": 506089,
            "title": "Our Marine World Heritage",
            "original_language": "en",
            "original_title": "Our Marine World Heritage",
            "overview": "",
            "popularity": 0.3293,
            "poster_path": "/ccYsqSP0jauMqU7C81LGKIQYwWm.jpg",
            "release_date": "2010-02-18",
            "softcore": false,
            "video": false,
            "vote_average": 5.0,
            "vote_count": 2
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                35
            ],
            "id": 508787,
            "title": "Monster Heroes",
            "original_language": "en",
            "original_title": "Monster Heroes",
            "overview": "",
            "popularity": 0.4141,
            "poster_path": null,
            "release_date": "2010-12-08",
            "softcore": false,
            "video": false,
            "vote_average": 0.0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                16,
                99
            ],
            "id": 150751,
            "title": "When Herzog Rescued Phoenix",
            "original_language": "en",
            "original_title": "When Herzog Rescued Phoenix",
            "overview": "",
            "popularity": 0.3374,
            "poster_path": null,
            "release_date": "2010-09-13",
            "softcore": false,
            "video": false,
            "vote_average": 5.0,
            "vote_count": 2
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
            "softcore": false,
            "video": false,
            "vote_average": 5.977,
            "vote_count": 22
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 1478494,
            "title": "LA HERMANA ERRANTE",
            "original_language": "fr",
            "original_title": "LA HERMANA ERRANTE",
            "overview": "Retrato de Juana Molina - Archivos de Buenos Aires",
            "popularity": 0.1007,
            "poster_path": null,
            "release_date": "2010-02-01",
            "softcore": false,
            "video": false,
            "vote_average": 0.0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/oveGU066wcMACD6EJnY15rxqpkb.jpg",
            "genre_ids": [
                18
            ],
            "id": 348358,
            "title": "Cuando el corazón se rompe",
            "original_language": "de",
            "original_title": "Rosamunde Pilcher: Wenn das Herz zerbricht",
            "overview": "Jessica y Oliver forman una pareja perfecta dentro de la alta sociedad londinense, pero Jessica aún espera que su pareja le pida matrimonio. Al conocer a Max, la vida de Jessica cambia por completo.",
            "popularity": 0.1352,
            "poster_path": "/x7clkfV9AQ42KMOYDpnbnNBeBhC.jpg",
            "release_date": "2010-10-10",
            "softcore": false,
            "video": false,
            "vote_average": 3.0,
            "vote_count": 6
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
            "softcore": false,
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
            "softcore": false,
            "video": false,
            "vote_average": 5.3,
            "vote_count": 3
        },
        {
            "adult": false,
            "backdrop_path": "/xvQnsFh8nCHbhgVe8PfNLtY5eDV.jpg",
            "genre_ids": [
                16,
                36,
                12
            ],
            "id": 75955,
            "title": "Heroes Verdaderos",
            "original_language": "es",
            "original_title": "Heroes Verdaderos",
            "overview": "Cinco jóvenes (un criollo, tres indígenas y un mestizo) se ven involucrados por azares del destino en el movimiento de Independencia de México. A través de sus ojos y acompañados de emocionantes aventuras y buen humor se conocerán personajes históricos y sus hazañas y movimientos como la conspiración de Querétaro, el grito de Dolores y las campañas de Hidalgo, Allende y Morelos, hasta llegar a la culminación del movimiento. (FILMAFFINITY)",
            "popularity": 0.4437,
            "poster_path": "/1vlMZBcBIoCHjOtOVk9FHAF0lPb.jpg",
            "release_date": "2010-09-24",
            "softcore": false,
            "video": false,
            "vote_average": 5.8,
            "vote_count": 4
        },
        {
            "adult": false,
            "backdrop_path": "/5maw6b0mribcCGkU3Q0KmyYjDgO.jpg",
            "genre_ids": [
                35
            ],
            "id": 951230,
            "title": "Ever Here I Be",
            "original_language": "en",
            "original_title": "Ever Here I Be",
            "overview": "",
            "popularity": 0.7873,
            "poster_path": "/djTNwgmXKNNJ4PHbTbWTUrgvVHj.jpg",
            "release_date": "2010-06-21",
            "softcore": false,
            "video": false,
            "vote_average": 8.0,
            "vote_count": 1
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
            "softcore": false,
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
            "softcore": false,
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
            "softcore": false,
            "video": false,
            "vote_average": 5.0,
            "vote_count": 2
        }
    ],
    "total_pages": 10,
    "total_results": 198
}

## Response fields
| Field | Type | Description |
|-------|------|-------------|
| `page`   | integer  |  The current page of results      |
| `results`   | array  |  List of matching movies      |
|  `total_pages`  |  integer |   The total number of pages available for this query     |
|  `total_results`  |  integer |   The total number of movies available for this query     |
|  `results[].adult`  | boolean  |   Whether the movie is classified as adult content  |
|  `results[].genre_ids'  |  array |    The ids of the genre of the movie     |
|  `results[].id`  | integer  |   The id of the movie     |
|  `results[].title`  |  string |  The title of the movie       |
|  `results[].original_title`  | string  |    The original title of the movie      |
|  `results[].original_language`  | string  |    The original language of the movie     |
|  `results[].overview`  | string  |    The description of the movie     |
|  `results[].popularity`  | number  |    TMDB's popularity score for the movie     |
|  `results[].poster_path`  | string  |    The partial path of the movie's poster image     |
|  `results[].release_date`  | string  |    The official release date of the movie     |
|  `results[].video`  | boolean  |    Whether the movie has attached video    |
|  `results[].vote_average`  | number  |    Average voting of the movie    |
|  `results[].vote_count` |  integer | The total number of votes given to the movie|

## Errors
| Status | Meaning | Likely cause |
|--------|---------|--------------|
| 401 | Unauthorized | Missing/invalid API key |
