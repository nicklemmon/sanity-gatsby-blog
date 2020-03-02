export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5c7cbbe250ff43b57caf06',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-smft2rwe',
                  apiId: '9be5cebf-29fb-4c56-ba95-2811d4cb43fe'
                },
                {
                  buildHookId: '5e5c7cbb6d2badcb5ceb0d1f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hkr31uqt',
                  apiId: '7e1cfe49-0fb4-4740-9c2a-b3cb4ba2f846'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicklemmon/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hkr31uqt.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
