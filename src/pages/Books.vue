<template>
  <div class="bg-hero-color">
    <Layout>
      <section>
        <div class="container pt4">
          <div class="columns">
            <div class="column mt4 is-6">
              <p class="title" :class="getTheme.textcolor">
                Books I've read during the current year...
              </p>
              <p class="subtitle" :class="getTheme.textcolor">Here's a list of books that I'm reading either because
                people recommend them to me, or because they were in my list
              </p>
            </div>
          </div>
          <div class="columns is-multiline pb5">
            <div class="column is-offset-3 is-6" v-for="(book, index) in books" :key="index">
              <hr class="has-background-primary">
              <div class="columns is-vcentered">
                <div class="column is-4 tc">
                  <g-image :src="book.bookimg" width="150" />
                  <small>(I read it on {{ book.read }})</small>
                  <br />
                  <small>
                    <a :href="book.link" target="_blank">
                      You can find it in Amazon here
                    </a>
                  </small>
                </div>
                <div class="column is-8">
                  <p class="title-book b f4">
                    {{ book.title }}
                    <small class="fw4 f5">by {{ book.author }}</small>
                  </p>
                  <div class="contenido mb2">
                    {{ book.review }}
                  </div>
                  <div class="key-points">
                    <p class="i b">Key points I found on this book</p>
                    <ul class="key-points" v-for="(key, index) in book.keypoints" :key="index">
                      <li>{{ key }}</li>
                    </ul>
                  </div>
                </div>
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
    title: "Books",
  },
  data() {
    return {
      books: [
        {
          "title": "Soft Skills: The Software Developer's Life Manual",
          "author": "John Sonmez",
          "read": "January 2020",
          "link": "https://www.amazon.com/-/es/gp/product/1617292397/ref=dbs_a_def_rwt_bibl_vppi_i1",
          "bookimg": "/images/books/soft-skills.jpeg",
          "review": "Even though this book use the buzz word \"Soft Skills\", I found it to be a really good book\
                    , I knew that it isn't the first book of the author and the content that I found in it can make\
                    you change your perspective about things outside your job as a programmer.",
          "keypoints": [
            "Build a reputation online",
            "Try to always apply to a job with a reference",
            "Fake it until you make it",
            "Invest as early as possible"
          ]
        },
        {
          "title": "The Productivity Project",
          "author": "Chris Bailey",
          "read": "January - February 2020",
          "link": "https://www.amazon.com/-/es/gp/product/1101904054/ref=dbs_a_def_rwt_bibl_vppi_i0",
          "bookimg": "/images/books/productivity-project.jpeg",
          "review": "Currently reading it...",
          "keypoints": [
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters(["getTheme"])
  },
}
</script>

<style lang="scss">
@import "@/scss/_colors.scss";
.key-points {
  li::before {
    content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: $primary; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: 0.3rem; /* Also needed for space (tweak if needed) */
  }
}
</style>
