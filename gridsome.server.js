// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(actions => {
    const collection = actions.addCollection('Pages')
    collection.addNode({
      title: 'Beneficios',
      path: '/beneficios',
      keywords: ['core bancario', 'seguridad', 'soporte']
    })
    collection.addNode({
      title: 'FAQ',
      path: '/faq',
      keywords: ['bancaria', 'cartera', 'contabilidad', 'desarrollo', 'facturacion', 'infraestructura', 'pld', 'reportes', 'sic']
    })
    collection.addNode({
      title: 'Precios',
      path: '/precios',
      keywords: ['nube', 'servidores', 'server', 'plan', 'facturacion', 'infraestructura', 'pld', 'reportes', 'sic']
    })
    collection.addNode({
      title: 'Testimonios',
      path: '/testimonios',
      keywords: ['clientes']
    })
    collection.addNode({
      title: 'Contacto',
      path: '/contacto',
      keywords: ['contacto', 'reunion']
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
