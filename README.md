# TMDB API — Documentation (Portfolio Project)

🔗 **[View the live documentation](https://preeti-sharma-tech-writer.github.io/TMDB/)**

This is independent reference documentation for the TMDB API, created as a technical-writing portfolio piece by Preeti Sharma.

Every endpoint is tested directly in Postman, and every example response or the corresponding error code is real captured result. Anything that is not testable, or that doesn't return the expected response is excluded from the documentation. Hence, some deviation from the official [API documentation](https://developer.themoviedb.org/reference/getting-started) is expected and intentional.

## What's inside

### Get started
- [Overview](./overview.md)
- [Quickstart](./getting-started.md)

### API reference
- [Search Movies](./reference/search-movies.md)
- [Movie Details](./reference/movie-details.md)
- [Popular Movies](./reference/popular-movies.md)
- [Discover Movies](./reference/discover-movies.md)
- [Movie Genres](./reference/genre-list.md)
- [Configuration](./reference/configuration.md)

### Reference material
- [Working with images](./reference-material/working-with-image.md)
- [Errors](./reference-material/error.md)
- [Glossary](./reference-material/glossary.md)


## Approach

- Referred TMDB's official [API documnetation website](https://developer.themoviedb.org/reference/getting-started) as a source of truth/API contract
- Tested every request in Postman; documented actual responses and status codes
- Reproduced error conditions deliberately to document real error bodies
- Ensured to include only the relevant error codes and conditions
- Documented non-obvious API behaviour (e.g. invalid filter values return `200`, not an error)
- Built with a repeatable QA checklist and designed to publish via Docusaurus
