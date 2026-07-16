"use strict";
exports.ids = ["296"];
exports.modules = {
3893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_how_this_was_built_md_719_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_how_this_was_built_md_719_json__rspack_import_0 = __webpack_require__(8400);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {
	sidebar_position: 5,
	title: 'How This Was Built',
	sidebar_label: 'How This Was Built'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "What&#39;s inside",
  "id": "whats-inside",
  "level": 3
}, {
  "value": "Approach",
  "id": "approach",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "TMDB API — Documentation (Portfolio Project)\nThis is independent reference documentation for the TMDB API, created as a technical-writing portfolio piece by Preeti Sharma."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Every endpoint is tested directly in Postman, and every example response or the corresponding error code is real captured result. Anything that is not testable, or that doesn't return the expected response is excluded from the documentation. Hence, some deviation from the official API documentation is expected and intentional."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "whats-inside",
      children: "What's inside"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Overview"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Quickstart"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["API reference", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Search Movies"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Movie Details"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Popular Movies"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Discover Movies"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Movie Genres"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Configuration"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Reference material", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Working with images"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Errors"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Glossary"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "approach",
      children: "Approach"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Referred TMDB's official API documnetation website as a source of truth/API contract"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Tested every request in Postman; documented actual responses and status codes"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Reproduced error conditions deliberately to document real error bodies"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Ensured to include only the relevant error codes and conditions"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Documented non-obvious API behaviour (e.g. invalid filter values return 200, not an error)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Built with a repeatable QA checklist and designed to publish via Docusaurus"
      }), "\n"]
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
8400(module) {
module.exports = JSON.parse('{"id":"how-this-was-built","title":"How This Was Built","description":"TMDB API — Documentation (Portfolio Project)","source":"@site/docs/how-this-was-built.md","sourceDirName":".","slug":"/how-this-was-built","permalink":"/TMDB/docs/how-this-was-built","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"How This Was Built","sidebar_label":"How This Was Built"},"sidebar":"tutorialSidebar","previous":{"title":"working-with-image","permalink":"/TMDB/docs/reference-material/working-with-image"},"next":{"title":"TMDB API Documentation — Contents","permalink":"/TMDB/docs/"}}')

},

};
;