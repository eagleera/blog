<template>
  <div class="bg-hero-color">
    <Layout>
      <section>
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-7">
              <p class="f1 b mb2" :class="getTheme.textcolor">Hola!</p>
              <p
                class="f3 fw4 mb3"
                :class="getTheme.textcolor"
              >My Name is <span class="underline">Daniel Aguilera</span>, born and raised in Mexico.</p>
              <p
                class="subtitle"
                :class="getTheme.textcolor"
              >I often call myself a <span class="i">Fullstack Developer</span> but some people call me to fix their computers...</p>
              <p class="subtitle" :class="getTheme.textcolor">It's up to you how to call me</p>
              <div class="social-btns columns">
                <div class="is-5 column">
                  <b-button
                    type="is-primary"
                    icon-right="github-alt"
                    icon-pack="fab"
                    class="w24px mr3"
                    @click="goTo(1)"
                    rounded
                  />
                  <b-button
                    type="is-primary"
                    icon-right="twitter"
                    icon-pack="fab"
                    class="w24px mr3"
                    @click="goTo(2)"
                    rounded
                  />
                  <b-button
                    type="is-primary"
                    icon-right="linkedin-in"
                    icon-pack="fab"
                    @click="goTo(3)"
                    class="w24px"
                    rounded
                  />
                </div>
              </div>
            </div>
            <div class="column is-5 relative">
              <g-image src="~/assets/images/me.jpg" class="br-100 scale-img" />
              <g-image src="~/assets/images/blob1.svg" class="blob" width="300" />
              <g-image src="~/assets/images/blob2.svg" class="blob2" width="240" />
              <g-image src="~/assets/images/blob3.svg" class="blob3" />
            </div>
          </div>
        </div>
        <div class="columns blog-bg is-multiline" :class="getTheme.bg_color">
          <div class="column tc mt5 is-12">
            <h1 class="f1 b pt4">Latest Blog Posts</h1>
          </div>
          <div class="column is-6 is-offset-3">
            <b-field>
              <b-input 
                placeholder="Search..."
                type="search"
                expanded
                icon="search"
              />
            </b-field>
          </div>
          <div class="column is-offset-3 is-6" v-for="edge in results" :key="edge.id"
            :class="{'is-half': results.length > 1}">
            <PostCard :post="edge"/>
          </div>
        </div>
      </section>
    </Layout>
  </div>
</template>

<page-query>
query($page: Int) {
  posts: allPost(perPage: 1, page: $page) @paginate {
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
import { mapGetters } from "vuex";
import PostCard from "~/components/PostCard.vue";

export default {
  metaInfo: {
    title: "App"
  },
  data() {
    return {
      results: []
    };
  },
  components: {
    PostCard
  },
  computed: {
    ...mapGetters(["getTheme"])
  },
  methods: {
    goTo(btn) {
      switch(btn){
        case 1:
          window.open(
            "https://github.com/eagleera",
            '_blank'
          );
        case 2:
          window.open(
            "https://twitter.com/Eagleera",
            '_blank'
          );
         break;
        case 3: 
          window.open(
            "https://www.linkedin.com/in/daniel-aguilera-nd/",
            '_blank'
          );
          break;
      }
    }
  },
  mounted() {
    this.results = this.$search.search("Post");
  },
};
</script>

<style lang="scss">
.scale-img {
  transform: scale(0.8);
  position: relative;
  z-index: 2;
}
.blob {
  position: absolute;
  top: -2rem;
  right: -4rem;
  z-index: 1;
}
.blob2 {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.blob3 {
  position: absolute;
  top: 1%;
  transform: rotate(35deg) scale(2);
  right: -18%;
  // z-index: 0;
}
.blog-bg{
  background: linear-gradient(
    to top,
    rgba(15, 76, 129, .15),
    rgba(255, 255, 255, 0)
  );
  padding-bottom: 3rem;
}
</style>
