<template>
  <div>
    <h1 class="header">memo.</h1>
    <div>
      <h2>
        {{article.title}}
      </h2>
      <p>
        {{article.text}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";

@Component
export default class ArticlePage extends Vue {
  async asyncData({ $axios, route }) {
    const article = await $axios.get(`/articles/2`)
    return {
      article: article.data
    }
  }
}
</script>

<style scoped>
.header {
  font-size: 3.5rem;
  margin-bottom: 30px;
}
.article-list > li {
  border-top: 1px solid #e6e6e6;
}
.article-list > li:first-child {
  border-top: none;
}
.article-list > li a {
  padding: 25px 0;
  display: block;
}
.article-list .article-list-title {
  font-size: 2.2rem;
}
.article-list .article-list-text {
  font-size: 1.4rem;
  margin-top: 15px;
  color: #a7a7a7;
}
</style>
