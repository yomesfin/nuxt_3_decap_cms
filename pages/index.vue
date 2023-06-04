<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

// const { data: posts } = await useAsyncData("posts", () =>
//   $content("blog").fetch()
// );

// const {
//   data: posts,
//   pending,
//   error,
//   refresh,
// } = await useAsyncData("posts", () => $content("blog").fetch());

// console.log(posts.value);
// console.log(error.value);
// const { data } = await useAsyncData("home", () =>
//   queryContent("/api/_content/query?path=/blog").findOne()
// );

const { data: posts } = await useAsyncData("posts", () => {
  return fetchContentNavigation(queryContent("blog"));
});

const { data: qpos } = await useAsyncData("blogposts", () =>
  queryContent("/blog").find()
);
console.log("qpos", qpos.value);
</script>

<template>
  <div>
    Blogs
    <!-- <li v-for="post of posts[0].children" :key="post.slug">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </li> -->

    content
    <ContentList path="/blog" v-slot="{ list }">
      <NuxtLink
        :to="{ name: 'blogs-slug', params: { slug: article._path } }"
        v-for="article in list"
        :key="article._path"
      >
        <img :src="`../static/${article.thumbnail}`" v-if="article.thumbnail" />
        <!-- <img src="../static/img/grant.jpg" /> -->
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </NuxtLink>
    </ContentList>
  </div>
</template>
