<template>
  <Layout>
    <section>
      <div class="container pt4">
        <div class="columns pb5">
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Flexsearch from "flexsearch";
import PostCard from '~/components/PostCard.vue'

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