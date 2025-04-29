import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Pung/__docusaurus/debug',
    component: ComponentCreator('/Pung/__docusaurus/debug', 'eb6'),
    exact: true
  },
  {
    path: '/Pung/__docusaurus/debug/config',
    component: ComponentCreator('/Pung/__docusaurus/debug/config', '2d7'),
    exact: true
  },
  {
    path: '/Pung/__docusaurus/debug/content',
    component: ComponentCreator('/Pung/__docusaurus/debug/content', '2b5'),
    exact: true
  },
  {
    path: '/Pung/__docusaurus/debug/globalData',
    component: ComponentCreator('/Pung/__docusaurus/debug/globalData', '3c0'),
    exact: true
  },
  {
    path: '/Pung/__docusaurus/debug/metadata',
    component: ComponentCreator('/Pung/__docusaurus/debug/metadata', '803'),
    exact: true
  },
  {
    path: '/Pung/__docusaurus/debug/registry',
    component: ComponentCreator('/Pung/__docusaurus/debug/registry', '30a'),
    exact: true
  },
  {
    path: '/Pung/__docusaurus/debug/routes',
    component: ComponentCreator('/Pung/__docusaurus/debug/routes', 'c49'),
    exact: true
  },
  {
    path: '/Pung/blog',
    component: ComponentCreator('/Pung/blog', '308'),
    exact: true
  },
  {
    path: '/Pung/blog/archive',
    component: ComponentCreator('/Pung/blog/archive', '5b8'),
    exact: true
  },
  {
    path: '/Pung/blog/authors',
    component: ComponentCreator('/Pung/blog/authors', 'c42'),
    exact: true
  },
  {
    path: '/Pung/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Pung/blog/authors/all-sebastien-lorber-articles', 'df0'),
    exact: true
  },
  {
    path: '/Pung/blog/authors/yangshun',
    component: ComponentCreator('/Pung/blog/authors/yangshun', 'afe'),
    exact: true
  },
  {
    path: '/Pung/blog/first-blog-post',
    component: ComponentCreator('/Pung/blog/first-blog-post', 'c1d'),
    exact: true
  },
  {
    path: '/Pung/blog/long-blog-post',
    component: ComponentCreator('/Pung/blog/long-blog-post', 'fc1'),
    exact: true
  },
  {
    path: '/Pung/blog/mdx-blog-post',
    component: ComponentCreator('/Pung/blog/mdx-blog-post', '149'),
    exact: true
  },
  {
    path: '/Pung/blog/tags',
    component: ComponentCreator('/Pung/blog/tags', '6c5'),
    exact: true
  },
  {
    path: '/Pung/blog/tags/docusaurus',
    component: ComponentCreator('/Pung/blog/tags/docusaurus', 'b7d'),
    exact: true
  },
  {
    path: '/Pung/blog/tags/facebook',
    component: ComponentCreator('/Pung/blog/tags/facebook', '997'),
    exact: true
  },
  {
    path: '/Pung/blog/tags/hello',
    component: ComponentCreator('/Pung/blog/tags/hello', '540'),
    exact: true
  },
  {
    path: '/Pung/blog/tags/hola',
    component: ComponentCreator('/Pung/blog/tags/hola', '202'),
    exact: true
  },
  {
    path: '/Pung/blog/welcome',
    component: ComponentCreator('/Pung/blog/welcome', '5ee'),
    exact: true
  },
  {
    path: '/Pung/markdown-page',
    component: ComponentCreator('/Pung/markdown-page', 'f78'),
    exact: true
  },
  {
    path: '/Pung/docs',
    component: ComponentCreator('/Pung/docs', '683'),
    routes: [
      {
        path: '/Pung/docs',
        component: ComponentCreator('/Pung/docs', 'b82'),
        routes: [
          {
            path: '/Pung/docs',
            component: ComponentCreator('/Pung/docs', '1a4'),
            routes: [
              {
                path: '/Pung/docs/category/documentação-academica',
                component: ComponentCreator('/Pung/docs/category/documentação-academica', '76a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/category/tutorial---basics',
                component: ComponentCreator('/Pung/docs/category/tutorial---basics', 'bf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/category/tutorial---extras',
                component: ComponentCreator('/Pung/docs/category/tutorial---extras', '7ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/intro',
                component: ComponentCreator('/Pung/docs/intro', 'f1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/projeto/cap1',
                component: ComponentCreator('/Pung/docs/projeto/cap1', '2f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/projeto/considerações-finais',
                component: ComponentCreator('/Pung/docs/projeto/considerações-finais', '98c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/projeto/introdução',
                component: ComponentCreator('/Pung/docs/projeto/introdução', '30d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Pung/docs/tutorial-basics/congratulations', 'cba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Pung/docs/tutorial-basics/create-a-blog-post', '92c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Pung/docs/tutorial-basics/create-a-document', '695'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Pung/docs/tutorial-basics/create-a-page', 'd7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Pung/docs/tutorial-basics/deploy-your-site', 'bac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Pung/docs/tutorial-basics/markdown-features', '635'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Pung/docs/tutorial-extras/manage-docs-versions', 'daf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pung/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Pung/docs/tutorial-extras/translate-your-site', '6df'),
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
    path: '/Pung/',
    component: ComponentCreator('/Pung/', '579'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
