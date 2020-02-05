<template>
  <div class="mt0 mb0 content-box pa2 has-border-radius card">
    <a :href="post.path">
      <div class="columns">
        <div class="column is-3" v-if="post.cover_image">
          <g-image :src="post.cover_image" class="has-border-radius" />
        </div>
        <div class="column is-9 flex flex-column justify-center">
          <p class="has-text-primary" v-if="post.index == 'Post'">NOVEDADES</p>
          <p class="has-text-primary" v-if="post.index == 'Pages'">PAGINA</p>
          <h2 class="b has-text-dark f2" v-html="post.title" />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.content-box{
  transition: all 0.2s ease-in;
  &:hover{
    background-color: #ececec;

  }
}
</style>