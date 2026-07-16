"use strict";
exports.ids = ["961"];
exports.modules = {
561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_configuration_md_306_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_configuration_md_306_json__rspack_import_0 = __webpack_require__(3894);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {};
const contentTitle = 'Configuration';

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
        id: "configuration",
        children: "Configuration"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Get key details that are required to integrate TMDB APIs."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "endpoint",
      children: "Endpoint"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "GET /configuration"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Full URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "https://api.themoviedb.org/3/configuration"
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
            children: "curl --location 'https://api.themoviedb.org/3/configuration' \\\n--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "javascript",
        label: "JavaScript",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-javascript",
            children: "const myHeaders = new Headers();\nmyHeaders.append(\"Authorization\", \"Bearer YOUR_ACCESS_TOKEN\");\n\nconst requestOptions = {\n  method: \"GET\",\n  headers: myHeaders,\n  redirect: \"follow\",\n};\n\nfetch(\"https://api.themoviedb.org/3/configuration\", requestOptions)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.error(error));\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "python",
        label: "Python",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-python",
            children: "import requests\n\nurl = \"https://api.themoviedb.org/3/configuration\"\n\npayload = {}\nheaders = {\n    \"Authorization\": \"Bearer YOUR_ACCESS_TOKEN\"\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-response",
      children: "Example response"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: " {\n    \"change_keys\": [\n        \"adult\",\n        \"air_date\",\n        \"also_known_as\",\n        \"alternative_titles\",\n        \"biography\",\n        \"birthday\",\n        \"budget\",\n        \"cast\",\n        \"certifications\",\n        \"character_names\",\n        \"created_by\",\n        \"crew\",\n        \"deathday\",\n        \"episode\",\n        \"episode_number\",\n        \"episode_run_time\",\n        \"freebase_id\",\n        \"freebase_mid\",\n        \"general\",\n        \"genres\",\n        \"guest_stars\",\n        \"homepage\",\n        \"images\",\n        \"imdb_id\",\n        \"languages\",\n        \"name\",\n        \"network\",\n        \"origin_country\",\n        \"original_name\",\n        \"original_title\",\n        \"overview\",\n        \"parts\",\n        \"place_of_birth\",\n        \"plot_keywords\",\n        \"production_code\",\n        \"production_companies\",\n        \"production_countries\",\n        \"releases\",\n        \"revenue\",\n        \"runtime\",\n        \"season\",\n        \"season_number\",\n        \"season_regular\",\n        \"softcore\",\n        \"spoken_languages\",\n        \"status\",\n        \"tagline\",\n        \"title\",\n        \"translations\",\n        \"tvdb_id\",\n        \"tvrage_id\",\n        \"type\",\n        \"video\",\n        \"videos\"\n    ],\n    \"images\": {\n        \"base_url\": \"http://image.tmdb.org/t/p/\",\n        \"secure_base_url\": \"https://image.tmdb.org/t/p/\",\n        \"backdrop_sizes\": [\n            \"w300\",\n            \"w780\",\n            \"w1280\",\n            \"original\"\n        ],\n        \"logo_sizes\": [\n            \"w45\",\n            \"w92\",\n            \"w154\",\n            \"w185\",\n            \"w300\",\n            \"w500\",\n            \"original\"\n        ],\n        \"poster_sizes\": [\n            \"w92\",\n            \"w154\",\n            \"w185\",\n            \"w342\",\n            \"w500\",\n            \"w780\",\n            \"original\"\n        ],\n        \"profile_sizes\": [\n            \"w45\",\n            \"w185\",\n            \"h632\",\n            \"original\"\n        ],\n        \"still_sizes\": [\n            \"w92\",\n            \"w185\",\n            \"w300\",\n            \"original\"\n        ]\n    }\n}\n"
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
              children: "change_keys"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {})]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "images.base_url"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The base URL (HTTP) used to construct image URLs."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "images.secure_base_url"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The HTTPS-encrypted root path of the complete web address."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "images.backdrop_sizes"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "List of all the available sizes for backdrop images."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "images.logo_sizes"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "List of all the available sizes for logo images."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "images.poster_sizes"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "List of all the available sizes for poster images."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "images.profile_sizes"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "List of all the available sizes for the profile images."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "images.still_sizes"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "List of all the available sizes for still images."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Note"
      }), ": To build a full image URL, combine three pieces: secure_base_url + a size + the image path from any movie response. For example: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "https://image.tmdb.org/t/p/"
      }), " + ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "w500"
      }), " + ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg"
      }), " = ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg"
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
3894(module) {
module.exports = JSON.parse('{"id":"reference/configuration","title":"Configuration","description":"Get key details that are required to integrate TMDB APIs.","source":"@site/docs/reference/configuration.md","sourceDirName":"reference","slug":"/reference/configuration","permalink":"/TMDB/docs/reference/configuration","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"API Reference","permalink":"/TMDB/docs/category/api-reference"},"next":{"title":"Discover Movies","permalink":"/TMDB/docs/reference/discover-movies"}}')

},

};
;