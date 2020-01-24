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
          <div class="column is-6 is-offset-2-touch">
            <a href="/">
              <g-image src="~/assets/images/logo.png" width="55" />
            </a>
          </div>
          <div class="column is-6 is-hidden-touch">
            <div class="columns has-text-primary tc">
              <div class="column">
                <a class="has-text-primary" @click="changeMode()">Sepia mode</a>
              </div>
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
                <a class="has-text-primary" :class="{'active': ruta == '/her-me'}" href="/her-me">Her & Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <slot />
    <footer>
      <div class="columns is-multiline is-vcentered h-100">
        <div class="column tc pt0 pb0 has-text-primary">
          Built with Gridsome by 
          <a href="https://twitter.com/Eagleera">Daniel Aguilera 💻</a>
          from 🇲🇽| {{ new Date().getFullYear() }}
        </div>
      </div>
      {{ getTheme }}
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
import { Slide } from 'vue-burger-menu';
import { mapGetters } from 'vuex';

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
    changeMode() {
      console.log(this.$store);
      switch(this.getTheme.mode) {
        case "sepia":
          this.$store.dispatch("changeMode", "light");
          break;
        case "light":
          this.$store.dispatch("changeMode", "dark");
          break;
        case "dark":
          this.$store.dispatch("changeMode", "sepia");
          break;
      }
    }
  },
  computed: {
    ...mapGetters([
      'getTheme'
    ])
  },
  mounted() {
    this.getRoute();
  }
}
</script>

<style lang="scss">
@import "@/scss/_colors.scss";
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
  height: 100px;
}
.iniciar-sesion .dropdown-content {
  padding: 18px 12px;
  min-width: 16rem;
}
footer{
  background-color: #f5f5f5;
  height: 80px;
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
