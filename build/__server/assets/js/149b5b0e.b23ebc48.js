"use strict";
exports.ids = ["390"];
exports.modules = {
8232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_movie_details_md_149_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_movie_details_md_149_json__rspack_import_0 = __webpack_require__(9686);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {};
const contentTitle = 'Movies Detail';

const assets = {

};



const toc = [{
  "value": "Endpoint",
  "id": "endpoint",
  "level": 2
}, {
  "value": "Authentication",
  "id": "authentication",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters",
  "level": 2
}, {
  "value": "Example request",
  "id": "example-request",
  "level": 2
}, {
  "value": "Example response",
  "id": "example-response",
  "level": 2
}, {
  "value": "Response fields",
  "id": "response-fields",
  "level": 2
}, {
  "value": "Errors",
  "id": "errors",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  }, {TabItem, Tabs} = _components;
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "movies-detail",
        children: "Movies Detail"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Get the main highlights of a movie using its ID."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "endpoint",
      children: "Endpoint"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "GET /movie/{movie_id}"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Full URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://api.themoviedb.org/3/movie/%7Bmovie_id%7D",
        children: "https://api.themoviedb.org/3/movie/{movie_id}"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "authentication",
      children: "Authentication"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Requires a Bearer token in the Authorization header. See ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "../03-authentication.md",
        children: "Authentication"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "parameters",
      children: "Parameters"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Name"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "In"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Required"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "movie_id"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "path"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "yes"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The TMDB ID of the movie to retrieve."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "language"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Sets the language of translatable response text (such as ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "title"
            }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "overview"
            }), "). Format used is ISO-639-1, example en-US."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "append_to_response"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Additional details (such as videos or images) about the movie using the same request. Multiple values can be added to the query using comma"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-request",
      children: "Example request"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(Tabs, {
      groupId: "api-language",
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "curl",
        label: "cURL",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-bash",
            children: "curl --location 'https://api.themoviedb.org/3/movie/313' \\\n--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "javascript",
        label: "JavaScript",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-javascript",
            children: "const myHeaders = new Headers();\nmyHeaders.append(\"Authorization\", \"Bearer YOUR_ACCESS_TOKEN\");\n\nconst requestOptions = {\n  method: \"GET\",\n  headers: myHeaders,\n  redirect: \"follow\",\n};\n\nfetch(\"https://api.themoviedb.org/3/movie/313\", requestOptions)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.error(error));\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "python",
        label: "Python",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-python",
            children: "import requests\n\nurl = \"https://api.themoviedb.org/3/movie/313\"\n\npayload = {}\nheaders = {\n    \"Authorization\": \"Bearer\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-response",
      children: "Example response"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"adult\": false,\n    \"backdrop_path\": \"/aN5soKp3KMT5Z0LmA9lAu44V3R9.jpg\",\n    \"belongs_to_collection\": null,\n    \"budget\": 12000000,\n    \"genres\": [\n        {\n            \"id\": 10749,\n            \"name\": \"Romance\"\n        },\n        {\n            \"id\": 18,\n            \"name\": \"Drama\"\n        }\n    ],\n    \"homepage\": \"\",\n    \"id\": 313,\n    \"imdb_id\": \"tt0448124\",\n    \"origin_country\": [\n        \"CA\",\n        \"GB\",\n        \"US\"\n    ],\n    \"original_language\": \"en\",\n    \"original_title\": \"Snow Cake\",\n    \"overview\": \"A drama focused on the friendship between a high-functioning autistic woman and a man who is traumatized after a fatal car accident.\",\n    \"popularity\": 0.617,\n    \"poster_path\": \"/dzKNKUqaDu9JCUmjhuoDd8KQBBs.jpg\",\n    \"production_companies\": [\n        {\n            \"id\": 163,\n            \"logo_path\": null,\n            \"name\": \"Revolution Films\",\n            \"origin_country\": \"GB\"\n        },\n        {\n            \"id\": 164,\n            \"logo_path\": \"/v3zcUepvKC7Vz36yjklk1rw6k8Q.png\",\n            \"name\": \"Rhombus Media\",\n            \"origin_country\": \"CA\"\n        }\n    ],\n    \"production_countries\": [\n        {\n            \"iso_3166_1\": \"CA\",\n            \"name\": \"Canada\"\n        },\n        {\n            \"iso_3166_1\": \"GB\",\n            \"name\": \"United Kingdom\"\n        }\n    ],\n    \"release_date\": \"2006-09-08\",\n    \"revenue\": 1381665,\n    \"runtime\": 112,\n    \"spoken_languages\": [\n        {\n            \"english_name\": \"English\",\n            \"iso_639_1\": \"en\",\n            \"name\": \"English\"\n        }\n    ],\n    \"status\": \"Released\",\n    \"tagline\": \"\",\n    \"title\": \"Snow Cake\",\n    \"video\": false,\n    \"vote_average\": 7.119,\n    \"vote_count\": 193,\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "response-fields",
      children: "Response fields"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Field"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "adult"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Whether the movie is classified as adult content"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "backdrop_path"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The partial path of the movie's backdrop image"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "belongs_to_collection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "object"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Details of the collection that the movie belongs to. It can be null"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "budget"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The budget of the movie. The value is in dollars"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "genres"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The list of different genres under which the movie is categorised"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "genres[].id"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The id of the genre"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "genres[].name"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The name of the genre corresponding to the genre id"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "homepage"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Official site URL of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "id"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The TMDB id of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "imdb_id"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The IMDB id of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "origin_country"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "List of ISO 3166-1 country codes"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "original_language"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The original language of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "original_title"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The original title of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "overview"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The description of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "popularity"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "TMDB's popularity score for the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "poster_path"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The partial path of the movie's poster image"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "production_companies"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The list of production companies of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "production_companies[].id"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Id of the production company"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "production_companies[].logo_path"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The partial path of production company's logo image. It can be null"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "production_companies[].name"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The name of the production company"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "production_companies[].origin_country"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The registered country of the production company. Format used is ISO-3166-1, example US"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "production_countries"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The list of country where the movie is produced"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "production_countries[].iso_3166_1"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The ISO-3166-1 format  of country"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "production_countries[].name"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The name of country"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "release_date"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The actual release date of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "revenue"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The total revenue earned by the movie. The value is in dollars"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "runtime"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The Total duration (in minutes) of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "spoken_languages"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The list of languages spoken in the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "spoken_languages[].english_name"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The english name of the laguage"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "spoken_languages[].iso_639_1"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The iso_639_1  code of the language"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "spoken_languages[].name"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The common name of the laguage"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "status"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The current release status of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "tagline"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The tagline of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "title"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The title of the movie in the requested language"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "video"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Whether the official video(s) of the  movie are present"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "vote_average"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Average voting of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "vote_count"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The total number of votes given to the movie"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "errors",
      children: "Errors"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Status"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Meaning"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Likely cause"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "401"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Unauthorized"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "API key either invalid or missing for authorization"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "404"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Not Found"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The requested path has missing or incorrect entry."
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



},
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},
9686(module) {
module.exports = JSON.parse('{"id":"reference/movie-details","title":"Movies Detail","description":"Get the main highlights of a movie using its ID.","source":"@site/docs/reference/movie-details.md","sourceDirName":"reference","slug":"/reference/movie-details","permalink":"/TMDB/docs/reference/movie-details","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Genre List","permalink":"/TMDB/docs/reference/genre-list"},"next":{"title":"Popular Movies","permalink":"/TMDB/docs/reference/popular-movies"}}')

},

};
;