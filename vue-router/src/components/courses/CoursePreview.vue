<template>
  <div class="card">
    <img class="card-img-top" :src="image" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">
        {{ title }}
      </h5>
      <p class="card-text course-description">
        {{ description }}
      </p>
      <router-link :to="{name:'course',params:{course:JSON.stringify(course)}}" class="btn btn-primary w-100">Ver el curso</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursePreview",
  props: {
    image: {
      type: String,
      default: "#"
    },
    description: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    course:{}
  }
}
</script>

<style scoped>
.course-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>