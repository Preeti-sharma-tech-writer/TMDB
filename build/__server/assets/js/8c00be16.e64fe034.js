"use strict";
exports.ids = ["455"];
exports.modules = {
9472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_discover_movies_md_8c0_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_discover_movies_md_8c0_json__rspack_import_0 = __webpack_require__(3813);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {};
const contentTitle = 'Discover Movies';

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
  "value": "Movie Certification Parameters",
  "id": "movie-certification-parameters",
  "level": 3
}, {
  "value": "Release Date Parameters",
  "id": "release-date-parameters",
  "level": 3
}, {
  "value": "Vote Parameters",
  "id": "vote-parameters",
  "level": 3
}, {
  "value": "General &amp; Sort Parameters",
  "id": "general--sort-parameters",
  "level": 3
}, {
  "value": "Exclusion Parameters",
  "id": "exclusion-parameters",
  "level": 3
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
    h3: "h3",
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
        id: "discover-movies",
        children: "Discover Movies"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Get movies based on filters and sorting options."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "endpoint",
      children: "Endpoint"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "GET /discover/movie"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Full URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "https://api.themoviedb.org/3/discover/movie"
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
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "movie-certification-parameters",
      children: "Movie Certification Parameters"
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
              children: "certification"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies whose country-specific certification matches. Use this along with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "certification_country"
            }), " parameter."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "certification.gte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters the movie list based on the minimum acceptable certification.  Use this along with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "certification_country"
            }), " parameter."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "certification.lte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters the movie list based on the maximum acceptable certification.  Use this along with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "certification_country"
            }), " parameter."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "certification_country"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["The country whose rating system should be used to interpret the certification. Use this along with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "certification"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "certification.gte"
            }), "and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "certification.lte"
            }), " parameters.  Format used is ISO-3166-1, example US."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "release-date-parameters",
      children: "Release Date Parameters"
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
              children: "primary_release_year"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose primary (official) release year matches."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "primary_release_date.gte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies whose primary (official) release is on or after the requested date. Format used is YYYY-MM-DDThh:mm", ":ss", "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "primary_release_date.lte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies whose primary (official) release is on or before the requested date. Format used is YYYY-MM-DDThh:mm", ":ss", "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "region"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters the results that are released in the specific country. Format used is ISO-3166-1. Default value is US."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "release_date.gte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies with any of its release date on or after the requested date. Format used is YYYY-MM-DDThh:mm", ":ss", "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "release_date.lte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies with any of its release date on or before the requested date. Format used is YYYY-MM-DDThh:mm", ":ss", "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "watch_region"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["The country whose streaming platforms are checked for the available of the movie. Use this along with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_watch_monetization_types"
            }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_watch_providers"
            }), " parameters. Format used is ISO-3166-1, example US."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_release_type"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies whose release methods (such as, theatrical, digital, physical) represented in form of a code matches. Use this along with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "certification_country"
            }), " parameter. This parameter can have multiple values separated by commas, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AND"
            }), " query, and pipes, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "OR"
            }), ". The order of the release type affects the results. For example, specifying 2"]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_runtime.gte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose total duration is greater than or equal to the requested value."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_runtime.lte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose total duration is less than or equal to the requested value."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_watch_monetization_types"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies whose monetization method matches. The allowed values for are ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "flatrate"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "free"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "ads"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "rent"
            }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "buy"
            }), ". Use this along with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "watch_region"
            }), " parameter.  This parameter can have multiple values separated by commas, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AND"
            }), " query, and pipes, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "OR"
            }), "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_watch_providers"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies that are available on the requested streaming, rental, or purchase services. Use this along with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "watch_region"
            }), " parameter.  This parameter can have multiple values separated by commas, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AND"
            }), " query, and pipes, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "OR"
            }), "."]
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
            children: "Filters results to movies that have any release in the requested year."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "vote-parameters",
      children: "Vote Parameters"
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
              children: "vote_average.gte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose average vote value is greater than or equal to the requested value."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "vote_average.lte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose average vote value is less than or equal to the requested value."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "vote_count.gte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose total number of votes is greater than or equal to the requested value."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "vote_count.lte"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose total number of votes is less than or equal to the requested value."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "general--sort-parameters",
      children: "General & Sort Parameters"
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
              children: "include_adult"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "When true, allows adult titles to appear in the results. Defaults to false."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "include_video"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "When true, allows official videos to appear in the results. Defaults to false."
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
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Sets the language of translatable response text (such as title and overview). Format used is ISO-639-1, example en-US."
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
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Returns the specified page of results. Defaults to 1."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "sort_by"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Sort the movie list based on the requested property, which can have ascending or descending order. The allowed values are ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "original_title.asc"
            }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "original_title.desc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "popularity.asc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "popularity.desc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "revenue.asc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "revenue.desc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "primary_release_date.asc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "title.asc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "title.desc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "primary_release_date.desc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "vote_average.asc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "vote_average.desc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "vote_count.asc"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "vote_count.desc"
            })]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_cast"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies whose cast matches. This parameter can have multiple values separated by commas, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AND"
            }), " query, and pipes, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "OR"
            }), "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_companies"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies whose official companies are the requested ones. This parameter can have multiple values separated by commas, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AND"
            }), " query, and pipes, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "OR"
            }), "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_crew"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies whose crew matches. This parameter can have multiple values separated by commas, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AND"
            }), " query, and pipes, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "OR"
            }), "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_genres"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies whose genre IDs are the requested ones. This parameter can have multiple values separated by commas, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AND"
            }), " query, and pipes, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "OR"
            }), "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_keywords"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["Filters results to movies tagged with the requested keywords. This parameter can have multiple values separated by commas, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "AND"
            }), " query, and pipes, which are treated like an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "OR"
            }), "."]
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_origin_country"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies that are from the requested origin country. Format used is ISO-3166-1."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_original_language"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose primary language matches."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "with_people"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies that has the mentioned people associated with it."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "exclusion-parameters",
      children: "Exclusion Parameters"
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
              children: "without_companies"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose official companies are NOT the requested ones."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "without_genres"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies whose genre ID is NOT the requested ones."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "without_keywords"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies that DO NOT match the requested keywords."
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "without_watch_providers"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "query"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "no"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Filters results to movies that are NOT available on the requested streaming, rental, or purchase services."
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
            children: "curl --location 'https://api.themoviedb.org/3/discover/movie?certification=UA&certification_country=IN&sort_by=popularity.desc&with_watch_monetization_types=flatrate&watch_region=IN&language=en-US' \\\n--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "javascript",
        label: "JavaScript",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-javascript",
            children: "const myHeaders = new Headers();\nmyHeaders.append(\"Authorization\", \"Bearer YOUR_ACCESS_TOKEN\");\n\nconst requestOptions = {\n  method: \"GET\",\n  headers: myHeaders,\n  redirect: \"follow\",\n};\n\nfetch(\"https://api.themoviedb.org/3/discover/movie?certification=UA&certification_country=IN&sort_by=popularity.desc&with_watch_monetization_types=flatrate&watch_region=IN&language=en-US\", requestOptions)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.error(error));\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(TabItem, {
        value: "python",
        label: "Python",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-python",
            children: "import requests\n\nurl = \"https://api.themoviedb.org/3/discover/movie?certification=UA&certification_country=IN&sort_by=popularity.desc&with_watch_monetization_types=flatrate&watch_region=IN&language=en-US\"\n\npayload = {}\nheaders = {\n    \"Authorization\": \"Bearer YOUR_ACCESS_TOKEN\"\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-response",
      children: "Example response"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"page\": 1,\n    \"results\": [\n        {\n            \"adult\": false,\n            \"backdrop_path\": \"/2ssWTSVklAEc98frZUQhgtGHx7s.jpg\",\n            \"genre_ids\": [\n                12,\n                18,\n                878\n            ],\n            \"id\": 157336,\n            \"title\": \"Interstellar\",\n            \"original_language\": \"en\",\n            \"original_title\": \"Interstellar\",\n            \"overview\": \"The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.\",\n            \"popularity\": 61.8095,\n            \"poster_path\": \"/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg\",\n            \"release_date\": \"2014-11-05\",\n            \"video\": false,\n            \"vote_average\": 8.5,\n            \"vote_count\": 40284\n        },\n        {\n            \"adult\": false,\n            \"backdrop_path\": \"/cyecB7godJ6kNHGONFjUyVN9OX5.jpg\",\n            \"genre_ids\": [\n                28,\n                878,\n                12\n            ],\n            \"id\": 1726,\n            \"title\": \"Iron Man\",\n            \"original_language\": \"en\",\n            \"original_title\": \"Iron Man\",\n            \"overview\": \"After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.\",\n            \"popularity\": 20.5261,\n            \"poster_path\": \"/78lPtwv72eTNqFW9COBYI0dWDJa.jpg\",\n            \"release_date\": \"2008-04-30\",\n            \"video\": false,\n            \"vote_average\": 7.7,\n            \"vote_count\": 28317\n        },\n        {\n            \"adult\": false,\n            \"backdrop_path\": \"/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg\",\n            \"genre_ids\": [\n                28,\n                878,\n                12\n            ],\n            \"id\": 588228,\n            \"title\": \"The Tomorrow War\",\n            \"original_language\": \"en\",\n            \"original_title\": \"The Tomorrow War\",\n            \"overview\": \"The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.\",\n            \"popularity\": 18.4653,\n            \"poster_path\": \"/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg\",\n            \"release_date\": \"2021-09-03\",\n            \"video\": false,\n            \"vote_average\": 7.516,\n            \"vote_count\": 4271\n        }\n    ],\n    \"total_pages\": 118,\n    \"total_results\": 2359\n}\n"
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
              href: ".configuration.md",
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
              href: ".configuration.md",
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
3813(module) {
module.exports = JSON.parse('{"id":"reference/discover-movies","title":"Discover Movies","description":"Get movies based on filters and sorting options.","source":"@site/docs/reference/discover-movies.md","sourceDirName":"reference","slug":"/reference/discover-movies","permalink":"/TMDB/docs/reference/discover-movies","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Configuration","permalink":"/TMDB/docs/reference/configuration"},"next":{"title":"Genre List","permalink":"/TMDB/docs/reference/genre-list"}}')

},

};
;