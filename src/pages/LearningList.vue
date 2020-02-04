<template>
  <div class="bg-hero-color">
    <Layout>
      <section>
        <div class="container pt4">
          <div class="columns">
            <div class="column mt4 is-6">
              <p class="title" :class="getTheme.textcolor">Learning in public</p>
              <p class="subtitle" :class="getTheme.textcolor">
                Here's a list of subjects I want to know about
                <br />(maybe not all related to development)
                <br />I'll be writing a post of the ones I already learned
              </p>
            </div>
          </div>
          <div class="columns is-multiline pb5">
            <div class="column is-6 is-offset-3">
              <b-tabs type="is-boxed" v-model="activeTab" class="mb0i">
                <b-tab-item>
                  <template slot="header">
                    <div class="tab-header-container" :class="getTheme.bg_color">
                      <fa icon="book-open" :class="getTheme.textcolor" />
                      <span :class="getTheme.textcolor">
                        To learn
                        <b-tag rounded :class="[getTheme.bg_color, getTheme.textcolor]">3</b-tag>
                      </span>
                    </div>
                  </template>
                </b-tab-item>
                <b-tab-item :class="getTheme.bg_color">
                  <template slot="header">
                    <div class="tab-header-container" :class="getTheme.bg_color">
                      <fa icon="graduation-cap" :class="getTheme.textcolor" />
                      <span :class="getTheme.textcolor">
                        Learned
                        <b-tag rounded :class="[getTheme.bg_color, getTheme.textcolor]">5</b-tag>
                      </span>
                    </div>
                  </template>
                </b-tab-item>
              </b-tabs>
              <div v-if="activeTab == 0">
                <p>placeholder list to learn</p>
              </div>
              <div v-if="activeTab == 1">
                <p>placeholder learned</p>
              </div>
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
    title: "Learning List"
  },
  data() {
    return {
      activeTab: 0
    };
  },
  computed: {
    ...mapGetters(["getTheme"])
  }
};
</script>

<style lang="scss">
.tab-header-container {
  padding: 0.5em 1em;
  border-radius: 9px 9px 0 0;
}
.tabs.is-boxed a {
  padding: 0 !important;
}
.mb0i{
  margin-bottom: 0 !important;
}
</style>
