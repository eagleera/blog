<template>
  <Layout>
    <section>
      <div class="container pt4">
        <div class="columns pb5">
          <div class="column is-offset-3 is-6">
            <h1 class="f2 b">{{ $page.post.title }} </h1>
            
            <div class="content" v-html="$page.post.content" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import { debounce } from "debounce";
import PostMeta from '~/components/PostMeta'

export default {
  components: {
    PostMeta,
  },
  data() {
    return {
      searchTerm: "",
    }
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
    description
    author,
    content
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