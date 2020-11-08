<template>
  <div class="mt0 mb0 content-box pa2 has-border-radius card blog-card">
    <a :href="post.path">
      <div class="columns is-multiline">
        <div class="column is-12 flex flex-column justify-center">
          <p class="title-content has-text-white">NOVEDADES</p>
          <hr class="has-background-warning" />
          <p class="intro has-text-white" v-html="post.title" />
          <div class="card-info has-text-white" v-html="post.description" />
        </div>
        <div class="columns is-3">
          
        </div>
      </div>
      <div class="gradient-overlay"></div>
      <div class="color-overlay"></div>
    </a>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ["post"]
};
</script>

<style lang="scss">
@import "@/scss/_colors.scss";
.content-box {
  transition: all 0.2s ease-in;
  &:hover {
    background-color: #ececec;
  }
}
.blog-card {
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  position: relative;
  min-height: 30rem;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg)
    no-repeat;
  background-size: cover;
  .color-overlay {
    /* Rectangle 11: */
    background: rgba(84, 104, 110, 0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    border-radius: 9px;
    top: 0;
    left: 0;
    transition: all 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  .title-content {
    font-size: 20px;
    margin-top: 2rem;
    font-weight: 500;
    letter-spacing: 2px;
  }
  hr {
    width: 50px;
    height: 3px;
    margin: 20px auto;
    border: 0;
  }
  .intro {
    margin: 0 auto;
    font-size: 1.15rem;
    font-style: italic;
    line-height: 18px;
  }
  &:hover {
    .card-info {
      opacity: 1;
      bottom: 3rem;
    }
    .color-overlay {
      background: rgba(84, 104, 110, 0.8);
    }
  }
  .card-info{
    width: 100%;
    position: absolute;
    bottom: 100px;
    left: 0;
    margin: 0 auto;
    font-style: 16px;
    line-height: 24px;
    z-index: 20;
    opacity: 0;
    transition: bottom .3s, opacity .3s cubic-bezier(.33,.66,.66,1);
  }
}
</style>