import plugin_gridsome_plugin_flexsearch_6 from "/Users/noelaguileraterrazas/Documents/blog/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_flexsearch_6,
    options: {"collections":[{"typeName":"Post","indexName":"Post","fields":["title","author","description","date","cover_image","tags"]},{"typeName":"Pages","indexName":"Pages","fields":["title","path","keywords"]}],"searchFields":["title","description","tags","keywords"],"flexsearch":{"profile":"default"}}
  }
]
