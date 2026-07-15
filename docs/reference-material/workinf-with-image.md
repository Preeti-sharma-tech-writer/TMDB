## Building an image URL
If you notice, come of the APIs from the reference files have partial paths (e.g. `poster_path`, `backdrop_path`), not complete URLs. To complete this URL, three components are needed: 
1. `base_url` which is ecplained in the [/configuration](./reference/configuration.md) endpoint. It is suggested to use `secure_base_url` for HTTPS. 
2. **Size** which also is mentioned in the [/configuration](./reference/configuration.md) endpoint. Different image type has different set of sizes to choose from. 
3. `file_path` which is the path returned on a movie object (e.g. `/1E5baAaEse26fej7uHcjOgEE2t2.jpg`)

Hence the concatenated URL is formed by adding `base_url`, size and `file_path`. For example, `texthttps://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg`.
