export default [
  {
    path: "/tag/:id/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/noelaguileraterrazas/Documents/blog/src/templates/Tag.vue")
  },
  {
    path: "/blog/:title/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/noelaguileraterrazas/Documents/blog/src/templates/Post.vue")
  },
  {
    path: "/learning-list/",
    component: () => import(/* webpackChunkName: "page--src--pages--learning-list-vue" */ "/Users/noelaguileraterrazas/Documents/blog/src/pages/LearningList.vue")
  },
  {
    path: "/her-me/",
    component: () => import(/* webpackChunkName: "page--src--pages--her-me-vue" */ "/Users/noelaguileraterrazas/Documents/blog/src/pages/HerMe.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/noelaguileraterrazas/Documents/blog/src/pages/Blog.vue")
  },
  {
    path: "/books/",
    component: () => import(/* webpackChunkName: "page--src--pages--books-vue" */ "/Users/noelaguileraterrazas/Documents/blog/src/pages/Books.vue")
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

