<template>
  <article class="hello">
    <header>
      <h1 class="alg-center">{{ article.title }}</h1>
      <span
        >Author: <b>{{ article.author }}</b></span
      >
    </header>
    <section class="article">
      <figure>
        <div v-if="article.urlToImage">
          <img :src="article.urlToImage" :alt="article.title" />
        </div>
        <div v-else>
          <span
            style="background: #c1c0bd4f; color: #000; border-radius: 5px; padding: 5px; margin-top: 1rem; display: block; min-height: 50vh;"
            >.......</span
          >
        </div>
        <figcaption class="alg-center">{{ article.title }}</figcaption>
      </figure>
      <p>{{ article.content }}</p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ArticleDetail',
  data() {
    return {
      msg: 'Article detail',
      article: this.$route.query.article,
    };
  },
  method: {
    a() {
      console.log(this.$route.query.articleId);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
  margin-top: 1rem;
}

figcaption {
  font-style: italic;
}
</style>
