// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Buefy from "buefy";
import "tachyons";
import "typeface-work-sans";
import DefaultLayout from "~/layouts/Default.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMugHot, faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vuex from 'vuex';

library.add(faMugHot, faMoon, faLightbulb)

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.use(Buefy, {
    defaultIconComponent: "fa",
    defaultIconPack: "fas",
  })
  Vue.component("fa", FontAwesomeIcon)
  Vue.component("Layout", DefaultLayout)
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    state:{
      mode: "light",
      bg_color: "has-background-white",
      textcolor: "has-text-primary",
      theme: "is-primary",
    },
    getters: {
      getTheme: (state) => {
        return {
          mode: state.mode,
          bg_color: state.bg_color,
          textcolor: state.textcolor,
          theme: state.theme,
        }
      },
    },
    mutations: {
      CHANGE_MODE (state, mode) {
        state.mode = mode;
      },
      CHANGE_BG (state, color) {
        state.bg_color = color;
      },
      CHANGE_TEXTCOLOR (state, color) {
        state.textcolor = color;
      },
      CHANGE_THEME (state, color) {
        state.theme = color;
      }
    },
    actions: {
      changeMode({ commit }, mode) {
        switch(mode){
          case "sepia":
            commit("CHANGE_MODE", "sepia");
            commit("CHANGE_BG", "has-background-sepia");
            commit("CHANGE_TEXTCOLOR", "has-text-dark");
            commit("CHANGE_THEME", "is-sepia");
            break;
          case "dark":
            commit("CHANGE_MODE", "dark");
            commit("CHANGE_BG", "has-background-dark");
            commit("CHANGE_TEXTCOLOR", "has-text-white");
            commit("CHANGE_THEME", "is-dark");
            break;
          case "light":
            commit("CHANGE_MODE", "light");
            commit("CHANGE_BG", "has-background-white");
            commit("CHANGE_TEXTCOLOR", "has-text-primary");
            commit("CHANGE_THEME", "is-primary");
            break;
        }
      }
    }
  });
}
