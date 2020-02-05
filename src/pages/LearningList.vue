<template>
  <div class="bg-hero-color">
    <Layout>
      <section>
        <div class="container pt4">
          <div class="columns">
            <div class="column mt4 is-6">
              <p class="title" :class="getTheme.textcolor">My Learning List</p>
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
                        <b-tag rounded :class="[getTheme.bg_color, getTheme.textcolor]">{{ total_tolearn }}</b-tag>
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
                        <b-tag rounded :class="[getTheme.bg_color, getTheme.textcolor]">{{ total_learned }}</b-tag>
                      </span>
                    </div>
                  </template>
                </b-tab-item>
              </b-tabs>
              <div v-if="activeTab == 0">
                <div v-for="list in to_learn" class="mb4" :key="list.title">
                  <p class="f2 underline" :class="getTheme.textcolor">
                    {{ list.title}}
                  </p>
                  <ul>
                    <li v-for="(item, index) in list.things" :key="index">
                      <div class="field">
                        <b-checkbox>{{ item }}</b-checkbox>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-if="activeTab == 1">
                <p>Nothing here yet :( come back soon</p>
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
      activeTab: 0,
      to_learn: [
        {
          title: "Javascript",
          things: [
            "Asynchronous functions",
            "Map, Filter & Reduce",
            "Classes"
          ]
        },
        {
          title: "Backend",
          things: [
            "GraphQL",
            "Postman"
          ]
        },
        {
          title: "DevOps",
          things: [
            "Docker",
            "Pipelines"
          ]
        }
      ],
      learned: [

      ]
    };
  },
  computed: {
    ...mapGetters(["getTheme"]),
    total_tolearn(){
      let total = 0;
      this.to_learn.forEach(element => {
        element.things.forEach(thing => {
          total++;
        });
      });
      return total;
    },
    total_learned(){
      let total = 0;
      return total;
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/_colors.scss";
.tab-header-container {
  padding: 0.5em 1em;
  border-radius: 9px 9px 0 0;
}
.tabs.is-boxed a {
  padding: 0 !important; 
  &:hover{
    border-color: $primary !important;
  }
}
.tabs.is-boxed li.is-active a{
  border-color: $primary !important;
}
.mb0i{
  margin-bottom: 0 !important;
}
</style>
