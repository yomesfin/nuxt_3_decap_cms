<script setup>
const slug = useRoute().params.slug.toString().replace(/,/g, "/");
const { data: blog } = await useAsyncData(slug, () => {
  return queryContent(slug).findOne();
});

const toc = computed(() => {
  if (!blog.value) return [];
  const items = blog.value.excerpt?.children;
  if (!items) return [];
  const toc = [];
  const tags = ["h2", "h3", "h4", "h5", "h6"];
  items.forEach((item) => {
    if (tags.includes(item.tag)) {
      toc.push({
        id: item.props.id,
        title: item.props.id.toString().replace(/-/g, " "),
        depth: Number(item.tag.replace(/h/g, "")),
      });
    }
  });
  return toc;
});
</script>

<template>
  <div>
    slug page

    <!-- <ContentDoc :path="$route.params.slug"
      ></ContentDoc> -->
    <ContentRenderer :value="blog">
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </div>
</template>
