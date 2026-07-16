"use strict";
exports.ids = ["900"];
exports.modules = {
4914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_popular_movies_md_d7d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_popular_movies_md_d7d_json__rspack_import_0 = __webpack_require__(9000);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {};
const contentTitle = 'Popular Movies';

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
    strong: "strong",
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
        id: "popular-movies",
        children: "Popular Movies"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Get the list of movies sorted by popularity."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "endpoint",
      children: "Endpoint"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "GET /movie/popular"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Full URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "https://api.themoviedb.org/3/movie/popular"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "authentication",
      children: "Authentication"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Requires a Bearer token in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Authorization"
      }), " header. See ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
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
            children: "language"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Sets the language of translatable response text (such as title and overview). Format used is ISO-639-1, example hi-IN. Default value is en-US."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "page"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Returns the specified page of results. Defaults to 1"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "region"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters the results that are released in the specific country. Format used is ISO-3166-1. Default value is US."
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
            children: "curl --location 'https://api.themoviedb.org/3/movie/popular' \\\n--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "javascript",
        label: "JavaScript",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-javascript",
            children: "const myHeaders = new Headers();\nmyHeaders.append(\"Authorization\", \"Bearer YOUR_ACCESS_TOKEN\");\n\nconst requestOptions = {\n  method: \"GET\",\n  headers: myHeaders,\n  redirect: \"follow\",\n};\n\nfetch(\"https://api.themoviedb.org/3/movie/popular\", requestOptions)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.error(error));\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "python",
        label: "Python",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-python",
            children: "import requests\n\nurl = \"https://api.themoviedb.org/3/movie/popular\"\n\npayload = {}\nheaders = {\n    \"Authorization\": \"Bearer YOUR_ACCESS_TOKEN\"\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-response",
      children: "Example response"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"page\": 1,\n    \"results\": [\n        {\n            \"adult\": false,\n            \"backdrop_path\": \"/rZfmzpixLKLR3Hg2u0WgC7XLFl8.jpg\",\n            \"genre_ids\": [\n                27,\n                53\n            ],\n            \"id\": 1339713,\n            \"title\": \"Obsession\",\n            \"original_language\": \"en\",\n            \"original_title\": \"Obsession\",\n            \"overview\": \"After breaking the mysterious \\\"One Wish Willow\\\" to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.\",\n            \"popularity\": 697.4596,\n            \"poster_path\": \"/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg\",\n            \"release_date\": \"2026-05-13\",\n            \"video\": false,\n            \"vote_average\": 8.273,\n            \"vote_count\": 2558\n        },\n        {\n            \"adult\": false,\n            \"backdrop_path\": \"/qjTqY5coNiz6sVtPng40IzltsoN.jpg\",\n            \"genre_ids\": [\n                16,\n                10751,\n                35,\n                12\n            ],\n            \"id\": 1084244,\n            \"title\": \"Toy Story 5\",\n            \"original_language\": \"en\",\n            \"original_title\": \"Toy Story 5\",\n            \"overview\": \"When Bonnie receives a Lilypad tablet as a gift and becomes obsessed, Buzz, Woody, Jessie and the rest of the gang's jobs become exponentially harder when they have to go head to head with the all-new threat to playtime.\",\n            \"popularity\": 668.4493,\n            \"poster_path\": \"/sfQtVlIHljToOwYjhe21KPGzZWK.jpg\",\n            \"release_date\": \"2026-06-17\",\n            \"video\": false,\n            \"vote_average\": 7.398,\n            \"vote_count\": 554\n        },\n        {\n            \"adult\": false,\n            \"backdrop_path\": \"/s6ly8laenkHWlIBRkLSfIuEMLC6.jpg\",\n            \"genre_ids\": [\n                878,\n                53\n            ],\n            \"id\": 1275779,\n            \"title\": \"Disclosure Day\",\n            \"original_language\": \"en\",\n            \"original_title\": \"Disclosure Day\",\n            \"overview\": \"A cybersecurity expert becomes a whistleblower after uncovering secrets about aliens, putting him on the run from a corporation. Meanwhile, a meteorologist experiencing strange phenomena joins forces with him to prove there's life beyond our understanding.\",\n            \"popularity\": 486.3209,\n            \"poster_path\": \"/259wnijEJoJLPuZuscxDTqwnypw.jpg\",\n            \"release_date\": \"2026-06-10\",\n            \"video\": false,\n            \"vote_average\": 6.689,\n            \"vote_count\": 845\n        }\n    ],\n    \"total_pages\": 57937,\n    \"total_results\": 1158724\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Note"
      }), ": The list updates frequently; your results will differ from the example."]
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
              children: "results[].genre_ids"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The id(s) of the genre of the movie"
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
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["The partial path of the movie's poster image. Retrieve the full image URL by calling the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "./configuration",
              children: "/configuration"
            }), " API"]
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
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "total_pages"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The total number of pages that constitute the list"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "total_results"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The total number of results the list contains"
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
9000(module) {
module.exports = JSON.parse('{"id":"reference/popular-movies","title":"Popular Movies","description":"Get the list of movies sorted by popularity.","source":"@site/docs/reference/popular-movies.md","sourceDirName":"reference","slug":"/reference/popular-movies","permalink":"/TMDB/docs/reference/popular-movies","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Movies Detail","permalink":"/TMDB/docs/reference/movie-details"},"next":{"title":"Search Movies","permalink":"/TMDB/docs/reference/search-movies"}}')

},

};
;