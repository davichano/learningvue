<script>
import CoursePreview from "../components/courses/CoursePreview.vue";
import {mapStores} from 'pinia'
import {useCoursesStore} from "../stores/CoursesStore";

export default {
  components: {
    CoursePreview
  },
  data() {
    return {
      username: "",
    }
  },
  computed: {
    ...mapStores(useCoursesStore)
  },
  created() {
    this.coursesStoreStore.getList();
  },
  methods: {}
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
        <div class="col-md-4 mb-3" v-for="course in coursesStoreStore.courses">
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
