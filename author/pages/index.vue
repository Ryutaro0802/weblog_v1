<template>
  <div>
    <h1 class="header">
      <nuxt-link to="/">Author</nuxt-link>
    </h1>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import { Person } from "~/types";
import Card from "~/components/Card.vue"

@Component({
  components: {
    Card
  }
})
export default class IndexPage extends Vue {
  @State people!: Person
  private articles = []
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
.article-list > li a{
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
