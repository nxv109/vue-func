<template>
  <div class="hello">
    <h1 class="alg-center">{{ msg.toUpperCase() }}</h1>
    <div v-if="loading">Loading...</div>
    <section class="article" v-for="(article, index) in articles" :key="index">
      <router-link
        class="alg-center"
        :to="{ path: 'p', query: { article: article } }"
        >{{ article.title }}</router-link
      >
      <p v-html="article.content"></p>
      <footer>
        <i>{{ article.author }}</i>
      </footer>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Article',
  data() {
    return {
      msg: 'Articles',
      articles: [],
      loading: true,
    };
  },
  mounted() {
    fetch(
      'http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-23&sortBy=publishedAt&apiKey=66efe02af970440aa1d1c7ec1c5d8d9d',
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(res => {
        this.articles = res.articles;
        this.loading = false;
      });
  },
};
</script>
<!-- Thêm thuộc tính "scoped" để chỉ giới hạn CSS cho thành phần này -->
<style scoped>
.article {
  padding: 1rem;
  box-shadow: 0 0 15px 1px #f0eeee;
  cursor: pointer;
  border-radius: 5px;
}

.article a {
  color: black;
  font-size: 2rem;
  text-decoration: none;
  transition: 0.5s;
}

.article:not(:last-child) {
  margin-bottom: 1rem;
}

.article > *:not(:last-child) {
  margin-bottom: 1rem;
}

.article:hover a {
  color: #f07814;
}
</style>
