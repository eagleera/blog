// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Daniel Aguilera',
  siteDescription: "Daniel Aguilera's tech blog",
  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Post',
            indexName: 'Post',
            fields: ['title', 'author', 'description', 'date', 'cover_image', 'tags']
          },
          {
            typeName: 'Pages',
            indexName: 'Pages',
            fields: ['title', 'path', 'keywords']
          }
        ],
        searchFields: ['title', 'description', 'tags', 'keywords']
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
