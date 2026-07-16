"use strict";
exports.ids = ["823"];
exports.modules = {
7176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Home)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(5310);
/* import */ var _theme_Layout__rspack_import_3 = __webpack_require__(8328);




const skills = [
    {
        title: 'Independent Guide',
        body: 'An independent API reference for The Movie Database (TMDB), created by Preeti Sharma as a technical-writing portfolio piece.'
    },
    {
        title: 'Tested, Not Copied',
        body: 'Every endpoint is tested by the author in Postman. Every example response and error code is a real captured result.'
    },
    {
        title: 'Honest by Design',
        body: "Expect some deviation from TMDB's official documentation: anything that didn't respond as expected is either excluded or corrected to match the real results."
    }
];
const tools = [
    {
        name: 'Docusaurus',
        note: 'Site framework & docs'
    },
    {
        name: 'Markdown / MDX',
        note: 'Structured content authoring'
    },
    {
        name: 'Git & GitHub',
        note: 'Docs-as-code workflow & review'
    },
    {
        name: 'Postman',
        note: 'Endpoint testing & response capture'
    }
];
const curl = `$ curl "https://api.themoviedb.org/3/movie/550" \\
    -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
    -H "accept: application/json"`;
const resp = `{
  "id": 550,
  "title": "Fight Club",
  "release_date": "1999-10-15",
  "runtime": 139,
  "vote_average": 8.4
}`;
function CodeCard() {
    const [tab, setTab] = (0,react__rspack_import_1.useState)('curl');
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        style: {
            borderRadius: 14,
            overflow: 'hidden',
            boxShadow: '0 24px 60px -24px rgba(10,20,15,.35)',
            border: '1px solid var(--hp-line)'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '11px 14px',
                    background: '#0e1621',
                    borderBottom: '1px solid #1e2a38'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        style: {
                            width: 11,
                            height: 11,
                            borderRadius: '50%',
                            background: '#ff5f57'
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        style: {
                            width: 11,
                            height: 11,
                            borderRadius: '50%',
                            background: '#febc2e'
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        style: {
                            width: 11,
                            height: 11,
                            borderRadius: '50%',
                            background: '#28c840'
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                        style: {
                            marginLeft: 8,
                            fontFamily: 'IBM Plex Mono, monospace',
                            fontSize: 12,
                            color: '#7c8a9a'
                        },
                        children: [
                            "GET /movie/",
                            '{movie_id}'
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    display: 'flex',
                    background: '#0b131c',
                    borderBottom: '1px solid #1e2a38'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                        onClick: ()=>setTab('curl'),
                        style: {
                            padding: '9px 16px',
                            background: 'none',
                            border: 'none',
                            borderBottom: `2px solid ${tab === 'curl' ? 'var(--ifm-color-primary)' : 'transparent'}`,
                            color: tab === 'curl' ? '#e6edf5' : '#7c8a9a',
                            fontFamily: 'IBM Plex Mono, monospace',
                            fontSize: 12.5,
                            cursor: 'pointer'
                        },
                        children: "cURL"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                        onClick: ()=>setTab('res'),
                        style: {
                            padding: '9px 16px',
                            background: 'none',
                            border: 'none',
                            borderBottom: `2px solid ${tab === 'res' ? 'var(--ifm-color-primary)' : 'transparent'}`,
                            color: tab === 'res' ? '#e6edf5' : '#7c8a9a',
                            fontFamily: 'IBM Plex Mono, monospace',
                            fontSize: 12.5,
                            cursor: 'pointer'
                        },
                        children: "Response"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("pre", {
                style: {
                    margin: 0,
                    padding: 20,
                    background: '#0b131c',
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: 12.8,
                    lineHeight: 1.85,
                    color: '#c9d4e3',
                    overflow: 'auto'
                },
                children: tab === 'curl' ? curl : resp
            })
        ]
    });
}
function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_3/* ["default"] */.A, {
        title: "TMDB API Reference",
        description: "An independent, developer-first reference for the TMDB API — by Preeti Sharma",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                style: {
                    borderBottom: '1px solid var(--hp-line)'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    style: {
                        maxWidth: 1160,
                        margin: '0 auto',
                        padding: '72px 32px 68px',
                        display: 'grid',
                        gridTemplateColumns: '1.05fr 0.95fr',
                        gap: 56,
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    style: {
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        padding: '5px 12px',
                                        borderRadius: 999,
                                        background: 'var(--hp-surface)',
                                        border: '1px solid var(--hp-line)',
                                        fontSize: 12.5,
                                        fontWeight: 500,
                                        color: 'var(--hp-ink-2)',
                                        marginBottom: 22
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            style: {
                                                width: 7,
                                                height: 7,
                                                borderRadius: '50%',
                                                background: 'var(--ifm-color-primary)'
                                            }
                                        }),
                                        "A technical-writing portfolio"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                    style: {
                                        fontFamily: 'IBM Plex Serif, serif',
                                        fontWeight: 600,
                                        fontSize: 54,
                                        lineHeight: 1.05,
                                        letterSpacing: '-0.02em',
                                        margin: '0 0 20px'
                                    },
                                    children: "The Movie Database API Documentation."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    style: {
                                        fontSize: 18,
                                        lineHeight: 1.55,
                                        color: 'var(--hp-ink-2)',
                                        margin: '0 0 32px',
                                        maxWidth: 520
                                    },
                                    children: "An independent API reference guide for TMDB — architected, written, and tested end-to-end by the author."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 12,
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                            to: "/docs/overview",
                                            style: {
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 8,
                                                padding: '12px 20px',
                                                borderRadius: 10,
                                                background: 'var(--ifm-color-primary)',
                                                color: '#fff',
                                                fontSize: 15,
                                                fontWeight: 600
                                            },
                                            children: "Read the reference →"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                            href: "https://github.com/Preeti-sharma-tech-writer/TMDB",
                                            style: {
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 8,
                                                padding: '12px 20px',
                                                borderRadius: 10,
                                                background: 'var(--hp-surface)',
                                                border: '1px solid var(--hp-line)',
                                                color: 'var(--ifm-font-color-base)',
                                                fontSize: 15,
                                                fontWeight: 600
                                            },
                                            children: "View on GitHub"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 20,
                                        flexWrap: 'wrap',
                                        marginTop: 34
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    style: {
                                                        fontFamily: 'IBM Plex Serif, serif',
                                                        fontSize: 24,
                                                        fontWeight: 600
                                                    },
                                                    children: "7"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    style: {
                                                        fontSize: 12.5,
                                                        color: 'var(--hp-ink-2)'
                                                    },
                                                    children: "endpoints documented"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                width: 1,
                                                background: 'var(--hp-line)'
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    style: {
                                                        fontFamily: 'IBM Plex Serif, serif',
                                                        fontSize: 24,
                                                        fontWeight: 600
                                                    },
                                                    children: "100%"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    style: {
                                                        fontSize: 12.5,
                                                        color: 'var(--hp-ink-2)'
                                                    },
                                                    children: "tested in Postman"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                width: 1,
                                                background: 'var(--hp-line)'
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    style: {
                                                        fontFamily: 'IBM Plex Serif, serif',
                                                        fontSize: 24,
                                                        fontWeight: 600
                                                    },
                                                    children: "35+"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    style: {
                                                        fontSize: 12.5,
                                                        color: 'var(--hp-ink-2)'
                                                    },
                                                    children: "endpoints tested"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CodeCard, {})
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                style: {
                    maxWidth: 1160,
                    margin: '0 auto',
                    padding: '78px 32px'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            fontFamily: 'IBM Plex Mono, monospace',
                            fontSize: 12.5,
                            letterSpacing: '.08em',
                            textTransform: 'uppercase',
                            color: 'var(--ifm-color-primary)',
                            marginBottom: 12
                        },
                        children: "Why this reference is trustworthy"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                        style: {
                            fontFamily: 'IBM Plex Serif, serif',
                            fontWeight: 600,
                            fontSize: 32,
                            letterSpacing: '-0.01em',
                            margin: '0 0 44px',
                            maxWidth: 640
                        },
                        children: "Key Features of this Independent Guide"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 24
                        },
                        children: skills.map((s)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                style: {
                                    background: 'var(--hp-surface)',
                                    border: '1px solid var(--hp-line)',
                                    borderRadius: 14,
                                    padding: '28px 26px'
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        style: {
                                            fontFamily: 'IBM Plex Serif, serif',
                                            fontWeight: 600,
                                            fontSize: 20,
                                            margin: '0 0 10px'
                                        },
                                        children: s.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        style: {
                                            fontSize: 14.5,
                                            lineHeight: 1.6,
                                            color: 'var(--hp-ink-2)',
                                            margin: 0
                                        },
                                        children: s.body
                                    })
                                ]
                            }, s.title))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                style: {
                    maxWidth: 1160,
                    margin: '0 auto',
                    padding: '70px 32px 90px'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                        style: {
                            fontFamily: 'IBM Plex Serif, serif',
                            fontWeight: 600,
                            fontSize: 28,
                            letterSpacing: '-0.01em',
                            margin: '0 0 34px'
                        },
                        children: "Tech Stack Used to Build this Reference"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 16
                        },
                        children: tools.map((t)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                style: {
                                    background: 'var(--hp-surface)',
                                    border: '1px solid var(--hp-line)',
                                    borderRadius: 12,
                                    padding: '20px 18px'
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            fontWeight: 600,
                                            fontSize: 14.5,
                                            marginBottom: 5
                                        },
                                        children: t.name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            fontSize: 12.5,
                                            lineHeight: 1.45,
                                            color: 'var(--hp-ink-2)'
                                        },
                                        children: t.note
                                    })
                                ]
                            }, t.name))
                    })
                ]
            })
        ]
    });
}


},

};
;