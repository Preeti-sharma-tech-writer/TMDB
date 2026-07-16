"use strict";
exports.ids = ["541"];
exports.modules = {
2845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_search_movies_md_e84_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_search_movies_md_e84_json__rspack_import_0 = __webpack_require__(3742);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {};
const contentTitle = 'Search Movies';

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
  "value": "Example request",
  "id": "example-request-1",
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
        id: "search-movies",
        children: "Search Movies"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The keyword can be a movie title or original title."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "endpoint",
      children: "Endpoint"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "GET /search/movie"
      }), "\nFull URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://api.themoviedb.org/3/search/movie",
        children: "https://api.themoviedb.org/3/search/movie"
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
              children: "query"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "yes"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Searches for the movie whose title or original title matches the text entered."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "include_adult"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["When ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "true"
            }), ", allows adult titles to appear in the results. Defaults to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "false"
            }), "."]
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
            }), ").   Format used is ISO-639-1, example en-US."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "primary_release_year"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose primary (official) release year matches."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "year"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies that had any release in the given year (broader than primary_release_year, which matches only the official release year)."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "page"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Returns the specified page of results. Defaults to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "1"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-request",
      children: "Example request"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-request-1",
      children: "Example request"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(Tabs, {
      groupId: "api-language",
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "curl",
        label: "cURL",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-bash",
            children: "curl --location 'https://api.themoviedb.org/3/search/movie?query=her&include_adult=false&language=es-ES&primary_release_year=2010&page=3' \\\n--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "javascript",
        label: "JavaScript",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-javascript",
            children: "const myHeaders = new Headers();\nmyHeaders.append(\"Authorization\", \"Bearer YOUR_ACCESS_TOKEN\");\n\nconst requestOptions = {\n  method: \"GET\",\n  headers: myHeaders,\n  redirect: \"follow\",\n};\n\nfetch(\"https://api.themoviedb.org/3/search/movie?query=her&include_adult=false&language=es-ES&primary_release_year=2010&page=3\", requestOptions)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.error(error));\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "python",
        label: "Python",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-python",
            children: "import requests\n\nurl = \"https://api.themoviedb.org/3/search/movie?query=her&include_adult=false&language=es-ES&primary_release_year=2010&page=3\"\n\npayload = {}\nheaders = {\n    \"Authorization\": \"Bearer YOUR_ACCESS_TOKEN\"\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-response",
      children: "Example response"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        metastring: "{",
        children: "    \"page\": 3,\n    \"results\": [\n        {\n            \"adult\": false,\n            \"backdrop_path\": \"/owZjVtbtThrdZIf5rnLn4gazRGe.jpg\",\n            \"genre_ids\": [\n                99\n            ],\n            \"id\": 98326,\n            \"title\": \"Olímpicamente grandes\",\n            \"original_language\": \"de\",\n            \"original_title\": \"Herbstgold\",\n            \"overview\": \"En Europa se está produciendo una curiosa corriente: su población envejece, pero están creciendo los clubes deportivos para gente mayor. Esto es en lo que se basa el documental. 'Olímpicamente grandes', un filme protagonizado por atletas de entre 80 y 100 años. Cada uno de ellos tiene su propia historia: algunos han superado problemas personales, han sobrevivido a la guerra o han vencido a una enfermedad que amenazaba con quitarles la vida. Ahora todos ellos están unidos por el deporte y tienen como objetivo llegar en buenas condiciones al campeonato del mundo de atletismo para mayores de Finlandia.\",\n            \"popularity\": 0.2735,\n            \"poster_path\": \"/beSJRL88gitxFFnViOppnU7BhEj.jpg\",\n            \"release_date\": \"2010-07-08\",\n            \"video\": false,\n            \"vote_average\": 5.2,\n            \"vote_count\": 3\n        },\n        {\n            \"adult\": false,\n            \"backdrop_path\": \"/j4wwKS0aokfGe7QDYqU2k6744hi.jpg\",\n            \"genre_ids\": [\n                99,\n                27\n            ],\n            \"id\": 58862,\n            \"title\": \"Herschell Gordon Lewis: The Godfather of Gore\",\n            \"original_language\": \"en\",\n            \"original_title\": \"Herschell Gordon Lewis: The Godfather of Gore\",\n            \"overview\": \"\",\n            \"popularity\": 0.2233,\n            \"poster_path\": \"/mzwiMxr0a5xOe3R8d5c2DlkCYzM.jpg\",\n            \"release_date\": \"2010-06-01\",\n            \"video\": false,\n            \"vote_average\": 5.977,\n            \"vote_count\": 22\n        },\n        {\n            \"adult\": false,\n            \"backdrop_path\": null,\n            \"genre_ids\": [\n                35\n            ],\n            \"id\": 271981,\n            \"title\": \"Herkes mi Aldatır?\",\n            \"original_language\": \"tr\",\n            \"original_title\": \"Herkes mi Aldatır?\",\n            \"overview\": \"\",\n            \"popularity\": 0.6672,\n            \"poster_path\": \"/qoVpsQJNtajF4fBhIelRPet9p28.jpg\",\n            \"release_date\": \"2010-04-02\",\n            \"video\": false,\n            \"vote_average\": 4.0,\n            \"vote_count\": 4\n        },\n        {\n            \"adult\": false,\n            \"backdrop_path\": null,\n            \"genre_ids\": [\n                10402,\n                99\n            ],\n            \"id\": 65860,\n            \"title\": \"Heretik System: We Had A Dream\",\n            \"original_language\": \"fr\",\n            \"original_title\": \"Heretik System: We Had A Dream\",\n            \"overview\": \"\",\n            \"popularity\": 0.0997,\n            \"poster_path\": \"/hJwdD1ESwwIIcfGG54gidqAJxmS.jpg\",\n            \"release_date\": \"2010-11-08\",\n            \"video\": false,\n            \"vote_average\": 5.3,\n            \"vote_count\": 3\n        },\n        {\n            \"adult\": false,\n            \"backdrop_path\": null,\n            \"genre_ids\": [\n                18,\n                53\n            ],\n            \"id\": 4440,\n            \"title\": \"Herzensschrei\",\n            \"original_language\": \"en\",\n            \"original_title\": \"Herzensschrei\",\n            \"overview\": \"\",\n            \"popularity\": 0.1073,\n            \"poster_path\": null,\n            \"release_date\": \"2010-10-01\",\n            \"video\": false,\n            \"vote_average\": 0.0,\n            \"vote_count\": 0\n        },\n        {\n            \"adult\": false,\n            \"backdrop_path\": null,\n            \"genre_ids\": [],\n            \"id\": 265839,\n            \"title\": \"Here Come the Girls 2\",\n            \"original_language\": \"en\",\n            \"original_title\": \"Here Come the Girls 2\",\n            \"overview\": \"\",\n            \"popularity\": 0.1083,\n            \"poster_path\": null,\n            \"release_date\": \"2010-06-28\",\n            \"video\": true,\n            \"vote_average\": 4.8,\n            \"vote_count\": 2\n        },\n        {\n            \"adult\": false,\n            \"backdrop_path\": null,\n            \"genre_ids\": [\n                18\n            ],\n            \"id\": 542237,\n            \"title\": \"Hermoso Silencio\",\n            \"original_language\": \"es\",\n            \"original_title\": \"Hermoso Silencio\",\n            \"overview\": \"\",\n            \"popularity\": 0.083,\n            \"poster_path\": \"/4jjPTR58LydhhcpGOOrVoj5bkQD.jpg\",\n            \"release_date\": \"2010-01-01\",\n            \"video\": false,\n            \"vote_average\": 5.0,\n            \"vote_count\": 2\n        }\n    ],\n    \"total_pages\": 10,\n    \"total_results\": 198\n}\n"
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
              children: "page"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The page number with the corresponding results"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "List of matching movies"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "total_pages"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The total number of pages available for this query"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "total_results"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The total number of movies available for this query"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].adult"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Whether the movie is classified as adult content"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].genre_ids"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The ids of the genre of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].id"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The id of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].title"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The title of the movie. The title is changed to the language set in query param"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].original_title"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The original title of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].original_language"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The original language of the movie. The format used is iso_639_1"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].backdrop_path"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["The partial path of the movie's backdrop image. Retrieve the full image URL by calling the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "/TMDB/docs/reference/configuration",
              children: "/configuration"
            }), " API"]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].overview"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The description of the movie. The overview is changed to the language set in query param"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].popularity"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "TMDB's popularity score for the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].poster_path"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The partial path of the movie's poster image"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].release_date"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The primary release date of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].video"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Whether the official video(s) of the movie are present"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].vote_average"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Average voting of the movie"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "results[].vote_count"
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
            children: "The requested path has missing or incorrect entry"
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
3742(module) {
module.exports = JSON.parse('{"id":"reference/search-movies","title":"Search Movies","description":"The keyword can be a movie title or original title.","source":"@site/docs/reference/search-movies.md","sourceDirName":"reference","slug":"/reference/search-movies","permalink":"/TMDB/docs/reference/search-movies","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Popular Movies","permalink":"/TMDB/docs/reference/popular-movies"},"next":{"title":"Errors","permalink":"/TMDB/docs/reference-material/error"}}')

},

};
;