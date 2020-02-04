<template>
  <Layout>
    <section>
      <div class="container pt4">
        <div class="columns pb5">
          <Sidebar />
          <div class="column">
            <div class="columns is-multiline pl4">
              <div class="column is-12">
                <h4 class="f2 b mb2" :class="getTheme.textcolor">Take a look of all my posts
                    <a href="/blog" class="fr has-text-grey-darker">
                        <fa icon="times" size="sm" />
                    </a>
                </h4>
                <b-field>
                  <b-input placeholder="Buscar..."
                      type="search"
                      v-model="searchTerm"
                      @input="searchResults"
                      class="input-search mb3"
                      icon="search">
                  </b-input>
                </b-field>
              </div>
              <div class="columns is-multiline w-100" v-if="results.length > 0">
                <div class="column is-12" v-for="edge in results" :key="edge.id"
                :class="{'is-half': results.length > 1}">
                  
                  <PostCard :post="edge"/>
                </div>
              </div>
              <div class="column tc" v-if="results.length == 0">
                <p class="tc b f4">No se han encontrado coincidencias</p>
              </div>
            </div>
            <div class="columns">
              <div class="column mt4 is-offset-10">
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
        date
        timeToRead
        description
        cover_image
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

<script>
import Flexsearch from "flexsearch";
import PostCard from "~/components/PostCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    PostCard
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
  computed: {
    ...mapGetters(["getTheme"])
  },
  mounted() {
    this.results = this.$search.search("Post", {
      field: "tags",
    });
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