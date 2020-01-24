export default [
  {
    path: "/tag/:id/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/noelaguileraterrazas/Documents/blog/src/templates/Tag.vue")
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/noelaguileraterrazas/Documents/blog/src/pages/Blog.vue")
  },
  {
    path: "/blog/:title/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/noelaguileraterrazas/Documents/blog/src/templates/Post.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/noelaguileraterrazas/Documents/blog/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/noelaguileraterrazas/Documents/blog/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/noelaguileraterrazas/Documents/blog/node_modules/gridsome/app/pages/404.vue")
  }
]

