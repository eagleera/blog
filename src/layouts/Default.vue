<template>
  <div class="layout">
    <header class="header">
      <Slide class="is-hidden-desktop">
        <a href="/knowledge">
          <span>Knowledge</span>
        </a>
        <a href="/books">
          <span>Books</span>
        </a>
        <a href="/learning-list">
          <span>Learning List</span>
        </a>
        <a href="/me-her">
          <span>Me & Her</span>
        </a>
        <a>
          <span>Sepia mode</span>
        </a>
      </Slide>
      <div class="container">
        <div class="columns is-mobile is-vcentered">
          <div class="column is-2 is-offset-2-touch">
            <a href="/">
              <g-image src="~/assets/images/logo.png" width="55" />
            </a>
          </div>
          <div class="column is-two-thirds is-hidden-touch">
            <div class="columns has-text-primary tc">
              <div class="column">
                <a class="has-text-primary" :class="{'active': ruta == '/blog'}" href="/blog">Knowledge</a>
              </div>
              <div class="column">
                <a class="has-text-primary" :class="{'active': ruta == '/books'}" href="/books">Books</a>
              </div>
              <div class="column">
                <a class="has-text-primary" :class="{'active': ruta == '/learning-list'}" href="/learning-list">Learning List</a>
              </div>
              <div class="column">
                <a class="has-text-primary" :class="{'active': ruta == '/me-her'}" href="/me-her">Her & Me</a>
              </div>
              <div class="column">
                <a class="has-text-primary">Sepia mode</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <slot />
    <footer>
      <div class="columns pt3 is-multiline">
        <div class="column is-offset-1 is-1 tc pt0 pb0">
          Built with Gridsome by Daniel Aguilera 💻 from 🇲🇽| {{ new Date().getFullYear() }}
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  data(){
    return {
      dominio: null,
      ruta: null
    }
  },
  components: {
    Slide
  },
  methods: {
    getRoute() {  
      this.ruta = this.$route.path;
    },
  },
  mounted() {
    this.getRoute();
  }
}
</script>

<style lang="scss">
//BULMA VARIABLES
$primary: #0f4c81;
$grey: #818181;
$radius: 9px;
$black: #333;
$button-border-width: 2px;
@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";

body {
  font-family: 'Work Sans', sans-serif;
  word-spacing: 0rem;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
.has-border-radius {
  border-radius: $radius;
}
.cursor-pointer{
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 81px;
}
.iniciar-sesion .dropdown-content {
  padding: 18px 12px;
  min-width: 16rem;
}
footer{
  background-color: #f5f5f5;
  img{
    max-height: 5rem;
    width: auto;
  }
}
.flex{
  display: flex !important;
}
.w24px{
  width: 24px !important;
}
.pt0{
  padding-top: 0 !important;
}
.pb0{
  padding-bottom: 0 !important;
}
.mt-20px{
  margin-top: -20px !important;
}
a.active{
  padding-bottom: 4px;
  border-bottom: 2px solid currentColor;
  display: inline-block;
  line-height: 0.85;
}
.bm-burger-button{
  position: fixed;
  z-index: 10;
  top: 26px;
}
</style>
