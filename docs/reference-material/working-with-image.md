---
title: Working with Images
sidebar_label:  Working with Images
sidebar_position: 1
---

## Building an image URL
Some of the responses mentioned in the API reference pages return partial paths, such as `poster_path` and `backdrop_path`, and not complete URLs. To complete these URL, three components are needed: 
1. `base_url` which is explained in the [/configuration](../reference/configuration.md) endpoint. It is suggested to use `secure_base_url` for HTTPS. 
2. **Size** which also is mentioned in the [/configuration](../reference/configuration.md) endpoint. Different image type has different set of sizes to choose from. 
3. `file_path`the path returned on a movie object, for example, `/1E5baAaEse26fej7uHcjOgEE2t2.jpg`.

Hence the concatenated URL is formed by adding `base_url`, size and `file_path`. For example, 

```json
https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
```
