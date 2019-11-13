<template>
  <div>
    <h1 class="header">
      <nuxt-link to="/">Author</nuxt-link>
    </h1>

    <h2>Create Article Page</h2>

    <form @submit.prevent="submitArticle">
        <div>
            <input v-model="articleTitle" type="text">
        </div>
        <div>
            <textarea v-model="articleText" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <input type="text">
        <button>送信</button>
    </form>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"


@Component
export default class WriteArticlePage extends Vue {
    private articleTitle = ''
    private articleText = ''

    private async submitArticle() {
        await this.$axios.$post('http://localhost:4000/articles', {
          title: this.articleTitle,
          text: this.articleText,
          tagIds: [1, 2, 3]
        })
    }
}
</script>

<style scoped>
.header {
  font-size: 3.5rem;
  margin-bottom: 30px;
}

</style>
