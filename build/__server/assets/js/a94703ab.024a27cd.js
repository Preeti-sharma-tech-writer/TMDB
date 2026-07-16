exports.ids = ["785"];
exports.modules = {
1871(module) {
// Exports
module.exports = {
	"backToTopButton": `backToTopButton_sjWU`,
	"backToTopButtonShow": `backToTopButtonShow_xfvO`
};


},
3685(module) {
// Exports
module.exports = {
	"docMainContainer": `docMainContainer_TBSr`,
	"docMainContainerEnhanced": `docMainContainerEnhanced_lQrH`,
	"docItemWrapperEnhanced": `docItemWrapperEnhanced_JWYK`
};


},
8721(module) {
// Exports
module.exports = {
	"expandButton": `expandButton_TmdG`,
	"expandButtonIcon": `expandButtonIcon_i1dp`
};


},
5710(module) {
// Exports
module.exports = {
	"docSidebarContainer": `docSidebarContainer_YfHR`,
	"docSidebarContainerHidden": `docSidebarContainerHidden_DPk8`,
	"sidebarViewport": `sidebarViewport_aRkj`
};


},
2607(module) {
// Exports
module.exports = {
	"docRoot": `docRoot_UBD9`,
	"docsWrapper": `docsWrapper_hBAB`
};


},
5599(module) {
// Exports
module.exports = {
	"collapseSidebarButton": `collapseSidebarButton_PEFL`,
	"collapseSidebarButtonIcon": `collapseSidebarButtonIcon_kv0_`
};


},
1733(module) {
// Exports
module.exports = {
	"menu": `menu_SIkG`,
	"menuWithAnnouncementBar": `menuWithAnnouncementBar_GW3s`
};


},
6263(module) {
// Exports
module.exports = {
	"sidebar": `sidebar_njMd`,
	"sidebarWithHideableNavbar": `sidebarWithHideableNavbar_wUlq`,
	"sidebarHidden": `sidebarHidden_VK0M`,
	"sidebarLogo": `sidebarLogo_isFc`
};


},
1038(module) {
// Exports
module.exports = {
	"categoryLink": `categoryLink_byQd`,
	"categoryLinkLabel": `categoryLinkLabel_W154`
};


},
2105(module) {
// Exports
module.exports = {
	"menuHtmlItem": `menuHtmlItem_M9Kj`
};


},
1398(module) {
// Exports
module.exports = {
	"menuExternalLink": `menuExternalLink_NmtK`,
	"linkLabel": `linkLabel_WmDU`
};


},
8866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarItemsExpandedStateProvider),
  G: () => (useDocSidebarItemsExpandedState)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_theme_common_internal__rspack_import_2 = __webpack_require__(2260);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const EmptyContext = Symbol('EmptyContext');
const Context = /*#__PURE__*/ react__rspack_import_1.createContext(EmptyContext);
/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */ function DocSidebarItemsExpandedStateProvider({ children }) {
    const [expandedItem, setExpandedItem] = (0,react__rspack_import_1.useState)(null);
    const contextValue = (0,react__rspack_import_1.useMemo)(()=>({
            expandedItem,
            setExpandedItem
        }), [
        expandedItem
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
function useDocSidebarItemsExpandedState() {
    const value = (0,react__rspack_import_1.useContext)(Context);
    if (value === EmptyContext) {
        throw new _docusaurus_theme_common_internal__rspack_import_2/* .ReactContextError */.dV('DocSidebarItemsExpandedStateProvider');
    }
    return value;
}


},
4043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BackToTopButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(8287);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(5687);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(1871);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function BackToTopButton() {
    const { shown, scrollToTop } = (0,_docusaurus_theme_common_internal__rspack_import_4/* .useBackToTopButton */.H)({
        threshold: 300
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button'
        }),
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('clean-btn', _docusaurus_theme_common__rspack_import_6/* .ThemeClassNames.common.backToTopButton */.G.common.backToTopButton, (_styles_module_css__rspack_import_3_default().backToTopButton), shown && (_styles_module_css__rspack_import_3_default().backToTopButtonShow)),
        type: "button",
        onClick: scrollToTop
    });
}


},
533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocRootLayoutMain)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_3 = __webpack_require__(2473);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(3685);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocRootLayoutMain({ hiddenSidebarContainer, children }) {
    const sidebar = (0,_docusaurus_plugin_content_docs_client__rspack_import_3/* .useDocsSidebar */.t)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)((_styles_module_css__rspack_import_2_default().docMainContainer), (hiddenSidebarContainer || !sidebar) && (_styles_module_css__rspack_import_2_default().docMainContainerEnhanced)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: (0,clsx__rspack_import_4/* ["default"] */.A)('container padding-top--md padding-bottom--lg', (_styles_module_css__rspack_import_2_default().docItemWrapper), hiddenSidebarContainer && (_styles_module_css__rspack_import_2_default().docItemWrapperEnhanced)),
            children: children
        })
    });
}


},
6441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocRootLayoutSidebarExpandButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _theme_Icon_Arrow__rspack_import_3 = __webpack_require__(5117);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(8721);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocRootLayoutSidebarExpandButton({ toggleSidebar }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (_styles_module_css__rspack_import_4_default().expandButton),
        title: (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.sidebar.expandButtonTitle',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.sidebar.expandButtonAriaLabel',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        tabIndex: 0,
        role: "button",
        onKeyDown: toggleSidebar,
        onClick: toggleSidebar,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Arrow__rspack_import_3/* ["default"] */.A, {
            className: (_styles_module_css__rspack_import_4_default().expandButtonIcon)
        })
    });
}


},
2724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocRootLayoutSidebar)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_8 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(269);
/* import */ var _docusaurus_theme_common__rspack_import_9 = __webpack_require__(8287);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_5 = __webpack_require__(2473);
/* import */ var _docusaurus_router__rspack_import_6 = __webpack_require__(6347);
/* import */ var _theme_DocSidebar__rspack_import_2 = __webpack_require__(5420);
/* import */ var _theme_DocRoot_Layout_Sidebar_ExpandButton__rspack_import_3 = __webpack_require__(6441);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(5710);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({ children }) {
    const sidebar = (0,_docusaurus_plugin_content_docs_client__rspack_import_5/* .useDocsSidebar */.t)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react__rspack_import_1.Fragment, {
        children: children
    }, sidebar?.name ?? 'noSidebar');
}
function DocRootLayoutSidebar({ sidebar, hiddenSidebarContainer, setHiddenSidebarContainer }) {
    const { pathname } = (0,_docusaurus_router__rspack_import_6/* .useLocation */.zy)();
    const [hiddenSidebar, setHiddenSidebar] = (0,react__rspack_import_1.useState)(false);
    const toggleSidebar = (0,react__rspack_import_1.useCallback)(()=>{
        if (hiddenSidebar) {
            setHiddenSidebar(false);
        }
        // onTransitionEnd won't fire when sidebar animation is disabled
        // fixes https://github.com/facebook/docusaurus/issues/8918
        if (!hiddenSidebar && (0,_docusaurus_theme_common__rspack_import_7/* .prefersReducedMotion */.O)()) {
            setHiddenSidebar(true);
        }
        setHiddenSidebarContainer((value)=>!value);
    }, [
        setHiddenSidebarContainer,
        hiddenSidebar
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("aside", {
        className: (0,clsx__rspack_import_8/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_9/* .ThemeClassNames.docs.docSidebarContainer */.G.docs.docSidebarContainer, (_styles_module_css__rspack_import_4_default().docSidebarContainer), hiddenSidebarContainer && (_styles_module_css__rspack_import_4_default().docSidebarContainerHidden)),
        onTransitionEnd: (e)=>{
            if (!e.currentTarget.classList.contains((_styles_module_css__rspack_import_4_default().docSidebarContainer))) {
                return;
            }
            if (hiddenSidebarContainer) {
                setHiddenSidebar(true);
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ResetOnSidebarChange, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (0,clsx__rspack_import_8/* ["default"] */.A)((_styles_module_css__rspack_import_4_default().sidebarViewport), hiddenSidebar && (_styles_module_css__rspack_import_4_default().sidebarViewportHidden)),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebar__rspack_import_2/* ["default"] */.A, {
                        sidebar: sidebar,
                        path: pathname,
                        onCollapse: toggleSidebar,
                        isHidden: hiddenSidebar
                    }),
                    hiddenSidebar && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocRoot_Layout_Sidebar_ExpandButton__rspack_import_3/* ["default"] */.A, {
                        toggleSidebar: toggleSidebar
                    })
                ]
            })
        })
    });
}


},
7195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocRootLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_6 = __webpack_require__(2473);
/* import */ var _theme_BackToTopButton__rspack_import_2 = __webpack_require__(4043);
/* import */ var _theme_DocRoot_Layout_Sidebar__rspack_import_3 = __webpack_require__(2724);
/* import */ var _theme_DocRoot_Layout_Main__rspack_import_4 = __webpack_require__(533);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(2607);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocRootLayout({ children }) {
    const sidebar = (0,_docusaurus_plugin_content_docs_client__rspack_import_6/* .useDocsSidebar */.t)();
    const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0,react__rspack_import_1.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (_styles_module_css__rspack_import_5_default().docsWrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BackToTopButton__rspack_import_2/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_5_default().docRoot),
                children: [
                    sidebar && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocRoot_Layout_Sidebar__rspack_import_3/* ["default"] */.A, {
                        sidebar: sidebar.items,
                        hiddenSidebarContainer: hiddenSidebarContainer,
                        setHiddenSidebarContainer: setHiddenSidebarContainer
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocRoot_Layout_Main__rspack_import_4/* ["default"] */.A, {
                        hiddenSidebarContainer: hiddenSidebarContainer,
                        children: children
                    })
                ]
            })
        ]
    });
}


},
5224(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DocRoot)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(4308);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(8287);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_4 = __webpack_require__(8260);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_8 = __webpack_require__(2473);
/* import */ var _theme_DocRoot_Layout__rspack_import_2 = __webpack_require__(7195);
/* import */ var _theme_NotFound_Content__rspack_import_3 = __webpack_require__(955);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocRoot(props) {
    const currentDocRouteMetadata = (0,_docusaurus_plugin_content_docs_client__rspack_import_4/* .useDocRootMetadata */.B5)(props);
    if (!currentDocRouteMetadata) {
        // We only render the not found content to avoid a double layout
        // see https://github.com/facebook/docusaurus/pull/7966#pullrequestreview-1077276692
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_NotFound_Content__rspack_import_3/* ["default"] */.A, {});
    }
    const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_5/* .HtmlClassNameProvider */.e3, {
        className: (0,clsx__rspack_import_6/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_7/* .ThemeClassNames.page.docsDocPage */.G.page.docsDocPage),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_docs_client__rspack_import_8/* .DocsSidebarProvider */.V, {
            name: sidebarName,
            items: sidebarItems,
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocRoot_Layout__rspack_import_2/* ["default"] */.A, {
                children: docElement
            })
        })
    });
}


},
1099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CollapseButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _theme_Icon_Arrow__rspack_import_3 = __webpack_require__(5117);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(5599);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function CollapseButton({ onClick }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        type: "button",
        title: (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.sidebar.collapseButtonTitle',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.sidebar.collapseButtonAriaLabel',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('button button--secondary button--outline', (_styles_module_css__rspack_import_4_default().collapseSidebarButton)),
        onClick: onClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Arrow__rspack_import_3/* ["default"] */.A, {
            className: (_styles_module_css__rspack_import_4_default().collapseSidebarButtonIcon)
        })
    });
}


},
8741(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarDesktopContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(8287);
/* import */ var _docusaurus_theme_common_internal__rspack_import_5 = __webpack_require__(3337);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(8584);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _theme_DocSidebarItems__rspack_import_3 = __webpack_require__(8216);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(1733);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function useShowAnnouncementBar() {
    const { isActive } = (0,_docusaurus_theme_common_internal__rspack_import_5/* .useAnnouncementBar */.M)();
    const [showAnnouncementBar, setShowAnnouncementBar] = (0,react__rspack_import_1.useState)(isActive);
    (0,_docusaurus_theme_common_internal__rspack_import_6/* .useScrollPosition */.Mq)(({ scrollY })=>{
        if (isActive) {
            setShowAnnouncementBar(scrollY === 0);
        }
    }, [
        isActive
    ]);
    return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent({ path, sidebar, className }) {
    const showAnnouncementBar = useShowAnnouncementBar();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("nav", {
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.sidebar.navAriaLabel',
            message: 'Docs sidebar',
            description: 'The ARIA label for the sidebar navigation'
        }),
        className: (0,clsx__rspack_import_7/* ["default"] */.A)('menu thin-scrollbar', (_styles_module_css__rspack_import_4_default().menu), showAnnouncementBar && (_styles_module_css__rspack_import_4_default().menuWithAnnouncementBar), className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
            className: (0,clsx__rspack_import_7/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_8/* .ThemeClassNames.docs.docSidebarMenu */.G.docs.docSidebarMenu, 'menu__list'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItems__rspack_import_3/* ["default"] */.A, {
                items: sidebar,
                activePath: path,
                level: 1
            })
        })
    });
}


},
2859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(1022);
/* import */ var _theme_Logo__rspack_import_2 = __webpack_require__(5153);
/* import */ var _theme_DocSidebar_Desktop_CollapseButton__rspack_import_3 = __webpack_require__(1099);
/* import */ var _theme_DocSidebar_Desktop_Content__rspack_import_4 = __webpack_require__(8741);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(6263);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
    const { navbar: { hideOnScroll }, docs: { sidebar: { hideable } } } = (0,_docusaurus_theme_common__rspack_import_6/* .useThemeConfig */.p)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)((_styles_module_css__rspack_import_5_default().sidebar), hideOnScroll && (_styles_module_css__rspack_import_5_default().sidebarWithHideableNavbar), isHidden && (_styles_module_css__rspack_import_5_default().sidebarHidden)),
        children: [
            hideOnScroll && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Logo__rspack_import_2/* ["default"] */.A, {
                tabIndex: -1,
                className: (_styles_module_css__rspack_import_5_default().sidebarLogo)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebar_Desktop_Content__rspack_import_4/* ["default"] */.A, {
                path: path,
                sidebar: sidebar
            }),
            hideable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebar_Desktop_CollapseButton__rspack_import_3/* ["default"] */.A, {
                onClick: onCollapse
            })
        ]
    });
}
/* export default */ const __rspack_default_export = (/*#__PURE__*/react__rspack_import_1.memo(DocSidebarDesktop));


},
711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(8287);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(7000);
/* import */ var _docusaurus_theme_common_internal__rspack_import_3 = __webpack_require__(9965);
/* import */ var _theme_DocSidebarItems__rspack_import_2 = __webpack_require__(8216);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu = ({ sidebar, path })=>{
    const mobileSidebar = (0,_docusaurus_theme_common_internal__rspack_import_3/* .useNavbarMobileSidebar */.M)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_5/* .ThemeClassNames.docs.docSidebarMenu */.G.docs.docSidebarMenu, 'menu__list'),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItems__rspack_import_2/* ["default"] */.A, {
            items: sidebar,
            activePath: path,
            onItemClick: (item)=>{
                // Mobile sidebar should only be closed if the category has a link
                if (item.type === 'category' && item.href) {
                    mobileSidebar.toggle();
                }
                if (item.type === 'link') {
                    mobileSidebar.toggle();
                }
            },
            level: 1
        })
    });
};
function DocSidebarMobile(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_6/* .NavbarSecondaryMenuFiller */.GX, {
        component: DocSidebarMobileSecondaryMenu,
        props: props
    });
}
/* export default */ const __rspack_default_export = (/*#__PURE__*/react__rspack_import_1.memo(DocSidebarMobile));


},
5420(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebar)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(3741);
/* import */ var _theme_DocSidebar_Desktop__rspack_import_2 = __webpack_require__(2859);
/* import */ var _theme_DocSidebar_Mobile__rspack_import_3 = __webpack_require__(711);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocSidebar(props) {
    const windowSize = (0,_docusaurus_theme_common__rspack_import_4/* .useWindowSize */.l)();
    // Desktop sidebar visible on hydration: need SSR rendering
    const shouldRenderSidebarDesktop = windowSize === 'desktop' || windowSize === 'ssr';
    // Mobile sidebar not visible on hydration: can avoid SSR rendering
    const shouldRenderSidebarMobile = windowSize === 'mobile';
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            shouldRenderSidebarDesktop && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebar_Desktop__rspack_import_2/* ["default"] */.A, {
                ...props
            }),
            shouldRenderSidebarMobile && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebar_Mobile__rspack_import_3/* ["default"] */.A, {
                ...props
            })
        ]
    });
}


},
1636(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarItemCategory)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_14 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(2260);
/* import */ var _docusaurus_theme_common__rspack_import_10 = __webpack_require__(1022);
/* import */ var _docusaurus_theme_common__rspack_import_12 = __webpack_require__(9510);
/* import */ var _docusaurus_theme_common__rspack_import_15 = __webpack_require__(8287);
/* import */ var _docusaurus_theme_common_internal__rspack_import_11 = __webpack_require__(9209);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_9 = __webpack_require__(8260);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_13 = __webpack_require__(8866);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(5310);
/* import */ var _docusaurus_Translate__rspack_import_3 = __webpack_require__(1826);
/* import */ var _docusaurus_useIsBrowser__rspack_import_4 = __webpack_require__(9863);
/* import */ var _theme_DocSidebarItems__rspack_import_5 = __webpack_require__(8216);
/* import */ var _theme_DocSidebarItem_Link__rspack_import_6 = __webpack_require__(6620);
/* import */ var _styles_module_css__rspack_import_7 = __webpack_require__(1038);
/* import */ var _styles_module_css__rspack_import_7_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_7);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 










// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed, activePath }) {
    const wasActive = (0,_docusaurus_theme_common__rspack_import_8/* .usePrevious */.ZC)(isActive);
    const previousActivePath = (0,_docusaurus_theme_common__rspack_import_8/* .usePrevious */.ZC)(activePath);
    (0,react__rspack_import_1.useEffect)(()=>{
        const justBecameActive = isActive && !wasActive;
        const stillActiveButPathChanged = isActive && wasActive && activePath !== previousActivePath;
        if ((justBecameActive || stillActiveButPathChanged) && collapsed) {
            updateCollapsed(false);
        }
    }, [
        isActive,
        wasActive,
        collapsed,
        updateCollapsed,
        activePath,
        previousActivePath
    ]);
}
/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */ function useCategoryHrefWithSSRFallback(item) {
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_4/* ["default"] */.A)();
    return (0,react__rspack_import_1.useMemo)(()=>{
        if (item.href && !item.linkUnlisted) {
            return item.href;
        }
        // In these cases, it's not necessary to render a fallback
        // We skip the "findFirstCategoryLink" computation
        if (isBrowser || !item.collapsible) {
            return undefined;
        }
        return (0,_docusaurus_plugin_content_docs_client__rspack_import_9/* .findFirstSidebarItemLink */.Nr)(item);
    }, [
        item,
        isBrowser
    ]);
}
function CollapseButton({ collapsed, categoryLabel, onClick }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        "aria-label": collapsed ? (0,_docusaurus_Translate__rspack_import_3/* .translate */.T)({
            id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
            message: "Expand sidebar category '{label}'",
            description: 'The ARIA label to expand the sidebar category'
        }, {
            label: categoryLabel
        }) : (0,_docusaurus_Translate__rspack_import_3/* .translate */.T)({
            id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
            message: "Collapse sidebar category '{label}'",
            description: 'The ARIA label to collapse the sidebar category'
        }, {
            label: categoryLabel
        }),
        "aria-expanded": !collapsed,
        type: "button",
        className: "clean-btn menu__caret",
        onClick: onClick
    });
}
function CategoryLinkLabel({ label }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        className: (_styles_module_css__rspack_import_7_default().categoryLinkLabel),
        children: label
    });
}
function DocSidebarItemCategory(props) {
    const visibleChildren = (0,_docusaurus_plugin_content_docs_client__rspack_import_9/* .useVisibleSidebarItems */.Y)(props.item.items, props.activePath);
    if (visibleChildren.length === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocSidebarItemCategoryEmpty, {
            ...props
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocSidebarItemCategoryCollapsible, {
            ...props
        });
    }
}
function isCategoryWithHref(category) {
    return typeof category.href === 'string';
}
// If a category doesn't have any visible children, we render it as a link
function DocSidebarItemCategoryEmpty({ item, ...props }) {
    // If the category has no link, we don't render anything
    // It's not super useful to render a category you can't open nor click
    if (!isCategoryWithHref(item)) {
        return null;
    }
    // We remove props that don't make sense for a link and forward the rest
    const { type, collapsed, collapsible, items, linkUnlisted, ...forwardableProps } = item;
    const linkItem = {
        type: 'link',
        ...forwardableProps
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItem_Link__rspack_import_6/* ["default"] */.A, {
        item: linkItem,
        ...props
    });
}
function DocSidebarItemCategoryCollapsible({ item, onItemClick, activePath, level, index, ...props }) {
    const { items, label, collapsible, className, href } = item;
    const { docs: { sidebar: { autoCollapseCategories } } } = (0,_docusaurus_theme_common__rspack_import_10/* .useThemeConfig */.p)();
    const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
    const isActive = (0,_docusaurus_plugin_content_docs_client__rspack_import_9/* .isActiveSidebarItem */.w8)(item, activePath);
    const isCurrentPage = (0,_docusaurus_theme_common_internal__rspack_import_11/* .isSamePath */.ys)(href, activePath);
    const { collapsed, setCollapsed } = (0,_docusaurus_theme_common__rspack_import_12/* .useCollapsible */.u)({
        // Active categories are always initialized as expanded. The default
        // (`item.collapsed`) is only used for non-active categories.
        initialState: ()=>{
            if (!collapsible) {
                return false;
            }
            return isActive ? false : item.collapsed;
        }
    });
    const { expandedItem, setExpandedItem } = (0,_docusaurus_plugin_content_docs_client__rspack_import_13/* .useDocSidebarItemsExpandedState */.G)();
    // Use this instead of `setCollapsed`, because it is also reactive
    const updateCollapsed = (toCollapsed = !collapsed)=>{
        setExpandedItem(toCollapsed ? null : index);
        setCollapsed(toCollapsed);
    };
    useAutoExpandActiveCategory({
        isActive,
        collapsed,
        updateCollapsed,
        activePath
    });
    (0,react__rspack_import_1.useEffect)(()=>{
        if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
            setCollapsed(true);
        }
    }, [
        collapsible,
        expandedItem,
        index,
        setCollapsed,
        autoCollapseCategories
    ]);
    const handleItemClick = (e)=>{
        onItemClick?.(item);
        if (collapsible) {
            if (href) {
                // When already on the category's page, we collapse it
                // We don't use "isActive" because it would collapse the
                // category even when we browse a children element
                // See https://github.com/facebook/docusaurus/issues/11213
                if (isCurrentPage) {
                    e.preventDefault();
                    updateCollapsed();
                } else {
                    // When navigating to a new category, we always expand
                    // see https://github.com/facebook/docusaurus/issues/10854#issuecomment-2609616182
                    updateCollapsed(false);
                }
            } else {
                e.preventDefault();
                updateCollapsed();
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
        className: (0,clsx__rspack_import_14/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_15/* .ThemeClassNames.docs.docSidebarItemCategory */.G.docs.docSidebarItemCategory, _docusaurus_theme_common__rspack_import_15/* .ThemeClassNames.docs.docSidebarItemCategoryLevel */.G.docs.docSidebarItemCategoryLevel(level), 'menu__list-item', {
            'menu__list-item--collapsed': collapsed
        }, className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (0,clsx__rspack_import_14/* ["default"] */.A)('menu__list-item-collapsible', {
                    'menu__list-item-collapsible--active': isCurrentPage
                }),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                        className: (0,clsx__rspack_import_14/* ["default"] */.A)((_styles_module_css__rspack_import_7_default().categoryLink), 'menu__link', {
                            'menu__link--sublist': collapsible,
                            'menu__link--sublist-caret': !href && collapsible,
                            'menu__link--active': isActive
                        }),
                        onClick: handleItemClick,
                        "aria-current": isCurrentPage ? 'page' : undefined,
                        role: collapsible && !href ? 'button' : undefined,
                        "aria-expanded": collapsible && !href ? !collapsed : undefined,
                        href: collapsible ? hrefWithSSRFallback ?? '#' : hrefWithSSRFallback,
                        ...props,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CategoryLinkLabel, {
                            label: label
                        })
                    }),
                    href && collapsible && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CollapseButton, {
                        collapsed: collapsed,
                        categoryLabel: label,
                        onClick: (e)=>{
                            e.preventDefault();
                            updateCollapsed();
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_12/* .Collapsible */.N, {
                lazy: true,
                as: "ul",
                className: "menu__list",
                collapsed: collapsed,
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItems__rspack_import_5/* ["default"] */.A, {
                    items: items,
                    tabIndex: collapsed ? -1 : 0,
                    onItemClick: onItemClick,
                    activePath: activePath,
                    level: level + 1
                })
            })
        ]
    });
}


},
6182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarItemHtml)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(8287);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(2105);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocSidebarItemHtml({ item, level, index }) {
    const { value, defaultStyle, className } = item;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.docs.docSidebarItemLink */.G.docs.docSidebarItemLink, _docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.docs.docSidebarItemLinkLevel */.G.docs.docSidebarItemLinkLevel(level), defaultStyle && [
            (_styles_module_css__rspack_import_2_default().menuHtmlItem),
            'menu__list-item'
        ], className),
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: value
        }
    }, index);
}


},
6620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarItemLink)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(8287);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_5 = __webpack_require__(8260);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(5310);
/* import */ var _docusaurus_isInternalUrl__rspack_import_6 = __webpack_require__(8310);
/* import */ var _theme_Icon_ExternalLink__rspack_import_3 = __webpack_require__(2035);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(1398);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function LinkLabel({ label }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        className: (_styles_module_css__rspack_import_4_default().linkLabel),
        children: label
    });
}
function DocSidebarItemLink({ item, onItemClick, activePath, level, index, ...props }) {
    const { href, label, className, autoAddBaseUrl } = item;
    const isActive = (0,_docusaurus_plugin_content_docs_client__rspack_import_5/* .isActiveSidebarItem */.w8)(item, activePath);
    const isInternalLink = (0,_docusaurus_isInternalUrl__rspack_import_6/* ["default"] */.A)(href);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_8/* .ThemeClassNames.docs.docSidebarItemLink */.G.docs.docSidebarItemLink, _docusaurus_theme_common__rspack_import_8/* .ThemeClassNames.docs.docSidebarItemLinkLevel */.G.docs.docSidebarItemLinkLevel(level), 'menu__list-item', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
            className: (0,clsx__rspack_import_7/* ["default"] */.A)('menu__link', !isInternalLink && (_styles_module_css__rspack_import_4_default().menuExternalLink), {
                'menu__link--active': isActive
            }),
            autoAddBaseUrl: autoAddBaseUrl,
            "aria-current": isActive ? 'page' : undefined,
            to: href,
            ...isInternalLink && {
                onClick: onItemClick ? ()=>onItemClick(item) : undefined
            },
            ...props,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LinkLabel, {
                    label: label
                }),
                !isInternalLink && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_ExternalLink__rspack_import_3/* ["default"] */.A, {})
            ]
        })
    }, label);
}


},
4023(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _theme_DocSidebarItem_Category__rspack_import_2 = __webpack_require__(1636);
/* import */ var _theme_DocSidebarItem_Link__rspack_import_3 = __webpack_require__(6620);
/* import */ var _theme_DocSidebarItem_Html__rspack_import_4 = __webpack_require__(6182);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocSidebarItem({ item, ...props }) {
    switch(item.type){
        case 'category':
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItem_Category__rspack_import_2/* ["default"] */.A, {
                item: item,
                ...props
            });
        case 'html':
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItem_Html__rspack_import_4/* ["default"] */.A, {
                item: item,
                ...props
            });
        case 'link':
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItem_Link__rspack_import_3/* ["default"] */.A, {
                item: item,
                ...props
            });
    }
}


},
8216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_3 = __webpack_require__(8260);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_4 = __webpack_require__(8866);
/* import */ var _theme_DocSidebarItem__rspack_import_2 = __webpack_require__(4023);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function DocSidebarItems({ items, ...props }) {
    const visibleItems = (0,_docusaurus_plugin_content_docs_client__rspack_import_3/* .useVisibleSidebarItems */.Y)(items, props.activePath);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_docs_client__rspack_import_4/* .DocSidebarItemsExpandedStateProvider */.A, {
        children: visibleItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItem__rspack_import_2/* ["default"] */.A, {
                item: item,
                index: index,
                ...props
            }, index))
    });
}
// Optimize sidebar at each "level"
/* export default */ const __rspack_default_export = (/*#__PURE__*/(0,react__rspack_import_1.memo)(DocSidebarItems));


},
5117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconArrow)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconArrow(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        width: "20",
        height: "20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
            fill: "#7a7a7a",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"
                })
            ]
        })
    });
}


},
955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (NotFoundContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _theme_Heading__rspack_import_3 = __webpack_require__(2072);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function NotFoundContent({ className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)('container margin-vert--xl', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "col col--6 col--offset-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_3/* ["default"] */.A, {
                        as: "h1",
                        className: "hero__title",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.NotFound.title",
                            description: "The title of the 404 page",
                            children: "Page Not Found"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.NotFound.p1",
                            description: "The first paragraph of the 404 page",
                            children: "We could not find what you were looking for."
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.NotFound.p2",
                            description: "The 2nd paragraph of the 404 page",
                            children: "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
                        })
                    })
                ]
            })
        })
    });
}


},
5687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  H: () => (useBackToTopButton)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
/* import */ var _utils_scrollUtils__rspack_import_1 = __webpack_require__(8584);
/* import */ var _utils_useLocationChange__rspack_import_2 = __webpack_require__(8398);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


/** Wires the logic for the back to top button. */ function useBackToTopButton({ threshold }) {
    const [shown, setShown] = (0,react__rspack_import_0.useState)(false);
    const isFocusedAnchor = (0,react__rspack_import_0.useRef)(false);
    const { startScroll, cancelScroll } = (0,_utils_scrollUtils__rspack_import_1/* .useSmoothScrollTo */.gk)();
    (0,_utils_scrollUtils__rspack_import_1/* .useScrollPosition */.Mq)(({ scrollY: scrollTop }, lastPosition)=>{
        const lastScrollTop = lastPosition?.scrollY;
        // Component is just being mounted. Not really a scroll event from the user.
        // Ignore it.
        if (!lastScrollTop) {
            return;
        }
        if (isFocusedAnchor.current) {
            // This scroll position change is triggered by navigating to an anchor.
            // Ignore it.
            isFocusedAnchor.current = false;
        } else if (scrollTop >= lastScrollTop) {
            // The user has scrolled down to "fight against" the animation. Cancel any
            // animation under progress.
            cancelScroll();
            setShown(false);
        } else if (scrollTop < threshold) {
            // Scrolled to the minimum position; hide the button.
            setShown(false);
        } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
            setShown(true);
        }
    });
    (0,_utils_useLocationChange__rspack_import_2/* .useLocationChange */.$)((locationChangeEvent)=>{
        if (locationChangeEvent.location.hash) {
            isFocusedAnchor.current = true;
            setShown(false);
        }
    });
    return {
        shown,
        scrollToTop: ()=>startScroll(0)
    };
} //# sourceMappingURL=useBackToTopButton.js.map


},

};
;