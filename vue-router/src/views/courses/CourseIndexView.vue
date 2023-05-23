<template>
  <main>
    <h1>
      {{ course.titles.en }}
    </h1>
  </main>
</template>

<script>
export default {
  name: "CourseIndexView",
  data() {
    return {
      course: Object.assign({}, JSON.parse(this.$route.params.course))
    }
  }
}
</script>

<style scoped>

</style>