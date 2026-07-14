# Getting Started 

Welcome to the TMDB API documentation. By the end of this guide, you will understand the basics needed to make a successful API request.
To get started, generate your API credentials from Settings > [API page](https://www.themoviedb.org/settings/api). Before a token is issued, you will need to agree to the [terms of use](https://www.themoviedb.org/api-terms-of-use). TMDB then issues an access token that authenticates your requests.
Save this token somewhere safe. If you lose it, you can [regenerate a new one](https://www.themoviedb.org/settings/api/regenerate). The token goes in the Authorization header of every request, as shown below. You can test the token using the request below: 

```bash
curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/11' \
     --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```
