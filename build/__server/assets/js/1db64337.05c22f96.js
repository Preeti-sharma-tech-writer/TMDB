"use strict";
exports.ids = ["502"];
exports.modules = {
3022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_overview_md_1db_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_overview_md_1db_json__rspack_import_0 = __webpack_require__(1951);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {};
const contentTitle = 'Overview';

const assets = {

};



const toc = [{
  "value": "About TMDB",
  "id": "about-tmdb",
  "level": 2
}, {
  "value": "API Documentation",
  "id": "api-documentation",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "overview",
        children: "Overview"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "about-tmdb",
      children: "About TMDB"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The Movie Database (TMDB) is an entertainment explorer platform containing details about movies, tv shows, awards, people and many more. The collection of metadata also includes high resolution posters and backdrops. Released in 2008, it is currently being consumed by over 1,500,000 developers and companies. The metadata is available in over 39 international and regional languages making it accessible across 180 countries."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "api-documentation",
      children: "API Documentation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Using these APIs you can ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/TMDB/docs/reference/search-movies",
        children: "search"
      }), " for a specific movie, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/TMDB/docs/reference/popular-movies",
        children: "list"
      }), " currently popular movies, retrieve all ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/TMDB/docs/reference/movie-details",
        children: "metadata"
      }), " for a specific movie, look up the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/TMDB/docs/reference/genre-list",
        children: "list of genres"
      }), " and their codes, and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/TMDB/docs/reference/discover-movies",
        children: "discover"
      }), " movies based on numerous filters and sorting options. In order to integrate the APIs efficiently, refer the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/TMDB/docs/reference/configuration",
        children: "Configuration API"
      }), ". It provides the additional information needed to build the complete APIs.\nTo begin, refer to the Getting Started guide first. It explains how to authenticate your requests.\nIf you get stuck or need assistence, the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.themoviedb.org/talk/category/5047958519c29526b50017d6",
        children: "API Support"
      }), " forum is very active and resolves queries promptly."]
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
1951(module) {
module.exports = JSON.parse('{"id":"overview","title":"Overview","description":"About TMDB","source":"@site/docs/overview.md","sourceDirName":".","slug":"/overview","permalink":"/TMDB/docs/overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Quick Start","permalink":"/TMDB/docs/getting-started"}}')

},

};
;