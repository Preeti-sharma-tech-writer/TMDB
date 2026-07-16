exports.ids = ["702"];
exports.modules = {
2157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_genre_list_md_4bf_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_genre_list_md_4bf_json__rspack_import_0 = __webpack_require__(1773);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_4 = __webpack_require__(8453);
/* import */ var _theme_Tabs__rspack_import_2 = __webpack_require__(2614);
/* import */ var _theme_TabItem__rspack_import_3 = __webpack_require__(9314);


const frontMatter = {};
const contentTitle = 'Genre List';

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
    ...(0,_mdx_js_react__rspack_import_4/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "genre-list",
        children: "Genre List"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Get the list of all the movies or tv shows genre and their code."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "endpoint",
      children: "Endpoint"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "GET /genre/movie/list"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "GET /genre/tv/list"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Full URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "https://api.themoviedb.org/3/genre/movie/list"
      }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "https://api.themoviedb.org/3/genre/tv/list"
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
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
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
            children: "Sets the language of the genre name to the requested language. Format used is ISO-639-1, example en-US. Default value is en-US."
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-request",
      children: "Example request"
    }), "\n", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_theme_Tabs__rspack_import_2/* ["default"] */.A, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_theme_TabItem__rspack_import_3/* ["default"] */.A, {
        value: "curl",
        label: "cURL",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-bash",
            children: "curl --location 'https://api.themoviedb.org/3/genre/movie/list?language=es-ES' \\\n--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_theme_TabItem__rspack_import_3/* ["default"] */.A, {
        value: "js",
        label: "JavaScript",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-javascript",
            children: "const myHeaders = new Headers();\nmyHeaders.append(\"Authorization\", \"Bearer YOUR_ACCESS_TOKEN\");\n\nfetch(\"https://api.themoviedb.org/3/genre/movie/list?language=es-ES\", {\n  method: \"GET\",\n  headers: myHeaders,\n})\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.error(error));\n"
          })
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_theme_TabItem__rspack_import_3/* ["default"] */.A, {
        value: "python",
        label: "Python",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-python",
            children: "import requests\n\nurl = \"https://api.themoviedb.org/3/genre/movie/list?language=es-ES\"\nheaders = {\"Authorization\": \"Bearer YOUR_ACCESS_TOKEN\"}\n\nresponse = requests.request(\"GET\", url, headers=headers)\nprint(response.text)\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-response",
      children: "Example response"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"genres\": [\n        {\n            \"id\": 28,\n            \"name\": \"Acción\"\n        },\n        {\n            \"id\": 12,\n            \"name\": \"Aventura\"\n        },\n        {\n            \"id\": 16,\n            \"name\": \"Animación\"\n        },\n        {\n            \"id\": 35,\n            \"name\": \"Comedia\"\n        },\n        {\n            \"id\": 80,\n            \"name\": \"Crimen\"\n        },\n        {\n            \"id\": 99,\n            \"name\": \"Documental\"\n        },\n        {\n            \"id\": 10402,\n            \"name\": \"Música\"\n        },\n        {\n            \"id\": 37,\n            \"name\": \"Western\"\n        }\n    ]\n}\n"
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
              children: "genres"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "List of all the genres available for tv shows or movies"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "genres[].id"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "integer"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "The ID of the corresponding genre"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "genres[].name"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.td, {
            children: ["The name of the corresponding genre. The name is changed to the language set in query param. If it is not translatable to the requested language, response shows ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "null"
            }), "."]
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
    ...(0,_mdx_js_react__rspack_import_4/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
9296(module) {
// Exports
module.exports = {
	"tabItem": `tabItem_Ymn6`
};


},
8644(module) {
// Exports
module.exports = {
	"tabList": `tabList__CuJ`,
	"tabItem": `tabItem_LNqP`
};


},
9314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (TabItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(7663);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(9296);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function TabItemPanel({ children, className, hidden }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        role: "tabpanel",
        className: (0,clsx__rspack_import_3/* ["default"] */.A)((_styles_module_css__rspack_import_2_default().tabItem), className),
        hidden,
        children: children
    });
}
function TabItem({ children, className, value }) {
    const { selectedValue, lazy } = (0,_docusaurus_theme_common_internal__rspack_import_4/* .useTabs */.uc)();
    const isSelected = value === selectedValue;
    // TODO Docusaurus v4: use <Activity> ?
    if (!isSelected && lazy) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TabItemPanel, {
        className: className,
        hidden: !isSelected,
        children: children
    });
}


},
2614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Tabs)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(8287);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(7663);
/* import */ var _docusaurus_theme_common_internal__rspack_import_5 = __webpack_require__(8584);
/* import */ var _docusaurus_useIsBrowser__rspack_import_2 = __webpack_require__(9863);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(8644);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function TabList({ className }) {
    const { selectedValue, selectValue, tabValues, block } = (0,_docusaurus_theme_common_internal__rspack_import_4/* .useTabs */.uc)();
    const tabRefs = [];
    const { blockElementScrollPositionUntilNextRender } = (0,_docusaurus_theme_common_internal__rspack_import_5/* .useScrollPositionBlocker */.a_)();
    const handleTabChange = (event)=>{
        const newTab = event.currentTarget;
        const newTabIndex = tabRefs.indexOf(newTab);
        const newTabValue = tabValues[newTabIndex].value;
        if (newTabValue !== selectedValue) {
            blockElementScrollPositionUntilNextRender(newTab);
            selectValue(newTabValue);
        }
    };
    const handleKeydown = (event)=>{
        let focusElement = null;
        switch(event.key){
            case 'Enter':
                {
                    handleTabChange(event);
                    break;
                }
            case 'ArrowRight':
                {
                    const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
                    focusElement = tabRefs[nextTab] ?? tabRefs[0];
                    break;
                }
            case 'ArrowLeft':
                {
                    const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
                    focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1];
                    break;
                }
            default:
                break;
        }
        focusElement?.focus();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        role: "tablist",
        "aria-orientation": "horizontal",
        className: (0,clsx__rspack_import_6/* ["default"] */.A)('tabs', {
            'tabs--block': block
        }, className),
        children: tabValues.map(({ value, label, attributes })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                // TODO extract TabListItem
                role: "tab",
                tabIndex: selectedValue === value ? 0 : -1,
                "aria-selected": selectedValue === value,
                ref: (ref)=>{
                    tabRefs.push(ref);
                },
                onKeyDown: handleKeydown,
                onClick: handleTabChange,
                ...attributes,
                className: (0,clsx__rspack_import_6/* ["default"] */.A)('tabs__item', (_styles_module_css__rspack_import_3_default().tabItem), attributes?.className, {
                    'tabs__item--active': selectedValue === value
                }),
                children: label ?? value
            }, value))
    });
}
function TabContent({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: "margin-top--md",
        children: children
    });
}
function TabsContainer({ className, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,clsx__rspack_import_6/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_7/* .ThemeClassNames.tabs.container */.G.tabs.container, // former name kept for backward compatibility
        // see https://github.com/facebook/docusaurus/pull/4086
        'tabs-container', (_styles_module_css__rspack_import_3_default().tabList)),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TabList, {
                // Surprising but historical
                // className is applied on TabList, not on TabsContainer
                className: className
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TabContent, {
                children: children
            })
        ]
    });
}
function Tabs(props) {
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_2/* ["default"] */.A)();
    const value = (0,_docusaurus_theme_common_internal__rspack_import_4/* .useTabsContextValue */.OC)(props);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common_internal__rspack_import_4/* .TabsProvider */.O_, {
        value: value,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TabsContainer, {
            className: props.className,
            children: (0,_docusaurus_theme_common_internal__rspack_import_4/* .sanitizeTabsChildren */.vT)(props.children)
        })
    }, String(isBrowser));
}


},
7663(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  OC: () => (useTabsContextValue),
  O_: () => (TabsProvider),
  uc: () => (useTabs),
  vT: () => (sanitizeTabsChildren)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_router__rspack_import_4 = __webpack_require__(6347);
/* import */ var _docusaurus_useIsomorphicLayoutEffect__rspack_import_2 = __webpack_require__(9989);
/* import */ var _docusaurus_theme_common_internal__rspack_import_5 = __webpack_require__(6629);
/* import */ var _index__rspack_import_3 = __webpack_require__(618);
/* import */ var _index__rspack_import_6 = __webpack_require__(4498);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function sanitizeTabsChildren(children) {
    return react__rspack_import_1.Children.toArray(children).filter((child)=>child !== '\n');
}
function extractChildrenTabValues(children) {
    // ✅ <TabItem value="red"/> => true
    // ✅ <CustomTabItem value="red"/> => true
    // ❌ <RedTabItem value="tab-value"/> => requires <Tabs values> prop
    function isTabItemWithValueProp(comp) {
        const { props } = comp;
        return !!props && typeof props === 'object' && 'value' in props;
    }
    const elements = react__rspack_import_1.Children.toArray(children).flatMap((child)=>{
        // Historical case, not sure when it happens, do we really need this?
        if (!child) {
            return [];
        }
        if (/*#__PURE__*/ (0,react__rspack_import_1.isValidElement)(child) && isTabItemWithValueProp(child)) {
            return [
                child
            ];
        }
        // child.type.name will give non-sensical values in prod because of
        // minification, but we assume it won't throw in prod.
        const badChildTypeName = // @ts-expect-error: guarding against unexpected cases
        typeof child.type === 'string' ? child.type : child.type.name;
        throw new Error(`Docusaurus error: Bad <Tabs> child <${badChildTypeName}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`);
    });
    return elements.map(({ props: { value, label, attributes, default: isDefault } })=>({
            value,
            label,
            attributes,
            default: isDefault
        }));
}
function ensureNoDuplicateValue(values) {
    const dup = (0,_index__rspack_import_3/* .duplicates */.XI)(values, (a, b)=>a.value === b.value);
    if (dup.length > 0) {
        throw new Error(`Docusaurus error: Duplicate values "${dup.map((a)=>`'${a.value}'`).join(', ')}" found in <Tabs>. Every value needs to be unique.`);
    }
}
function useTabValues(props) {
    const { values: valuesProp, children } = props;
    return (0,react__rspack_import_1.useMemo)(()=>{
        const values = valuesProp ?? extractChildrenTabValues(children);
        ensureNoDuplicateValue(values);
        return values;
    }, [
        valuesProp,
        children
    ]);
}
function isValidValue({ value, tabValues }) {
    return tabValues.some((a)=>a.value === value);
}
function getInitialStateValue({ defaultValue, tabValues }) {
    if (tabValues.length === 0) {
        throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');
    }
    if (defaultValue) {
        // Warn user about passing incorrect defaultValue as prop.
        if (!isValidValue({
            value: defaultValue,
            tabValues
        })) {
            throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map((a)=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);
        }
        return defaultValue;
    }
    const defaultTabValue = tabValues.find((tabValue)=>tabValue.default) ?? tabValues[0];
    if (!defaultTabValue) {
        throw new Error('Unexpected error: 0 tabValues');
    }
    return defaultTabValue.value;
}
function getStorageKey(groupId) {
    if (!groupId) {
        return null;
    }
    return `docusaurus.tab.${groupId}`;
}
function getQueryStringKey({ queryString = false, groupId }) {
    if (typeof queryString === 'string') {
        return queryString;
    }
    if (queryString === false) {
        return null;
    }
    if (queryString === true && !groupId) {
        throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);
    }
    return groupId ?? null;
}
function useTabQueryString({ queryString = false, groupId }) {
    const history = (0,_docusaurus_router__rspack_import_4/* .useHistory */.W6)();
    const key = getQueryStringKey({
        queryString,
        groupId
    });
    const value = (0,_docusaurus_theme_common_internal__rspack_import_5/* .useQueryStringValue */.aZ)(key);
    const setValue = (0,react__rspack_import_1.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        const searchParams = new URLSearchParams(history.location.search);
        searchParams.set(key, newValue);
        history.replace({
            ...history.location,
            search: searchParams.toString()
        });
    }, [
        key,
        history
    ]);
    return [
        value,
        setValue
    ];
}
function useTabStorage({ groupId }) {
    const key = getStorageKey(groupId);
    const [value, storageSlot] = (0,_index__rspack_import_6/* .useStorageSlot */.Dv)(key);
    const setValue = (0,react__rspack_import_1.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        storageSlot.set(newValue);
    }, [
        key,
        storageSlot
    ]);
    return [
        value,
        setValue
    ];
}
function useTabsContextValue(props) {
    const { defaultValue, queryString = false, groupId } = props;
    const tabValues = useTabValues(props);
    const [selectedValue, setSelectedValue] = (0,react__rspack_import_1.useState)(()=>getInitialStateValue({
            defaultValue,
            tabValues
        }));
    const [queryStringValue, setQueryString] = useTabQueryString({
        queryString,
        groupId
    });
    const [storageValue, setStorageValue] = useTabStorage({
        groupId
    });
    // We sync valid querystring/storage value to state on change + hydration
    const valueToSync = (()=>{
        const value = queryStringValue ?? storageValue;
        if (!isValidValue({
            value,
            tabValues
        })) {
            return null;
        }
        return value;
    })();
    // Sync in a layout/sync effect is important, for useScrollPositionBlocker
    // See https://github.com/facebook/docusaurus/issues/8625
    (0,_docusaurus_useIsomorphicLayoutEffect__rspack_import_2/* ["default"] */.A)(()=>{
        if (valueToSync) {
            setSelectedValue(valueToSync);
        }
    }, [
        valueToSync
    ]);
    const selectValue = (0,react__rspack_import_1.useCallback)((newValue)=>{
        if (!isValidValue({
            value: newValue,
            tabValues
        })) {
            throw new Error(`Can't select invalid tab value=${newValue}`);
        }
        setSelectedValue(newValue);
        setQueryString(newValue);
        setStorageValue(newValue);
    }, [
        setQueryString,
        setStorageValue,
        tabValues
    ]);
    return {
        selectedValue,
        selectValue,
        tabValues,
        lazy: props.lazy ?? false,
        block: props.block ?? false
    };
}
const TabsContext = /*#__PURE__*/ (0,react__rspack_import_1.createContext)(null);
function useTabs() {
    const contextValue = react__rspack_import_1.useContext(TabsContext);
    if (!contextValue) {
        throw new Error('useTabsContext() must be used within a Tabs component');
    }
    return contextValue;
}
function TabsProvider(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TabsContext.Provider, {
        value: props.value,
        children: props.children
    });
} //# sourceMappingURL=tabsUtils.js.map


},
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
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
1773(module) {
"use strict";
module.exports = JSON.parse('{"id":"reference/genre-list","title":"Genre List","description":"Get the list of all the movies or tv shows genre and their code.","source":"@site/docs/reference/genre-list.md","sourceDirName":"reference","slug":"/reference/genre-list","permalink":"/TMDB/docs/reference/genre-list","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Discover Movies","permalink":"/TMDB/docs/reference/discover-movies"},"next":{"title":"Movies Detail","permalink":"/TMDB/docs/reference/movie-details"}}')

},

};
;