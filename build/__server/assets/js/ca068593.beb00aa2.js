"use strict";
exports.ids = ["433"];
exports.modules = {
9231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_material_glossary_md_ca0_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_material_glossary_md_ca0_json__rspack_import_0 = __webpack_require__(648);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {};
const contentTitle = 'Glossary';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "glossary",
        children: "Glossary"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)("dl", {
      className: "glossary",
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "API key"
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dd", {
        children: "Key tied to the application that is used to identify the application or third-party platform for server-to-server communication."
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "Bearer token"
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dd", {
        children: "A token sent in the Authorization header to authenticate requests. The token should be kept secret and never exposed in client-side code, shared files, or version control."
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "ISO 639-1"
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)("dd", {
        children: ["The internationally recognized format used to identify language using two letters, for example ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "en"
        }), "."]
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "ISO 3166-1"
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)("dd", {
        children: ["The internationally recognized format used to identify country using two letters, for example ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "US"
        }), "."]
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)("dt", {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)("code", {
          children: " append_to_response"
        }), " "]
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)("dd", {
        children: [" A query parameter on detail endpoints that adds additional sub-resource data to the same request separated by comma. The values should be subrequest of the parent request endpoint and should be valid individual endpoint. For example, if ", (0,react_jsx_runtime__rspack_import_1.jsxs)("code", {
          children: ["/movie/", id, "/reviews"]
        }), " is a valid request, then ", (0,react_jsx_runtime__rspack_import_1.jsx)("code", {
          children: "reviews"
        }), " can be appended in the detail API."]
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "Enum"
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dd", {
        children: "Predefined and fixed set of values that are allowed in query parameter. Values outside the enum values are rejected or silently ignored by the request API."
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "Path parameter"
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dd", {
        children: "A variable value in path of an API request that identifies which specific resource to retrieve. It is almost always required in an API request. "
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "Query parameter"
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)("dd", {
        children: ["Key-value pair in an API request that is used to filter or sort the response based on requested data. It can be optional or required and comes after the question mark (", (0,react_jsx_runtime__rspack_import_1.jsx)("code", {
          children: "?"
        }), ") in a request."]
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "String"
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)("dd", {
        children: ["The value that is enclosed in double quotes and can contain letters, numbers, spaces, and symbols . For example,", (0,react_jsx_runtime__rspack_import_1.jsx)("code", {
          children: "\"string\""
        }), "`."]
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "Array"
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)("dd", {
        children: ["An ordered list of values that can include string, numbers or objects. It is included within square brackets marks (", (0,react_jsx_runtime__rspack_import_1.jsx)("code", {
          children: "[28, 12, 878]"
        }), ")."]
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "Integer"
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dd", {
        children: "The value that has only whole numbers."
      }), (0,react_jsx_runtime__rspack_import_1.jsx)("dt", {
        children: "Number"
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)("dd", {
        children: ["A numeric value that can include decimals. For example, ", (0,react_jsx_runtime__rspack_import_1.jsx)("code", {
          children: "8.5"
        }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)("code", {
          children: "697.4596"
        }), "."]
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
648(module) {
module.exports = JSON.parse('{"id":"reference-material/glossary","title":"Glossary","description":"API key","source":"@site/docs/reference-material/glossary.md","sourceDirName":"reference-material","slug":"/reference-material/glossary","permalink":"/TMDB/docs/reference-material/glossary","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Errors","permalink":"/TMDB/docs/reference-material/error"},"next":{"title":"working-with-image","permalink":"/TMDB/docs/reference-material/working-with-image"}}')

},

};
;