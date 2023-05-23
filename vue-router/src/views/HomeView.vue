<script>
import CoursePreview from "../components/courses/CoursePreview.vue";

export default {
  components: {
    CoursePreview
  },
  data() {
    return {
      username: "",
      server: "https://kitsu.io/api/edge/trending/anime?limit=9",
      courses: []
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList: async function () {
      this.courses = await fetch(this.server).then((res) => res.json());
      this.courses = this.courses.data;
      console.log(this.courses)
    }
  }
}
</script>
<template>
  <main>
    <section class="login-form">
      <h3>Username:</h3>
      <input placeholder="username" v-model="username">
    </section>
    <section class="courses-list container">
      <div class="row">
        <div class="col-md-4 mb-3" v-for="course in courses">
          <course-preview
              :image="course.attributes.coverImage.large"
              :description="course.attributes.synopsis"
              :title="course.attributes.titles.en"
              :course="course.attributes"
          ></course-preview>
        </div>
      </div>
    </section>
  </main>
</template>
