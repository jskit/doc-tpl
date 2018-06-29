<template>
  <section v-if="title" class="kit-doc-title">
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'kit-doc-title',

  props: {
    title: String,
  },
}
</script>
