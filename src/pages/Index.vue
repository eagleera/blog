<template>
  <div class="bg-hero-color">
    <Layout>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-7">
              <p class="title" :class="getTheme.textcolor">Hola!</p>
              <p
                class="subtitle"
                :class="getTheme.textcolor"
              >My Name is Daniel Aguilera, originally from México.</p>
              <p
                class="subtitle"
                :class="getTheme.textcolor"
              >I often call myself a Fullstack Developer but some people call me to fix their computers...</p>
              <p class="subtitle" :class="getTheme.textcolor">It's up to you how to call me</p>
              <div class="social-btns columns">
                <div class="is-5 column">
                  <b-button
                    type="is-primary"
                    icon-right="github-alt"
                    icon-pack="fab"
                    class="w24px mr3"
                    rounded
                  />
                  <b-button
                    type="is-primary"
                    icon-right="twitter"
                    icon-pack="fab"
                    class="w24px mr3"
                    rounded
                  />
                  <b-button
                    type="is-primary"
                    icon-right="linkedin-in"
                    icon-pack="fab"
                    class="w24px"
                    rounded
                  />
                </div>
              </div>
            </div>
            <div class="column is-5 relative">
              <g-image src="~/assets/images/me.jpg" class="br-100 scale-img" />
              <g-image src="~/assets/images/blob1.svg" class="blob" width="300" />
              <g-image src="~/assets/images/blob2.svg" class="blob2" width="180" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  metaInfo: {
    title: "App"
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getTheme"])
  }
};
</script>

<style lang="scss">
.scale-img {
  transform: scale(0.8);
  position: relative;
  z-index: 1;
}
.blob {
  position: absolute;
  top: -2rem;
  right: -4rem;
  z-index: 0;
}
.blob2 {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
}
</style>
