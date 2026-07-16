"use strict";
exports.ids = ["366"];
exports.modules = {
3829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_material_working_with_image_md_469_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_reference_material_working_with_image_md_469_json__rspack_import_0 = __webpack_require__(6272);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Building an image URL",
  "id": "building-an-image-url",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "building-an-image-url",
      children: "Building an image URL"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Some of the responses mentioned in the API reference pages return partial paths, such as ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "poster_path"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "backdrop_path"
      }), ", and not complete URLs. To complete these URL, three components are needed:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "base_url"
        }), " which is explained in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/TMDB/docs/reference/configuration",
          children: "/configuration"
        }), " endpoint. It is suggested to use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "secure_base_url"
        }), " for HTTPS."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Size"
        }), " which also is mentioned in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/TMDB/docs/reference/configuration",
          children: "/configuration"
        }), " endpoint. Different image type has different set of sizes to choose from."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "file_path"
        }), "the path returned on a movie object, for example, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Hence the concatenated URL is formed by adding ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "base_url"
      }), ", size and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "file_path"
      }), ". For example,"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg\n"
      })
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
6272(module) {
module.exports = JSON.parse('{"id":"reference-material/working-with-image","title":"working-with-image","description":"Building an image URL","source":"@site/docs/reference-material/working-with-image.md","sourceDirName":"reference-material","slug":"/reference-material/working-with-image","permalink":"/TMDB/docs/reference-material/working-with-image","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Glossary","permalink":"/TMDB/docs/reference-material/glossary"},"next":{"title":"How This Was Built","permalink":"/TMDB/docs/how-this-was-built"}}')

},

};
;