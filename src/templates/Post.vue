<template>
  <Layout>
    <div class="columns mt4">
      <div class="column title-container is-offset-1 is-10">
        <div class="image">
          <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
        </div>
        <h1 class="tc b">
          {{ $page.post.title }}
        </h1>
        <p>{{ $page.post.tipo }}</p>
      </div>
    </div>
    <PostMeta :post="$page.post" />
    <div class="post">
      <div class="columns mt3">
        <div class="column is-3">
          <ul class="tc mt4 sticky top-40">
            <li class="mb3 pt1">
              <b-button 
                type="is-dark" 
                icon-right="facebook-f" 
                icon-pack="fab" />
            </li>
            <li class="mb3 pt1">
              <b-button 
                type="is-dark" 
                icon-right="youtube" 
                icon-pack="fab" />
            </li>
            <li class="pt1">
              <b-button 
                type="is-dark" 
                icon-right="globe" />
            </li>
          </ul>
        </div>
        <div class="column is-6">
          <div class="content" v-html="$page.post.content" />
        </div>
        <div class="column">
          <div class="pa5 sticky">
            <div class="card has-background-primary has-border-radius">
              <p class="pt5 pb5">Publicidad</p>
            </div>
            <p class="mb0i mt4">Selección del editor</p>
            <hr class="mt3">
            <ul>
              <li>
                <div class="flex items-center">
                  <g-image src="~/assets/images/logo.png" class="w-50"/>
                  <span>Ejemplo de titulo de noticia 1</span>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <g-image src="~/assets/images/logo.png" class="w-50"/>
                  <span>Ejemplo de titulo de noticia 1</span>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <g-image src="~/assets/images/logo.png" class="w-50"/>
                  <span>Ejemplo de titulo de noticia 1</span>
                </div>
              </li>
            </ul>
            <p class="mb0i mt4">Buscar noticias</p>
            <hr class="mt3">
            <b-field>
              <b-input placeholder="Ingrese su busqueda..."
                  type="search"
                  v-model="searchTerm"
                  @input="searchResults"
                  class="input-search mb3"
                  icon="search">
              </b-input>
            </b-field>
          </div>
        </div>
      </div>
    </div>
    <div class="post-footer mb4">
      <div class="columns mt4">
        <div class="column is-offset-3 is-6">
          <div class="card has-background-grey-lighter has-border-radius">
            <div class="columns">
              <div class="column is-3 ml2 flex items-center justify-center" v-if="$page.post.author_img">
                <img class="br-100 w-80" :src="$page.post.author_img.src" alt="author picture">
              </div>
              <div class="column">
                <p class="b">Hecho por {{ $page.post.author }}</p>
                <p class="f7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="card has-border-radius has-background-primary">
            <p class="tc b">Publicidad</p>
          </div>
        </div>
      </div>
      <section class="section" v-if="$page.post.tags[0].title == 'Testimonio'">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="title">Sé parte de nuestra red de clientes</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <b-button
                  class="mt4"
                  expanded
                  type="is-primary"
                  size="is-medium"
                >Consulta nuestros planes</b-button>
              </div>
            </div>
          </div>
          <div class="column">
            <!-- <g-image src="~/assets/images/testimonios.svg" /> -->
          </div>
        </div>
      </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import { debounce } from "debounce";
import PostMeta from '~/components/PostMeta'

export default {
  components: {
    PostMeta,
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  },
  data() {
    return {
      searchTerm: "",
    }
  },
  methods: {
    searchResults: debounce(function (e) {
      this.$router.push({path: "/buscar",  query: { search: e }})
    }, 500)
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tipo
    tags {
      id
      title
      path
    }
    description
    author
    author_img
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-footer{
  .card{
    padding: 10px;
  }
}
.title-container{
  position: relative;
  height: 50vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  .image{
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    filter: brightness(50%);
  }
  h1{
    font-size: 3rem;
    z-index: 1;
    position: relative;
    color: white;
  }
  p{
    z-index: 1;
    position: relative;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
}
.mt4{
  margin-top: 2rem !important;
}
.mb0i{
  margin-bottom: 0 !important;
}
.input-search{
    .input{
        box-shadow: none !important;
        border: none !important;
        background-color: #ececec;
        color: #333;
    }
}
.sticky{
  position: sticky;
  top: -3rem;
}
.top-40{
  top: 40px;
}
</style>