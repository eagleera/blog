// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Buefy from "buefy"
import "tachyons"
import "typeface-work-sans"
import DefaultLayout from "~/layouts/Default.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { } from "@fortawesome/free-solid-svg-icons"
import { } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add()

export default function(Vue, { router, head, isClient }) {
  Vue.use(Buefy, {
    defaultIconComponent: "fa",
    defaultIconPack: "fas",
  })
  Vue.component("fa", FontAwesomeIcon)
  Vue.component("Layout", DefaultLayout)
}
