import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/TMDB/blog',
    component: ComponentCreator('/TMDB/blog', 'a9b'),
    exact: true
  },
  {
    path: '/TMDB/markdown-page',
    component: ComponentCreator('/TMDB/markdown-page', '7a9'),
    exact: true
  },
  {
    path: '/TMDB/docs',
    component: ComponentCreator('/TMDB/docs', '73f'),
    routes: [
      {
        path: '/TMDB/docs',
        component: ComponentCreator('/TMDB/docs', 'b85'),
        routes: [
          {
            path: '/TMDB/docs',
            component: ComponentCreator('/TMDB/docs', '9b5'),
            routes: [
              {
                path: '/TMDB/docs/',
                component: ComponentCreator('/TMDB/docs/', 'b92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/category/api-reference',
                component: ComponentCreator('/TMDB/docs/category/api-reference', '694'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/getting-started',
                component: ComponentCreator('/TMDB/docs/getting-started', 'fc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/how-this-was-built',
                component: ComponentCreator('/TMDB/docs/how-this-was-built', '475'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/overview',
                component: ComponentCreator('/TMDB/docs/overview', 'dea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/reference-material/error',
                component: ComponentCreator('/TMDB/docs/reference-material/error', '446'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/reference-material/glossary',
                component: ComponentCreator('/TMDB/docs/reference-material/glossary', 'd15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/reference-material/working-with-image',
                component: ComponentCreator('/TMDB/docs/reference-material/working-with-image', 'dd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/reference/configuration',
                component: ComponentCreator('/TMDB/docs/reference/configuration', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/reference/discover-movies',
                component: ComponentCreator('/TMDB/docs/reference/discover-movies', 'd65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/reference/genre-list',
                component: ComponentCreator('/TMDB/docs/reference/genre-list', '77d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/reference/movie-details',
                component: ComponentCreator('/TMDB/docs/reference/movie-details', 'b2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/reference/popular-movies',
                component: ComponentCreator('/TMDB/docs/reference/popular-movies', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/TMDB/docs/reference/search-movies',
                component: ComponentCreator('/TMDB/docs/reference/search-movies', 'a1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/TMDB/',
    component: ComponentCreator('/TMDB/', 'ace'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
