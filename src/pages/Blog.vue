<template>
  <Layout>
    <section>
      <div class="container pt4">
        <div class="columns pb5">
          <Sidebar />
          <div class="column">
            <div class="columns pl4 is-multiline">
              <div class="column is-6">
                <h1 class="title mb0i">Inicio</h1>
                <p class="mt1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas optio harum aspernatur animi nostrum, laboriosam magnam sed veniam vero iusto architecto beatae fuga quo aut. Modi dolorum esse sapiente saepe?</p>
              </div>
            </div>
            <div class="columns is-multiline pl4">
              <div class="column is-8">
                <div class="card h-100 has-border-radius">
                  <div class="z-1 relative pa3 pl4 pr4 pt10rem">
                    <p class="has-text-white mb0i">NOVEDADES</p>
                    <div class="tr has-text-white fr mt3">Hace 2 días</div>
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <div class="columns is-multiline h-100 mt0 mb0">
                  <div class="column is-12 pt0">
                    <div class="card has-background-grey-lighter has-border-radius h-100">
                    </div>
                  </div>
                  <div class="column is-12 pb0">
                    <div class="card has-background-grey-lighter has-border-radius h-100">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-multiline pl4">
              <div class="column is-12">
                <h4 class="f2 fw3">Título</h4>
              </div>
              <div class="column is-6">
                <div class="card has-background-grey-lighter has-border-radius h-100">
                  <p>hola</p>
                </div>
              </div>
              <div class="column is-6">
                <div class="card has-background-grey-lighter has-border-radius h-100">
                  <p class="pt4 pb4">hola</p>
                </div>
              </div>
            </div>
            <div class="columns pl4">
              <div class="column">
                <div class="card has-border-radius h-100 has-background-primary">
                  <p class="pt5 pb5 tc has-text-white">publicidad</p>
                </div>
              </div>
            </div>
            <div class="columns is-multiline pl4">
              <div class="column is-12">
                <h4 class="f2 fw3">Noticias recomendadas</h4>
              </div>
              <div class="column is-4">
                <div class="card has-background-grey-lighter has-border-radius h-100">
                  <p class="pt4 pb4">hola</p>
                </div>
              </div>
              <div class="column is-4">
                <div class="card has-background-grey-lighter has-border-radius h-100">
                  <p>hola</p>
                </div>
              </div>
              <div class="column is-4">
                <div class="card has-background-grey-lighter has-border-radius h-100">
                  <p>hola</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query($page: Int) {
  posts: allPost(perPage: 1, page: $page, filter: { published: { eq: true }, tags: {contains: ["Post"]}}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
<static-query>
query Posts {
  posts: allPost(filter: {tags: {contains: ["Post"]}}) {
    edges {
      node {
        id
        title
        date
        path
        description
      }
    }
  }
}
</static-query>

<script>
import Flexsearch from "flexsearch";
import PostCard from '~/components/PostCard.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    PostCard,
    Sidebar
  },
  metaInfo: {
    title: 'Blog'
  },
  data() {
    return {
      index: null,
      searchTerm: "",
      results: []
    };
  },
  beforeMount() {
    this.index = new Flexsearch({
      tokenize: "forward",
      doc: {
        id: "id",
        field: [
          "title",
          "description"
        ]
      }
    });
    this.index.add(this.$static.posts.edges.map(e => e.node));
  },
  methods: {
    searchResults() {
      if (this.index === null) return [];
      this.results = this.index.search({
        query: this.searchTerm,
        limit: 10
      });
    },
    changePage(val) {
      if(val == 1){
      this.$router.push("/blog");
      }else{
        if(this.$router.currentRoute.path != ("/blog/" + val)){
          this.$router.push("/blog/" + val);
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.min-h-60vh{
  min-height: 68vh;
}
.mb0i{
  margin-bottom: 0 !important;
}
.img-blog-card{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.pt10rem{
  padding-top: 14rem;
}
.mt0{
  margin-top: 0 !important;
}
.mb0{
  margin-bottom: 0 !important;
}
</style>