---
sidebar_position: 5
title: How This Was Built
sidebar_label: How This Was Built
---

TMDB API — Documentation (Portfolio Project)
This is independent reference documentation for the TMDB API, created as a technical-writing portfolio piece by Preeti Sharma.

Every endpoint is tested directly in Postman, and every example response or the corresponding error code is real captured result. Anything that is not testable, or that doesn't return the expected response is excluded from the documentation. Hence, some deviation from the official API documentation is expected and intentional.

### What's inside
1. Overview
2. Quickstart
3. API reference
    1. Search Movies
    2. Movie Details
    3. Popular Movies
    4. Discover Movies
    5. Movie Genres
    6. Configuration
4. Reference material
    1. Working with images
    2. Errors
    3. Glossary


### Approach
 * Referred TMDB's official API documnetation website as a source of truth/API contract
 * Tested every request in Postman; documented actual responses and status codes
 * Reproduced error conditions deliberately to document real error bodies
 * Ensured to include only the relevant error codes and conditions
 * Documented non-obvious API behaviour (e.g. invalid filter values return 200, not an error)
 * Built with a repeatable QA checklist and designed to publish via Docusaurus