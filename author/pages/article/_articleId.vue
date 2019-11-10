<template>
  <div>
    <h1 class="header">
      <nuxt-link to="/">memo.</nuxt-link>
    </h1>
    <div>
      <h2 class="article-title">{{article.title}}</h2>
      <p class="article-updated-at">{{createdAt}}</p>
      <div class="article-text">
        <p>{{article.text}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import dayjs from "dayjs";

@Component
export default class ArticlePage extends Vue {
  async asyncData({ $axios, route }) {
    const articleId = route.params.articleId;
    const article = await $axios.get(`/articles/${articleId}`);
    return {
      article: article.data
    };
  }

  get createdAt() {
    return dayjs(this.article.createdAt).format("YYYY-MM-DD");
  }
}
</script>

<style scoped>
.header {
  font-size: 3.5rem;
  margin-bottom: 30px;
}

.article-title {
  font-size: 3.2rem;
  font-weight: 400;
}

.article-updated-at {
  font-size: 1.2rem;
  color: #a7a7a7;
  margin: 1em 1em 0 3px;
}

.article-text {
  margin-top: 50px;
}

.article-text p {
  font-size: 1.4rem;
}
</style>
